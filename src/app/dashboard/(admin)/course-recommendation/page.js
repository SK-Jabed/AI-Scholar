"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

const LearningPathForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    console.log(formData);
    const { level, interest, time, goal, learningStyle } = formData;
    const prompt = `
    You are a course advisor AI. Recommend a personalized learning path for a student based on the following details:
    
    - Skill level: ${level}
    - Interest: ${interest}
    - Time available per week: ${time}
    - Goal: ${goal}
    - Preferred learning style: ${learningStyle}
    
    Include specific course topics, a weekly plan for the next 8 weeks, and a short motivational tip.
    `;
    console.log(prompt);
    setLoading(true);
    const res = await fetch("/api/ask-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    console.log(data.response.candidates[0].content.parts[0].text);
    setResult(data.response.candidates[0].content.parts[0].text);
    setLoading(false);
    if (data.response) {
      reset();
    }
  };

  return (
    <div className=" mx-auto space-y-6">
      {!result && (
        <>
          <h2 className="text-3xl font-bold mb-4">
            Get Your Personalized Learning Path
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Your current skill level (e.g. Beginner)"
              className="input input-bordered w-full"
              {...register("level", { required: "This field is required" })}
            />
            {errors.level && (
              <p className="text-error text-sm">{errors.level.message}</p>
            )}

            <input
              type="text"
              placeholder="Your area of interest (e.g. Frontend, AI)"
              className="input input-bordered w-full"
              {...register("interest", { required: "This field is required" })}
            />
            {errors.interest && (
              <p className="text-error text-sm">{errors.interest.message}</p>
            )}

            <input
              type="text"
              placeholder="Study time per week (e.g. 5 hours)"
              className="input input-bordered w-full"
              {...register("time", { required: "This field is required" })}
            />
            {errors.time && (
              <p className="text-error text-sm">{errors.time.message}</p>
            )}

            <input
              type="text"
              placeholder="Your learning goal (e.g. job, freelancing)"
              className="input input-bordered w-full"
              {...register("goal", { required: "This field is required" })}
            />
            {errors.goal && (
              <p className="text-error text-sm">{errors.goal.message}</p>
            )}

            <input
              type="text"
              placeholder="Preferred style (e.g. Video, Hands-on)"
              className="input input-bordered w-full"
              {...register("learningStyle", {
                required: "This field is required",
              })}
            />
            {errors.learningStyle && (
              <p className="text-error text-sm">
                {errors.learningStyle.message}
              </p>
            )}

            <button
              type="submit"
              className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Generating..." : "Get My Path"}
            </button>
          </form>
        </>
      )}

      {result && (
        <div className="mt-6 bg-base-200 p-4 rounded-box">
          <h3 className="text-3xl font-semibold text-center  mb-7">Your Personalized Path</h3>
          <pre className="whitespace-pre-wrap">{result}</pre>
          <button
            onClick={() => setResult("")}
            className="btn my-6 btn-accent text-white"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default LearningPathForm;
