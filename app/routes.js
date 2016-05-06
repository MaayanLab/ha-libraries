var express = require('express');
var axios = require('axios');
var libraries = require('./libraries');

var app = express.Router();
var GENES = [];

var oneDayInSec = 1000 * 60 * 60 * 24;

function getGenes(cb) {
  gettingGenes = true;
  axios
    .get('http://amp.pharm.mssm.edu/Enrichr/json/genemap.json?_=1442798351897')
    .then(function(response) {
      GENES = response.data;
      if (cb) {
        cb(response.data);
      }
    })
    .catch(function() {
      console.error('Erroring getting genes from Enrichr.');
      if (cb) {
        cb();
      }
    });
}

getGenes();
setInterval(getGenes, oneDayInSec);

app.get('/genes', function(req, res) {
  if (!GENES.length) {
    getGenes(function(respGenes) {
      if (respGenes) {
        res.status(200).send(respGenes);
      } else {
        res.status(500).send('An error occurred obtaining genes.');
      }
    });
  } else {
    res.status(200).send(GENES);
  }
})

app.get('/results', function(req, res) {
  var inputGene;
  if (!req.query.gene) {
    res.status(400).send('Gene query parameter required!');
    return;
  } else {
    inputGene = req.query.gene;
  }
  var enrichrUrl = 'http://amp.pharm.mssm.edu/Enrichr/genemap?gene=' +
    inputGene + '&setup=true&json=true&_=1442611548980';
  axios
    .get(enrichrUrl)
    .then(function(resp) {
      var response = resp.data;
      var results = [];
      response.categories.forEach(function(catObj) {
        var newLib = {
          type: catObj.name,
          libraries: []
        };
        catObj.libraries.forEach(function(categoryObj) {
          for (var libraryName in response.gene) {
            if (response.gene.hasOwnProperty(libraryName)) {
              if (categoryObj.name === libraryName) {
                var name = libraryName.replace(/_/g, ' ');
                var lib = libraries[name] || {};
                var useTermName = lib.useTermName || false;
                var idName = lib.idName || '';
                var idRegExp = lib.idRegExp || '';
                var idRegExpFlag = lib.idRegExpFlag || '';
                var baseUrl = lib.baseUrl || '';
                var description = '';
                if (lib.description) {
                  description = lib.description.replace(/\{0\}/, inputGene);
                }
                categoryObj.name = name;
                categoryObj.idName = idName;
                categoryObj.idRegExp = idRegExp;
                categoryObj.idRegExpFlag = idRegExpFlag;
                categoryObj.baseUrl = baseUrl;
                categoryObj.useTermName = useTermName;
                categoryObj.description = description;
                categoryObj.terms = response.gene[libraryName];
                newLib.libraries.push(categoryObj);
              }
            }
          }
        });
        if (newLib.libraries.length) {
          results.push(newLib);
        }
      });
      res.status(200).send(results);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send('An error occurred obtaining results.');
    });
});

module.exports = app;
