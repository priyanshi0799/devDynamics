import styled from 'styled-components';

export const MainDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 15% 75% 10%;
    justify-content: center;
    background-color: #f3f3f3;
`;

export const NavlinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const NavLinks = styled.p<{ isActive: boolean }>`
    margin: 0;
    font-size: 16px;
    color: #000;
    cursor: pointer;
    opacity: ${(props: any) => (props.isActive === true ? 1 : 0.3)};
`;

export const LogoutText = styled.h5`
    cursor: pointer;
    opacity: 0.7;
`;
