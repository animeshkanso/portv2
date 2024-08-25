"use client";

const MainBody = ({ children }) => {
  return (
    <section className="w-full min-h-screen flex items-start justify-center mx-auto text-white">
      {children}
    </section>
  );
};

export default MainBody;
