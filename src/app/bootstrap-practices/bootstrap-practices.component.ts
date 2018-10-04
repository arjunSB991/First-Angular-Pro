import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
//import { Window } from 'selenium-webdriver';

// import { FormControl, FormGroup, NgForm, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-bootstrap-practices',
  templateUrl: './bootstrap-practices.component.html',
  styleUrls: ['./bootstrap-practices.component.scss']
})
export class BootstrapPracticesComponent implements OnInit {

  public modalRef:BsModalRef; //{1} : first we need a variable to keep a reference of our modal. This is going to be used to close the modal.

  constructor(private modalService: BsModalService) { } //{2} : to show the modal, we also need the ngx-bootstrap service

  public openModal(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template); //{3} : and when the user clicks on the button to open the popup we keep the modal reference and pass the template local name to the modalService.
  }

  ngOnInit() {
    this.startDate();
  }

  dateNow: Date = new Date();
  tDays:number=this.dateNow.getDate();
  tMonths:number=this.dateNow.getMonth()+1;
  tYears:number=this.dateNow.getFullYear();
  tHours:number=this.dateNow.getHours();
  tMinutes:number=this.dateNow.getMinutes();
  tSeconds:number=this.dateNow.getSeconds();
  tTicks:number=0;

  startDate(){
    this.interval = setInterval(()=>{
      if(this.tTicks<99){
        this.tTicks++;
        if(this.tTicks==99){
          this.tTicks=0;
          this.tSeconds++;
          if(this.tSeconds==59){
            this.tSeconds=0;
            this.tMinutes++;
            if(this.tMinutes==59){
              this.tMinutes=0;
              this.tHours++;
              if(this.tHours==23){
                this.tHours=0;
                this.tDays++;
                if(this.tDays==31 || this.tDays==30){
                  this.tDays=1;
                  this.tMonths++;
                  if(this.tMonths==12){
                    this.tMonths=1
                    this.tYears++;
                  }
                }
              }
            }
          }
        }
      }
    },10)
  }


  timeLeft: number = 60;
  interval;

  startTimer(){
    this.interval = setInterval(()=>{
      if(this.timeLeft>0){
        this.timeLeft--;
      }
      else{
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer(){
    clearInterval(this.interval);
  }

  industries = [
    {id: 1, name: "Agriculture"},
    {id: 2, name: "Manufacturing"},
    {id: 3, name: "Energy"},
    {id: 4, name: "Transportation"},
    {id: 5, name: "Finance"}
  ];

  submitCompany(form){
    console.log(form.value);
    alert("The form was submitted");
    form.reset();
  }
}
