import React, {useState} from 'react';
import Footer from './Footer';

const PageWrapper = ({children}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="page-wrapper">
            {/* <Navigation pages={pages} open={menuOpen} toggleMenu={() => {toggleMenu()}}></Navigation>
            <NavBar toggleMenu={() => {toggleMenu()}} collapsed={menuOpen}/> */}
                <main>
                    {children}
                </main>
            <Footer />
        </div>
    )

}

export default PageWrapper;