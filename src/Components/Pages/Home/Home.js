import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "./Banner";
import WorkDisplay from "./WorkDisplay";


function Home (meta) {
    const location = useLocation();
    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            let h = elem.offsetTop - document.getElementsByClassName('header')[0].offsetHeight;
            if (elem) {
                // window.setTimeout( ()=>{ elem.scrollIntoView({behavior: "smooth"}) }, 50 );
                window.setTimeout( ()=>{ window.scrollTo({top: h, left: 0, behavior: "smooth"}) }, 50 );
            }
        } 
        else {
            window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location,]);

    const data = meta.data;

    return (
        <div className="main">
            <Banner />
            <div id="works">
                <WorkDisplay id="works" data={data} />
            </div>

            <Outlet />
        </div>
    );
};

export default Home;