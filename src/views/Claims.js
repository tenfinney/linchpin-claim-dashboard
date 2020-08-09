
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Claims extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      claims: [],
      loading: false
    };
  }
  
  componentDidMount() {
    this.loadItems()
  }


  loadItems = async () => {
    console.log('addclaim', this.props);
    const { xdb } = this.props
    this.setState({ loading: true})
    const result = await xdb.getItems("claims")
    console.log("reslt claims list", result);
    if (result && result.instancesList){
      this.setState({ claims: result.instancesList, loading: false})
    }
  }


  render() {
    const { claims, loading } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">My Claims</CardTitle>
                  <p className="category">Manage all your claims in one place</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>City</th>
                        <th>Status</th>
                        <th className="text-center">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {claims.map((claim, i) => (<tr key={i}>
                        <td>{claim.title}</td>
                        <td>{claim.body}</td>
                        <td>On-going</td>
                        <td>Miami</td>
                        <td className="text-center">$36,738</td>
                      </tr>))}
                    </tbody>
                  </Table>
                  <h3>
                    {loading ? "loading your claims" : "No Claims created"}
                  </h3> 
                </CardBody>
              </Card>
            </Col>
            <Col md="12" className="d-none">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="category">Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-center">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
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

export default Claims;
