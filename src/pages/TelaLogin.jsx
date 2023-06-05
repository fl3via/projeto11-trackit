import styled from "styled-components";
import {Link} from "react-router-dom"
import Logoo from "../assets/logo.svg"

export default function TelaLogin() {
  return(
    <Container>
       <ImageContainer>
         <img src={Logoo} alt="Imagem Centralizada" />
       </ImageContainer>
    
       <FormContainer>
         <input type="email" placeholder="email" data-test="email-input"  />
         <input type="password" placeholder="senha"   data-test="password-input" />
         <button type="submit" data-test="login-btn" >Entrar</button>
       </FormContainer>
       <SignupLink to="/cadastro" data-test="signup-link" >
     Não tem uma conta? Cadastre-se!
       </SignupLink>
     </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  text-align: center;

  img {
    width: 180px;
    height: 178px;
  }
`;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  input {
    margin-bottom: 10px;
    padding-left: 10px;
    width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-size: 19px;
  }

  button {
    padding: 8px 16px;
    background: #52B6FF;
border-radius: 4px;
width: 303px;
height: 45px;
border: none;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: white;
  }

 
`;

const SignupLink = styled(Link)`
  margin-top: 20px;


    color: #52B6FF;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
text-decoration: none;
`;
