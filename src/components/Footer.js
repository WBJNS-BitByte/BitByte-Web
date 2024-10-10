import React from 'react';
import styled from 'styled-components';

// FooterContainer: footer 스타일을 위한 컨테이너
const FooterContainer = styled.footer`
    width: 70%;
    padding: 20px;
    text-align: right;
    border-top: 1px solid #000;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 10px;
    }
`;

// Footer: footer 컴포넌트
const Footer = () => {
    return (
        <FooterContainer>
            <ul>
                <li style={{ textDecoration: 'underline' }}>비트바이트에 대해 궁금하신가요?</li>
                <li>WBJNS@gmail.com<br />2024 비트바이트. All rights reserved.</li>
                <li>비트캠프 Tel. 02-123-1234</li>
            </ul>
        </FooterContainer>
    );
};

export default Footer;
