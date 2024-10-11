'use client';

import styled from 'styled-components';

import CustomHeader from '../../../components/layout/CustomHeader';
import FilterBarComponent from './FilterBarComponent';
import MapView from './MapView';

const Course = () => {
    return (
        <Container>
            <CustomHeader title="보호소별 산책 코스 추천" />
            {/* 보호소 선택 필터 */}
            <FilterBarComponent />
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
