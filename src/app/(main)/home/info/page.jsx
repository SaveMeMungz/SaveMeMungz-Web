'use client';

import styled from 'styled-components';

import CustomButton from '../../../../components/common/CustomButton';
import InfoBanner from '../../../../components/common/InfoBanner';
import CustomHeader from '../../../../components/layout/CustomHeader';
import { BUTTON_COLORS } from '../../../../constants/colors';
/*import { FONTS } from '../../../../constants/font';*/
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from '../../../../constants/space';
import DogProfileComponent from '../components/DogProfile';

const InfoMatch = () => {
    return (
        <>
            <CustomHeader title="정보 기반 매칭" showBackBtn={true} />
            <InfoBanner message="동행자님의 입력 정보에 맞는 멍즈를 찾았어요! 🐶" />
            <TagBox>태그가 들어갈 자리</TagBox>
            <DogProfileComponent subtitle="나와 맞는 멍즈를 찾았어요! 🐾" />
            <ContentContainer>
                <ButtonWrapper>
                    <CustomButton color={BUTTON_COLORS.primary} text="동행 신청하기" route="/home/info" />
                    <CustomButton color={BUTTON_COLORS.secondary} text="보호소로 문의하기" route="/home/mbti" />
                </ButtonWrapper>
            </ContentContainer>
        </>
    );
};

export default InfoMatch;

const TagBox = styled.div``;
const ContentContainer = styled.div`
    ${PADDING_HORIZONTAL}
    ${PADDING_VERTICAL}
    display: flex;
    flex-direction: column;
    gap: 0.63rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
