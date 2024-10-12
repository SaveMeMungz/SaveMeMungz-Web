'use client'

import axios from 'axios'; // axios import
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/font';

const MbtiMatchApi = () => {
    const [matchData, setMatchData] = useState(null);

    useEffect(() => {
        // API에서 데이터를 가져오는 함수
        const fetchData = async () => {
            try {
                // 실제 API 호출
                const response = await axios.get('/api/mbti-match');
                setMatchData(response.data); // 실제 API 데이터를 설정
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Error fetching data, using mock data:', error);

                // API 호출 실패 시 mock data 사용
                const mockData = {
                    userMbti: 'INFJ',
                    matchedMbti: 'ENFP',
                    matchedDogs: [
                        { name: '비숑 프리제', image: 'https://via.placeholder.com/100' },
                        { name: '웰시 코기', image: 'https://via.placeholder.com/100' }
                    ],
                    description: '직관적이고 이타적인 당신과는 창의적이고 열정적인 멍즈가 딱이에요!'
                };

                setMatchData(mockData); // mock data로 상태 설정
            }
        };

        fetchData(); // useEffect 실행 시 API 데이터 가져오기
    }, []);

    if (!matchData) return <div>Loading...</div>; // 데이터를 가져오는 동안 로딩 표시



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

export default MbtiMatchApi;

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