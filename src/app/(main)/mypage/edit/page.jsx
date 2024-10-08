'use client';

import styled from 'styled-components';

import CustomHeader from '../../../../components/layout/CustomHeader';
import { BACKGROUND_COLORS } from '../../../../constants/colors';

const EditInfo = () => {
    return (
        <Container>
            <CustomHeader title="회원 정보 수정" showBackBtn={true} />
            <ContentContainer>
                <h2>정보 수정 페이지</h2>
            </ContentContainer>
        </Container>
    );
};

export default EditInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    border-top: 1px solid ${BACKGROUND_COLORS.divider};
`;
