import history from "../data/history.json"
import fantasy from "../data/fantasy.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"
import { Row, Col,Container,Card,Button,} from "react-bootstrap"



const AllTheBooks = ()=> {

    const categories = [
        { title: "History books", source: history },
        { title: "Fantasy books", source: fantasy },
        { title: "Horror books", source: horror },
        { title: "Romance books", source: romance },
        { title: "Scifi books", source: scifi },
      ];


      return (
        <Container>
          {categories.map((category, index) => (
            <Row key={index}>
              <h1 className="d-flex justify-content-between">
                {category.title} <i className="bi bi-caret-down-fill"></i>
              </h1>
              <hr></hr>
              {category.source.map((book) => (
                <Col md={3} xs={6} className="my-2" key={book.asin}>
                  <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title className="fs-6">{book.title}</Card.Title>
                      <Card.Text>Category: {book.category}</Card.Text>
                      <Button variant="success">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ))}
        </Container>
      );


}



export default AllTheBooks