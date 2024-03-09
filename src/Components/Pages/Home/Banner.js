import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../Icons';

function Banner () {

    return (
        <section className="banner">
            <div className='topic-container'>
                <div className="title-wrapper">
                    <h1>Hey! Peiwen Huang here,</h1>
                    <h2>revolutionizing the human experience, the</h2>
                </div>
                
                <div className="list-wrapper">
                    <div>
                        <ul>
                            <li className="h-3" id="role-1">
                                <Link to="/" className="d-flex align-items-center">
                                    <div className="circle" id="circle-1"></div>
                                    designer's
                                </Link>
                            </li>
                            <li className="h-3" id="role-2">
                                <Link to="/" className="d-flex align-items-center">
                                    <div className="circle" id="circle-2"></div>
                                    researcher's
                                </Link>
                            </li>
                            <li className="h-3" id="role-3">
                                <Link to="/" className="d-flex align-items-center">
                                    <div className="circle" id="circle-3"></div>
                                    engineer's
                                </Link>
                            </li>
                            <li className="h-3" id="role-4">
                                <Link to="/" className="d-flex align-items-center">
                                    <div className="circle" id="circle-4"></div>
                                    artist's
                                </Link>
                            </li>
                            <li className="h-3" id="role-5">
                                <Link to="/" className="d-flex align-items-center">
                                    <div className="circle" id="circle-5"></div>
                                    writer's
                                </Link>
                            </li>
                        </ul>
                        <h3>way.</h3>
                    </div>
                    <div className="divider"></div>
                    <Link to="/#works" className="svg-wrapper">
                        <ArrowIcon />
                    </Link>
                </div>
                
            </div>
        </section>
    );
};

export default Banner;