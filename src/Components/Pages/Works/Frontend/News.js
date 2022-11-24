var Latex = require("react-latex");

function News() {
    const img_src = 'https://unsplash.com/photos/I79wWVFyhEQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTY5ODMx&force=true&w=1920';
    // const img_ph  = 'https://unsplash.com/photos/I79wWVFyhEQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY5MTY5ODMx&force=true&w=640';

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img_src})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-4 color-dark text-bold date">November 2020-January 2021</h3>
                            <h2 className="mb-3">Classifying True & Fake News</h2>
                            <h3 className="mb-3">Data Science, Information Retrieval & Text Mining, Fake News</h3>
                            
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
                                <li>Engineer</li>
                                <li>Report Editor</li>
                                <li>Presenter</li>
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
                                <li className="">Python</li>
                                <li className="">NLTK</li>
                                <li className="">Sci-kit Learn</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col mb-5">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-6">Data Preprocessing</li>
                                <li className="col-md-6">Feature Selection</li>
                                <li className="col-md-6">kNN Model Implementation</li>
                                <li className="col-md-6">Report Revision</li>
                                <li className="col-md-6">Oral Presentation</li>
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
                        The 2020 U.S. presidential election was the talk of the world. The vote of each person could possibly affect the result of the election, and even the political situation of most countries. Thus, many websites may spread “fake news” that is composed of false stories presented as news, with a view to changing one’s political view. However, such fake news without authenticity and neutrality, is in fact harmful for the public. 
                        </p>
                        

                        <h3 className="heading-1 my-4">Objective</h3>
                        <h3 className="heading-3 my-3 w-sizer-lg">
                        We aim to perform <span className="color-bright">classification on documents into true news or fake news</span> to reduce information distortion among media.
                        </h3>

                        <p className="mb-5">
                            Using Chi-square feature selection, with the number of features as parameter, combined with three different models, including k-Nearest Neighbors, Rocchio, and Naïve Bayes Multinomial classification, the best model according to the 10-fold cross validation will be chosen in terms of the overall weighted average F1 accuracy, where the model will be further tested its performance. 
                        </p>
                        
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-3 color-dark mt-5">Methodology </h3>
                    <h3 className="heading-1 my-3">Flow Chart</h3>
                    <div className="mt-5 d-flex flex-column align-items-center">
                        <img className="w-75" src="https://64.media.tumblr.com/897c7e1313ddbfc916e9f99b68776b75/478340bd3ca5f7d7-9f/s2048x3072/9d86b43cca5bc31929492d6def6df98597c22814.pnj" alt="System Structure" />
                        <p className="table-caption mt-3">Figure 1: Flow chart of the overall process of the experiment.</p>
                    </div>

                    <h3 className="heading-1 my-3">Dataset</h3>
                    
                    <p className="w-sizer mb-3">
                    The dataset [1] we use in this project contains 44,898 news documents, 21,417 of which are true news, and the other 23,481 are fake news.
                    </p>

                    <div id="news-table-1" className="my-5 table-container d-flex flex-column align-items-center">
                        <div className="w-100">
                            <div className="w-100 row table-header">
                                <p className="col-md-3 my-2 text-bold">Title</p>
                                <p className="col-md-3 my-2 text-bold">Text</p>
                                <p className="col-md-3 my-2 text-bold">Subject</p>
                                <p className="col-md-3 my-2 text-bold">Date</p>
                            </div>
                            <div className="table-body">
                                <div className="w-100 row">
                                    <p className="col-md-3 my-2">As U.S. budget fight looms, Republicans flip their fiscal script</p>
                                    <p className="col-md-3 my-2">WASHINGTON (Reuters) - The head of a conservative Republican faction in the U.S. Congress, who voted...</p>
                                    <p className="col-md-3 my-2">politicsNews</p>
                                    <p className="col-md-3 my-2">December 31, 2017</p>
                                </div>
                                <div className="w-100 row">
                                    <p className="col-md-3 my-2">U.S. military to accept transgender recruits on Monday: Pentagon</p>
                                    <p className="col-md-3 my-2">WASHINGTON (Reuters) - Transgender people will be allowed for the first time to enlist in the U.S. m...</p>
                                    <p className="col-md-3 my-2">politicsNews</p>
                                    <p className="col-md-3 my-2">December 29, 2017</p>
                                </div>
                            </div>
                            <div className="table-caption mt-3">
                            ▲ Table 1: True.csv dataset (partial): title, text, subject, and date.
                            </div>
                        </div>
                    </div>

                    <div id="news-table-2" className="my-5 table-container d-flex flex-column align-items-center">
                        <div className="w-100">
                            <div className="w-100 row table-header">
                                <p className="col-md-3 my-2 text-bold">Title</p>
                                <p className="col-md-3 my-2 text-bold">Text</p>
                                <p className="col-md-3 my-2 text-bold">Subject</p>
                                <p className="col-md-3 my-2 text-bold">Date</p>
                            </div>
                            <div className="table-body">
                                <div className="w-100 row">
                                    <p className="col-md-3 my-2">Donald Trump Sends Out Embarrassing New Year’s Eve Message; This is Disturbing</p>
                                    <p className="col-md-3 my-2">Donald Trump just couldn’t wish all Americans a Happy New Year and leave it at that. Instead, he had...</p>
                                    <p className="col-md-3 my-2">News</p>
                                    <p className="col-md-3 my-2">December 31, 2017</p>
                                </div>
                                <div className="w-100 row">
                                    <p className="col-md-3 my-2">Drunk Bragging Trump Staffer Started Russian Collusion Investigation</p>
                                    <p className="col-md-3 my-2">House Intelligence Committee Chairman Devin Nunes is going to have a bad day. He s been under the as...</p>
                                    <p className="col-md-3 my-2">News</p>
                                    <p className="col-md-3 my-2">December 31, 2017</p>
                                </div>
                            </div>
                            <div className="table-caption mt-3">
                            ▲ Table 2: Fake.csv dataset (partial): title, text, subject, and date.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container subsection-wrapper">
                    <h3 className="heading-1 my-3">Preprocessing</h3>
                    <h3 className="heading-3 mt-1 mb-3">Splitting train/test data</h3>
                    <p>The original data are divided into training documents and testing documents by a random approach [2]. </p>
                    <ul className="list-disc">
                        <li className="">
                        <Latex>{`$$\\it{rand\\_N}$$`}</Latex>: Randomly choose an integer between 1000 and 5000, which will determine the size of the test set. 
                        </li>
                        <li className="">
                        <Latex>{`$$\\it{rand\\_fake}$$`}</Latex>: Randomly choose a decimal between 0.4 and 0.6, 
                        determining the proportion of true news in the testing documents while not making the data too imbalanced in terms of the distribution of the classes. 
                        Then, <Latex>{`$$\\it{rand\\_fake}$$`}</Latex> is computed by <Latex>{`$$1 - \\it{rand\\_true}$$`}</Latex>. 
                        </li>
                        <li className="">
                        <Latex>{`$$\\it{ind\\_true\\_test}$$`}</Latex>, <Latex>{`$$\\it{ind\\_fake\\_test}$$`}</Latex>:
                        Randomly sample the indices of documents in the set of true news and fake news with the size of
                        <Latex>{`$$\\it{rand\\_true}$$`}</Latex>, <Latex>{`$$\\it{rand\\_fake}$$`}</Latex>, respectively.
                        </li>
                    </ul>

                    <h3 className="heading-3 mt-5">Text Preprocessing</h3>
                    <p>
                    All of the documents are preprocessed by the following procedure for tokenization and normalization: 
                    </p>
                    <ul className="list-disc">
                        <li className="">Lowercasing</li>
                        <li className="">Cutting documents into tokens</li>
                        <li className="">Stop word removal</li>
                        <li className="">Removal of punctuations and accents</li>
                        <li className="">Porter stemming</li>
                        <li className="">Second stop word removal</li>
                    </ul>

                    <h3 className="heading-3 mt-5">Feature Selection</h3>
                    <p>
                    Considering the tremendous dictionary size, features selection is employed to achieve similar accuracy while speeding up the computation time. We experiment three selection methods:
                    </p>
                    <ul className="list-disc">
                        <li className="">Chi-square selection</li>
                        <li className="">Expected Mutual Information selection</li>
                        <li className="">Log-Likelihood Rate selection</li>
                    </ul>

                    <p>
                    While comparing the selected features with different approaches, we found that the features chosen with three feature selection methods are similar as several repetitive terms appear in all three lists of features. Therefore, for the sake of simplicity, we only choose Chi-square score to be the main selection technique here.
                    </p>
                    <p>
                    Our algorithm will first compute the Chi-square scores for all terms in the True class and Fake class separately, and choose the k/2 features with the largest scores, where k represents the number of total features. The final list of k features are the combination of two k/2 features from both classes.
                    Note that there are several features occurring in both true and fake classes, such as “State”, “Presid”, “Trump”, and many more. This could severely affect our classification, as will be discussed in the following sections.
                    </p>
                    <div className="row">
                        <div className="col-md-6 mt-5 d-flex flex-column align-items-center">
                            <img width="450px" height="300px" src="https://64.media.tumblr.com/ff4ee658bff250e0104cb8d212299f0a/478340bd3ca5f7d7-70/s2048x3072/7f5a292cc98f2d7aa5f168e267d85119960ec8e9.pnj" alt="System Structure" />
                            <p className="table-caption mt-3">Figure 2: True class features under Chi-square selection, expressed in text cloud.</p>
                        </div>
                        <div className="col-md-6 mt-5 d-flex flex-column align-items-center">
                            <img width="450px" height="300px" src="https://64.media.tumblr.com/be8814c73c820499d3bff1da2372d715/478340bd3ca5f7d7-45/s2048x3072/706d73f3935e3fbcfeda76bfc6731f9eb4c0fad4.pnj" alt="System Structure" />
                            <p className="table-caption mt-3">Figure 3: Fake class features under Chi-square selection, expressed in text cloud.</p>
                        </div>
                    </div>

                    <h3 className="heading-3 mt-5">Classification Model </h3>
                    <p>
                    We implement 3 models for comparison:
                    </p>
                    <ul className="list-disc">
                        <li>Naïve Bayes Multinomial Classification</li>
                        <li>k-th Nearest Neighbor (k = 3)</li>
                        <li>Rocchio</li>
                    </ul>
                    <p>
                    These models will be paired with several different parameters in the cross validation phase to get the best model.
                    </p>

                    <h3 className="heading-1 mt-5 mb-3">10-fold Cross Validation</h3>
                    <p>
                    We shuffle the original training data and randomly split it into ten folds. Additionally, the number of features is also set as a hyper-parameter which is tuned to obtain the best result. The possible numbers of features include 300, 500, 800, and 1,000.
