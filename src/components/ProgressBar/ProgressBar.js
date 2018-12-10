import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Progress = styled.div`
    width: 100%;
    height: 40px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    background: #555;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
    box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
`;

const Filter = styled.div.attrs(({ percent }) => ({
    style: {
        width: `${percent}%`,
    },
}))`
    display: block;
    height: 100%;
    width: 0%;
    border-radius: 25px;
    background-color: rgb(43,194,83);
    background-image: linear-gradient(
    center bottom,
    rgb(43,194,83) 37%,
    rgb(84,240,84) 69%
    );
    box-shadow: 
    inset 0 2px 9px  rgba(255,255,255,0.3),
    inset 0 -2px 6px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
    transition: width 1s;
`;

const ProgressBar = props => (
    <Progress>
        <Filter percent={props.percent}></Filter>
    </Progress>
);

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired,
}

export default ProgressBar;