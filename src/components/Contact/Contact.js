/*
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
*/

import React from "react";
import { Form } from "reactstrap";


export default function Contact() {
    return(
<Form>
 <FormGroup>
    <Label for="name">
      Valid input
    </Label>
    <Input valid />
    <FormFeedback valid>
      Sweet! that name is available
    </FormFeedback>
    <FormText>
      Please provide your name.
    </FormText>
  </FormGroup>

  <FormGroup>
    <Label for="email">
      Valid input
    </Label>
    <Input valid />
    <FormFeedback valid>
      Sweet! that email is available
    </FormFeedback>
    <FormText>
      Please provide your email.
    </FormText>
  </FormGroup>

  <FormGroup>
    <Label for="email">
      Invalid input
    </Label>
    <Input invalid />
    <FormFeedback>
      Oh noes! that name is already taken
    </FormFeedback>
    <FormText>
      Please re-enter your email.
    </FormText>
  </FormGroup>


  <FormGroup>
    <Label for="password">
      Valid input
    </Label>
    <Input valid />
    <FormFeedback valid>
      Sweet! that password is available
    </FormFeedback>
    <FormText>
      Please provide your password.
    </FormText>
  </FormGroup>

  <FormGroup>
    <Label for="password">
      Invalid input
    </Label>
    <Input invalid />
    <FormFeedback>
      Oh noes! that password is already taken
    </FormFeedback>
    <FormText>
      Please re-enter your password.
    </FormText>
  </FormGroup>



</Form>
    );

}