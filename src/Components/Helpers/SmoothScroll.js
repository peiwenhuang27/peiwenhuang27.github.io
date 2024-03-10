import { useState, useEffect, useRef } from "react";

// framer
import { motion, useScroll, useSpring, useTransform, useAnimation } from 'framer-motion';
// react-intersection
import { useInView } from "react-intersection-observer";

// ref: https://dev.to/ironcladdev/smooth-scrolling-with-react-framer-motion-dih

const variants = {
    visible: { opacity: 1, translateY: 0, 
        transition: {
            type: "spring",
            duration: 0.3,
            delay: 0.2,
            stiffness: 50,
        }},
    hidden: { opacity: 0,  translateY: 100},
};

function SmoothScroll ({ children }) {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    const { scrollYProgress } = useScroll();
    // apply the smooth effect to the scrollYProgress value
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })

    useEffect(() => {
        const handleResize = () => {
            if(contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [contentRef, children]);

    const y = useTransform(smoothProgress, value => {
        return value * -(contentHeight - window.innerHeight);
    });

    return (
        <>
            <div style={{height: contentHeight }} />
            <motion.div className="scrollBody"
            style={{ y }}
            ref={contentRef}
            >
                {children}
            </motion.div>
        </>
    );
}

function ScrollReveal ({ children }) {
    // scroll animation
    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } 
        else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={control}
        >
            {children}
        </motion.div>
    )
}

export default SmoothScroll;
export { ScrollReveal };