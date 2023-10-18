import React, { useContext } from 'react';
import CurrencyContext from './context/CurrencyContext'; // Import the context

const Currency = () => {
    const currency = useContext(CurrencyContext); // Consume the context to get the selected currency

    return (
        <div>
            <label htmlFor="currencyDropdown">Currency:</label>
            <select id="currencyDropdown" value={currency} onChange={(event) => currency.setCurrency(event.target.value)}>
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};

export default Currency;
