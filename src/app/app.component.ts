import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputLength: number = 0;
  password: string = '';
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  public onButtonClick(){
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols: string = '!@#$%^&*()';

    let validChars = '';

    if(this.useLetters){
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';

    for(let i = 0; i < this.inputLength; i++){
      const index: number = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  public onChangeInputLength(event: Event){
    const inputValue = event.target as HTMLInputElement;
    this.inputLength = +inputValue.value;
  }

  public onChangeUseLetters(){
    this.useLetters = !this.useLetters;
  }

  public onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }

  public onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
}
