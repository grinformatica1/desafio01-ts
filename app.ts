import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1)
peopleAccount.deposit(20)
peopleAccount.getBalance();
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount()
companyAccount.deposit(30)
companyAccount.getBalance()
console.log(companyAccount)

const newAccount: NewAccount = new NewAccount()
newAccount.deposit(50)
newAccount.getBalance()
console.log(newAccount)

