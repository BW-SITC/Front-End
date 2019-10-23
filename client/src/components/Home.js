import React from "react"; 
import { Link } from "react-router-dom";
import {
    HomeBox,
    HomePageHeading,
    ContainerDiv,
    Paragraph
  } from "./styling/styled.js"

const Home = () => {

    return(
        <>
        <div>
            <HomePageHeading> Welcome To School in the Cloud </HomePageHeading>
                {/* Links */}
            <ContainerDiv>
            <HomeBox>
                <Link to="/student">
                    <Paragraph> Students </Paragraph>
                </Link>
            </HomeBox>
            <HomeBox>
                <Link to="/volunteer"> 
                    <Paragraph> Volunteers </Paragraph>
                </Link>
            </HomeBox>
            <HomeBox>
                <Link to="/admin"> 
                    <Paragraph> Admin </Paragraph>
                </Link>
            </HomeBox>
            </ContainerDiv>
      </div>
        </>
    )
}

export default Home; 