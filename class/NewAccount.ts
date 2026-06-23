import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {

    constructor() {
        super()
    }

    deposit = (balance: number) => {
        this.setBalance(balance + 10)
        console.log('Você depositou')
    }
}