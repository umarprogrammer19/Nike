"use client"
import { useEffect, useRef, useState } from "react"

const Actionbuttons = ({ id }: { id: number }) => {
    const [alredyExistBag, setAlredyExistBag] = useState<string | null>(null);
    const [alredyExistFav, setAlredyExistFav] = useState<string | null>(null);

    const existingItems = useRef<number[]>([])
    useEffect(() => {
        const existingBagItems = localStorage.getItem("bagitems")
        const existingFavItems = localStorage.getItem("favitems")
        if (existingBagItems) {
            existingItems.current = JSON.parse(existingBagItems)
        }
        if (existingFavItems) {
            existingItems.current = JSON.parse(existingFavItems)
        }
    })

    const handleBag = () => {
        if (existingItems && existingItems.current.length <= 0) {
            localStorage.setItem("bagitems", JSON.stringify([id]));
            return
        }
        const alreadyInBag = existingItems.current.find((data) => data == id)
        if (alreadyInBag) {
            setAlredyExistBag("Already In your bag")
            setTimeout(() => {
                setAlredyExistBag(null)
            }, 2000)
            return
        }
        existingItems.current.push(id);
        localStorage.setItem("bagitems", JSON.stringify(existingItems.current))
        setAlredyExistBag("Added to your bag")
        setTimeout(() => {
            setAlredyExistBag(null)
        }, 2000)
    }
    const handleFav = () => {
        if (existingItems && existingItems.current.length <= 0) {
            localStorage.setItem("favitems", JSON.stringify([id]));
            return
        }
        const alreadyInFav = existingItems.current.find((data) => data == id)
        if (alreadyInFav) {
            setAlredyExistFav("Already In your Favorites")
            setTimeout(() => {
                setAlredyExistFav(null)
            }, 2000)
            return
        }
        existingItems.current.push(id);
        localStorage.setItem("favitems", JSON.stringify(existingItems.current))
        setAlredyExistFav("Added to your Favorites")
        setTimeout(() => {
            setAlredyExistFav(null)
        }, 2000)
    }

    return (
        <div className='text-sm space-y-2'>
            <button className='w-full bg-[#111] py-4 text-white rounded-full' onClick={handleBag}>
                {alredyExistBag && <p className="anim">{alredyExistBag}</p>}
                {!alredyExistBag && <p className="animLinear">Add to bag</p>}
            </button>
            <button className='w-full border py-4 rounded-full hover:bg-red-500 hover:text-white transition-all' onClick={handleFav}>
                {alredyExistFav && <p className="anim">{alredyExistFav}</p>}
                {!alredyExistFav && <p className="animLinear">Favorites</p>}
            </button>
        </div>
    )
}

export default Actionbuttons