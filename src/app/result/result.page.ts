import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage {
  withdrawAmount = this.dataService._withdrawAmount();
  fgtsAfterWithdraw = this.dataService._fgtsAfterWithdraw();
  date = new Date();

  constructor(public dataService: DataService, private router: Router) {}

  monthName = () => {
    this.date.setMonth(this.dataService._birthdayMonth - 1);
    return this.date.toLocaleString('pt-BR', { month: 'long' });
  };

  yearOfWithdraw = () => {
    const year = this.date.getFullYear();

    if (this.dataService._birthdayMonth < this.dataService.actualMonth) {
      return year + 1;
    } else {
      return year;
    }
  };

  onRecalculate() {
    this.router.navigateByUrl('/home');
  }
}
