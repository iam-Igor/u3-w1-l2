import { Component } from "react";
import { Card, Button } from "react-bootstrap";

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
      <Card className={this.state.selected ? "glow h-100" : "h-100"}>
        <Card.Img variant="top" src={this.props.book.img} className="h-75" />
        <Card.Body>
          <Card.Title className="fs-6">{this.props.book.title}</Card.Title>
          <Card.Text>Category: {this.props.book.category}</Card.Text>
          <Button
            variant="success"
            onClick={() => {
              this.handleClickcard();

              this.props.selected(this.props.book.asin);
            }}
          >
            Show Comments
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
