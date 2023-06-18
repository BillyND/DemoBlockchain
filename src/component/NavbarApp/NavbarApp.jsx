import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  useNavigate } from 'react-router-dom';

function NavbarApp() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>navigate("/")}>Blockchain Demo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate("/hash")}>Hash</Nav.Link>
            <Nav.Link onClick={()=>navigate("/block")}>Block</Nav.Link>
            <Nav.Link onClick={()=>navigate("/blockchain")}>Blockchain</Nav.Link>
            <Nav.Link onClick={()=>navigate("/distributed")}>Distributed</Nav.Link>
            <Nav.Link onClick={()=>navigate("/tokens")}>Tokens</Nav.Link>
            <Nav.Link onClick={()=>navigate("/coinbase")}>Coinbase</Nav.Link>           
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarApp;