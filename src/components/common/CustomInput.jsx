'use client';

import Image from 'next/image';
import styled from 'styled-components';

import arrowIcon from '../../assets/icons/down-arrow.png';
import { BACKGROUND_COLORS, TEXT_COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/font';
import { PADDING_HORIZONTAL } from '../../constants/space';

const CustomInput = ({ name, value, type = 'text', placeholder = '', options = [], onChange }) => {
    return (
        <InputContainer>
            {type === 'select' ? (
                <SelectWrapper>
                    <StyledSelect name={name} value={value} onChange={onChange}>
                        <option value="" disabled>
                            {placeholder}
                        </option>
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </StyledSelect>
                    <ArrowIcon>
                        <Image src={arrowIcon} alt="select arrow" width={30} height={30} />
                    </ArrowIcon>
                </SelectWrapper>
            ) : (
                <StyledInput type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
            )}
        </InputContainer>
    );
};

export default CustomInput;

const InputContainer = styled.div`
    ${PADDING_HORIZONTAL}
`;

const inputStyles = `
    width: 100%;
    padding: 0.88rem 1rem;
    background-color: ${BACKGROUND_COLORS.default};
    border-radius: 0.5rem;
    border: none;

    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 1rem;

    &::placeholder {
        color: ${TEXT_COLORS.placeholder};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${BACKGROUND_COLORS.accent};
    }
`;

const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const StyledSelect = styled.select`
    ${inputStyles}
    color: ${(props) => (props.value ? TEXT_COLORS.default : TEXT_COLORS.placeholder)};
    appearance: none;
    padding-right: 1.5rem;
`;

const StyledInput = styled.input`
    ${inputStyles}
    color: ${(props) => (props.value ? TEXT_COLORS.default : TEXT_COLORS.placeholder)};
`;

const ArrowIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.875rem;
    height: 1.875rem;
    pointer-events: none;
`;
