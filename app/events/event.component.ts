import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from './event.model';

@Component({
    moduleId: module.id,
    selector: 'em-event',
    templateUrl: "event.component.html"
})
export class EventComponent { 

    @Input() event: Event;
    @Output() onCancel = new EventEmitter();

    cancel () {
        this.onCancel.emit();
    }

}
