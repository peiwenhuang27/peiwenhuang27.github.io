import { Logo } from '../../Icons';

function Banner () {
    return (
        <div className="banner">
            <div className='container'>
                <ul className="w-sizer d-flex flex-column justify-content-center align-items-center">
                    <li><Logo /></li>
                    <li><h2>Hi! It’s Joanne</h2></li>
                    <li><h3>Recent graduate with B.B.A. in Information Management (IM) in pursuit of humanity via HCI, UX/UI, and Social Computing.
                        My versatility ranges from design, computer science, and business.</h3></li>
                </ul>
                <div className="arrow-down mt-5">
                    <img className='banner-arrow' src="https://media.giphy.com/media/IxrsXjo6upn8Dg82uU/giphy.gif" alt="arrow-down" width="60px"/>
                </div>
        </div>
        {/* TODO: add buttons to works/about */}
        {/* Hey! It's Joanne. */}
        {/* Advocate for Humanity by Way of<br/>HCI, UX, & Social Computing. */}
    </div>
    );
};

export default Banner;