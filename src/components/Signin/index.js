import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormInput,
  FormButton,
  Text,
  FormContent,
  FormLabel,
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dollar</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Ingresá a tu cuenta</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Contraseña</FormLabel>
              <FormInput type="pasword" required />
              <FormButton type="submit">Acceder</FormButton>
              <Text>Olvidé mi Contraseña</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
