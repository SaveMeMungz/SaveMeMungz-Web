'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchMungzProfile } from '../../../../api/home';
import CustomButton from '../../../../components/common/CustomButton';
import InfoBanner from '../../../../components/common/InfoBanner';
import CustomHeader from '../../../../components/layout/CustomHeader';
import { BUTTON_COLORS } from '../../../../constants/colors';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../../constants/space';
import CustomTag from '../components/CustomTag';
import MungzProfileCard from '../components/MungzProfileCard';

const InfoMatch = () => {
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const tags = ['용인시', '소형견', '성별:암컷', '중성화완료'];

    const handleClick = () => {
        alert('준비중인 기능입니다!');
    };

    // 추후에 정보 매칭 api로 수정
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
        <Container>
            <CustomHeader onClck title="정보 기반 매칭" showBackBtn={true} />
            <InfoBanner message="동행자님의 입력 정보에 맞는 멍즈를 찾았어요! 🐶" />
            {/* 정보 태그 */}
            <TagWrapper>
                {tags.map((tag, index) => (
                    <CustomTag key={index} text={tag} />
                ))}
            </TagWrapper>
            {/* 추천 카드 */}
            <ContentContainer>
                <MungzProfileCard
                    subtitle="나와 맞는 멍즈를 찾았어요! 🐾"
                    profileData={profileData}
                    isLoading={isLoading}
                    error={error}
                />
            </ContentContainer>
            {/* 버튼 영역 */}
            <ContentContainer>
                <ButtonWrapper>
                    <CustomButton
                        onClick={handleClick}
                        color={BUTTON_COLORS.primary}
                        text="동행 신청하기"
                        route="/home/info"
                    />
                    <CustomButton
                        onClick={handleClick}
                        color={BUTTON_COLORS.secondary}
                        text="보호소로 문의하기"
                        route="/home/mbti"
                    />
                </ButtonWrapper>
            </ContentContainer>
        </Container>
    );
};

export default InfoMatch;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
`;

const TagWrapper = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    justify-content: space-between;
`;

const ContentContainer = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
