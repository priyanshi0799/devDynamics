import { Overview } from '../Components/Overview/Overview';
import { Header } from '../Components/Header/Header';
import { SideDrawer } from '../Components/SideDrawer/SideDrawer';
import { HeaderContentWrapper, MainDiv, ParentWrapper } from './LayoutStyle';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Matrices } from '../Components/Matrices';
import { Projects } from '../Components/Projects';
import { Alerts } from '../Components/Alerts';

export const Layout = () => {
    return (
        <Router>
            <MainDiv>
                <ParentWrapper>
                    <SideDrawer />

                    <HeaderContentWrapper>
                        <Header />

                        <Routes>
                            <Route path="/" element={<Overview />}></Route>
                            <Route
                                path="/matrices"
                                element={<Matrices />}
                            ></Route>
                            <Route
                                path="/projects"
                                element={<Projects />}
                            ></Route>
                            <Route path="/alerts" element={<Alerts />}></Route>
                        </Routes>
                    </HeaderContentWrapper>
                </ParentWrapper>
            </MainDiv>
        </Router>
    );
};
