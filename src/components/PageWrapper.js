import React, {useState} from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import NavBar from './NavBar';
import Header from './Header/Header';

const pages = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'FAQ',
        path: '/faq'
    }
];

const PageWrapper = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="page-wrapper">
            {/* <Navigation pages={pages} open={menuOpen} toggleMenu={() => {toggleMenu()}}></Navigation>
            <NavBar pages={pages} toggleMenu={() => {toggleMenu()}} collapsed={menuOpen}/> */}
            {/* <Header /> */}
                <main>
                    {children}
                </main>
            {/* <Footer /> */}
        </div>
    )

}

export default PageWrapper;