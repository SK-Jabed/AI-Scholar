"use client";
import React from "react";
import { useForm } from "react-hook-form";

const AddCourse = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 grid grid-cols-3">
        <div>
          <label className="block mb-1 font-medium">Course Title</label>
          <input
            {...register("title", { required: true })}
            className="input"
            placeholder="Course title"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="input"
            placeholder="Course description"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            {...register("category", { required: true })}
            className="input"
            placeholder="e.g. Web Development"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Level</label>
          <select {...register("level", { required: true })} className="input">
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Duration</label>
          <input
            {...register("duration", { required: true })}
            className="input"
            placeholder="e.g. 10 hours"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            {...register("price", { required: true })}
            className="input"
            placeholder="$49.99"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Instructor</label>
          <input
            {...register("instructor", { required: true })}
            className="input"
            placeholder="Instructor name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Rating (0 - 5)</label>
          <input
            type="number"
            step="0.1"
            {...register("rating", { required: true, min: 0, max: 5 })}
            className="input"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            {...register("image", { required: true })}
            className="input"
            placeholder="Image URL"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Enrolled Students</label>
          <input
            type="number"
            defaultValue={0}
            {...register("enrolled")}
            className="input"
          />
        </div>


        <button
          type="submit"
          className="col-span-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Submit Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
