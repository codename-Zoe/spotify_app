import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  imgUrl: any = "https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2639.svg";
  imgAlt: string = "Page Not Found";

  constructor() { }

  ngOnInit(): void {
  }

}
