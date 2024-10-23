'use client';

import Image from 'next/image'; // next/image import
import React, { useState } from 'react';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';

import logoImg from '../../../assets/images/logo.png';
import symbolImg from '../../../assets/images/symbol.png'; // 경로는 이미지 확장자 포함
import CustomButton from '../../../components/common/CustomButton';
import CustomInput from '../../../components/common/CustomInput';
import { BUTTON_COLORS } from '../../../constants/colors';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleIdChange = (e) => setId(e.target.value);
    const handlePwChange = (e) => setPassword(e.target.value);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <LogoContainerColumn>
                <Image src={symbolImg} alt="Symbol" width={50} height={50} /> {/* Symbol */}
                <Image src={logoImg} alt="Logo" width={100} height={100} /> {/* Logo */}
                <Letter>함께하는 따뜻한 동행 🐾</Letter>
            </LogoContainerColumn>

            <LoginInputContainer>
                <InputWrapper>
                    <IconWrapper>
                        <FaUserAlt />
                    </IconWrapper>
                    <CustomInput name="id" value={id} placeholder="아이디 입력" onChange={handleIdChange} />
                </InputWrapper>

                <InputWrapper>
                    <IconWrapper>
                        <FaLock />
                    </IconWrapper>
                    <CustomInput
                        name="password"
                        type={passwordVisible ? 'text' : 'password'}
                        value={password}
                        placeholder="비밀번호"
                        onChange={handlePwChange}
                    />
                    <ShowButton onClick={togglePasswordVisibility}>{passwordVisible ? 'Hide' : 'Show'}</ShowButton>
                </InputWrapper>

                <AutoLoginContainerRow>
                    <AutoLoginRadioButton type="checkbox" /> {/* Checkbox 추가 */}
                    <AutoLoginMessage>자동 로그인</AutoLoginMessage>
                </AutoLoginContainerRow>
            </LoginInputContainer>

            <SignInUpButtonContainerColumn>
                <CustomButton color={BUTTON_COLORS.accent} text="정보 기반 매칭" route="/home/info" />
                <CustomButton color={BUTTON_COLORS.secondary} text="MBTI 매칭" route="/home/mbti" />
            </SignInUpButtonContainerColumn>
        </>
    );
};

export default Login;

const LogoContainerColumn = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const Letter = styled.div`
    font-size: 1.2rem;
    color: #555;
`;

const LoginInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background-color: #e0f2f1;
    border-radius: 0.5rem;
    padding: 0.75rem;
`;

const IconWrapper = styled.div`
    padding-right: 1rem;
    color: #80cbc4;
`;

const ShowButton = styled.button`
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: #80cbc4;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const AutoLoginContainerRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const AutoLoginRadioButton = styled.input``;

const AutoLoginMessage = styled.span`
    color: #546e7a;
`;

const SignInUpButtonContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
`;
