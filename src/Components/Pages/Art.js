import { useEffect } from "react";
import Transitions from "../Transition";
import { InstaPost, InstaFeed } from "../Helpers/Insta";
import Iframe from "react-iframe";

import HorizontalScrollCarousel from "../HorizontalScrollCarousel";
import { ScrollReveal } from "../Helpers/SmoothScroll";

{/* TODO: make photos enlarge */}

function Art () {
    useEffect(() => {
        if (window.instgrm)
            window.instgrm.Embeds.process();
    }, []);

    return (
        <Transitions>
            <div className="art">
                <div className="topic-container section-wrapper">
                    <ScrollReveal>
                        <div className="title">
                            <h6>Art</h6>
                            <h4>Let's sit back and appreciate beauty in everything.</h4>
                            <p className="caption">photography, illustration, journaling, music</p>
                        </div>
                    </ScrollReveal>
                
                    <ScrollReveal>
                        <div className="interests subsection-wrapper">
                            <div className="section-wrapper">
                                <h5 className="text-center mb-5">In my free time, I capture beauty of a moment...</h5>
                                <div className="photo-feed d-flex justify-content-center flex-wrap">
                                    <img id="photo-1" className="photo p-1" alt="blue sky over seashore" src="https://unsplash.com/photos/tJXLT5m5DBw/download?ixid=MnwxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE2NjkzODE0Njk&force=true&w=1920"></img>
                                    <img id="photo-2" className="photo p-1" alt="sunset" src="https://64.media.tumblr.com/e7397c177b0d0a153d0dc56b8e6bca29/17a097e06bde82be-7b/s2048x3072/4aabc5a8b378622bb42c452c73b460bb59348f87.jpg"></img>
                                    <img id="photo-3" className="photo p-1" alt="cotton candy clouds" src="https://64.media.tumblr.com/d67f70e908c081ebf6869ac1dd0a4653/2bc0cb1353ea6c46-8e/s2048x3072/e8cee6bed8bc71cc5ee750349d003bb807b61292.jpg"></img>
                                    <img id="photo-4" className="photo p-1" alt="beijing national palace museum" src="https://64.media.tumblr.com/fc61c552668369bc97c86852caa8248d/091ae0c19a1c5d66-0d/s2048x3072/b0f2b53a08db5879758ac897d0ad3db760098181.jpg"></img>
                                    <img id="photo-5" className="photo p-1" alt="close-up of beijing national palace museum" src="https://64.media.tumblr.com/ec2bcd40149c023b98f452a6266ad612/091ae0c19a1c5d66-2f/s2048x3072/5db1a7a005d2147fdfe8acbc39f4ec451cb1da96.jpg"></img>
                                    <img id="photo-6" className="photo p-1" alt="scenery of beijing national palace museum" src="https://unsplash.com/photos/TThaFalzB4o/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NjkzODE0Njk&force=true&w=1920"></img>
                                    <img id="photo-7" className="photo p-1" alt="road in national taiwan university" src="https://64.media.tumblr.com/aef8b08635d4ccc3fda26ab972651646/ab5d0d4f1918d258-d5/s2048x3072/3d7a6041b9a2e2201433498b329af6dab408b1a4.jpg"></img>
                                    <img id="photo-9" className="photo p-1" alt="taipei 101 new year firework" src="https://64.media.tumblr.com/1d4b79c03b9311450892810ae278ba2f/61b3a9bbf50c2655-88/s1280x1920/594d7bcd4810b623e3a36567632452bbc4223513.jpg"></img>
                                    <img id="photo-8" className="photo p-1" alt="azaleas over national taiwan university" src="https://64.media.tumblr.com/3421e078bff93ceea6b64a9a0bd95d09/ab5d0d4f1918d258-d1/s2048x3072/5420a698291482cd2b9daf13e0914532a3a07121.jpg"></img>
                                    
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal>
                    <div className="mb-3">
                        <HorizontalScrollCarousel cards={cards} title={<h5 className="text-center mb-5">Unleash my imagination...</h5>} />
                    </div>
                </ScrollReveal>

                <div className="container section-wrapper">
                    <ScrollReveal>
                        <h5 className="text-center mb-5">Share my art on <a className="bold-link" href="https://www.instagram.com/pwh_27/" target="_blank" rel="noreferrer noopenner">Instagram</a>...</h5>
                        <div className="d-flex justify-content-center">
                            <InstaPost
                            dataInstaPermalink="https://www.instagram.com/p/CvjKyqCLZIV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                            linkAHref_1="https://www.instagram.com/p/CvjKyqCLZIV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                            linkAHref_2="https://www.instagram.com/p/CvjKyqCLZIV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="></InstaPost>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="section-wrapper">
                            <h5 className="text-center mb-5">And post music/covers on <a className="bold-link" href="https://www.youtube.com/@pwh_27/featured" target="_blank" rel="noreferrer noopenner">YouTube</a>!</h5>
                            <div className="about-iframe-container d-flex justify-content-center">
                                <Iframe className="flexible-iframe" src="https://www.youtube.com/embed/6UTG4yMHs8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal>
                    <div className="quote-wrapper section-wrapper">
                        <div className="container">
                            <div className="quote quotation-mark">〝</div>
                            <div className="quote">
                            If you ask me what I came to do in this world, I, an artist, will answer you: I am here to live out loud.
                            <br/>_<br/>
                            <div className="quote-author">Émile Zola</div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
                        
            </div>
        </Transitions>

    );
};

