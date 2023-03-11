import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import MainPage from './pages/main';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* 랜딩 페이지 */}
                <Route path='/' element={<LandingPage />} />
                {/* 로그인 페이지 */}
                <Route path='/login' element={<LoginPage />} />
                {/* 메인 페이지 */}
                <Route path='/main' element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
