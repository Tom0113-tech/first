import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MainpageComponent } from "./mainpage/mainpage.component";



@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, 
    NavbarComponent, 
    MainpageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
