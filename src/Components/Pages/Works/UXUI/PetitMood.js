import { useState, useCallback } from "react";
import { Link, Outlet } from "react-router-dom";
import ReactPlayer from "react-player";
import ImageViewer from 'react-simple-image-viewer';

function PetitMood () {
    let img = '/works/UXUI/petit-mood/cover.png';
    const images = [
        "/works/UXUI/petit-mood/poster.png",
    ];
    
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />

            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h2 className="mb-3">Petit Mood: AR Pet Game as Negative Emotion Reliever for Depressed University Students</h2>
                            <h3>Tags: HCI, UX, AR, Game Design, Mental Health</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>3 months</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Role</h3>
                            <ul>
                                <li>First author</li>
                                <li>Designer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Tool</h3>
                            <ul>
                                <li>Miro</li>
                                <li>MAKAR</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-4">Designing user interview questions</li>
                                <li className="col-md-4">Conducting literature review</li>
                                <li className="col-md-4">Leading group discussion</li>
                                <li className="col-md-4">Designing visuals, e.g. UI flow & icons</li>
                                <li className="col-md-4">Designing the presentation poster</li>
                                <li className="col-md-4">Writing the paper manuscript</li>
                            </ul>
                         </div>
                    </div>
                    <div className="row mb-5">
                        <ul className="col recog-list">
                            <li className="mb-3">Pei-Wen Huang, Ching-Shiuan Chen, Yu-Hsuan Chang, Tzu-Pin Lo, Hsuan-Tung Yeh, and Weijane Lin. 2022. 
                            Poster: Petit Mood: AR Pet Game as Negative Emotion Reliever for Depressed Univer- sity Students. 
                            Presented at TAICHI'22: AI for Equity, Wellbeing & Sustainability. </li>
                            <li className="mb-3">Poster paper accepted in <b>TAICHI 2022</b>, 
                                the annual conference held by Taiwanese Association of Computer-Human Interaction.</li>
                            <li className="mb-3">Poster invited to the poster/demo session in <b>CSCW 2022</b>, 
                                Computer-Supported Cooperative Work and Social Computing.</li>
                        </ul>
                    </div>

                    

                    <h3 className="heading-1 my-5">Demo Video</h3>
                    <div className="row ">
                        {/* <div className="col poster">
                            {images.map((src, index) => (
                                <img
                                className="poster-img"
                                src={ src }
                                onClick={ () => openImageViewer(index) }
                                width="300px"
                                key={ index }
                                alt="Petit Mood poster"
                                />
                            ))}
                            {isViewerOpen && (
                                <ImageViewer
                                src={ ["/works/UXUI/petit-mood/poster.png"] }
                                currentIndex={ 0 }
                                disableScroll={ false }
                                closeOnClickOutside={ true }
                                onClose={ closeImageViewer }
                                />
                            )}
                            <p className="mt-3 table-caption">Click on image to view in full size</p>
                        </div> */}
                        <div className="col mb-3 d-flex flex-column align-items-center">
                            <ReactPlayer
                                url="https://youtu.be/3X919cITq4M"
                            />
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
            <div className="bg-1">
                <div className="container">
                    <div className="topic-container py-3">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="heading-1 my-5">Introduction </h3>
                                <p className="col-md-11">University students are the high-risk population to experience mental disturbance, such as depression disorder and anxiety disorder. Although most universities provide counseling services, along with other treatments available outside of school, the majority of them remain inaccessible due to unawareness of services or insurance coverage or skepticism about treatment effectiveness. To approach the conundrum, previous studies adopted clinic interventions of animal-assisted intervention (AAI) to reduce students’ measured health negative outcomes. However, not all schools have established AAIs; furthermore, some are simply not able to interact with animals because of allergy or other reasons.
<br/><br/>Motivated by such issues, this study intended to design and develop <b>a digital solution using mobile AR to help relieve negative emotions for university students self-use</b> to provide university students with an accessible means to understand and treat their mental health with care.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img className="w-100 my-5" src="/works/UXUI/petit-mood/design-flow.png" alt="design flow"/>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="topic-container py-3">
                    <h3 className="heading-3 color-dark mt-5">Methods</h3>
                    <h3 className="heading-1 my-3">Needs inquiry</h3>
                    <div className="mb-0">
                        <ul className="pt-3 mb-5 list-disc">
                            <li>Online small-scale survey: 55 valid responses from university students (45 females, 10 males)</li>
                            <li>User interview: 3 survey respondents (2 females, 1 male, 1 out of 3 keep pets)</li>
                        </ul>
                        <div className="row statistics-container my-5">
                            <div className="col-md-6 d-flex flex-column align-items-center">
                                <h2>85.7%</h2>
                                <p>of the respondents have felt depressed in the past three months</p>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-center">
                                <h2>8.9%</h2>
                                <p>diagnosed with depression or anxiety disorder</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div className="m-4">
                                <div className="interview-box-container d-flex justify-content-start mb-5">
                                    <div className="w-80 d-flex align-items-center interview-box px-3">
                                        <img className="p-4" style={{width: "150px"}} src="/works/UXUI/petit-mood/icons/icon-sad.png" alt="sad puppy icon"/>
                                        <h2 className="heading-2 m-4">“When I perform poorly in exams, I get so depressed that I find it hard to function through the day.”</h2>
                                    </div>
                                </div>
                                <div className="interview-box-container d-flex justify-content-end mb-5">
                                    <div className="w-80 d-flex align-items-center interview-box px-3 flex-row-reverse">
                                        <img className="p-4" style={{width: "150px"}} src="/works/UXUI/petit-mood/icons/icon-med.png" alt="meditating puppy icon"/>
                                        <h2 className="heading-2 m-5">“I think in talking to friends, it is the act of describing my emotions that really washes away my frustrations.”</h2>
                                    </div>
                                </div>
                                <div className="interview-box-container d-flex justify-content-start mb-5">
                                    <div className="w-80 d-flex align-items-center interview-box px-3">
                                        <img className="p-4" style={{width: "150px"}} src="/works/UXUI/petit-mood/icons/icon-happy.png" alt="happy puppy icon"/>
                                        <h2 className="heading-2 m-4">“I enjoy playing with my pets after studying for a long time to kind of help me relax a bit.”</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#FEEEE3", width: "100%"}}>
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="heading-1 my-5">Primary Persona</h3>
                        <div className="row">
                            <div className="col-md-3 d-flex flex-column align-items-center">
                                <img className="w-75" src="/works/UXUI/petit-mood/persona-pic.png" alt="persona profile: Tzu-Ting Chang" />
                            </div>
                            <div className="col-md-9 d-flex flex-column justify-content-center">
                                <h4 className="mb-3">Tzu-Ting Chang</h4>
                                <h5 className="description">female • 20 year-old • student</h5>
                                <p>Tzu-Ting is a college student with great fond of animals.<br/> Her main source of
                                stress comes from academic workload.<br/>
                                With the stress accumulating and no
                                emotional outlets, she often
                                experiences insomnia at night.</p>
                                <h2 className="heading-1 text-bold mb-4">“No one ever cares to help me ease this pain..”</h2>
                            </div>
                        
                            <div className="row pl-4 py-4">
                                <div className="col-md-8 mb-4">
                                    <h4 className="mb-3">Goals</h4>
                                    <ul className="list-disc">
                                        <li>to release the  stress accumulated from academic pressure</li>
                                        <li>to fall asleep at night with reduced severity of anxiety</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <h4 className="mb-3">Motivations</h4>
                                    <ul className="list-disc">
                                        <li >
                                            <div className="row">
                                                <p className="col mb-0">Animal-related</p>
                                                <span className="col">✦ ✦ ✦ ✦</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <p className="col mb-0">Unobtrusive</p>
                                                <span className="col">✦ ✦ ✦ ✦ ✦</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <p className="col mb-0">Interactive</p>
                                                <span className="col">✦ ✦ ✦ ✦</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col mb-4">
                                    <h4 className="mb-3">Pain Points</h4>
                                    <ul className="list-disc">
                                        <li>gets depressed frequently and wants to understand the reason behind it</li>
                                        <li>unable to find an ideal listener who gives appropriate feedback</li>
                                        <li>experiences <b>insomnia</b> at night due to anxiety</li>
                                        <li><b>cannot keep a companion animal</b> due to allergy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 design-statement d-flex flex-column align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <h2>✼</h2>
                            </div>
                            <div>
                                <h3>
                                Our design will specifically aim to tackle indoor use cases like this, 
                            and will provide means to <b>reduce stress and anxiety</b> while guiding the user to a <b>good night sleep</b>.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="topic-container py-3">
                    <h3 className="heading-3 color-dark mt-5">Prototype Design</h3>
                    <h3 className="heading-1 my-3">Feature Proposal</h3>
                    <div className="mt-5 topic-desc-container color-gray">
                        <h3>Implementation Tool</h3>
                        <ul>
                            <li>MAKAR</li>
                        </ul>
                    </div>
                    <p>
                    Based on the literature reviews and needs inquiry, 
                    several design features including the appearance and behaviors of the AR pet, 
                    and the functionality of mental facilitation were proposed for internal review by the design group. 
                    </p>
                    <div id="petit-table-1" className="table-container d-flex flex-column align-items-center">
                        <div className="w-sizer">
                            <div className="w-100 row table-header">
                                <p className="col-md-4 my-2">Category</p>
                                <p className="col-md-8 my-2">Features</p>
                            </div>
                            <div className="table-body">
                                <div className="w-100 row">
                                    <p className="col-md-4 my-2">Basic</p>
                                    <p className="col-md-8 my-2"><b>Status scores of fullness/cleanness/happiness</b></p>
                                </div>
                                <div className="w-100 row">
                                    <p className="col-md-4 my-2">Performance</p>
                                    <p className="col-md-8 my-2">Pet growth development, <b>Pet interaction upon tapping</b></p>
                                </div>
                                <div className="w-100 row">
                                    <p className="col-md-4 my-2">Excitement</p>
                                    <p className="col-md-8 my-2"><b>Pet digesting the dairy</b>, Producing treasures after digesting negativity,
                                    <b>Incorporation of approach-avoidance bias modification training (AAMT), Meditation practice, 
                                        Popping bubble while cleaning the pet</b>, Personalization of the pet, Outdoor games for dog-walking,
                                        Face recognition game to encourage smiling</p>
                                </div>
                                <div className="w-100 row">
                                    <p className="col-md-4 my-2">Indifferent</p>
                                    <p className="col-md-8 my-2">
                                        Environment recognition, Choosing word of encouragement, Finding hidden snacks for pet
                                    </p>
                                </div>
                            </div>
                            <div className="table-caption mt-3">
                            ▲ Features rated based on Kano's quality control model. Features in bold were selected for implementation.
                            </div>
                        </div>
                    </div>
                    <h3 className="heading-1 mt-5 mb-3">Implementation</h3>
                    Petit Mood as a game had inherent status scores regarding each category, 
                    therefore the player needs to play the mini game in all categories to boost the pet’s status scores.
                    <div className="my-5 row">
                        <div className="col-md-4">
                            <h3 className="heading-3">Feeding</h3>
                            <ul>
                                <li>AAMT pet food choosing</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3 className="heading-3">Cleaning</h3>
                            <ul>
                                <li>Bubble bath</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3 className="heading-3">Mood</h3>
                            <ul>
                                <li>Diary catharsis</li>
                                <li>Meditation practice</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-100 mb-5 d-flex flex-column align-items-center">
                        <img className="w-75" src="/works/UXUI/petit-mood/fig2.png" alt="working prototype" />
                    </div>


                    <h3 className="mt-5 mb-3 heading-3">Feeding</h3>
                    <p>
                    Inspired by the gamified AAMT mobile application for cognitive bias modification [21, 23, 33, 39], this mini game requires user to <b>recognize the positive stimuli to approach it while avoiding the negative one</b>.
The stimuli are translated to healthy diet and junk food in the feeding scenario, each paired with a positive or negative statement made by the personified pet about itself. By identifying the positive stimulus for the pet, the player can <b>learn to apply the similar mindset to themselves</b>. 
                    </p>

                    <h3 className="mt-5 mb-3 heading-3">Cleaning</h3>
                    <p>
                    For this mini-game, the player needs to clean up the pet with a bubble bath. After choosing their preferred essential oil to add in the AR pet’s bathtub, the pet will enjoy the bubble bath while the player can <b>pop the bubbles</b> arising from the bath. The act of popping bubbles is translated from the popular activity of popping Bubble Wrap to simulate a <b>repetitive, nervous motion that helps release tension and reduce stress</b> [11, 12].
                    </p>

                    <h3 className="mt-5 mb-3 heading-3">Mood</h3>
                    <p className="mb-4">
                    This category focuses on daily activities that are effective in helping the player to make peace with their emotions. Two mini games constitute this category: Diary Catharsis and Meditation. 
                    </p>
                    <h3 className="heading-4">Mini Game 1- Diary Catharsis</h3>
                    <p className="mb-4">
                    The player is encouraged to write a diary to express their feelings and frustrations. The diary itself is an incarnation of the player’s stress and anxiety [32, 36, 41], which the pet will gobble up, symbolizing that the pet helps its owner digest and release the negative emotions. 
                    </p>
                    <h3 className="heading-4">Mini Game 2- Meditation Practice</h3>
                    <p className="mb-4">
                    The pet will guide the player through a deep breathing meditation [28, 30], accompanied by background music to create a relaxing environment. 
                    </p>
                </div>
            </div>

            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="heading-3 color-dark mt-5">Preliminary Findings</h3>
                        <h3 className="heading-1 my-3">Comparative Analysis </h3>
                        <div className="w-100 my-5 d-flex flex-column align-items-center">
                            <img className="w-75" src="/works/UXUI/petit-mood/comp-anal.png" alt="comparative analysis with 24 existing mobile pet games" />
                        </div>
                        <p>
                        A survey comparing 24 mobile pet games with Petit Mood was conducted to understand the advantages of this game. 
                        Similar to the 24 games, Petit Mood has features regarding pet’s basic needs such as feeding, cleaning, 
                        and a feedback feature of pet interaction. The wanting features compared with other games include status bars, 
                        illustrated pet encyclopedia, and coins and shops. The overlapping features are mostly pet-centric, while the lacking ones are concerned with game design.
                        </p>

                        <h3 className="heading-1 mt-5 mb-3">SWOT Analysis </h3>
                        <div className="row w-100">
                            <p className="col-md-6">
                            Results of the SWOT analysis suggested apparent strengths of Petit Mood in <b>a clear goal to help users relieve negative emotions, the use of AR technology to simulate an immersive environment, dialogues relevant to the subject of mood, and a novel yet light gaming experience aimed at reducing stress</b>. These strengths validate the major objective of Petit Mood to facilitate users’ awareness and relief of their mental states. In addition, Petit Mood not only has similar basic functionalities to most existing pet games, but also provides users with more immersive and interactive spatial experiences through the application of AR, which breaks through the mostly flat and narrative interfaces and interaction. 
                            </p>
                            <div className="col-md-6 d-flex flex-column align-items-center">
                                <img className="w-100" src="/works/UXUI/petit-mood/table3.png" alt="SWOT analysis of Petit Mood" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container py-3">
                    <h3 className="heading-1 mt-5 my-3">Usability Evaluation</h3>
                    <div className="mt-5 topic-desc-container color-gray">
                        <h3>Participants</h3>
                        <ul>
                            <li>12 current university students</li>
                        </ul>
                    </div>
                    <p>
                    A usability test with assigned tasks and questionnaires was conducted as the evaluation of Petit Mood and its effect on relieving negative emotions. 
                    It should be noted that the questionnaires are intended to elicit emotional responses in the respondants, 
                    thus the objectiveness of the results may be tainted to an extent.
                    </p>
                    <h3 className="heading-2 mt-5 mb-3">Results</h3>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 d-flex flex-column align-items-center">
                            <img className="w-100" src="/works/UXUI/petit-mood/table4.png" alt="Usability test results" />
                        </div>
                        <div className="col-md-6">
                            <div className="py-5 result-statement d-flex flex-column align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <h2>✼</h2>
                                </div>
                                <div>
                                    <h3>
                                    It was found that <b>relieving tension and anxiety and relieving depression or slump</b> received highest scores with lowest standard deviations, providing supporting evidence that Petit Mood could relieve users’ negative emotions.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        <h3 className="heading-3 color-gray mt-5">References</h3>
                        <p className="references">
                        [1] Fraser Anderson, Michelle Annett, Walter F. Bischof, and Pierre Boulanger. 2010. Virtual equine assisted therapy. In 2010 IEEE Virtual Reality Conference (VR). 255–256. https://doi.org/10.1109/VR.2010.5444776 
[2] Sandra Barker, Randolph Barker, Nancy McCain, and Christine Schubert. 2016. A Randomized Cross-over Exploratory Study of the Effect of Visiting Therapy Dogs on College Student Stress Before Final Exams. Anthrozoös 29 (01 2016), 35–46. https://doi.org/10.1080/08927936.2015.1069988 
[3] Sahara Byrne, Geri Gay, J. Pollack, Amy Gonzales, Daniela Retelny, Theodore Lee, and Brian Wansink. 2012. Caring for Mobile Phone-Based Virtual Pets can Influence Youth Eating Behaviors. Journal of Children and Media 6 (02 2012), 83–99. https://doi.org/10.1080/17482798.2011.633410 
[4] Pressley Chakales, Jacklyn Locklear, and Tracy Wharton. 2020. Medicine and Horsemanship: The Effects of Equine-assisted Activities and Therapies on Stress and Depression in Medical Students. Cureus 12 (02 2020). https://doi.org/10.7759/cureus.6896 
[5] Samar Chakma, Taswib Islam, Md Shahjalal, and Dipak Mitra. 2021. Depression among pet owners and non-pet owners: a comparative cross-sectional study in Dhaka, Bangladesh. F1000Research 10 (07 2021), 574. https://doi.org/10.12688/f1000research.53276.1 
[6] Hsi-Chung Chen, Chia-Hsuan Wu, Yue-Joe Lee, Shih-Cheng Liao, and Ming- Been Lee. 2005. Validity of the five-item Brief Symptom Rating Scale among subjects admitted for general health screening. Journal of the Formosan Medical Association = Taiwan yi zhi 104, 11 (November 2005), 824—829. 
[7]  Feng-Kuang Chiang, Xiaojing Shang, and Lu Qiao. 2022. Augmented reality in vocational training: A systematic review of research and applications. Computers in Human Behavior 129 (04 2022), 107125. https://doi.org/10.1016/j.chb.2021.107125 
[8]  John P. Chin, Virginia A. Diehl, and Kent L. Norman. 1988. Development of an Instrument Measuring User Satisfaction of the Human-Computer Interface. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (Washington, D.C., USA) (CHI ’88). Association for Computing Machinery, New York, NY, USA, 213–218. https://doi.org/10.1145/57167.57203 
[9]  Myeon-Gyun Cho. 2021. A Study on Augmented Reality-based Virtual Pets for the Elderly Living Alone. In 2021 International Conference on Information and Communication Technology Convergence (ICTC). IEEE, 1280–1283. https: //doi.org/10.1109/ICTC52510.2021.9620928 
[10]  Emily Cooke, Claire Henderson-Wilson, Elyse Warner, and Anthony LaMontagne. 2022. Animal-assisted interventions in universities: a scoping review of implementation and associated outcomes. Health Promotion International (01 2022). https://doi.org/10.1093/heapro/daac001 
[11]  Kathleen M. Dillon. 1992. Popping Sealed Air-Capsules to Reduce Stress. Psycho- logical Reports 71, 1 (1992), 243–246. https://doi.org/10.2466/pr0.1992.71.1.243 
[12]  David Eilam, Rony Izhar, and Joel Mort. 2011. Threat detection: Behavioral practices in animals and humans. Neuroscience & Biobehavioral Reviews 35, 4 (2011), 999–1006. https://doi.org/10.1016/j.neubiorev.2010.08.002 Threat-Detection and Precaution: Neurophysiological, Behavioral, Cognitive and Psychiatric Aspects. 
[13]  Daniel Eisenberg, Ezra Golberstein, and Sarah E. Gollust. 2007. Help-Seeking and Access to Mental Health Care in a University Student Population. Medical Care 45, 7 (2007), 594–601. http://www.jstor.org/stable/40221479 [14]  Catherine K Ettman, Salma M Abdalla, Gregory H Cohen, Laura Sampson, Patrick M Vivier, and Sandro Galea. 2020. Prevalence of depression symptoms in US adults before and during the COVID-19 pandemic. JAMA network open 3, 9 (2020), e2019686–e2019686. [15]  Eileen B. Folse, Carolyn C. Minder, Melanie J. Aycock, and Ronald T. Santana. 1994. Animal-Assisted Therapy and Depression in Adult College Students. Anthrozoös 7, 3 (1994), 188–194. https://doi.org/10.2752/089279394787001880 [16]  Rebecca Johnson, Richard Meadows, Jennifer Haubner, and Kathleen Sevedge. 2008. Animal-Assisted Activity Among Patients With Cancer: Effects on Mood, Fatigue, Self-Perceived Health, and Sense of Coherence. Oncology nursing forum 35 (04 2008), 225–32. https://doi.org/10.1188/08.ONF.225-232 
[17]  Ezgi Karadag, Sevgin Samancioglu, Dilek Ozden, and Ercan Bakir. 2017. Effects of aromatherapy on sleep quality and anxiety of patients. Nursing in critical care 22, 2 (2017), 105–112. 
[18]  Katherine Kruger and James Serpell. 2006. Animal-Assisted Interventions in Mental Health: Definitions and Theoretical Foundations. Vol. 2. 21–38. 
[19]  Ming-Been Lee, Shih-Cheng Liao, Yue-Joe Lee, Chia-Hsuan Wu, Mei-Chih Tseng, Shur-Fen Gau, and Chi-lun Rau. 2003. Development and verification of validity and reliability of a short screening instrument to identify psychiatric morbidity. Journal of the Formosan Medical Association 102, 10 (2003), 687–694. 
[20]  Chaolan Lin, Travis Faas, Lynn Dombrowski, and Erin Brady. 2017. Beyond cute: exploring user types and design opportunities of virtual reality pet games. In Proceedings of the 23rd ACM Symposium on Virtual Reality Software and Technology. 1–10. https://doi.org/10.1145/3139131.3139132 
[21]  Philip Lindner, William Hamilton, Alexander Miloff, and Per Carlbring. 2019. How to Treat Depression With Low-Intensity Virtual Reality Interventions: Perspectives on Translating Cognitive Behavioral Techniques Into the Virtual Reality Modality and How to Make Anti-Depressive Use of Virtual Reality–Unique Experiences. Frontiers in Psychiatry 10 (2019), 792. https://doi.org/10.3389/fpsyt.2019.00792 
[22]  I-Cheng Lu, Mei-Chu Yen Jean, Sio-Meng Lei, Hsiang-Huo Cheng, Jung-Der Wang, et al. 2011. BSRS-5 (5-item Brief Symptom Rating Scale) scores affect every aspect of quality of life measured by WHOQOL-BREF in healthy workers. Quality of Life Research 20, 9 (2011), 1469–1475. 
[23]  Christian Aljoscha Lukas, Bjoern Eskofier, and Matthias Berking. 2021. A Gamified Smartphone-Based Intervention for Depression: Randomized Controlled Pilot Trial. JMIR Ment Health 8, 7 (20 Jul 2021), e16643. https://doi.org/10.2196/16643 
[24]  Heewon Na, Soyeon Park, and Suh-Yeon Dong. 2022. Mixed Reality-Based Interaction between Human and Virtual Cat for Mental Stress Management. Sensors22(022022). https://doi.org/10.3390/s22031159 
[25] Yuko Nakano, Masato Matsushima, Azusa Nakamori, Junshiro Hiroma, Eiji Matsuo, Hidetaka Wakabayashi, Shuhei Yoshida, Hiroko Ichikawa, Makoto Kaneko, Rieko Mutai, Yoshifumi Sugiyama, Eriko Yoshida, and Tetsuya Kobayashi. 2019. Depression and anxiety in pet owners after a diagnosis of cancer in their pets: A cross-sectional study in Japan. BMJ Open 9 (02 2019), bmjopen–2018. https://doi.org/10.1136/bmjopen-2018-024512 
[26]  Daiki Namekata and Mariko Yamamoto. 2021. Companion Animal Ownership and Mood States of University Students Majoring in Animal Sciences during the COVID-19 Pandemic in Japan. Animals 11 (102021), 2887. https://doi.org/10.3390/ani11102887 
[27] Nahal Norouzi, Gerd Bruder, Jeremy Bailenson, and Greg Welch. 2019. Investigating Augmented Reality Animals as Companions. In 2019 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct). IEEE, 400–403. https://doi.org/10.1109/ISMAR-Adjunct.2019.000-1 
[28] Jason Ong and David Sholtes. 2010. A Mindfulness-Based Approach to the Treatment of Insomnia. Journal of clinical psychology 66 (11 2010), 1175–84. https://doi.org/10.1002/jclp.20736 
[29] Mikaella E. Patsali, Danai-Priskila V. Mousa, Eleni V.K. Papadopoulou, Konstantina K.K. Papadopoulou, Chrysi K. Kaparounaki, Ioannis Diakogiannis, and Konstantinos N Fountoulakis. 2020. University students’ changes in mental health status and determinants of behavior during the COVID-19 lockdown in Greece. Psychiatry Research 292 (2020), 113298. https://doi.org/10.1016/j.psychres.2020.113298 
[30] Gina Paul, Barb Elam, and Steven J. Verhulst. 2007. A Longitudinal Study of Students’ Perceptions of Using Deep Breathing Meditation to Reduce Testing Stresses. Teaching and Learning in Medicine 19, 3 (2007), 287–292. https://doi.org/10.1080/10401330701366754 PMID: 17594225. 
[31] James Pennebaker. 1997. Writing About Emotional Experiences as a Therapeutic Process. Psychological Science - PSYCHOL SCI 8 (05 1997), 162–166. https://doi.org/10.1111/j.1467-9280.1997.tb00403.x 
[32] James Pennebaker. 1999. Disclosure and health: an interview with James W. Pennebaker. Interview by Harris Dienstfrey. Advances in mind-body medicine 15 (02 1999), 161–3, 166. 
[33] Arianna Prudenzi, Brendan Rooney, Giovambattista Presti, Marco Lombardo, Daniele Lombardo, Concetta Messina, and Louise Mchugh. 2019. Testing the effectiveness of virtual reality as a defusion technique for coping with unwanted thoughts. Virtual Reality 23 (06 2019). https://doi.org/10.1007/s10055-018-0372-1 
[34] Hannah Ritchie Saloni Dattani and Max Roser. 2021. Mental Health. Our World in Data (2021). https://ourworldindata.org/mental-health 
[35] Matthew J. Savage, Ruth James, Daniele Magistro, James Donaldson, Laura C. Healy, Mary Nevill, and Philip J. Hennis. 2020. Mental health and movement behaviour during the COVID-19 pandemic in UK university students: Prospective cohort study. Mental Health and Physical Activity 19 (2020), 100357. https: //doi.org/10.1016/j.mhpa.2020.100357 
[36] Carol Smith, Mary Leenerts, and Byron Gajewski. 2003. A Systematically Tested Intervention for Managing Reactive Depression. Nursing research 52 (11 2003), 401–9. https://doi.org/10.1097/00006199-200311000-00008 
[37] Lily Tsai and David Kaufman. 2014. Interacting with a Computer-Simulated Pet: Factors Influencing Children’s Humane Attitudes and Empathy. Journal of Educational Computing Research 51 (09 2014), 145–161. https://doi.org/10.2190/EC.51.2.a 
[38] SESAR 3 Joint Undertaking. 2012. Questionnaire for User Interface Satisfaction (QUIS). Retrieved Jul 4, 2022 from https://ext.eurocontrol.int/ehp/?q=node/1611 
[39] Janna N. Vrijsen, Verena S. Fischer, Bernhard W. Müller, Norbert Scherbaum, Eni S. Becker, Mike Rinck, and Indira Tendolkar. 2018. Cognitive bias modification as an add-on treatment in clinical depression: Results from a placebo-controlled, single-blinded randomized control trial. Journal of Affective Disorders 238 (2018), 342–350. https://doi.org/10.1016/j.jad.2018.06.025 [40] Xiaomei Wang, Sudeep Hegde, Changwon Son, Bruce Keller, Alec Smith, and Farzan Sasangohar. 2020. Investigating Mental Health of US College Students During the COVID-19 Pandemic: Cross-Sectional Survey Study. J Med Internet Res 22, 9 (17 Sep 2020), e22817. https://doi.org/10.2196/22817 
[41] Daniel Wessel, Helke Kohlbrandt, and Tilo Mentler. 2019. Human-Centered Development of an Activity Diary App for People with Depression. In Proceedings of Mensch und Computer 2019. 427–431. https://doi.org/10.1145/3340764.3344434
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default PetitMood;