// import React from 'react';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('£'); // Default currency is Pound (£)

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='mt-3'>
                        <label className='mr-2 currency-label'>Currency:</label>
                        <select value={selectedCurrency} onChange={handleCurrencyChange} className='custom-select'>
                            <option value="$">Dollar ($)</option>
                            <option value="£">Pound (£)</option>
                            <option value="€">Euro (€)</option>
                            <option value="₹">Rupee (₹)</option>
                    </select>
                </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList currency={selectedCurrency} />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm currency={selectedCurrency}/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;