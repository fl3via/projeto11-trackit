import React from 'react';
import styled from 'styled-components';
import resetcss from './css/reset.css'
import TelaLogin from './pages/TelaLogin';
import Cadastro from './pages/Cadastro';
import Habitos from './pages/Habitos';
import {BrowserRouter, Route, Routes} from "react-router-dom"

  

export default function App() {
  return (
    <>


<BrowserRouter>
<Routes>
  <Route path="/" element={ <TelaLogin />} /> 
  <Route path="/cadastro" element={<Cadastro /> } /> 
  <Route path="/habitos" element={<Habitos />} /> 
{/*  <Route path="/hoje" element={<Hoje />} /> 
  <Route path="/historico" element={<Historico />} /> */}
 </Routes>
</BrowserRouter>
    </>

  );
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

const SignupLink = styled.p`
  margin-top: 20px;


    color: #52B6FF;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
text-decoration: none;
`;
