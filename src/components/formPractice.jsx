import React, { Component } from 'react';
import FormPracticeRenderer from './formPracticeRenderer';

class formPractice extends Component{

    constructor() {
        super();
        this.state = {
            firstName : "Bob",
            lastName : "Smith",
            isCool : false,
            gender : "male",
            emoji : "😃"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name] : e.target.checked
            })
        }
        else{
            this.setState({
                [e.target.name] : e.target.value
            })
        } 
    }

    render() {
        return (
            <FormPracticeRenderer
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }

}

export default formPractice;