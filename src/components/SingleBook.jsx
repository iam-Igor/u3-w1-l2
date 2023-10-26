import { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClickcard = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    return (
      <Card className="h-100" border={this.state.selected ? "danger" : "light"}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          className="h-75"
          onClick={this.handleClickcard}
        />
        <Card.Body>
          <Card.Title className="fs-6">{this.props.book.title}</Card.Title>
          <Card.Text>Category: {this.props.book.category}</Card.Text>
          <Button variant="success">Buy</Button>
        </Card.Body>
        {this.state.selected && <CommentArea book={this.props.book} />}
      </Card>
    );
  }
}

export default SingleBook;
