import { Expense, ExpenseProps } from "@/entities/Expense";
import { Group } from "@/entities/Group";
import { User } from "@/entities/User";
import { useState } from "react";
import { Button, FlatList, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";

export default function Sandbox() {
    const user1 = new User('user1');
    const user2 = new User('user2');
    const user3 = new User('user3');
    const group = new Group('test');

    const [expenseValue, setExpenseValue] = useState(0);
    const [owner, setOwner] = useState<User>(user1);
    const [debtors, setDebtors] = useState<User[]>([])
    const [expense, setExpense] = useState<Expense>();

    const users: User[] = [user1, user2, user3];

    function createExpense(data: ExpenseProps) {
        const expense = new Expense(data);
        setExpense(expense);
        console.log('new expense:', expense);
    }

    function handleExpenseChange(input: string) {
        const val = parseInt(input);
        console.log(val);
        return val ? val : 0;
    }

    function handleDebtor(user: User) {
        console.log(debtors.indexOf(user));
        if (!debtors.includes(user)) {
            setDebtors([...debtors, user]);
            console.log(debtors);
        }
    }


    return (
        <SafeAreaView style={{padding: 10}}>
            <TextInput
                keyboardType="number-pad"
                inputMode="numeric"
                style={{height: 40}}
                placeholder="Expense value"
                onChangeText={newExpense => setExpenseValue(handleExpenseChange(newExpense))}
                defaultValue={expenseValue.toString()}
            />
            <FlatList data={users} renderItem={({item}) => <Button color='#45a30f' title={`${item.name}`} onPress={() => setOwner(item)} />}/>
            <FlatList data={users} renderItem={({item}) => (
                <>
                    <Button color='#bd9511' title={`${item.name}`} onPress={() => handleDebtor(item)} />
                </>
            )}/>
            {/* <Text>Date: {new Date(expense.date).toISOString()}</Text> */}
            <Text>Value: {expenseValue}</Text>
            <Text>Owner: {owner.name}</Text>
            <Text>Debtors:</Text>
            <FlatList data={debtors} renderItem={(item) => <Text>{item.item.name}</Text>}/>


            <Button title="submit" onPress={() => createExpense({value: expenseValue, owner, debtors})}/>
            {expense && 
                <>
                    <Text>Date: {new Date(expense.date).toISOString()}</Text>
                    <Text>Value: {expense.value}</Text>
                    <Text>Owner: {expense.owner.name}</Text>
                    <Text>Currency: {expense.currency}</Text>
                    <Text>Debtors: {expense.debtors.toString()}</Text>

                </>
            }
        </SafeAreaView>
    )
}