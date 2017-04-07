import React from 'react';
import List from './list';
import Form from './form';
//hey teacher leave the kids alone
export default class Board extends React.Component {
    render() {
        let board = [];
        for (let i = 0; i < 3; i ++) {
            board.push(<List/>);
        }
        return (
            <div className = "board">
               <Form />
               {board} {this.props.lists}

           </div>

        );
    }
}

