import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StepNavigator from '../components/StepNavigator';
import ProgressBar from '../components/ProgressBar';

const Form = styled.form`
    display: inline-block;
    width: 700px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    margin: 20px;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 250px;
    margin-right: 250px;
    box-shadow: 0 0 10px black;
`;

const StepsView = styled.div`
    height: 250px;
    overflow: auto;
`;

const StepTitle = styled.div`
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    box-shadow: 0px 0px 10px  black; 
    transition: content 1s;
`;

const createWizard = steps => {
    return (StepView, Summary) => {
        return class extends Component {
            state = {
                data: Object.create(null),
                stepIndex: 0,
                isSummary: false,
            }

            constructor(props) {
                super(props);

                this.goToNextStep = this.goToNextStep.bind(this);
                this.goToPreviousStep = this.goToPreviousStep.bind(this);
                this.onChange = this.onChange.bind(this);
            }

            onChange(newData) {
                this.setState(({ data }) => ({
                    data: {
                        ...data,
                        ...newData,
                    },
                }));
            }

            goToStep(nextStepIndex) {
                const { dataProvider } = this.props;

                if (nextStepIndex === steps.length) {
                    return this.setState({
                        stepIndex: nextStepIndex,
                        isSummary: true,
                    });
                }

                const nextStep = steps[nextStepIndex];
                const newData = this.processStepData(nextStep, dataProvider);

                return this.setState({
                    data: newData,
                    stepIndex: nextStepIndex,
                    isSummary: false,
                });
            }

            goToNextStep(event) {
                event.preventDefault();
                
                this.goToStep(this.state.stepIndex + 1);
            }

            goToPreviousStep(event) {
                event.preventDefault();
                
                this.goToStep(this.state.stepIndex - 1);
            }

            processStepData(nextStep) {
                const { data } = this.state;
                const { dataProvider } = this.props;
                
                if (!nextStep.processStepData) {
                    return data;
                }

                const processedByNextStepData = nextStep.processStepData(data, dataProvider);

                return { ...data, ...processedByNextStepData };
            }

            renderStep() {
                const { data, stepIndex } = this.state;
                const { title } = steps[stepIndex];
                
                return (
                    <React.Fragment>
                        <StepTitle>{title}</StepTitle>
                        <StepsView>
                            <StepView
                                {...this.props}
                                stepIndex={stepIndex}
                                changeData={this.onChange}
                                data={data}
                            />
                        </StepsView>
                    </React.Fragment>
                );
            }

            renderSummary() {
                return (
                    <Summary data={this.state.data} />
                )
            }

            render() {
                const { data, stepIndex, isSummary } = this.state;
                const validate = isSummary ? false : steps[stepIndex].validate;
                const isNextButtonDisabled = validate ? !validate(data) : false;

                return (
                    <Form>
                        <ProgressBar percent={(100 * stepIndex)/(steps.length)} />
                        {isSummary ? this.renderSummary() : this.renderStep()}
                        <StepNavigator
                            isNextButtonVisible={stepIndex !== steps.length}
                            isPreviousButtonVisible={stepIndex > 0}
                            isNextButtonDisabled={isNextButtonDisabled}
                            goToNextStep={this.goToNextStep}
                            goToPreviousStep={this.goToPreviousStep}
                        />
                    </Form>
                );
            }

            static propTypes = {
                dataProvider: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),     
            }
        }
    }
}

export default createWizard;