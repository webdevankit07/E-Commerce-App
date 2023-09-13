import HeroSection from '../../components/heroSection/HeroSection';
import Services from '../../components/services/Services';
import Trusted from '../../components/trusted/Trusted';

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
