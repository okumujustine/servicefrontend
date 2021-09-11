import React,{ useEffect, useState } from 'react'
import { getAllListings } from '../../api/listings/getAllListings'

export interface User{
    email: string;
    iat: number;
    id: string;
    username: string;
}

interface Item {
    userId: string;
    _id:string;
    title: string,
    description: string,
    status: string,
    user:User
}

export default function Listings() {

    const [itemsArray, setItemsArray] = useState<Item[]>([])


    useEffect(() => {
        fetchAllItems()
        // eslint-disable-next-line
      }, [])

      const fetchAllItems = async () => {
        try{
            const allItems = await getAllListings()
            setItemsArray(allItems)
        }catch(e){
            console.log("error while fetching all items")
        }
    }

    return (
        <div className="w-9/12 m-auto">
            <div className="grid grid-cols-3 gap-4">
                {itemsArray.map((item: Item) => (
                    <div key={item._id} className="rounded border-gray-200 border shadow-sm p-4">
                        <p className="text-xl capitalize">{item.title}</p>
                        <p>{item.status}</p>
                        <small><i>author: {item.user.email}</i></small>
                        <div>
                            {item.user.id !== item.userId ? <button>help</button> : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
