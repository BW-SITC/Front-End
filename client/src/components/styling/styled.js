import styled from "styled-components"

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
  background: #9370DB;
  font-size: 4rem;
  color: white;
  font-family: "Sans";

  @media (max-width: 840px) {
    font-size: 2rem;
  }
`
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
`


export const HomeBox = styled.div`
  border: 4px solid #9370DB;
  padding: 50px 50px 50px 50px;
  margin: 0px 150px 0px 150px;
  background: white;
  width: 33%;
  height: 33%;
  box-shadow: 1px 1px 2px #000000, 0 0 10px #000000;
`

export const Paragraph = styled.p`
  font-size: 1.8rem;
  color: black;
  text-decoration: none;
  
`