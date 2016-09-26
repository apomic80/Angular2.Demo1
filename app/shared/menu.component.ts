import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'em-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent { 

    title: string;

    /**
     *
     */
    constructor() {
        
        this.title = "Salerno JS";
        
    }

}
