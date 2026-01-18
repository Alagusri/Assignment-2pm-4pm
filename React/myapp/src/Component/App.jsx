import './app.css'
import Header from './Component/Header'
import UserCard from './Component/UserCard'
import Welcome from './Component/Welcome'

function App() {
    const handleClick =() => {
        alert("Button clicked")
    }

    return (
        <>
        <h1 className="card">Hello ar</h1>
        <button onClick={handleClick}>click me</button>

        <Welcome/>
        <Header/>

        <Button brs={handleClick}>click me</Button>

        <UserCard name="Arun" age={25} isOnline ={true} skills={["React", "JS", "Angular"]}/>
        <card>
            <h2>Welcome to Ar's class</h2>
            <p>this is the children i will pass</p>
        </card>
        </>
    )
}