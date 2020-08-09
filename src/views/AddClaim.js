 
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";


const randomString = (length) => {
  return [...Array(length)]
    .map(() => (~~(Math.random() * 36)).toString(36))
    .join('');
};

class AddClaim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "sample title here",
      body: "Claim title here",
    };
  }
  componentDidMount(){
    console.log('addclaim', this.props);
  }

  handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value })
  }

  sendClaim = async () => {
    const { xdb } = this.props
    console.log(this.state, 'sendClaim');
    const data = {
      _id: randomString(14),
      title: this.state.title,
      body: this.state.body,
      // status: "open",
      author: "unkown"
    }
    await xdb.addItem("claims", data)
  }


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Add New Claim</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue="Web3 Legal Enginering - Global REO XVIII LLC"
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue="tenfinney"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="scott@onelaw.us" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue="Scott"
                            placeholder="First name here "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Stevenson"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue="15 Alco Gardens"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue="Origin City"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="CV Metaverse-1"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Zip Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Case Title</label>
                          <Input
                            defaultValue="The case title goes here."
                            placeholder="Case title"
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>Case Description</label>
                          <Input
                            cols="80"
                            defaultValue="Description of claim here, "
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                            name="body"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" onClick={this.sendClaim}>
                    Submit Case
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#scott" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/ss-02-400w.png")}
                      />
                      <h5 className="title">Scott Stevenson</h5>
                    </a>
                    <p className="description">Founder, Web3 Legal Engineering</p>
                  </div>
                  <div className="card-description">
                    Do not be scared of the truth as life only demands the powers you possess; the only feat possible is to not run away.
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default AddClaim;
