import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserfireService } from 'src/app/services/userfire.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  // current time
  today = Date.now();
  // Form
   userForm: FormGroup;


  constructor(
    private userfireService: UserfireService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.startTime();
  }

  // Live clock
  startTime() {
    setInterval(function() {
      this.today = new Date().toISOString();
    }.bind(this),1000);
  }


  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: ['']
    });
  }
  //Submit user details
  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.userfireService.createUser(this.userForm.value)
      .then(() => {
        this.userForm.reset();
        this.router.navigate(['/viewpage']);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

}
