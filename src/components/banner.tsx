import Image from "next/image";

interface BannerProps {
  title: string;
  subtitle: string;
  imgUrl: string;
}

const Banner = ({ title, subtitle, imgUrl }: BannerProps) => {
  const onPlay = () => {
    console.log("Play");
  };

  return (
    // container
    <div className="w-full h-[80vh] relative">
      {/* left wrapper */}
      <div className="absolute w-full h-full z-10">
        {/* left */}
        <div className="flex justify-start px-16 h-full flex-col mt-24 md:w-2/5">
          {/* title */}
          <h3 className="text-5xl font-extrabold stroke-black lg:text-6xl">
            {title}
          </h3>
          {/* subtitle */}
          <h3 className="text-xl stroke-gray-500 lg:text-2xl">{subtitle}</h3>
          {/* play button wrapper */}
          <div className="flex flex-row w-full">
            {/* button with icon */}
            <button
              onClick={onPlay}
              className="flex items-center justify-center px-5 mt-5 rounded-lg py-2 bg-white w-32"
            >
              <Image
                src="/images/play_arrow.svg"
                alt="Play Icon"
                width={32}
                height={32}
              />
              {/* play text */}
              <span className="text-black font-semibold text-lg pl-1 text-center lg:text-xl">
                Play
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* banner img */}
      <div
        className="absolute w-full h-full bottom-0 bg-cover bg-['50%_50%']"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
    </div>
  );
};

export default Banner;
