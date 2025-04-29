import {Component, inject} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../../../../core/services/user.service';

@Component({
  selector: 'app-login-form',
  imports: [
    MatFormFieldModule,
    MatInput,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginForm: FormGroup;
  private _snackBar = inject(MatSnackBar);
  userServce = inject(UserService);

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }

  onSubmit() {

    if(this.loginForm.invalid) {
      this.openSnackBar('Login or password is too short', 'Ok');
      return;
    }
    this.userServce.login(this.loginForm.value.login, this.loginForm.value.password).subscribe();
    console.log(this.loginForm.value);
  }

  openSnackBar(text: string, buttonText: string) {
    this._snackBar.open(text, buttonText, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

}
