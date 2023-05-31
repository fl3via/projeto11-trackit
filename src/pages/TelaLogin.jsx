import styled from "styled-components";
import {Link} from "react-router-dom"

export default function TelaLogin() {
  return(
    <Container>
       <ImageContainer>
         <img src="/caminho/para/sua/imagem.jpg" alt="Imagem Centralizada" />
       </ImageContainer>
       <Logo>
         <h1>Trackit</h1>
       </Logo>
       <FormContainer>
         <input type="email" placeholder="email" />
         <input type="password" placeholder="senha" />
         <button type="submit">Entrar</button>
       </FormContainer>
       <SignupLink to="/cadastro">
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
    max-width: 100%;
    max-height: 100%;
  }
`;

const Logo = styled.div`
  text-align: center;

  h1 {
    font-family: 'Playball';
  
    color: #126BA5;
    font-size: 100px;
    font-weight: 400;
    margin: 0;
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
