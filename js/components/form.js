import React from 'react';
import Button from './button';
import Input from './input';

export default class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    render() {
        return (
            <div>
            <Button />
            <Input />
            </div>
        );
    }
}

