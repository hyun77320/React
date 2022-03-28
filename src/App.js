import React, { Children, Component } from "react"; //eslint-disable-line
import MyComponent from "./MyComponent"; //eslint-disable-line
import Counter from "./Counter"; //eslint-disable-line
import Say from "./Say"; //eslint-disable-line
import EventPractice from "./EventPractice"; //eslint-disable-line
import ValidationSample from "./ValidationSample"; //eslint-disable-line
import ScrollBox from "./ScrollBox"; //eslint-disable-line
import IterationSample from "./IterationSample"; //eslint-disable-line

class App extends Component{
    render() {
        return (
            <IterationSample />
        );
    }
};

export default App;
