import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SummaryContainer = styled.div`
    font-size: 20px;
    text-align: center;
`;

const Summary = ({ data: { brand, model, fuelType, transmissionType }}) => (
    <SummaryContainer>
        <h2>Your order in process</h2>
        <div>Brand: {brand}</div>
        <div>Model: {model}</div>
        <div>Fuel Type: {fuelType}</div>
        <div>Transmission Type: {transmissionType}</div>
    </SummaryContainer>
)

Summary.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Summary;