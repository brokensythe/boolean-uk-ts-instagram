import React, { useEffect } from "react";
import useStore from "../store";

function Header() {

    const fetchUsers = useStore( store=>store.fetchUsers )
    const users = useStore( store=>store.users )

    useEffect(()=>{
        fetchUsers()
    }, [])

    return (
        <header className="main-header">
            <div className="wrapper">
                {
                    users.map(user=><div className="chip">
                    <div className="avatar-small">
                      <img
                        src={user.avatar}
                        alt={user.username}
                      />
                    </div>
                    <span>{user.username}</span>
                  </div>)
                }
            </div>
      </header>
    )
}

export default Header