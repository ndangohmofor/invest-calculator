import { Injectable, signal } from '@angular/core';
import { IInvestmentInput, IInvestmentResult } from './investment-input.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  resultsData?: IInvestmentResult[];
  calculateInvestmentResults(data: IInvestmentInput) {
    const { initialInvestment, duration, annualInvestment, expectedReturn } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    // this.resultsDate.set(annualData);
    this.resultsData = annualData;
  }
}
