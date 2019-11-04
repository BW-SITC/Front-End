import styled from "styled-components";

//******************************************
//******************************************
//******************************************
//     ~~~~~  Home Page   ~~~~~
//******************************************
//******************************************
//******************************************

export const HomePageHeading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9370db;
  font-size: 4rem;
  color: white;
  font-family: "Sans";
  @media (max-width: 840px) {
    font-size: 2rem;
  }
`;
export const ContainerDiv = styled.div`
  display: flex;
  align-content: center;
  background: white;
  padding: 55px 30px 55px 30px;
  align-itmes: center;
  justify-content: space-around;
  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HomeBox = styled.div`
  display: flex;
  justify-content: center;
  border: 4px solid #9370db;
  padding: 50px 50px 50px 50px;
  margin: 0px 150px 0px 150px;
  background: white;
  width: 20%;
  height: 33%;
  box-shadow: 1px 1px 2px #000000, 0 0 10px #000000;
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  color: black;
  text-decoration: none;
`;

//******************************************
//******************************************
//******************************************
//     ~~~~~  NAV BAR    ~~~~~
//******************************************
//******************************************
//******************************************

export const NavBarStyled = styled.div`
  background: linear-gradient(#9370db, #f1f1f1);
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const HeaderDiv = styled.div`
  display: flex;
`;

export const NavBarHeading = styled.h2`
  font-family: "Sans";
  font-size: 2rem;
  color: #57606f;
  margin-right: 25px;
`;

//******************************************
//******************************************
//******************************************
//       ~~~~~  REGISTRATION  ~~~~~
//             ~~~~~  AND ~~~~~
//          ~~~~~  LOGIN PAGES ~~~~~
//******************************************
//******************************************
//******************************************

export const Heading = styled.p`
  font-family: "Sans";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

`;
export const Label = styled.label`
  font-size: 0.8rem;
  color: black;
  padding: 0px 5px 0px 5px;
  margin: 5px;
  font-family: "Sans";
`;
export const Description = styled.p`
  color: black;
  font-size: 1rem;
  margin-bottom: 45px;
  font-family: "Sans";
`;
export const ButtonDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  color:black;
`;
export const Button = styled.button`
         font-family: "Sans";
         margin: 35px 5px 5px 5px;
         padding: 10px;
         width: 30%;
         border-radius: 5px;
         box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);
         justify-content: center;
         flex-wrap: wrap;
         text-decoration: none;
         color: black;
       `;
