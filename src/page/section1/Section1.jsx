import style from './section1.module.scss'
import { motion, scale } from "motion/react"
const Section1 = () => {
  return (
    <>
    <section>
        <h1>Section1</h1>
        <motion.div className={style.box1}
        animate={{ rotate: 360}}
        transition={{ duration: 1 }}
        ></motion.div>
        <motion.div className={style.box2}
        animate={{
          x: 1000,
          y: 500
        }}
        transition={{
          duration: 0.5,
          delay: 3,
          ease: "circIn"
        }}
        ></motion.div>
        <motion.div className={style.box3}
        initial={{
          x: 0,
          y: 0
        }}
        animate={{
          x:[0,500,500,0,0],
          y:[0,0,300,300,0],
          rotate: [0, 360, 0, -360, 0]
        }}
        transition={{
          delay: 2,
          duration: 3,
          ease: "backIn"
        }}
        ></motion.div>
        <motion.div className={style.box4}
        whileHover={{
          background: 'green'
        }}
        whileTap={{
          scale: 0.8
        }}
        >
          
          
        </motion.div>
        <motion.div className={style.box5}
        drag
        whileDrag={{
          scale: 0.8
        }}
        dragConstraints={{
          left: 0,
          top: -500,
          right: 1380
        }}
        dragDirectionLock="true" // for move object one direction at one time.
        ></motion.div>
    </section>
    </>
  )
}

export default Section1