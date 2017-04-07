import React from 'react';
import Card from './card';



export default class List extends React.Component{
        render() {
            let  list = [];
            for (let i = 0; i < 3; i++) {
                 list.push(<Card  cardText = "hey"/>);
            }
        return (
            <div className = "list" >
                {list} {this.props.list}
            </div>

        );
    }
}






