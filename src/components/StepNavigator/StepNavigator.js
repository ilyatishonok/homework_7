import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StepContainer = styled.div``;

const NextButton = styled.button`
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    background: ${props => props.disabled ? 'gray' : 'green'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    outline: none;
    color: white;
    margin: 20px;
    width: 100px;
    float: right;

    &:hover {
        background: ${props => props.disabled ? 'gray' : 'blue'};
    }
`;

const PreviousButton = styled.button`
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    background: green;
    outline: none;
    color: white;
    margin: 20px;
    width: 100px;
    float: left;
    cursor: pointer;

    &:hover {
        background: blue;
    }
`;

const StepNavigator = ({goToNextStep, goToPreviousStep, isNextButtonDisabled, isPreviousButtonVisible, isNextButtonVisible}) => (
    <StepContainer>
        {isPreviousButtonVisible && <PreviousButton onClick={goToPreviousStep}>Previous</PreviousButton> }
        {isNextButtonVisible && <NextButton disabled={isNextButtonDisabled} onClick={goToNextStep}>Next</NextButton> }
    </StepContainer>
);

StepNavigator.propTypes = {
    goToNextStep: PropTypes.func.isRequired,
    goToPreviousStep: PropTypes.func.isRequired,
    isNextButtonDisabled: PropTypes.bool.isRequired,
    isNextButtonVisible: PropTypes.bool.isRequired,
    isPreviousButtonVisible: PropTypes.bool.isRequired,
}

export default StepNavigator;