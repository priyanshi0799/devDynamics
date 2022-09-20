import { useState } from 'react';
import { Button } from '../../Reusables/Button';
import { Card } from '../../Reusables/Card';
import { LineChart } from '../../Reusables/LineChart';
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

    const lineData = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        datasets: [
            {
                label: 'First',
                data: [10, 20, 35, 1, 23, 89, 4, 34, 56, 11, 17],
                backgroundColor: '#00b2ff',
                borderColor: '#00b2ff',
            },
        ],
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
                <Card>
                    <LineChart data={lineData} />
                </Card>
                <Card>Hello</Card>
            </CardWrapper>
            <Card>Hello</Card>
        </ParentDiv>
    );
};
