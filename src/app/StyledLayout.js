'use client';

import styled from 'styled-components';

const StyledLayout = ({ children }) => {
    return (
        <PageWrapper>
            <MobileContainer>
                <PageContainer>{children}</PageContainer>
            </MobileContainer>
        </PageWrapper>
    );
};

export default StyledLayout;

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
`;

const MobileContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: auto;
    background-color: white;

    @media (min-width: 431px) {
        width: 430px;
        height: 932px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 768px) {
        width: 480px;
        height: 1024px;
    }
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;
