import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../app/store'
import { ReactComponent as NoItemSVG } from "../../assets/svg/nowork.svg"
import { AuthState } from '../../store/auth/auth'
import { ItemState, loadItem } from '../../store/items/items'
import CustomTitle from '../components/CustomTitle'
import ItemHelpModal from '../components/ItemHelpModal'
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
    user: User,
    helpers?: any[]
}


export default function Listings() {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    const [updateModal, setUpdateModal] = React.useState(false);
    const [helpModal, setHelpModal] = React.useState(false);

    const auth: AuthState = useSelector((state: RootState) => state.auth)
    const { items, itemsLoading }: ItemState = useSelector((state: RootState) => state.itemState)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadItem())
        // eslint-disable-next-line
    }, [])


    const closeUpdateModal = () => {
        setUpdateModal(false)
    }
    const openUpdateModal = (item: any) => {
        setUpdateModal(true)
        setSelectedItem(item)
    }

    const closeHelpModal = () => {
        setHelpModal(false)
    }
    const openHelpModal = (item: any) => {
        setHelpModal(true)
        setSelectedItem(item)
    }

    function userExists(id, arr) {
        const userEx = arr.some(function (el) {
            return el.id === id;
        });
        return userEx
    }

    return (
        <div className="w-full m-auto">
            <ItemUpdateModal
                item={selectedItem}
                updateModal={updateModal}
                closeUpdateModal={closeUpdateModal}
            />
            <ItemHelpModal
                item={selectedItem}
                helpModal={helpModal}
                closeHelpModal={closeHelpModal}
            />
            {!itemsLoading && items.length <= 0 &&
                <div className="flex flex-col items-center">
                    <CustomTitle title="No product found" />
                    <NoItemSVG />

                </div>
            }
            <div>
                {items.map((item: Item) => (
                    <div key={item._id} className="rounded border-gray-200 border shadow-sm p-4 mb-3">
                        <p className="text-xl capitalize underline truncate">{item.title}</p>
                        <small className="text-gray-500" >{item.status}{auth?.user && item.user.id === auth.user?.id ? <span className="text-green-500 text-sm italic pl-1">(owner)</span> : null}</small>
                        <p className="text-gray-700 py-3">{item.description}</p>
                        <small className="text-gray-500"><i>author: {item.user.email}</i></small>
                        <div className="mt-4">
                            {auth?.user && item.user.id === auth.user?.id ?
                                <button className="bg-blue-50 text-blue-800 text-sm px-3 py-1 shadow-sm mr-2" onClick={() => openUpdateModal(item)}>update</button>
                                : null}
                            {auth?.user && item.user.id !== auth.user?.id && !userExists(auth.user?.id, item.helpers) ?
                                <button className="bg-blue-50 text-blue-800 text-sm px-3 py-1 shadow-sm mr-2" onClick={() => openHelpModal(item)}>Help</button> : null}
                            {userExists(auth.user?.id, item.helpers) ? <small className="text-green-500 text-sm italic pl-1">(Already a helper)</small> : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
