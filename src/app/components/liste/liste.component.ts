import { Component, OnInit } from '@angular/core';
import { Joueur } from 'src/app/models';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  public joueurs : Joueur[] = [] ;
  public selected: Joueur;
  public displayDetails = false;
  public select(data : Joueur) {
    this.selected = data;
    this.displayDetails = true;
  }

  constructor() { 

  }

  ngOnInit() {

    this.joueurs.push(
      {
        id: '1',
        firstName: 'Guillaume',
        lastName: 'Brizon',
        country: 'France',
        age: '20'
      }
    )
  }

}
