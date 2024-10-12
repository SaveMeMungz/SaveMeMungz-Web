'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchMungzProfile } from '../../../../api/home';
import CustomButton from '../../../../components/common/CustomButton';
import InfoBanner from '../../../../components/common/InfoBanner';
import SectionDivider from '../../../../components/common/SectionDivider';
import CustomHeader from '../../../../components/layout/CustomHeader';
import { BUTTON_COLORS } from '../../../../constants/colors';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../../constants/space';
import MbtiMatchComponent from '../components/MbtiMatch';
import MungzProfileCard from '../components/MungzProfileCard';

const MbtiMatch = () => {
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 추후에 mbti 매칭 api로 수정
    useEffect(() => {
        const loadProfileData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchMungzProfile();
                setProfileData(data);
            } catch (error) {
                setError(error.message || '데이터를 불러오는 데 실패했습니다.');
            } finally {
                setIsLoading(false);
            }
        };
        loadProfileData();
    }, []);

    return (
        <>
            <CustomHeader title="MBTI 매칭" showBackBtn={true} />
            <InfoBanner message="나와 멍BTI가 맞는 찰떡궁합 멍즈를 찾았어요! 🐶" />
            <MbtiMatchContainer>
                <MbtiMatchComponent />
            </MbtiMatchContainer>
            <SectionDivider />
            <MungzProfileCard
                subtitle="나와 맞는 멍즈를 찾았어요! 🐾"
                profileData={profileData}
                isLoading={isLoading}
                error={error}
            />
            <ContentContainer>
                <ButtonWrapper>
                    <CustomButton color={BUTTON_COLORS.primary} text="동행 신청하기" route="/home/info" />
                    <CustomButton color={BUTTON_COLORS.secondary} text="보호소로 문의하기" route="/home/mbti" />
                </ButtonWrapper>
            </ContentContainer>
        </>
    );
};

export default MbtiMatch;

const MbtiMatchContainer = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    justify-content: center;
    width: 100%;
`;

const ContentContainer = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    flex-direction: column;
    gap: 0.63rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
