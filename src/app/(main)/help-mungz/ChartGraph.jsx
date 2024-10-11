// 유기견 현황 임시 그래프 - 삭제 예정

'use client';

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

import { FONTS } from '../../../constants/font';

const data = [
    { date: '10/07', count: 28 },
    { date: '10/08', count: 32 },
    { date: '10/09', count: 25 },
    { date: '10/10', count: 30 },
    { date: '10/11', count: 35 },
    { date: '10/12', count: 29 },
    { date: '10/13', count: 31 },
];

const ChartGraph = () => (
    <Container>
        <Title>경기도 내 유기견 증감 현황</Title>
        <GraphContainer>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#333' }} />
                    <YAxis domain={[0, 40]} axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#333' }} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#68DDC1"
                        strokeWidth={3}
                        dot={{ stroke: '#68DDC1', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </GraphContainer>
    </Container>
);

export default ChartGraph;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 1rem;
    width: 100%;
`;

const Title = styled.h2`
    font-family: ${FONTS.PRETENDARD[700]};
    color: #1f5a6e;
    font-size: 1rem;
    margin-bottom: 20px;
    text-align: center;
`;

const GraphContainer = styled.div`
    width: 100%;
    max-width: 500px;
`;
