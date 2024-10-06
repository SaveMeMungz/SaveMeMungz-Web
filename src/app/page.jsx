'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';

const Splash = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/home');
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <Main>
            <Logo src="/images/symbol.svg" alt="구해줘 멍즈 로고" width={300} height={200} priority />
            <Title>구해줘 멍즈</Title>
            <Description>
                구해줘 멍즈
                <br />
                함께하는 따뜻한 동행
            </Description>
        </Main>
    );
};

export default Splash;

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
