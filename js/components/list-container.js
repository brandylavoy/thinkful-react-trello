import React from 'react';


export default class ListContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inputText: "",
                cardsList:[]
            };
            this.onClick = this.onClick.bind(this);
        }

    onClick() {

        event.preventDefault();

        let cardsArray = this.state.cards();
        cardsArray.push(
        <Card
            text={this.state.value}

            />
        );

        this.setState({
            value: "",
            cards: cardsArray,
        });
    },

    render() {
        return (
            <div className = "list">
            {this.state.cards}
            </div>


        );
    }
}







