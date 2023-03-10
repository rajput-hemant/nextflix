import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export interface CardProps {
  id: number;
  imgUrl: string;
  size: "large" | "medium" | "small";
}

const Card = ({ id, imgUrl, size = "medium" }: CardProps) => {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const sizeClasses = {
    large: "w-[218px] min-w-[218px] h-[434px] min-h-[434px]",
    medium: "w-[158px] min-w-[158px] h-[280px] min-h-[280px]",
    small: "w-[300px] min-w-[300px] h-[170px] min-h-[170px]",
  };

  const onError = () => setImgSrc("/images/fallback-image.png");
  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    // container
    <div className="cursor-pointer mr-1">
      {/* image wrapper */}
      <motion.div
        whileHover={{ ...scale }}
        className={`${sizeClasses[size]} relative inline-block hover:z-50`}
      >
        <Image
          src={imgSrc}
          alt="image"
          fill
          onError={onError}
          className="top-0 right-0 bottom-0 left-0 rounded-md object-cover object-center block max-w-full"
        />
      </motion.div>
    </div>
  );
};

export default Card;
