'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/font';

const CustomButton = ({ color, route, text, onClick }) => {
    const router = useRouter();
    const handleClick = () => {
        onClick ? onClick() : route && router.push(route);
    };

    return (
        <StyledButton btncolor={color} onClick={handleClick}>
            {text}
        </StyledButton>
    );
};

export default CustomButton;

const StyledButton = styled(Button)`
    background-color: ${(props) => props.btncolor};
    width: 100%;
    height: 3.75rem;
    border-radius: 0.5rem;
    color: ${COLORS.white};
    font-size: 1rem;
    font-family: ${FONTS.PRETENDARD[700]};
    border: none;

    &:hover,
    &:focus {
        background-color: ${(props) => props.btncolor} !important;
        color: ${COLORS.white} !important;
        opacity: 0.7;
    }
`;
