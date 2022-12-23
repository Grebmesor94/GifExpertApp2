import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetch = (category) => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  const getImages = async () => { 
    const newImages = await getGifs(category)
    setImages(newImages)
    setLoading(false)
  }

  useEffect(() => {
  
    getImages(category)
 
  }, [category])
 
  return {
    images,
    loading
  }
  
}
