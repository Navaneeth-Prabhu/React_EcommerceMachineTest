import React,{createContext,useEffect,useState} from 'react'


export const WishContext =createContext()
const WishProvider=({children})=> {

    const [wish, setwish] = useState(() => JSON.parse(localStorage.getItem('abc')) || [])
    const [WishAmount,setWishAmount] = useState(0)


    useEffect(()=>{
      if(wish){
        setWishAmount(wish.length)
      }
    },[wish])
    const addToWish =(product,id)=>{
        let NewPro = {...product}
        const wishPro = wish.find((item)=>{
            return item.id ===id;
        })

        if(wishPro){
            const newWish = wish.filter((item)=>{
                return item.id !== id
            })
            setwish(newWish)
        }else{
            setwish([...wish,NewPro])
        }
    }
    var wishlist = JSON.stringify(wish)
    localStorage.setItem("abc",wishlist)
    // console.log(".....",wish);
    // console.log(wish)





  return (
    <WishContext.Provider value={{addToWish,wish,WishAmount}}>{children}</WishContext.Provider>
  )
}

export default WishProvider