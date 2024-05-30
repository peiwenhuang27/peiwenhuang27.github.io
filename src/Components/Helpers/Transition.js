import { motion } from "framer-motion";

const transition = { duration: 0.8 , ease: "linear" };
// [0.43, 0.13, 0.23, 0.96]

const animationConfiguration = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const Transitions = ({ children }) => {
	return (
		<motion.div
			// key={key}
			variants={animationConfiguration}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={transition}
		>
			{children}
		</motion.div>
	);
};
export default Transitions;