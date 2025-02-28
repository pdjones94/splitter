import { Expense } from "./Expense";
import { User } from "./User";

export class Group {
    protected balances: [];
    protected users: User[];
    // protected expenses: Expense[];
    public title: string;

    constructor(title: string) {
        this.balances = [];
        this.users = [];
        this.title = title;
        // this.expenses = [];
    }

    public addUser(user: User) {
        this.users.push(user);
    }

    public removeUser(user: User) {
        const userIndex = this.users.indexOf(user);
        if (userIndex < 0) {
            return;
        }
        this.users.splice(userIndex,1);
    }

    // public addExpense(expense: Expense) {

    // }
}