
import { useUserContext } from "./useUserContext"

interface AboutProps {
}
export default function About({} : AboutProps) {
    const user = useUserContext();
    return <div>
        <h2> {user.name}</h2>
        <ul>
        {user.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
        ))}
       </ul>
    </div>
}