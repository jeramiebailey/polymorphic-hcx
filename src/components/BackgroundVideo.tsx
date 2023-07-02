import {motion} from "framer-motion"

const BackgroundVideo = () => (
  <div className="fixed z-10 w-full h-full">
    <motion.video
      className="object-cover w-full h-full"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}
      autoPlay
      loop
      muted
      src="../assets/video.mp4" // replace with your video file
    />
  </div>
)

export default BackgroundVideo;
