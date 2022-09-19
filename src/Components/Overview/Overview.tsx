import { useState } from 'react';
import { Button } from '../../Reusables/Button';
import { Card } from '../../Reusables/Card';
import { ParentDiv, ButtonWrapper, CardWrapper } from './OverviewStyle';

export const Overview = () => {
    const [isLineActive, setIsLineActive] = useState(true);
    const [isBarActive, setIsBarActive] = useState(false);

    const toggleButton = (type: string) => {
        if (type === 'line') {
            setIsBarActive(false);
            setIsLineActive(true);
        } else {
            setIsBarActive(true);
            setIsLineActive(false);
        }
    };
    return (
        <ParentDiv>
            <ButtonWrapper>
                <Button
                    label="LINE"
                    isActive={isLineActive}
                    click={() => toggleButton('line')}
                />
                <Button
                    label="BAR"
                    isActive={isBarActive}
                    click={() => toggleButton('bar')}
                />
            </ButtonWrapper>

            <CardWrapper>
                <Card>Hello</Card>
                <Card>Hello</Card>
            </CardWrapper>
            <Card>Hello</Card>
        </ParentDiv>
    );
};
