import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculaEdad } from './Entidades/calcula-edad';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej1';

  calc = new CalculaEdad();
}
