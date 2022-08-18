// import React from 'react'; деструктуризируем и вытаскиваем только Component а не весь React
import {Component} from 'react';
import './App.css';

export const Header = ({name, surname}) => {
    return <h2>Hello {name} {surname}</h2>
}

const Field = (props) => {
    const holder = "Enter " + props.func() ;
    const styleField = {
        width: '300px'
    }
    return <input
        placeholder={holder}
        type='text'
        style={styleField} />
}

const Button = (props) => {
    const text = "YES! YES! SAY IT!"
    const res = () => {
        return 'I\'m from function! ' + props.obj.firstObjProp
    }
    const textTag = <p>Yeee, click it</p>
    const isFromFunc = true
    return <button>{isFromFunc ? res() : textTag} </button>
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
            <Header name="John" surname="Johnovi"/>
            <Header name="Bohn" surname="Bohnovi"/>
            <Field func={() => "I\'m result from Function Props"}/>
            <Button obj={{firstObjProp: 'I\'m from props obj'}}/>
            <FieldWithClass/>
        </div>
    );
}

export default App;
