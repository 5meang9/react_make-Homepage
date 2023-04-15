import Navbar from '../../Navbar'
import "../../../styles.css"

const Header = () => {

  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          CodeSolution{" "}
        </a>{" "}
        <Navbar />
      </div>{" "}
    </header>
  )
}

export default Header 