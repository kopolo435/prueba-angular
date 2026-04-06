import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginFormService } from './login-form-service';
import { Observable } from 'rxjs';
import { User } from './user';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  private loginFormService = inject(LoginFormService);
  user$!: Observable<User>;
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  clearEmailField() {
    this.profileForm.controls.email.setValue('');
  }

  setDefaultEmail() {
    //this.profileForm.controls.email.setValue('test@test.com');
    this.profileForm.patchValue({ email: 'test@test.com' });
  }
  onSubmit() {
    this.user$ = this.loginFormService.logUser({
      email: this.profileForm.controls.email.value ?? '',
      password: this.profileForm.controls.password.value ?? '',
    });
  }
}
