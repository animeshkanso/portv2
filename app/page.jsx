"use client"
import MainBody from "@/components/Mainbody";

const Page = () => {

  return (
    <MainBody>
      <div className="mt-32">
        <div className="flex flex-col justify-center items-center text-white">
          <p className="font-instrument text-3xl sm:text-5xl">Hi, I am Animesh</p>
          <p className="text-center w-full max-w-[476px] mt-12 text-base sm:text-lg">
            I am a creator at heart. Fueled by curiosity and passion for turning ideas into reality. Since I love creating things, I am into entrepreneurship and want to start my own business.
            <br /><br />
            I have always been inspired by visionaries like Steve Jobs, who had an incredible ability to turn ideas into something truly special.
          </p>
        </div>
      </div>
    </MainBody>
  );
};

export default Page;
