import { useEffect, useRef } from "react";
import Transitions from "../Helpers/Transition";
import { InstaPost, InstaFeed } from "../Helpers/Insta";
import Iframe from "react-iframe";

import { ReadMoreBtn } from "./About";
import ImageFeed from "../Containers/ImageFeed";
import { ScrollReveal } from "../Helpers/SmoothScroll";

// data
const photos = [
    {
        src: "https://unsplash.com/photos/tJXLT5m5DBw/download?ixid=MnwxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE2NjkzODE0Njk&force=true&w=1920",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/e7397c177b0d0a153d0dc56b8e6bca29/17a097e06bde82be-7b/s2048x3072/4aabc5a8b378622bb42c452c73b460bb59348f87.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/d67f70e908c081ebf6869ac1dd0a4653/2bc0cb1353ea6c46-8e/s2048x3072/e8cee6bed8bc71cc5ee750349d003bb807b61292.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/fc61c552668369bc97c86852caa8248d/091ae0c19a1c5d66-0d/s2048x3072/b0f2b53a08db5879758ac897d0ad3db760098181.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/ec2bcd40149c023b98f452a6266ad612/091ae0c19a1c5d66-2f/s2048x3072/5db1a7a005d2147fdfe8acbc39f4ec451cb1da96.jpg",
        alt: ""
    },
    {
        src: "https://unsplash.com/photos/TThaFalzB4o/download?ixid=MnwxMjA3fDB8MXxhbGx8Mnx8fHx8fDJ8fDE2NjkzODE0Njk&force=true&w=1920",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/1d4b79c03b9311450892810ae278ba2f/61b3a9bbf50c2655-88/s1280x1920/594d7bcd4810b623e3a36567632452bbc4223513.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/3421e078bff93ceea6b64a9a0bd95d09/ab5d0d4f1918d258-d1/s2048x3072/5420a698291482cd2b9daf13e0914532a3a07121.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/15e464052634e89b0beb1a8d5b7f6646/43c652ac65985c79-42/s1280x1920/db816a8d91620a9eb28d8726fa2d47171d58dfe7.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/9817d3fcc07d110402b9a869b78ee952/43c652ac65985c79-c7/s1280x1920/6aa4e4e031c6ffa1e5a16b50c8917c18f65fd5a1.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/9e387fef4f10e40c3cfd420d748d42e8/43c652ac65985c79-3f/s2048x3072/b233bda7c77a0c309107011a998cd79e31871fcb.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/145aa2f66bf399f30512eec57c21dd31/43c652ac65985c79-7d/s1280x1920/0ff74d8b421963e9443640c590f38ae77a36f2b5.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/5a34bb756f2febafa8cc65a873a94c37/0bfab65dd470f28c-36/s2048x3072/92b81be8a6f6769b26be9534c4e700b249672213.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/e01a19051c5436cb99fba11d11116009/43c652ac65985c79-63/s2048x3072/84b1527d87fbbc88ea1a484403769306369e4773.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/9a77a5c2c471d670d13f7a056f380837/43c652ac65985c79-1c/s1280x1920/44ad52d5ef45c0c5089a15ddb1a51c80ee9032ee.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/416457163ab3a883d103fb4dc11ba642/43c652ac65985c79-14/s2048x3072/d8b8d2f4e3805fe4801ccf9f708bf861aecdce2e.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/557c9dc4a82af9d739d7fcf90154ae61/43c652ac65985c79-6f/s2048x3072/975a4056176efa5f88c9a28a394cd5666d8d7c6b.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/b19c1018d116fe933c6c3e9130d15ab8/43c652ac65985c79-77/s2048x3072/d99d48ebeddc30cee6d26ad3215e216468a9964f.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/45b7596144a1b16846c4a8ea87bb1c45/43c652ac65985c79-8b/s2048x3072/4d45a0d52165b27aa3acbd3fe987781f752ae41d.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/ff7860a96cf4c12714e96a4b3418af4e/43c652ac65985c79-fe/s2048x3072/6dc17e047ae33ef15203bc1474f6fb02aee0654b.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/58c659aa1e9bb4014c7daa160403d7c5/43c652ac65985c79-9b/s2048x3072/4866582d13e9224cba47166349b61299e7f369b9.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/ed222d41451b085d42db3d243690cc26/43c652ac65985c79-63/s2048x3072/4e18f3346c11e5c2f991ab56752e64fbc7f53a2c.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/8fb64ca2dd00ae6e6a8a8118d745db7a/43c652ac65985c79-25/s2048x3072/1bb6e97fc33732aa8db2b1b8df999506e95f3671.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/2e3c49dfa786c1b3fefd3d1ba1f5e9b0/43c652ac65985c79-2d/s2048x3072/2536f7fca97e3ae1e5b4d5f6f2e00df00c50fee4.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/b533429da32adba2cdb7efac7ab76db6/43c652ac65985c79-d7/s2048x3072/f532fa53d18761b4e4a7700752bf0e01e06aa025.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/4bb37e7c5864f9fe4b84d262a1ba38ba/43c652ac65985c79-5c/s2048x3072/3186753544ea9388107771da686d030899070f2c.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/e2041f0354392eafa65a7f9eeef14b50/43c652ac65985c79-15/s1280x1920/dd040579dbf2c53463467ddd5cb1d0320e4f878b.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/886ee90dc792e26ae46157670c7c1832/43c652ac65985c79-77/s2048x3072/511473fa4e12e558f450d4f4cf51add3fac31696.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/b46acfa2bb30e6c78f69e35fc096ac98/43c652ac65985c79-6f/s2048x3072/0c51600a568fd65a423386349c27c1583a77c634.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/14170ec8bfa0ce3378836ae0da9d1269/43c652ac65985c79-ea/s2048x3072/f694738c55f230f19370007a76788debc6e92666.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/53a22f03a94c7fdee3d83037fb886763/43c652ac65985c79-30/s1280x1920/1858d497ad0382544a835295038aa64831eb6868.jpg",
        alt: ""
    },
];
const artworks = [
    {
        src: "https://64.media.tumblr.com/64479297d70ff52a3edac0f86f6f00f2/960eb056913c3766-b5/s2048x3072/b5463c78aa335f837c58d34a99133474130f8400.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/1ba57eef37610a56503595a0058a4481/960eb056913c3766-b6/s2048x3072/96570822f1023a5399def8e8d0743a15bd992974.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/cacdc0a97776a09021426b06b56d8719/badf96ed1e7e9ba1-9c/s1280x1920/8edaec7b029a1b17f85e53c1b74f19141a6c0ed5.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/f1643757d81dd15a3ead901ccfdc142e/960eb056913c3766-99/s1280x1920/b98b5816121c02f816fa9277ee417ed2e466e652.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/a5eca4126662fc9b34474bcb344a563e/badf96ed1e7e9ba1-9e/s2048x3072/0efbff76a9ab1bc2b76a9d6eb7f86e3561d9fc2e.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/554175393de501530d03ef879cf8e882/960eb056913c3766-bc/s2048x3072/ee76270398d5a65a60e8ebe4909fcc5e042ca69e.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/0adf560794685c48ca56a9436d54ceca/960eb056913c3766-87/s2048x3072/63b2dc3195f559e3f70fe8708a4641de2218a90c.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/4d19226c46a3409d8bfe6fccc7a104f8/960eb056913c3766-71/s2048x3072/cefb7558bca43d55b1fa0f66569dcd274cf894d0.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/3614962bf7ce9eaff560d537ad7a37b5/960eb056913c3766-e7/s1280x1920/846da0f3e98502692c8fff08b98d47425844245d.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/f910191b09a3e4a634b154ede4a5e3ea/960eb056913c3766-83/s2048x3072/b8e2196bd2cc90a5dc121480aec68ed86fdfb1e8.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/619e1cc76db6e716809aa0227f75d629/960eb056913c3766-ac/s2048x3072/b0ee9ac7b2fbf5e56e1033a680316c4526e02c89.jpg",
        alt: ""
    },
    {
        src: "https://64.media.tumblr.com/823796e7708fa7d373f6f129e04cc136/badf96ed1e7e9ba1-7d/s2048x3072/e32e2aaa6415ab11eafbff4356e7b918d3c8069a.jpg",
        alt: ""
    }
];

