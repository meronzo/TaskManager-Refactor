import React from "react";
import TaskHeader from "./TaskHeader"
import TaskList from "./TaskList"

export default function TaskField({year, month, tasks}){
    console.log(year, month, tasks);
    const sameYearAndMonthTask = tasks.filter((task, i) => {
        return task.year === year && task.month === month;
    })
    console.log(sameYearAndMonthTask);
    return(
        <>
            <TaskHeader year={year} month={month}/>
            <TaskList tasks={sameYearAndMonthTask}/>
        </>
    )
}