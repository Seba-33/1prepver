import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dati } from './Models/dati.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prep';
  vettDati : Dati[] = []
}
