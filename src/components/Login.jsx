import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Login() {
  return (
    <Container>
      <Form action="">
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <InputField type="text" name="username" id="Username" />
        </FormGroup>

        

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <InputField type="password" name="password" id="Password" />
        </FormGroup>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
}

export default Login;
