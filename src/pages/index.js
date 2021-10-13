import React from "react";
import "semantic-ui-css/semantic.css";
import { Segment, Header, Form, Button } from "semantic-ui-react";
//import gamesPage from "./games";
//import Nav from '../components/nav';

const HomePage = () => {
  // const [openGamesPage, setGamesPage] = React.useState(false);

  // function OpenGamesPage(){
  //   setGamesPage(true);
  // }
  // function closeGamesPage(){
  //   setGamesPage(false);
  // }
  return(
    <React.Fragment>
      <Segment>
        <Header as='h2'>Home</Header>
        <Form>
          <Form.Field label='Some random text that needs not readen.'/>
            <Button type="button" color="green">Join Now!</Button>
        </Form>
      </Segment>
      <Header>News</Header>
      <Form.Field label='some more random text'></Form.Field>
    </React.Fragment>
  )
};
export default HomePage; 