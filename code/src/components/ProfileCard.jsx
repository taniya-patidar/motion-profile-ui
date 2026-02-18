import img from "../assets/Girl.webp";
import {motion} from "motion/react";

const ProfileCard = ({ onClick }) => {
  return (
    <motion.div onClick={onClick} whileHover={{scale:1.03, y:-5}}
    whileTap={{scale:0.97}}
    transition={{type:"spring",
      stiffness:300,
      damping:18
    }} 
    className="bg-white/80 backdrop-blur-md rounded-2x1 shadow-[0_10px_30px_rgba(255,140,0,0.15)]  p-5 cursor-pointer">
      <motion.img
      whileHover={{scale:1.09}}
      transition={{duration:0.3}}
        src={img}
        alt="profile"
        className="w-42 h-42 object-cover  rounded-full mx-auto shadow-md"
      />

      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Rahul The Foodie
        </h2>

        <motion.span 
        animate={{ scale:[1, 1.3,1]}}
        transition={{ repeat:Infinity,
          duration:4
        }}
        className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs mt-2">
          95% match
        </motion.span>

        <div className="flex justify-center gap-2 mt-3">
          <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
            Food
          </span>
          <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
            Travel
          </span>
          <span className="bg-gray-100 px-3 py-1 text-xs rounded-full">
            Student
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          12k Followers | High Reach
        </p>

      </div>
    </motion.div>
  );
};

export default ProfileCard;