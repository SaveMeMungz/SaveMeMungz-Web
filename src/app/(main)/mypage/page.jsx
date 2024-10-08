'use client';

import Image from 'next/image';
import styled from 'styled-components';

import defaultImg from '../../../assets/images/default-profile.png';
import CustomButton from '../../../components/common/CustomButton';
import CustomHeader from '../../../components/layout/CustomHeader';
import { BACKGROUND_COLORS, BUTTON_COLORS, TEXT_COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/font';
import { PADDING_HORIZONTAL } from '../../../constants/space';
import SupportSection from './SupportSection';
import UserStats from './UserStats';

const MyPage = () => {
    return (
        <Container>
            <CustomHeader title="마이페이지" />
            {/* 프로필 컨텐츠 */}
            <ProfileContainer>
                <ProfileImage src={defaultImg} width={120} height={120} />
                <NickName>멍즈멍즈</NickName>
                <UserStats />
            </ProfileContainer>
            {/* 버튼 영역 */}
            <ButtonWrapper>
                <CustomButton color={BUTTON_COLORS.accent} text="나의 정보 수정하기" route="/mypage/edit" />
                <CustomButton color={BUTTON_COLORS.primary} text="로그아웃" />
            </ButtonWrapper>
            {/* 고객지원 */}
            <SupportSection />
        </Container>
    );
};

export default MyPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileContainer = styled.div`
    ${PADDING_HORIZONTAL}
    border-top: 1px solid ${BACKGROUND_COLORS.divider};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileImage = styled(Image)`
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 100px;
    margin-top: 1.87rem;
`;

const NickName = styled.span`
    font-family: ${FONTS.PRETENDARD[700]};
    font-size: 1.125rem;
    color: ${TEXT_COLORS.title};
    margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
    ${PADDING_HORIZONTAL}
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;
