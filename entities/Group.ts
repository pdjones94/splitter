import { User } from "./User";

export class Group {
    protected balances: [];
    protected users: User[];
    public title: string;

    constructor(title: string) {
        this.balances = [];
        this.users = [];
        this.title = title;
    }
}