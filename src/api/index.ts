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
import { updateItemStatus } from "./listings/updateItemStatus"
import { linkedinLogin } from "./auth/linkedinLogin"
import { createNotification } from "./notification/createNotification"
import { myNotificationRequests } from "./notification/myNotificationRequests"
import { addItemHelper } from "./listings/addItemHelper"

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
    updateItemStatus: ({ itemId, status }: { itemId: string, status: string }) => any
    linkedinLogin: (accessToken: string) => any;
    createNotification: (item: any) => any;
    myNotificationRequests: () => any;
    addItemHelper: ({ helper, itemId }: any) => any;
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
    resetPassword,
    updateItemStatus,
    linkedinLogin,
    createNotification,
    myNotificationRequests,
    addItemHelper
}

export default backendAPI