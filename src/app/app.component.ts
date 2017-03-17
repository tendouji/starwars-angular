import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	shipList = [5, 9, 10, 11, 15];
    swapiDomain = 'http://swapi.co/api/';
    swapiUrl = this.swapiDomain + 'starships/';
    shipAttributes = ['name', 'model', 'manufacturer', 'crew', 'edited'];
    shipsInfo = [];

    messageList = {
        'start': 'Getting content from ' + this.swapiDomain + '...', 
        'noInternet': 'You seemed to be offline! Please check your Internet connection.'
    };

    /* dom element */
    preloader;
    menuSelect;
    messagePanel;
    spaceshipList;
}
