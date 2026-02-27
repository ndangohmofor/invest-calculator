import { Component, inject, Input, input } from '@angular/core';
import type { IInvestmentResult } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input<IInvestmentResult[]>();
  // @Input() results?: IInvestmentResult[] = [];
  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultsData;
  }
}
