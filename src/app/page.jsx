'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import logoImg from '../assets/images/splash-logo.png';
import symbolImg from '../assets/images/symbol.png';
import { COLORS } from '../constants/colors';

const Splash = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const animationTimer = setTimeout(() => {
            setIsVisible(false);
        }, 1800);

        const routeTimer = setTimeout(() => {
            router.push('/home');
        }, 2000);

        return () => {
            clearTimeout(animationTimer);
            clearTimeout(routeTimer);
        };
    }, [router]);

    return (
        <Main $isVisible={isVisible}>
            <Symbol src={symbolImg} alt="로고" width={240} height={211} />
            <Logo src={logoImg} alt="구해줘 멍즈" width={300} />
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

    gap: 2.5rem;

    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    transition: opacity 0.3s ease-in;
`;

const Symbol = styled(Image)`
    width: 15rem;
    height: 13.2375rem;
`;

const Logo = styled(Image)`
    width: 15rem;
    height: 3.47331rem;
`;
