import React, {useState} from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Nav from './Nav'


export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About></About>
        }
        if (currentPage === 'Projects') {
            return <Projects></Projects>
        }
        if (currentPage === 'Contact') {
            return <Contact></Contact>
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Nav handlePageChange={handlePageChange} currentPage={currentPage}></Nav>
            {renderPage()}
        </div>
    )
}
