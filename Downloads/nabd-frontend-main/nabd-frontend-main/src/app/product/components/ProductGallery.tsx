"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzS6UQ9BzVkaOP4-lYGJ3E3eC-b-nv1sEs_O0E-cV7xyrBOOPYfdMxgV4fyUR6N_j71gwEyCvJGOe1yQ9bjSG80RZqCoiN_Mtvorzy5xICLA2bdX32rH1ZfixW6pF5I4w0eK1thn0Da6p4i-3n9mxobFmC-_sm_xJkuZJKST7enQTc-UzgB_bF8s29apNH4yX33pGk_mfLL8TN-6EM9iovlvfEqcAf3Uk3-_QeAdKwpvxdOhqM9-OUdU6d68pXVhhHezN1pwqGz18",
    alt: "Futuristic medical glove close up on dark background",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl4ZHULbbuXTpw34TQAn29fz0U_elfx1JNqf1FrbmCVfRh_EeLzoErIHvnxKiIW0CGwqz3PMLFJwZGxdIFwpyOBzb0BTvRH1qVQ9ryCosqqTB2t0eewo3GbCX4TWFiH8dlge2Zp6VJ4U8D0lPdQ2RM10z8vJB_vZARQWMTpvheq9nHNk3KrMusyEG6ZVGMvDocf2pxD6CORCXrvt6ZJOXoBb_yx0NSMHNOqfb5GLwFswAgYtNEm1zE4X4WJdra2IwUFUkVjLNBxIM",
    alt: "Medical doctor holding advanced device",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByUqxaW82oa_J2uWlFCthpCTseztbV6C6e3z-LIpc8nbpuQtHgPMRRSA3xAANHbuCxbMVVVivLJNPfxMQt9IVz-cdvHhWj48jqXWuyRYTtahQWpAxN24DpKxn8AQCOpUmsODXtZeBcVzENaTCA1WBPLVWQ545Lz1oax-xaz0zvj6AmFHxyAbIiLfipwXHauXDwZ21YKk2spNAmu8Fws51zCVxRiIF9-JebV_LL3uWUZx4QYAuKlOumsTLO-Y4Wc8rX9lDwgLs7ncE",
    alt: "Clean medical lab setting with equipment",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSuquzgc31er6Z6XuQxno5kaClYCfmpmd68ocbKffLWz7KCmuucrwCeRYXMmLtshs2zyAsj7SOXeSpTGweMcTXS2LBDxixB-kU8XoZ8zT0g8z1g15BVHcwJTmKvJQPDMePjHxZombJm_tH-GbRe5_vqTDnRWgGi_D9TiFJXHfZeATrpoWwngLq2k4ATtrFogG8zgV_1quZiZvnv3HcVbfH_J-fJUC7Y6cfwXqqWGGzA3GBxNqTA3CmhtjlU1UamT6K4bW_LUQEUes",
    alt: "Data visualization on tablet screen",
  },
];

export function ProductGallery() {
  const [activeImage, setActiveImage] = useState(productImages[0].src);
  const [is360Mode, setIs360Mode] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleDrag = (_event: any, info: any) => {
    setRotation(rotation + info.delta.x * 0.5);
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {/* Main Image Pane */}
      <div className="w-full aspect-[4/3] bg-[#0d1117] rounded-xl overflow-hidden border border-border-dark relative group">
        <AnimatePresence mode="wait">
          {!is360Mode ? (
            <motion.img
              key={activeImage}
              src={activeImage}
              alt="Product View"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.div
              key="360"
              className="w-full h-full flex flex-col items-center justify-center bg-[#0d1117] relative cursor-grab active:cursor-grabbing select-none"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
              onDrag={handleDrag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-[160px]">
                  360
                </span>
              </div>
              <motion.img
                src={productImages[0].src}
                className="w-full h-full object-contain pointer-events-none p-8"
                style={{ rotateY: rotation }}
              />
              <div className="absolute bottom-6 bg-black/80 px-4 py-2 rounded-full text-white text-sm backdrop-blur flex items-center gap-2 pointer-events-none border border-white/10 shadow-lg">
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
                Drag to rotate horizontally
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIs360Mode(!is360Mode);
          }}
          className={`absolute bottom-4 left-4 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all outline-none z-10 hover:shadow-lg ${
            is360Mode
              ? "bg-primary text-white border-transparent"
              : "bg-black/60 text-white border border-white/10 hover:bg-black/80"
          }`}
        >
          <span className="material-symbols-outlined text-sm">360</span>
          {is360Mode ? "Exit 360°" : "360° View"}
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3">
        {productImages.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveImage(img.src);
              setIs360Mode(false);
            }}
            className={`aspect-square bg-[#0d1117] rounded-lg overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-md ${
              activeImage === img.src && !is360Mode
                ? "border-primary ring-2 ring-primary/40 ring-offset-1 ring-offset-background-dark"
                : "border-border-dark hover:border-primary/50"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}

        {/* Video Trigger */}
        <button
          onClick={() => setIsVideoOpen(true)}
          className="aspect-square bg-[#0d1117] rounded-lg overflow-hidden border border-border-dark hover:border-primary/50 transition-all flex items-center justify-center group hover:-translate-y-1 hover:shadow-md relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="material-symbols-outlined text-text-secondary group-hover:text-primary group-hover:scale-110 transition-all text-3xl z-10">
            play_circle
          </span>
          <span className="absolute bottom-2 text-[10px] font-bold text-text-secondary font-display uppercase tracking-wider group-hover:text-primary z-10 transition-colors">
            Video
          </span>
        </button>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <button
              className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors bg-white/10 rounded-full p-2 backdrop-blur-md"
              onClick={() => setIsVideoOpen(false)}
            >
              <span className="material-symbols-outlined text-2xl block">close</span>
            </button>
            <motion.div
              className="w-full max-w-[1000px] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 relative"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="https://cdn.pixabay.com/video/2019/11/08/28905-373351949_large.mp4"
                controls
                autoPlay
                loop
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