export default Art;

const cards = [
    {
      url: "https://64.media.tumblr.com/64479297d70ff52a3edac0f86f6f00f2/960eb056913c3766-b5/s2048x3072/b5463c78aa335f837c58d34a99133474130f8400.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "https://64.media.tumblr.com/1ba57eef37610a56503595a0058a4481/960eb056913c3766-b6/s2048x3072/96570822f1023a5399def8e8d0743a15bd992974.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "https://64.media.tumblr.com/f1643757d81dd15a3ead901ccfdc142e/960eb056913c3766-99/s1280x1920/b98b5816121c02f816fa9277ee417ed2e466e652.jpg",
      title: "Title 3",
      id: 3,
    },
    {
      url: "https://64.media.tumblr.com/554175393de501530d03ef879cf8e882/960eb056913c3766-bc/s2048x3072/ee76270398d5a65a60e8ebe4909fcc5e042ca69e.jpg",
      title: "Title 4",
      id: 4,
    },
    {
      url: "https://64.media.tumblr.com/0adf560794685c48ca56a9436d54ceca/960eb056913c3766-87/s2048x3072/63b2dc3195f559e3f70fe8708a4641de2218a90c.jpg",
      title: "Title 5",
      id: 5,
    },
    {
      url: "https://64.media.tumblr.com/4d19226c46a3409d8bfe6fccc7a104f8/960eb056913c3766-71/s2048x3072/cefb7558bca43d55b1fa0f66569dcd274cf894d0.jpg",
      title: "Title 1",
      id: 6,
    },
    {
      url: "https://64.media.tumblr.com/3614962bf7ce9eaff560d537ad7a37b5/960eb056913c3766-e7/s1280x1920/846da0f3e98502692c8fff08b98d47425844245d.jpg",
      title: "Title 2",
      id: 7,
    },
    {
      url: "https://64.media.tumblr.com/f910191b09a3e4a634b154ede4a5e3ea/960eb056913c3766-83/s2048x3072/b8e2196bd2cc90a5dc121480aec68ed86fdfb1e8.jpg",
      title: "Title 3",
      id: 8,
    },
    {
      url: "https://64.media.tumblr.com/ae2460449982cf325161bfd6a5f18d47/960eb056913c3766-b3/s1280x1920/24f07fe68a698792d6840e4cf43df3249ebb3fab.jpg",
      title: "Title 4",
      id: 9,
    },
    {
      url: "https://64.media.tumblr.com/619e1cc76db6e716809aa0227f75d629/960eb056913c3766-ac/s2048x3072/b0ee9ac7b2fbf5e56e1033a680316c4526e02c89.jpg",
      title: "Title 5",
      id: 10,
    },
  ];