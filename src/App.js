// import React from 'react'; деструктуризируем и вытаскиваем только Component а не весь React
import {Component} from 'react';
import './App.css';

export const Header = () => {
    return <h2>Gello Gold!</h2>
}

const Field = () => {
    const holder = "Enter HERE";
    const styleField = {
        width: '300px'
    }
    return <input
        placeholder={holder}
        type='text'
        style={styleField} />
}

const Button = () => {
    const text = "YES! YES! SAY IT!"
    const res = () => {
        return 'Ooo ho ho, i\'m from function!'
    }
    const textTag = <p>Yeee, click it</p>
    const isFromFunc = true
    return <button>{isFromFunc ? res() : textTag}</button>
}

class FieldWithClass extends Component {
    render() {
        const holder = "Enter Before  Pls";
        const styleField = {
            width: '300px'
        };
        
        return <input
        placeholder={holder}
        type='text'
        style={styleField} />
    }
}

function App() {
    return (
        <div className="App">
            <Header />
            <Field />
            <Button />
            <FieldWithClass/>
        </div>
    );
}

export default App;
