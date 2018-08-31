import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
// import { url } from 'inspector';
// var fstream = require('../fstream.js')
// var tap = require('tap')
// var fs = require('fs')
// var path = require('path')
// //var dir = path.dirname(__dirname)
// const dir = '../../assets/OnlineShoppingProject';

@Component({
  selector: 'app-pro-images-gallery',
  templateUrl: './pro-images-gallery.component.html',
  styleUrls: ['./pro-images-gallery.component.scss']
})
export class ProImagesGalleryComponent implements OnInit {

  
  ItemsCount: number;
  ProjectName: string;
  splitStr=[];

  constructor(private route: ActivatedRoute) {
    this.ProjectName = this.route.snapshot.paramMap.get('name');
   }



  ngOnInit() {
    // fs.reader(dir, (err, files) => {
    //   this.ItemsCount=files.length;
    // });
    // this.splitStr = url.toString().split('/');    
  }

}
