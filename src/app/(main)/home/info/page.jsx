import InfoBanner from '../../../../components/common/InfoBanner';
import CustomHeader from '../../../../components/layout/CustomHeader';

const InfoMatch = () => {
    return (
        <>
            <CustomHeader title="정보 기반 매칭" showBackBtn={true} />
            <InfoBanner message="동행자님의 입력 정보에 맞는 멍즈를 찾았어요! 🐶" />

            <div>
                <h2>홈</h2>
                <p>정보 기반 매칭</p>
            </div>
        </>
    );
};

export default InfoMatch;
