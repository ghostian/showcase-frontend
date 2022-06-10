import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Expenses from "./Expenses"

function ExpenseItem(props) {
    // const date = new Date(2022, 6, 9);
    // const title = "Car Insurance";
    // const price = 129.64;
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <Expenses title={props.title} amount={props.amount}/>
        </div>
    )
}

export default ExpenseItem;
