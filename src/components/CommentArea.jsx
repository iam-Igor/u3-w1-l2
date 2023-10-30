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
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.book,
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
        console.log(data);
        const comments = data.map((singleComm) => ({
          comment: singleComm.comment,
          rate: singleComm.rate,
          elementId: singleComm._id,
        }));

        this.setState({
          allComments: comments,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.book !== this.props.book) {
      this.getComments();
    }
  }

  render() {
    return (
      <Row className="flex-column align-items-center pb-3 w-25">
        <CommentList
          book={this.state.allComments}
          refresh={this.getComments}
          thingsToShow={this.props.book}
        />
        <AddComment book={this.props.chosenBook} refresh={this.getComments} />
      </Row>
    );
  }
}

export default CommentArea;
