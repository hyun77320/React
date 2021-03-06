// import React, { Component } from 'react'; // 클래스형

// class EventPractice extends Component {
//     state = {
//         username: '',
//         message: ''
//     }
    
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ':' + this.state.message);
//         this.setState({
//             username: '',
//             message: ''
//         });
//     }

//     handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             this.handleClick();
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type='text'
//                     name='username'
//                     placeholder='사용자명'
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                  <input
//                     type='text'
//                     name='message'
//                     placeholder='아무거나 입력해 보세요'
//                     value={this.state.message}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

// export default EventPractice;



import React, { useEffect, useState } from 'react'; // 함수형

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    
    const onClick = () => {
        if (username === '') {
            alert('사용자명을 입력하세요.')
        }
        else if (message === '') {
            alert('메세지를 입력하세요.')
        }
        else {
            alert(username + ':' + message);
            setForm({
                username: '',
                message: ''
            })
        }
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            if (username === '') {
                alert('사용자명을 입력하세요.')
            }
            else if (message === '') {
                alert('메세지를 입력하세요.')
            }
            else onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type='text'
                name='username'
                placeholder='사용자명'
                value={username}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <input
                type='text'
                name='message'
                placeholder='아무거나 입력해 보세요'
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;