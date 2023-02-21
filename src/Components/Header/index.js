import React from 'react'
import { HeaderStyle } from './style'
// import { MenuItem } from './constant'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  // const singupData = useSelector((data) => data.singReducer.user)
  const loginInfo = useSelector((data) => data.loginReducer.userlogin)

  return (
    <HeaderStyle>
      {/* <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Collapse href="#home">Navbar</Navbar.Collapse>
          {MenuItem.map((a, i) => (
            <Nav className="me-auto">
              <Nav.Link href={a.url}>{a.Name}</Nav.Link>
            </Nav>
          ))}
        </Container>
      </Navbar> */}
      <div className="navbar">
        {/* {MenuItem.map((a, id) => (
          <ul key={id}>
            <li>
              <Link to={a.url}>{a.Name}</Link>
            </li>
          </ul>
        ))} */}
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/userinfo">UserInfo</Link>

            {loginInfo.length === 0 ? (
              <>
                <Link to="/">Login</Link>
                <Link to="/registration">Sing up</Link>
              </>
            ) : (
              ''
            )}
          </li>
        </ul>
      </div>
    </HeaderStyle>
  )
}

export default Header
