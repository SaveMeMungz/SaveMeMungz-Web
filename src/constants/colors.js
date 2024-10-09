// color palette
export const COLORS = {
    white: '#FFF',
    primary: '#3CA690', // 메인 컬러
    secondary: '#1F5A6E', // 진한 청록
    accent: '#68DDC1', // 포인트 컬러 (밝은 민트)
    green: '#2A7363', // 녹색 text
    darkMint: '#6EA99D', // placeholder text
    softMint: '#D9F5F0', // 마이페이지 요소 배경색

    mint: '#F0FCFA',
    lightMint: '#EEF8F6', // input 배경색 (밝은 민트)
    paleMint: '#F5FAF9', // banner 배경색 (조금더 흰끼)

    lightGrey: '#F3F3F3', // 태그 배경색
    mediumGrey: '#DDD', // 기본 회색
    grey: '#A5A5A5', // borderline
    darkGrey: '#7B7B7B', // 태그 text

    red: '#FF6464',
    black: '#333',
};

// 배경 색
export const BACKGROUND_COLORS = {
    default: `${COLORS.mint}`,
    input: `${COLORS.lightMint}`,
    banner: `${COLORS.paleMint}`,
    tag: `${COLORS.lightGrey}`,
    divider: `${COLORS.mediumGrey}`,
    borderLine: `${COLORS.grey}`,
    userStats: `${COLORS.softMint}`,
};

// 버튼 색
export const BUTTON_COLORS = {
    primary: `${COLORS.primary}`,
    secondary: `${COLORS.secondary}`,
    accent: `${COLORS.accent}`,
};

// 글자 색
export const TEXT_COLORS = {
    title: `${COLORS.secondary}`,
    default: `${COLORS.green}`,
    primary: `${COLORS.primary}`,
    placeholder: `${COLORS.darkMint}`,
    tag: `${COLORS.darkGrey}`,
    grey: `${COLORS.grey}`,
    red: `${COLORS.red}`,
    black: `${COLORS.black}`,
};
