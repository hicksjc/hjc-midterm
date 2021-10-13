import React from "react";
import "semantic-ui-css/semantic.css";
import { Segment, Header, Form, Button } from "semantic-ui-react";
//import Nav from '../components/nav';

const HomePage = () => {
  return(
    <React.Fragment>
      {/* <Nav/> */}
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