'use client'

import styled from 'styled-components';

import { FONTS } from '../../../constants/font';

const RecommendProfileComponent = ({ profileData }) => {
    return (
        <RecommendationWrapper>
            <RecommendTitleRow>
                <TodayRecommendMungz>오늘의 추천 멍즈 🐾</TodayRecommendMungz>
            </RecommendTitleRow>
            <RecommendProfileContainer>
                <ProfilePic src={profileData?.image || '/default-image.png'} />
                <InfoRowContainerWrapper>
                    {/* 첫 번째 InfoColumn: 지역, 품종, 성별, 체중 */}
                    <InfoColumnContainer>
                        <DetailRow>
                            <Label>지역:</Label>
                            <Data>{profileData?.region || "정보 없음"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>품종:</Label>
                            <Data>{profileData?.breed || "정보 없음"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>성별:</Label>
                            <Data>{profileData?.gender || "정보 없음"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>체중:</Label>
                            <Data>{profileData?.weight || "정보 없음"}</Data>
                        </DetailRow>
                    </InfoColumnContainer>

                    {/* 두 번째 InfoColumn: 보호소명, 연락처, 중성화, 특징 */}
                    <InfoColumnContainer>
                        <DetailRow>
                            <Label>보호소명:</Label>
                            <Data>{profileData?.shelterName || "정보 없음"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>연락처:</Label>
                            <Data>{profileData?.contact || "정보 없음"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>중성화:</Label>
                            <Data>{profileData?.neutered || "정보 없음"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>특징:</Label>
                            <Data>{profileData?.characteristic || "정보 없음"}</Data>
                        </DetailRow>
                    </InfoColumnContainer>
                </InfoRowContainerWrapper>
            </RecommendProfileContainer>
        </RecommendationWrapper>
    );
};

RecommendProfileComponent.defaultProps = {
    profileData: {
        region: "정보 없음",
        breed: "정보 없음",
        gender: "정보 없음",
        weight: "정보 없음",
        shelterName: "정보 없음",
        contact: "정보 없음",
        neutered: "정보 없음",
        characteristic: "정보 없음"
    }
};

export default RecommendProfileComponent;

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
    color: #204B5A;
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
    border: 1px solid #A5A5A5;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
    width: 21.375rem;
    height: 17.4375rem;
`;

const ProfilePic = styled.div`
    width: 8.125rem;
    height: 8.125rem;
    background-color: #eee;
    border-radius: 50%;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
`;

const InfoRowContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
`;

const InfoColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const DetailRow = styled.div`
    display: flex;
    gap: 0.25rem;
`;

const Label = styled.span`
    color: #347D6D;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.75rem;
    width: 2.8125rem;
`;

const Data = styled.span`
    color: #347D6D;
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.75rem;
`;