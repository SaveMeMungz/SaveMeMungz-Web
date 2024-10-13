'use client';

import Image from 'next/image';
import styled from 'styled-components';

import { TEXT_COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/font';

const MungzProfileCard = ({ subtitle, profileData, isLoading, error }) => {
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>에러: {error}</div>;
    if (!profileData) return <div>데이터가 없습니다.</div>;

    return (
        <RecomendationWrapper>
            <Subtitle>{subtitle}</Subtitle>
            {/* 멍즈 카드 */}
            <CardContainer>
                <ProfilePicWrapper>
                    <Image src={profileData.image} alt="멍즈 프로필 사진" fill style={{ objectFit: 'cover' }} />
                </ProfilePicWrapper>
                {/* 정보 */}
                <InfoWrapper>
                    <InfoColumn>
                        <InfoItem label="지역" data={profileData.region} />
                        <InfoItem label="품종" data={profileData.breed} />
                        <InfoItem label="성별" data={profileData.gender} />
                        <InfoItem label="체중" data={profileData.weight} />
                    </InfoColumn>
                    <InfoColumn>
                        <InfoItem2 label="보호소명" data={profileData.shelterName} />
                        <InfoItem2 label="연락처" data={profileData.contact} />
                        <InfoItem2 label="중성화" data={profileData.neutered} />
                        <InfoItem2 label="특징" data={profileData.characteristic} />
                    </InfoColumn>
                </InfoWrapper>
            </CardContainer>
        </RecomendationWrapper>
    );
};

const InfoItem = ({ label, data }) => (
    <DetailRow>
        <Label>{label}</Label>
        <Data>{data}</Data>
    </DetailRow>
);

const InfoItem2 = ({ label, data }) => (
    <DetailRow>
        <Label2>{label}</Label2>
        <Data2>{data}</Data2>
    </DetailRow>
);

export default MungzProfileCard;

// 스타일링
const RecomendationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Subtitle = styled.div`
    color: ${TEXT_COLORS.title};
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.125rem;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${TEXT_COLORS.grey};
    border-radius: 0.5rem;
    box-shadow: 3px 4px 4px 1px rgba(77, 77, 77, 0.5);
    padding: 1rem 1.5rem;
    gap: 1.5rem;
`;

const ProfilePicWrapper = styled.div`
    width: 9.375rem;
    height: 9.375rem;
    width: 8.75rem;
    height: 8.75rem;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 3px 4px 4px 0px rgba(71, 152, 122, 0.5);
`;

const InfoWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const DetailRow = styled.div`
    display: flex;
    gap: 0.5rem;
`;

// 공통 스타일 정의
const LabelStyles = `
    color: ${TEXT_COLORS.default};
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.75rem;
    white-space: nowrap; /* 줄바꿈 방지 */
`;

const DataStyles = `
    color: ${TEXT_COLORS.default};
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.75rem;
    white-space: nowrap; /* 텍스트 줄바꿈을 방지 */
    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시 */
`;

const Label = styled.span`
    ${LabelStyles}
    width: 1.75rem; /* 고정된 너비 */
`;

const Data = styled.span`
    ${DataStyles}
    width: 5rem;
`;

const Label2 = styled.span`
    ${LabelStyles}
    width: 2.8125rem;
`;

const Data2 = styled.span`
    ${DataStyles}
    width: 6.25rem;
`;
