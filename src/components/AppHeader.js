import React from 'react'
import './AppHeader.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import Search from './Search'

const AppHeader = () => {

    function getNavClass(navLinkProps) {    
        let navClass = 'nav-link app-header-item';
        // if (navLinkProps.isActive) navClass += ' app-header-item-active';
        return navClass;
    }  
  return (
    <div className="justify-content-center">
    <Navbar className="text-center app-header" style={{justifyContent: 'center'}} bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Brand className="ms-5 me-5" href="/"><FontAwesomeIcon icon={faApple} /></Navbar.Brand>
          <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav className="mx-auto align-items-center">
              <Nav.Link className={getNavClass} href="state">State</Nav.Link>
              <Nav.Link className={getNavClass} href="useFX">useEffect</Nav.Link>
              <Search />
              <Navbar.Brand className="mx-auto" href=""><i className="fa-solid fa-bag-shopping"></i></Navbar.Brand> 
            </Nav>
          </Navbar.Collapse>

      </Container>
    </Navbar>
      <Nav className="justify-content-center sec-nav-item">
        <Nav.Item className="mt-3 mb-2 text-center">
          <p>นำสมาร์ทโฟนของคุณมาแลก เพื่อรับเครดิตมูลค่าสูงสุด ฿17,100 สำหรับใช้ซื้อเครื่องใหม่* </p>
        </Nav.Item>
      </Nav>
  </div>  
  )
}

export default AppHeader