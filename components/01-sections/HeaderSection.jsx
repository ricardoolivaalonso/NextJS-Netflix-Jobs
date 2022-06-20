import Link from 'next/link';
import { useEffect, useRef } from "react"
import { LogoElement } from "../03-elements/LogoElement"
import { LogoElementMobile } from '../03-elements/LogoElementMobile';
import { useRouter } from 'next/router'

export const HeaderSection = () => {
    const urls = ['teams', 'locations']
    const headerRef = useRef()
    const router = useRouter()
    
    const getScrollFunc = (e) => {
        window.pageYOffset > 50 ? 
            headerRef.current.classList.add('is-header-visible') 
            : 
            headerRef.current.classList.remove('is-header-visible')
    }
    useEffect(()=>{
        window.addEventListener('scroll', getScrollFunc)
        return () => window.removeEventListener('scroll', getScrollFunc)
    })

    return(
        <header className="header" ref={headerRef}>
            <div className='header__wrapper'>

                <Link href="/">
                    <a className='header__logo'>
                        <LogoElement w="213" h="38" color="#ffffff"/>
                    </a>
                </Link>
                <Link href="/">
                    <a className='header__logo-mobile'>
                        <LogoElementMobile w="94" h="59" />
                    </a>
                </Link>

                <nav className="menu">
                    <ul className="menu__list">
                        {
                            urls.map( url => 
                                <li className="menu__item" key={url}>
                                    <Link href={`/${url}`}>
                                        <a className='menu__link'>{url}</a>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>

            </div>
        </header>
    )
}