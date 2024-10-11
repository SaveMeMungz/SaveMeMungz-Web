'use client';

import Image from 'next/image';
import styled from 'styled-components';

import chatIcon from '../../../assets/icons/chat-icon.png';
import supportIcon from '../../../assets/icons/support-icon.png';
import vectorIcon from '../../../assets/icons/vector-icon.png';
import { BACKGROUND_COLORS, TEXT_COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/font';
import { PADDING_HORIZONTAL } from '../../../constants/space';

const SupportSection = () => {
    return (
        <SectionContainer>
            <SectionTitle>Support</SectionTitle>
            <SupportItem icon={supportIcon} text="문의하기" />
            <SupportItem icon={chatIcon} text="Q&A" />
        </SectionContainer>
    );
};

export default SupportSection;

const SupportItem = ({ icon, text }) => {
    const handleClick = () => {
        alert('준비중인 기능입니다!');
        // 나중에 라우팅 처리
    };

    return (
        <ItemContainer onClick={handleClick}>
            <IconWrapper>
                <ItemIcon src={icon} alt={text} width={38} height={38} />
                <ItemText>{text}</ItemText>
            </IconWrapper>
            <VectorIcon src={vectorIcon} alt=">" width={24} height={32.11} />
        </ItemContainer>
    );
};

const SectionContainer = styled.div`
    ${PADDING_HORIZONTAL}
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SectionTitle = styled.span`
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 1rem;
    color: ${TEXT_COLORS.title};
`;

const ItemContainer = styled.div`
    background-color: ${BACKGROUND_COLORS.default};
    display: flex;
    padding: 0.5rem;
    border-radius: 0.75rem;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const ItemIcon = styled(Image)`
    width: 2.375rem;
    height: 2.375rem;
`;

const ItemText = styled.div`
    font-family: ${FONTS.PRETENDARD[500]};
    font-size: 1rem;
    color: ${TEXT_COLORS.primary};
`;

const VectorIcon = styled(Image)`
    width: 1.5rem;
    height: 2.00675rem;
    margin-right: 0.5rem;
`;
