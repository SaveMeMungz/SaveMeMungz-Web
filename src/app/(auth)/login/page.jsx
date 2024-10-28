'use client';

import { Checkbox } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

import questionImg from '../../../assets/icons/question-icon.png';
import googleLogin from '../../../assets/images/google.png';
import kakaoLogin from '../../../assets/images/kakao.png';
import logoImg from '../../../assets/images/logo.png';
import symbolImg from '../../../assets/images/symbol.png';
import CustomButton from '../../../components/common/CustomButton';
import { BACKGROUND_COLORS, BUTTON_COLORS, COLORS, TEXT_COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/font';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../constants/space';
import LoginInput from './components/LoginInput';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [autoLogin, setAutoLogin] = useState(false);

    const handleIdChange = (e) => setId(e.target.value);
    const handlePwChange = (e) => setPassword(e.target.value);
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    const handleAutoLoginChange = (e) => setAutoLogin(e.target.checked);

    return (
        <Container>
            <QuestionWrapper>
                <Image src={questionImg} alt="question" width={60} height={60} />
            </QuestionWrapper>

            <LogoContainerColumn>
                <SymbolWrapper>
                    <Image src={symbolImg} alt="Symbol" fill style={{ objectFit: 'contain' }} />
                </SymbolWrapper>
                <LogoWrapper>
                    <Image src={logoImg} alt="Logo" fill style={{ objectFit: 'contain' }} />
                </LogoWrapper>

                <Letter>함께하는 따뜻한 동행 🐾</Letter>
            </LogoContainerColumn>

            <ContentContainer>
                <LoginInputContainer>
                    <LoginInput name="id" type="id" value={id} placeholder="아이디" onChange={handleIdChange} />

                    <LoginInput
                        name="password"
                        type="password"
                        value={password}
                        placeholder="비밀번호"
                        passwordVisible={passwordVisible}
                        togglePasswordVisibility={togglePasswordVisibility}
                        onChange={handlePwChange}
                    />

                    <AutoLoginContainerRow>
                        <StyledCheckbox checked={autoLogin} onChange={handleAutoLoginChange}>
                            자동 로그인
                        </StyledCheckbox>
                    </AutoLoginContainerRow>
                </LoginInputContainer>

                <SignInUpButtonContainerColumn>
                    <CustomButton color={BUTTON_COLORS.primary} text="로그인" route="/onboarding" />
                    <CustomButton color={BUTTON_COLORS.secondary} text="회원가입" route="/sign-up" />
                </SignInUpButtonContainerColumn>

                <FindIdPw>아이디 • 비밀번호 찾기</FindIdPw>

                <EasyLoginLineContainer>
                    <EasyLoginLine />
                    <EasyLogin>간편 로그인</EasyLogin>
                    <EasyLoginLine />
                </EasyLoginLineContainer>

                <SocialLoginIcons>
                    <LoginIconWrapper>
                        <Image src={kakaoLogin} alt="Kakao Login" width={50} height={50} />
                    </LoginIconWrapper>
                    <LoginIconWrapper>
                        <Image src={googleLogin} alt="Google Login" width={50} height={50} />
                    </LoginIconWrapper>
                </SocialLoginIcons>
            </ContentContainer>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    background-color: ${COLORS.white};
    min-height: 100vh; /* 화면 전체 높이를 채움 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const LogoContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
`;

const QuestionWrapper = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
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
    font-family: ${FONTS.PRETENDARD[400]};
    margin-bottom: 1rem;
`;

const ContentContainer = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const LoginInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const AutoLoginContainerRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const StyledCheckbox = styled(Checkbox)`
    margin-left: 0.18rem;
    .ant-checkbox-inner {
        width: 1.15rem; /* 체크박스 너비 */
        height: 1.15rem; /* 체크박스 높이 */
        border-radius: 50%; /* 원형 체크박스 */
        border-color: ${COLORS.primary}; /* 체크박스 테두리 색상 */
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative; /* 체크 표시를 절대 위치로 배치하기 위해 설정 */
    }
    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${COLORS.primary}; /* 체크된 상태에서 배경색 */
        border-color: ${COLORS.primary}; /* 체크된 상태에서 테두리 색상 */
    }
    .ant-checkbox-checked .ant-checkbox-inner::before {
        content: '✓'; /* 체크 표시 모양 */
        color: ${COLORS.white}; /* 체크 표시 색상 */
        font-size: 0.75rem; /* 체크 표시 크기 */
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%); /* 정확한 중앙 위치 */
    }
    .ant-checkbox-inner::after {
        display: none; /* 기본 체크 표시 제거 */
    }
    span {
        font-family: ${FONTS.PRETENDARD[400]};
        font-size: 0.875rem;
        color: ${TEXT_COLORS.black};
    }
`;

const SignInUpButtonContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
`;

const FindIdPw = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.secondary};
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
`;

const EasyLoginLineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
`;

const EasyLoginLine = styled.div`
    width: 8.125rem;
    height: 0.0625rem;
    background: ${BACKGROUND_COLORS.divider};
`;

const EasyLogin = styled.div`
    color: ${COLORS.darkGrey};
    text-align: center;
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 0.875rem;
`;

const SocialLoginIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    gap: 0.5rem;
`;

const LoginIconWrapper = styled.div`
    width: 3.125rem;
    height: 3.125rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
