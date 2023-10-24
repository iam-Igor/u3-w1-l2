import { Container, Navbar, Nav, NavDropdown,Form,Button} from "react-bootstrap";


const MyNavbar = ()=> {

return(

<Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">My react-library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Browse" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex offset-lg-8 offset-md-6">
       
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
         
            <Button type="submit" className="btn-warning">Submit</Button>
         
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    
)
}

export default MyNavbar