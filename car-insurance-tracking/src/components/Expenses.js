import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props){
    const items = props.comps.map((comp)=> <ExpenseItem title={comp.title} date={comp.date} amount={comp.amount}/>)
    return (
        <div className="expenses">
            {items}
        </div>
    );
}

export default Expenses;