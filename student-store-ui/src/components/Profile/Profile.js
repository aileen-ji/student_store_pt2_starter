import Navbar from "../Navbar/Navbar"

export default function Profile({user, handleLogin}){
    console.log(user)
    return (
        
        <div className="profile">
            <Navbar user={user}></Navbar>
            <h1>Email: {user.email}</h1>
            <h2>Username: {user.username}</h2>
            <h2>Created at: {user.createdAt}</h2>
        </div>
    )
}