import styled from "styled-components";

export default function Habitos() {
    return (
        <Container>
        <TopBar>
          <Logo>Trackit</Logo>
          <UserImage src="" alt="Foto do usuário" />
        </TopBar>
  
        <Content>
          <Title>Meus Hábitos</Title>
         
          <AddButton>+</AddButton>
        </Content>

        <Text>
            <input type="text" placeholder="nome do hábito"/>
            <div className="diasDaSemana">D S T Q Q S S </div>
            <button >Cancelar</button>
            <button className="ok">Salvar</button>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
          </Text>
        <Footer>
          <FooterText>Hábitos</FooterText>
          <CircleButton>Hoje</CircleButton>
          <FooterText>Históricos</FooterText>
        </Footer>
    </Container>
  
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #E5E5E5;
  width: 375px;
height: 700px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #126BA5;
`;

const Logo = styled.h1`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
  font-size: 22px;
  color: #ffff;
`;

const UserImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
 
`;

const Title = styled.h2`
  font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22px;
color: #126BA5;
`;

const AddButton = styled.button`
 width: 40px;
 height: 35px;
 font-size: 20px;
  background-color: #52B6FF;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  position: relative;
  width: 375px;
height: 70px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17px;
color: #52B6FF;

`;



const FooterText = styled.p`
  font-size: 14px;
`;

const CircleButton = styled.button`
  width: 91px;
  height: 91px;
  border-radius: 98px;
  background-color: #52B6FF;
  border: none;
  color: #FFFFFF;
  font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17px;
margin-bottom: 35px;
`;

const Text = styled.div`
  input[type="text"] {
    margin-bottom: 10px;
    padding: 5px;
    width: 200px;
    backgtounde: red;
  }

  .diasDaSemana {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-family: 'Lexend Deca';
    font-size: 14px;
    color: #000;
  }

  button {
    margin-right: 10px;
    padding: 8px 16px;
    background-color: #52B6FF;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-family: 'Lexend Deca';
    font-size: 14px;
  }

  p {
    margin-top: 20px;
    font-family: 'Lexend Deca';
    font-size: 14px;
    color: #000;
  }
`;
