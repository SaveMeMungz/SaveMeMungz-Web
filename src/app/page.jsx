'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';

import logoImg from '../assets/images/logo_white.png';
import symbolImg from '../assets/images/symbol.png';
import { COLORS } from '../constants/colors';

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
            <Symbol src={symbolImg} alt="로고" width={240} height={211} />
            <LogoContainer>
                <Logo src={logoImg} alt="구해줘 멍즈" layout="fill" objectFit="contain" />
            </LogoContainer>
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
    background-color: ${COLORS.accent};
    padding: 1rem;

    gap: 3rem;
`;

const Symbol = styled(Image)`
    width: 15rem;
    height: 13.2375rem;
`;

const LogoContainer = styled.div`
    width: 15rem;
    height: 3.1045rem;
    position: relative;
`;

const Logo = styled(Image)`
    object-fit: contain;
`;