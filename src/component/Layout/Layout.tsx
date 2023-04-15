import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import styles from './Layout.module.scss'
import Header1 from './Header/Header1'


const Layout = (props:{children: React.ReactNode}) => {
  return (
    <div className={styles.layout}>
      {/* <Header />  */}
      <Header1 />
      <main className={styles.main}>{props.children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout