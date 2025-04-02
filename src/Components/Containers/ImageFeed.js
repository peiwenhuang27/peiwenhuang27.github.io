export default function ImageFeed ({ imgList, isPhoto = true, wrap = true, ref = null }) {
    // imgList[i]: {"src": string, "alt": string}
    // imgType: "photo" (isPhoto), "artwork" (!isPhoto)
    let imgClassName = isPhoto ? "photo" : "artwork";
    let flexClassName = "d-flex justify-content-" + (wrap ? "center flex-wrap" : "start");

    return (
        <div className={`${imgClassName}-feed section-wrapper-bottom ${flexClassName}`} ref={ref}>
            {imgList.map((item, key) => {
                return (
                    <img
                    className={`${imgClassName} p-1`}
                    src={item.src}
                    alt={item.alt}>
                    </img>
                )
            })}
        </div>
    );
};