import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props)=>{
    const items = props.items.map((comp)=> <ExpenseItem title={comp.title} date={comp.date} amount={comp.amount}/>)
    
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler= (selectedYear)=>{
        setFilteredYear(selectedYear);
    };
    return (
        
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
            
            {items}
        </Card>
       
    );
}

export default Expenses;