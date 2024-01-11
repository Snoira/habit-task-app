import { useDataContext } from '../DataContext'

const HomePage = () => {
    const { friends, habits, tasks } = useDataContext();

return(
    <div>
        <div>
            <h3>Friends:</h3>
            {
                friends.map((friend, index)=>{
                    return(
                        <div key={index}>
                            <p>{friend.name}</p>
                            <p>{index}</p>
                        </div>
                    )
                })
            }
        </div>
        <div>
            <h3>Habits:</h3>
            {
                habits.map((habit, index)=>{
                    return(
                        <div key={index}>
                            <p>{habit.title}</p>
                            <p>{index}</p>
                        </div>
                    )
                })
            }
        </div>
        <div>
            <h3>Tasks:</h3>
            {
                tasks.map((task, index)=>{
                    return(
                        <div key={index}>
                            <p>{task.title}</p>
                            <p>{index}</p>
                            <p>{task.complete ? "done" : "not done"}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
)
}

export default HomePage;