import { Component } from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    allComments: {
      comment: "",
      rate: "",
      elementId: this.props.book.asin,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("form inviato");

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.allComments),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGJkMWY2ZTNkZDAwMTQ5NWU0MzQiLCJpYXQiOjE2OTgzMTkzMTQsImV4cCI6MTY5OTUyODkxNH0.q1fd5b4QJ1ktJteiPZJeY_CF5ZVC-sQi71fC1JR-8k8",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("comment added");
          this.setState({
            allComments: {
              comment: "",
              rate: "",
            },
          });
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        console.log("errore nel salvataggio", err);
      });
  };

  render() {
    return (
      <Col className="col-9">
        <hr></hr>
        <p>Add a Comment</p>
        <Form onSubmit={this.handleSubmit}>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Comment here"
            value={this.state.allComments.comment}
            onChange={(e) => {
              this.setState({
                allComments: {
                  ...this.state.allComments,
                  comment: e.target.value,
                },
              });
            }}
          />
          <Form.Select
            aria-label="ratings"
            size="sm"
            value={this.state.allComments.rate}
            onChange={(e) => {
              this.setState({
                allComments: {
                  ...this.state.allComments,
                  rate: e.target.value,
                },
              });
            }}
          >
            <option>Rate the book</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
          <Button
            variant="warning"
            className="rounded-pill mt-2 fs-6"
            type="submit"
          >
            Add
          </Button>
        </Form>
      </Col>
    );
  }
}

export default AddComment;
