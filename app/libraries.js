module.exports = {
  'Achilles fitness decrease': {
    description: 'Knockdown genes that decreased cell viability of cancer cell lines from the Achillis project.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Achilles fitness increase': {
    description: 'Knockdown genes that increased cell viability of cancer cell lines from the Achillis project.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Aging Perturbations up': {
    description: 'Gene expression signatures extracted from GEO comparing young human or mouse tissues to old tissues. "Young" meaning from young adults and not from tissue collected from organisms that still undergo development and maturation.',
  },
  'Aging Perturbations down': {
    description: 'Gene expression signatures extracted from GEO comparing young human or mouse tissues to old tissues. "Young" meaning from young adults and not from tissue collected from organisms that still undergo development and maturation.',
  },
  'Allen Brain Atlas up': {
    description: 'Down regulated genes across brain regions profiled by the Allen Brain Atlas.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Allen Brain Atlas down': {
    description: 'Up regulated genes across brain regions profiled by the Allen Brain Atlas.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'BioCarta 2013': {
    description: '2013 version of the Biocarta pathways gene set library.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: 'http://cgap.nci.nih.gov/Pathways/BioCarta/'
  },
  'BioCarta 2015': {
    description: '2015 version of the Biocarta pathways gene set library.',
    idName: 'View on BioCarta:',
    idRegExp: '',
    idRegExpFlag: '',
    useTermName: true,
    baseUrl: 'http://cgap.nci.nih.gov/Pathways/PathwaysByKeyword?PATH_KEY=',
    homepage: 'http://cgap.nci.nih.gov/Pathways/BioCarta/'
  },
  'BioCarta 2016': {
    description: 'Metabolic pathways from BioCarta.',
    idName: 'View Pathway',
    idRegExp: 'h_[a-zA-Z0-9]*',
    idRegExpFlag: 'i',
    baseUrl: 'http://cgap.nci.nih.gov/Pathways/BioCarta/',
    homepage: 'http://cgap.nci.nih.gov/Pathways/BioCarta/'
  },
  'Cancer Cell Line Encyclopedia': {
    description: 'Up regulated genes across many cancer cell lines from CCLE.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'ChEA 2013': {
    description: 'ChEA contains results from transcription factor ChIP-seq studies extracted from supporting materials of publications. Each entry has the transcription factor, PMID, cell type and organism. A peak at the promoter of gene {0} was detected in each study.',
    idName: 'PubMed ID',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/?term=',
    homepage: ''
  },
  'ChEA 2015': {
    description: 'ChEA contains results from transcription factor ChIP-seq studies extracted from supporting materials of publications. Each entry has the transcription factor, PMID, cell type and organism. A peak at the promoter of gene {0} was detected in each study.',
    idName: 'PubMed ID',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/?term=',
    homepage: ''
  },
  'Chromosome Location': {
    description: 'Chromosome segment location of human genes.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  CORUM: {
    description: 'Protein complexes identified by mass spec from the CORUM database.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  dbGaP: {
    description: 'The database of Genotypes and Phenotypes (dbGaP) was developed to archive and distribute the data and results from studies that have investigated the interaction of genotype and phenotype in Humans.',
  },
  'Disease Perturbations from GEO down': {
    description: 'Gene sets extracted from GEO comparing normal vs. diseased tissues.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'Disease Signatures from GEO down 2014': {
    description: 'Legacy version of the disease sigantures extracted from GEO up genes gene set library.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'Disease Perturbations from GEO up': {
    description: 'Gene sets extracted from GEO comparing normal vs. diseased tissues.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'Disease Signatures from GEO up 2014': {
    description: 'Legacy version of the disease sigantures extracted from GEO down genes gene set library.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'Drug Perturbations from GEO 2014': {
    description: 'Legacy version of the drug perturbation extracted from GEO gene set library.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'Drug Perturbations from GEO down': {
    description: 'Gene sets extracted from GEO comparing cells before and after drug treatment.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'Drug Perturbations from GEO up': {
    description: 'Gene sets extracted from GEO comparing cells before and after drug treatment.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'ENCODE Histone Modifications 2013': {
    description: 'Legacy version of the ENCODE histome modifications gene set library.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'ENCODE Histone Modifications 2015': {
    description: 'Processed ChIP-seq data from the ENCODE project to associate detected peaks near genes.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'ENCODE TF ChIP-seq 2014': {
    description: 'Legacy version of the ECONDE transcription factors gene set library.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'ENCODE TF ChIP-seq 2015': {
    description: 'Processed ChIP-seq data from the ENCODE project to associate detected peaks near genes.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Epigenomics Roadmap HM ChIP-seq': {
    description: 'Processed ChIP-seq data from the Epigenomics Roadmap project to associate detected peaks near genes.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  ESCAPE: {
    description: 'Gene sets collected for the ESCAPE stem cell focused database.',
    idName: 'PubMed ID',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/?term=',
    homepage: ''
  },
  'Genes Associated with NIH Grants': {
    description: 'Gene set created by converting publications associated with NIH grants to genes using GeneRIF.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  GeneSigDB: {
    idName: 'Signature ID',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://genesigdb.org/genesigdb/signaturedetail.jsp?signatureId=',
    homepage: '',
    useTermName: true,
    description: 'GeneSigDB is a database of gene signatures that have been extracted and manually curated from the published literature. It provides a standardized resource of published prognostic, diagnostic and other gene signatures of cancer and related disease to the community so they can compare the predictive power of gene signatures or use these in gene set enrichment analysis.'
  },
  'Genome Browser PWMs': {
    description: 'Using a published list from the UCSC Genome Browser, gene {0} was associated with these binding motifs.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'GO Biological Process 2013': {
    description: 'Legacy version of the GO biological process gene set library.',
    idName: 'GO',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://amigo.geneontology.org/amigo/term/GO:',
    homepage: ''
  },
  'GO Biological Process 2015': {
    description: 'Gene Ontology Biological Processes where the ontology tree was cut at an intermediate level to generate gene sets',
    idName: 'GO',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://amigo.geneontology.org/amigo/term/GO:',
    homepage: ''
  },
  'GO Cellular Component 2013': {
    description: 'Legacy version of the GO cellular component gene set library.',
    idName: 'GO',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://amigo.geneontology.org/amigo/term/GO:',
    homepage: ''
  },
  'GO Cellular Component 2015': {
    description: 'Gene Ontology Cellular Components where the ontology tree was cut at an intermediate level to generate gene sets',
    idName: 'GO',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://amigo.geneontology.org/amigo/term/GO:',
    homepage: ''
  },
  'GO Molecular Function 2013': {
    description: 'Legacy version of the GO molecular functions gene set library.',
    idName: 'GO',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://amigo.geneontology.org/amigo/term/GO:',
    homepage: ''
  },
  'GO Molecular Function 2015': {
    description: 'Gene Ontology Molecular Functions where the ontology tree was cut at an intermediate level to generate gene sets',
    idName: 'GO',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://amigo.geneontology.org/amigo/term/GO:',
    homepage: ''
  },
  'GTEx Tissue Sample Gene Expression Profiles up': {
    description: 'The Genotype-Tissue Expression (GTEx) project aims to provide to the scientific community a resource with which to study human gene expression and regulation and its relationship to genetic variation. This project will collect and analyze multiple human tissues from donors who are also densely genotyped, to assess genetic variation within their genomes.',
  },
  'GTEx Tissue Sample Gene Expression Profiles down': {
    description: 'The Genotype-Tissue Expression (GTEx) project aims to provide to the scientific community a resource with which to study human gene expression and regulation and its relationship to genetic variation. This project will collect and analyze multiple human tissues from donors who are also densely genotyped, to assess genetic variation within their genomes.',
  },
  'HMDB Metabolites': {
    description: 'Metabolites that interact with human genes.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  HomoloGene: {
    description: 'Gene sets created based on their evolutionary age.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Human Gene Atlas': {
    description: 'Up regulated genes in human tissues from BioGPS.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Human Phenotype Ontology': {
    description: 'HPO is an effort to organize human phenotypes into an ontology.',
    idName: 'View on HPO\'s Website',
    idRegExp: 'HP:[0-9]{1,8}',
    idRegExpFlag: 'i',
    baseUrl: 'http://compbio.charite.de/hpoweb/showterm?id=',
    homepage: ''
  },
  HumanCyc: {
    description: 'Metabolic pathways from HumanCyc.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'KEA 2013': {
    description: 'Legacy version of the Kinase Enrichment Analysis database gene set library.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'KEA 2015': {
    description: 'Kinase enrichment analysis (KEA) database of kinase-substrate interactions extracted from literature.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'KEGG 2013': {
    description: '2013 version of KEGG\'s cell signaling pathway database.',
    idName: 'View on KEGG Website',
    idRegExp: 'hsa[0-9]{5}',
    idRegExpFlag: 'i',
    baseUrl: 'http://www.genome.jp/kegg-bin/show_pathway?',
    homepage: ''
  },
  'KEGG 2015': {
    description: '2015 version of KEGG\'s cell signaling pathway database.',
    idName: 'View on KEGG Website',
    idRegExp: '',
    idRegExpFlag: '',
    useTermName: true,
    baseUrl: 'http://www.genome.jp/dbget-bin/www_bfind_sub?mode=bfind&max_hit=1000&dbkey=kegg&keywords=',
    homepage: ''
  },
  'KEGG 2016': {
    description: 'KEGG\'s cell signaling pathway database.',
    idName: 'View on KEGG Website',
    idRegExp: 'hsa[0-9]{5}',
    idRegExpFlag: 'i',
    baseUrl: 'http://www.genome.jp/kegg-bin/show_pathway?',
    homepage: ''
  },
  'Kinase Perturbations from GEO': {
    description: 'Gene expression signatures extracted from the GEO database for kinase gene perturbations.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'Kinase Perturbations from L1000': {
    description: 'Metabolic pathways from Kinase Perturbations from L1000.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Ligand Perturbations up': {
    description: 'Gene expression signuatures extracted from GEO comparing human or mouse cells from before and after treatment with endogenous ligands.',
  },
  'Ligand Perturbations down': {
    description: 'Gene expression signuatures extracted from GEO comparing human or mouse cells from before and after treatment with endogenous ligands.',
  },
  'LINCS L1000 Chem Pert up': {
    description: 'L1000 is a gene expression profiling assay based on the direct measurement of a reduced representation of 1000 genes to represent the transcriptome and computational inference of the portion of the transcriptome not explicitly measured.',
  },
  'LINCS L1000 Chem Pert down': {
    description: 'L1000 is a gene expression profiling assay based on the direct measurement of a reduced representation of 1000 genes to represent the transcriptome and computational inference of the portion of the transcriptome not explicitly measured.',
  },
  'MCF7 Perturbations up': {
    description: 'Gene expression signatures extracted from GEO comparing before and after any perturbations of MCF7 cells.',
  },
  'MCF7 Perturbations down': {
    description: 'Gene expression signatures extracted from GEO comparing before and after any perturbations of MCF7 cells.',
  },
  'MGI Mammalian Phenotype 2013': {
    description: 'Legacy version of the MGI mammalian phenotypes gene set library.',
    idName: 'MP',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.informatics.jax.org/searches/Phat.cgi?id=MP:',
    homepage: ''
  },
  'MGI Mammalian Phenotype Level 3': {
    description: 'Knockout mouse phenotypes organized into an ontology. ',
    idName: 'MP',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.informatics.jax.org/searches/Phat.cgi?id=MP:',
    homepage: ''
  },
  'MGI Mammalian Phenotype Level 4': {
    description: 'Knockout mouse phenotypes organized into an ontology that is cut at level 3 of the. ',
    idName: 'MP',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.informatics.jax.org/searches/Phat.cgi?id=MP:',
    homepage: ''
  },
  'Microbe Perturbations up': {
    description: '',
  },
  'Microbe Perturbations down': {
    description: '',
  },
  'Mouse Gene Atlas': {
    description: 'Up regulated genes in mouse tissues from BioGPS.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'MSigDB Computational': {
    description: 'Modules of genes mined by processing cancer microarray data.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'MSigDB Oncogenic Signatures': {
    description: 'Cell signaling in cancer reconstructed from expression data.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'NCI-60 Cancer Cell Lines': {
    description: 'Up regulated genes across the NCI-60 panel of cancer cell lines.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'NCI-Nature 2015': {
    description: '2015 version of the NCI-Nature pathway database.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'NCI-Nature 2016': {
    description: 'Cell signaling pathways from NCI-Nature pathway database.',
    idName: 'View on NDEx',
    idRegExp: '[a-zA-Z0-9]*-[a-zA-Z0-9]*-[a-zA-Z0-9]*-[a-zA-Z0-9]*-[a-zA-Z0-9]*',
    idRegExpFlag: 'i',
    baseUrl: 'http://public.ndexbio.org/#/network/',
    homepage: 'http://public.ndexbio.org/'
  },
  'NURSA Human Endogenous Complexome': {
    description: 'Protein complexes identified by IP-MS mass spec by the NURSA project.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Old CMAP down': {
    description: 'The top 500 down-regulated genes from the Old Connectivity map gene rank table.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Old CMAP up': {
    description: 'The top 500 up-regulated genes from the Old Connectivity map gene rank table.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'OMIM Disease': {
    description: 'The OMIM database listing gene associated with human diseases. ',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'OMIM Expanded': {
    description: 'Protein-protein interaction networks that connect disease genes from OMIM.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Panther 2015': {
    description: '2015 version of the Panther metabolic and cell signaling pathway database.',
    idName: 'View on Panther\'s Website',
    idRegExp: '',
    idRegExpFlag: '',
    useTermName: true,
    baseUrl: 'http://www.pantherdb.org/pathway/pathwayList.do?searchType=basic&fieldName=all&listType=8&fieldValue=',
    homepage: ''
  },
  'Panther 2016': {
    description: 'The Panther metabolic and cell signaling pathway database.',
    idName: 'View on Panther\'s Website',
    idRegExp: 'P[0-9]{1,6}',
    idRegExpFlag: 'i',
    baseUrl: 'http://www.pantherdb.org/pathway/pathwayList.do?searchType=basic&fieldName=all&listType=8&fieldValue=',
    homepage: ''
  },
  'Pfam InterPro Domains': {
    description: 'Structural protein domains that are shared among proteins.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Phosphatase Substrates from DEPOD': {
    description: 'Phosphatase-substrate interactions from the DEPOD database.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'PPI Hub Proteins': {
    description: 'Protein-protein interactions for proteins with more than 50 known partners extracted from several literature-based databases.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Reactome 2013': {
    description: '2013 version of Reactome\'s cell signaling pathway database.',
    idName: 'View on Reactome\'s Website',
    idRegExp: '',
    idRegExpFlag: '',
    useTermName: true,
    baseUrl: 'http://www.reactome.org/content/query?species=Entries+without+species&species=Homo+sapiens&cluster=true&q=',
    homepage: ''
  },
  'Reactome 2015': {
    description: '2015 version of Reactome\'s cell signaling pathway database.',
    idName: 'View on Reactome\'s Website',
    idRegExp: '',
    idRegExpFlag: '',
    useTermName: true,
    baseUrl: 'http://www.reactome.org/content/query?species=Entries+without+species&species=Homo+sapiens&cluster=true&q=',
    homepage: ''
  },
  'Reactome 2016': {
    description: 'Reactome\'s cell signaling pathway database.',
    idName: 'View on Reactome\'s Website',
    idRegExp: 'R-HSA-[0-9]{1,10}',
    idRegExpFlag: 'i',
    baseUrl: 'http://www.reactome.org/content/detail/',
    homepage: ''
  },
  'SILAC Phosphoproteomics': {
    description: 'Up and down differentially phosphorylated phosphosites extracted from SILAC phosphoproteomics experiments.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Single Gene Perturbations from GEO down': {
    description: 'Gene sets extracted from GEO comparing cells before and after genetic manipulation of a single gene.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'Single Gene Perturbations from GEO up': {
    description: 'Gene sets extracted from GEO comparing cells before and after genetic manipulation of a single gene.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'TargetScan microRNA': {
    description: 'Computationally predicted targets for microRNAs.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Tissue Protein Expression from Human Proteome Map': {
    description: 'Up regulated proteins in various human tissues from ProteomicsDB.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Tissue Protein Expression from ProteomicsDB': {
    description: 'Up regulated proteins in various human tissues.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'TF-LOF Expression from GEO': {
    description: 'Gene expression signatures extracted from the GEO database for transcription factor perturbations.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: ''
  },
  'Transcription Factor PPIs': {
    description: 'Protein-protein interactions for transcription factors extracted from several literature-based databases.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'TRANSFAC and JASPAR PWMs': {
    description: 'Using the PWM from TRANSFAC and JASPAR the binding motifs were detected at the promoter of gene {0}.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Virus Perturbations from GEO down': {
    description: 'Differentially expression genes before and after viral infection of mammalian cells.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: 'http://www.ncbi.nlm.nih.gov/geo/'
  },
  'Virus Perturbations from GEO up': {
    description: 'Differentially expression genes before and after viral infection of mammalian cells.',
    idName: 'Accession Number',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: 'http://www.ncbi.nlm.nih.gov/sites/GDSbrowser?acc=',
    homepage: 'http://www.ncbi.nlm.nih.gov/geo/'
  },
  VirusMINT: {
    description: 'Human genes that are known to physically interact with viral genes.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'WikiPathways 2013': {
    description: '2015 version of WikiPathways\'s cell signaling pathway database.',
    idName: 'View on WikiPathway\'s Website',
    idRegExp: 'WP[0-9]{1,5}',
    idRegExpFlag: 'i',
    baseUrl: 'http://www.wikipathways.org/index.php/Pathway:',
    homepage: 'http://www.wikipathways.org'
  },
  'WikiPathways 2015': {
    description: '2015 version of WikiPathways\'s cell signaling pathway database.',
    idName: 'View on WikiPathway\'s Website',
    idRegExp: '',
    idRegExpFlag: '',
    useTermName: true,
    baseUrl: 'http://www.wikipathways.org//index.php?species=ALL+SPECIES&title=Special%3ASearchPathways&doSearch=1&ids=&codes=&type=query&query=',
    homepage: 'http://www.wikipathways.org'
  },
  'WikiPathways 2016': {
    description: 'WikiPathways\'s cell signaling pathway database.',
    idName: 'View on WikiPathway\'s Website',
    idRegExp: 'WP[0-9]{1,5}',
    idRegExpFlag: 'i',
    baseUrl: 'http://www.wikipathways.org/index.php/Pathway:',
    homepage: 'http://www.wikipathways.org'
  },
  'Aging_Perturbations_from_GEO_down': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare young vs. old tissues in mammals.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Aging_Perturbations_from_GEO_up': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare young vs. old tissues in mammals.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'BioPlex_2017': {
    description: 'Massive mass-spectrometry proteomics experiments to map protein-protein interactions.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'DrugMatrix': {
    description: 'Gene expression signatures from multiple tissues of drug treated rats profiled via microarrays.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'ENCODE_and_ChEA_Consensus_TFs_from_ChIP-X': {
    description: 'Combining the ENACODE and ChEA databases where the gene sets are often the intersection of target genes from multiple ChIP-seq studies.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'HumanCyc_2015': {
    description: 'Metabolic pathways from the HumanCyc database',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'HumanCyc_2016': {
    description: 'Metabolic pathways from the HumanCyc database',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'hu.MAP': {
    description: 'Protein-protein interactions integrated from multiple resources for the hu.MAP database by the Marcotte Lab.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Jensen_COMPARTMENTS': {
    description: 'Associations of genes with cellular compartments based on text mining by Lars Jensen Lab.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Jensen_DISEASES': {
    description: 'Associations of genes with diseases based on text mining by Lars Jensen Lab.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Jensen_TISSUES': {
    description: 'Associations of genes with cells and tissues based on text mining by Lars Jensen Lab.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Kinase_Perturbations_from_GEO_down': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare cells before and after genetic manipulation of a protein kinase.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Kinase_Perturbations_from_GEO_up': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare cells before and after genetic manipulation of a protein kinase.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'LINCS_L1000_Kinase_Perturbations_down': {
    description: 'Gene expression signatures from the L1000 data before and after knocking down protein kinases with shRNAs cancer cells',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'LINCS_L1000_Kinase_Perturbations_up': {
    description: 'Gene expression signatures from the L1000 data before and after knocking down protein kinases with shRNAs cancer cells',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'LINCS_L1000_Ligand_Perturbations_down': {
    description: 'Gene expression signatures from the L1000 data before and after treatment of cancer cells with endogenous ligands.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'LINCS_L1000_Ligand_Perturbations_up': {
    description: 'Gene expression signatures from the L1000 data before and after treatment of cancer cells with endogenous ligands.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Ligand_Perturbations_from_GEO_down': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare cells before and after endogenous ligand treatment.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Ligand_Perturbations_from_GEO_up': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare cells before and after endogenous ligand treatment.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'MCF7_Perturbations_from_GEO_down': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare MCF7 cells before and after drug or gene perturbations.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'MCF7_Perturbations_from_GEO_up': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare MCF7 cells before and after drug or gene perturbations.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'MGI_Mammalian_Phenotype_2017': {
    description: 'Association between gene knockouts and mammalian phenotypes based on mouse experiments.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Microbe_Perturbations_from_GEO_down': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare cells before and after infection with a microbe.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'Microbe_Perturbations_from_GEO_up': {
    description: 'Manually curated signatures from GEO studies that applied microarrays to compare cells before and after infection with a microbe.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'miRTarBase_2017': {
    description: 'microRNA-mRNA interactions from the miRTarBase database.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'RNA-Seq_Disease_Gene_and_Drug_Signatures_from_GEO': {
    description: 'Manually curated GEO signatures from studies that applied RNA-seq to compare disease vs. normal tissues, as well as gene or drug perturbations applied to mammalian cells.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'SysMyo_Muscle_Gene_Sets': {
    description: 'Collections of muscle related gene sets from sys-myo.com provided by Bill Duddy',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'TargetScan_microRNA_2017': {
    description: 'Computationally predicted microRNA-mRNA interactions from the TargetScan database.',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  },
  'ChEA_2016': {
    description: 'Collections of target genes for transcription factors from individual publications that employed ChIP-seq profiling in mammalian cells',
    idName: '',
    idRegExp: '',
    idRegExpFlag: '',
    baseUrl: '',
    homepage: ''
  }  
};
