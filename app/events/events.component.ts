import { Component } from '@angular/core';
import { Event } from './event.model';
import { EventsService } from './events.service';

@Component({
    moduleId: module.id,
    selector: 'em-events',
    templateUrl: "events.component.html",
    providers: [EventsService]
})
export class EventsComponent { 

    eventList: Event[];
    formVisible: boolean;
    currentEvent: Event;

    constructor(private service: EventsService) {
        this.formVisible = false;
        this.currentEvent = new Event();
        this.loadEvents();
    } 

    loadEvents() {
        this.service.getEvents()
            .subscribe(arg => this.eventList = arg);
    }

    showForm() {
        this.formVisible = true;
    }

    hideForm() {
        this.formVisible = false;
    }

    create() {
        this.showForm();
    }

    edit(event: Event) {
        this.currentEvent = event;
        this.showForm();
    }

    delete(event: Event) {
        alert('Delete');
    }

}
