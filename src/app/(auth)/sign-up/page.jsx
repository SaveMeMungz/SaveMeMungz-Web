'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import whitepawImg from '../../../assets/images/white-paw.png';
import CustomButton from '../../../components/common/CustomButton';
import { BACKGROUND_COLORS, BUTTON_COLORS, COLORS, TEXT_COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/font';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../constants/space';
import SignUpInput from './components/SignUpInput';

const SignUp = () => {
    return (
        <Container>
            <WhitePawWrapper>
                <Image src={whitepawImg} alt="white_paw" width={120} height={107.2} />
            </WhitePawWrapper>

            <SignUpTitle>회원가입</SignUpTitle>

            <ContentContainer>
                <InputFieldContainer>
                    <SignUpInput />
                    <SignUpInput />
                    <SignUpInput />
                </InputFieldContainer>

                <SignUpButtonContainerColumn>
                    <CustomButton color={BUTTON_COLORS.secondary} text="회원가입 하기" route="/login" />
                </SignUpButtonContainerColumn>

                <BottomContainer>
                    <AlreadyMember>이미 회원이신가요?</AlreadyMember>
                    <GoLogin>로그인 하기</GoLogin>
                </BottomContainer>
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

const InputFieldContainer = styled.div``;

const SignUpButtonContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AlreadyMember = styled.div`
    color: ${COLORS.secondary};
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.875rem;
`;

const GoLogin = styled.div`
    color: ${COLORS.secondary};
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.875rem;
    text-decoration-line: underline;
`;
