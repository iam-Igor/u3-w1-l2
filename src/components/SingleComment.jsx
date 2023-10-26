import { Component } from "react";

class SingleComment extends Component {
  deleteItem = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.element,

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
          console.log("eliminato");
        } else {
          throw new Error();
        }
      })
      .then(this.props.refresh)
      .catch((err) => {
        console.log(err);
        console.log(typeof this.props.element);
      });
  };

  render() {
    return (
      <div className="comments-container d-flex justify-content-between align-items-center">
        <p className="m-0">
          {this.props.book.comment} | Rating:{this.props.book.rate}
        </p>
        <i className="bi bi-trash3" onClick={this.deleteItem}></i>
      </div>
    );
  }
}

export default SingleComment;
