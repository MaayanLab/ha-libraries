FROM node:latest

# Set SOURCE_DIR variable, make the directory, and set it as work directory
ENV SOURCE_DIR /usr/src
RUN mkdir -p $SOURCE_DIR
WORKDIR $SOURCE_DIR

COPY package.json $SOURCE_DIR/
RUN npm install --production

ENV NODE_ENV production

COPY app/* $SOURCE_DIR/

EXPOSE 4224

CMD [ "npm", "start" ]
