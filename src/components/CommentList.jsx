import { Component } from "react";
import { Col } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <Col key={this.props.book.elementId} className="col-9">
        <hr></hr>
        <p className="fw-bold">Comments</p>
        {this.props.book.map((comment) => {
          return (
            <SingleComment
              key={comment.elementId}
              book={comment}
              element={comment.elementId}
            />
          );
        })}
      </Col>
    );
  }
}

export default CommentList;
