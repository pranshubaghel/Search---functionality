// DateTimeDisplay.js

import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return (
        <div>
            <p>Current Time: {currentDateTime.toLocaleTimeString()}</p>
            <p>Current Date: {currentDateTime.toLocaleDateString(undefined, options)}</p>
        </div>
    );
};

export default DateTimeDisplay;
