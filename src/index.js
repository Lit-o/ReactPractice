import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Header } from './App';


ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);




// const title = 'bar'
// const time = new Date()

// const elem = (
//   <div>
//     <h2 >Foo:{title}</h2>
//     <input type="text" id="input" />
//     <label htmlFor='input'> Label I quess </label>
//     <button className="click" tabIndex="0">Oh My!</button>
//   </div>
// )

// const elem = <h2>Hello!</h2>
// const elem = React.createElement('h2', {className: 'red'}, 'Hello World!')
// const elem = {
//   type: 'h2',
//   props: {
//     className: 'red',
//     children: 'Hello World'
//   }
// }
