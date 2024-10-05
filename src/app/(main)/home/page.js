'use client';

import { Button } from 'antd';
import styled from 'styled-components';

import { FONTS } from '../../../constants/font';
import RecommendProfileComponent from './RecommendProfileComponent';

const Home = () => {
    return (
        <Container>
            <InfoBanner>
                <Message>이번 주에는 10마리의 멍즈가 동행했습니다!</Message>
            </InfoBanner>
            <ContentContainer>
                <SubTitle>어떤 멍즈를 만나볼까요?</SubTitle>
                <ButtonWrapper>
                    <StyledButton btncolor="#68DDC1">정보 기반 매칭</StyledButton>
                    <StyledButton btncolor="#3CA690">Mbti 기반 매칭</StyledButton>
                </ButtonWrapper>
            </ContentContainer>

            <Divider />

            <RecommendProfileComponent/>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoBanner = styled.div`
    display: flex;
    height: 3rem;
    background-color: #f5faf9;
    border-top: 1px solid #ddd;
    align-items: center;
    justify-content: center;
`;

const Message = styled.div`
    color: #3ca690;
    font-size: 0.875rem;
    font-family: ${FONTS.PRETENDARD[500]};
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    gap: 0.63rem;
`;

const SubTitle = styled.span`
    color: #2a7363;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.125rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StyledButton = styled(Button)`
    background-color: ${(props) => props.btncolor};
    width: 100%;
    height: 3.75rem;
    border-radius: 0.5rem;
    color: #fff;
    font-size: 1rem;
    font-family: ${FONTS.PRETENDARD[700]};
    border: none;
`;

const Divider = styled.div`
    height: 0.5rem;
    background-color: #eef8f6;
`;
