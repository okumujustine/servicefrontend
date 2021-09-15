import { verifyGoogleToken } from "./auth/verifyGoogleToken"
import { verifyFacebookToken } from "./auth/verifyFacebookToken"
import { IDefaultLoginForm } from "../features/auth/DefaultLogin"
import { defaultLogin } from "./auth/defaultLogin"
import { getLoggedInUser } from "./auth/getLoggedInUser"
import { getAllListings } from "./listings/getAllListings"
import { createItem } from "./listings/addItem"
import { ICreateForm } from "../features/home"
import { recoverPassword } from "./auth/recoverPassword"

export interface IBackendAPI {
    verifyGoogleToken: (token: string) => any;
    verifyFacebookToken: (userId: string, accessToken: string) => any;
    defaultLogin: ({ username_email, password }: IDefaultLoginForm) => void;
    getLoggedInUser: () => any;
    getAllListings: () => any;
    createItem: (item: ICreateForm) => any;
    recoverPassword: (email: string) => any;
}

const backendAPI: IBackendAPI = {
    verifyGoogleToken,
    verifyFacebookToken,
    defaultLogin,
    getLoggedInUser,
    getAllListings,
    createItem,
    recoverPassword
}

export default backendAPI