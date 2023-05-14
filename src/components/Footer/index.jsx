import React from 'react';
import './style.scss';
import Logo from '../images/Logo';
import LogoTG from '../images/LogoTG';
import LogoWA from '../images/LogoWA';
import LogoViber from '../images/LogoViber';
import LogoInstagram from '../images/LogoInstagram';
import LogoVK from '../images/LogoVK';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <Logo />
                <span>© «Интернет-магазин DogFood.ru»</span>
            </div>
            <div className='footer__nav-list'>
                <a href='/'>Каталог</a>
                <a href='/'>Акции</a>
                <a href='/'>Новости</a>
                <a href='/'>Отзывы</a>
            </div>
            <div className='footer__nav-list'>
                <a href='/'>Оплата и доставка</a>
                <a href='/'>Часто спрашивают</a>
                <a href='/'>Обратная связь</a>
                <a href='/'>Контакты</a>
            </div>
            <div className='footer__contacts'>
                <h3>Мы на связи</h3>
                <div>
                    <a href='tel:+7999000000'>
                        <h2>8 (999) 00-00-00</h2>
                    </a>
                    <a href='mailto:dogfood.ru@gmail.com'>dogfood.ru@gmail.com</a>
                </div>
                <div className='footer__contacts-social'>
                    <a href='/'>
                        <LogoTG />
                    </a>
                    <a href='/'>
                        <LogoWA />
                    </a>
                    <a href='/'>
                        <LogoViber />
                    </a>
                    <a href='/'>
                        <LogoInstagram />
                    </a>
                    <a href='/'>
                        <LogoVK />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
