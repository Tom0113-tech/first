import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { EquipmentComponent } from "../equipment/equipment.component";

@Component({
  selector: 'app-mainpage',
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatBadgeModule,
    MatIconModule,
    EquipmentComponent
],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
