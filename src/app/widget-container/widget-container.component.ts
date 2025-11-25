import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-widget-container',
    imports: [MatCardModule, MatIcon, CommonModule],
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent {

    @Input() widgetTitle: string = '';
    @Input() widgetIcon: string = '';
    @Input() iconSize: string = ''; //in pixels
    
    constructor() {
        
    }
}