import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'


const Navbar=()=> {


    const [click, setclick] = useState(false)
    const [button, setbutton] = useState(true)

    const handleClick=()=>{
        setclick(!click)
    }

    const closeMobileMenu=()=>{
        setclick(false)
    }

    const showbutton=()=>{
        if(window.innerWidth<=960){
            setbutton(false)
        }
        else{
            setbutton(true)
        }
    }

    useEffect(()=>{
        showbutton()
    },[])

    window.addEventListener('resize',showbutton)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    TRVL <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ?'fas fa-times':'fas fa-bars'}></i>  
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className="nav-item">
                        <Link className="nav-links" to="/" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/services" onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/products" onClick={closeMobileMenu}>Products</Link>
                    </li>

                </ul>
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
