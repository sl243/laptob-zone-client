import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://laptob-zone-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isBuyer) {
                        localStorage.setItem('access-token', data.isBuyer)
                        setIsBuyer(data.isBuyer)
                        setIsBuyerLoading(false)
                    }
                });
        }
    }, [email]);
    return [isBuyer, isBuyerLoading];
}

export default useBuyer;