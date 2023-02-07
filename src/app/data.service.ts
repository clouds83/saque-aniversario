import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public _birthdayMonth!: number;
  public _initialFgts!: number;
  public _monthlyDeposits!: number;
  public actualMonth: number = new Date().getMonth() + 1;

  public amountOfDeposits = () => {
    if (this.actualMonth > this._birthdayMonth) {
      const amount = +12 - +this.actualMonth + +this._birthdayMonth;
      return amount;
    } else {
      const amount = +this._birthdayMonth - +this.actualMonth;
      return amount;
    }
  };

  public futureFgts = () => {
    if (this._monthlyDeposits === 0) {
      return +this._initialFgts;
    }
    const amount =
      this.amountOfDeposits() * this._monthlyDeposits + this._initialFgts;
    return amount;
  };

  public _withdrawAmount = () => {
    if (this.futureFgts() <= 500) {
      return this.futureFgts() / 2;
    }
    if (this.futureFgts() > 500 && this.futureFgts() <= 1000) {
      return this.futureFgts() * 0.4 + 50;
    }
    if (this.futureFgts() > 1000 && this.futureFgts() <= 5000) {
      return this.futureFgts() * 0.3 + 150;
    }
    if (this.futureFgts() > 5000 && this.futureFgts() <= 10000) {
      return this.futureFgts() * 0.2 + 650;
    }
    if (this.futureFgts() > 10000 && this.futureFgts() <= 15000) {
      return this.futureFgts() * 0.15 + 1150;
    }
    if (this.futureFgts() > 15000 && this.futureFgts() <= 20000) {
      return this.futureFgts() * 0.1 + 1900;
    } else {
      return this.futureFgts() * 0.05 + 2900;
    }
  };

  public _fgtsAfterWithdraw = () => {
    return this.futureFgts() - this._withdrawAmount();
  };

  constructor() {}
}
