import React, { Component } from 'react';
import { Col, Label, Panel, Accordion, Row } from 'react-bootstrap';
import moment from 'moment';
import MenuItem from './vendorOrderMenuItem.jsx';
import utils from '../utils.js';

class PastItem extends Component {

  render() {
    const time = moment(this.props.incomingOrder.order_time).format('llll');
    const timeFormatted = moment(time).fromNow();
    const order = this.props.incomingOrder;
    const incomingOrderHeader = (
      <Col xs={12}>
        <Col xs={3}>
          <h5>
            {order.order_id}
          </h5>
          <h2>
            {order.customer_email}
          </h2>
        </Col>
        <Col xs={3}>
          <h5>
          Total
          </h5>
          <h2>
            ${utils.formatCentsToDollars(order.price_total)}
          </h2>
        </Col>
        <Col xs={6}>
          <Col xs={6}>
            <h5>
            Ordered
            </h5>
            <h2>
              {order.items.length} Items
            </h2>
          </Col>
          <Col xs={6} className="vendorOrderText">
            <Label bsStyle="success" className="text2" >
              {timeFormatted}
            </Label>
          </Col>
        </Col>
      </Col>
    );
    const statusColor = { 3: 'primary' };

    return (
      <Accordion >
        <Panel header={incomingOrderHeader} bsStyle={statusColor[order.order_status]} className="incomingOrderHeaderStyle">
          <Row>
            <Col xs={12}>
              {this.props.incomingOrder.items.map((item, i) =>
                <MenuItem incomingOrder={item} key={i} />
              )}
            </Col>
          </Row>
        </Panel>
      </Accordion>
    );
  }
}

export default PastItem;
