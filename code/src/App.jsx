import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const profiles = [
    { id: 1, name: "Rahul The Foodie" },
    { id: 2, name: "Aisha Explorer" },
    { id: 3, name: "Dev Techie" },
    { id: 4, name: "Maya Artist" },
    { id: 5, name: "Kabir Creator" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f3ec] flex justify-center items-center">

      {/* Mobile Container */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-100 to-transparent pointer-events-none" />
      <div className="w-[375px] h-[750px] bg-[#fffaf5] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden relative">

        {/* Scrollable Area */}
        <motion.div className="h-full overflow-y-auto p-4 space-y-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden:{},
          show:{
            transition:{staggerChildren:0.15},
          },
        }}>
          
          {profiles.map((profile) => (
            <motion.div 
            key={profile.id}
            variants={{
              hidden:{opacity:0,y:40},
              show:{opacity: 1,y:0,
                transition:{
                  type:"spring",
                  stiffness:80,
                  damping:18
                }
              },
            }}>
            <ProfileCard
              
              name={profile.name}
              onClick={() => setIsOpen(true)}
            />
            </motion.div>
          ))}

        </motion.div>

        {/* Bottom Sheet */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Sheet */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[85%] bg-[#fff6e8] rounded-t-3xl p-6"
                drag="y"
                dragConstraints={{top: 0, bottom:300}}
                onDragEnd={(e,info)=>{
                  if(info.offset.y>150)
                    setIsOpen(false);
                }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

                <h2 className="text-xl font-semibold">
                  Profile Details
                </h2>

                <p className="text-gray-500 mt-2">
                  Yaha detailed information aayegi.
                </p>

                <button
                whiletap={{scale:0.96}}
                transition={{type:"spring", stiffness:300}}
                  onClick={() => setIsOpen(false)}
                  className="mt-6 w-full bg-orange-500 text-white py-3 rounded-xl active:scale-95 transition-transform"
                >
                  Close
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}


export default App;