'use client';

import { Select } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../../../constants/colors';
import { FONTS } from '../../../../constants/font';

const { Option } = Select;

const FilterBarComponent = () => {
    /* eslint-disable */
    const [selectedRegion, setSelectedRegion] = useState();
    const [selectedShelter, setSelectedShelter] = useState();

    const regionList = [
        { id: 1, name: '지역1' },
        { id: 2, name: '지역2' },
    ];

    const shelterList = [
        { id: 1, name: '보호소1' },
        { id: 2, name: '보호소2' },
    ];

    const handleRegionChange = () => {
        // 지역 선택 시 로직
    };

    const handleShelterChange = () => {
        // 보호소 선택 로직
    };

    return (
        <FilterContainer>
            <RegionSelector placeholder="지역" onChange={handleRegionChange} value={selectedRegion}>
                {regionList.map((region) => (
                    <Option key={region.id} value={region.name}>
                        {region.name}
                    </Option>
                ))}
            </RegionSelector>
            <ShelterSelector
                placeholder="보호소"
                onChange={handleShelterChange}
                value={selectedShelter}
                // disabled={!selectedRegion}
            >
                {shelterList.map((shelter) => (
                    <Option key={shelter.id} value={shelter.name}>
                        {shelter.name}
                    </Option>
                ))}
            </ShelterSelector>
        </FilterContainer>
    );
};

export default FilterBarComponent;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    background-color: ${BACKGROUND_COLORS.default};
    border-top: 1px solid ${BACKGROUND_COLORS.divider};
    gap: 0.62rem;
`;

const SelectorStyles = `
    // 전체 selector
    .ant-select-selector {
        background-color: ${BACKGROUND_COLORS.default} !important;
        border-color: ${TEXT_COLORS.default} !important;
        border-radius: 1rem;
    }
    // 선택된 옵션
    .ant-select-selection-item {
        color: ${TEXT_COLORS.default};
        font-family: ${FONTS.PRETENDARD[400]};
        font-size: 0.875rem;
        padding-left: 0.4rem !important;
    }
    // placeholder
    .ant-select-selection-placeholder {
        color: ${TEXT_COLORS.grey};
        font-family: ${FONTS.PRETENDARD[500]};
        font-size: 0.875rem;
        padding-left: 0.4rem !important;
        justify-content: flex-start !important;
    }
    // 오른쪽 화살표 아이콘
    .ant-select-arrow {
        color: ${TEXT_COLORS.default} !important;
        font-size: 1rem;
        padding-right: 0.4rem;
    }
    // selector focus될 떄
    &:hover .ant-select-selector {
        border-color: ${TEXT_COLORS.primary} !important;
    }
`;

const RegionSelector = styled(Select)`
    ${SelectorStyles}
    width: 9.5rem;
    height: 2.5rem;
`;

const ShelterSelector = styled(Select)`
    ${SelectorStyles}
    width: 10.9375rem !important;
    height: 2.5rem;
`;
