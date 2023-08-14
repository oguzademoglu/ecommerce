/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { Store } from './Store'

function App() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store)
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>tscommerce</Navbar.Brand>
            <Nav>
              <Button variant={mode} onClick={switchModeHandler}>
                <span className={mode === 'light' ? 'dark' : 'light'}>
                  Mode
                </span>
              </Button>
              <a href="/cart" className="nav-link">
                Cart
              </a>
              <a href="/signin" className="nav-link">
                Sign In
              </a>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
