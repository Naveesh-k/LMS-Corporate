import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit {
  signForm:any
  submitted = false;

  showF = false;
  showS = false;
  showT = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // validates date format yyyy-mm-dd
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
     // validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this. signForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this. signForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this. signForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this. signForm.reset();
    }

// ---------- Show Hide 

fShow(){
  this.showF = false;
  this.showS = false;
  this.showT = false;
}
sShow(){
  this.showS = true;
  this.showT = false;
  this.showF = false;
}
tShow(){
  this.showT = true;
  this.showS = false;
  this.showF = false;
}

// ---------- end Show Hide 


}







