import { Component } from '@angular/core';
import { lorem, random } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';

  protected randomSentence: string;
  protected inputSentence: string;

  constructor(){
    this.randomSentence = lorem.sentence();
    this.inputSentence = '';
  }

  retrieveInput(sentence: any){
    this.inputSentence = sentence.value;
  }

  compare(randomLetter: string, inputLetter: string){
    if(!inputLetter){
      return 'pending'
    }

    return randomLetter === inputLetter ? 'correct':'incorrect';
  }
}
