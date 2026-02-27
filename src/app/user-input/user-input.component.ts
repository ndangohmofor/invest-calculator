import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { IInvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculateResults = new EventEmitter<IInvestmentInput>();
  // calculateResults = output<IInvestmentInput>();
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  duration = signal('5');
  expectedReturn = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
    });
  }
}
