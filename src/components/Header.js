import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #343B8C;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: 50px;
`;

const Header = () => {
    return (
        <Nav>
            <Logo src={`${process.env.PUBLIC_URL}/images/navLogo.png`} alt="bitbyte 로고" />
        </Nav>
    );
};

export default Header;
