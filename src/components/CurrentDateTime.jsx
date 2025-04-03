import { useEffect, useState } from "react"

function MyComponent() {
  const [dateState, setDateState] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDateState(new Date().toUTCString().replace(" GMT", ""))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div>{dateState}</div>
}

export default MyComponent
