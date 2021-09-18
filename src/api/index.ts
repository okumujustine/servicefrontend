import { verifyGoogleToken } from "./auth/verifyGoogleToken"
import { verifyFacebookToken } from "./auth/verifyFacebookToken"
import { IDefaultLoginForm } from "../features/auth/DefaultLogin"
import { defaultLogin } from "./auth/defaultLogin"
import { getLoggedInUser } from "./auth/getLoggedInUser"
import { getAllListings } from "./listings/getAllListings"
import { createItem } from "./listings/addItem"
import { ICreateForm } from "../features/home"
import { recoverPassword } from "./auth/recoverPassword"
import { logout } from "./auth/logout"
import { IRegisterUser } from "../features/auth/Register"
import { registerUser } from "./auth/registerUser"
import { resetPassword } from "./auth/resetPassword"

export interface IBackendAPI {
    verifyGoogleToken: (token: string) => any;
    verifyFacebookToken: (userId: string, accessToken: string) => any;
    defaultLogin: ({ username_email, password }: IDefaultLoginForm) => void;
    getLoggedInUser: () => any;
    getAllListings: () => any;
    createItem: (item: ICreateForm) => any;
    recoverPassword: (email: string) => any;
    logout: () => any;
    registerUser: (user: IRegisterUser) => any;
    resetPassword: ({ userId, accessToken, password, password2 }: any) => any;
}

const backendAPI: IBackendAPI = {
    verifyGoogleToken,
    verifyFacebookToken,
    defaultLogin,
    getLoggedInUser,
    getAllListings,
    createItem,
    recoverPassword,
    logout,
    registerUser,
    resetPassword
}

export default backendAPI