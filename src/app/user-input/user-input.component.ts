import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { IInvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculateResults = new EventEmitter<IInvestmentInput>();
  initialInvestment = '0';
  annualInvestment = '0';
  duration = '5';
  expectedReturn = '10';
  onSubmit() {
    this.calculateResults.emit({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
    });
  }
}
