'use client';

import styled from 'styled-components';
import Image from 'next/image';

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

    @media (min-width: 430px) {
        width: 430px;
        height: 932px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const Main = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled(Image)`
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
`;

const Description = styled.p`
    text-align: center;
    margin-bottom: 2rem;
`;

export default function Home() {
    return (
        <PageWrapper>
            <MobileContainer>
                <PageContainer>
                    <Main>
                        <Logo
                            src="/images/symbol.svg"
                            alt="구해줘 멍즈 로고"
                            width={300}
                            height={200}
                            priority
                        />
                        <Title>구해줘 멍즈</Title>
                        <Description>
                            구해줘 멍즈
                            <br />
                            함께하는 따뜻한 동행
                        </Description>
                    </Main>
                </PageContainer>
            </MobileContainer>
        </PageWrapper>
    );
}
