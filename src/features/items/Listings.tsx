import React,{ useEffect, useState } from 'react'
import { getAllListings } from '../../api/listings/getAllListings'
import { ReactComponent as NoItemSVG} from "../../assets/svg/nowork.svg"
import CustomTitle from '../components/CustomTitle'

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
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetchAllItems()
        // eslint-disable-next-line
      }, [])

      const fetchAllItems = async () => {
        setLoading(true)
        try{
            const allItems = await getAllListings()
            setItemsArray(allItems)
            setLoading(false)
        }catch(e){
            setLoading(false)
            alert("error while fetching all items")
        }
    }

    return (
        <div className="w-full m-auto">
            {!loading && itemsArray.length <= 0 && 
                <div className="flex flex-col items-center">
                    <CustomTitle title="No product found"/>
                    <NoItemSVG/>

                </div>
            }
            <div>
                {itemsArray.map((item: Item) => (
                    <div key={item._id} className="rounded border-gray-200 border shadow-sm p-4 mb-3">
                        <p className="text-xl capitalize">{item.title}</p>
                        <p>{item.status}</p>
                        <small><i>author: {item.user.email}</i></small>
                        <div>
                            {item.user.id !== item.userId ? <button>help</button> : null}
                        </div>
                        <div>
                            <button>update</button>
                            <button>Help</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
