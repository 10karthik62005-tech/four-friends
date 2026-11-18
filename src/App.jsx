import './App.css'

import group from './assets/group photo.jpg'
import friend1 from './assets/abi photo.jpeg'
import friend2 from './assets/jack photo.jpeg'
import friend3 from './assets/karthi photo.jpeg'
import friend4 from './assets/srimathi photo.jpeg'

function App() {

 const friends = [
  { name: "Abi", image: friend1 },
  { name: "Jack", image: friend2 },
  { name: "Karthi", image: friend3 },
  { name: "Srimathi", image: friend4 }
];

  return (
    <div className="container">

      <h1> Four Friends </h1>

      <div className="group">
        <img src={group} alt="Our Group" />
        <h2>Four Friends, One Beautiful Journey</h2>
      </div>

      <h2 className="heading">Meet Our Squad</h2>

      <div className="friends">

        {friends.map((friend, index) => (
          <div className="card" key={index}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
          </div>
        ))}

      </div>

    </div>
  )
}

export default App