import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerform : FormGroup
  constructor() {
   this.registerform = new FormGroup({
    registerfName :new FormControl("",[Validators.required ,Validators.minLength(3)]),
    registerlName :new FormControl('',[Validators.required ,Validators.minLength(3)]),
    registeremail :new FormControl('',[Validators.required ,Validators.email]),
    registerpass :new FormControl('',[Validators.required ,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    registerconfpass :new FormControl('',[Validators.required, ]),


    
    })
   }

  ngOnInit(): void {
  }
  handleregisterform(){
    console.log(this.registerform);
  }

}
