export const getTasks = () => {
  const tasks = localStorage.getItem("tasks");

  if (tasks) {
    return JSON.parse(tasks);
  }

  return [];
};

export const setTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};