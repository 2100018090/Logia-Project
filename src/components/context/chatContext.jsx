import { createContext, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest} from "../utils/service";

export const chatContext = createContext();

export const chatContextProvider = ({children, user}) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    cosnt [userChatsError, setUserChatsError] = useState(null);

    useEffect(()=>{
        const getUserChats = async()=>{
            if (user?._id) {

                setIsUserChatsLoading(true);
                setUserChatsError(null);

                const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

                setIsUserChatsLoading(false)

                if (response.error) {
                    return setUserChatsError(response);
                }
                setUserChats(response);
            }
        }
        getUserChats();
    }, [user]);


    return <chatContext.Provider value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
    }}>
        {children}
        </chatContext.Provider>

}