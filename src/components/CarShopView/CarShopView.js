import React from 'react';
import PropTypes from 'prop-types';
import Step from '../Step';

const CarShopView = ({ stepIndex, changeData, dataProvider, data }) => {
    if (stepIndex === 0) {
        return (
            <Step
                choiceGroup="brand"
                changeData={changeData}
                choices={dataProvider.brands}
                selectedValue={data.brand}
            />
        );
    }

    if (stepIndex === 1) {
        return (
            <Step
                choiceGroup="model"
                changeData={changeData}
                choices={dataProvider.models[data.brand]}
                selectedValue={data.model}
            />
        )
    }

    if (stepIndex === 2) {
        return (
            <Step
                choiceGroup="fuelType"
                changeData={changeData}
                choices={dataProvider.fuelTypes[data.brand][data.model]}
                selectedValue={data.fuelType}
            />
        )
    }

    if (stepIndex === 3) {
        return (
            <Step
                choiceGroup="transmissionType"
                changeData={changeData}
                choices={dataProvider.transmissionTypes[data.brand][data.model]}
                selectedValue={data.transmissionType}
            />
        )
    }
}

CarShopView.propTypes = {
    changeData: PropTypes.func.isRequired,
    dataProvider: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
    data: PropTypes.object.isRequired,
    stepIndex: PropTypes.number.isRequired,
}

export default CarShopView;