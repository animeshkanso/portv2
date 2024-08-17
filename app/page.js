import MainBody from "@/components/Mainbody";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-32 px-4 w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <p className="font-instrument text-4xl sm:text-5xl text-center">Hi, I am Animesh</p>
        <p className="text-center mt-8 sm:mt-16 text-base sm:text-lg font-outfit max-w-[476px]">
          I am a creator at heart. Fueled by curiosity and passion for turning ideas into reality. Since I love creating things, I am into entrepreneurship and want to start my own business.
          <br /><br />
          I have always been inspired by visionaries like Steve Jobs, who had an incredible ability to turn ideas into something truly special.
        </p>
      </div>
      {/* <MainBody /> */}
    </div>
  );
};

export default Page;
