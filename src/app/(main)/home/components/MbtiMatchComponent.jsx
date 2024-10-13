'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchMbtiMatch } from '../../../../api/home/index';
import sparkleImg from '../../../../assets/images/sparkle.png';
import tempMungz1 from '../../../../assets/images/temp/tempMungz1.png';
import tempMungz2 from '../../../../assets/images/temp/tempMungz2.png';
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
            {/* 매칭 결과 mbti */}
            <ResultContainer>
                <SparkleImage src={sparkleImg} width={32} height={32} />
                <ResultWrapper>
                    <Result>
                        나의 MBTI &nbsp;<Highlighted> {matchData.userMbti}</Highlighted>&nbsp; 와 잘맞는
                    </Result>
                    <Result>
                        멍BTI는 &nbsp;<Highlighted>{matchData.matchMbti}</Highlighted>&nbsp; 입니다
                    </Result>
                </ResultWrapper>
                <SparkleImage src={sparkleImg} width={32} height={32} />
            </ResultContainer>
            <Description>
                {matchData.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </Description>
            {/* 견종 대표 사진 */}
            <ImageWrapper>
                <MungzImage src={tempMungz1} width={100} height={100} />
                <MungzImage src={tempMungz2} width={100} height={100} />
            </ImageWrapper>
            <RecommendationText>
                찰떡궁합 멍즈로&nbsp;
                {matchData.matchResult.map((mungz, index) => (
                    <span key={index}>
                        <MungzTypeText>{mungz.name}</MungzTypeText>
                        {index !== matchData.matchResult.length - 1 && <span>와&nbsp;</span>}
                    </span>
                ))}
                를 추천합니다 :)
            </RecommendationText>
        </MatchInfoContainer>
    );
};

export default MbtiMatchComponent;

const MatchInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${BACKGROUND_COLORS.lightgrey};
`;

const ResultContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${BACKGROUND_COLORS.tag};
    border-radius: 1rem;
    padding: 1rem;
    gap: 0.5rem;
`;

const SparkleImage = styled(Image)`
    width: 2rem;
    height: 2rem;
`;

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Result = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 1rem;
    color: ${TEXT_COLORS.title};
`;

const Highlighted = styled.span`
    font-family: ${FONTS.PRETENDARD[600]};
    font-size: 1rem;
    color: ${TEXT_COLORS.primary};
    text-decoration: underline;
`;

const Description = styled.div`
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 0.875rem;
    color: ${TEXT_COLORS.tag};
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    text-align: center;
    line-height: 1.25rem;
    width: 40rem;
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-bottom: 1rem;
`;

const MungzImage = styled(Image)`
    width: 6.25rem;
    height: 6.25rem;
`;

const RecommendationText = styled.p`
    display: flex;
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 0.875rem;
    color: ${TEXT_COLORS.title};
`;

const MungzTypeText = styled.span`
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 0.875rem;
    color: ${TEXT_COLORS.primary};
`;
