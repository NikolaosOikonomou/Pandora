import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { GeneralModuleComponent } from '../general-module/general-module.component';

@Component({
  selector: 'app-main-content',
  imports: [
    MatTabsModule,
    GeneralModuleComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
