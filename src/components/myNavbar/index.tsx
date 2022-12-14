import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="#inicio">LuisDev</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='d-flex gap-2 align-items-center'>
                        <Nav.Link href="#inicio">Ínicio</Nav.Link>
                        <Nav.Link href="#sobre">Sobre mim</Nav.Link>
                        <Nav.Link href="#projetos">Projetos</Nav.Link>
                        <Nav.Link href="#conhecimentos">Conhecimentos</Nav.Link>
                        <Nav.Link href="#experiencia">Experiências</Nav.Link>
                        <Nav.Link href="#contato"><Button>Contato</Button>  </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};