# UI5 Voice Recognizer

This repository contains the example and the source code developed using UI5 tooling for the api which can be encorportaed to UI5 application to enable voice recognition.

# Requirements
- [NodeJS](https://nodejs.org/en/download/), version 8.0 or higher
- [UI5 Command Line Interface](https://github.com/SAP/ui5-cli) 

# Installation

    $ npm install

# Run

    $ ui5 serve

# What is SpeechRecognizer.js?

[SpeechRecognizer.js](https://github.com/sijas/ui5-voice-recognition/blob/master/webapp/util/SpeechRecognizer.js) (click to download) is a util/helper/api which can be included into a project to enable voice recognition ability in the application. This API uses the Google Chrome’s voice recognition engine named ‘**_webkitSpeechRecognition’_**. This file can be placed anywhere in the webapp folder of the application. (recommended to be placed in util folder).

# Usage

## Initialization

In the component.js of the application import the speech recognizer API using sap.ui.define, on the init method initialize the SpeechRecognizer using below code.

    this.oSpeechRecognizer = new SpeechRecognizer(this,<true/false>);

In the above code, the first parameter to the API is the instance of the component and second is a boolean flag which enables application to listen to command “**_HELLO ASSISTANT_**” to start listening to user commands.

In any controller where user want to use the functionality of the Speech Recognizer, you need an instance of the previously created SpeechRecognizer. Use below code to get access to it.

    var oComponent = this.getOwnerComponent();
    
    this.oSpeechRecognizer = oComponent.oSpeechRecognizer;

## Register the Mic Button

User can add a mic button in the UI, which while pressed will listen to commands. Use below code to register the mic.

    this.oSpeechRecognizer.registerCallButton(this.byId("mic"));

## Register Commands

### Command Without parameter

It is possible to register a command which performs an action without taking any inputs from user. This can be performed by code below.

    this.oSpeechRecognizer.registerCommandWithOutParam("<Command>", function(){
    
    //callback function
    
    }.bind(this));

The API will recognize the command and invokes call back function.

### Command with Parameter

It is possible to register command which takes input from the user as voice and performs the action. This can be done using the code below.

    this.oSpeechRecognizer.registerCommandWithParam("<command>", function(text) {
    
    //callback function
    
    }.bind(this));

In the above code, the texts spoken after the command is taken as parameter for the call back function.

# References

 - [Webkit Speech Recognition API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API)