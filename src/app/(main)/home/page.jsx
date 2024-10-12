'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchMungzProfile } from '../../../api/home';
import CustomButton from '../../../components/common/CustomButton';
import InfoBanner from '../../../components/common/InfoBanner';
import SectionDivider from '../../../components/common/SectionDivider';
import CustomHeader from '../../../components/layout/CustomHeader';
import { BUTTON_COLORS, TEXT_COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/font';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../constants/space';
import MungzProfileCard from './components/MungzProfileCard';

const Home = () => {
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProfileData = async () => {
            setIsLoading(true);
            try {
                //console.log('API 호출 시작');
                const data = await fetchMungzProfile();
                //console.log('받은 데이터:', data);
                setProfileData(data);
            } catch (error) {
                //console.error('강아지 프로필 로딩 중 오류 발생:', error);
                setError(error.message || '데이터를 불러오는 데 실패했습니다.');
            } finally {
                setIsLoading(false);
            }
        };
        loadProfileData();
    }, []);

    return (
        <Container>
            <CustomHeader />
            <InfoBanner message="이번주에는 10마리의 멍즈가 동행했어요!" />
            <ContentContainer>
                <SubTitle>어떤 멍즈를 만나볼까요?</SubTitle>
                <ButtonWrapper>
                    <CustomButton color={BUTTON_COLORS.accent} text="정보 기반 매칭" route="/home/info" />
                    <CustomButton color={BUTTON_COLORS.primary} text="MBTI 매칭" route="/home/mbti" />
                </ButtonWrapper>
            </ContentContainer>
            <SectionDivider />
            <MungzProfileCard
                subtitle="오늘의 추천 멍즈 🐾"
                profileData={profileData}
                isLoading={isLoading}
                error={error}
            />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    flex-direction: column;
    gap: 0.63rem;
`;

const SubTitle = styled.span`
    color: ${TEXT_COLORS.default};
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.125rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
