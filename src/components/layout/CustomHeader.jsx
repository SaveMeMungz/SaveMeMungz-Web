'use client';

import Image from 'next/image';
import styled from 'styled-components';

import logo from '../../assets/images/logo.png';
import symbol from '../../assets/images/symbol.png';

const CustomHeader = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Symbol>
                    <Image src={symbol} alt="symbol logo" fill style={{ objectFit: 'contain' }} />
                </Symbol>
                <Logo>
                    <Image src={logo} alt="text logo" fill style={{ objectFit: 'contain' }} />
                </Logo>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default CustomHeader;

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 5rem;
`;

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 0.8rem;
    padding: 0.4rem 0;
`;

const Symbol = styled.div`
    position: relative;
    width: 5rem;
    height: 4.4125rem;
`;

const Logo = styled.div`
    position: relative;
    width: 11.25rem;
    height: 2.679375rem;
`;
