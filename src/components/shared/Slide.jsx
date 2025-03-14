import Image from "next/image";
import Link from "next/link";

const Slide = ({ img, text, title }) => {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={img}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="inset-0 absolute text-center bg-gradient-to-b from-black/40 to-black/70">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-md md:w-3xl text-gray-300 mb-6">{text}</p>
          <Link href="#">
            <button className="px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 py-2 rounded-md transition duration-300 hover:scale-110">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Slide;
