'use client';

import styled from 'styled-components';

import CustomHeader from '../../../components/layout/CustomHeader';
import FilterBarComponent from './FilterBarComponent';
import MapView from './MapView';
import ShelterCardComponent from './ShelterCardComponent';

const Course = () => {
    return (
        <Container>
            <CustomHeader title="보호소별 산책 코스 추천" />
            {/* 보호소 선택 필터 */}
            <FilterBarComponent />
            {/* 지도 영역 */}
            <MapContainer>
                <MapView />
            </MapContainer>
            {/* 보호소 카드 컴포넌트 */}
            <CardWrapper>
                <ShelterCardComponent />
            </CardWrapper>
        </Container>
    );
};

export default Course;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--bottom-tab-height));
`;

const MapContainer = styled.div`
    flex: 1;
    position: relative;
`;

const CardWrapper = styled.div`
    position: absolute;
    bottom: calc(var(--bottom-tab-height) + 1.25rem);
    left: 0;
    right: 0;
    z-index: 10;
`;
