import getPostMetadata from '@/utils/getPostMetadata'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  const postMetaData = getPostMetadata('posts')
  
  return (
    <div>
      {postMetaData.map((post, postIndex) => {
        return (
          <div key={postIndex} className="post-item text-white">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <Link href={`/letters/${post.slug}`}>{post.title}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Page
