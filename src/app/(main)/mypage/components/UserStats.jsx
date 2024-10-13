'use clinet';

import styled from 'styled-components';

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/font';
import { PADDING_HORIZONTAL } from '../../../../constants/space';

const UserStats = () => {
    return (
        <UserStatsContainer>
            <UserStatsWrapper>
                <StatItem icon="🌿" label="랜덤 매칭 횟수" value={3} />
                <StatItem icon="🐶" label="멍즈와의 동행" value={3} />
                <StatItem icon="🐾" label="남은 매칭 기회" value={3} />
            </UserStatsWrapper>
        </UserStatsContainer>
    );
};

const StatItem = ({ icon, label, value }) => {
    return (
        <ItemContainer>
            <IconWrapper>{icon}</IconWrapper>
            <ItemLabel>{label}</ItemLabel>
            <ItemInfo>{value}회</ItemInfo>
        </ItemContainer>
    );
};

export default UserStats;

const UserStatsContainer = styled.div`
    /* ${PADDING_HORIZONTAL} */
    margin-top: 1.31rem;
    width: 100%;
`;

const UserStatsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ItemContainer = styled.div`
    background-color: ${BACKGROUND_COLORS.userStats};
    width: 6.75rem;
    height: 6.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.88rem;
    border-radius: 1rem;
    gap: 0.5rem;
`;

const IconWrapper = styled.span`
    font-size: 1rem;
`;

const ItemLabel = styled.span`
    font-family: ${FONTS.PRETENDARD[400]};
    font-size: 0.875rem;
    color: ${TEXT_COLORS.tag};
    word-break: keep-all;
`;

const ItemInfo = styled.span`
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1rem;
    color: ${TEXT_COLORS.primary};
`;
