import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    allComments: {
      comment: "",
      rate: "",
      elementId: this.props.book.asin,
    },
  };

  getComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.book.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGJkMWY2ZTNkZDAwMTQ5NWU0MzQiLCJpYXQiOjE2OTgzMTkzMTQsImV4cCI6MTY5OTUyODkxNH0.q1fd5b4QJ1ktJteiPZJeY_CF5ZVC-sQi71fC1JR-8k8",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data, "data");
        data.map((singleComm) => {
          return this.setState({
            allComments: {
              comment: singleComm.comment,
              rate: singleComm.rate,
            },
          });
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <Row className="flex-column align-items-center pb-3">
        <CommentList book={this.state.allComments} />
        <AddComment book={this.props.book} />
      </Row>
    );
  }
}

export default CommentArea;
