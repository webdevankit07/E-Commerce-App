import FeatureProducts from '../components/FeatureProducts';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const Home = () => {
    return (
        <>
            <HeroSection name={'Ankit Store'} />
            <FeatureProducts />
            <Services />
            <Trusted />
        </>
    );
};

export default Home;
