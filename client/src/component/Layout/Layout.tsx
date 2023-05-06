import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import './Layout.scss'
import Header1 from './Header/Header1'


const Layout = (props:{children: React.ReactNode}) => {
  return (
    <div className='layout'>
      <Header /> 
      {/* <Header1 /> */}
      <main className='main'>{props.children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout