import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(){
    super()
  }

  getLoan = (balance: number): void => {
    if(this.getStatus()){
      this.setBalance(balance)
      console.log('Voce pegou um empréstimo')
    } else {
      console.log('Conta Inválida')
    }
  }
}
