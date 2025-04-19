"use client"
export default function BlogForm() {
  const handleBlogForm =(e)=>{
    e.preventDefault()
  }

  const handleBlogImage = async (event)=>{
    const file = event.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "profile_images");
    data.append("cloud_name", "dcibmye5q");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dcibmye5q/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const imageData = await res.json();
    const imageUrl = imageData.secure_url;

    console.log(imageUrl)
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white border rounded-2xl p-8">
      <form onSubmit={handleBlogForm} className="space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleBlogImage}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows="5"
            placeholder="Write your blog content here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
}
