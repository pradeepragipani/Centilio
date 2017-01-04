import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,  private route: ActivatedRoute,private router: Router) {
    
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    console.log("hi");
    
    this.submitted = true;
    if (this.form.valid) {
        console.log("form valid");
        this.router.navigate(["/pages/dashboard"]);
      // your code goes here
      // console.log(values);
     // this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    }
  }
}
