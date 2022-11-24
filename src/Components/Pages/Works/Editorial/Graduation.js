function Graduation() {
    let img = "https://live.staticflickr.com/65535/52505254131_1829f61a92_k.jpg";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-4 color-dark text-bold date">April 2022</h3>
                            <h2 className="mb-3">NTU IM Graduation Book</h2>
                            <h3 className="mb-3">Layout Design, Graphic Design</h3>
                    </div>
                    <div className="row mb-5">
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Duration </h3>
                            <ul>
                                <li>1 week</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Role</h3>
                            <ul>
                                <li>Lead Designer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Team</h3>
                            <ul>
                                <li>2 people</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4 mb-5">
                            <h3>Tool</h3>
                            <ul>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col mb-5">
                            <h3>Responsibilities</h3>
                            <ul className="row">
                                <li className="col-md-6">Brainstorming design concept</li>
                                <li className="col-md-6">Designing & editing a total of 16 pages</li>
                                <li className="col-md-6">Drawing drafts of illustration elements</li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>

            

            <div className="container">
                <div className="topic-container">
                    <div className="d-flex flex-column align-items-start mb-5">
                        <h3 className="heading-1 my-4">Introduction</h3>
                        <p className="">
                        This is a project to produce the graduation book for the class of 2022 in Information Management Department at National Taiwan University. In alignment of symbols of NTU, plants of coconut trees and azaleas , iconic spots of Library, College of Management, and the Main Gate are used as decorative elements. 
                        Taking inspiration from <a className="link" href="https://github.com" target="_blank" rel="noreferrer noopener">GitHub</a>, the version control tool used in the information field, our class is symbolized by a GitHub repository. A timeline takes us from the start of our college years all through the end, reviewing all significant events that unfolded in between.
                        </p>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12 p-1 m-0">
                            <img className="w-100" src={img} alt="cover mockup" />
                        </div>
                        <div className="col-md-12 p-1 m-0">
                            <img className="w-100" src="https://live.staticflickr.com/65535/52507366004_892339cfe4_h.jpg" alt="pages preview" />
                        </div>
                        <div className="col-md-12 p-1 m-0">
                            <img className="w-100" src="https://live.staticflickr.com/65535/52504768842_48bc536bd1_h.jpg" alt="pages preview" />
                        </div>
                    </div>
                    
                </div>
            </div>

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Graduation;