function Art () {
    const photoContainerRef = useRef(null);
    const photoFeedRef = useRef(null);

    useEffect(() => {
        function adjustPhotoContainerHeight() {
            if (photoContainerRef.current && photoFeedRef.current) {
                photoContainerRef.current.style.height = `${photoFeedRef.current.offsetHeight}px`;
            }
        }

        // Adjust on mount and whenever window resizes
        adjustPhotoContainerHeight();
        window.addEventListener("resize", adjustPhotoContainerHeight);

        return () => window.removeEventListener("resize", adjustPhotoContainerHeight);
    }, []);

    useEffect(() => {
        if (window.instgrm)
            window.instgrm.Embeds.process();
    }, []);

    return (
        <Transitions>
            <div className="art">
                <div className="section-wrapper">
                    <ScrollReveal>
                        <div className="topic-container title section-wrapper-bottom">
                            <h6>Art</h6>
                            <h4>Let's sit back and appreciate beauty in everything.</h4>
                            <p className="caption">photography, illustration, journaling, music</p>
                        </div>
                    </ScrollReveal>
                
                    <ScrollReveal>
                        <div className="topic-container interests">
                            <h5 className="text-center mb-5">In my free time, I capture beauty of a moment...</h5>
                        </div>
                        <ImageFeed 
                        imgList={photos}
                        />
                        
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="topic-container interests">
                            <h5 className="text-center mb-5">Unleash my imagination...</h5>
                        </div>
                        <ImageFeed
                        imgList={artworks}
                        isPhoto={false}
                        wrap={false}
                        />
                        
                    </ScrollReveal>
                </div>

                <div className="container section-wrapper-bottom">
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

                <ScrollReveal>
                    <ReadMoreBtn />
                </ScrollReveal>
                        
            </div>
        </Transitions>

    );
};

export default Art;