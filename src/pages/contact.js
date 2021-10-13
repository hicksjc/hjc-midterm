import React from 'react';
import "semantic-ui-css/semantic.css";
import {Containter, Header, Form, Input, TextArea, Button} from 'semantic-ui-css';

const contactPage = () => {
    return (
        <React.Fragment>
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
                    <Button>Send Message</Button>
                </Form>
            </Container>
        </React.Fragment>
    )
}
 export default contactPage;