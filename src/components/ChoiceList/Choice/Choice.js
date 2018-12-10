import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChoiceContainer = styled.div`
    user-select: none;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
    cursor: pointer;
    background: ${({ selected }) => ( selected && 'green')};
    color: ${({ selected }) => (selected && 'white')}
`;

export default class Choice extends Component {
    onClick = event => {
        const { selected, choiceName, changeData } = this.props;

        if (!selected) {
            changeData({
                [choiceName]: event.currentTarget.textContent,
            })
        }
    }

    render() {
        return (
            <ChoiceContainer onClick={this.onClick} selected={this.props.selected}>
                {this.props.value}
            </ChoiceContainer>
        )
    }

    static propTypes = {
        selected: PropTypes.bool.isRequired,
        choiceName: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }
}