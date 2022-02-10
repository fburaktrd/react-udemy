import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = (props)=>{
    const items = props.comps.map((comp)=> <ExpenseItem title={comp.title} date={comp.date} amount={comp.amount}/>)
    return (
        <Card className="expenses">
            {items}
        </Card>
    );
}

export default Expenses;