import { useUserContext } from "./useUserContext";

interface ItemsProps {
  
}
export default function Items({} : ItemsProps) {
    const user = useUserContext();

    return <div>
        <p>{user.title}</p>
    </div>
}