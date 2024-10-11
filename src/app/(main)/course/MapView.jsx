'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MapView = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const mapScript = document.createElement('script');
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
        document.head.appendChild(mapScript);

        const onLoadKakapMap = () => {
            window.kakao.maps.load(() => {
                const container = mapRef.current;
                const options = {
                    center: new window.kakao.maps.LatLng(37.2850839, 127.0786632),
                    level: 2,
                };
                const map = new window.kakao.maps.Map(container, options);
                const markerPosition = new window.kakao.maps.LatLng(37.2850839, 127.0786632); // 마커 찍을 위치
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });
                marker.setMap(map);
            });
        };

        mapScript.addEventListener('load', onLoadKakapMap);

        return () => mapScript.removeEventListener('load', onLoadKakapMap);
    }, []);

    return <StyledMapView ref={mapRef} />;
};

export default MapView;

const StyledMapView = styled.div`
    flex: 1;
`;
