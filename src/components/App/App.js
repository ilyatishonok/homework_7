import React from 'react';
import CarShopContainer from '../../containers/CarShopContainer';
import { createGlobalStyle } from 'styled-components';
import cars from '../../data/cars';

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0px;
        padding: 0px;
    }
`;

const App = () => (
    <React.Fragment>
        <GlobalStyle />
        <CarShopContainer dataProvider={cars} />
    </React.Fragment>
);

export default App;