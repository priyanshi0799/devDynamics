import { Content } from '../Components/Content/Content';
import { Header } from '../Components/Header/Header';
import { SideDrawer } from '../Components/SideDrawer/SideDrawer';
import { MainDiv } from './LayoutStyle';

export const Layout = () => {
    return (
        <MainDiv>
            <Header />
            <SideDrawer />
            <Content />
        </MainDiv>
    );
};
