

type Props = {
    Character:
    {
    id: number,
        name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
    name: string,
        url: string
    },
    location: {
        name: string,
            url: string
    },
    image: string
    episode: string[],
        url: string,
    created: string
    }
    }
export default function CharacterCard ({Character}: Props){
    return (
        <>
        <div style={{ border: "3px solid black", padding: "10px" }}>

            <img
                src={Character.image}
                style={{borderRadius: "150px"}}
            />
            <h3>
            <li>Name: {Character.name}</li>
            <li>Status: {Character.status}</li>
            <li>Species: {Character.species}</li>
            </h3>

        </div>
        </>
    )
}