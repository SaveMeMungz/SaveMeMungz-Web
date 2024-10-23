'use client';

import { FaLock, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { COLORS, TEXT_COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/font';

const CustomInput = ({
    name,
    value,
    type = 'text',
    placeholder = '',
    onChange,
    passwordVisible,
    togglePasswordVisibility,
}) => {
    return (
        <InputWrapper>
            <IconWrapper>{type === 'id' ? <FaUserAlt /> : <FaLock />}</IconWrapper>
            <StyledInput
                type={type === 'password' && !passwordVisible ? 'password' : 'text'}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {type === 'password' && (
                <ShowButton onClick={togglePasswordVisibility}>{passwordVisible ? 'Hide' : 'Show'}</ShowButton>
            )}
        </InputWrapper>
    );
};

export default CustomInput;

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
    flex-grow: 1;
    background-color: ${COLORS.softMint};
    border: none;
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 1rem;
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

const ShowButton = styled.button`
    background: none;
    border: none;
    color: ${COLORS.primary};
    cursor: pointer;
    padding: 0 0.5rem;
    font-size: 0.875rem;
    position: absolute;
    right: 10px;

    &:focus {
        outline: none;
    }
`;
