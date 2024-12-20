import { Link } from 'react-router-dom';
import { LogoIcon, ArrowIcon } from '../../Icons';
import { ScrollReveal } from '../../Helpers/SmoothScroll';

function Banner () {

    return (
        <ScrollReveal>
            <section className="banner section-wrapper topic-container-lg row align-items-center">
                <div className="col-md-6 d-flex justify-content-center">
                    <img className="w-sizer-lg no-shadow" src="/pfp-illustration.jpg" alt="Peiwen Huang illustration" />
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                    <div>
                        <h6 className='m-0'>Product Designer</h6>
                        <h1 className='mb-5'>Peiwen Huang</h1>
                        
                        
                        <h3 className='mb-5'>
                            <Link to="/Works/design" className='banner-link' id="banner-design-link">Design</Link> for People,<br/>
                            <Link to="/Works/research" className='banner-link' id="banner-research-link">Research</Link> for Opportunity,<br/>
                            <Link to="/Works/engineering" className='banner-link' id="banner-engineer-link">Engineer</Link> for Innovation.<br/>
                            {/* Uphold simplicity, above all. */}
                        </h3>

                        <button className="primary-btn h-6">
                            <Link to="/#works">Explore</Link>
                        </button>
                    </div>
                </div>

            </section>
        </ScrollReveal>
    );
};

export default Banner;