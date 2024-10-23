'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

import logoImg from '../../../assets/images/logo.png';
import symbolImg from '../../../assets/images/symbol.png';
import AuthInput from '../../../components/common/AuthInput';
import CustomButton from '../../../components/common/CustomButton';
import { BACKGROUND_COLORS, BUTTON_COLORS, TEXT_COLORS } from '../../../constants/colors';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../constants/space';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleIdChange = (e) => setId(e.target.value);
    const handlePwChange = (e) => setPassword(e.target.value);

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

    return (
        <Container>
            <LogoContainerColumn>
                <SymbolWrapper>
                    <Image src={symbolImg} alt="Symbol" layout="fill" objectFit="contain" />
                </SymbolWrapper>
                <LogoWrapper>
                    <Image src={logoImg} alt="Logo" layout="fill" objectFit="contain" />
                </LogoWrapper>

                <Letter>함께하는 따뜻한 동행 🐾</Letter>
            </LogoContainerColumn>

            <ContentContainer>
                <LoginInputContainer>
                    <AuthInput name="id" type="id" value={id} placeholder="아이디" onChange={handleIdChange} />

                    <AuthInput
                        name="password"
                        type="password"
                        value={password}
                        placeholder="비밀번호"
                        passwordVisible={passwordVisible}
                        togglePasswordVisibility={togglePasswordVisibility}
                        onChange={handlePwChange}
                    />

                    <AutoLoginContainerRow>
                        <AutoLoginRadioButton type="checkbox" />
                        <AutoLoginMessage>자동 로그인</AutoLoginMessage>
                    </AutoLoginContainerRow>
                </LoginInputContainer>

                <SignInUpButtonContainerColumn>
                    <CustomButton color={BUTTON_COLORS.primary} text="로그인" route="/onboarding" />
                    <CustomButton color={BUTTON_COLORS.secondary} text="회원가입" route="/sign-up" />
                </SignInUpButtonContainerColumn>
            </ContentContainer>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    background-color: ${BACKGROUND_COLORS.default};
`;

const LogoContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SymbolWrapper = styled.div`
    width: 9.375rem;
    height: 8.27344rem;
    position: relative;
`;

const LogoWrapper = styled.div`
    width: 11.25rem;
    height: 2.67938rem;
    position: relative;
`;

const Letter = styled.div`
    font-size: 1rem;
    color: ${TEXT_COLORS.default};
    font-family: Pretendard, sans-serif;
`;

const ContentContainer = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const LoginInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const AutoLoginContainerRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const AutoLoginRadioButton = styled.input`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    cursor: pointer;
`;

const AutoLoginMessage = styled.span`
    color: ${TEXT_COLORS.default};
`;

const SignInUpButtonContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
`;
