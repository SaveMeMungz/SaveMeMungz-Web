'use client';

import styled from 'styled-components';

import { TEXT_COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/font';

const GreetingMessage = ({ showTitle = true }) => {
    return (
        <Container>
            {showTitle && (
                <Title>
                    처음 오셨군요!
                    <br />
                    어떤 멍즈를 만나고 싶나요?
                </Title>
            )}
            <Description>
                동행자님과 잘 맞는 강아지 유형을 알려주세요!
                <br />
                입력하신 정보를 바탕으로 매칭해드려요 🐶
            </Description>
        </Container>
    );
};

export default GreetingMessage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    gap: 1rem;
`;

const Title = styled.p`
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.25rem;
    color: ${TEXT_COLORS.default};
    line-height: 1.625rem;
`;

const Description = styled.p`
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 0.875rem;
    color: ${TEXT_COLORS.primary};
    line-height: 1.25rem;
`;
