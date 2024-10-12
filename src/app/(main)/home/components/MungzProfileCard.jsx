'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchMungzProfile } from '../../../../api/home';
import { FONTS } from '../../../../constants/font';

const MungzProfileCard = ({ subtitle }) => {
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
                    <InfoColumnContainer>
                        <DetailRow>
                            <Label>지역</Label>
                            <Data>{profileData.region}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>품종</Label>
                            <Data>{profileData.breed}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>성별</Label>
                            <Data>{profileData.gender}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>체중</Label>
                            <Data>{profileData.weight}</Data>
                        </DetailRow>
                    </InfoColumnContainer>

                    <InfoColumnContainer2>
                        <DetailRow2>
                            <Label2>보호소명</Label2>
                            <Data2>{profileData.shelterName}</Data2>
                        </DetailRow2>
                        <DetailRow2>
                            <Label2>연락처</Label2>
                            <Data2>{profileData.contact}</Data2>
                        </DetailRow2>
                        <DetailRow2>
                            <Label2>중성화</Label2>
                            <Data2>{profileData.neutered}</Data2>
                        </DetailRow2>
                        <DetailRow2>
                            <Label2>특징</Label2>
                            <Data2>{profileData.characteristic}</Data2>
                        </DetailRow2>
                    </InfoColumnContainer2>
                </InfoRowContainerWrapper>
            </RecommendProfileContainer>
        </RecommendationWrapper>
    );
};

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

const InfoColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 6rem;
    flex-shrink: 0;
`;

const InfoColumnContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 10rem;
    flex-shrink: 0;
`;

const DetailRow = styled.div`
    display: flex;
    gap: 0.7rem;
`;

const DetailRow2 = styled.div`
    display: flex;
    gap: 0.2rem;
`;

const Label = styled.span`
    color: #347d6d;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.75rem;
    width: 2rem; /* 고정된 너비 */
    flex-shrink: 0;
    white-space: nowrap; /* 줄바꿈 방지 */
`;

const Label2 = styled.span`
    color: #347d6d;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.75rem;
    width: 3rem; /* 고정된 너비 */
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

const Data2 = styled.span`
    color: #347d6d;
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.75rem;
    white-space: nowrap; /* 텍스트 줄바꿈을 방지 */
    overflow: hidden; /* 넘치는 텍스트를 숨김 */
    text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시 */
    max-width: 130px; /* 적절한 최대 너비를 설정 */
`;
