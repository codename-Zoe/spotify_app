import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit, OnDestroy {
  private albumsSubscribe: any;
  private artistSubscribe: any;
  private id: any;
  albums: any;
  artist: any;
  constructor(private musicDataService: MusicDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.artistSubscribe = this.musicDataService.getArtistById(this.id).subscribe((data) => {
      return (this.artist = data);
    });

    this.albumsSubscribe = this.musicDataService.getAlbumsByArtistId(this.id).subscribe((data) => {
      return this.albums = data.items.filter(
        (currentValue: any, index: any, arr: any) =>
          arr.findIndex((t: any) => t.name.toUpperCase() === currentValue.name.toUpperCase()) === index);
    });
  }

  ngOnDestroy() {
    this.albumsSubscribe?.unsubscribe();
    this.artistSubscribe?.unsubscribe();
  }

}
