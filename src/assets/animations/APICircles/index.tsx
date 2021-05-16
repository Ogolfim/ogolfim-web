import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Container } from './styles';

const circleTopLeftAnimation = {
  inicial: {
    x: 0,
  },
  animate: { 
    x: [0,-46,0],
    transition: {
      duration: 7,
      repeat: Infinity
    }
  }
}

const circleBottomAnimation = {
  inicial: {
    y: 0,
  },
  animate: { 
    y: [0,-13,0],
    transition: {
      duration: 3,
      repeat: Infinity
    }
  }
}

const circleRightAnimation = {
  inicial: {
    x: -2,
    y: -2,
  },
  animate: { 
    y: [-2,6,-2],
    x: [0,-6,0],
    transition: {
      duration: 3,
      repeat: Infinity
    }
  }
}

const APICircles: React.FC = memo(() => {
  return (
    <Container>
      <svg viewBox="0 0 378 251" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle 
          initial="inicial" 
          animate="animate" 
          variants={circleTopLeftAnimation}
          cx="123.5" cy="83.5" r="51.5" stroke="#00E7C3" strokeWidth="4"/>
        <motion.circle
          initial="inicial" 
          animate="animate" 
          variants={circleBottomAnimation}
          cx="185.5" cy="197.5" r="52" stroke="#00E7C3" strokeWidth="3"/>
        <motion.circle
          initial="inicial" 
          animate="animate" 
          variants={circleRightAnimation}
          cx="324.5" cy="148.5" r="51.5" stroke="#00E7C3" strokeWidth="4"/>
        <circle cx="186" cy="133" r="78.5" stroke="#00E7C3" strokeWidth="13"/>
        <circle cx="53.5" cy="197.5" r="52" stroke="#00E7C3" strokeWidth="3"/>
        <circle cx="239.5" cy="53.5" r="52" stroke="#00E7C3" strokeWidth="3"/>
      </svg>
    </Container>
  )
})

export default APICircles;