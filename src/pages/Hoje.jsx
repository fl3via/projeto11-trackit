import styled from "styled-components";
import MiniLogo from "../assets/logo-mini.svg"

export default function Hoje() {
    return (
        <>
            <Container>
                <TopBar>
                 <img src={MiniLogo} alt="logo" />
                    <UserImage src="" alt="Foto do usuário" />
                </TopBar>

                <Content>
                    <Title><h2>Segunda, 17/05</h2></Title>
                    <p>67% dos hábitos concluídos</p>
                </Content>

                <CardH>
                    <p className="p">Ler 1 capítulo de livros</p>
                   <p className="pp">Sequência atual:  <spam>4 dias</spam> </p>
                   <p className="pp">Seu recorde: <spam>5 dias</spam> </p>
                   <div> <button>V</button></div>
                  
                </CardH>


                <CardH>
                <p className="p">Ler 1 capítulo de livros</p>
                   <p className="pp">Sequência atual: 4 dias</p>
                   <p className="pp">Seu recorde: 5 dias</p>
                   <button>V</button>
                </CardH>


                <Footer>
                    <FooterText>Hábitos</FooterText>
                    <CircleButton>Hoje</CircleButton>
                    <FooterText>Históricos</FooterText>
                </Footer>
            </Container>

        </>
    );
};

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



const UserImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  margin-left: -20px;
`;

const Content = styled.div`
margin-bottom: 15px;
margin-top: 15px;

p {
    color: #8FC549;  
    margin-top: 7px;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
}
`;

const Title = styled.div`



h2 {
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22px;
color: #126BA5;
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
font-family: 'Lexend Deca';
font-style: normal;
padding-left: 10px;
  padding-top: 10px;
  color: #666666;

 .p {
    
font-weight: 400;
font-size: 19px;
line-height: 25px;
  }

  .pp {
    font-size: 12px;
line-height: 16px;
  }

  spam {
color: #8FC549;
  }
  
  button {
    background: #8FC549;
border-radius: 5px;
width: 40px;
height: 40px;
border: none;
color: #fff;
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