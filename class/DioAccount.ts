export abstract class DioAccount {
  private readonly name: string = 'Guilherme'
  private readonly accountNumber: number = 10
  private balance: number = 0
  private status: boolean = true

  /*constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }*/

  /*setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }*/

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean => {
    return this.status
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (balance: number): void => {
    if(this.validateStatus()){
      console.log('Voce depositou')
      this.balance += balance
    } else {
      throw new Error('Conta Inválida')
    }

  }

  withdraw = (balance: number): void => {
    if(this.status && this.balance >= balance){
      this.balance -= balance
      console.log('Voce sacou')
    } else if (this.status && this.balance < balance){
      console.log('Saldo indisponível')
    } else {
      console.log('Conta Indisponível')
    }
    
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
