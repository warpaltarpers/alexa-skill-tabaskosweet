'use strict';

const Alexa = require('alexa-sdk');
const Results = require('results');

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {
  // No intent launch
  'LaunchRequest':function(){
    var audioFile = '<audio src="https://s3.amazonaws.com/media.cloutclinic.fuego/tabasko+welcome.mp3" />';
    var rxGang = '<audio src="https://s3.amazonaws.com/media.cloutclinic.fuego/rx+gang.mp3" />';
    this.emit(':ask', `${audioFile}`, `${rxGang}`);
  },
  'TabaskoResponse':function(){
    var audioFile = Results.getResults();
    this.emit(':tell', `${audioFile}`);
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = this.t('HELP_MESSAGE');
    const reprompt = this.t('HELP_MESSAGE');
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    var audioFile = '<audio src="https://s3.amazonaws.com/media.cloutclinic.fuego/here+for+you.mp3" />'
    this.emit(':tell', `${audioFile}`);
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
};
