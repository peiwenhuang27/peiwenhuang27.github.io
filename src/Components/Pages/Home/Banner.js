import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowIcon } from '../../Icons';
import { ScrollReveal } from '../../Helpers/SmoothScroll';

// TODO: relative scroll
function IntroImgAnim ({ children }) {
    const { scrollY } = useScroll();
    const scrollYDistance = [0, 170, 300, 440, 500];
    const scaleAnim = useTransform(scrollY, [0, 500], [1, 0.7]);
    const xPosAnim = useTransform(scrollY, scrollYDistance, ["0", "-5%", "20%", "25%", "30%"]);
    const yPosAnim = useTransform(scrollY, scrollYDistance, [0, -5, 30, 45, 50]);
    const opacAnim = useTransform(scrollY, scrollYDistance, [1, 0.4, 0.6, 0.9, 1]);

    const sceneStyle = {
        height: "80vh"
    };

    return (
        <div style={sceneStyle}>
            <motion.div
            style={{
            // position: "absolute",
            scale: scaleAnim, 
            x: xPosAnim,
            y: yPosAnim,
            opacity: opacAnim}}
            >
                {children}
            </motion.div>
        </div>
    )
}
// scrollreveal after illustration animation
function IntroTextAnim ({ children}) {
    const { scrollY } = useScroll();
    const opacAnim = useTransform(scrollY, [0, 400, 450, 600], [0, 0, 0.8, 1]);

    function GroupButton () {
        return (
            <div className='banner-group-button d-flex flex-column'>
                <h5>
                    <Link to="/Works/uiux" className='banner-link' id="banner-design-link">
                        Design for People
                    </Link>
                </h5>
                <h5>
                    <Link to="/Works/research" className='banner-link' id="banner-research-link">
                        Research for Opportunity
                    </Link>
                </h5>
                <h5>
                    <Link to="/Works/engineering" className='banner-link banner-link-last' id="banner-engineer-link">
                        Engineer for Innovation
                    </Link>
                </h5>
            </div>
        );
    }

    return (
        <motion.div
        className="d-flex align-items-center"
        style={{
        position: "absolute",
        marginTop: "100px",
        height: "70vh",
        opacity: opacAnim}}
        >
            {children}
        </motion.div>
    );
}

function Intro() {
    const isMobile = window.innerWidth < 768;

    const text = 
    <div>
        <h1 className='color-bg mb-0'>Peiwen Huang</h1>
        <h3 className='mb-3'>Product & UX Designer</h3>
        <p>Hey there / 您好 / こんにちは！<br/>
            I'm a designer with backgrounds in engineering and business:<br/><br/>
            💭 Solving complex problems with my philosophy of simplicity<br/>
            🤝 Led and collaborated with cross-functional teams to tackle business challenges<br/>
            🚀 Delivering innovative, profitable solutions backed by user research<br/>
            💖 Thriving in the world of uncertainty with mindfulness and grace
        </p>
    </div>
    ;
    const illustration =
    <div className="w-100 d-flex justify-content-center">
        <img style={{maxWidth: "60%"}}
        className="no-shadow" src="/pfp-illustration.jpg" alt="Peiwen Huang illustration" />
    </div>
    ;

    if (isMobile) {
        return (
            <div>
                <ScrollReveal>{illustration}</ScrollReveal>
                <ScrollReveal>{text}</ScrollReveal>
            </div>
        );
    }
    else {
        return (
            <div>
                <IntroTextAnim>{text}</IntroTextAnim>
                <IntroImgAnim>{illustration}</IntroImgAnim>
            </div>
        );
    }
}

function Banner () {
    return (
            <section className="banner section-wrapper topic-container-lg">
                <ScrollReveal>
                    <div>
                        <h3>Where design, strategy, and engineering unite</h3>
                        <h1 className='mb-5'>Peiwen crafts <span className='color-bg'>seamless, insight-driven</span> experiences that empower users.</h1>
                    
                        <button className="primary-btn h-6">
                            <Link to="/Works/uiux">Explore</Link>
                        </button>
                    </div>
                </ScrollReveal>

                <Intro />

            </section>
    );
};

export default Banner;