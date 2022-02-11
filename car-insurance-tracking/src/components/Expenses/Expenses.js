import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props)=>{
    
    
    const [filteredYear, setFilteredYear] = useState('2020');
    const items = props.items.filter((comp)=> comp.date.getFullYear().toString() === filteredYear).map((comp)=> <ExpenseItem key = {comp.id}title={comp.title} date={comp.date} amount={comp.amount}/>);
    const filterChangeHandler= (selectedYear)=>{
        setFilteredYear(selectedYear);
    };
    return (
        
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
            
            {items.length === 0 && <p>No expenses found.</p>}
            {items.length > 0 && items}
        </Card>
       
    );
}

export default Expenses;