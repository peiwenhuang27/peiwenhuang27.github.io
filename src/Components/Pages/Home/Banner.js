import { Link } from 'react-router-dom';
import { LogoIcon, ArrowIcon } from '../../Icons';
import ProgressiveImage from 'react-progressive-bg-image';


function Banner () {
    const img_src = "https://live.staticflickr.com/65535/52516580065_a71e3f7f51_k.jpg";
    const img_ph = "https://live.staticflickr.com/65535/52516580065_e5de0629f5_o.jpg";


    return (
        <section className="banner">
            <div className='img-container' style={{ backgroundImage: `url(${img_src})` }}>
                <div className='container section-wrapper d-flex flex-column justify-content-around'>
                    <div className='mb-3 d-flex flex-column align-items-center'>
                        <LogoIcon />
                        <h1 className='text-center'>Peiwen Huang</h1>
                        <h2 className='text-center'>revolutionizing the human experience, the</h2>
                    </div>
                    
                    <div className='d-flex flex-column align-items-center'>                
                    <ul className='list-wrapper row justify-content-center'>
                        <li className="col-md-3 col-sm-6 m-3 h-6 d-flex justify-content-center" id="role-1">
                            <Link to="/Works/design" className="d-flex align-items-center">
                                <div className="circle" id="circle-1"></div>
                                <div className='h-6'>designer <span>»</span></div>
                            </Link>
                        </li>
                        <li className="col-md-3 col-sm-6 m-3 h-6 d-flex justify-content-center" id="role-2">
                            <Link to="/Works/research" className="d-flex align-items-center">
                                <div className="circle" id="circle-2"></div>
                                <div className='h-6'>researcher <span>»</span></div>
                            </Link>
                        </li>
                        <li className="col-md-3 col-sm-6 m-3 h-6 d-flex justify-content-center" id="role-3">
                            <Link to="/Works/engineering" className="d-flex align-items-center">
                                <div className="circle" id="circle-3"></div>
                                <div className='h-6'>engineer <span>»</span></div>
                            </Link>
                        </li>
                        <li className="col-md-3 col-sm-6 m-3 h-6 d-flex justify-content-center" id="role-4">
                            <Link to="/Art" className="d-flex align-items-center">
                                <div className="circle" id="circle-4"></div>
                                <div className='h-6'>artist <span>»</span></div>
                            </Link>
                        </li>
                        <li className="col-md-3 col-sm-6 m-3 h-6 d-flex justify-content-center" id="role-5">
                            <a href="https://medium.com/@pwh27design" target="_blank" className="d-flex align-items-center" rel="noreferrer noopener">
                                <div className="circle" id="circle-5"></div>
                                <div className='h-6'>writer <span>»</span></div>
                            </a>
                        </li>
                    </ul>
                    <h2>way.</h2>
                    </div>
                    <Link to="/#works" className="svg-wrapper">
                        <ArrowIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;