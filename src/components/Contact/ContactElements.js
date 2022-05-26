import styled from 'styled-components'

export const ContactContainer = styled.div`
background: #fbf6ed;
height: 100vh;
`

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 5%;
margin-left: auto;
margin-right: auto;
width: min(80%, 850px);
`

export const H1 = styled.h1`
text-align: center;
`

export const Form = styled.form`
  border: 2px solid #111111;
  background-color: #fbf6ed;
  border-radius: 10px;
  margin-top: 50px;
  padding: 20px;
  width: 100%;
`

export const Label = styled.label`
`

export const Input = styled.input`
  height: 30px;
  width: 100%;
  border: 0.5px solid #111111;
  border-radius: 3px;
  margin-bottom: 10px;

  &:focus {
    outline-color: #b5b35c;
    box-shadow: 0 0 10px #b5b35c;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  border: 0.1px solid #111111;
  border-radius: 3px;
  margin-bottom: 10px;

  &:focus {
    outline-color: #b5b35c;
    box-shadow: 0 0 10px #b5b35c;
  }
`

export const SubmitWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const Submit = styled.input`
  background-color: #b5b35c;
  color: black;
  cursor: pointer;
  border: 0px;
  font-size: 1rem;
  height: 2.625rem;
  width: 6rem;
  border-radius: 100px;
  font-weight: bold; 

  &:hover {
    background-color: black;
    color: #b5b35c
  }
`

export const P = styled.p`
display: ${({ sent }) => (sent ? 'flex' : 'none')};
padding-top: 3%;
justify-content: center;
`


