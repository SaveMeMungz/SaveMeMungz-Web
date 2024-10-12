'use client';

import styled from 'styled-components';

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/font';

const CustomTag = ({ text }) => {
    return (
        <TagContainer>
            <TagText>#{text}</TagText>
        </TagContainer>
    );
};

export default CustomTag;

const TagContainer = styled.div`
    background-color: ${BACKGROUND_COLORS.tag};
    padding: 0.25rem 0.5rem;
`;

const TagText = styled.p`
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.875rem;
    color: ${TEXT_COLORS.tag};
`;
