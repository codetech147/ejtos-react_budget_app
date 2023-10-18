import React, { useContext } from 'react';
import CurrencyContext from '../context/CurrencyContext'; // Import the context

const Currency = () => {
    const { currency, setCurrency } = useContext(CurrencyContext); // Consume the context to get and set the selected currency

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value); // Update the selected currency when the dropdown value changes
    };

    return (
        <div>
            <label htmlFor="currencyDropdown">Currency:</label>
            <select
                id="currencyDropdown"
                value={currency}
                onChange={handleCurrencyChange} // Call the function to update the selected currency
            >
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};

export default Currency;
