import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Money from '../money';
import Product from '../product';

const Home = ({ data }) => (
  <Container className="container" style={{ backgroundColor: '#2e2e2e' }}>
    <Money />
    {data.product.map((item) => (<Product item={item} />))}
  </Container>
);

const mapToProps = (state) => ({
  data: state.data
});

export default connect(mapToProps)(Home);