<br/><br/>
Using different numbers of features and three classification models, we will perform all 12 combinations of training methods in each of the ten validating iterations. 
                    </p>
                
                </div>
            </div>

            <div className="bg-1">
                <div className="container">
                    <div className="topic-container section-wrapper">
                        <h3 className="heading-3 color-dark ">Model Performance Evaluation</h3>
                        <h3 className="heading-2 mt-1 mb-3">Test performance— F1 measure </h3>
                        <p>
                        In 10-fold cross validation, a F1 score is obtained for different combinations of feature selection method and model. Moreover, since the number of documents in each fold is not equal, we use weighted average to compute F1 to factor in the data size. 
                        </p>

                        <div id="news-table-3" className="my-5 table-container d-flex flex-column align-items-center">
                            <div className="w-100">
                                <div className="w-100 row table-header">
                                    <p className="col-md-3 my-2 text-bold"></p>
                                    <p className="col-md-3 my-2 text-bold">Naïve Bayes Multinomial</p>
                                    <p className="col-md-3 my-2 text-bold">Rocchio</p>
                                    <p className="col-md-3 my-2 text-bold">k-th Nearest Neighbors</p>
                                </div>
                                <div className="table-body">
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">300 features</p>
                                        <p className="col-md-3 my-2">0.642</p>
                                        <p className="col-md-3 my-2">0.306</p>
                                        <p className="col-md-3 my-2 text-bold">0.860</p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">500 features</p>
                                        <p className="col-md-3 my-2">0.644</p>
                                        <p className="col-md-3 my-2">0.528</p>
                                        <p className="col-md-3 my-2 text-bold">0.858</p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">800 features</p>
                                        <p className="col-md-3 my-2">0.639</p>
                                        <p className="col-md-3 my-2">0.591</p>
                                        <p className="col-md-3 my-2 text-bold">0.862</p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-3 my-2">1000 features</p>
                                        <p className="col-md-3 my-2">0.641</p>
                                        <p className="col-md-3 my-2">0.511</p>
                                        <p className="col-md-3 my-2 text-bold">0.862</p>
                                    </div>
                                </div>
                                <div className="table-caption mt-3">
                                ▲ Table 3: Cross validation result with 12 different training methods.
                                </div>
                            </div>
                        </div>
                        <p>
                        According to Table 3, kNN outperforms Naïve Bayes Multinomial and Rocchio. In terms of the numbers of features, though there are no significant differences between the results, F1 score with 1,000 features scores highest at approximately 0.862. Therefore, we use <b>kNN model and 1,000 features</b> in testing to evaluate the performance.
                        </p>

                        <div id="news-table-4" className="my-5 table-container d-flex flex-column align-items-center">
                            <div className="w-sizer-sm">
                                <div className="w-100 row table-header">
                                    <p className="col-md-6 my-2 text-bold"></p>
                                    <p className="col-md-6 my-2 text-bold">Performance</p>
                                </div>
                                <div className="table-body">
                                    <div className="w-100 row">
                                        <p className="col-md-6 my-2">Precision</p>
                                        <p className="col-md-6 my-2">0.397</p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-6 my-2">Recall</p>
                                        <p className="col-md-6 my-2">0.608</p>
                                    </div>
                                    <div className="w-100 row">
                                        <p className="col-md-6 my-2">F1 Score</p>
                                        <p className="col-md-6 my-2">0.480</p>
                                    </div>
                                </div>
                                <div className="table-caption mt-3">
                                ▲ Table 4: Testing performance score.
                                </div>
                            </div>
                        </div>
                        <p>
                        As per shown on Table 4, the precision of this model is 0.39, recall is 0.60, and F1 score is 0.48, which is not a fairly good performance. 
                        </p>
                    

                    <div className="subsection-wrapper">
                        <h3 className="heading-1 my-3">Analysis</h3>
                        <p>
                        In this section, we analyze factors which may contribute to the low performance of our model.
                        </p>

                        <div>
                            <h3 className="heading-3 mt-5">1. Repetitive Terms in Both Classes</h3>
                            <p>
                            Regardless of the feature selection method, both True and Fake news classes include repetitive terms (e.g. “State”, “Trump”, “Hous”, “Presid”,…). This redundancy rids these words off any discriminating power and the classification problem is consecutively much more difficult. 
                            </p>
                        </div>

                        <div>
                            <h3 className="heading-3 mt-5">2. Overfitting of Non-linear Models</h3>
                            <p>
                            Since k-th Nearest Neighbors is a nonlinear classifier, it is highly possible for the model built in the training process to overfit with some features. 
                            </p>
                        </div>

                        <div>
                            <h3 className="heading-3 mt-5">3. Ambiguous Definition of “Fake News”</h3>
                            <p>
                            The definition of “True” and “Fake” news in our project is obscure, which may be the most difficult issue for detecting fake news. Should the article belong to “True” news because it comes from a reputable website? Or because of some particular professional terms and jargons used in the news? Or perhaps based on whether the event described actually happened? Labeling the news as True or Fake requires humans to inspect and make a judgement on the trueness of the document, and sometimes such <b>way of verification could be subjective and lacking accurate definition</b>. 
                            </p>
                        </div>

                        <div>
                            <h3 className="heading-3 mt-5">4. Varied Writing Styles of Fake News</h3>
                            <p>
                            The fake news in this dataset is collected from a variety of sources, meaning that fake news may be generated by different language models, resulting in different term usages and writing styles. It thus becomes fairly difficult to classify all of them correctly, since fake news may even have low similarities with each other. 
                            </p>
                        </div>

                        <div>
                            <h3 className="heading-3 mt-5">5. Need for Complex Classification Approach</h3>
                            <p>
                            Feature-based traditional text classification may not be the most suitable method to solve this problem. For example, sentiment analysis and BERT are all possible alternatives to distinguish true news from fake ones. In the future, we may experiment with more sophisticated models such as neural network to tackle this problem.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <h3 className="heading-1 my-4">Conclusion</h3>
                    <p className="mb-5">
                    As widely acknowledged among the academy, detecting fake news is an extremely complex and difficult task. Recent technology advancement also makes the creation and spreading process of fake news easier, raising the urgency and importance of the solution to this problem to a higher level.
