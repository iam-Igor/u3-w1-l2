import { Component } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchIndex: "",
  };

  handleSearch = (prop, value) => {
    this.setState({
      [prop]: value,
    });
  };
  render() {
    const { books } = this.props;

    const filteredBooks = books.filter((book) =>
      book.title.includes(this.state.searchIndex)
    );

    return (
      <Container>
        <Form className="d-flex offset-lg-8 ">
          <Form.Control
            type="text"
            placeholder="Type something.."
            className=" mr-sm-2  me-2"
            value={this.state.searchIndex}
            onChange={(e) => this.handleSearch("searchIndex", e.target.value)}
          />
        </Form>

        <Row>
          {filteredBooks.map((book, index) => {
            return (
              <Col md={3} xs={6} className="my-2" key={index}>
                <SingleBook book={book} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
