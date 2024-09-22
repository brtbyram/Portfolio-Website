import {animate, motion} from 'framer-motion'

function Stairs() {

    const stairAnimate = {
        initial: {
            top: "0%",
        },
        animate: {
            top: "100%",
        },
        exit: {
            top: ["100%", "0%"], // bu şekilde birden fazla değer verebiliriz ve bu değerler arasında geçiş yapar 
        }  
    }
    
    const reverseIndex = (index) => {
        const totalSteps = 6 // 6 tane basamak var
        return totalSteps - index - 1 // 6 - 0 - 1 = 5
    }

  return (
    <>
    {[...Array(6)].map((_, index) => (
        <motion.div
            key={index}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stairAnimate}
            transition={{
                duration: 0.4,
                delay: reverseIndex(index) * 0.1,
                ease: "easeInOut",
            }}
            className="h-full w-full bg-white relative"
        />
    ))}
    </>
  )
}

export default Stairs