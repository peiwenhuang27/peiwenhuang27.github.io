import {ReactComponent as LogoSvg} from "../img/logo.svg"
import {ReactComponent as ArrowSvg} from "../img/arrow-down.svg"

const Logo = () => (
    <div className="logo-svg">
        <LogoSvg />
    </div>
);

const Arrow = () => {
    <div className="arrow-svg">
        <ArrowSvg />
    </div>
}

export { Logo, Arrow };
