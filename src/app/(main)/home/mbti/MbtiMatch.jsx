'use client'

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
            <Title>
                나의 MBTI <Highlighted>{matchData.userMbti}</Highlighted> 와 잘맞는
                멍BTI는 <Highlighted>{matchData.matchedMbti}</Highlighted> 입니다
            </Title>
            <Description>{matchData.description}</Description>
            <DogsContainer>
                {matchData.matchedDogs.map((dog, index) => (
                    <DogProfile key={index}>
                        <DogImage src={dog.image} alt={dog.name} />
                    </DogProfile>
                ))}
            </DogsContainer>
            <RecommendationText>
                찰떡궁합 멍즈로 {matchData.matchedDogs.map(dog => dog.name).join('와 ')}를 추천합니다 :)
            </RecommendationText>
        </MatchInfoContainer>
    );
};

export default MbtiMatchComponent;

const MatchInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 19.0625rem;
    padding: 1rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1rem;
    background: ${BACKGROUND_COLORS.lightgrey};
    
`
const Title = styled.div`
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 1rem;
    color : ${TEXT_COLORS.secondary};
`

const Highlighted = styled.div`
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 1rem;
    color : ${TEXT_COLORS.primary};
`

const Description = styled.div`
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`;

const DogsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const DogProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DogImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 0.5rem;
`;

const RecommendationText = styled.p`
    font-size: 1rem;
    color: #347D6D;
    text-align: center;
`;