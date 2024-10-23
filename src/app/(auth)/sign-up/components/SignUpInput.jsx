'use client';

import { LockOutlined, UserOutlined } from '@ant-design/icons'; // 아이콘 추가
import styled from 'styled-components';

import { COLORS, TEXT_COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/font';

const SignUpInput = ({
    name,
    value,
    type = 'text',
    placeholder = '',
    onChange,
    passwordVisible,
    togglePasswordVisibility,
    errorMessage,
}) => {
    return (
        <>
            <InputWrapper>
                <IconWrapper>{type === 'id' ? <UserOutlined /> : <LockOutlined />}</IconWrapper>
                <Divider /> {/* 세로 줄 추가 */}
                <StyledInput
                    type={(type === 'password' || type === 'passwordCheck') && !passwordVisible ? 'password' : 'text'}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {(type === 'password' || type === 'passwordCheck') && (
                    <ShowButton onClick={togglePasswordVisibility}>{passwordVisible ? 'Hide' : 'Show'}</ShowButton>
                )}
            </InputWrapper>
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>} {/* 유효성 검사 오류 메시지 표시 */}
        </>
    );
};

export default SignUpInput;

const InputWrapper = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    background-color: ${COLORS.softMint};
    border-radius: 0.5rem;
    padding: 0.75rem;
    position: relative;
`;

const StyledInput = styled.input`
    background-color: ${COLORS.softMint};
    border: none;
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.875rem;
    color: ${TEXT_COLORS.default};

    &::placeholder {
        color: ${TEXT_COLORS.placeholder};
    }

    &:focus {
        outline: none;
        border: none;
    }
`;

const IconWrapper = styled.div`
    padding-right: 0.5rem;
    color: ${COLORS.primary};
`;

const Divider = styled.div`
    width: 0.0625rem; /* 1px */
    height: 100%;
    background-color: ${COLORS.mint}; /* 옅은 세로줄 색상 */
    margin-right: 0.5rem; /* 세로 줄과 입력 필드 사이의 간격 */
`;

const ShowButton = styled.button`
    background: none;
    border: none;
    color: ${COLORS.primary};
    cursor: pointer;
    padding: 0 0.5rem;
    font-size: 0.875rem;
    position: absolute;
    right: 10px;
    text-decoration: underline; /* 밑줄 추가 */

    &:focus {
        outline: none;
    }
`;

const ErrorText = styled.div`
    width: 100%;
    color: #ff6464;
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: -0.01875rem;
`;
