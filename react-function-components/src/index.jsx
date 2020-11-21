import React from 'react';
import ReactDOM from 'react-dom';

const customButton = () => {
    return <button>Click Me!</button>;
};
ReactDOM.render(customButton(),document.getElementById('root'));