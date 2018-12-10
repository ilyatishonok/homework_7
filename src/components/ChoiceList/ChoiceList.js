import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Choice from './Choice';

const ChoiceListContainer = styled.div`
`;

const ChoiceList = props => (
    <ChoiceListContainer>
        {props.choices.map(choice => (
            <Choice
                selected={choice === props.selectedValue}
                value={choice}
                key={choice}
                choiceName={props.choiceGroup}
                changeData={props.changeData}
            />
        ))}
    </ChoiceListContainer>
);

ChoiceList.propTypes = {
    choiceGroup: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,
    changeData: PropTypes.func.isRequired,
    selectedValue: PropTypes.string,
};

export default ChoiceList;