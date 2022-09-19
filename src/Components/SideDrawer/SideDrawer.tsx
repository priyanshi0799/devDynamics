import {
    MainDiv,
    NavLinks,
    NavlinksWrapper,
    LogoutText,
} from './SideDrawerStyle';

export const SideDrawer = () => {
    return (
        <MainDiv>
            <h4>DevDynamics</h4>
            <NavlinksWrapper>
                <NavLinks isActive={true}>Overview</NavLinks>
                <NavLinks isActive={false}>Metrics</NavLinks>
                <NavLinks isActive={false}>Projects</NavLinks>
                <NavLinks isActive={false}>Alerts</NavLinks>
            </NavlinksWrapper>
            <LogoutText>Log out</LogoutText>
        </MainDiv>
    );
};
