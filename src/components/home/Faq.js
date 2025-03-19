"use client";

const Faq = () => {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Common Questions About Us ?
      </h1>

      {/* FAQ Section */}
      <div className="space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">What is AI Course Management?</h2>
          <p className="text-gray-600 mt-2">
            AI Course Management is an innovative platform that utilizes artificial intelligence to streamline
            and optimize the management of educational courses. It includes features such as automated grading,
            personalized learning paths, and insightful analytics for both students and instructors.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">How can AI improve education?</h2>
          <p className="text-gray-600 mt-2">
            AI enhances education by offering personalized learning experiences, providing intelligent feedback,
            and automating administrative tasks. This allows educators to focus more on teaching, while students
            benefit from tailored learning paths and real-time performance tracking.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Is the platform suitable for all types of courses?</h2>
          <p className="text-gray-600 mt-2">
            Yes, our platform is designed to be flexible and adaptable, making it suitable for a wide range of courses,
            from technical and academic to creative and vocational. It supports a variety of teaching formats and
            content types.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">How does AI track student progress?</h2>
          <p className="text-gray-600 mt-2">
            The platform uses AI to analyze student performance based on assignments, quizzes, participation, and
            other metrics. It identifies learning gaps and suggests personalized interventions to help students
            improve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
