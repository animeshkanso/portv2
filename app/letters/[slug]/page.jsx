import React from 'react'
import getPostMetadata from '@/utils/getPostMetadata'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

// This function generates static paths for each post based on its slug
export async function generateStaticParams() {
  const postMetaData = getPostMetadata('posts')
  
  return postMetaData.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = ({ params }) => {
  const { slug } = params

  // Fetch the post content based on the slug
  const fileContents = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  const { content, data } = matter(fileContents)

  return (
    <div className="post-content text-white">
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div>{content}</div>
    </div>
  )
}

export default PostPage
