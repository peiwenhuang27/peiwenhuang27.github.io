import Iframe from 'react-iframe';

function Tea() {
    const img_src = 'https://unsplash.com/photos/Qaor6nxikUM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MjE4MjQy&force=true&w=1920';
    // const img_ph  = 'https://unsplash.com/photos/Qaor6nxikUM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MjE4MjQy&force=true&w=640';

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            {/* <ProgressiveImage
                className="topic-cover-img"
                src={img_src}
                placeholder={img_ph}
                
            /> */}
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-4 color-dark text-bold date">April 2020-June 2020</h3>
                            <h2 className="mb-3">Investigating Taiwanese Tea Industry</h2>
                            <h3 className="mb-3">Introduction to Information Management, Case Study, Digital Transformation</h3>
                            
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Duration </h3>
                            <ul>
                                <li>2 months</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Role</h3>
                            <ul>
                                <li>Consultant/Anlayzer</li>
                                <li>Report Writer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Team</h3>
                            <ul>
                                <li>7 people</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col mb-5">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-12">Report Writing</li>
                                <li className="col-md-12">Facilitating Group Discussion</li>
                                <li className="col-md-12">Presentation Slides Preparation</li>
                                
                            </ul>
                         </div>
                    </div>
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <p className="mt-3">
                        Chinese culture has long been associated with tea over the centuries. In Taiwan, where Chinese cultural heritage is rooted in the society, the choice of people’s drinks often contain a variety of tea. 
                        </p>

                        <p>
                        We specifically study a famous Taiwanese tea brand— W brand (anonymized) to gain insights into the state of Taiwanese tea industry and the operational pain points before proposing solutions aided by information technology. Since tea-making is a relatively traditional industry, most operational processes are executed through more dated approaches. After interviewing with the company, we will analyze whether certain part of the processes can leverage information technology to increase operating efficiency and quality, bring the brand value to a higher level.
                        </p>

                        <p>
                        A summary of our project is provided here which can serve as reference for reading the report written in Chinese.
                        </p>    
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-2 my-3">Background of Taiwanese Tea Industry and the Target Company</h3>
                    
                    <p className="mb-5">
                    In this section, we briefly explain the several factors contributing to the decreasing competitive advantage of Taiwanese tea in both domestic and international markets, including the increasing land and labor costs, lack of branding and marketing, alternatives of coffee and juice, and more. The origin, business model, and operational processes of our target company are also covered.
                    </p>

                    <h3 className="heading-2 my-3">Interview Insights: Bottlenecks and Development</h3>

                    <p className="mb-5">
                    After our interview with a senior manager in digital marketing department of W, we realized that the operations of W remained fairly un-informatized in terms of supply chain and customer management. Differentiating itself as a high-end brand, W was striving to expand its customers from middle-aged and elderly people to the younger generation under the impact of COVID-19. Thus, W was in search of solutions such as online platforms or rebranding to realize its digital transformation and adjust to the technology society.
                    </p>

                    <h3 className="heading-2 my-3">Proposing Digital Solutions to Company Pain Points</h3>

                    <p className="">
                    Finally, we propose specific solutions utilizing information technology to resolve W’s pain points. The pain points in supply chain quality control and customer relationship management (CRM) are discussed along with respective solutions. For instance, the inconsistent product quality can be controlled with knowledge management (KM) by constructing <b>a management information system which utilizes IoT sensors and AI</b> to learn from human experts and teach the know-hows to future workers. On the other hand, CRM could be improved by <b>utilizing data analytics techniques (e.g. association rule mining, clustering) to increase customer retention rate and target marketing accuracy</b>.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <h3 className="heading-1 mb-5">Report Document</h3>
                    <div className="d-flex flex-column align-items-center">
                        <Iframe src="https://drive.google.com/file/d/1gGH661HX8hq1SEXt3gh0oIMi9fD_aQQ3/preview" width="640" height="480" allow="autoplay" />
                    </div>
                
                </div>
            </div>

            

            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        
                        <h3 className="heading-3 color-gray mt-5">Resources</h3>
                        <p className="references">
                        Photo by <a href="https://unsplash.com/@thisisengineering?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ThisisEngineering RAEng</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tea;