import styled from "styled-components";

export default function Habitos() {
  return (
    <Container>
      <TopBar>
        <Logo>Trackit</Logo>
        <UserImage src="" alt="Foto do usuário" />
      </TopBar>

      <Content>
        <Title><h2>Meus Hábitos</h2></Title>

        <AddButton>+</AddButton>
      </Content>

      <Text>
        <input type="text" placeholder="nome do hábito" />
        <div className="diasDaSemana">D S T Q Q S S </div>
        <Button>
          <button >Cancelar</button>
          <button >Salvar</button>
        </Button>
      </Text>
      <Messagem>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
      </Messagem>
      
      <CardH>
        <p>Ler 1 capítulo de livros</p>
        <div><p>D S T Q Q S S </p></div>
      </CardH>

  
      <CardH>
        <p>Ler 1 capítulo de livros</p>
        <div><p>D S T Q Q S S </p></div>
      </CardH>


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
  background-color: #E5E5E5;
align-items: center;
justify-content: center;
hei
width: 375px;

`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  width: 375px;
  height: 70px;
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

const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;


h2 {font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22px;
color: #126BA5;
margin-right: 160px;

}

`;

const AddButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
 width: 40px;
 height: 35px;
 font-size: 27px;
  background-color: #52B6FF;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
`;


const CardH = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 15px;

p {
  padding: 10px;
}
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

const Messagem = styled.div`
color: #666666;
font-weight: 400;
font-size: 17px;
margin: 30px 0 0 0;
width: 340px;
height: 250px;

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
    margin-bottom: 10px;
    padding: 5px;
    width: 340px;
    backgtounde: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 5px;
  height: 180px;
  box-sizing: border-box;
  padding-left: 15px;

  input {
    width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19px;
color: #DBDBDB;
  }

  .diasDaSemana {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-family: 'Lexend Deca';
    font-size: 14px;
    color: #000;
    margin-top: 10px;
  }

  
 
`;

const Button = styled.div`
button{
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  display: flex;
  font-family: 'Lexend Deca';
  font-size: 14px;
  width: 84px;
  height: 35px;
  justify-content: center;
  align-items: center;


}

button:nth-child(3) {
color:  #52B6FF;
 

}
button:last-child {
  color: #fff;
  background-color: #52B6FF;

}

`;
