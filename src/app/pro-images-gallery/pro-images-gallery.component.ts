import { Component, OnInit } from '@angular/core';
// import { fs } from 'fs';
const dir = '../../assets/OnlineShoppingProject';

@Component({
  selector: 'app-pro-images-gallery',
  templateUrl: './pro-images-gallery.component.html',
  styleUrls: ['./pro-images-gallery.component.scss']
})
export class ProImagesGalleryComponent implements OnInit {

  constructor() { }

  ItemsCount: number;

  ngOnInit() {
    // fs.reader(dir, (err, files) => {
    //   this.ItemsCount=files.length;
    // });
  }

}
