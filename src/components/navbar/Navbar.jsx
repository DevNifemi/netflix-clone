import './navbar.styles.css'
import logo  from '../../images/logo.png'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import store from '../../redux/store'

const Navbar = () => {
    const location = useLocation();
    const [navbar, setNavbar] = useState(false)
    const { user } = store.getState()
    
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setNavbar(true)
            } else setNavbar(false)
            
        })
        // return () => {
        //     window.removeEventListener('scroll');
        // }
    },[])

    return (
        <nav style={{background: `${navbar ? '#0B0B0B' : ''}` }}>
            <div className="logo">
                <img src={logo} alt="app logo" />
            </div>

            {
            location.pathname === '/home' && (
                <div className="searchbar-user">
                    <i className='bx bx-search-alt search_icon'></i>

                    <div className="user-image">
                        <img src={user.userImage} alt="user" />
                        <i className='bx bxs-down-arrow arrow_icon' ></i>
                    </div>
                </div>
                )
            }
            

        </nav>
    )
}

export default Navbar
