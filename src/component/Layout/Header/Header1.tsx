import Navbar from '../../Navbar'
import './Header.scss'
import logoImage from '../../../../src/logo192.png'
// import "../../../styles.css"

const Header = () => {

  return (
    <header className='header'>
      <div className="nav-area">
        <a href="/#" className="logo">
          <img src={logoImage} alt="x" />
        </a>{" "}
        <Navbar />
        <div className='header-title'>
          5meang9 Dev
        </div>
      </div>{" "}
    </header>
  )
}
 
export default Header 