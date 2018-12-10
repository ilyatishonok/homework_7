import React from 'react';
import CarShopContainer from '../../containers/CarShopContainer';
import cars from '../../data/cars';

const App = () => (
    <React.Fragment>
        <CarShopContainer dataProvider={cars} />
    </React.Fragment>
);

export default App;