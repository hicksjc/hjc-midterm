import React from 'react';
import "semantic-ui-css/semantic.css";
import { Card, Rating, Icon } from 'semantic-ui-react';

import Navbar from '../components/Navbar';

const gamesPage = () => {
    return (
        <React.Fragment>
            <Navbar active='games'/>
            <Card.Group width='3'>
                <Card>
                    <Card.Header>
                        Tic-Tac-Toe
                    </Card.Header>
                    <Card.Meta>3 in a row</Card.Meta>
                    <Rating icon='star' defaultRating={2} maxRating={5}></Rating>
                    <Icon circular name='info'/>
                </Card>
                <Card>
                    <Card.Header>
                        Checkers
                    </Card.Header>
                    <Card.Meta>Jumping race</Card.Meta>
                    <Rating icon='star' defaultRating={3} maxRating={5}/>
                    <Icon circular name='info'/>
                </Card>
                <Card>
                    <Card.Header>Snakes & Ladders</Card.Header>
                    <Card.Meta>Snake!</Card.Meta>
                    <Rating icon='star' defaultRating={4} maxRating={5}/>
                    <Icon circular name='info'/>
                </Card>
                <Card>
                    <Card.Header>Yahtzee</Card.Header>
                    <Card.Meta>Feeling lucky?</Card.Meta>
                    <Rating icon='star' defaultRating={5} maxRating={5}/>
                    <Icon circular name='info'/>
                </Card>
            </Card.Group>
        </React.Fragment>
    )
}
export default gamesPage;