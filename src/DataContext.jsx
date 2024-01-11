import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function useDataContext() {
    return useContext(DataContext);
}

export function DataProvider({ children }) {
    const [friends, setFriends] = useState([
        {
            name: "John Doe",
            img: "img",
            email: "email",
            dob: "dob",
            gender: "gender",
        },
    ]);
    const [habits, setHabits] = useState([
        {
            title: "title",
            streak: 2,
            priority: 3,
        },
    ]);
    const [tasks, setTasks] = useState([
        {
            title: "title",
            desc: "desc",
            timeEst: "timeEst",
            category: "category",
            complete: false,
        },
    ]);

    const contextValue = {
        friends,
        setFriends,
        habits,
        setHabits,
        tasks,
        setTasks,
    }

    return <DataContext.Provider value={contextValue} >{children}</DataContext.Provider>
}