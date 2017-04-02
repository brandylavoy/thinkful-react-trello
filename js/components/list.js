import React from 'react';
import Card from './card';

export default class List extends React.Component {
    render() {
        const list = [];
        for (let i = 0; i < 3; i++) {
            list.push( <Card /> );
        }
        return ( <div className = "card-list" > {list}
        </div>
        );
    }
}


