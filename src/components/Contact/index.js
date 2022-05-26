import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import {
  ContactContainer,
  H1,
  Form,
  FormContainer,
  Label,
  Input,
  TextArea,
  SubmitWrap,
  Submit,
  P,
} from './ContactElements'

export default function Contact() {
  const form = useRef()
  const [sent, setSent] = useState(false);
  console.log(sent)

  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm('gmail', 'gmail_template', e.target, '74dzhaFKJECm1v_g7')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    setSent(true);
  }

  return (
    <ContactContainer id='contact'>
      <FormContainer>
        <H1>Lets get in contact!</H1>
        <Form ref={form} onSubmit={sendEmail}>
          <Label>Name*</Label>
          <Input type='text' name='name' required />
          <Label>Email*</Label>
          <Input type='email' name='email' required />
          <Label>Subject*</Label>
          <Input type='text' name='subject' required />
          <Label>Message*</Label>
          <TextArea name='message' rows='10' required />
          <SubmitWrap>
            <Submit type='submit' value='Send' />
          </SubmitWrap>
          <P sent={sent}>Message Sent!</P>
        </Form>
      </FormContainer>
    </ContactContainer>
  )
}
