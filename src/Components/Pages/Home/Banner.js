import { Logo } from '../../Icons';
import ProgressiveImage from 'react-progressive-bg-image';

function Banner () {
    const img_src = "https://live.staticflickr.com/65535/52516580065_a71e3f7f51_k.jpg";
    const img_ph = "https://live.staticflickr.com/65535/52516580065_e5de0629f5_o.jpg";

    return (
        <div className="banner">
            <ProgressiveImage
                src={img_src}
                placeholder={img_ph}
                style={{
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
            <div className='container'>
                <ul className="w-sizer d-flex flex-column justify-content-center align-items-center">
                    <li><Logo /></li>
                    <li><h2>Hi! It’s Joanne.</h2></li>
                    <li><h3>Advocate for Humanity by Way of<br/>HCI, UX, & Social Computing.</h3></li>
                </ul>
                <div className="arrow-down mt-5 d-flex flex-column align-items-center justify-content-center">
                    <img className='banner-arrow' src="https://media.giphy.com/media/IxrsXjo6upn8Dg82uU/giphy.gif" alt="arrow-down" width="60px"/>
                    {/* TODO: use arrow CSS animation */}
                </div>
            </div>
            </ProgressiveImage>
        </div>
    );
};

export default Banner;