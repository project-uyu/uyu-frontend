import Border from '../components/common/Border';
import CustomTitle from '../components/LandingPage/Link';
import LoginLink from '../components/LandingPage/Login';

const LandingPage = () => {
    return (
        // div 안에 있는 컴포넌트들을 가로로 정렬하기 위해 flexbox를 사용합니다.
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <CustomTitle title='테스트용' url='www.google.com' margin='0 10px' />
            <CustomTitle title='테스트용' url='www.google.com' margin='0 10px' />
            <CustomTitle title='테스트용' url='www.google.com' margin='0 10px' />
            <Border height='45px' margin='0 20px' />
            <LoginLink />
        </div>
    );
};

export default LandingPage;
