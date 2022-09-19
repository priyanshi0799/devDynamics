import styled from 'styled-components';

const ButtonWrapper = styled.button<{ isActive: boolean }>`
    width: 75px;
    height: 40px;
    cursor: pointer;
    color: #000;
    border: none;
    outline: none;
    background-color: ${(props: any) =>
        props.isActive === true ? '#00b2ff' : 'white'};
    border-radius: 5px;
`;

export const Button = ({
    label,
    click,
    isActive,
}: {
    label: string;
    click: Function;
    isActive: boolean;
}) => {
    return (
        <ButtonWrapper onClick={() => click()} isActive={isActive}>
            {label}
        </ButtonWrapper>
    );
};
