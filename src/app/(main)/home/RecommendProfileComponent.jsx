'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FONTS } from '../../../constants/font';

const RecommendProfileComponent = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_API_KEY;  // 환경 변수에서 API 키를 가져옴
                const response = await axios.get('https://openapi.gg.go.kr/AbdmAnimalProtect', {
                    params: {
                        Key: apiKey,
                        Type: 'json',
                        pIndex: 1,
                        pSize: 10
                    }
                });

                const dogProfiles = response.data.AbdmAnimalProtect[1]?.row.filter(profile => profile.SPECIES_NM.includes('개'));
                const randomProfile = dogProfiles[Math.floor(Math.random() * dogProfiles.length)];

                setProfileData({
                    region: extractCity(randomProfile.PROTECT_PLC) || "정보 없음",
                    shelterName: randomProfile.SHTER_NM || "정보 없음",
                    breed: randomProfile.SPECIES_NM.replace('[개]', '').trim() || "정보 없음", // Remove [개]
                    contact: randomProfile.SHTER_TELNO || "정보 없음",
                    gender: formatGender(randomProfile.SEX_NM),
                    neutered: formatNeutered(randomProfile.NEUT_YN),
                    characteristic: formatCharacteristics(randomProfile.SFETR_INFO) || "정보 없음",
                    weight: randomProfile.BDWGH_INFO || "정보 없음",
                    image: randomProfile.IMAGE_COURS || '/default-image.png'
                });
            } catch (error) {
                {/*console.error('Error fetching data:', error);*/}
            }
        };
        fetchData();
    }, []);

    const formatGender = (gender) => {
        if (gender === 'F') return '암컷';
        if (gender === 'M') return '수컷';
        if (gender === 'Q') return '중성화';
        return '정보 없음';
    };

    const formatNeutered = (neutered) => {
        if (neutered === 'Y') return '완료';
        if (neutered === 'N') return '미완료';
        if (neutered === 'U') return '미확인';
        return '정보 없음';
    };

    const extractCity = (address) => {
        const cityRegex = /([가-힣]+시)/;
        const match = address.match(cityRegex);
        return match ? match[0] : address;
    };

    const formatCharacteristics = (characteristics) => {
        const splitChars = characteristics.split(/[,.]/).slice(0, 2); // 쉼표(,)와 온점(.) 기준으로 나눔
        return splitChars.join(', '); // 쉼표로 다시 합침
    };

    return (
        <RecommendationWrapper>
            <RecommendTitleRow>
                <TodayRecommendMungz>오늘의 추천 멍즈 🐾</TodayRecommendMungz>
            </RecommendTitleRow>
            <RecommendProfileContainer>
                <ProfilePic src={profileData?.image || '/default-image.png'} />
                <InfoRowContainerWrapper>
                    <InfoColumnContainer>
                        <DetailRow>
                            <Label>지역</Label>
                            <Data>{profileData?.region || "정보 없음"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>품종</Label>
                            <Data>{profileData?.breed || "정보 없음"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>성별</Label>
                            <Data>{profileData?.gender || "정보 없음"}</Data>
                        </DetailRow>
                        <DetailRow>
                            <Label>체중</Label>
                            <Data>{profileData?.weight || "정보 없음"}</Data>
                        </DetailRow>
                    </InfoColumnContainer>

                    <InfoColumnContainer2>
                        <DetailRow2>
                            <Label2>보호소명</Label2>
                            <Data>{profileData?.shelterName || "정보 없음"}</Data>
                        </DetailRow2>
                        <DetailRow2>
                            <Label2>연락처</Label2>
                            <Data>{profileData?.contact || "정보 없음"}</Data>
                        </DetailRow2>
                        <DetailRow2>
                            <Label2>중성화</Label2>
                            <Data>{profileData?.neutered || "정보 없음"}</Data>
                        </DetailRow2>
                        <DetailRow2>
                            <Label2>특징</Label2>
                            <Data>{profileData?.characteristic || "정보 없음"}</Data>
                        </DetailRow2>
                    </InfoColumnContainer2>
                </InfoRowContainerWrapper>
            </RecommendProfileContainer>
        </RecommendationWrapper>
    );
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
    padding: 1rem; /* padding을 사용해 내부 여백 추가 */
    min-height: 18rem; /* 최소 높이 설정 */
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
    gap: 0rem;
`;

const InfoColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 8rem;
    flex-shrink: 0;
`;

const InfoColumnContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 11rem;
    flex-shrink: 0;
`;

const DetailRow = styled.div`
    display: flex;
    gap: 0rem;
`;

const DetailRow2 = styled.div`
    display: flex;
    gap: 0.2rem;
`;

const Label = styled.span`
    color: #347D6D;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.75rem;
    width: 2rem; /* 고정된 너비 */
    flex-shrink: 0;
    white-space: nowrap; /* 줄바꿈 방지 */
`;

const Label2 = styled.span`
    color: #347D6D;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.75rem;
    width: 3rem; /* 고정된 너비 */
    flex-shrink: 0;
    white-space: nowrap; /* 줄바꿈 방지 */
`;

const Data = styled.span`
    color: #347D6D;
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.75rem;
`;