import React,{createContext,useState} from 'react'


export const WishContext =createContext()
const WishProvider=({children})=> {

    const [wish, setwish] = useState([])

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
            setwish(NewPro)
        }
    }

  return (
    <WishContext.Provider value={{addToWish}}>{children}</WishContext.Provider>
  )
}

export default WishProvider