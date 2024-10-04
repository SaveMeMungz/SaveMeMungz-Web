'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';

import backIcon from '../../assets/icons/back-icon.png';
import logo from '../../assets/images/logo.png';
import symbol from '../../assets/images/symbol.png';
import { TEXT_COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/font';

const CustomHeader = ({ title, showBackBtn = false }) => {
    const router = useRouter();
    const pathname = usePathname();

    const isHome = pathname === '/home';

    const handleBackClick = () => {
        router.back();
    };

    if (isHome) {
        return (
            <HomeHeaderContainer>
                <HeaderWrapper>
                    <Symbol>
                        <Image src={symbol} alt="symbol logo" fill style={{ objectFit: 'contain' }} />
                    </Symbol>
                    <Logo>
                        <Image src={logo} alt="text logo" fill style={{ objectFit: 'contain' }} />
                    </Logo>
                </HeaderWrapper>
            </HomeHeaderContainer>
        );
    } else {
        return (
            <HeaderContainer>
                <LeftSection>
                    {showBackBtn && (
                        <BackButton onClick={handleBackClick}>
                            <Image src={backIcon} alt="back button" fill style={{ objectFit: 'contain' }} />
                        </BackButton>
                    )}
                </LeftSection>
                <Title>{title}</Title>
                <RightSection />
            </HeaderContainer>
        );
    }
};

export default CustomHeader;

const HomeHeaderContainer = styled.header`
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

const HeaderContainer = styled(HomeHeaderContainer)`
    justify-content: space-between;
`;

const BackButton = styled.button`
    position: relative;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
`;

const LeftSection = styled.div`
    display: flex;
    flex: 1;
    margin-left: 0.38rem;
`;

const RightSection = styled.div`
    display: flex;
    flex: 1;
`;

const Title = styled.h1`
    display: flex;
    flex: 2;
    color: ${TEXT_COLORS.title};
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.25rem;
    text-align: center;
    justify-content: center;
`;
