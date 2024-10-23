'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

import whitepawImg from '../../../assets/images/white-paw.png';
import CustomButton from '../../../components/common/CustomButton';
import { BACKGROUND_COLORS, BUTTON_COLORS, COLORS, TEXT_COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/font';
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../constants/space';
import SignUpInput from './components/SignUpInput';

const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({
        id: '',
        password: '',
        passwordCheck: '',
    });

    const handleIdChange = (e) => {
        setId(e.target.value);
        if (e.target.value === 'existingId') {
            // 이미 존재하는 아이디를 예시로 검사
            setErrors((prevErrors) => ({ ...prevErrors, id: '이미 존재하는 아이디입니다' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, id: '' }));
        }
    };

    const handlePwChange = (e) => {
        setPassword(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    };

    const handlePwCheckChange = (e) => {
        setPasswordCheck(e.target.value);
        if (e.target.value !== password) {
            setErrors((prevErrors) => ({ ...prevErrors, passwordCheck: '비밀번호가 일치하지 않습니다' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, passwordCheck: '' }));
        }
    };

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

    return (
        <Container>
            <WhitePawWrapper>
                <Image src={whitepawImg} alt="white_paw" width={120} height={107.2} />
            </WhitePawWrapper>

            <SignUpTitle>회원가입</SignUpTitle>

            <ContentContainer>
                <InputFieldContainer>
                    <SignUpInput
                        name="id"
                        type="id"
                        value={id}
                        placeholder="아이디"
                        onChange={handleIdChange}
                        errorMessage={errors.id} // 아이디 중복 검사 오류 메시지
                    />

                    <SignUpInput
                        name="password"
                        type="password"
                        value={password}
                        placeholder="비밀번호"
                        passwordVisible={passwordVisible}
                        togglePasswordVisibility={togglePasswordVisibility}
                        onChange={handlePwChange}
                        errorMessage={errors.password}
                    />

                    <SignUpInput
                        name="passwordCheck"
                        type="passwordCheck"
                        value={passwordCheck}
                        placeholder="비밀번호 확인"
                        passwordVisible={passwordVisible}
                        togglePasswordVisibility={togglePasswordVisibility}
                        onChange={handlePwCheckChange}
                        errorMessage={errors.passwordCheck}
                    />
                </InputFieldContainer>

                <SignUpButtonContainerColumn>
                    <CustomButton color={BUTTON_COLORS.secondary} text="회원가입 하기" route="/login" />
                </SignUpButtonContainerColumn>

                <BottomContainer>
                    <AlreadyMember>이미 회원이신가요?</AlreadyMember>
                    <Link href="/login" passHref>
                        <GoLogin>로그인 하기</GoLogin>
                    </Link>
                </BottomContainer>
            </ContentContainer>
        </Container>
    );
};

export default SignUp;

const Container = styled.div`
    background-color: ${BACKGROUND_COLORS.default};
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 2rem;
    gap: 2rem;
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

const InputFieldContainer = styled.div`
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

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    padding-top: 2rem;
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
    cursor: pointer;
`;
