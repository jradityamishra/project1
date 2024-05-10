import React,{ReactNode} from 'react'
import Header from './Header'
import Footer from './Footer'
type LayoutProps={
    children:ReactNode;
}

const Layout:React.FC<LayoutProps>= ({children}) => {
  return (
    <div>
        <Header/> 
        <main style={{minHeight:'70vh'}}>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout