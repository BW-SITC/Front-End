import React from "react"; 
import { Link } from "react-router-dom";
// import HomeVolunteer from './HomeVolunteer'
// import HomeAdmin from './HomeAdmin'
import {
    HomeBox,
    HomePageHeading,
    ContainerDiv,
    Paragraph
  } from "./styling/styled.js"

const Home = () => {

    return (
      <>
        <div>
          <HomePageHeading> Welcome To School in the Cloud </HomePageHeading>
          {/* Links */}
          <ContainerDiv>
            <Link to="/student/home">
              <HomeBox>
                <Paragraph> Students </Paragraph>
              </HomeBox>
            </Link>
            <Link to="/volunteer/login">
              <HomeBox>
                <Paragraph> Volunteers </Paragraph>
              </HomeBox>
            </Link>
            <Link to="/admin/login">
              <HomeBox>
                <Paragraph> Admin </Paragraph>
              </HomeBox>
            </Link>
          </ContainerDiv>
        </div>
      </>
    );
}

export default Home; 