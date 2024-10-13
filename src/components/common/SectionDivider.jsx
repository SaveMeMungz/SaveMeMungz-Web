'use client';

import styled from 'styled-components';

import { BACKGROUND_COLORS } from '../../constants/colors';

const SectionDivider = () => {
    return <Divider />;
};

export default SectionDivider;

const Divider = styled.div`
    height: 0.5rem;
    background-color: ${BACKGROUND_COLORS.banner};
`;
