"use client";

import { FC, useEffect, useState } from "react";
import { CreateTaskForm } from "../CreateTaskForm";

type Task = {
  id: number;
  task: string;
};

const Container: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/task", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      setTasks(json.body);
    })();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen space-y-10 bg-gradient-to-bl from-purple-100 via-indigo-200 to-blue-300">
      <p className="text-3xl">Next.js + Prisma + DB DemoSite</p>
      {tasks ? (
        <div className="w-[400px] flex flex-col items-center p-4 space-y-8">
          <p className="text-xl">your tasks</p>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  task
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((task, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{task.id}</td>
                    <td className="px-6 py-4">{task.task}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center" aria-label="読み込み中">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      )}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:opacity-80"
        onClick={() => setModal(!modal)}
      >
        {modal ? "close" : "Add task"}
      </button>
      {modal && <CreateTaskForm />}
    </div>
  );
};

export default Container;
