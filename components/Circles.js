// next image
import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute bottom-0 right-0 md:-right-16 md:-bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={"/circles.png"}
        width={268}
        height={280}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Circles;
