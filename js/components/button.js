import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
            clicked: true
        });
    }
    render() {
        return (
            <div>
            <button onClick={this.onButtonClick} >Click ME</button>

            </div>
        );
    }
}
