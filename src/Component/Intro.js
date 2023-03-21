import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Intro() {
  return (
    <Navbar bg="light" >
      <Container>
        <Navbar.Brand className="Navbar-title" href="#home">Youtube <span>Downloader</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Intro;