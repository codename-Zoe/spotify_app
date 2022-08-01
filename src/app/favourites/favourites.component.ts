import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})

export class FavouritesComponent implements OnInit, OnDestroy {
  private favouritesSubscribe: any;
  private removeFavouritesSubscribe: any;
  favourites: any;
  
  constructor(
    private musicDataService: MusicDataService
  ) { }

  ngOnInit(): void {
    this.favouritesSubscribe = this.musicDataService.getFavourites().subscribe((data)=>{
    return this.favourites = data.tracks;
    });
  }

  removeFromFavourites(id: any) {
    this.removeFavouritesSubscribe = this.musicDataService.removeFromFavourites(id).subscribe((data)=>{
        return this.favourites = data.tracks;
      });
  }

  ngOnDestroy(): void {
    this.favouritesSubscribe?.unsubscribe();
    this.removeFavouritesSubscribe?.unsubscribe();
  }
}
