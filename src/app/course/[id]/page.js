
import EnrollButton from "@/components/enrollbutton/enrollbutton";
import React from "react";

export default async function Page({ params }) {
  const { id } = params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/courses/get-course/details/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch course. Status: ${res.status}`);
    }

    const course = await res.json();
    const data = course?.data;

    return (
      <div className="min-h-screen bg-gray-100 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden py-4">
          {/* Course Image */}
          <div
            className="w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${data?.image})` }}
          ></div>

          <div className="p-6 space-y-4">
            {/* Title and Subtitle */}
            <h1 className="text-2xl font-bold text-gray-800">{data?.title}</h1>
            <h2 className="text-lg text-gray-500">{data?.subtitle}</h2>

            {/* Category, Level, Language */}
            <div className="text-sm text-gray-600">
              <span className="font-medium">Category:</span> {data?.category} •
              <span className="ml-2 font-medium">Level:</span> {data?.level} •
              <span className="ml-2 font-medium">Language:</span>{" "}
              {data?.primaryLanguage}
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-4">{data?.description}</p>

            {/* Objectives */}
            <div>
              <p className="font-semibold text-gray-600">Course Objectives:</p>
              <ul className="list-disc pl-5 text-gray-700">
                {data?.objectives.split(",").map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>
            </div>

            {/* Welcome Message */}
            <div>
              <p className="font-semibold text-gray-600">Welcome Message:</p>
              <p className="text-indigo-700 italic">{data?.welcomeMessage}</p>
            </div>

            {/* Pricing */}
            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-900">
                ${data?.pricing}
              </p>
            </div>

            {/* Instructor Information */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src={
                  data?.instructor?.instructorImage ||
                  "https://i.ibb.co/2n4zC6F/user.png"
                }
                alt="Instructor"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">
                  {data?.instructor?.instructorName}
                </p>
                <p className="text-sm text-gray-500">
                  {data?.instructor?.instructorEmail}
                </p>
              </div>
            </div>

            {/* Enrollment Button */}
            <div className="mt-6">
              <EnrollButton/>
            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="max-w-4xl mx-auto mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Course Curriculum
          </h2>
          {data?.curriculum?.map((lesson, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg">
              <h3 className="font-semibold text-indigo-600">{lesson?.title}</h3>
              <p className="text-gray-600">{lesson?.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">
            Course ID: {data?._id}
          </h3>
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <span className="font-medium">Date:</span>{" "}
              {new Date(data?.date).toLocaleDateString()}
            </p>
            <p>
              <span className="font-medium">Enrolled Students:</span>{" "}
              {data?.students?.length || 0}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching course:", error);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-2">
            Error Loading Course
          </h1>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }
}
