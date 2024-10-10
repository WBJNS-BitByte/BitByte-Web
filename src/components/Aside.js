import React, { useState } from 'react';
import styled from 'styled-components';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PushPinIcon from '@mui/icons-material/PushPin';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// AsideContainer: 사이드바 컨테이너
const AsideContainer = styled.aside`
    width: ${(props) => (props.isFolded ? '80px' : '240px')};
    transform: translateY(5%);
    height: 70vh;
    background-color: white;
    transition: width 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    border-right: 1px solid #ccc;
    border-radius: 0 20px 20px 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// 구분선 스타일
const Divider = styled.hr`
    width: 80%;
    border: none;
    border-top: 1px solid #ccc; 
    margin: 20px 0;
`;

// Profile: 사용자 프로필 영역
const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    transition: all 0.3s ease;
`;

// ProfileImage: 사용자 프로필 이미지
const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

// ProfileInfo: 사용자 이름과 정보
const ProfileInfo = styled.div`
    margin-left: 15px;
    display: ${(props) => (props.isFolded ? 'none' : 'block')};
    margin-right: ${(props) => (props.isFolded ? '0' : '10px')};
    transition: all 0.3s ease;
    text-align: center;
    p {
        color: black;
        font-size: 1rem;
    }
`;

// ToggleButton: 사이드바 접기/펼치기 버튼
const ToggleButton = styled.div`
    cursor: pointer;
    margin-right: ${(props) => (props.isFolded ? '-40px' : '-70px')};
    padding: 10px;
    transition: all 0.3s ease;
    img {
        width: 24px;
        transform: ${(props) => (props.isFolded ? 'rotate(180deg)' : 'rotate(0deg)')};
        transition: transform 0.3s ease;
    }
`;

// MenuList: 메뉴 리스트
const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// MenuItem: 개별 메뉴 아이템
const MenuItem = styled.li`
    margin-bottom: ${(props) => (props.isFolded ? '45px' : '10px')};
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        text-decoration: none;
        color: black;
        transition: all 0.3s ease;
        svg {
            font-size: 24px;
            margin-right: ${(props) => (props.isFolded ? '0' : '15px')};
            transition: all 0.3s ease;
        }
        p {
            display: ${(props) => (props.isFolded ? 'none' : 'inline')};
            transition: all 0.3s ease;
        }

        &:hover {
            color: #2F54EB;
            transform: scale(1.2);
            svg {
                color: #2F54EB;
            }
        }
    }
`;

// Logout: 로그아웃 버튼
const Logout = styled.li`
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        text-decoration: none;
        color: #FF0A00;
        transition: all 0.3s ease;

        svg {
            font-size: 24px;
            margin-right: ${(props) => (props.isFolded ? '0' : '15px')};
            transition: all 0.3s ease;
            color: #FF0A00;
        }

        p {
            display: ${(props) => (props.isFolded ? 'none' : 'inline')};
            color: #FF0A00;
            transition: all 0.3s ease;
        }

        &:hover {
            color: #FF0000; 
            transform: scale(1.3); 
            svg {
                color: #FF0000;
            }
            p {
                color: #FF0000;
            }
        }
    }
`;


const Aside = () => {
    const [isFolded, setIsFolded] = useState(false);

    const toggleSidebar = () => {
        setIsFolded(!isFolded);
    };

    return (
        <AsideContainer isFolded={isFolded}>
            <Profile isFolded={isFolded}>
                <ProfileImage src={`${process.env.PUBLIC_URL}/images/bitbype logo cookie.png`} alt="기본 프로필 사진" />
                <ProfileInfo isFolded={isFolded}>
                    <p><span style={{color:"#2F54EB"}}>코딩천재용현</span><br />데브옵스 12기</p>
                </ProfileInfo>
                <ToggleButton isFolded={isFolded} onClick={toggleSidebar}>
                    <img src={`${process.env.PUBLIC_URL}/images/사이드바닫힘.png`} alt="사이드바 토글 버튼" />
                </ToggleButton>
            </Profile>
            <Divider />
            <MenuList>
                <MenuItem isFolded={isFolded}>
                    <a href="#">
                        <DateRangeIcon />
                        <p>실시간 현황</p>
                    </a>
                </MenuItem>
                <MenuItem isFolded={isFolded}>
                    <a href="#">
                        <PushPinIcon />
                        <p>시설 예약</p>
                    </a>
                </MenuItem>
                <MenuItem isFolded={isFolded}>
                    <a href="#">
                        <EditCalendarIcon />
                        <p>예약 내역</p>
                    </a>
                </MenuItem>
                <MenuItem isFolded={isFolded}>
                    <a href="#">
                        <GroupsIcon />
                        <p>커뮤니티</p>
                    </a>
                </MenuItem>
                <MenuItem isFolded={isFolded}>
                    <a href="#">
                        <ContactPageOutlinedIcon />
                        <p>마이페이지</p>
                    </a>
                </MenuItem>
                <Logout isFolded={isFolded}>
                    <a href="#">
                        <LogoutOutlinedIcon/>
                        <p>로그아웃</p>
                    </a>
                </Logout>
            </MenuList>
        </AsideContainer>
    );
};

export default Aside;
