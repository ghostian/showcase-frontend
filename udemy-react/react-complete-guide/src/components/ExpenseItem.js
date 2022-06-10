import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    // const date = new Date(2022, 6, 9);
    // const title = "Car Insurance";
    // const price = 129.64;
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__descriptions">
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
