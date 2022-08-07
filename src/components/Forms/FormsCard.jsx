/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { stepsColors } from '../../config/theme';
import { steps } from '../../constants/steps';
import ProgressSteps, {
    Title,
    Content
} from '@joaosousa/react-native-progress-steps';
import FormsHOC from '../../HOC/FormsHOC';

const FormsCard = () => {
    const step = useSelector(state => state.stepReducer);
    return <ProgressSteps
        currentStep={step}
        steps={
            steps.map((value, index) => {
                const StepComponent = FormsHOC(value.content);
                return {
                    id: index + 1,
                    title: (<Title>{value.title}</Title>),
                    content: (<Content>
                        <StepComponent
                            id={index}
                        />
                    </Content>)
                }
            })}
        colors={stepsColors}
    />;
}
export default FormsCard;
