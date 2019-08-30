import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    states = ['', 'Maharashtra', 'Gujarat', ' Uttar Pradesh '];
  mnumber='[0-9]+';
    zip='[0-9]{4,5}';
 fname = "[a-zA-Z]{4,15}";
   emailpattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   city= "[a-zA-Z]{4,15}";
   comment="[a-zA-Z. .a-zA-Z]{30,100}";
    title = 'ReactiveFormDemo';
  constructor(public fobj:FormBuilder)
  {

  }
  MarvellousForm=this.fobj.group(
    {
  fname:['',[Validators.required,Validators.pattern(this.fname)] ],
      lname:[''],
      email:['' ,[Validators.required,Validators.pattern(this.emailpattern)]],
      number:['' ,[Validators.required,Validators.minLength(10),Validators.pattern(this.mnumber)]],
      address:[''],
      state:[''],
      city: ['' ,[Validators.required,Validators.minLength(4),Validators.pattern(this.city)]],
      zip: ['' ,[Validators.required,Validators.minLength(5),Validators.pattern(this.zip)]],
      comment: ['' ,[Validators.required,Validators.pattern(this.comment)]]
    }
  )
 /* MarvellousForm = new FormGroup(
    {
      username : new FormControl('jyo'),
      passowrd : new FormControl(''),
      ConfirmPass : new FormControl(''),
      MarvellousClass:new FormGroup(
        {
          batch:new FormControl('python'),
          fees:new FormControl('5000')
        }
      )
    });*/
  
}
 