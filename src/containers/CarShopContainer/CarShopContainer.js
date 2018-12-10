import createWizard from '../../wizard/createWizard';
import CarShopView from '../../components/CarShopView';
import Summary from '../../components/Summary';

const steps = [
    {
        title: 'Brands',
        validate: data => !!data.brand,
    },
    {
        title: 'Models',
        processStepData: (data, provider) => {
            const { model, brand } = data;
            if (!provider.models[brand].includes(model)) {
                return { model: null };
            }
        },
        validate: data => !!data.model,
    },
    {
        title: 'Fuel Types',
        processStepData: (data, provider) => {
            const { model, brand, fuelType } = data;

            if (!provider.fuelTypes[brand][model].includes(fuelType)) {
                return { fuelType: null };
            }
        },
        validate: data => !!data.fuelType,
    },
    {
        title: 'Transmission Types',
        processStepData: (data, provider) => {
            const { model, brand, fuelType } = data;
            
            if (!provider.fuelTypes[brand][model].includes(fuelType)) {
                return { transmissionType: null };
            }
        },
        validate: data => !!data.transmissionType,
    },
]

export default createWizard(steps)(CarShopView, Summary);