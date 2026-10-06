import React, { useState } from "react";

import AddTask from "./Component/AddTask";
import MyTask from "./Component/MyTask";

const App = () => {

  const [page, setPage] = useState("mytask");

  const [editTask, setEditTask] = useState(null);

  return (
    <div>

      {page === "mytask" && (
        <MyTask
          setPage={setPage}
          setEditTask={setEditTask}
        />
      )}

      {page === "addtask" && (
        <AddTask
          setPage={setPage}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      )}

    </div>
  );
};

export default App;