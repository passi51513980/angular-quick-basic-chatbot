import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
   lastcondition = true;
  replyMessage = "";
  lastcase = false;
  xyz = true;
  feedback = false;
  arr = [1,2,3,4,5,6,7,8,9,10];
  string_object = [{ "text": "Customer Care"},
    {"text":"Welcome Desk"},
    {"text": "Lab report"},
    {"text":"Precautions"}
    ]
  messages = [{
    "text":"Welcome Jatin! Kindly give your feedback.",
    "self":false
  },{
    "text":"How likely are to recommend lab1 to your friends?",
    "self":false
  }]

  constructor() { }

  ngOnInit() {
  }

  reply(){
    if(this.replyMessage){
    this.messages.push({
      "text":this.replyMessage,
      "self":true
    })
    this.replyMessage = "";
    console.log(this.messages.length);
    if (this.messages.length == 3){
      this.xyz = false;
      this.lastcase = true;
      if(this.lastcase){
        this.messages.push({
          "text": "Please Tell us where do we need to improve?",
          "self":false
        })

      }

    }
    if(this.messages.length > 4) {
      if (this.messages.length == 7) {
        alert ('Thanks for the feedback, Page will be Reloaded');

        location.reload();
      } else {
            this.messages.push({
        "text": "If you have any comments or additional feedback, kindly enter your comments. Press send to submit your feedback",
        "self": false
      })
      this.lastcondition = false;
      this.xyz = true;
    }


    }
    } else { alert ('Thanks for the feedback');
    if(confirm('Want to fill another Feedback?')){

      location.reload();
    }



    }
  }
  onSelectionChange(entry) {
    console.log(typeof entry);
    if (typeof entry == 'number'){
      this.replyMessage = String(entry);

     }
    else{
      this.replyMessage = String(entry);


    }


  }


}
