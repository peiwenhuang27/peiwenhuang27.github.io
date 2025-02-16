import Iframe from "react-iframe";

import ProjectRec from "../../../ProjectRec";
import { ScrollReveal } from "../../../Helpers/SmoothScroll";

var Latex = require("react-latex");

function TourBot({ pageHeight, handleSubsectionClick, projRecLink, projRecs }) {
    const img_src = 'https://live.staticflickr.com/65535/52516160951_2fcbbec56d_k.jpg';
    const form1 = `$$\\text{class weight}=\\frac{\\text{\\# of samples NOT in class \\it{i}}}{\\text{\\# of samples in class \\it{i}}}, \\alpha=0.05$$`;
    const form2 = `$$\\text{recall-adjusted class weight}=\\frac{\\text{initial class weight for category \\it{i}}}{\\text{recall for category \\it{i}} + C}, C=0.8$$`;

    return (
        <div id="TourBot">
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <ScrollReveal>
                        <div className="topic-title-container mb-5">
                                <h3 className="mb-1 color-dark text-bold date">April 2021-December 2021</h3>
                                <h2 className="mb-1">TourBot: Task-oriented Chatbot on Travel Recommendation</h2>
                                <h3 className="theme mb-5">Data Science, Natural Language Processing, Deep Learning, Frontend Engineering, UI Design</h3>
                                <p className="mb-5">
                                    TourBot is a NLP chatbot for travel recommendation in Beijing. Utilizing a task-oriented dialogue system framework 
                                    and deployed on a web interface, TourBot makes travel planning easier by recommending restaurants, attractions or hotels and visualizing your itinerary.
                                </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="section-wrapper row mb-5">
                            <div className="topic-desc-container col-md-4 mb-5">
                                <h6 className="theme mb-3">Duration</h6>
                                <ul>
                                    <li>8 months</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 mb-5">
                                <h6 className="theme mb-3">Role</h6>
                                <ul>
                                    <li>Lead UI Designer</li>
                                    <li>NLP Engineer</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 mb-5">
                                <h6 className="theme mb-3">Team</h6>
                                <ul>
                                    <li>6 people</li>
                                </ul>
                            </div>
                            <div className="topic-desc-container col-md-4 mb-5">
                                <h6 className="theme mb-3">Tool</h6>
                                <ul className="row">
                                <li className="">PyTorch</li>
                                    <li className="">ReactJS, Ant Design</li>
                                    <li className="">Axios, Django</li>
                                    <li className="">GCP, Google Map API</li>
                                    
                                </ul>
                            </div>
                            <div className="topic-desc-container col mb-5">
                                <h6 className="theme mb-3">Responsibilities</h6>
                                <ul className="row">
                                    <li className="col-md-6">Surveying Chatbot Papers</li>
                                    <li className="col-md-6">Reporting to Research Advisor Weekly</li>
                                    <li className="col-md-6">Supervising Project Schedule</li>
                                    <li className="col-md-6">Chatbot Model Training</li>
                                    <li className="col-md-6">Feature Ideation</li>
                                    <li className="col-md-6">UI Design</li>
                                    <li className="col-md-6">UI & Backend Interaction Implementation</li>
                                    <li className="col-md-6">System Prototype Demo</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <ScrollReveal>
                <div className="theme-bg">
                    <div className="container">
                        <div className="topic-container section-wrapper">
                            <h3 className="mb-5">💻 Demo</h3>
                            <div className="d-flex flex-column align-items-center">
                                <div className="w-sizer">
                                    <div className="responsive-iframe mb-3 d-flex flex-column align-items-center">
                                        <Iframe className="flexible-iframe" src="https://www.youtube.com/embed/RcP-jxfHA-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <div className="container">
                <ScrollReveal>
                    <div className="topic-container subsection-wrapper">
                        <h3 className="my-5">📚 Background</h3>
                        <div className="row flex-row-reverse">
                            <div className="col-lg-4 mb-3 d-flex flex-column align-items-center">
                                <img className="w-sizer" src="/works/Frontend/tourbot/SVG/chatbot.svg" alt="chatbot icon" />
                            </div>
                            <div className="col-lg-8">
                                <p className="mb-5">
                                    As much as Internet makes travel information more accessible than ever, the channel of information input has also grown disorganized, increasing the retrieval time for user to obtain desired information. For instance, a customer needs to go through several travel blogs or agencies, compare among them to arrange their own itinerary, and search for individual hotels and restaurants to make reservations. 
                                    <br/>
                                    To resolve this issue and attract customers, many travel agencies have developed <b className="">Task-Oriented Chatbot </b> to directly face customers and provide services such as travel recommendation or hotel booking.
                                    <br/>
                                </p>
                                <h6 className="mb-3">Task-Oriented Dialogue</h6>
                                <p className="mb-5">
                                A task-oriented dialogue is a dialogue in which its primary objective is to accomplish certain tasks through the conversation between the system and the user, as the system detects user intention and guide user to answer its questions to extract information required to complete the task.<br/>
            However, most existing chatbots systems are rule-based, providing limited flexibility to handle varying user queries. They usually could only tasks in a single domain (e.g. hotel, restaurant, or transportation). It would be costly for service providers to manually define various chatbot actions in response to user queries in different domains or with different intentions.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
                    
                <div className="topic-container subsection-wrapper">
                    <ScrollReveal>
                        <h3 className="my-5">🎯 Objective</h3>
                        <h4 className="subsection-wrapper-bottom statement">
                        We aim to utilize Natural Language Processing to construct a <br/>cross-domain, task-oriented Deep Learning chatbot accessed by web interface,<br/> providing travel recommendation for itinerary planning reference.
                        </h4>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="row subsection-wrapper">
                            <div className="col-md-6">
                                <h6>Audience</h6>
                                <p>Users who prefer to plan itinerary themselves</p>
                            </div>
                            <div className="col-md-6">
                                <h6>Scope</h6>
                                <p>
                                <ul>
                                    <li>Constructing a task-oriented deep learning dialogue system</li>
                                    <li>Developing a client side web interface to access the chatbot</li>
                                </ul>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h6>Cross-Domain</h6>
                                <p>Transferring information among domains to complete one domain's task using information from another domain</p>
                            </div>
                        </div>
                    </ScrollReveal>
                    
                    <ScrollReveal>
                        <h6 className="theme mb-3">Design Value</h6>
                        <div className="row my-5 d-flex justify-content-center">
                            <div className="col-md-5 mx-4 p-4 tourbot-value-box d-flex align-items-center">
                                <h5 className="text-center m-0">
                                Consolidation of information on attractions, hotels, and transportation
                                </h5>
                            </div>
                            <div className="col-md-5 mx-4 p-4 tourbot-value-box d-flex align-items-center">
                                <h5 className="text-center m-0">
                                Collection of de-identified user data as future marketing reference for service provider
                                </h5>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>


            <div className="container">
                <div className="topic-container">
                    <ScrollReveal>
                        <div className="subsection-wrapper">
                            <h3 className="my-5">🔧 System Development</h3>
                            <div className="row mb-5 align-items-start">
                                <h6 className="col-lg-4 mb-3">Information Structure</h6>
                                <div className="col-lg-8 flex-column align-items-center">
                                    <img className="w-100" src="/works/Frontend/tourbot/IA.jpg" alt="Information Structure" />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <h6 className="mb-3">Website Functionality</h6>
                        </ScrollReveal>
                        <div className="">
                            <ScrollReveal>
                                <div className="row subsection-wrapper">
                                    <div className="col-lg-6 mb-3 d-flex flex-column justify-content-start">
                                        <h6 className="theme mb-3">#1: De-identified User Data Collection</h6>
                                        <p>
                                        The main page of the website requires user to input certain attributes, including gender, age range, and purpose of travel.
                        The collected data will later be used as system recommendation optimization.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 px-3 mb-5">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/j9GqxolAFTAk5bMdiv/giphy.gif" alt="demo of De-identified User Data Collection" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="row subsection-wrapper flex-row-reverse">
                                    <div className="col-lg-6 mb-3 d-flex flex-column justify-content-start">
                                        <h6 className="theme mb-3">#2: Chatroom Conversation with TourBot</h6>
                                        <p>
                                        In the chatroom, user can directly enter message to interact with our chatbot backend.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 px-3 mb-5">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/6VOkQRhkz9XkcChLI2/giphy.gif" alt="demo of Chatroom Conversation with TourBot" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="row subsection-wrapper">
                                    <div className="col-lg-6 mb-3 d-flex flex-column justify-content-start">
                                        <h6 className="theme mb-3">#3: Information update</h6>
                                        <p>
                                        Upon mentioning certain attractions, restaurants, or hotels, the buttons on the right side will blink to indicate update of dialogue state.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 px-3 mb-5">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/foWvmauPAAC1PRA26H/giphy.gif" alt="demo of Information update" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="row subsection-wrapper flex-row-reverse">
                                    <div className="col-lg-6 mb-3 d-flex flex-column justify-content-start">
                                        <h6 className="theme mb-3">#4: Viewing Travel Information</h6>
                                        <p>
                                        Clicking on either 酒店 (Hotel), 景點 (Attraction), or 餐廳 (restaurant), a page will appear showing the details of the location mentioned in the conversation.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 px-3 mb-5">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/TF2HXXw0KPOJTzmNPD/giphy.gif" alt="demo of Viewing Travel Information" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="row subsection-wrapper">
                                    <div className="col-lg-6 mb-3 d-flex flex-column justify-content-start">
                                        <h6 className="theme mb-3">#5: Viewing Dialogue State</h6>
                                        <p>
                                            At any time, user can click 檢視 (view) to overview all the locations currently saved, with visualization assisted by google map to help make route arrangements.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 px-3 mb-5">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{borderRadius: "16px"}} className="w-100" src="https://media.giphy.com/media/9G2sXbWpzSmfZwU46f/giphy.gif" alt="demo of Viewing Dialogue State" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                    
                    <div className="subsection-wrapper">
                        <h6 className="mb-3">Navigation Bar</h6>
                        <div className="row justify-content-center my-5">
                            <div className="col-md-5">
                                <ScrollReveal>
                                    <div className="my-5 d-flex flex-column align-items-center">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{width: "150px"}} src="/works/Frontend/tourbot/SVG/view.svg" alt="view button" />
                                        </div>
                                        <div className="mt-5 mb-3 d-flex flex-column align-items-center">
                                            <h6 className="theme">View</h6>
                                            <p className="text-center">
                                                Viewing information of the current dialogue state. User can see the planned hotel, restaurat, or transportation. 
                                                By using Google Map API, the locations are shown on map to help user plan the routes.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="col-md-5">
                                <ScrollReveal>
                                    <div className="my-5 d-flex flex-column align-items-center">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{width: "150px"}} src="/works/Frontend/tourbot/SVG/hotel.svg" alt="hotel button" />
                                        </div>
                                        <div className="mt-5 mb-3 d-flex flex-column align-items-center">
                                            <h6 className="theme mb-3">Hotel</h6>
                                            <p className="text-center">
                                                Viewing details of the hotel user plan to visit, such as rating, price, transportation. 
                                                Using Google Search API, user can view the top 3 search results of the hotel to access booking websites easily.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="col-md-5">
                                <ScrollReveal>
                                    <div className="my-5 d-flex flex-column align-items-center">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{width: "150px"}} src="/works/Frontend/tourbot/SVG/attraction.svg" alt="attraction button" />
                                        </div>
                                        <div className="mt-5 mb-3 d-flex flex-column align-items-center">
                                            <h6 className="theme mb-3">Attraction</h6>
                                            <p className="text-center">
                                                Similar to the function of Hotel.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="col-md-5">
                                <ScrollReveal>
                                    <div className="my-5 d-flex flex-column align-items-center">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{width: "150px"}} src="/works/Frontend/tourbot/SVG/restaurant.svg" alt="restaurant button" />
                                        </div>
                                        <div className="mt-5 mb-3 d-flex flex-column align-items-center">
                                            <h6 className="theme mb-3">Restaurant</h6>
                                            <p className="text-center">
                                            Similar to the function of Hotel.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="col-md-5">
                                <ScrollReveal>
                                    <div className="my-5 d-flex flex-column align-items-center">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{width: "150px"}} src="/works/Frontend/tourbot/SVG/restart.svg" alt="restart button" />
                                        </div>
                                        <div className="mt-5 mb-3 d-flex flex-column align-items-center">
                                            <h6 className="theme mb-3">Restart</h6>
                                            <p className="text-center">
                                            This will clear all previous conversation history except the user attributes filled out in the survey in client side.
                                            User can restart a conversation if they wish to make a different plan.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="col-md-5">
                                <ScrollReveal>
                                    <div className="my-5 d-flex flex-column align-items-center">
                                        <div className="d-flex flex-column align-items-center">
                                            <img style={{width: "150px"}} src="/works/Frontend/tourbot/SVG/exit.svg" alt="exit button" />
                                        </div>
                                        <div className="mt-5 mb-3 d-flex flex-column align-items-center">
                                            <h6 className="theme mb-3">Exit</h6>
                                            <p className="text-center">
                                            User can leave the chatroom after consulting TourBot, at which point conversation history and user data will be cleared in client side.
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="topic-container section-wrapper">
                    <ScrollReveal>
                        <h3 className="my-5">🔬 Chatbot Model Experiments</h3>
                        <h6 className="mb-3">Dialogue System Models</h6>
                        <p className="mb-5">
                            In order to construct TourBot, we take advantage of CrossWOZ [1], a Chinese cross-domain task-oriented dialogue dataset. This dataset includes conversations on travel recommendation for Beijing, spanning across five domains (attraction, hotel, restaurant, taxi, metro) each with several associated attributes.
                            <br/>
                            Specifically, this dataset is formulated to consist four dialogue modules in which the system performs certain operations to process user dialogues:
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <p>
                            <ul className="row">
                                <li className="col-md-6 my-5">
                                    <h6 className="theme mb-3">Natural Language Understanding (NLU)</h6>
                                    Understanding user intention given a user dialogue and producing a Dialogue Act containing such information
                                    </li>
                                <li className="col-md-6 my-5">
                                    <h6 className="theme mb-3">Dialogue State Tracking (DST)</h6>
                                    Updating current Dialogue State based on the Dialogue Act, so that the Dialogue State contains all information accumulated since the start of the conversation
                                </li>
                                <li className="col-md-6 my-5">
                                    <h6 className="theme mb-3">Policy</h6>
                                    Predicting the system’s Action that responds to user’s intention based on the Dialogue State
                                </li>
                                <li className="col-md-6 my-5">
                                    <h6 className="theme mb-3">Natural Language Generation (NLG)</h6>
                                    Generating an utterance/sentence with natural language given the system’s Action
                                </li>
                            </ul>
                        </p>
                        <h6 className="my-3">Model Training and Adjustment</h6>
                        <p>
                        In CrossWOZ, a set of benchmark models are given for each module in the dialogue system. We will specifically focus on the models in NLU and DST to perform our model training experiments.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="mt-5 d-flex flex-column align-items-center">
                            <img className="w-sizer-75" src="https://64.media.tumblr.com/d4bbfcf08665c0bf0bf86bca82ab7089/1cebb57425753024-e9/s2048x3072/2f08e6b0c05b5b4cf7b528272eb0877328928535.pnj" alt="System Structure" />
                            <p className="table-caption mt-3">Dialogue System Module Pipeline (image translated from Chinese)</p>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="topic-container">
                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <h6 className="theme mb-3">Natural Language Understanding</h6>
                            <div className="row mb-5">
                                <p className="col-lg-6">For NLU module, BERT Chinese model is utilized to extract the word embeddings of an utterance, after which the embeddings are fed into classifiers to classify which intent the utterance expresses.</p>
                                <div className="col-lg-6 d-flex flex-column align-items-center">
                                    <img className="w-100 px-3" src="https://64.media.tumblr.com/b1e195f056c9b46ba8f8e6911da6b219/1cebb57425753024-56/s2048x3072/242343b8bda33ae9ba39ec06f31e5958f37d9d39.pnj" alt="System Structure" />
                                    <p className="table-caption mt-3">NLU Bert Model Structure</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="mb-5">
                            <ScrollReveal>
                                <p className="p-bold mb-3">Adjustment</p>
                                <Latex>
                                    {form1}
                                </Latex>
                                <p className="my-3">We incorporate class weight adjustments to penalize the system for classifying an utterance into an incorrect intent.
                                <br/>
                                After using the class weight mechanism, we have retrained the model and performed validation to verify the improvement of the model. Evidently in Table 1, the F1-scores for all intents have increased. The highest increase in F1 is observed to be 6.6% in Select, an intent specifically handling cross-domain user intents (e.g. recommending a hotel near a restaurant). This result suggests that our experiment successfully allows the model to recognize cross-domain intent more easily and therefore <b className="">reduce the risk of misclassification error propagating in the pipeline system</b>.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div id="tourbot-table-1" className="mt-5 table-container d-flex flex-column align-items-center">
                                    <div className="w-100">
                                        <div className="w-100 row table-header">
                                            <p className="col my-2 text-bold">User Intent Category</p>
                                            <p className="col my-2 text-bold">F1 for Uniform Class Weights</p>
                                            <p className="col my-2 text-bold">F1 for Adjusted Class Weights</p>
                                        </div>
                                        <div className="table-body">
                                            <div className="w-100 row">
                                                <p className="col my-2">General</p>
                                                <p className="col my-2">96.89</p>
                                                <p className="col my-2">98.68</p>
                                            </div>
                                            <div className="w-100 row">
                                                <p className="col my-2">Inform</p>
                                                <p className="col my-2">92.68</p>
                                                <p className="col my-2">92.97</p>
                                            </div>
                                            <div className="w-100 row">
                                                <p className="col my-2">NoOffer</p>
                                                <p className="col my-2">90.83</p>
                                                <p className="col my-2">94.12</p>
                                            </div>
                                            <div className="w-100 row">
                                                <p className="col my-2">Recommend</p>
                                                <p className="col my-2">98.02</p>
                                                <p className="col my-2">98.26</p>
                                            </div>
                                            <div className="w-100 row">
                                                <p className="col my-2">Request</p>
                                                <p className="col my-2">94.37</p>
                                                <p className="col my-2">95.46</p>
                                            </div>
                                            <div className="w-100 row">
                                                <p className="col my-2 text-bold">Select</p>
                                                <p className="col my-2 text-bold color-bright">74.63</p>
                                                <p className="col my-2 text-bold color-bright">79.57</p>
                                            </div>
                                        </div>
                                        <div className="table-caption mt-3">
                                        Comparison between models with uniform/adjusted class weights.
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                    
                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <h6 className="theme mb-3">Dialogue State Tracking</h6>
                            <div className="row mb-5">
                                <div className="col-lg-6">
                                    <p className="mb-5">
                                    Initially, CrossWOZ utilizes a rule-based model with pre-defined ontology to perform the action of inserting information from Dialogue Act into Dialogue State.
                                    </p>
                                    <p className="p-bold my-3">Adjustment</p>
                                    <p>
                                    We hope to use a deep learning model to replace the rule-based one in order to provide maximum flexibility in handling varying intents. Thus, we reference Transformer-DST [2], a model integrating NLU and DST with the encoder-decoder structure to “<b className="">jointly optimize state operation prediction and value generation for dialogue state tracking</b>.”
                                    </p>
                                </div>
                                <div className="col-lg-6 d-flex flex-column align-items-center">
                                    <img className="w-100 px-3" src="https://64.media.tumblr.com/da02a467e7e5c9586c2939bdf38bf61b/1cebb57425753024-7e/s2048x3072/2f8802573ab53f163a56a39a74c40b055ff441b4.pnj" alt="TransformerDST Structure" />
                                    <p className="table-caption mt-3">Transformer-DST Model Structure</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="subsection-wrapper">
                        <ScrollReveal>
                            <h6 className="theme mb-5">Experiments with Transformer-DST</h6>
                            <h6 className="mb-3">#1: Data Preprocessing for CrossWOZ</h6>
                            <p className="mb-5">
                            Since Transformer-DST was originally trained on MultiWOZ [3], an English cross-domain task-oriented dialogue dataset, we have to first process CrossWOZ data to be compatible to the format of MultiWOZ in order to leverage the <a className="link" href="https://github.com/zengyan-97/Transformer-DST" target="_blank" rel="noreferrer noopenner">open-source model</a>.
                            </p>
                            <h6 className="mb-3">#2: Incorporating Class Weights to Alleviate Data Imbalance</h6>
                            <p className="mb-5">
                            In the encoder of Transformer-DST, it predicts the action to take in a given slot in Dialogue State by directly taking the current utterance (input of NLU) along with dialogue history and slot tokens for Dialogue State. The actions include <i className="italic">carryover</i> (leaving the slot unchanged), <i className="italic">update</i> (inserting new value into the slot), and <i className="italic">delete</i> (deleting the slot value).
                            <br/>
                            However, <b className="">the majority of actions in the data are <i className="italic">carryover</i></b>. As a result of imbalanced data, the encoder for our model always predicts carryover to maximize its accuracy.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal>
                        <p className="p-bold my-3">Adjustment</p>
                        <p className="mb-5">
                            We once again use our class weight formulation to penalize the encoder for misclassification. As a result, the model does start predicting actions other than carryover. But this also means <b className=""> a drastic decrease in the joint accuracy (-20%)</b>, since the model classifies many carryover’s into other actions.
                        </p>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <div id="tourbot-table-2" className="table-container d-flex flex-column align-items-center">
                                    <div className="w-100 p-3">
                                    <div className="w-100 row table-header">
                                            <p className="col my-2 text-bold">Category</p>
                                            <p className="col my-2 text-bold">Hit</p>
                                            <p className="col my-2 text-bold">Total Number</p>
                                        </div>
                                        <div className="table-body">
                                            <div className="w-100 row">
                                                <p className="col my-2">update</p>
                                                <p className="col my-2">0</p>
                                                <p className="col my-2">3746</p>
                                            </div>
                                            <div className="w-100 row">
                                                <p className="col my-2">carryover</p>
                                                <p className="col my-2 text-bold">105830</p>
                                                <p className="col my-2">105830</p>
                                            </div>
                                            <div className="w-100 row">
                                                <p className="col my-2">delete</p>
                                                <p className="col my-2 ">0</p>
                                                <p className="col my-2">560</p>
                                            </div>
                                        </div>
                                        <div className="table-caption mt-3">
                                        Pre: prediction results without class weights.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="tourbot-table-3" className="table-container d-flex flex-column align-items-center">
                                    <div className="w-100 p-3">
                                        <div className="w-100 row table-header">
                                            <p className="col my-2 text-bold">Category</p>
                                            <p className="col my-2 text-bold">Hit</p>
                                            <p className="col my-2 text-bold">Total Number</p>
                                        </div>
                                        <div className="table-body">
                                            <div className="w-100 row">
                                                <p className="col my-2">update</p>
                                                <p className="col my-2 text-bold color-bright">2950</p>
                                                <p className="col my-2">3746</p>
                                            </div>
                                            <div className="w-100 row">
                                                <p className="col my-2">carryover</p>
                                                <p className="col my-2 text-bold color-bright">46371</p>
                                                <p className="col my-2">105830</p>
                                            </div>
                                            <div className="w-100 row">
                                                <p className="col my-2">delete</p>
                                                <p className="col my-2 text-bold color-bright">351</p>
                                                <p className="col my-2">560</p>
                                            </div>
                                        </div>
                                        <div className="table-caption mt-3">
                                        Post: prediction results with class weights.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <p className="mb-5">
                            Thus, we use the recalls of our first-round training and formulated an adjusted class weight mechanism to emphasize the category having the lowest recall. Note that a constant is added smooth the recall value, preventing the class weights to be overly large or small.
                            </p>
                            <Latex>
                                {form2}
                            </Latex>

                            <div className="row my-5">
                                <div className="col-md-6">
                                    <div id="tourbot-table-4" className="table-container d-flex flex-column align-items-center">
                                        <div className="w-100 p-3">
                                            <div className="w-100 row table-header">
                                                <p className="col my-2 text-bold">Category</p>
                                                <p className="col my-2 text-bold">Recall</p>
                                            </div>
                                            <div className="table-body">
                                                <div className="w-100 row">
                                                    <p className="col my-2">update</p>
                                                    <p className="col my-2">0.7875</p>
                                                </div>
                                                <div className="w-100 row">
                                                    <p className="col my-2">carryover</p>
                                                    <p className="col my-2">0.4382</p>
                                                </div>
                                                <div className="w-100 row">
                                                    <p className="col my-2">delete</p>
                                                    <p className="col my-2">0.6268</p>
                                                </div>
                                            </div>
                                            <div className="table-caption mt-3">
                                            Recall of the categories after first-round of training.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div id="tourbot-table-5" className="table-container d-flex flex-column align-items-center">
                                        <div className="w-100 p-3">
                                            <div className="w-100 row table-header">
                                                <p className="col my-2 text-bold">Category</p>
                                                <p className="col my-2 text-bold">Hit</p>
                                                <p className="col my-2 text-bold">Total Number</p>
                                            </div>
                                            <div className="table-body">
                                                <div className="w-100 row">
                                                    <p className="col my-2">update</p>
                                                    <p className="col my-2 text-bold">2725</p>
                                                    <p className="col my-2">3746</p>
                                                </div>
                                                <div className="w-100 row">
                                                    <p className="col my-2">carryover</p>
                                                    <p className="col my-2 text-bold">52561</p>
                                                    <p className="col my-2">105830</p>
                                                </div>
                                                <div className="w-100 row">
                                                    <p className="col my-2">delete</p>
                                                    <p className="col my-2 text-bold ">328</p>
                                                    <p className="col my-2">560</p>
                                                </div>
                                            </div>
                                            <div className="table-caption mt-3">
                                            Prediction results with recall-adjsuted class weights.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <p className="mb-5">
                            After adjusting the class weights, it can be seen that both the joint accuracy and slot turn accuracy have increased by 7~8%, indicating success in alleviating the problem of data imbalance. 
                            </p>

                            <div id="tourbot-table-6" className="table-container d-flex flex-column align-items-center">
                                <div className="w-100 p-3">
                                    <div className="w-100 row table-header">
                                        <p className="col my-2 text-bold">Metrics</p>
                                        <p className="col my-2 text-bold">Initial Class Weights</p>
                                        <p className="col my-2 text-bold">Recall-adjusted Class Weights</p>
                                    </div>
                                    <div className="table-body">
                                        <div className="w-100 row">
                                            <p className="col my-2">Joint Accuracy</p>
                                            <p className="col my-2">0.3798</p>
                                            <p className="col my-2 text-bold color-bright">0.4131</p>
                                        </div>
                                        <div className="w-100 row">
                                            <p className="col my-2">Slot Turn Accuracy</p>
                                            <p className="col my-2">0.5862</p>
                                            <p className="col my-2 text-bold color-bright">0.6229</p>
                                        </div>
                                    </div>
                                    <div className="table-caption mt-3">
                                    Recall of the categories after first-round of training.
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h4 className="section-wrapper statement">
                            Our experiments have shown that the Transformer structure of DST model can be utilized not only in English but also Chinese, although model refinement to further increase its accuracies may be needed.
                            </h4>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="topic-container">
                <ScrollReveal>
                        <div className="subsection-wrapper">
                            <h3 className="my-5">📍 Conclusion</h3>
                            <p className="mb-5">
                            We have constructed TourBot by performing model experiments and developing a web interface to access the chatbot. <br/><br/>
        It is our belief that our attempt of deep learning task-oriented chatbots can be easily <b>transferred for application in other domains</b>, such as online ticket-booking guidance. Furthermore, from the standpoint of service providers, the collection of de-identified user data can be used for <b>customization of system response</b> to enhance user experience, and travel agencies or ministries of tourism can <b>design travel packages tailored to user’s taste</b>.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="subsection-wrapper">
                        <h3>💭 Takeaways</h3>
                        <ul>
                            <li className="subsection-wrapper">
                                <ScrollReveal>
                                    <h6 className="theme mb-3">NLP Training</h6>
                                    <p>
                                    I have gained substantial experience in training NLP models through this project. Although I have enrolled in courses like Information Retrieval, Machine Learning, and Digital Speech Processing, this is the first time my teammates and I propose and execute model experiments all on our own. Not only have I become familiar with the technical knowledge of <b>using open-source frameworks to perform training and data processing</b>, I have also grown perceptive to the training statistics by <b>critically analyzing the implication of certain metrics and investigating the cause of training failures</b>.
                                    </p>
                                </ScrollReveal>
                            </li>

                            <li className="subsection-wrapper">
                                <ScrollReveal>
                                    <h6 className="theme mb-3">Literature Review</h6>
                                    <p>
                                    As our graduation project, this is the first time I work with a research advisor to review previous studies upon which we base new research ideas. I reviewed 10+ papers on NLP chatbot models, including whether to design the system as a pipeline or an end-to-end model, how specific modules in the dialogue system can be trained with novel models. In the process, I learned to <b>identify and search for studies with target topics</b>, <b>skim through papers to extract key information, incorporate different research to propose new methods</b>.
                                    </p>
                                </ScrollReveal>
                            </li>

                            <li className="subsection-wrapper">
                                <ScrollReveal>
                                    <h6 className="theme mb-3">Communication & Collaboration</h6>
                                    <p>
                                    Working with a team of 6 people, I have significantly improved my communication skills. I have been the mediator among teammates to <b>resolve conflicts</b> on our research directions, the coordinator to <b>periodically verify team progress and revise project schedule</b> accordingly, and the presenter to <b>report our experiments weekly</b> to the research advisor. All these experiences honed my people skills, enabling me to become a better team player in future team projects.
                                    </p>
                                </ScrollReveal>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ScrollReveal>
                <ProjectRec projects={projRecs} moreLink={projRecLink} />
            </ScrollReveal>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container subsection-wrapper">
                        <h3 className="heading-3 color-gray mt-5">📑 References</h3>
                        <p className="references mb-5">
                        [1] Qi Zhu, Kaili Huang, Zheng Zhang, Xiaoyan Zhu, and Minlie Huang. 2020. CrossWOZ: A large-scale chinese cross-domain task-oriented dialogue dataset. <br/>
[2] Zeng, Y., & Nie, J. Y. (2020). Jointly optimizing state operation prediction and value generation for dialogue state tracking. arXiv preprint arXiv:2010.14061. <br/>
[3] Budzianowski, P., Wen, T. H., Tseng, B. H., Casanueva, I., Ultes, S., Ramadan, O., & Gašić, M. (2018). MultiWOZ--a large-scale multi-domain wizard-of-oz dataset for task-oriented dialogue modelling. arXiv preprint arXiv:1810.00278.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourBot;