import InfoBanner from '../../../../components/common/InfoBanner';
import CustomHeader from '../../../../components/layout/CustomHeader';

const MbtiMatch = () => {
    return (
        <>
            <CustomHeader title="MBTI 매칭" showBackBtn={true} />
            <InfoBanner message="나와 멍BTI가 맞는 찰떡궁합 멍즈를 찾았어요! 🐶" />
            <div>
                <h2>홈</h2>
                <p>mbti 매칭</p>
            </div>
        </>
    );
};

export default MbtiMatch;
