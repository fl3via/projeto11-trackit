import styled from "styled-components";

export default function Historico() {
    return (
        <>
            <Container>
                <TopBar>
                    <Logo>Trackit</Logo>
                    <UserImage src="" alt="Foto do usuário" />
                </TopBar>

                <Content>
                    <Title><h2>Histórico</h2></Title>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Content>

               


                <Footer>
                    <FooterText>Hábitos</FooterText>
                    <CircleButton>Hoje</CircleButton>
                    <FooterText>Históricos</FooterText>
                </Footer>
            </Container>

        </>
    )
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
p {
    font-size: 17.976px;
line-height: 22px;

color: #666666;
width: 338px;
height: 74px;
}

 
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



