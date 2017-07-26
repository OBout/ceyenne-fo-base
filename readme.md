# ABOUT
* Based on:
  https://medium.com/@OCombe/how-to-publish-a-library-for-angular-2-on-npm-5f48cdabf435
* Diract IT Copyright 2017
* Oscar Bout
* Usage: this code is 'base code' for Front Ends for the Diract IT Ceyenne 2020 suite

# SET UP
* type 'npm install ceyenne-2020-fo-base'

# TEST
* run 'npm test'

# COMPILE
* type 'tsc'

# USE FRAMEWORK IN 3TH PARTY APPLICATIONS / INCLUDE IN OTHER PROJECT


# USAGE IN CODE (in 3th party app):

# # # # # # # # # # #

import {CeyenneLogService} from 'ceyenne2020-fo-base';

export class TestPage {

  	debugger: CeyenneLogService = new CeyenneLogService(true);

    constructor(){
      this.debugger.log('hello npm-linked world');
    }

}

# # # # # # # # # # #

