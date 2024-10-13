'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import GlobalStyle from '../styles/globalStyles';

export function Providers({ children }) {
    // ServerStyleSheet을 한 번만 생성 (성능 최적화)
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    // 서버에서 생성된 스타일을 HTML에 삽입
    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    // 클라이언트 환경에서는 추가 처리 없이 children 반환
    if (typeof window !== 'undefined')
        return (
            <>
                <GlobalStyle />
                {children}
            </>
        );

    // 서버 환경에서는 StyleSheetManager로 children을 감싸 스타일 관리
    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <GlobalStyle />
            {children}
        </StyleSheetManager>
    );
}
