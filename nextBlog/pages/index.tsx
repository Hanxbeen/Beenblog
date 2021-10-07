// 첫 렌더링 시 노출되는 페이지
import React from 'react';
import Head from 'next/head'; // html head태그
import '../styles.css'; // reset.css
import wrapper from '../store/configureStore'; // redux store

// 컴포넌트 이름은 App이 아니어도 된다.
const App = ({ Component, pageProps }: any) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>React LogIn</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

// HOC (Higher Order Component)
export default wrapper.withRedux(App);