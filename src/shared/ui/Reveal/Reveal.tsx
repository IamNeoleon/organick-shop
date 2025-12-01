import { motion, Variants } from 'framer-motion'
import { FC, ReactNode } from 'react'

interface RevealProps {
	children: ReactNode
	variant?: 'fade' | 'up' | 'down' | 'left' | 'right' | 'scale'
	delay?: number
	duration?: number
	once?: boolean
}

const animations: Record<string, Variants> = {
	fade: {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	},
	up: {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0 },
	},
	down: {
		hidden: { opacity: 0, y: -40 },
		visible: { opacity: 1, y: 0 },
	},
	left: {
		hidden: { opacity: 0, x: 40 },
		visible: { opacity: 1, x: 0 },
	},
	right: {
		hidden: { opacity: 0, x: -40 },
		visible: { opacity: 1, x: 0 },
	},
	scale: {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1 },
	},
}

const Reveal: FC<RevealProps> = ({
	children,
	variant = 'up',
	delay = 0,
	duration = 0.5,
	once = true,
}) => {
	return (
		<motion.div
			variants={animations[variant]}
			initial="hidden"
			whileInView="visible"
			viewport={{ once }}
			transition={{
				delay,
				duration,
				ease: 'easeOut',
			}}
		>
			{children}
		</motion.div>
	)
}

export default Reveal;