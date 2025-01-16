import { Group } from "./Group";
import { User } from "./User";

export type Currency = 'GBP' | 'USD' | 'EUR';
export interface ExpenseProps {
    owner: User,
    creator?: User,
    group: Group,
    value: number
}


export class Expense {
    public date: number;
    public owner: User;
    public creator?: User;
    public group: Group;
    public value: number;
    public currency: Currency;

    constructor(props: ExpenseProps) {
        this.date = Date.now();
        this.owner = props.owner;
        this.creator = props.creator;
        this.group = props.group;
        this.value = props.value;
        this.currency = 'GBP';
    }
}