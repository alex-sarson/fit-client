import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.scss',
})
export default class PasswordResetComponent implements OnInit {
  passwordResetForm!: FormGroup;
  fb = inject(FormBuilder);
  router = inject(Router);

  ngOnInit(): void {
    this.passwordResetForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  submit() {
    console.log(this.passwordResetForm.value);
  }
}
