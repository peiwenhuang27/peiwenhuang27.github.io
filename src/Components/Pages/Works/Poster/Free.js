function Vegan() {
    let img = "https://live.staticflickr.com/65535/52505520319_656134774d_k.jpg";

    return (
        <div>
            <div className="topic-cover-img" style={{ backgroundImage:`url(${img})` }} />
            <div className="container">
                <div className="topic-container py-5">
                    <div className="topic-title-container mb-5">
                            <h3 className="mb-4 color-dark text-bold date">March 2022</h3>
                            <h2 className="mb-3">FREE</h2>
                            <h3 className="mb-3">Poster Design, Graphic Design</h3>
                    </div>
                    <div className="row">
                        <div className="topic-desc-container col-md-4">
                            <h3>Duration </h3>
                            <ul>
                                <li>2 days</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Role</h3>
                            <ul>
                                <li>Solo Designer</li>
                            </ul>
                        </div>
                        <div className="topic-desc-container col-md-4">
                            <h3>Tool</h3>
                            <ul>
                                <li>Photoshop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="topic-container section-wrapper">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="d-flex flex-column align-items-start">
                                <h3 className="heading-1 my-4">Introduction</h3>
                                <p className="">
                                This poster promotes the joy of freedom in life, which is symbolized by the dynamic of the woman dancing. The bird cages reminds that we must break free from all refrainment imposed by self and society, after which we experience the buoyant, feather-like happiness.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-5">
                            <img style={{borderRadius: "4px"}} className="w-100" src="https://live.staticflickr.com/65535/52505406272_6e8e8e88fc_h.jpg" alt="vegan is the new black poster"/>
                        </div>
                    </div>
                </div>
            </div>

            
            <div style={{height: "30vh"}}/>
            
        </div>
    );
};


export default Vegan;