import InfoBanner from '../../../components/common/InfoBanner';
import CustomHeader from '../../../components/layout/CustomHeader';

const HelpMungz = () => {
    return (
        <>
            <CustomHeader title="실종 반려견 근황" />
            <InfoBanner message="잃어버린 가족을 찾도록 도와주세요!" />
            <div>
                <h2>Current Lost Dog Information</h2>
                <p>Here are the details of currently lost dogs...</p>
            </div>
        </>
    );
};

export default HelpMungz;
