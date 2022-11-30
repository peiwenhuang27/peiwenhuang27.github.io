function Name() {
    const img_src = 'https://unsplash.com/photos/ccpOiDUmeo0/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MjU3MjQ4&force=true&w=1920';
    // const img_ph  = 'https://unsplash.com/photos/ccpOiDUmeo0/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MjU3MjQ4&force=true&w=640';

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
                            <h3 className="mb-4 color-dark text-bold date">March 2021-April 2021</h3>
                            <h2 className="mb-3">Name-Entity Prediction</h2>
                            <h3 className="mb-3">Data Science, Natural Language Processing, Deep Learning, User Profiling</h3>
                            <p className="mb-5">
                                In this project, we predict the gender, ethnicity, and nationality of an individual given their name.
                                Using deep learning techniques, our model achieved 95%/91%/61% accuracy on each task respectively.
                                This task can be applied to user profiling in websites to optimize recommendation systems and target marketing.
                            </p>
                            
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Duration </h3>
                            <ul>
                                <li>6 weeks</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Role</h3>
                            <ul>
                                <li>NLP Engineer</li>
                                <li>Project Manager</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Team</h3>
                            <ul>
                                <li>6 people</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Tool</h3>
                            <ul className="row">
                            <li className="">Tensorflow</li>
                            <li className="">Keras</li>
                            <li className="">Sci-kit Learn</li>
                                
                            </ul>
                        </div>
                        <div className="topic-desc-container col mb-5">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                
                                <li className="col-md-6">Data Preprocessing</li>
                                <li className="col-md-6">Model Training & Testing</li>
                                <li className="col-md-6">Reviewing Related Studies</li>
                                <li className="col-md-6">Weekly Reporting to Research Advisor</li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <p className="w-sizer mt-3">
                        In demographics, people’s names usually vary because of a variety of factors such as nationality, ethnicity and gender. For companies, these attributes can be leveraged to <b>optimize recommendation systems and provide personalized products or advertisements</b>. However, many online users do not voluntarily input information other than names, leaving much desired data unavailable. Fortunately for service providers, though, NLP models can be constructed to predict all types of labels given only a name. The prediction of nationality, ethnicity, and gender thus became a research interest with high business value.
<br/><br/>
In this project, we aim to <b>implement a neural network model to complete to perform name-nationality/ethnicity/gender prediction</b> by reviewing previous studies and constructing different models to test which one obtains the highest accuracy. The results of predictions can be utilized for downstream user profiling tasks in recommendation systems for target marketing.
                        </p>

                        <h3 className="heading-1 my-4">Objective</h3>
                        <h3 className="heading-3 mt-3 mb-5">
                        We aim to <b className="color-bright">implement a neural network model to perform name-nationality/ethnicity/gender prediction</b> by reviewing previous studies and constructing different models to test which one obtains the highest accuracy. 
                        <br/><br/>The results of predictions can be utilized for downstream user profiling tasks in recommendation systems for target marketing.</h3>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-3 color-dark mt-5">Data Preprocessing</h3>
                    <h3 className="heading-1 my-3">Dataset</h3>
                    <p className="w-sizer">
                    We leverage the open-source dataset, <a className="link" href="https://www.kaggle.com/datasets/heesoo37/120-years-of-olympic-history-athletes-and-results" target="_blank" rel="noreferrer noopenner">120 years of Olympic history: athletes and results</a>.
                    The dataset includes the personal information of all Olympic athletes from 1896~2016. For our task, we use the attributes of <i className="italic">Name</i>, <i className="italic">Sex</i>, and <i className="italic">NOC</i> (National Olympic Committee 3-letter code).
                    </p>

                    <h3 className="heading-1 my-3">Preprocessing Procedure</h3>
                    <p>We perform the following preprocessing procedure to convert the name string into our training sample:</p>
                    <ul className="list-disc">
                        <li>Removing repeating athletes</li>
                        <li>Consolidating countries using different NOCs at different times</li>
                        <li>Removing athlete data from countries with little participation</li>
                        <li>Converting NOC to country name</li>
                        <li>Mapping country to ethnicity (based on the majority race in the country)</li>
                        <li>Converting name coding from EASCII to ASCII</li>
                        <li>De-capitalize letters in <span className="italic">Name</span></li>
                        <li>Removing all nicknames and special characters in <span className="italic">Name</span></li>
                        <li>Wrapping first name, middle name (if exist), and last name with “$” to represent a name sequence</li>
                        <li>Splitting <span className="italic">Name</span> characters into bi-gram representation</li>
                    </ul>

                    <p>For example,<br/>A Dijiang ➝ [‘$a', 'a$', '$$', '$d', 'di', 'ij', 'ji', 'ia', 'an', 'ng', ‘g$']. <br/>
                    After preprocessing the data, 115,666 samples remain in the set. We split the data by <b>8-to-2 for training and testing</b>.</p>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-1 my-3">Exploratory Data Analysis</h3>
                    <div className="row d-flex align-items-center">
                        <p className="col-md-6">
                        In Figure 1 is the pie chart distribution of countries. Apparently the total number of participating countries is large, each with varying number of participating athletes. For example, Thailand, the country with least samples, only take up 0.4%, whereas the United States takes up 8.3% as the country with most samples.
                        </p>
                        <div className="col-md-6 px-1 d-flex flex-column align-items-center">
                            <img className="w-100" src="https://64.media.tumblr.com/0cd2e4954d10d89d37558502c04cdc07/1cebb57425753024-97/s2048x3072/aaa8cf8759e30e447d847061d94f456c5de2328e.pnj" alt="System Structure" />
                            <p className="table-caption mt-3">Figure 1: Pie Chart of Athlete Nationality Distribution</p>
                        </div>
                    </div>
                    <p className="mt-3">
                    Figure 2 shows distribution of gender. The proportion of males is as high as 75% whereas that of females is only 25%. Although the difference is large, it is not drastic enough to cause the issue of data imbalance.
                    In Figure 3 we see that 6 races remain after preprocessing, including European, Hispanic, East Asian, Nordic, Celtic English, and Muslim. European takes up almost half of all samples with 48.3%, and Muslim stands at 6.9% as the lowest percentage.
                    </p>

                    <div className="row">
                        <div className="col-md-6 px-1 d-flex flex-column align-items-center">
                            <img className="w-75" src="https://64.media.tumblr.com/a918e2877ed624ff8af105ecae2bd887/1cebb57425753024-1a/s1280x1920/ff5ec7eb24ffecc27b7637e87b3f9ba0bfe770d5.pnj" alt="System Structure" />
                            <p className="table-caption mt-3 text-center">Figure 2: Pie Chart of Athlete Gender Distribution <br/>(M denotes male, F denotes female)</p>
                        </div>
                        <div className="col-md-6 px-1 d-flex flex-column align-items-center">
                            <img className="w-100" src="https://64.media.tumblr.com/30fb26f7ff6c71b5ee0e4036559064f1/1cebb57425753024-71/s2048x3072/d533cc3495beb4b68b59aef8adbe9dbbb2d61a46.pnj" alt="System Structure" />
                            <p className="table-caption mt-3 text-center">Figure 3: Pie Chart of Athlete Ethnicity Distribution</p>
                        </div>
                    </div>
                    

                    <div className="subsection-wrapper">
                        <h3 className="heading-3 color-dark mt-5">Model Design</h3>
                        <h3 className="heading-2 my-1">Skip-gram Embedding</h3>
                        <p>
                        In order to represent the spatial relationship of bi-grams, we use Skip-gram to first train the bi-grams to obtain their embedding vectors converted from texts. The embeddings will then be fed as input for the next part of the model.
                        </p>

                        <h3 className="heading-2 my-1">LSTM Layer + Classifier</h3>
                        <p>
                        Considering the fact that English words are formed by phonetic letters and that the order of letters may contain certain information, we use LSTM layer, which extracts time-sequence properties, to obtain information of the whole name string. In the LSTM layer, hidden units are connected by Dropouts. Finally, a linear classifier will take the output of LSTM layer to predict a sample’s class (nationality, ethnicity, or gender).
                        </p>

                        <div className="mt-5 d-flex flex-column align-items-center">
                            <img className="w-75" src="https://64.media.tumblr.com/8dc24036cf4b5e046679452c92b435d2/1cebb57425753024-d3/s2048x3072/d41a0cbea82cfa5180562d2525a953849543b94f.pnj" alt="System Structure" />
                            <p className="table-caption mt-3 text-center">Figure 4: (a) LSTM Model Structure. (b) LSTM Cell Structure.</p>
                        </div>

                        <h3 className="heading-2 my-1">Text-CNN Layer + Classifier</h3>
                        <p>
                        We also experiment using CNN to extract information in nearby fields. Hyper-parameter tuning is also performed to find the optimal set. To prevent model overfitting, Dropout and Max-pooling are also incorporated in the CNN layer. A linear classifier is also used as the last layer of the model to produce classification logits. 
                        </p>
                        
                        <div className="mt-5 d-flex flex-column align-items-center">
                            <img className="w-75" src="https://64.media.tumblr.com/7fbcd16197a6ace970767c0aa21619a4/1cebb57425753024-22/s2048x3072/1fb3da141ee69051ef336f904704f369eea16581.pnj" alt="System Structure" />
                            <p className="table-caption mt-3 text-center">Figure 4: (a) CNN Model Structure (Gender, Ethnicity). (b) CNN Model Structure (Nationality). (c) CNN Module Detailed Structure (Gender, Ethnicity).</p>
                        </div>
                    </div>
                
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-3 color-dark mt-5">Discussion</h3>
                        <h3 className="heading-1 my-3">Training Results</h3>
                        <p>
                            As mentioned, we have performed hyper-parameter tuning for different classification tasks. The target hyper-parameters include <span className="italic">batch size</span>, <span className="italic">embedding dimension</span>, <span className="italic">bi-gram max sequence length</span>. The optimal hyper-parameter combinations after tuning are presented below.
                        </p>

                        <div id="name-table-1" className="my-5 table-container d-flex flex-column align-items-center">
                            <div className="w-100">
                                <div className="w-100 row table-header">
                                    <p className="col-md-3 my-2 text-bold"></p>
                                    <p className="col-md-3 my-2 text-bold">batch size</p>
                                    <p className="col-md-3 my-2 text-bold">embedding dimension</p>
                                    <p className="col-md-3 my-2 text-bold">max sequence length</p>
                                </div>
                                <div className="table-body">
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">Nationality</p>
                                        <p className="col-md-3 my-2">64</p>
                                        <p className="col-md-3 my-2">256</p>
                                        <p className="col-md-3 my-2">30</p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">Ethnicity</p>
                                        <p className="col-md-3 my-2">128</p>
                                        <p className="col-md-3 my-2">512</p>
                                        <p className="col-md-3 my-2">40</p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">Gender</p>
                                        <p className="col-md-3 my-2">64</p>
                                        <p className="col-md-3 my-2">256</p>
                                        <p className="col-md-3 my-2">30</p>
                                    </div>
                                </div>
                                <p className="table-caption mt-3 text-center">
                                ▲ Table 1: Results of Hyper-parameter tuning.
                                </p>
                            </div>
                        </div>

                        <p>
                        After model training, it can be seen that the CNN model outperforms the LSTM model in every task. 
                        This suggests that <b>the sequence of letters in a name can be better extracted through convolution</b> to obtain information crucial to predicting labels of genders or ethnicities. 
                        Furthermore, we believe the Max-pooling and Dropout layers have successfully mitigated the overfitting problem so that the model can generalize well on testing data.
                        </p>

                        <div id="name-table-2" className="my-5 table-container d-flex flex-column align-items-center">
                            <div className="w-100">
                                <div className="w-100 row table-header">
                                    <p className="col-md-3 my-2 text-bold"></p>
                                    <p className="col-md-3 my-2 text-bold"></p>
                                    <p className="col-md-3 my-2 text-bold">LSTM Model</p>
                                    <p className="col-md-3 my-2 text-bold">CNN Model</p>
                                </div>
                                <div className="table-body">
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">Precision</p>
                                        <p className="col-md-3 my-2">
                                            macro average<br/>micro average
                                        </p>
                                        <p className="col-md-3 my-2">
                                            <b>0.54</b><br/>0.56
                                        </p>
                                        <p className="col-md-3 my-2">
                                            0.52<br/><b>0.58</b>
                                        </p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">Recall</p>
                                        <p className="col-md-3 my-2">
                                            macro average<br/>micro average
                                        </p>
                                        <p className="col-md-3 my-2">
                                            0.50<br/>0.59
                                        </p>
                                        <p className="col-md-3 my-2 text-bold">
                                            0.52<br/>0.61
                                        </p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-6 my-2">Accuracy</p>
                                        <p className="col-md-3 my-2">0.59</p>
                                        <p className="col-md-3 my-2 text-bold">0.61</p>
                                    </div>
                                </div>
                                <p className="table-caption mt-3 text-center">
                                ▲ Table 2: Results of Nationality Classification.
                                </p>
                            </div>
                        </div>

                        <div id="name-table-3" className="my-5 table-container d-flex flex-column align-items-center">
                            <div className="w-100">
                                <div className="w-100 row table-header">
                                    <p className="col-md-3 my-2 text-bold"></p>
                                    <p className="col-md-3 my-2 text-bold"></p>
                                    <p className="col-md-3 my-2 text-bold">LSTM Model</p>
                                    <p className="col-md-3 my-2 text-bold">CNN Model</p>
                                </div>
                                <div className="table-body">
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">Precision</p>
                                        <p className="col-md-3 my-2">
                                            macro average<br/>micro average
                                        </p>
                                        <p className="col-md-3 my-2">
                                            0.87<br/>0.87
                                        </p>
                                        <p className="col-md-3 my-2 text-bold">
                                            0.90<br/>0.91
                                        </p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">Recall</p>
                                        <p className="col-md-3 my-2">
                                            macro average<br/>micro average
                                        </p>
                                        <p className="col-md-3 my-2">
                                            0.82<br/>0.87
                                        </p>
                                        <p className="col-md-3 my-2 text-bold">
                                            0.88<br/>0.91
                                        </p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-6 my-2">Accuracy</p>
                                        <p className="col-md-3 my-2">0.87</p>
                                        <p className="col-md-3 my-2 text-bold">0.91</p>
                                    </div>
                                </div>
                                <p className="table-caption mt-3 text-center">
                                ▲ Table 3: Results of Ethnicity Classification.
                                </p>
                            </div>
                        </div>

                        <div id="name-table-4" className="my-5 table-container d-flex flex-column align-items-center">
                            <div className="w-100">
                                <div className="w-100 row table-header">
                                    <p className="col-md-3 my-2 text-bold"></p>
                                    <p className="col-md-3 my-2 text-bold"></p>
                                    <p className="col-md-3 my-2 text-bold">LSTM Model</p>
                                    <p className="col-md-3 my-2 text-bold">CNN Model</p>
                                </div>
                                <div className="table-body">
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">Precision</p>
                                        <p className="col-md-3 my-2">
                                            macro average<br/>micro average
                                        </p>
                                        <p className="col-md-3 my-2">
                                            0.90<br/>0.93
                                        </p>
                                        <p className="col-md-3 my-2 text-bold">
                                            0.95<br/>0.94
                                        </p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">Recall</p>
                                        <p className="col-md-3 my-2">
                                            macro average<br/>micro average
                                        </p>
                                        <p className="col-md-3 my-2">
                                            0.90<br/>0.93
                                        </p>
                                        <p className="col-md-3 my-2 text-bold">
                                            0.91<br/>0.95
                                        </p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-6 my-2">Accuracy</p>
                                        <p className="col-md-3 my-2">0.93</p>
                                        <p className="col-md-3 my-2 text-bold">0.95</p>
                                    </div>
                                </div>
                                <p className="table-caption mt-3 text-center">
                                ▲ Table 4: Results of Gender Classification.
                                </p>
                            </div>
                        </div>

                        <h3 className="heading-2 my-3">Analysis 1: Difficulty of Name-Nationality Prediction</h3>
                        <p>
                        It is obvious that the model accuracy in predicting nationality is significantly lower than those in predicting gender or ethnicity. Besides the fact that the number of nationality classes is much larger than those of genders and ethnicities possibly results in the observation, <b>historical and cultural factors</b> may also contribute in part.
                        </p>

                        <h3 className="heading-3 mt-5">Ethnicity Factor in the Naming Process</h3>
                        <p>
                        The individual name often is correlated to one’s ethnicity. For instance, people with “Van” in their names are highly likely to be Dutch, whereas those with names ending in “-ov” may be offspring of East Europeans and Russians. Thus, predicting ethnicity is inherently easier than predicting country. 
                        </p>

                        <h3 className="heading-3 mt-5">Implication of Immigration</h3>
                        <p>
                        Countries with historically high immigration rates, such as the United States, accommodate citizens of diverse ethnicities. Therefore, our model cannot effectively recognize America as consisting of one representative race.
                        </p>

                        <h3 className="heading-3 mt-5">Olympian Naturalization</h3>
                        <p className="mb-5">
                        Another critical concern is the inherent dataset bias. Many Olympian athletes naturalize as another country’s citizen after being invited to participate on behalf of the country. Their naturalized nationalities are then recorded in the data, possibly resulting in an above-average naturalization rate. This factor casts doubt on the nationality representativeness of dataset.
                        </p>

                        <h3 className="heading-2 my-3">Analysis 2: High Performance in Gender Prediction</h3>
                        <p>
                        In contrast to nationality, name-gender classification results in the highest accuracy among 3 tasks. One of the reason is that this problem as a binary classification task generally has lower complexity; another reason may be that certain patterns in a name indeed can reflect one’s gender, allowing the model to successfully extract key information for classification.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <h3 className="heading-1 my-3">Conclusion</h3>
                    <p className="mb-5 w-sizer">
                    User information, such as nationality, gender and ethnicity can greatly benefit business brands’ recommendation systems to provide personalized results. To contribute to this research topic of high business value, we designed a deep learning neural network model with an embedding layer and a LSTM or CNN layer to predict nationality, gender, and ethnicity. Our techniques are highly feasible and can efficiently extract critical information, lending insightful applicability in the field of business.
                    </p>


                </div>
            </div>

            <div className="bg-1 pb-5">
                <div className="container">
                    <div className="topic-container py-3">
                        {/* <div className="subsection-wrapper">
                            <h3 className="heading-1 my-4">Takeaways</h3>
                            <ul className="list-disc">
                                <li className="mb-5">
                                    <b>NLP Training</b>
        <br/>I have gained substantial experience in training NLP models through this project. Although I have enrolled in courses like Information Retrieval, Machine Learning, and Digital Speech Processing, this is the first time my teammates and I propose and execute model experiments all on our own. Not only have I become familiar with the technical knowledge of <b>using open-source frameworks to perform training and data processing</b>, I have also grown perceptive to the training statistics by <b>critically analyzing the implication of certain metrics and investigating the cause of training failures</b>.
                                </li>
                            </ul>
                        </div> */}
                        <h3 className="heading-3 color-gray mt-5">References</h3>
                        <p className="references">
                        [1] Ye, J., Han, S., Hu, Y., Coskun, B., Liu, M., Qin, H., and Skiena, S. (2017). Nationality classification using name embeddings.<br/>[2] Jinhyuk Lee, Hyunjae Kim, Miyoung Ko, Donghee Choi, Jaehoon Choi, Jaewoo Kang. ( 2017). Name Nationality Classification with Recurrent Neural Networks.<br/>[3] Yu Kang. (2020). Name-Nationality Classification Technology under Keras Deep Learning. 
                        </p>
                        <h3 className="heading-3 color-gray mt-5">Resources</h3>
                        <p className="references">
                            Photo by <a href="https://unsplash.com/es/@thisisengineering?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ThisisEngineering RAEng</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Name;