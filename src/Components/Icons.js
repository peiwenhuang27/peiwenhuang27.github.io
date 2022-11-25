import { ReactComponent as LogoSvg } from "../img/logo.svg";
import { ReactComponent as EduSvg } from "../img/education.svg";
import { ReactComponent as SkillSvg } from "../img/skillset.svg"
import { ReactComponent as LanguageSvg } from "../img/language.svg"
import { ReactComponent as InterestSvg } from "../img/interests.svg"
import { ReactComponent as LinkSvg } from "../img/link.svg"

const Logo = () => (
    <div className="logo-svg">
        <LogoSvg />
    </div>
);

const EduIcon = () => (
    <div className="about-svg">
        <EduSvg />
    </div>
);

const SkillIcon = () => (
    <div className="about-svg">
        <SkillSvg />
    </div>
);

const LangIcon = () => (
    <div className="about-svg">
        <LanguageSvg />
    </div>
);

const InterestIcon = () => (
    <div className="about-svg">
        <InterestSvg />
    </div>
);

const LinkIcon = () => (
    <div className="about-svg">
        <LinkSvg className="link-svg" />
    </div>
);

export { Logo, EduIcon, SkillIcon, InterestIcon, LangIcon, LinkIcon };
