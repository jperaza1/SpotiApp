import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any;
  Pistas:any[];

  constructor(private _activateRoute:ActivatedRoute,
              private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this._activateRoute.params
    .map(parametros => parametros['id'])
    .subscribe( id =>{

      console.log(id);
      this._spotifyService.getArtista(id)
          .subscribe( data => this.artista = data);


      this._spotifyService.getTopTrack(id)
          .subscribe( data => this.Pistas = data );

    });



  }

}
