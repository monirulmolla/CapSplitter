import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { User } from "./user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    signUpForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        const user = new User(
            this.signUpForm.value.email,
            this.signUpForm.value.password,
            this.signUpForm.value.userName
        );
        this.authService.signup(user)
            .subscribe(
                data => {
                    //TODO handle success and route to home screen
                    //this.authService.setLoggedInUserName(data.userName);
                    //localStorage.setItem('token', data.token);
                    //localStorage.setItem('userId', data.userId);
                    //localStorage.setItem('userName', data.userName);
                    this.router.navigate(['/', 'home']);
                },
                error => console.error(error)
            );
        this.signUpForm.reset();
    }

    ngOnInit() {
        this.signUpForm = new FormGroup({
            userName: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(8)]),
            email: new FormControl(null, [
                //TODO add email validation here
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }
}