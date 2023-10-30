import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

import history from "../data/history.json";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import Spinner from "react-bootstrap/Spinner";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchIndex: "",
    selected: false,
    book: scifi,
    elementID: "",
    asin: "",
  };

  handleSearch = (prop, value) => {
    this.setState({
      [prop]: value,
    });
  };

  handleClick = (prop, value) => {
    this.setState({
      [prop]: value,
    });
  };

  changeSelect = (elemID) => {
    this.setState({
      selected: !this.state.selected,
      elementID: elemID,
    });
  };

  render() {
    const filteredBooks = this.state.book.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchIndex.toLowerCase())
    );

    return (
      <Container fluid>
        <Form className="d-flex w-50">
          <Form.Control
            type="text"
            placeholder="Type something.."
            className=" mr-sm-2  me-2"
            value={this.state.searchIndex}
            onChange={(e) => this.handleSearch("searchIndex", e.target.value)}
          />
        </Form>
        <Row>
          <Col>
            <h1 className="text-center">Select category</h1>
            <ul className="d-flex list-unstyled justify-content-evenly fw-bold">
              <li onClick={() => this.handleClick("book", history)}>History</li>
              <li onClick={() => this.handleClick("book", fantasy)}>Fantasy</li>
              <li onClick={() => this.handleClick("book", horror)}>Horror</li>
              <li onClick={() => this.handleClick("book", romance)}>Romance</li>
              <li onClick={() => this.handleClick("book", scifi)}>Scifi</li>
            </ul>
          </Col>
        </Row>
        <Container fluid className="flex-row d-flex ">
          <Row className="w-75">
            {filteredBooks.map((book, index) => {
              return (
                <Col md={3} xs={6} lg={3} className="my-2" key={index}>
                  <SingleBook book={book} selected={this.changeSelect} />
                </Col>
              );
            })}
          </Row>

          <CommentArea
            book={this.state.elementID}
            chosenBook={this.state.book}
          />
        </Container>
      </Container>
    );
  }
}

export default BookList;
