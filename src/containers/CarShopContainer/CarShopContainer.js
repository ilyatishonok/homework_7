import createWizard from '../../components/WizardForm';
import CarShopView from '../../components/CarShopView';
import Summary from '../../components/Summary';

const steps = [
    {
        title: 'Brands',
        id: 'brandStep',
        validate: stepData => !!stepData.brand,
    },
    {
        title: 'Models',
        id: 'modelStep',
        processStepData: (data, provider) => {
            const { model, brand } = data;
            if (!provider.models[brand].includes(model)) {
                return { model: null };
            }
        },
        validate: stepData => !!stepData.model,
    },
    {
        title: 'Fuel Types',
        id: 'fuelTypeStep',
        processStepData: (data, provider) => {
            const { model, brand, fuelType } = data;

            if (!provider.fuelTypes[brand][model].includes(fuelType)) {
                return { fuelType: null };
            }
        },
        validate: stepData => !!stepData.fuelType,
    },
    {
        title: 'Transmission Types',
        id: 'transmissionTypeStep',
        processStepData: (data, provider) => {
            const { model, brand, fuelType } = data;
            
            if (!provider.fuelTypes[brand][model].includes(fuelType)) {
                return { transmissionType: null };
            }
        },
        validate: stepData => !!stepData.transmissionType,
    }
]

export default createWizard(steps)(CarShopView, Summary);