import create from "zustand";

type Store = {
    users: {
        id: number,
        username: string,
        avatar: string
    }[],
    fetchUsers: () => void
}

const useStore = create<Store>((set, get) => (
    {
        users: [],
        fetchUsers: ()=>{
            fetch("http://localhost:5000/users")
            .then(resp=>resp.json())
            .then(data=>set(state=>({ users: data })))
        }
    }
))

export default useStore