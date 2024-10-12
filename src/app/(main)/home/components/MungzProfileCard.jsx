'use client';

import styled from 'styled-components';

import { FONTS } from '../../../../constants/font';

const MungzProfileCard = ({ subtitle, profileData, isLoading, error }) => {
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>에러: {error}</div>;
    if (!profileData) return <div>데이터가 없습니다.</div>;

    return (
        <RecommendationWrapper>
            <RecommendTitleRow>
                <TodayRecommendMungz>{subtitle}</TodayRecommendMungz>
            </RecommendTitleRow>
            <RecommendProfileContainer>
                <ProfilePic src={profileData.image} />
                <InfoRowContainerWrapper>
                    <InfoColumn>
                        <InfoItem label="지역" data={profileData.region} />
                        <InfoItem label="품종" data={profileData.breed} />
                        <InfoItem label="성별" data={profileData.gender} />
                        <InfoItem label="체중" data={profileData.weight} />
                    </InfoColumn>
                    <InfoColumn>
                        <InfoItem label="보호소명" data={profileData.shelterName} />
                        <InfoItem label="연락처" data={profileData.contact} />
                        <InfoItem label="중성화" data={profileData.neutered} />
                        <InfoItem label="특징" data={profileData.characteristic} />
                    </InfoColumn>
                </InfoRowContainerWrapper>
            </RecommendProfileContainer>
        </RecommendationWrapper>
    );
};

const InfoItem = ({ label, data }) => (
    <DetailRow>
        <Label>{label}</Label>
        <Data>{data}</Data>
    </DetailRow>
);

export default MungzProfileCard;

// 스타일링
const RecommendationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 24.375rem;
    padding: 1rem 1.5rem;
    gap: 0.5rem;
`;

const RecommendTitleRow = styled.div``;

const TodayRecommendMungz = styled.div`
    color: #204b5a;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.125rem;
`;

const RecommendProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #a5a5a5;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
    width: 21.375rem;
    padding: 1rem; /* padding을 사용해 내부 여백 추가 */
    min-height: 18rem; /* 최소 높이 설정 */
`;

const ProfilePic = styled.div`
    width: 8.125rem;
    height: 8.125rem;
    background-color: #eee;
    border-radius: 50%;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`;

const InfoRowContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 6rem;
    flex-shrink: 0;
`;

const DetailRow = styled.div`
    display: flex;
    gap: 0.7rem;
`;

const Label = styled.span`
    color: #347d6d;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.75rem;
    width: 2rem; /* 고정된 너비 */
    flex-shrink: 0;
    white-space: nowrap; /* 줄바꿈 방지 */
`;

const Data = styled.span`
    color: #347d6d;
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.75rem;
    white-space: nowrap; /* 텍스트 줄바꿈을 방지 */
    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시 */
    max-width: 100px; /* 적절한 최대 너비를 설정 */
`;
