'use client';

import styled from 'styled-components';

import InfoBanner from '../../../components/common/InfoBanner';
import CustomHeader from '../../../components/layout/CustomHeader';
import MapView from './MapView';

const Course = () => {
    return (
        <Container>
            <CustomHeader title="보호소별 산책 코스 추천" />
            <InfoBanner message="지역 필터 들어갈 곳" />
            {/* 지도 영역 */}
            <MapView />
        </Container>
    );
};

export default Course;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
