/*
 * Copyright 2013 BlackBerry Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var Application = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        Application.receivedEvent('deviceready');

        bb.init({
            actionBarDark: true,
            controlsDark: true,
            listsDark: false,

            // Fires "before" styling is applied and "before" the screen is inserted in the DOM
            onscreenready: function(element, id) {},

            // Fires "after" styling is applied and "after" the screen is inserted in the DOM
            ondomready: function(element, id) {}
        });

        // start the app
        bb.pushScreen('home.html', 'home');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

var Invoke = {
    //Invoke WorkDrives Network Drive Connection setup, as a card
    workDrivesNET: function() {        
        var request = {
            target: "sys.cfs.enterprise.composer.NetworkDrive",
            action: "bb.action.VIEW"            
        };
        Invoke.invokeApp(request);
    },

    //Invoke WorkDrives Sharepoint Connection setup, as a card
    workDrivesSH: function() {                
        var request = {
            target: "sys.cfs.enterprise.composer.SharePoint",
            action: "bb.action.VIEW"
        };
        Invoke.invokeApp(request);
    },

    invokeApp: function(request) {
        blackberry.invoke.invoke(
            request,
            function() {
                console.log('success');
            }, function(e) {
                console.log('error');
                console.log(e);
            }
        );
    }
};