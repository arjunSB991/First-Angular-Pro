import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as emailjs  from 'emailjs-com';
//import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public modalRef:BsModalRef;
  //{1} : first we need a variable to keep a reference of our modal. This is going to be used to close the modal.
  constructor(private modalService:BsModalService){}
  //{2} : to show the modal, we also need the ngx-bootstrap service
  public openModal(template:TemplateRef<any>){
    this.modalRef=this.modalService.show(template);
    //{3} : and when the user clicks on the button to open the popup we keep the modal reference and pass the template local name to the modalService.
  }

  ngOnInit() {
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

  dateNow: Date = new Date();
  emailMessage:string;
  // fromName:string;
  // fromEmail:string;
  // fromSubject:string;
  // messageHtml:string;
  template_Email={};
  sentEmail(form){
    this.template_Email = {
    to_name:'Arjun Singh Bisht',
    from_name: form.controls["cont_fname"].value,
    from_email: form.controls["cont_femail"].value,
    from_date: this.dateNow,
    from_subject: form.controls["cont_fsubject"].value,
    message_html: form.controls["cont_fmessage"].value
    }

    emailjs.send('asb991','template_n7QkakYO',this.template_Email,'user_S22QhMhjJLfyuPbbwooRU')
    .then(function(response){
      alert("Mail Sent");
    },function(err){
      alert("Mail Not Sent");
    });
    form.reset();
  }

  messages=[];
  submitContactUs(form){
    this.messages=form.value;
    console.log(form.controls["cont_fname"].value);
    console.log(this.messages);
    alert("The form was submitted");
    form.reset();
  }
}
