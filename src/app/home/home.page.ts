import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  form!: FormGroup;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.formInit();
  }

  public formInit() {
    this.form = new FormGroup({
      birthdayMonth: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      initialFgts: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      monthlyDeposits: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });
  }

  onSubmit() {
    this.dataService._birthdayMonth = this.form.value.birthdayMonth;
    this.dataService._initialFgts = this.form.value.initialFgts;
    this.dataService._monthlyDeposits = this.form.value.monthlyDeposits;

    this.router.navigateByUrl('/result');

    this.formInit();
  }
}
