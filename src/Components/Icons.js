import { ReactComponent as LogoSvg } from "../img/logo.svg";
import { ReactComponent as EduSvg } from "../img/education.svg";
import { ReactComponent as SkillSvg } from "../img/skillset.svg"
import { ReactComponent as LanguageSvg } from "../img/language.svg"
import { ReactComponent as InterestSvg } from "../img/interests.svg"
import { ReactComponent as LinkSvg } from "../img/link.svg"
import { ReactComponent as ArrowSvg } from "../img/arrowDown.svg"
import { ReactComponent as EmailSvg } from "../img/Email.svg"
import { ReactComponent as LinkedInSvg } from "../img/LinkedIn.svg"
import { ReactComponent as GithubSvg } from "../img/Github.svg"

const LogoIcon = () => (
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

const ArrowIcon = () => (
    <div>
        <ArrowSvg className="arrow-svg" />
    </div>
);

const EmailIcon = () => (
    <div className="email-svg">
        <EmailSvg />
    </div>
);

const LinkedInIcon = () => (
    <div className="linkedin-svg">
        <LinkedInSvg />
    </div>
);

const GithubIcon = () => (
    <div className="github-svg">
        <GithubSvg />
    </div>
);

export { LogoIcon, EduIcon, SkillIcon, InterestIcon, LangIcon, LinkIcon, ArrowIcon, EmailIcon, LinkedInIcon, GithubIcon };
