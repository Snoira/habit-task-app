import { useEffect } from 'react';
import { useDataContext } from '../DataContext'

const FriendsPage = () => {
    const { friends, setFriends } = useDataContext();

    const fetchData = async (API) => {
        const response = await fetch(API)
        const json = await response.json();
        console.log(json.results[0].name.first)
        return json
    }

    const addFriend = (data) => {
        setFriends([...friends,
        {
            firstName: `${data.results[0].name.first}`,
            lastName: `${data.results[0].name.last}`,
            img: `${data.results[0].picture.medium}`,
            email: `${data.results[0].email}`,
            dob: `${data.results[0].dob.date}`,
            age: `${data.results[0].dob.age}`,
            gender: `${data.results[0].gender}`,
            id: friends.length + 1,
        },
        ])
    }

    return (
        <>
            <div>
                <h2>Friends</h2>
                {friends.map((friend, index) => {
                    return (
                        <div key={index} >
                            <p>{friend.firstName} {friend.lastName}</p>
                            <img src={friend.img} alt="profile picture" />
                        </div>
                    )
                })}
            </div>
            <button onClick={async () => addFriend(await fetchData('https://randomuser.me/api'))} >Add a Friend</button>
        </>
    )
}

export default FriendsPage;