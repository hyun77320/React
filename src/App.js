import React, { Children, Component } from "react"; //eslint-disable-line
import MyComponent from "./MyComponent"; //eslint-disable-line
import Counter from "./Counter"; //eslint-disable-line
import Say from "./Say"; //eslint-disable-line
import EventPractice from "./EventPractice"; //eslint-disable-line
import ValidationSample from "./ValidationSample"; //eslint-disable-line
import ScrollBox from "./ScrollBox"; //eslint-disable-line
import IterationSample from "./IterationSample"; //eslint-disable-line
import LifeCycleSample from "./LifeCycleSample"; //eslint-disable-line
import ErrorBoundary from "./ErrorBoundary"; //eslint-disable-line

function getRandomcolor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
    state = {
        color: '#000000'
    }
    
    handleClick = () => {
        this.setState({
            color: getRandomcolor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
};

export default App;
