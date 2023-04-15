import styles from './Header.module.scss'
import React, {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEventListener } from '../../../hooks'
import SubHeader from '../SubHeader/SubHeader'
import ReactDOM from 'react-dom';
import logoImage from '../../../../src/logo192.png'

const Header = () => {

  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false)
  const [hoverValue, setHover] = useState<string>('');


  const openAndCloseSubMenu = (state: boolean) =>{
    setMenuDropDownOpen(state)
    // setHover(obj)
  }

// hover 된 객체의 value 지정 어떻게 할건지 정해야 함.
  return (
    <header className={styles.header}>
      <div className={styles.contents} onMouseOver={()=>openAndCloseSubMenu(true)} onMouseOut={()=>openAndCloseSubMenu(false)}>
        <div className={styles.headerMainWrapper}>
          <div className={styles.logo}>
            <img src={logoImage} alt="x" />
          </div>
          <nav className={styles.navigation}>
            <ul>
              <li className={styles.nav1} ref={dropdownRef} 
              onMouseOver={()=>setHover('nav1')} onMouseOut={()=>setHover('nav1')}
              >Develop</li>
              <li className={styles.nav2} ref={dropdownRef} 
              onMouseOver={()=>setHover('nav2')} onMouseOut={()=>setHover('nav2')}
              >DevOps</li>
              <li className={styles.nav3} ref={dropdownRef} 
              onMouseOver={()=>setHover('nav3')} onMouseOut={()=>setHover('nav3')}
              >DevKit</li>
            </ul>
          </nav>
          <div className='header-title'>
            5meang9 Dev
          </div>
        </div>
        {
        // isMenuDropDownOpen && 
        <SubHeader refName={hoverValue} dropdown={isMenuDropDownOpen}/>}
      </div>
    </header>
  )
}

export default Header 