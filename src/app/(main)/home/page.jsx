'use client';

import styled from 'styled-components';

import DogProfileApi from '../../../api/DogProfileApi/DogProfileApi';
import CustomButton from '../../../components/common/CustomButton';
import InfoBanner from '../../../components/common/InfoBanner';
import SectionDivider from '../../../components/common/SectionDivider';
import CustomHeader from '../../../components/layout/CustomHeader';
import { BUTTON_COLORS, TEXT_COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/font';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../constants/space';

const Home = () => {
    return (
        <Container>
            <CustomHeader />
            <InfoBanner message="이번주에는 10마리의 멍즈가 동행했어요!" />
            <ContentContainer>
                <SubTitle>어떤 멍즈를 만나볼까요?</SubTitle>
                <ButtonWrapper>
                    <CustomButton color={BUTTON_COLORS.accent} text="정보 기반 매칭" route="/home/info" />
                    <CustomButton color={BUTTON_COLORS.primary} text="MBTI 매칭" route="/home/mbti" />
                </ButtonWrapper>
            </ContentContainer>
            <SectionDivider />
            <DogProfileApi />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    flex-direction: column;
    gap: 0.63rem;
`;

const SubTitle = styled.span`
    color: ${TEXT_COLORS.default};
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.125rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

