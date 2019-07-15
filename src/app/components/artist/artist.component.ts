import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any;
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) { 
    
    
    this.router.params.subscribe( (params: any) => {
      this.getArtist(params.id);
    });

  }

  ngOnInit() {
  }
  
  getArtist( id: string) {

    this.loading = true;
    this.spotify.getArtist( id )
      .subscribe( data => {
        this.artist = data;
        console.log(data);
        this.loading = false;
      });
  }

}
