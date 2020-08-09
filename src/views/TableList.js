
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

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">IPFS Content to the Hot Layer</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>FileName</th>
                        <th className="text-center">ContentS Gated</th>
                        <th className="text-center">Jurisdiction Gated</th>
                        <th className="text-center">Claim Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota_Rice</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva_Hooper</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage_Rodriguez</td>
                        <td className="text-center">NO</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip_Chaney</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris_Greene</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">IPFS Content to the Cold Layer via PowerGate</CardTitle>
                  <p className="category">Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                      <th>FileName</th>
                        <th>ContentS Gated</th>
                        <th className="text-center">Jurisdiction Gated</th>
                        <th className="text-center">Encrypted</th>
                        <th className="text-center">Claim Amount</th>
                      </tr>
                      </thead>
                    <tbody>
                      <tr>
                        <td>Dakota_Rice</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">NO</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva_Hooper</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">NO</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage_Rodriguez</td>
                        <td className="text-center">NO</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">NO</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip_Chaney</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">NO</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris_Greene</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">NO</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">NO</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">YES</td>
                        <td className="text-center">NO</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                      </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Content on the Ethereum Public Chain</CardTitle>
                  <p className="category">Smart-Contract: 0x9ee14cf3cb0c1a062ea3d0bf449fc7d12d32aa3f
</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>NFT Claim ID</th>
                        <th>Transaction Hash</th>
                        <th>Custody Account Details</th>
                        <th className="text-center">Claim Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>101</td>
                        <td>Niger</td>
                        <td>0x130093A5aEbc07e78e16f0EcEF09d1c45AfD8178</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>102</td>
                        <td>Curaçao</td>
                        <td>0x130093A5aEbc07e78e16f0EcEF09d1c45AfD8178</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>103</td>
                        <td>Netherlands</td>
                        <td>0x130093A5aEbc07e78e16f0EcEF09d1c45AfD8178</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>104</td>
                        <td>Korea, South</td>
                        <td>0x130093A5aEbc07e78e16f0EcEF09d1c45AfD8178</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>105</td>
                        <td>Malawi</td>
                        <td>0x130093A5aEbc07e78e16f0EcEF09d1c45AfD8178</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>106</td>
                        <td>Chile</td>
                        <td>0x130093A5aEbc07e78e16f0EcEF09d1c45AfD8178</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>107</td>
                        <td>Portugal</td>
                        <td>0x130093A5aEbc07e78e16f0EcEF09d1c45AfD8178</td>
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

export default Tables;
