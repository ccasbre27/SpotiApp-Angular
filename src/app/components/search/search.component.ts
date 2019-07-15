import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    
   }

  ngOnInit() {
  }

  search(artistName: string) {
    this.loading = true;
    this.spotify.getArtist(artistName)
      .subscribe( (data) => {
        this.artists = data;
        this.loading = false;
      });
  }

}
