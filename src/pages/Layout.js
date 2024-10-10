import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderContainer = styled.div`
    width: 100%;
    z-index: 1;
`;

const MainWrapper = styled.div`
    display: flex;
    flex: 1;
`;

const AsideContainer = styled.div`
    width: 80px; 
    transition: width 0.3s ease;
`;

const MainContent = styled.div`
    flex-grow: 1;
    padding: 20px;
`;

function Layout() {
    return (
        <Container>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <MainWrapper>
                <AsideContainer>
                    <Aside />
                </AsideContainer>
                <MainContent>
                    <Outlet />
                </MainContent>
            </MainWrapper>
            <Footer />
        </Container>
    );
}

export default Layout;
