import InfoBanner from '../../../components/common/InfoBanner';
import CustomHeader from '../../../components/layout/CustomHeader';

const Course = () => {
    return (
        <>
            <CustomHeader title="보호소별 산책 코스 추천" />
            <InfoBanner message="지역 필터 들어갈 곳" />
            <div>
                <h2>Recommended Walking Routes</h2>
                <p>Explore nearby walking routes for you and your dog...</p>
            </div>
        </>
    );
};

export default Course;
