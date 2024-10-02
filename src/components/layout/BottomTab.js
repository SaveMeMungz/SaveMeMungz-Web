'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import homeOff from '../../assets/icons/bottomTab/home-off.png';
import homeOn from '../../assets/icons/bottomTab/home-on.png';
import mapOff from '../../assets/icons/bottomTab/map-off.png';
import mapOn from '../../assets/icons/bottomTab/map-on.png';
import mypageOff from '../../assets/icons/bottomTab/mypage-off.png';
import mypageOn from '../../assets/icons/bottomTab/mypage-on.png';
import searchOff from '../../assets/icons/bottomTab/search-off.png';
import searchOn from '../../assets/icons/bottomTab/search-on.png';

const tabs = [
    { name: 'home', label: '멍즈 찾기', path: '/home', onIcon: homeOn, offIcon: homeOff },
    { name: 'course', label: '산책 코스', path: '/course', onIcon: mapOn, offIcon: mapOff },
    { name: 'help-mungz', label: '실종 근황', path: '/help-mungz', onIcon: searchOn, offIcon: searchOff },
    { name: 'mypage', label: '마이페이지', path: '/mypage', onIcon: mypageOn, offIcon: mypageOff },
];

const BottomTab = ({ currentPath }) => {
    return (
        <BottomTabWrapper>
            {tabs.map((tab) => {
                const isActive = currentPath.startsWith(tab.path);
                return (
                    <TabItem key={tab.name}>
                        <StyledLink href={tab.path} $isActive={isActive}>
                            <TabContent>
                                <Image
                                    src={isActive ? tab.onIcon : tab.offIcon}
                                    alt={tab.label}
                                    width={24}
                                    height={24}
                                    style={{ width: '1.5rem', height: '1.5rem' }}
                                />
                                <TabLabel>{tab.label}</TabLabel>
                            </TabContent>
                        </StyledLink>
                    </TabItem>
                );
            })}
        </BottomTabWrapper>
    );
};

export default BottomTab;

const BottomTabWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4.24rem;
    margin: 0 auto;
    max-width: 480px;

    @media (max-width: 430px) {
        max-width: 100%;
    }
`;

const TabItem = styled.div`
    flex: 1;
    text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => (props.$isActive ? '#2A7363' : '#3CA690')};
`;

const TabContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const TabLabel = styled.span`
    font-size: 0.75rem;
    margin-top: 0.25rem;
    font-weight: 500;
`;
