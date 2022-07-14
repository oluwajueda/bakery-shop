import React, {useState, useContext, useEffect} from "react";
import items from './data.js'

const AppContext = React.createContext()

 const allCategories = [ ...new Set (items.map((item)=> item.category))];
     console.log(allCategories)

const AppProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [menuItems, setMenuItems] = useState(items)
     const [categories, setCategories] = useState(allCategories )
     const [home, setHome] = useState(true)
     const [isProfile, setIsProfile] = useState(false)
     const [isOrder, setIsOrder] = useState(false)
     const [isInbox, setIsInbox] = useState(false)
     const [email, setEmail] = useState('')
     const [phoneNumber, setPhoneNumber] = useState('')
     const [password, setPassword] = useState('')
    

     const filterItems = (category) => {
        const newItems = items.filter((item)=> item.category === category)
        setMenuItems(newItems)
     }

    
    const showProfile = () =>{
        setIsProfile(true)
        setHome(false)
        setIsInbox(false)
        setIsOrder(false)
    }
    const showHome =() => {
        setHome(true)
        setIsProfile(false)
        setIsInbox(false)
        setIsOrder(false)
    }

    const showInbox = () =>{
          setIsInbox(true)
          setIsProfile(false)
            setHome(false)
            setIsOrder(false)
    }
    const showOrder = () =>{
         setIsOrder(true)
          setIsInbox(false)
          setIsProfile(false)
            setHome(false)
           
    }

    return (
        <AppContext.Provider value={{menuItems,
        categories,
        filterItems, 
        home, 
        isProfile, 
        showProfile, 
        showHome, 
        setEmail, setPassword,
         setPhoneNumber,
         email,
         phoneNumber,
         password,
         isInbox,
         isOrder,
         showInbox,
         showOrder,
         user,
         setUser,
         }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}