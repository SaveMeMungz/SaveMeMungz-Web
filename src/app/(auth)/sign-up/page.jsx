'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import whitepawImg from '../../../assets/images/white-paw.png';
import CustomButton from '../../../components/common/CustomButton';
import { BACKGROUND_COLORS, BUTTON_COLORS, TEXT_COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/font';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../constants/space';

const SignUp = () => {
    return (
        <Container>
            <WhitePawWrapper>
                <Image src={whitepawImg} alt="white_paw" width={120} height={107.2} />
            </WhitePawWrapper>

            <SignUpTitle>회원가입</SignUpTitle>

            <ContentContainer>
                <SignUpButtonContainerColumn>
                    <CustomButton color={BUTTON_COLORS.secondary} text="회원가입 하기" route="/login" />
                </SignUpButtonContainerColumn>

                <AlreadyMember>이미 회원이신가요?</AlreadyMember>
                <GoLogin>로그인 하기</GoLogin>
            </ContentContainer>
        </Container>
    );
};

export default SignUp;

const Container = styled.div`
    background-color: ${BACKGROUND_COLORS.default};
`;

const WhitePawWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const SignUpTitle = styled.div`
    color: ${TEXT_COLORS.title};
    text-align: center;
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.5rem;
`;

const ContentContainer = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SignUpButtonContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
`;

const AlreadyMember = styled.div`
    color: #1f5a6e;
    font-family: 'Noto Sans KR';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const GoLogin = styled.div`
    color: #1f5a6e;
    font-family: 'Noto Sans KR';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
`;
