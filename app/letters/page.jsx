import getPostMetadata from '@/utils/getPostMetadata';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  const postMetaData = getPostMetadata('posts');

  return (
    <>
      <div className="text-white max-w-[612px] min-h-screen flex flex-col items-center mx-auto mt-20 sm:mt-24 md:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-4xl font-outfit font-semibold">Focus On What Matters</p>
          <p className="text-end font-instrument font-light text-sm mt-2">Ryu Letters</p>
        </div>

        {postMetaData.map((post, postIndex) => (
          <section key={postIndex} className="w-full mb-12">
            <div className="p-6">
              <Link href={`/letters/${post.slug}`} className="text-xl sm:text-2xl mb-2 text-start">{post.title}</Link>
              <p className="text-gray-400 text-sm mb-4 text-start">{post.date}</p>
              <Link href={`/letters/${post.slug}`} className="text-white hover:text-[#cccbcd] border-b text-start block">
                Read more
              </Link>
            </div>
          </section>
        ))}

        {/* Gumroad Follow Form */}
        <div className="w-full max-w-md mt-12 p-4 bg-gray-800 rounded-lg shadow-lg">
          <form className="flex flex-col gap-4" action="https://app.gumroad.com/follow_from_embed_form" method="post" id="gumroad-follow-form-embed">
            <input type="hidden" name="seller_id" value="4044817041577"/>
            <input
              id="gumroad-follow-form-embed-input"
              type="email"
              placeholder="Your email address"
              name="email"
              className="p-2 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              type="submit"
              id="gumroad-follow-form-embed-button"
            >
              Follow
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
