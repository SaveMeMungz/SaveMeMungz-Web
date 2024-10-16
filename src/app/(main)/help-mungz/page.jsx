'use client';

import Image from 'next/image';
import styled from 'styled-components';

import temp from '../../../assets/images/temp/tempLost.png';
import InfoBanner from '../../../components/common/InfoBanner';
import CustomHeader from '../../../components/layout/CustomHeader';
import ChartGraph from './components/ChartGraph';

const HelpMungz = () => {
    return (
        <Container>
            <CustomHeader title="실종 반려견 근황" />
            <InfoBanner message="잃어버린 가족을 찾도록 도와주세요!" />
            {/* 임시 사진  & 그래프 */}
            <TempImg src={temp} width={390} height={395} />
            <ChartGraph />
        </Container>
    );
};

export default HelpMungz;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 2rem;
`;

const TempImg = styled(Image)`
    width: 100%;
    height: 24.6875rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
`;
