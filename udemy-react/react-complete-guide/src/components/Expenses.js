import './Expenses.css'

function Expenses(props) {

    return (
        <div className="expenses">
            <div className="expense-item__descriptions">
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default Expenses;