import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { ArrowIcon } from "../Icons";

function BottomNav ({ leftTxt = null, leftSuffix = null, rightTxt = null, rightSuffix = null}) {
    if ( leftTxt === null ) {
        return (
            <div className="bottom-nav d-flex justify-content-end">
                <Link to={`/Works/${rightSuffix}`} className="d-flex align-items-center right">
                    <h6>{rightTxt}</h6>
                    <ArrowIcon />
                </Link>
            </div>
        )
    }
    if ( rightTxt === null ) {
        return (
            <div className="bottom-nav d-flex justify-content-start">
                <Link to={`/Works/${leftSuffix}`} className="d-flex align-items-center left">
                    <ArrowIcon />
                    <h6>{leftTxt}</h6>
                </Link>
            </div>
        )
    }
    return (
        <div className="bottom-nav d-flex justify-content-between">
                <Link to={`/Works/${leftSuffix}`} className="d-flex align-items-center left">
                    <ArrowIcon />
                    <h6>{leftTxt}</h6>
                </Link>
                <Link to={`/Works/${rightSuffix}`} className="d-flex align-items-center right">
                    <h6>{rightTxt}</h6>
                    <ArrowIcon />
                </Link>
        </div>
    );
}

export default BottomNav;