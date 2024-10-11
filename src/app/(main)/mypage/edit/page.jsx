'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styled from 'styled-components';

import CustomButton from '../../../../components/common/CustomButton';
import CustomInput from '../../../../components/common/CustomInput';
import GreetingMessage from '../../../../components/common/GreetingMessage';
import CustomHeader from '../../../../components/layout/CustomHeader';
import { BACKGROUND_COLORS, BUTTON_COLORS } from '../../../../constants/colors';
import { PADDING_HORIZONTAL } from '../../../../constants/space';

const EditInfo = () => {
    const router = useRouter();

    // user info에서 가져올 값
    const [formData, setFormData] = useState({
        nickName: '',
        region: '',
        weight: '',
        gender: '',
        isNeutered: '',
        mbti: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // 정보 저장 로직
        router.back();
    };

    return (
        <Container>
            <CustomHeader title="회원 정보 수정" showBackBtn={true} />
            <ContentContainer>
                <GreetingWrapper>
                    <GreetingMessage showTitle={false} />
                </GreetingWrapper>
                {/* 정보 입력 */}
                <InputWrapper>
                    <CustomInput
                        type="text"
                        name="nickName"
                        value={formData.nickName}
                        placeholder="사용하실 닉네임을 입력해주세요"
                        onChange={handleChange}
                    />
                    <CustomInput
                        type="select"
                        name="region"
                        value={formData.region}
                        placeholder="지역이 어디신가요?"
                        onChange={handleChange}
                        options={[
                            { value: 'val1', label: 'val1' },
                            { value: 'val2', label: 'val2' },
                        ]}
                    />
                    <CustomInput
                        type="select"
                        name="weight"
                        value={formData.weight}
                        placeholder="체중을 선택해주세요"
                        onChange={handleChange}
                        options={[
                            { value: 'val1', label: 'val1' },
                            { value: 'val2', label: 'val2' },
                        ]}
                    />
                    <CustomInput
                        type="select"
                        name="gender"
                        value={formData.gender}
                        placeholder="성별을 선택해주세요"
                        onChange={handleChange}
                        options={[
                            { value: 'val1', label: 'val1' },
                            { value: 'val2', label: 'val2' },
                        ]}
                    />
                    <CustomInput
                        type="select"
                        name="isNeutered"
                        value={formData.isNeutered}
                        placeholder="중성화 여부를 선택해주세요"
                        onChange={handleChange}
                        options={[
                            { value: 'val1', label: 'val1' },
                            { value: 'val2', label: 'val2' },
                        ]}
                    />
                    <CustomInput
                        type="select"
                        name="mbti"
                        value={formData.mbti}
                        placeholder="나의 MBTI를 선택해주세요"
                        onChange={handleChange}
                        options={[
                            { value: 'val1', label: 'val1' },
                            { value: 'val2', label: 'val2' },
                        ]}
                    />
                </InputWrapper>

                <CustomButton onClick={handleSave} color={BUTTON_COLORS.primary} text="저장하기" />
            </ContentContainer>
        </Container>
    );
};

export default EditInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const GreetingWrapper = styled.div`
    padding-top: 0.88rem;
    padding-bottom: 0.88rem;
`;

const ContentContainer = styled.div`
    ${PADDING_HORIZONTAL}
    border-top: 1px solid ${BACKGROUND_COLORS.divider};
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3.5rem;
`;
