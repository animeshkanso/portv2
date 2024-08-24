"use client";

const MainBody = ({ children }) => {
  return (
    <section className="w-[1058px] max-w-[1058px] min-h-screen flex items-center justify-center mx-auto text-white">
      {children}
    </section>
  );
};

export default MainBody;
