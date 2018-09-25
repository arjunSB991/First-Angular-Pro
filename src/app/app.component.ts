import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'app';

  public ngOnInit() {
    // $(document).ready(function(){
    //   $(".icon").click(function(){
    //     if($("#myTopnav").hasClass("topnav")){
    //       $("#myTopnav").removeClass("topnav");
    //       $("#myTopnav").addClass("responsive");
    //     } else {
    //       $("#myTopnav").removeClass("responsive");
    //       $("#myTopnav").addClass("topnav");
    //     }
    //   });
    // })
  }

  
}
