import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Claim Dashboard</h5>
                      <img class="img-fluid50" src="https://ipfs.infura.io/ipfs/Qmc9jArQTqErvM42Mh4fQMkeykEUiFzGyCXZBP3pejNcza" alt="linchpin"></img>

                      <CardTitle tag="h2">HackFS Agent Managed Claims over Time</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Open Claims
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data2"
                          })}
                          onClick={() => this.setBgChartData("data2")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Closed Claims
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data3"
                          })}
                          onClick={() => this.setBgChartData("data3")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Claims in Escrow
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Amount Paid Out in Claims</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    $763,215 in HackFS Paid Claims
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Open Claims by Type</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    3,500 total Active HackFS Claims Currently Open
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Completed Claim Tasks</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100 Total HackFS Tasks
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample4.data}
                      options={chartExample4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <h6 className="title d-inline">Tasks(6)</h6>
                  <p className="card-category d-inline"> today</p>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      className="btn-icon"
                      color="link"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                      <DropdownItem
                        href="#currentUser"
                        onClick={e => e.preventDefault()}
                      >
                        Add a claim task
                      </DropdownItem>
                      <DropdownItem
                        href="#currentUser"
                        onClick={e => e.preventDefault()}
                      >
                        Record a CID
                      </DropdownItem>
                      <DropdownItem
                        href="#currentUser"
                        onClick={e => e.preventDefault()}
                      >
                        Record an Ethereum Tx
                      </DropdownItem>
                      <DropdownItem
                        href="#currentUser"
                        onClick={e => e.preventDefault()}
                      >
                        Upload to Hot IPFS
                      </DropdownItem>
                      <DropdownItem
                        href="#currentUser"
                        onClick={e => e.preventDefault()}
                      >
                        Upload to Cold IPFS
                      </DropdownItem>
                      <DropdownItem
                        href="#currentUser"
                        onClick={e => e.preventDefault()}
                      >
                        Encrypt a Cloaked Bucket
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Client initiated claim - property damage</p>
                            <p className="text-muted">
                              Time and place of incident , Seattle, WA 8:47 AM
                            </p>
                            <p className="text-muted">
                            https://ipfs.infura.io/ipfs/QmNsez5wZEgUDz5HokgLLNSdr6FhM5K4BUvtLVRoe4aUam

                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Police Incident Report</p>
                            <p className="text-muted">
                            https://ipfs.infura.io/ipfs/QmNsez5wZEgUDz5HokgLLNSdr6FhM5K4BUvtLVRoe4aUam

                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip457194718"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip457194718"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Client Interview</p>
                            <p className="text-muted">
                            https://ipfs.infura.io/ipfs/QmNsez5wZEgUDz5HokgLLNSdr6FhM5K4BUvtLVRoe4aUam

                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip362404923"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip362404923"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Adjuster Report</p>
                            <p className="text-muted">
                            https://ipfs.infura.io/ipfs/QmNsez5wZEgUDz5HokgLLNSdr6FhM5K4BUvtLVRoe4aUam
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip818217463"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip818217463"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Export the processed files</p>
                            <p className="text-muted">
                            https://ipfs.infura.io/ipfs/QmNsez5wZEgUDz5HokgLLNSdr6FhM5K4BUvtLVRoe4aUam
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip831835125"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip831835125"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Claim Sent to Processing Unit</p>
                            <p className="text-muted">
                            https://ipfs.infura.io/ipfs/QmNsez5wZEgUDz5HokgLLNSdr6FhM5K4BUvtLVRoe4aUam
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip217595172"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip217595172"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Open Claims by NFT</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Claim Title</th>
                        <th className="text-center">NFT Token Id</th>
                        <th>Transaction ID</th>
                        <th className="text-center">CASH-VALUE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PI-080220-16</td>
                        <td className="text-center">11</td>
                        <td>0x1001d607795582465bff2107f7986509acedc1bb29c168804397b2c482a068b2</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>PD-080220-03</td>
                        <td className="text-center">22</td>
                        <td>0x1001d607795582465bff2107f7986509acedc1bb29c168804397b2c482a068b2</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>PD-080220-04</td>
                        <td className="text-center">23</td>
                        <td>0x1001d607795582465bff2107f7986509acedc1bb29c168804397b2c482a068b2</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>PI-080220-17</td>
                        <td className="text-center">12</td>
                        <td>0x1001d607795582465bff2107f7986509acedc1bb29c168804397b2c482a068b2</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>HOME-080220-1</td>
                        <td className="text-center">31</td>
                        <td>0x1001d607795582465bff2107f7986509acedc1bb29c168804397b2c482a068b2</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>PI-080220-18</td>
                        <td className="text-center">13</td>
                        <td>0x1001d607795582465bff2107f7986509acedc1bb29c168804397b2c482a068b2</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>AUTO-080220-6</td>
                        <td className="text-center">7</td>
                        <td>0x1001d607795582465bff2107f7986509acedc1bb29c168804397b2c482a068b2</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
