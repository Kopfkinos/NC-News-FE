// The useEffect within this isn't working and I cannot figure out why.

import { useEffect, useState } from "react"

const useApiFunction = (apiFunction) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    apiFunction()
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        setError("error fetching data")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [apiFunction])

  return { data, error, isLoading }
}

export default useApiFunction
