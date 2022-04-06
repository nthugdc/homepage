import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";
export default function MainNavbar({eventKey = 1}) {
    const navigate = useNavigate();
    const useRoute = (path: string) => 
        useCallback(
            () => navigate(path, {replace: false})
            , [path]
        );
    const location = useLocation();
    switch(location.pathname){
        case "/": eventKey = 1; break;
        case "/about": eventKey = 2; break;
        case "/events": eventKey = 3; break;
        case "/games": eventKey = 4; break;
        case "/articles": eventKey = 5; break;
    }
    return (
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><b>NTHUGDC</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" activeKey={eventKey}>
                <Nav.Link eventKey={1} onClick={useRoute("/")}>Home</Nav.Link>
                <Nav.Link eventKey={2} onClick={useRoute("/about")}>About</Nav.Link>
                <Nav.Link eventKey={3} onClick={useRoute("/events")}>Events</Nav.Link>
                <Nav.Link eventKey={4} onClick={useRoute("/games")}>Games</Nav.Link>
                <Nav.Link eventKey={5} onClick={useRoute("/articles")}>Articles</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                {/* <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}