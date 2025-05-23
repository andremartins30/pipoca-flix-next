import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import icon from './icon.png'
import ThemeToggle from '../ThemeToggle'
import SearchBar from '../SearchBar'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const router = useRouter()

    const handleSearch = (searchTerm) => {
        if (searchTerm.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
        }
    }

    // Fechar o menu quando clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <header>
            <div className="header-left">
                <Link href='/' className='logo'>
                    <img src={'/icon.png'} alt='icon' />
                    <span className="site-title">PipocaFLIX</span>
                </Link>

                <div className="nav-links desktop-only">
                    <Link href="/" className='nav-link'>Filmes</Link>
                    <Link href="/series" className='nav-link'>Séries</Link>
                    <Link href="/cinemas" className='nav-link'>Games</Link>
                </div>

                <div className="nav-dropdown mobile-only">
                    <button className="nav-dropdown-button">▼</button>
                    <div className="nav-dropdown-menu">
                        <Link href="/" className='nav-link'>Filmes</Link>
                        <Link href="/series" className='nav-link'>Séries</Link>
                        <Link href="/cinemas" className='nav-link'>Games</Link>
                    </div>
                </div>
            </div>

            <div className="header-right">
                <SearchBar onSearch={handleSearch} />
                <ThemeToggle />

                <div className="menu-container" ref={menuRef}>
                    <button
                        className="menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <div className="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    {isMenuOpen && (
                        <div className="dropdown-menu">
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                Início
                            </Link>
                            <Link href="/favoritos" onClick={() => setIsMenuOpen(false)}>
                                Meus Filmes
                            </Link>
                            <Link href="/cinemas" onClick={() => setIsMenuOpen(false)}>
                                Cinemas Próximos
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header