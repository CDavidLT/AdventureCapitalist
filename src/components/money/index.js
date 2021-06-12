import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const MoneyBar = ({ money }) => (
  <Row className="container">
    <Col>
      <h1>
        <div className="text-success">
          $
          {money.toFixed(2)}
        </div>
      </h1>
    </Col>
  </Row>
);

const mapToProps = (state) => ({
  money: state.data.money
});

export default connect(mapToProps)(MoneyBar);
