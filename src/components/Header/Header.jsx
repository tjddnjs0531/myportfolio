import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  
  const moveScrollTop = () => { window.scrollTop({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })};

  const eventHeader = () => {
    document.querySelector('header').classList.remove('bottom');
    console.log('a')
    moveScrollTop();
  }
  return (
    <>
    <header>
        <div className="header-wrap">
            <h1 className="logo"></h1>
            <nav id="topNav">
                <ul className="gnb">
                    <li><NavLink to={'/'} className={({isActive})=> isActive ? 'active-nav' : ''}><span>Home</span></NavLink></li>
                    <li><NavLink to={'/about'} className={({isActive})=> isActive ? 'active-nav' : ''}><span>About</span></NavLink></li>
                    <li><NavLink to={'/project'} className={({isActive})=> isActive ? 'active-nav' : ''}><span>Project</span></NavLink></li>
                    <li><NavLink to={'/contact'} className={({isActive})=> isActive ? 'active-nav' : ''}><span>Contact</span></NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  );
}

export default Header;