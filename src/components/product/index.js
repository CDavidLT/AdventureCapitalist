import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button, Card, Col
} from 'react-bootstrap';
import store from '../../store';
import { sellProduct, upgradeProduct } from '../../reducers/actionsTypes';

const Product = ({ item, money }) => {
  const { dispatch } = store;

  const [product, setProduct] = useState(item);

  const handleSellProduct = () => {
    dispatch(sellProduct(item.price));
  };
  const handleUpgradeProduct = () => {
    if (money >= (1000 * item.level)) {
      const newProduct = product;
      dispatch(upgradeProduct(1000 * item.level));
      newProduct.level = product.level + 1;
      newProduct.price = product.price + product.price * (product.level / 10);
      setProduct(newProduct);
    }
  };
  return (
    <Card>
      <Card.Header onClick={handleSellProduct}>
        <b>
          { item.name }
        </b>
        <img src={item.image} height={100} alt="img" />
      </Card.Header>
      <Card.Body>
        <Card.Title>
          price:
          $
          { item.price.toFixed(2) }
        </Card.Title>
        <Card.Text>
          <Col>
            <b>level:</b>
            { item.level }
          </Col>
          <Col>
            <Button onClick={handleUpgradeProduct}>
              Upgrade for $
              { item.level * 1000 }
            </Button>
          </Col>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const mapToProps = (state) => ({
  money: state.data.money
});

export default connect(mapToProps)(Product);
