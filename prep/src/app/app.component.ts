import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dati } from './Models/dati.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'prep';
  vettDati : Dati[] = []
  loading!: boolean
  obs! : Observable<object>
  data! : object
  http : HttpClient

  constructor(http : HttpClient){this.http = http}

  makeChiamata(){
    this.loading = true
    this.obs = this.http.get('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni')
    this.obs.subscribe(this.getData)
  } 

  getData = (d : object)=>{
    this.data = d
    this.loading = false
    console.log(this.data)
  }

  ngOnInit(): void {
    this.makeChiamata()
  }



}
