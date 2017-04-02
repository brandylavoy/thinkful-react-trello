import React from 'react';

export default function Card() {
    const cardDetail = 'This is a card';
    return (
        <div className="Card">
        <div className="card-detail">{cardDetail}</div>
        </div>
    );
}
