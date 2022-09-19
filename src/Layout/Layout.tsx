import { Content } from '../Components/Content/Content';
import { Header } from '../Components/Header/Header';
import { SideDrawer } from '../Components/SideDrawer/SideDrawer';
import { HeaderContentWrapper, MainDiv, ParentWrapper } from './LayoutStyle';

export const Layout = () => {
    return (
        <MainDiv>
            <ParentWrapper>
                <SideDrawer />

                <HeaderContentWrapper>
                    <Header />
                    <Content />
                </HeaderContentWrapper>
            </ParentWrapper>
        </MainDiv>
    );
};
