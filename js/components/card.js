import React from 'react';


export default class Card extends React.Component{
    render () {
        return (
            <div className="card">
                This is a Card {this.props.cardText}
            </div>

//        <div className="cardDetails">
//
//            </div>
        );
    }
}


