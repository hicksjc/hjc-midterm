import React from 'react';
import "semantic-ui-css/semantic.css";
import {Container, Header, Form, Input, TextArea, Button} from 'semantic-ui-react';

import Navbar from '../components/Navbar';

const contactPage = () => {
    return (
        <React.Fragment>
            <Navbar active='contact'/>
            <Container>
                <Header>Contact Us!</Header>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <Input placeholder='Enter your full name...'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Contact Email:</label>
                        <Input placeholder='Enter the best email to contact you with'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Message</label>
                        <TextArea placeholder='Enter your message...'/>
                    </Form.Field>
                    <Button type="button" color="green">Send Message</Button>
                </Form>
            </Container>
        </React.Fragment>
    )
}
 export default contactPage;