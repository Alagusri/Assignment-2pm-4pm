function UserCard({Name, Age, skills, onclick}){
    return (
        <>
        <h2>Name:(name)</h2>
        <p>Age:(page)</p>
        <ol style={UserCard}>
            {skills.map(skill =>(<li key={skill}>{skill}</li>
            ) )}
        </ol>
        </>
    )
}

export default UserCard