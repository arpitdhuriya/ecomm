import React from 'react'

/**
* @author
* @function Layout 
**/
import Header from '../Header'
const Layout = (props) => {
  return(
      <>
      <Header />
      {props.children}
    </>
   )

 }

export default Layout;