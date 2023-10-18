import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, totalSpending } = useContext(AppContext); // Retrieve totalSpending from the context
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);

        if (newBudgetValue < totalSpending) {
            alert('Budget cannot be lower than the total spending.');
        } else if (newBudgetValue > 20000) {
            alert('Budget should not exceed £20,000');
        } else {
            setNewBudget(newBudgetValue);
        }
    }

    return (
<div className='alert alert-secondary'>
{/* <span>Budget: £{budget}</span>  */}
    {/* <span><strong>Budget: {budget}</strong></span> */}
    <span><strong>Budget: £</strong></span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
