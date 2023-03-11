import React from 'react';
import Link from './Link';

interface LinkProps {
    title: string;
    url: string;
}

const LoginLink: React.FC = () => {
    return <Link title='로그인/회원가입' url='/login' />;
};

export default LoginLink;
