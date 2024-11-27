import { createRef, useState } from "react";

import Video from "../../../Helpers/Video";

import ProjectRec from "../../../ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";
import ProgressBar from "../../../ScrollBar";
import { Subsection } from "../../../Topic";

// update
// cover image

function Fairplay ({ pageHeight, handleSubsectionClick }) {
    const [activeItem, setActiveItem] = useState(0);

    const items = [
        {
            name: "Intro",
            content: 
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">January 2024 - July 2024</h3>
                                <h2 className="mb-1">FairPlay: Your AI Advocate for All Things Customer Service</h2>
                                <h3 className="theme mb-5">Product Design, App Design, Consumer Products, Advocacy</h3>
                                <p className="mb-5">
                                Consumer Reports (CR), a trusted consumer advocate since 1936, partnered with our Carnegie Mellon team to tackle the power imbalance between companies and consumers using Agentic AI. 

We proudly introduce FairPlay, an <b>AI-powered mobile app designed to mediate customer service interactions and uphold consumer rights.</b> Built through extensive research and prototyping, FairPlay empowers users to navigate Terms of Service, Privacy Policies, and Dispute Resolution effortlessly.
                                </p>

                                
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <div className="row">
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Duration</h6>
                                    <ul>
                                        <li>7 months</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Tool</h6>
                                    <ul>
                                        <li>Figma, Miro, Adobe Premiere, ChatGPT</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Role</h6>
                                    <ul>
                                        <li>Product Designer</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col-md-6 mb-5">
                                    <h6 className="theme mb-3">Team</h6>
                                    <ul>
                                        <li>1 Product Designer (me), 1 Product Manager, 2 UX Researchers, 1 Strategist</li>
                                    </ul>
                                </div>
                                <div className="topic-desc-container col mb-5">
                                    <h6 className="theme mb-3">Responsibilities</h6>
                                    <ul className="list-disc">
                                        <li className="">Conducted user interviews and usability tests to create journey maps and personas, identifying user needs</li>
                                        <li className="">Collaborated with cross-functional teams to prototype FairPlay AI, a customer service mediator, validated by 40 users</li>
                                        <li className="">Pitched product feasibility and design to the CEO and 20 stakeholders, securing development support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        }, 
        {
            name: "Demo",
            content:
            <>
                <div className=" container">
                    <div className="topic-container">
                        <h3 className="mb-5">💻 Demo</h3>

                        <ScrollReveal>
                            <div className="row align-items-start subsection-wrapper">
                                <div className="col-md-6">
                                    <h5 className="theme mb-3">Empowering You to Reclaim Your Consumer Rights- Any Moment, Any Channel</h5>
                                    <p className="">
                                    FairPlay offers tips, step-by-step guides, and AI-crafted messages for calls, chats, or emails—or let us handle the company contact for you!
                                    </p>
                                </div>

                                <div className="col-md-6 mb-4 d-flex justify-content-center">
                                    <Video src="https://i.imgur.com/VjOmJOg.mp4" width="270" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row align-items-start subsection-wrapper">
                                <div className="col-md-6">
                                    <h5 className="theme mb-3">Company Policy-Based Negotiation Arguments</h5>
                                    <p className="">
                                    Based on simple inputs, FairPlay analyzes your situation and identifies relevant polices and arguments to strengthen your case. Be empowered as you negotiate with companies with FairPlay’s policy-based talking points.
                                    </p>
                                </div>

                                <div className="col-md-6 mb-4 d-flex justify-content-center">
                                    <Video src="https://i.imgur.com/WydaFZP.mp4" width="270" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row align-items-start subsection-wrapper">
                                <div className="col-md-6">
                                        <h5 className="theme mb-3">FairPlay AI Acting on Your Behalf</h5>
                                        <p className="mb-5">
                                        No time for phone calls? Don't know how to argue? Too overwhelmed to talk? We got you. FairPlay acts on your behalf, contacting customer service and negotiating with them using your approved script.                                    
                                        </p>
                                        <h6 className="mb-3 subtle">Reduced Stress & Time Savings</h6>
                                        <p className="mb-3">
                                        FairPlay handles the tedious and potentially frustrating customer service interactions, freeing up your time and energy.
                                        </p>
                                </div>

                                <div className="col-md-6 mb-4 d-flex justify-content-center">
                                    <Video src="https://i.imgur.com/1pB6jrz.mp4" width="270" />
                                </div>

                                {/* <div className="col-md-6 d-flex justify-content-center">
                                    <div className="d-flex justify-content-center"
                                    style={{overflow: "hidden", width: 360, height: 360, borderRadius: 400}}>
                                        <img style={{height: "100%"}} className="no-shadow" src="https://images.pexels.com/photos/6280574/pexels-photo-6280574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Customization of Avatar"></img>
                                    </div>
                                </div> */}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="flex-row-reverse row align-items-start subsection-wrapper-bottom">
                                <div className="col-md-6">
                                    <h6 className="mb-3 subtle">Real-Time Updates</h6>
                                    <p className="mb-3">
                                    We keep you in the loop! Receive updates and decision checkpoints throughout the customer service interaction.
                                    </p>
                                </div>

                                <div className="col-md-6 mb-4 d-flex justify-content-center">
                                    <img className="w-sizer-lg no-shadow" src="https://64.media.tumblr.com/165cacbead84c030f1e63c6a3b6a380a/e8f7c3f3888d6b11-4f/s2048x3072/50049f2c1ddbc3c779107785fed3dcf5c94a3167.pnj" alt="Before, during, after call push notification"></img>
                                </div>
                                
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="flex-row-reverse row align-items-start subsection-wrapper-bottom">
                                <div className="col-md-6">
                                    <h6 className="mb-3 subtle">Customizable AI Tone</h6>
                                    <p className="mb-3">
                                    Feel best represented by choosing FairPlay AI's tone when calling customer service— cheerful, neutral, apathetic— your case, your choice.
                                    </p>
                                </div>

                                <div className="col-md-6 mb-4 d-flex justify-content-center">
                                    <img className="w-sizer no-shadow" src="https://64.media.tumblr.com/97b5022ec2e655e1458be7597cbe0228/e8f7c3f3888d6b11-96/s1280x1920/6a7b41366844520db604894e804d2ff59c528068.pnj" alt="Customizing AI tone"></img>
                                </div>
                                
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row align-items-start subsection-wrapper">
                                <div className="col-md-6">
                                    <h5 className="theme mb-3">Multi-channel Adaptability</h5>
                                    <p className="mb-3">
                                    Prefer to do it yourself? FairPlay analyzes wait times and resolution rates to find the best way (chat, phone, email) to connect you with a product company's customer service team.
                                    </p>
                                </div>

                                <div className="col-md-6 mb-4 d-flex justify-content-center">
                                    <Video src="https://i.imgur.com/3atgwsG.mp4" width="270" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="flex-row-reverse row align-items-start subsection-wrapper">
                                <div className="col-md-6">
                                    <h6 className="mb-3 subtle">Calling</h6>
                                    <p className="mb-3">
                                    Access support steps, relevant policies during calling, and a post-call summary and transcript for reference.
                                    </p>
                                </div>

                                <div className="col-md-6 mb-4 d-flex justify-content-center">
                                    <img className="w-sizer-lg no-shadow" src="https://64.media.tumblr.com/fb407dd8dce08fdc4e6fa47315c75d77/b0a002d2c7f4669c-b5/s1280x1920/1a63312806e98a8bb9806256c25121d5f7d9b3bd.pnj" alt="Customization of Avatar"></img>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="flex-row-reverse row align-items-start subsection-wrapper">
                                <div className="col-md-6">
                                    <h6 className="mb-3 subtle">Online Chat</h6>
                                    <p className="mb-3">
                                    FairPlay integrates with iMessage to support Business Chats, providing policy-backed arguments directly in your chat during live customer service interactions.
                                    </p>
                                </div>

                                <div className="col-md-6 mb-4 d-flex justify-content-center">
                                    <img className="w-sizer" src="https://64.media.tumblr.com/e1bb445ebfc7453af6939e4b8a174ce0/e8f7c3f3888d6b11-8c/s1280x1920/e881559e6003552991b373bea031af9c706bb5bc.pnj" alt="Customization of Avatar"></img>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="flex-row-reverse row align-items-start subsection-wrapper">
                                <div className="col-md-6">
                                    <h6 className="mb-3 subtle">Emailing</h6>
                                    <p className="mb-3">
                                    Need to email a company? FairPlay drafts emails with your issue details and policy clauses—just review and send from the app!
                                    </p>
                                </div>

                                <div className="col-md-6 mb-4 d-flex justify-content-center">
                                    <img className="w-sizer-lg" src="https://64.media.tumblr.com/fda6c26de6331d10f64ec260deaa6f30/b0a002d2c7f4669c-0c/s1280x1920/42c5412f9d2cf5500e04f83c8dde5486c57c834a.pnj" alt="Customization of Avatar"></img>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div> 
            </>
        },
        {
            name: "Research",
            content:
            <>
                <div className="container topic-container subsection-wrapper">
                    <h1 className="subsection-wrapper-bottom theme">Curious How We Made FairPlay? <br/>Dive Into The Process with Us. </h1>
                </div>
                <div className="container theme-bg">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <h3 className="mb-5">🔎 Research</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="mb-1 theme">85%</h1>
                                    <h5 className="mb-3 theme">of Americans have encountered an unexpected or hidden fee over the past two years for a service they had used.</h5>
                                    <p className="caption mb-5">
                                        Consumer Reports. (2023, February 8). <span className="italic">Consumer Reports urges the FTC and Congress to ban costly junk fees.</span>
                                    </p>
                                </div>
                                <div className="col-md-6 d-flex align-items-end">
                                    <p className="px-5 mb-5">
                                    As the digital marketplace approaches maturity, so does its underlying problems grow more acute. Everyone is likely familiar with the egregious experience of being “played” by companies' customer service when making a rightful request, maybe even more than thrice. Why do we as consumers struggle with customer service?
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
                <div className="container">
                    <div className="topic-container">
                        <ScrollReveal>
                            <div className="row subsection-wrapper">
                                <div className="col-md-8 mb-3">
                                <h5 className="mb-5">Uncovering Pain Points with User Studies</h5>
                                    <h6 className="theme">Methods</h6>
                                    <p className="mb-5">
                                        Literature Review / Guerrilla Research / Semi-structured Interview / User Journey Map / Storyboarding / Affinity Diagramming
                                    </p>
                                    <h6 className="theme">Demographics</h6>
                                    <p className="mb-3">
                                    Our team intentionally focus on younger consumers. CR's user base currently skews older, but we're now looking to engage Gen Z and Millennials— <b className="">digital natives with growing buying power but limited consumer experience</b>. Understanding their customer service pain points will help us expand CR's reach and promote consumer advocacy to those who need it most.
                                    </p>
                                </div>
                                <div className="col-md-4 mb-3 d-flex justify-content-center">
                                    <img className="w-75" src="https://64.media.tumblr.com/1ba9eb6dff9e7cdaa4eb325dbd70060e/935883561c828398-31/s2048x3072/88a5e46f8d288c5de9606cceb17b6284bf041a9a.pnj" alt="Demographics of FairPlay research participants"></img>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row subsection-wrapper">
                                <div className="col-md-6 mb-3">
                                    <h5 className="mb-5">Meet Alex, and Her Consumer Journey</h5>
                                    <p>
                                    Buying things is as easy as a few clicks for a hardworking Millennial like Alex, who grew up surrounded by technologies. You go online, read and compare product reviews, checkout, and receive the purchase at your doorstep. Simple as that. It's convenient enough that Alex doesn't need to spend too much time looking through every detail.  
                                    </p>
                                </div>
                                <div className="col-md-6 mb-3 d-flex justify-content-center">
                                    <img className="w-100 px-5" src="https://64.media.tumblr.com/c30fae6e2f120cf79950d3723097aaea/935883561c828398-72/s2048x3072/03d1bbc40a6e55c2f0993348cd39ad3501634c24.pnj" alt="Alex's persona profile"></img>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal>
                            <div className="row subsection-wrapper">
                                <div className="col-md-4 mb-3">
                                    <h5 className="mb-5">But sometimes...<br/><span className="theme">things just don't work as planned.</span></h5>
                                    <p>
                                    Sometimes you don't realize something's wrong until you receive that overcharged bill— in Alex's case, this is her Internet bill with an extra fee she doesn't recognize. She'd contact the provider and correct it if she could, but...
                                    </p>
                                </div>
                                <div className="col-md-8 px-5 mb-3">
                                <img className="no-shadow w-100" src="https://64.media.tumblr.com/872ffef2595419d7e4520cbedbbad182/935883561c828398-d0/s2048x3072/0c8d5261eef22583bba66ead0ba6d45bf0d7155e.pnj" alt="Consumer journey of Alex, a hard-working Millennial"></img>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="secondary-bg container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <div className="row mb-5">
                                <div className="col-md-8 mb-3">
                                    <h6 className="mb-3">External Constraints</h6>
                                    <h4 className="mb-3">“I just don't have time for this!”</h4>
                                    <p>
                                    Consumers often face challenges with customer service, from finding contact channels to dealing with unresponsive representatives. Many encounter <b>“dark patterns”</b> like hidden contact info, misleading clicks, or obstacles to canceling plans, designed to complicate the post-purchase experience.
                                    </p>
                                </div>
                                <div className="col-md-4 p-3 d-flex justify-content-center">
                                    <img className="no-shadow w-sizer-sm" src="/works/UXUI/fairplay/2-research/4-1-external-constraints.svg" alt="clock icon" />
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal>
                            <div className="row mb-5">
                                <div className="col-md-8 mb-3">
                                    <h6 className="mb-3">Informational Imbalance</h6>
                                    <h4 className="mb-3">“What if I missed something in the fine print?”</h4>
                                    <p>
                                    Consumers often find company policies too lengthy and technical to navigate, leaving them <b>unaware of their rights</b>. This reveals a need for clear, actionable information delivered at the right moment.
                                    </p>
                                </div>
                                <div className="col-md-4 p-3 d-flex justify-content-center">
                                    <img className="no-shadow w-sizer-sm" src="/works/UXUI/fairplay/2-research/4-2-informational-imbalance.svg" alt="written document with magnifying glass icon" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row mb-5">
                                <div className="col-md-8 mb-3">
                                    <h6 className="mb-3">Emotional Burden</h6>
                                    <h4 className="mb-3">“I'm afraid they won't give me what I need.”</h4>
                                    <p>
                                    Consumers often feel helpless and lack confidence when asserting their rights, driven by past failed service requests. This creates a <b>negative cycle of avoiding customer support</b>.
                                    </p>
                                </div>
                                <div className="col-md-4 p-3 d-flex justify-content-center">
                                    <img className="no-shadow w-sizer-sm" src="/works/UXUI/fairplay/2-research/4-3-emotional-burden.svg" alt="annoyance icon" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row subsection-wrapper">
                                <div className="col-md-7 mb-3 px-3 d-flex justify-content-center">
                                    <img className="no-shadow w-100" src="https://64.media.tumblr.com/ab8f1d5395b0091ac0e9ed2abf93dc12/36283f6a742e5248-f1/s2048x3072/709a2e247f3dbd601883cfd2116a0c323d7e4811.pnj" alt="Consumer journey of Alex, a hard-working Millennial"></img>
                                </div>
                                <div className="col-md-5 mb-3">
                                    <h5 className="mb-5">Alex is not alone.</h5>
                                    <p>
                                    Not just Alex, but Trevor, a budget-conscious Gen Z needing warranty repairs, and Betty, a tech-challenged Boomer managing insurance online, all face the same issue: customer service is time-consuming, overwhelming, and stressful.
                                    <br/><b className="">This power imbalance leads consumers to avoid it altogether, preferring someone else to handle it.</b>
                                    </p>
                                </div>
                                
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </>
        },
        {
            name: "Objective",
            content:
            <div className="theme-bg container">
                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <h3 className="mb-5">🎯 Objective</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="mb-5 theme">Today's marketplace is more complex, opaque, and intangible than ever, making it increasingly difficult for consumers to understand and advocate for their rights in the digital age.</h5>
                            </div>
                            <div className="col-md-6 px-5 d-flex align-items-start">
                                <p className="">
                                In light of this issue, our team aims to create an agentic AI that co-creates value for consumers by mediating interactions- particularly regarding customer service- with companies.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        },
        {
            name: "Design",
            content:
            <div>
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <h3 className="mb-5">🪄 Design</h3>
                            <h4 className="col-md-8 mb-3">How might we streamline and empower consumers' post-purchase interactions with businesses to reduce <span className="theme">informational load, emotional strain, and time investment</span>, to ensure transparency and fairness in the marketplace?
                            </h4>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="subsection-wrapper">
                                
                                <h5 className="mb-3">Our Design Principles</h5>
                                <div className="row">
                                    <div className="col-md-3 mb-3 d-flex flex-column align-items-start">
                                        
                                        <p className="">
                                        Following our findings from user research, we established a framework of actions an agentic AI should follow to maximize its impact for consumer’s trouble relief.
                                        </p>
                                    </div>
                                    <div className="col-md-3 mb-3 px-5 d-flex flex-column align-items-center">
                                        <img className="no-shadow mb-3" src="/works/UXUI/fairplay/3-design/1-inform.svg" alt="Inform icon" />
                                        <h6 className="">Inform</h6>
                                        <p className="caption subtle text-center">
                                        Providing relevant information to users in a timely manner
                                        </p>
                                    </div>
                                    <div className="col-md-3 mb- px-5 d-flex flex-column align-items-center">
                                        <img className="no-shadow mb-3" src="/works/UXUI/fairplay/3-design/2-guide.svg" alt="Guide icon" />
                                        <h6 className="">Guide</h6>
                                        <p className="caption subtle text-center">
                                        Offering step-by-step guidance and resources to empower consumers
                                        </p>
                                    </div>
                                    <div className="col-md-3 mb-3 px-5 d-flex flex-column align-items-center">
                                        <img className="no-shadow mb-3" src="/works/UXUI/fairplay/3-design/3-act.svg" alt="Act icon" />
                                        <h6 className="">Act</h6>
                                        <p className="caption subtle text-center">
                                        Acting on behalf of consumers to advocate for their rights
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        },
        {
            name: "Prototyping",
            content:
            <>
                <div className="theme-bg container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <h3 className="mb-5">🛠️ Prototyping </h3>
                            <div className="subsection-wrapper-bottom">
                                <h5 className="theme mb-3">Parallel Prototyping: Exploring Multiple Possibilities</h5>
                                <p className="subsection-wrapper-bottom">
                                Knowing "what users need" doesn't directly translate to "what we build." To ensure the product meets consumer needs and provides a seamless experience, we used parallel prototyping to develop three concepts—Negotiation Helper, Policy Assistant, and CR Wallet—aligned with the design principles of inform, guide, and act.
                                </p>
                                <div className="row">
                                    <div className="col-md-4 mb-3 d-flex flex-column align-items-center">
                                        <img className="no-shadow w-sizer-lg mb-3" src="https://64.media.tumblr.com/e5f3d30e4d0d661bea51d7e9715d35ca/deb822ce3641cea1-dc/s2048x3072/b877e327ccdb1b29ca3ee0a9494bc93597b45262.pnj" alt="screen mockup of Negotiation Helper" />
                                        <h6 className="">Negotiation Helper</h6>
                                        <p className="text-center caption">Strengthening your customer service calls with real-time tips</p>
                                    </div>
                                    <div className="col-md-4 mb-3 d-flex flex-column align-items-center">
                                        <img className="no-shadow w-sizer-lg mb-3" src="https://64.media.tumblr.com/e506b3f07dc3d95305046cbe495a628c/deb822ce3641cea1-26/s2048x3072/30e85b80a90a951ade1d8af4dcc960eb5754903d.pnj" alt="screen mockup of Policy Assistant" />
                                        <h6 className="">Policy Assistant</h6>
                                        <p className="text-center caption">Flagging deceptive company policies and giving actionable recommendations</p>
                                    </div>
                                    <div className="col-md-4 mb-3 d-flex flex-column align-items-center">
                                        <img className="no-shadow w-sizer-lg mb-3" src="https://64.media.tumblr.com/000c32ba936bcdf303de3acf6ea8bac0/deb822ce3641cea1-0c/s2048x3072/7b0ac5e81bf071990e73ff276e39e4af882ffced.pnj" alt="screen mockup of CR Wallet" />
                                        <h6 className="">CR Wallet</h6>
                                        <p className="text-center caption">On demand purchase storage and troubleshooting guide</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <h5 className="theme mb-3">Client Feedback: Focusing on One but Combining Other Concepts</h5>
                                    <p className="">
                                    <b className="">Negotiation Helper</b> emerged as the most promising, offering real-time coaching and transcript storage. This enables CR to generate high-integrity datasets, drive upstream impact on companies, and create a new revenue stream through data-driven insights.
                                    </p>
                                </div>
                                <div className="col-md-6 mb-3 d-flex justify-content-center">
                                <img className="no-shadow w-sizer-lg mb-3" src="https://miro.medium.com/v2/resize:fit:992/format:webp/1*SHXk-lpreZrWQV6LZd5WZQ.jpeg" alt="client collaborative session" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <h6 className="subtle">Concept Validation #1</h6>
                                    <h5 className="theme mb-5">Desirability of Real-Time Company Policy Tips</h5>
                                    <p>
                                        <b>What Are We Testing?</b><br/>
                                        <ul className="list-disc">
                                            <li>
                                            Are users comfortable with AI listening in?
                                            </li>
                                            <li>
                                            Can they manage calls while acting on our tips without added cognitive burden?
                                            </li>
                                        </ul>
                                        <br/>

                                        <b>How Are We Testing?</b><br/>
                                        <b>Wizard of Oz methodology:</b> simulating a scenario where the participant is overcharged on their ISP (Internet Service Provider) bill due to an unauthorized service change.
                                    </p>
                                    
                                </div>
                                <div className="col-md-6 px-5 d-flex flex-column">
                                    <img className="no-shadow w-100 mb-3" src="https://64.media.tumblr.com/49bdd635366d91b85667fd13b10f94f8/8284ba6f9edd8a35-5c/s2048x3072/cec6bc36d6cbfe742eeedca87285f00bd6c662d6.pnj" alt="round 1 concept validation wireframes" />
                                    <img className="no-shadow w-100 mb-3" src="https://64.media.tumblr.com/a2289c48f4a30eb270c2f1c0ea515e88/8284ba6f9edd8a35-b1/s2048x3072/59fea960fbc459ca193e5e293cedcd9a7ebe7c96.jpg" alt="round 1 concept validation wizard of oz setup" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="secondary-bg container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <div className="row subsection-wrapper-bottom">
                                <div className="col-md-6">
                                    <h5 className="mb-3">Preliminary Findings</h5>
                                    <p className="mb-3">
                                        Synthesizing the notes from speaking to 5 participants into the following rainbow chart, we evaluated their sentiments towards different concepts qualitatively and sorted them from positive to negative.
                                    </p>
                                </div>
                                <div className="col-md-6 px-5">
                                    <img className="w-100 mb-5" src="https://64.media.tumblr.com/5d63406fcd93a062345866b22bb61879/8284ba6f9edd8a35-87/s2048x3072/a82a792b98e761e067e7fcdd6575110b9a80af48.pnj" alt="round 1 concept validation rainbow chart" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                        <h6 className="">Significant Cognitive Burden of In-Call Text Tips</h6>
                        <div className="subsection-wrapper-bottom row align-items-start">
                            <div className="col-md-6 mb-3">
                                <h4 className="">
                                It was kind of overwhelming, because I felt like I was trying to do a lot of things at once. I thought I had to reply fast, but I was also reading."
                                </h4>
                                <p className="caption mb-3 subtle">
                                    Female, 20s, CR Non-Member (P1)
                                </p>
                            </div>
                            <div className="col-md-6 mb-5 px-5">
                                <p className="caption subtle">
                                Majority of users were favorable of having the agentic AI build arguments for them, although one critical drawback is the significant cognitive burden- listening to the call, reading the text tip, understanding the tip, making a decision about next steps, speaking in the call- having to perform all these actions simultaneously rendered the tips much less helpful.
                                </p>
                            </div>
                        </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row subsection-wrapper">
                                <h5 className="col-md-4 mb-5">Design Changes</h5>
                                <p className="col-md-8 mb-3">
                                Based on user feedback, we made several changes to our different features within Negotiation Helper. Notably, instead of interrupting users during call with company policy alert texts, we will test giving <b className="">pre-call preparatory company policy insights</b> to see whether this lowers the perceived cognitive overload while delivering critical case information timely.
                                </p>
                            </div>
                        </ScrollReveal>
                            
                    </div>
                </div>

                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <h6 className="subtle">Concept Validation #2</h6>
                                    <h5 className="theme mb-5">Preference of Company Policy Tips Timing, AI Error Discovery & Tolerance</h5>
                                    <p>
                                        <b>What Are We Testing?</b><br/>
                                        <ul className="list-disc">
                                            <li>
                                            How effective are pre-call tips in getting users what they deserve compared to in-call texts?
                                            </li>
                                            <li>
                                            Do users favor, or even prefer, having CR Wizard act on their behalf in customer service calls?
                                            </li>
                                            <li>
                                            Are users able to identify and amend errors? How tolerant are they with these AI errors?
                                            </li>
                                        </ul>
                                        <br/>

                                        <b>How Are We Testing?</b><br/>
                                        <b>A/B Testing:</b> identifying two user groups- those using real-time AI tips in live chat and pre-call tips in the CR Wizard app. Participants first engage in a Wizard of Oz simulation, then monitor CR Wizard acting on their behalf.
                                    </p>
                                    
                                </div>
                                <div className="col-md-6 px-5 d-flex flex-column">
                                    <img className="no-shadow w-100 mb-3" src="https://64.media.tumblr.com/7dea3f5624aa436d8af504ed1c92edba/8284ba6f9edd8a35-e2/s2048x3072/4f9103e4334247fa2cea99ea10ee97f0c77d3e12.pnj" alt="round 2 concept validation wireframes" />
                                    <img className="no-shadow w-100 mb-3" src="https://64.media.tumblr.com/73a02124b4ae1fbd55a880b1a3a99c3d/8284ba6f9edd8a35-43/s2048x3072/7f9e34d73a4e940a5ca529b65563478888d3ac94.pnj" alt="round 2 concept validation wizard of oz flow chart" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="secondary-bg container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <div className="row subsection-wrapper-bottom">
                                <div className="col-md-6">
                                    <h5 className="mb-3">Preliminary Findings</h5>
                                    <p className="mb-3">
                                    After the last iteration, the positivity of sentiments towards the design has greatly increased, with all concepts being at least neutral to favorable.
                                    </p>
                                </div>
                                <div className="col-md-6 px-5">
                                    <img className="w-100 mb-5" src="https://64.media.tumblr.com/1f688b110f10fc25a5ea6d58888a49e1/8284ba6f9edd8a35-67/s2048x3072/befaebbe68d9d274effd4b3e6a8c35d8885ef318.pnj" alt="round 2 concept validation rainbow chart" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3">
                                    <h6 className="mb-3">Well Received Company Policy Arguments</h6>
                                    <h4 className="quote">
                                    The policy clause really helped me defend myself better... I have all the information on my screen, so I don't have to... go back, refer to my documents and look for the information.
                                    </h4>
                                    <p className="caption mb-3 subtle">
                                    Male, 20s, CR Non-Member (P6)
                                    </p>
                                </div>

                                <div className="col-md-6 subsection-wrapper-bottom">
                                    <p className="mb-5 caption subtle">
                                    Participants were highly favorable toward having LLM-generated policy arguments in customer service interactions, as long as they’re provided at the right time, like pre-call or in-chat. 
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal>
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3">
                                    <h6 className="mb-3">Openness to CR Wizard Acting on One's Behalf</h6>
                                    <h4 className="quote">
                                    I would love it if CR would just do that whole back and forth process - if I just entered my information, and they would do all the talking and figuring out.
                                    </h4>
                                    <p className="caption mb-3 subtle">
                                    Female, 20s, CR Non-Member (P7)
                                    </p>
                                </div>
                                        
                                <div className="col-md-6 subsection-wrapper-bottom">
                                    <p className="mb-5 caption subtle">
                                    Most were open to AI handling customer service for them. Error detection was split, with some overlooking mistakes after a successful experience, likely due to increased trust in CR Wizard.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal>
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3">
                                    <h6 className="mb-3">Relationship between Emotions and Trust</h6>   
                                </div>

                                <div className="col-md-6 subsection-wrapper-bottom">
                                    <p className="mb-5 caption subtle">
                                    Emotion played a key role in handling AI errors. Many Gen Z users, less comfortable with direct interactions, found correcting AI “awkward” or “embarrassing,” making trust recovery harder. This underscores the need to manage AI errors carefully to maintain trust, especially among younger users.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row">
                                <h5 className="col-md-4 mb-5">Design Changes</h5>
                                <p className="col-md-8 mb-5">
                                In our next and last round before final presentation, we'll dive deeper into AI acting on users' behalf and
                                    <ul className="list-disc">
                                        <li>
                                            Provide users a way to customize desired outcomes
                                            <br/>(eg. refund instead of replacement)
                                        </li>
                                        <li>
                                            Provide live transcription
                                            <br/>(improve discoverability of errors, allow participants to multi-task)
                                        </li>
                                        <li>
                                            Assess mistake tolerance and how to maintain user trust post AI error
                                        </li>
                                        <li>
                                            Improve user repair interactions of text or takeover modalities
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <h6 className="subtle">Concept Validation #3</h6>
                                    <h5 className="mb-5 theme">Building User Trust in AI-Led Interactions</h5>
                                    <p>
                                        <b>What Are We Testing?</b><br/>
                                        <ul className="list-disc">
                                            <li>
                                            Error repair user interactions
                                            </li>
                                            <li>
                                            How do AI mistakes Impact user trust?
                                            </li>
                                            <li>
                                            How tolerant are users to AI errors?
                                            </li>
                                            <li>
                                            What post error responses help maintain user trust in the product and CR?
                                            </li>
                                        </ul>
                                        <br/>

                                        <b>How Are We Testing?</b><br/>
                                        To assess both attitudinal and behavioral response to AI errors, we divide the test into 2 parts:
                                        <ul className="list-disc">
                                            <li>
                                            Part 1: Storyboard Speed Dating
                                            </li>
                                            <li>
                                            Part 2: Takeover Mechanism Wizard of Oz
                                            </li>
                                        </ul>
                                    </p>
                                    
                                </div>
                                <div className="col-md-6 px-5 d-flex flex-column">
                                    <img className="no-shadow w-100 mb-3" src="https://64.media.tumblr.com/91d80d874bd114970312c746c15cff9c/8284ba6f9edd8a35-ef/s2048x3072/270b4a7bf28578c34dc6debfb57f955f36e29327.pnj" alt="round 1 concept validation wireframes" />
                                    <img className="no-shadow w-100 mb-3" src="https://64.media.tumblr.com/857544bf8ea23bd299838f032bdb6387/8284ba6f9edd8a35-e9/s2048x3072/407340a2d2a4eaa756dc96d26d5f18f42f6d4f34.pnj" alt="round 1 concept validation wizard of oz setup" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="secondary-bg container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <div className="row subsection-wrapper-bottom">
                                <div className="col-md-6">
                                    <h5 className="mb-3">Preliminary Findings</h5>
                                    <p className="mb-3">
                                    Overall, the majority of the participants were positive about AI acting on their behalf- consistent with our data from the last round. But interestingly, <b className="">100% of the participants in this round desired minimal involvement in AI-Led Calls</b> because of the following reasons:
                                    </p>
                                </div>
                                <div className="col-md-6 px-5">
                                    <img className="w-100 mb-5" src="https://64.media.tumblr.com/689060834f3ccf841c57ca1f15a926ed/8284ba6f9edd8a35-cc/s2048x3072/f82c0cb7f54724afc5809277d15a31b3b6f71d14.pnj" alt="round 3 concept validation rainbow chart" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3">
                                    <h6 className="mb-3">Counterproductive Requirement of User's Presence</h6>
                                    <h4 className="quote">
                                    If I have to be engaged when the AI is making the phone call, then I should just make the phone call myself.
                                    </h4>
                                    <p className="caption mb-3 subtle">
                                    Male, 20s, CR Reader (P5)
                                    </p>
                                </div>

                                <div className="col-md-6 subsection-wrapper-bottom">
                                    <p className="mb-5 caption subtle">
                                    70% of participants wanted the AI agent to handle calls independently, because they felt frustrated with actively monitoring the call, as it defeats the purpose of having an agent that’s supposed to save time and cognitive effort.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row mb-5">
                                <div className="col-md-6 mb-3">
                                    <h6 className="mb-3">Emotional Discomfort Associated with Active Monitoring</h6>
                                    
                                </div>

                                <div className="col-md-6 subsection-wrapper-bottom">
                                    <p className="mb-5 caption subtle">
                                    Some participants felt uncomfortable with monitoring calls, citing a power imbalance and preferring to receive a report afterward. Others found it anxiety-inducing, fearing they might need to jump in, doubting AI’s ability to grasp human conversational cues, and worrying that company reps wouldn’t be accustomed to AI pacing and cadence.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row mb-5">
                                <h5 className="col-md-4 mb-5">Design Changes</h5>
                                <div className="col-md-8 mb-5">
                                    <h6 className="mb-3">Real-time Call Push Notification Updates</h6>
                                    <h4 className="quote">
                                    I would like little checkpoints before, or confirmation along the way to know the agent is not going rogue so I don't need to be on the phone.
                                    </h4>
                                    <p className="caption mb-3 subtle">
                                    Female, 20s, CR Non-Member (P3)
                                    </p>
                                    <p>
                                    Instead of monitoring calls, users can receive verification before/during calls if they opt for it, and a summary and transcript after the call.
                                    </p>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-md-4">
                                    <p className="mb-3"><b>Before call</b></p>
                                    <p className="mb-3">
                                    User verification of personal information (order details, shipping address, etc.), rough AI script (argument/clause it is planning to bring up), opt in/out for during-call updates and verification notifications
                                    </p>
                                </div>

                                <div className="col-md-4">
                                    <p className="mb-3"><b>During call</b></p>
                                    <p className="mb-3">
                                    Pop-up notifications requiring user verification right before Wizard confirms something or gives out personal information- Wizard will put rep on hold while awaiting confirmation, and end the call after a period of time if there’s no user feedback
                                    </p>
                                </div>

                                <div className="col-md-4">
                                    <p className="mb-3"><b>After call</b></p>
                                    <p className="mb-3">
                                    A AI-generated call summary and transcript reviews key points discussed during call and suggests actionable next steps (follow up, return product, etc.)
                                    </p>
                                </div>
                            </div>

                            <p>
                            While multi-channel capability is only hinted at through phone and chat modalities, we will enhance Wizard’s adaptability across various contact channels, specifically adding in AI-drafted emails from Policy Assistant. This refinement acknowledges that resolution efficiency varies by company, making multi-channel support essential for optimizing the customer service experience.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </>
        },
        {
            name: "Product",
            content:
            <>
                <div className="theme-bg container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <h3 className="mb-5">📈 Product</h3>
                            <div className="row">
                                <h5 className="col-md-6 mb-3 theme">From CR Wizard to FairPlay:<br/>Leveling the Playing Field</h5>
                                    
                                <div className="col-md-6">
                                    <p className="mb-5">
                                    At the final stage of development, we renamed CR Wizard to FairPlay, reflecting Consumer Reports’ commitment to a transparent and fair marketplace. FairPlay empowers consumers to reclaim what they deserve, ensuring they’ll never be at a disadvantage or trapped in unjust situations with companies again. Don’t get played, get fair.
                                    <br/><br/>
                                    More than just a Figma prototype of high desirability, our cross-functional team carefully thought through the product development cycle in aspects of feasibility and viability.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <ScrollReveal>
                            <div className="row subsection-wrapper-bottom">
                                <div className="col-md-6">
                                    <h6 className="subtle">Technical Feasibility</h6>
                                    <h5 className="mb-3 theme">System Design & Implementation</h5>
                                    <p>
                                    The core functionality of FairPlay involves a <b>LLM-powered multi-agent system</b> acting on behalf of users to interact with company customer service.
                                    <br/><br/>
                                    FairPlay's feasibility is supported by established NLP frameworks for intent mapping, policy matching, and response generation. CR can enhance the system using pre-trained LLMs with prompt engineering or proprietary models fine-tuned with CR data. Additionally, FairPlay can achieve multi-channel adaptability by integrating with APIs for iMessage, calls, emails, and more—routine engineering practices widely adopted across industries.
                                    </p>
                                </div>
                                <div className="col-md-6 px-5">
                                    <img className="w-100 mb-3" src="https://64.media.tumblr.com/862db6ec2d6a4cccc85c2a492afeeaf8/c2f20281089f1d96-a2/s2048x3072/0a0e24df133d171c46e79b67e169a0571ad50a15.pnj" alt="system design module flow chart of FairPlay" />
                                    <img className="w-100 mb-3" src="https://64.media.tumblr.com/e4e21425e2076f99c190d77eac8b4a02/fefb3add0f8c5b0b-29/s1280x1920/9704f16febb53c2f1c204881607d8f381686f42f.pnj" alt="leveraging Prompt engineering" />

                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h6 className="subtle">Legal Feasibility</h6>
                            <h5 className="mb-5 theme">Legalities of Authorized Agents in Customer Service Calls</h5>
                            <h6 className="mb-3">Recording</h6>
                            <div className="row subsection-wrapper-bottom">
                                <div className="col-md-6">
                                    <p className="mb-3">
                                    Our solution records customer service interactions while complying with varying state laws on consent. While federal law requires only one-party consent, 12 states, including California and Florida, mandate all-party consent. To stay compliant, FairPlay follows industry standards by notifying the representative that the call is being monitored for compliance and quality assurance. This approach aligns with Consumer Reports' mission to ensure a fair digital marketplace for both companies and consumers.
                                    </p>
                                </div>
                                <div className="col-md-6 px-5">
                                    <p className="quote">
                                    "This call is being recorded for consumer protection purposes. <span className="theme">I am an AI agent of FairPlay by Consumer Reports, calling on behalf of customer [name].</span> The customer has authorized me to talk to you about their issue."
                                    </p>
                                    <p className="caption mb-3 subtle">
                                    FairPlay Introductory Clause During Customer Service Call

                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h6 className="mb-3">Authorized Agents</h6>
                            <div className="col-md-6 susection-wrapper-bottom">
                                <p>
                                The Uniform Electronic Transactions Act (2000) allows electronic agents to form contracts on behalf of individuals, granting automated transactions the same legal standing as human-conducted ones. Together with the AI Bill of Rights Blueprint (2022), which emphasizes user notification and transparency, these principles form FairPlay's legal foundation. FairPlay AI acts on behalf of users to request services, ensuring transparency about its actions, collected information, and progress.
                                </p>
                                {/* <img className="w-100 mb-3" src="https://64.media.tumblr.com/e4e21425e2076f99c190d77eac8b4a02/fefb3add0f8c5b0b-29/s1280x1920/9704f16febb53c2f1c204881607d8f381686f42f.pnj" alt="round 3 concept validation rainbow chart" /> */}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row subsection-wrapper align-items-top">
                                <div className="col-md-6">
                                    <h6 className="subtle">Business Viability</h6>
                                    <h5 className="mb-3 theme">Product Strategy</h5>
                                    <p>
                                    FairPlay, shaped by consumer feedback, <b>extends CR's brand from pre-purchase to a revenue-generating post-purchase service</b>. Leveraging Generative AI, it empowers users to exercise their rights throughout the customer lifecycle. Our research highlights its potential to save time, reduce cognitive load, and ease emotional distress, making it both feasible and valuable.
                                    </p>
                                </div>
                                <div className="col-md-6 px-5">
                                    <img className="no-shadow w-100 mb-5" src="https://64.media.tumblr.com/56cda0e33b2603149627e9f692ee46f7/eea453c7a519cb15-9f/s2048x3072/6b0a6a6a13ef0608d831f7211f31f5578702f98d.pnj" alt="product development roadmap of Fairplay" />
                                    <img className="no-shadow w-100 mb-3" src="https://64.media.tumblr.com/c9c2435ca14f223fb230352a401a53d8/e5b0eb0c9e43e927-91/s2048x3072/3d90214199bed0d42e56b90d339710a44d4f2363.pnj" alt="product strategy value flow" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="row subsection-wrapper-bottom align-items-center">
                                <div className="col-md-6">
                                    <h5 className="mb-3 theme">Pricing Strategy</h5>
                                    <p>
                                    During concept validation, participants favored a “pay-per-use” model, as customer service requests are infrequent but costly. We also saw potential for integrating FairPlay into the CR ecosystem, offering access through subscriptions to expand CR’s base or enhance advocacy resources. We recommended a <b>tiered “freemium” model</b>: basic features (e.g., pre-call tips) free, with premium features (e.g., AI advocacy) for subscribers or one-time purchases.
                                    </p>
                                </div>
                                <div className="col-md-6 px-5">
                                    <img className="no-shadow w-100 mb-3" src="https://64.media.tumblr.com/5d926a51c532949fd072ea1be318f455/503a692a53dfce0a-46/s2048x3072/6285c77283d01db0c60bd8342020c364ce2fe156.pnj" alt="tiered business model pricing table" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </>
        },
        {
            name: "Takeaways",
            content:
            <div className="secondary-bg container">
                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <div className="row align-items-center">
                            <h3 className="col-md-8 mb-3">💭 Takeaways</h3>
                            <div className="col-md-4 px-5">
                                <img className="no-shadow w-100 mb-3" src="https://64.media.tumblr.com/6f255119cf478405799199190db5926c/4c1bbf027d18d09f-e5/s1280x1920/5f38f45c2f42555da978ff99d74d22cab97cf619.pnj" alt="tiered business model pricing table" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h6 className="mb-3">Embrace ambiguity; that's the fun of it.</h6>
                                <p>
                                At the start of this project, the broad scope of possibilities in the consumer journey felt a bit overwhelming to me. However, I learned to embrace this uncertainty, appreciating the freedom it allowed for exploration, and felt a real sense of accomplishment once we found our focus.
                                </p>
                            </div>

                            <div className="col-md-6 mb-5">
                                <h6 className="mb-3">Be lean. Be quick. But also stay patient.</h6>
                                <p>
                                The lean startup mantra, “fail fast, succeed faster,” encourages quick iteration, but patience is key when innovating. During our concept validation, progress often felt circular, as exciting ideas required careful execution for effective testing. Pioneering takes time, so persistence is crucial when facing challenges.
                                </p>
                            </div>

                            <div className="col-md-6 mb-5">
                                <h6 className="mb-3">Practice radical candor when communicating.</h6>
                                <p>
                                A key lesson from this project was the value of honest, caring communication. In a cross-functional team, disagreements are common, but practicing “radical candor” helped me empathize, speak clearly, and communicate authentically while prioritizing respect and understanding.
                                </p>
                            </div>

                            <div className="col-md-6 mb-5">
                                <h6 className="mb-3">Self-reliance is good; seek support when you need to.</h6>
                                <p>
                                I used to take on extra tasks simply because I could do them efficiently, but overloading myself affected my health. This taught me the value of delegating—not just to protect my well-being but to foster team growth, trust, and stronger dynamics.
                                </p>
                            </div>
                        </div>
                        <p className="caption subtle">
                                note: The work and knowledge gained from this project are only intended to be applicable to the company and context involved and there is no suggestion or indication that it may be useful or applicable to others. This project was conducted for educational purposes and is not intended to contribute to generalizable knowledge.
                            </p>
                    </ScrollReveal>
                </div>
            </div>
        }
    ];

    items.map((item, key) => {
        item.id = key;
        item.ref = createRef(null);
    });

    const img_src = 'https://i.imgur.com/yXMeC7V.jpeg';
  
    return (
        <div id="Fairplay">
            <ProgressBar color="#008075" items={items} activeItem={activeItem} handleClick={handleSubsectionClick} />
            <div className="topic-main-wrapper">
                <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
                {items.map((item) => {
                    return (
                        <Subsection
                        id={item.id}
                        subsectionRef={item.ref}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        pageHeight={pageHeight}
                        content={item.content} />
                    );
                })}

                <ScrollReveal>
                    <ProjectRec projects={projects} moreLink={"/Works/design"} />
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Fairplay;

const cards = [
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/1.png",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/2.png",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/3.png",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/4.png",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/5.png",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/works/UXUI/fluffy/design/4-prototype/3-hifi/6.png",
        title: "Title 1",
        id: 6,
    },
];
// link, data
const projects = [
    {
        'link': '/Works/design/Ford-Vision',
        'data': {
            'title': 'Ford Vision', 
            'id': 'Ford-Vision',
            'tags': ['Interaction Design Fundamentals', 'UX', 'Autonomous Vehicle'],
            'desc': 'Easy, Delightful Beginner\'s E-moped Experience',
            'img': 'https://live.staticflickr.com/65535/53794621302_83556ca979_o.png',
            'ph': 'https://live.staticflickr.com/65535/53794621302_83556ca979_o.png',
        }
    },
    {
        'link': '/Works/design/2Done',
        'data': {
            'title': '2Done', 
            'id': '2Done',
            'tags': ['UX', 'UI', 'Procrastination', 'Anxiety', 'MentalHealth'],
            'desc': 'Gamified to-do list desktop app for procrastination',
            'img': 'https://live.staticflickr.com/65535/52515681442_5ac6984461_k.jpg',
            'ph': 'https://live.staticflickr.com/65535/52515681442_301610b0ec_m.jpg',
        }
    },
];