In this project, we performed fake news classification with the traditional IR approach. In future, we will first clarify the definition of true and fake news and employ other techniques on the same dataset for improvement. We have researched studies to get insights to fake news detection. N-gram, one of the models often employed to detect fake news, is a possible alternative with which we will experiment.
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
                                <li className="mb-5">
                                <b>Literature Review</b>
    <br/>As our graduation project, this is the first time I work with a research advisor to review previous studies upon which we base new research ideas. I reviewed 10+ papers on NLP chatbot models, including whether to design the system as a pipeline or an end-to-end model, how specific modules in the dialogue system can be trained with novel models. In the process, I learned to <b>identify and search for studies with target topics</b>, <b>skim through papers to extract key information, incorporate different research to propose new methods</b>.
                                </li>
                                <li className="mb-5">
                                <b>Communication & Collaboration</b>
    <br/>Working with a team of 6 people, I have significantly improved my communication skills. I have been the mediator among teammates to <b>resolve conflicts</b> on our research directions, the coordinator to <b>periodically verify team progress and revise project schedule</b> accordingly, and the presenter to <b>report our experiments weekly</b> to the research advisor. All these experiences honed my people skills, enabling me to become a better team player in future team projects.
                                </li>
                            </ul>
                        </div> */}
                        <h3 className="heading-3 color-gray mt-5">References</h3>
                        <p className="references">
                        [1] Clément Bisaillon, Fake and real news dataset: classifying the news (2020), https://www.kaggle.com/clmentbisaillon/fake-and-real-news-dataset <br/>
[2] random- Generate pseudo-random numbers, Python 3.9.1 Documentation, https:// docs.python.org/3/library/random.html <br/>
[3] stop list, IR linguistics utilities, IR resources, School of Computing Science, University of Glasgow, http://ir.dcs.gla.ac.uk/resources/linguistic_utils/ stop_words <br/>
[4] nltk.stem.porter, NLTK 3.5 documentation, https://www.nltk.org/_modules/nltk/ stem/porter.html <br/>
[5] Ahmed H, Traore I, Saad S. “Detecting opinion spams and fake news using text classification”, Journal of Security and Privacy, Volume 1, Issue 1, Wiley, January/February 2018. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;