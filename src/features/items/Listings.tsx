import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { getAllListings } from '../../api/listings/getAllListings'
import { RootState } from '../../app/store'
import { ReactComponent as NoItemSVG } from "../../assets/svg/nowork.svg"
import { AuthState } from '../../store/auth/auth'
import CustomTitle from '../components/CustomTitle'
import ItemUpdateModal from '../components/ItemUpdateModal'

export interface User {
    email: string;
    iat: number;
    id: string;
    username: string;
}

interface Item {
    userId: string;
    _id: string;
    title: string,
    description: string,
    status: string,
    user: User
}


export default function Listings() {

    const [itemsArray, setItemsArray] = useState<Item[]>([])
    const [selectedItem, setSelectedItem] = useState<Item>(null)
    const [loading, setLoading] = useState(false)
    const [updateModal, setUpdateModal] = React.useState(false);

    const auth: AuthState = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        fetchAllItems()
        // eslint-disable-next-line
    }, [])

    const fetchAllItems = async () => {
        setLoading(true)
        try {
            const allItems = await getAllListings()
            setItemsArray(allItems)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            alert("error while fetching all items")
        }
    }

    const closeUpdateModal = () => setUpdateModal(false)
    const openUpdateModal = (item:any) => {
        setUpdateModal(true)
        setSelectedItem(item)
    }

    return (
        <div className="w-full m-auto">
            <ItemUpdateModal
                itemTitle={selectedItem?.title || "ITEM"}
                updateModal={updateModal}
                closeUpdateModal={closeUpdateModal}
            />
            {!loading && itemsArray.length <= 0 &&
                <div className="flex flex-col items-center">
                    <CustomTitle title="No product found" />
                    <NoItemSVG />

                </div>
            }
            <div>
                {itemsArray.map((item: Item) => (
                    <div key={item._id} className="rounded border-gray-200 border shadow-sm p-4 mb-3">
                        <p className="text-xl capitalize">{item.title}</p>
                        <p>{item.status}</p>
                        <small><i>author: {item.user.email}</i></small>
                        <div className="mt-4">
                            <button className="bg-blue-50 text-blue-800 text-sm px-3 py-1 shadow-sm mr-2" onClick={() => openUpdateModal(item)}>update</button>
                            {auth?.user && item.user.id !== auth.user?.id ? <button className="bg-blue-50 text-blue-800 text-sm px-3 py-1 shadow-sm mr-2">Help</button> : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
