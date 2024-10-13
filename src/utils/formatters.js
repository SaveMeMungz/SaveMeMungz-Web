export const extractCity = (address) => {
    const cityRegex = /([가-힣]+(?:시|군|읍))/;
    const match = address?.match(cityRegex);
    return match ? match[0] : address || '정보 없음';
};

export const formatGender = (gender) => {
    const genderMap = {
        'F': '암컷',
        'M': '수컷',
        'Q': '중성화',
    };
    return genderMap[gender] || '정보 없음';
};

export const formatNeutered = (neutered) => {
    const neuteredMap = {
        'Y': '완료',
        'N': '미완료',
        'U': '미확인',
    };
    return neuteredMap[neutered] || '정보 없음';
};

export const formatCharacteristics = (characteristics) => {
    if (!characteristics) return '정보 없음';
    const splitChars = characteristics.split(/[,.]/).slice(0, 2);
    return splitChars.join(', ') || '정보 없음';
};
