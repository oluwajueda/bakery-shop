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
     const [showDetails, setShowDetails] = useState(false)
     const [itemDetails, setItemDetails] = useState({})
     const [number, setNumber] = useState(1)
     const [cartItems, setCartItems] = useState([])
     const [cartPage, setCartPage] = useState(false)
     const [checkout, setCheckOut] = useState(false)
     const [total, setTotal] = useState(0)
     const [modal, setModal] = useState(false)
     const [amount, setAmount] = useState(0)
     
     
     const addToCart = (id,image,text,name,price,number) =>{
            const cartObj = {id,image,text,name,price,number}
           
  setCartItems([...cartItems, cartObj])
          
            // console.log(cartObj)
            console.log(cartItems)
        
          
            
    
     }

     useEffect (() =>{
        let {total, num} = cartItems.reduce(
            (cartTotal, cartItem) => {
                const {price, number} = cartItem;
                const itemPrice = number * price;
                cartTotal.total += itemPrice;
                cartTotal.num += number;
                // console.log(cartTotal)
                // console.log(itemPrice)
                // console.log(price)
                console.log(number)
                // console.log(itemPrice)

                return cartTotal;

            },
            {total:0, num:0}
        )
          setTotal(total);
          setAmount(num)
     }, [cartItems])

     const goToCart = () =>{
          setCheckOut(true)  
          setCartPage(false)
          setShowDetails(false)
            setIsProfile(false)
           setHome(false)
           setIsInbox(false)
           setIsOrder(false)

     }

     const payButton = (e) =>{
        e.preventDefault()
        setModal(true)
         setCartPage(false)
            setIsProfile(false)
           setHome(false)
           setIsInbox(false)
           setIsOrder(false)
           setCheckOut(false)
           setShowDetails(false)
           console.log('hello')
     }

     
     
     const filterItems = (category) => {
         const newItems = items.filter((item)=> item.category === category)
         setMenuItems(newItems)
        }
        
        const increase = () =>{
            setNumber(number+1)
        }
        const decrease =()=> {
            
            if(number>1){
                setNumber(number-1)
            }else{
                return number
            }
        }
        const backDetails = () =>{
            setHome(true)
            setIsProfile(false)
            setIsInbox(false)
            setIsOrder(false)
             setShowDetails(false)
             setCartPage(false)
        }
        
        const showProfile = () =>{
            setIsProfile(true)
            setHome(false)
            setIsInbox(false)
            setIsOrder(false)
            setShowDetails(false)
            setCartPage(false)
        }
        const showHome =() => {
            setHome(true)
            setIsProfile(false)
            setIsInbox(false)
            setIsOrder(false)
            setShowDetails(false)
            
           
        }
        
        const showInbox = () =>{
            setIsInbox(true)
            setIsProfile(false)
            setHome(false)
            setIsOrder(false)
            setCartPage(false)
            setShowDetails(false)
        }
        const showOrder = () =>{
            setIsOrder(true)
            setIsInbox(false)
            setIsProfile(false)
            setHome(false)
            setShowDetails(false)
            setCartPage(false)
            
        }
        const showCartPage = () => {
           setCartPage(true)
        
            setIsProfile(false)
           setHome(false)
           setIsInbox(false)
           setIsOrder(false)
           setShowDetails(false)
          
           
        }
    const completeDetails = (id,image,text,name,price) =>{
       const newObj = {id,image,text,name,price} 
         setItemDetails( newObj)
           setShowDetails(true)
          setHome(false)
        setCartPage(false)
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
         completeDetails,
         showDetails,
         itemDetails,
         increase,
         decrease,
         number,
         backDetails,
         addToCart,
         cartItems,
        showCartPage,
        cartPage,
        goToCart,
        checkout,
        payButton,
        total,
        modal,
        amount
         }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}