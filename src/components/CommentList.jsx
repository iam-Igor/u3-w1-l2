import { Component } from "react";
import { Col } from "react-bootstrap";

class CommentList extends Component {
  deleteItem = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.book.elementId,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGJkMWY2ZTNkZDAwMTQ5NWU0MzQiLCJpYXQiOjE2OTgzMTkzMTQsImV4cCI6MTY5OTUyODkxNH0.q1fd5b4QJ1ktJteiPZJeY_CF5ZVC-sQi71fC1JR-8k8",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("Comment deleted");
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        console.log("error in deleting file", err);
      });
  };

  render() {
    return (
      <Col key={this.props.book.elementId} className="col-9">
        <hr></hr>
        <p className="fw-bold">Comments</p>
        <div className="comments-container d-flex justify-content-between align-items-center">
          <p className="m-0">
            {this.props.book.comment} | Rating:{this.props.book.rate}
          </p>
          <i className="bi bi-trash3" onClick={this.deleteItem}></i>
        </div>
      </Col>
    );
  }
}

export default CommentList;
