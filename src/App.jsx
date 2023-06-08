import React, { useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoByToken, setAuth } from './store/slices/userSlice';
import { getAllProducts, searсhProducts } from './store/slices/productsSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchQuery } = useSelector((s) => s.products);
    const { isAuth } = useSelector((s) => s.user);
    const location = useLocation();

    useEffect(() => {
        if (!!localStorage.getItem('token')) {
            dispatch(setAuth(true));
        } else {
            if (
                location.pathname.includes('/registration') ||
                location.pathname.includes('/login') ||
                location.pathname.includes('/forgot-password') ||
                location.pathname.includes('/password-reset')
            ) {
                return;
            } else {
                navigate('/login');
            }
        }
    }, [dispatch, isAuth, location, navigate]);

    useEffect(() => {
        if (!isAuth) return;
        dispatch(getUserInfoByToken()).then(() => dispatch(getAllProducts()));
    }, [dispatch, isAuth]);

    useEffect(() => {
        if (!isAuth) return;
        if (!searchQuery) {
            dispatch(getAllProducts());
        } else {
            const timer = setTimeout(() => {
                dispatch(searсhProducts(searchQuery));
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [searchQuery, dispatch, isAuth]);

    return (
        <div className='app'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
