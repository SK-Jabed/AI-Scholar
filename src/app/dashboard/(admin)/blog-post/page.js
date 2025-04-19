import BlogForm from '@/components/blog-post/blogpost'
import React from 'react'

export default function BlogPost() {
  return (
    <div>
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">📝 Create New Blog</h2>
      <div>
        <BlogForm/>
      </div>
    </div>
  )
}
