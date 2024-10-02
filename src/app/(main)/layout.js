'use client';

import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import BottomTab from '../../components/layout/BottomTab';

const MainLayout = ({ children }) => {
    const pathname = usePathname();

    return (
        <LayoutWrapper>
            <MainContent>{children}</MainContent>
            <BottomTab currentPath={pathname} />
        </LayoutWrapper>
    );
};

export default MainLayout;

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    position: relative;
    background-color: gray;
    overflow: hidden;

    @media (max-width: 430px) {
        max-width: 100%;
    }
`;

const MainContent = styled.main`
    flex: 1;
    overflow-y: auto;
`;
