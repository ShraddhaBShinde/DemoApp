import React from 'react'
import Headers from '../Headers'

const Layout = (props) => {
  return (
    <>
     <Headers/>
     {props.children}
    </>
  )
}

export default Layout