'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchMbtiMatch } from '../../../../api/home/index';
import { BACKGROUND_COLORS, TEXT_COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/font';

const MbtiMatchComponent = () => {
    const [matchData, setMatchData] = useState(null);

    useEffect(() => {
        const loadMatchData = async () => {
            try {
                const data = await fetchMbtiMatch();
                setMatchData(data);
            } catch (error) {
                //console.error('Error loading MBTI match:', error);
            }
        };
        loadMatchData();
    }, []);

    if (!matchData) return <div>Loading...</div>;

    return (
        <MatchInfoContainer>
            <TitleContainer>
                <Title>
                    나의 MBTI <Highlighted>{matchData.userMbti}</Highlighted> 와 잘맞는
                </Title>
                <Title>
                    멍BTI는 <Highlighted>{matchData.matchMbti}</Highlighted> 입니다
                </Title>
            </TitleContainer>

            <Description>{matchData.description}</Description>
            <MatchResultContainer>
                {matchData.matchResult.map((mungz, index) => (
                    <ImageWrapper key={index}>
                        <MungzImage src={mungz.image} alt={mungz.name} />
                    </ImageWrapper>
                ))}
            </MatchResultContainer>
            <RecommendationText>
                찰떡궁합 멍즈로 {matchData.matchResult.map((mungz) => mungz.name).join('와 ')}를 추천합니다 :)
            </RecommendationText>
        </MatchInfoContainer>
    );
};

export default MbtiMatchComponent;

const MatchInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 19.0625rem;
    padding: 1rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1rem;
    background: ${BACKGROUND_COLORS.lightgrey};
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 1rem;
    color: ${TEXT_COLORS.secondary};
`;

const Highlighted = styled.div`
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 1rem;
    color: ${TEXT_COLORS.primary};
`;

const Description = styled.div`
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`;

const MatchResultContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MungzImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 0.5rem;
`;

const RecommendationText = styled.p`
    font-size: 1rem;
    color: #347d6d;
    text-align: center;
`;
