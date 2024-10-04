'use client'

import styled from 'styled-components';

import { FONTS } from '../../../constants/font';

const RecommendProfileComponent = () => {
    return (
        <RecommendationWrapper>
            <RecommendTitleRow>
                <TodayRecommendMungz>오늘의 추천 멍즈</TodayRecommendMungz>
                <PawsImg></PawsImg>
            </RecommendTitleRow>
            <RecommendProfileContainer>
                <ProfilePic></ProfilePic>
                <InfoRowContainer>
                    <InfoColumnContainer>
                        {/* 지역, 품종, 성별, 체중 */}
                    </InfoColumnContainer>
                    <InfoColumnContainer>
                        {/* 보호소명, 연락처, 중성화, 특징 */}
                    </InfoColumnContainer>
                </InfoRowContainer>
            </RecommendProfileContainer>
        </RecommendationWrapper>
    );
}

export default RecommendProfileComponent;

const RecommendationWrapper = styled.div`
    display: flex;
    width: 24.375rem;
    height: 22.1875rem;
    padding: 1rem 1.5rem 1.625rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    flex-shrink: 0;
`;

const RecommendTitleRow = styled.div`
    
`;

const TodayRecommendMungz = styled.div`
    color: #204B5A;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.125rem;
`;

const PawsImg = styled.div`
    
`;

const RecommendProfileContainer = styled.div`
    display: flex;
    width: 21.375rem;
    height: 17.4375rem;
    padding: 0rem 0.625rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
    border: 1px solid #A5A5A5;
    box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.50);
`;

const ProfilePic = styled.div`
    display: flex;
    width: 8.125rem;
    padding-top: 0.03125rem;
    justify-content: center;
    align-items: center;
`;

const InfoRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`;

const InfoColumnContainer = styled.div`
    
`; 
