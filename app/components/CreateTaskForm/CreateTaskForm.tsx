"use client";

import { useCallback } from "react";
import { Form, Field } from "react-final-form";

const CreateTaskForm = () => {
  const onSubmit = useCallback(async (formData: any) => {
    await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  }, []);

  return (
    <div className="p-8 bg-white shadow-lg rounded space-y-5">
      <p className="text-center text-2xl">Add your task!</p>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="w-[400px] flex flex-col items-center space-y-5"
            >
              <Field<HTMLInputElement>
                name="task"
                render={(props) => {
                  return (
                    <input
                      {...(props.input as any)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  );
                }}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:opacity-80"
              >
                Submit
              </button>
            </form>
          );
        }}
      />
    </div>
  );
};

export default CreateTaskForm;
