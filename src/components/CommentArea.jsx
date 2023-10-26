import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Spinner from "react-bootstrap/Spinner";

class CommentArea extends Component {
  state = {
    allComments: [],
    isLoading: true,
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
            allComments: [
              {
                comment: singleComm.comment,
                rate: singleComm.rate,
                elementId: singleComm._id,
              },
            ],
            isLoading: false,
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
        {this.state.isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        <CommentList book={this.state.allComments} refresh={this.getComments} />
        <AddComment book={this.props.book} />
      </Row>
    );
  }
}

export default CommentArea;
