import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const Home = () => {
    return (
        <>
            <HeroSection name={'Ankit Store'} />
            <Services />
            <Trusted />
        </>
    );
};

export default Home;
