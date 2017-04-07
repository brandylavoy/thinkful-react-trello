import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onChange: false
        };
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
    }

    onAddInputChanged() {
        this.setState({
            onChange: true
        });
    }
    render() {
        return (
            <div>
            <input onChange={this.onAddInputChanged} value="input value" />

            </div>
        );
    }
}
