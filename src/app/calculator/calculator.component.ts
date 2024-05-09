import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit{

  inputStr: any

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text : new FormControl()
    })   
  }

  buttonClick(buttonElement: any) {
    let buttonText = buttonElement.textContent

    if (this.inputStr.controls.text.value != null) {
      this.inputStr.controls.text.setValue(
      
        this.inputStr.controls.text.value
  
        + buttonText)
    } else {
      this.inputStr.controls.text.setValue(buttonText)
    }
    
  }

  clearDisplay() {
    this.inputStr.controls.text.setValue("")
  }

  calculate() {
    let result = eval(this.inputStr.controls.text.value)
    this.inputStr.controls.text.setValue(result)
  }

  deleteLast() {
    let str = this.inputStr.controls.text.value
    str = str.slice(0, -1)
    this.inputStr.controls.text.setValue(str)
  }


}
