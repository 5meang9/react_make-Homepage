import styles from './Header.module.scss'
import React, {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEventListener } from '../../../hooks'
import SubHeader from '../SubHeader/SubHeader'
import ReactDOM from 'react-dom';

const Header = () => {

  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false)

  useEventListener(dropdownRef.current, 'mouseover', () => setMenuDropDownOpen(true));
  useEventListener(dropdownRef.current, 'mouseout', () => setMenuDropDownOpen(false));

  if(dropdownRef.current){
    console.log(dropdownRef.current['innerHTML']);
  }

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          로고
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li className={styles.nav1} ref={dropdownRef}>Develop</li>
            <li className={styles.nav2}>DevOps</li>
            <li className={styles.nav3}>DevKit</li>
          </ul>
        </nav>
      </div>
      {isMenuDropDownOpen && <SubHeader />}
    </header>
  )
}

export default Header 