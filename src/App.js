import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './context/AppContext';
import Currency from './components/currency'; // Import the Currency component
import CurrencyContext from './context/CurrencyContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
    const [selectedCurrency, setCurrency] = useState('£'); // Default currency is Pound (£)

    return (
        <AppProvider>
            <CurrencyContext.Provider value={{ currency: selectedCurrency, setCurrency }}>
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
                            <Currency />
                        </div>
                    </div>

                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row'>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    </div>
                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AllocationForm currency={selectedCurrency} />
                        </div>
                    </div>
                </div>
            </CurrencyContext.Provider>
        </AppProvider>
    );
};

export default App;
