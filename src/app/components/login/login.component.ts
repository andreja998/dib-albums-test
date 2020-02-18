import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AuthUserService } from "src/app/services/auth-user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authUser: AuthUserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  onLogin() {
    console.log("LOGIIIN");
    if (this.loginForm.invalid) {
    } else {
      localStorage.setItem("token", "here goes the token");
      this.router.navigate(["/albums"]);
    }

    // this.authUser
    //   .login(
    //     this.loginForm.get("email").value,
    //     this.loginForm.get("password").value
    //   )
    //   .subscribe(res => {
    //     this.router.navigate(["albums"]);
    //   });
  }
}
