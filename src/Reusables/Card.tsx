import styled from 'styled-components';

const CardWrapper = styled.div`
    width: inherit;
    min-height: 80px;
    height: fit-content;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
`;

export const Card = ({ children }: { children: any }) => {
    return <CardWrapper>{children}</CardWrapper>;
};
