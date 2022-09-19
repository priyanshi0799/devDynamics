import styled from 'styled-components';
import { Button } from '../../Reusables/Button';

const ParentDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #cdc7c7;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const ButtonWrapper = styled.div`
    align-self: flex-end;
    display: flex;
    gap: 20px;
    width: 25%;
    padding: 15px 0px;
`;

export const Content = () => {
    return (
        <ParentDiv>
            <ButtonWrapper>
                <Button label="LINE" isActive={true} click={() => {}} />
                <Button label="BAR" isActive={false} click={() => {}} />
            </ButtonWrapper>
        </ParentDiv>
    );
};
