import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    
    if (props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
        

    return <ul className='expenses-list'>
        {props.items.map((comp)=> <ExpenseItem key = {comp.id}title={comp.title} date={comp.date} amount={comp.amount}/>)
    }
    </ul>

};

export default ExpensesList;