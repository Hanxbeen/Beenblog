import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../styles/style';
import { loadUser } from 'actions/user';
import { RootState } from '../slices';

import LoginForm from '../component/loginForm';
import Profile from './profile';

const Home = () => {
    // 로그인 상태 체크
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    // 로그인 true면 프로필페이지, false면 로그인페이지
    return <Container>{isLoggedIn ? <Profile /> : <LoginForm />}</Container>;
};

export default Home;