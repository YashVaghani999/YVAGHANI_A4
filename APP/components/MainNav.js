import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";

export default function MainNav() {
    const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      router.push(`/artwork?title=true&q=${search}`);
    }
  }
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        className="fixed-top navbar-dark big-primary"
      >
        <Container>
          <Navbar.Brand href="#home">Riddhi Patel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link>Advanced Search</Nav.Link>
              </Link>
            </Nav>

            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
