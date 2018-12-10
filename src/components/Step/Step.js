import React from 'react';
import PropTypes from 'prop-types';
import ChoiceList from '../ChoiceList';

const Step = props => (
    <ChoiceList 
        choiceGroup={props.choiceGroup}
        choices={props.choices}
        changeData={props.changeData}
        selectedValue={props.selectedValue}
    />
);

Step.propTypes = {
    choices: PropTypes.array.isRequired,
    changeData: PropTypes.func.isRequired,
    choiceGroup: PropTypes.string.isRequired,
    selectedValue: PropTypes.string,
}

export default Step;