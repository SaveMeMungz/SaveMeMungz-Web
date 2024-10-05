'use client';

import styled from 'styled-components';

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/font';

const InfoBanner = ({ message }) => {
    return (
        <BannerContainer>
            <Message>{message}</Message>
        </BannerContainer>
    );
};

export default InfoBanner;

const BannerContainer = styled.div`
    display: flex;
    height: 3rem;
    background-color: ${BACKGROUND_COLORS.banner};
    border-top: 1px solid ${BACKGROUND_COLORS.divider};
    align-items: center;
    justify-content: center;
`;

const Message = styled.div`
    color: ${TEXT_COLORS.primary};
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 0.875rem;
`;
