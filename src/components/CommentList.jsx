import { Component } from "react";
import { Col, Spinner } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <>
        {" "}
        {this.props.thingsToShow && (
          <Col key={this.props.book.elementId} className="col-9">
            <hr></hr>
            <p className="fw-bold">Comments</p>
            {this.props.isLoading && (
              <Spinner animation="border" variant="danger" />
            )}
            {this.props.book.map((comment) => {
              return (
                <SingleComment
                  key={comment.elementId}
                  book={comment}
                  element={comment.elementId}
                  refresh={this.props.refresh}
                />
              );
            })}
          </Col>
        )}
      </>
    );
  }
}

export default CommentList;
