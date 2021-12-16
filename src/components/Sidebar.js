import { Nav } from "react-bootstrap";

const Sidebar = ({setPageView}) => {
    return (
        <>
            <Nav className="d-md-block sidebar"
            onSelect={selectedKey => setPageView({selectedKey})}>
                <Nav.Item>
                    <Nav.Link className="navLink" eventKey="home-page"> Home </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" eventKey="art-page"> Art </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" eventKey="writing-page"> Writing </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" eventKey="store-page"> Store </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
        );
  };

export default Sidebar;