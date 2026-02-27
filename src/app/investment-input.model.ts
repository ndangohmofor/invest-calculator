export interface IInvestmentInput {
  initialInvestment: number;
  duration: number;
  annualInvestment: number;
  expectedReturn: number;
}

export interface IInvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
