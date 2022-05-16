import React, { Component } from "react"; //클래스형
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;

// import React, { useState, useRef } from 'react'; //함수형
// import './ValidationSample.css';

// const ValidationSample = () => {
//     const [form, setForm] = useState({
//         password: '',
//         clicked: false,
//         validated: false
//     })
    
//     const { password, clicked, validated } = form;    

//     const handleChange = e => {
//         setForm({
//             password: e.target.value
//         })
//     }

//     const handleButtonClick = () => {
//         setForm({
//             clicked: true,
//             validated: password === '0000'
//         });
//         this.input.focus();
//     }

//     return (
//         <div>
//             <input
//                 type="password"
//                 ref={(ref) => this.input=ref}
//                 value={password}
//                 onChange={handleChange}
//                 className={clicked ? (validated ? 'success' : 'failure') : ''}
//             />
//             <button onClick={handleButtonClick}>검증하기</button>
//         </div>
//     );
// };

// export default ValidationSample;
