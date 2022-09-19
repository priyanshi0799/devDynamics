import { useEffect, useState } from 'react';
import {
    MainDiv,
    NavLinks,
    NavlinksWrapper,
    LogoutText,
} from './SideDrawerStyle';
import { useNavigate, useLocation } from 'react-router-dom';

export const SideDrawer = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let routes = [
        { route: '/', isActive: true, label: 'Overview' },
        { route: '/matrices', isActive: false, label: 'Matrices' },
        { route: '/projects', isActive: false, label: 'Projects' },
        { route: '/alerts', isActive: false, label: 'Alerts' },
    ];

    const [route, setRoute] = useState(routes);

    useEffect(() => {
        let pathname = location.pathname;
        let tempRoutes = [...routes];
        tempRoutes.forEach((ro) => {
            if (ro.route === pathname) {
                ro.isActive = true;
            } else {
                ro.isActive = false;
            }
        });
        setRoute(tempRoutes);
    }, [location.pathname]);

    const handleNavigation = (index: number) => {
        let tempRoutes = [...route];
        tempRoutes.forEach((ro) => {
            ro.isActive = false;
        });
        tempRoutes[index].isActive = true;

        setRoute(tempRoutes);
        navigate(tempRoutes[index].route);
    };

    return (
        <MainDiv>
            <h4>DevDynamics</h4>
            <NavlinksWrapper>
                {route.map((ro, i) => (
                    <NavLinks
                        isActive={ro.isActive}
                        onClick={() => handleNavigation(i)}
                        key={i}
                    >
                        {ro.label}
                    </NavLinks>
                ))}
            </NavlinksWrapper>
            <LogoutText>Log out</LogoutText>
        </MainDiv>
    );
};
