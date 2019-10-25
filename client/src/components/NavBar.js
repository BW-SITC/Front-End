import React from "react"
import { Link } from "react-router-dom"
import { NavBarStyled, NavBarHeading, HeaderDiv } from "./styling/styled"

const NavBar = (props) => {
    return (
        <>
            <NavBarStyled>
                <Link to="/" onClick={() => localStorage.removeItem('token')}>
                    <i className="/">
                    </i>
                </Link>
                <HeaderDiv>
                    <NavBarHeading>School in the Clouds</NavBarHeading>
                    <Link to="/"> </Link>
                </HeaderDiv>

            </NavBarStyled>
        </>
    )
}

export default NavBar