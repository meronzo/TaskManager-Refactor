import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import AppHeaderBar from "./AppHeaderBar"
import TaskField from "./TaskField";
import "./App.css";



const App = () => {
  const [tasks, setTasks] = useState([]);

  // fetch data onload
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/get");
        data.sort();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // display child component
  const callTask = useCallback(() => {
    let DateStorage = new Set();
    const pairs = tasks.filter((task, i) => {
      const { year, month } = task;
      const YYYY_MM = `${year}/${month}`;
      if (!DateStorage.has(YYYY_MM)) {
        DateStorage.add(YYYY_MM);
        return true;
      }
    })
    return (
      <>
        <AppHeaderBar />
        <div className="TaskFields">
          {pairs.map((pair, i) => {
            return (
              <TaskField
                key={i}
                year={pair.year}
                month={pair.month}
                tasks={tasks}
              />
            )
          })}
        </div>
      </>
    )
  })
  useEffect(() => {
    callTask();
  }, [callTask]);

  return callTask();
}
export default App;