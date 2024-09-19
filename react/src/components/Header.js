import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = () => {
    const navi = useNavigate();

    const isLogin = useSelector(state => state.memberSlice.isLogin);
    const nickname = useSelector(state => state.memberSlice.nickname);
  return (
    <Box sx={{flexGrow: 1}}>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}
                            onClick={() => navi('/')}
                            style={{cursor: 'pointer'}}>
                    Home
                </Typography>
                <Button color='inherit'>게시판</Button>
                {
                    isLogin ?
                    <>
                        <Button color='inherit'>{nickname}</Button>
                        <Button color='inherit'>로그아웃</Button>
                    </>
                    :
                    <>
                        <Button color='inherit' onClick={() => navi('/login')}>로그인</Button>
                        <Button color='inherit' onClick={() => navi('/join')}>회원가입</Button>
                    </>
                }
            </Toolbar>
        </AppBar>
    </Box>
  );
};

export default Header;