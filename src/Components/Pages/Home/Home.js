import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion  } from "framer-motion";
import Banner from "./Banner";
import WorkDisplay from "./WorkDisplay";
import Transitions from "../../Transition";

function Home ({ data }) {
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
    }, [location,]);

    return (
        <Transitions key="home">
            <div className="main">
                <Banner />
                <div id="works">
                    <WorkDisplay data={data} />
                </div>

                <Outlet />
            </div>
        </Transitions>
    );
};

export default Home;