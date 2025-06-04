import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dati } from './Models/dati.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ListaPrenotazioniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'prep';
  vettDati : Dati[] = []
  loading!: boolean
  obs! : Observable<Dati[]>
  data! : object
  http : HttpClient

  constructor(http : HttpClient){this.http = http}

  makeChiamata(){
    this.loading = true
    this.obs = this.http.get<Dati[]>('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni')
    this.obs.subscribe(this.getData)
  } 

  getData = (d : Dati[])=>{
    this.vettDati = d
    this.loading = false
    console.log(this.vettDati)
  }

  ngOnInit(): void {
    this.makeChiamata()
  }



}
