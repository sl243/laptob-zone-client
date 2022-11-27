import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('access-token', data.accessToken)
                        setIsAdmin(data.accessToken)
                    }
                });
        }
    }, [email]);
    return [isAdmin];
}

export default useAdmin;