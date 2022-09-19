import styled from 'styled-components';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: #f3f3f3;
    box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04);
`;

export const Header = () => {
    return <HeaderWrapper />;
};
