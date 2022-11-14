import { Logo } from '../../Icons';

function Banner () {
    return (
        <div className="banner">
        <ul className="container">
            <li><Logo /></li>
            <li><h2>Hey! It's Joanne.</h2></li>
            <li><h3>Advocate for Humanity by Way of<br/>HCI, UX, & Social Computing.</h3></li>
        </ul>
        {/* TODO: add buttons to works/about */}
    </div>
    );
};

export default Banner;