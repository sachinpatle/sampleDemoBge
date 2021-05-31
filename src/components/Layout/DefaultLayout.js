import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './DefaultLayout.css'

function DefaultLayout({children}) {
    return (
        <div className="defaultlayout">
            <header className="header">
                <Header />
            </header>
            <main className='main'>
                {children}
                </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default DefaultLayout
