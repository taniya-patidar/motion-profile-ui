import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
// import girl1 from "./assets/Girl.webp";
import girl2 from "./assets/Girl1.avif";
import girl3 from "./assets/Girl3.jpg";
import girl4 from "./assets/Girl4.jpg";
import girl5 from "./assets/Girl5.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      id: 1,
      name: "Rahul The Foodie",
      img: girl5,
      detail: "Food Blogger from Bhopal",
      contact: "888771111",
    },
    {
      id: 2,
      name: "Aisha Explorer",
      img: girl4,
      detail: "Travel Influencer from Delhi",
      contact: "888772222",
    },
    {
      id: 3,
      name: "Dev Techie",
      img: girl2,
      detail: "Software Developer from Indore",
      contact: "888773333",
    },
    {
      id: 4,
      name: "Maya Artist",
      img: girl3,
      detail: "Digital Artist from Mumbai",
      contact: "888774444",
    },
    {
      id: 5,
      name: "Kabir Creator",
      img: girl5,
      detail: "Content Creator from Pune",
      contact: "888775555",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f3ec] flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-100 to-transparent pointer-events-none" />

      <div className="w-[375px] h-[750px] bg-[#fffaf5] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden relative">
        
        {/* Scrollable Area */}
        <motion.div
          className="h-full overflow-y-auto p-4 space-y-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                  },
                },
              }}
            >
              <ProfileCard
                name={profile.name}
                img={profile.img}
                onClick={() => {
                  setSelectedProfile(profile);
                  setIsOpen(true);
                }}
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
                dragConstraints={{ top: 0, bottom: 300 }}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 150) setIsOpen(false);
                }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

                <h2 className="text-xl font-semibold">
                  {selectedProfile?.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  Detail: {selectedProfile?.detail} <br />
                  Contact: {selectedProfile?.contact}
                </p>

                <button
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
