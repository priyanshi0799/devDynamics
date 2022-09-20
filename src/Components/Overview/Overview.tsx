import { useState } from 'react';
import { UserData } from '../../data';
import { BarChart } from '../../Reusables/BarChart';
import { Button } from '../../Reusables/Button';
import { Card } from '../../Reusables/Card';
import { LineChart } from '../../Reusables/LineChart';
import { ParentDiv, ButtonWrapper, CardWrapper } from './OverviewStyle';

export const Overview = () => {
    const [isLineActive, setIsLineActive] = useState(true);
    const [isBarActive, setIsBarActive] = useState(false);
    const userData = {
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'Users Gained',
                data: UserData.map((data) => data.userGain),
                backgroundColor: '#00b2ff',
                borderColor: '#00b2ff',
            },
        ],
    };

    const userDoubleData = {
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'Users Gained',
                data: UserData.map((data) => data.userGain),
                backgroundColor: '#00b2ff',
                borderColor: '#00b2ff',
            },
            {
                label: 'Users Lost',
                data: UserData.map((data) => data.userLost),
                backgroundColor: 'red',
                borderColor: 'red',
            },
        ],
    };

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
                <Card>
                    {isLineActive ? (
                        <LineChart data={userData} />
                    ) : (
                        <BarChart data={userData} />
                    )}
                </Card>
                <Card>
                    {isLineActive ? (
                        <LineChart data={userDoubleData} />
                    ) : (
                        <BarChart data={userDoubleData} />
                    )}
                </Card>
            </CardWrapper>
        </ParentDiv>
    );
};
