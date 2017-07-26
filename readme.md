# ABOUT
* Based on:
  https://medium.com/@OCombe/how-to-publish-a-library-for-angular-2-on-npm-5f48cdabf435
* Diract IT Copyright 2017
* Oscar Bout
* Usage: this code is 'base code' for Front Ends for the Diract IT Ceyenne 2020 suite

# SET UP
* type 'npm install'
* followed by:
  'tsc'
* followed by:
  'npm link'

# TEST
* run 'npm test'

# COMPILE
* type 'tsc'

# USE FRAMEWORK IN 3TH PARTY APPLICATIONS / INCLUDE IN OTHER PROJECT
* in the project where you wish to use this SDK:
  'npm link C:\code\apps\ceyenne-frontend-base' where "C:\code\apps\ceyenne-frontend-base" is the folder name npm used to expose
* followed by:
  'npm install' in the target project

# USAGE IN CODE (in 3th party app):

# # # # # # # # # # #

import {CeyenneLogService} from 'ceyenne-fo-base';

export class TestPage {

  	debugger: CeyenneLogService = new CeyenneLogService(true);

    constructor(){
      this.debugger.log('hello npm-linked world');
    }

}

# # # # # # # # # # #

