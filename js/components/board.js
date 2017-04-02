import React from 'react';
import List from './list';


export default class Board extends React.Component {
    render() {
        const board = [];
        for (let i = 0; i < 3; i++) {
            board.push( <List/> );
        }
        return ( < div className = "board" >
                       {board}
                       < /div>);
    }
}

