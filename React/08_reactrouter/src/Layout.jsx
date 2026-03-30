import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet /> {/* This is where the child routes will be rendered that means this component will be changed but the header and footer remain same */}
    <Footer />
    </>
  )
}

export default Layout