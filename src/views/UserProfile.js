import React from "react";

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

import EditProfile from '3box-profile-edit-react';



class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">

              {/* <EditProfile
                // required
                box={box}
                space={space}
                currentUserAddr={myAddress}
                // optional
                customFields={customFields}
                currentUser3BoxProfile={myProfile}
                redirectFn={redirectFn}
              /> */}
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue="Web3 Legal Engineering, a Global REO CVIII company."
                            disabled
                            placeholder="Company Name here"
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
                            placeholder="First name herer"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Stevenson"
                            placeholder="Last name here"
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
                            defaultValue="123 Anylane"
                            placeholder="Digital address here"
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
                            defaultValue="Anytown"
                            placeholder="Anytown"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="Metaverse_1"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            cols="80"
                            defaultValue="Web3 Consultant"
                            placeholder="It's something someone said some time ago."
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
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
                    <p className="description">Founder, Web3vm project linchpin</p>
                  </div>
                  <div className="card-description">
                    Do not be scared of the truth.
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="linkedin">
                      <i className="fab fa-linkedin" />
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

export default UserProfile;
