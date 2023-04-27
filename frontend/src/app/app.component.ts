import { Component } from '@angular/core';
import { TelephoneNumber } from 'src/types/TelephoneNumber';
import { TelephoneService } from './services/telephone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  parsedNumbers: TelephoneNumber[] = [];
  inputNumber = '';
  oldValue = '';
  telephoneRegex = RegExp("[+ 0-9\\/()\\[\\]-]*$");

  constructor(private telephoneService: TelephoneService) {

  }

  validateNumber(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if((this.telephoneRegex).test(value)){
      this.inputNumber = value;
     }else{
       this.inputNumber = this.oldValue;
      }
    this.oldValue = this.inputNumber;
    }

  parseNumber() {

    if((this.telephoneRegex).test(this.inputNumber)){

    this.telephoneService.parseNumber(this.inputNumber).subscribe((parsedNumber: TelephoneNumber) => {
      console.log(parsedNumber);
      this.parsedNumbers.push(parsedNumber);
    });
  }
  }
}
