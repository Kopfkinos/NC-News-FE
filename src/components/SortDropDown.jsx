import { DropdownItem } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import Button from "react-bootstrap/Button"
import { useState } from "react"

export default function SortDropDown({ setArticles }) {
  const [orderIcon, setOrderIcon] = useState("∨")

  const handleOrderClick = () => {
    if (orderIcon === "∨") {
      setOrderIcon("∧")
      setArticles((currArticles) => {
        const currArticlesCopy = [...currArticles]
        return currArticlesCopy.reverse()
      })
    } else {
      setOrderIcon("∨")
      setArticles((currArticles) => {
        const currArticlesCopy = [...currArticles]
        return currArticlesCopy.reverse()
      })
    }
  }

  return (
    <>
      <DropdownButton id="dropdown-basic-button" variant="danger" title="-Sort Articles-">
        <Dropdown.Item href="articles?sort_by=created_at">Publish Date</Dropdown.Item>
        <Dropdown.Item href="articles?sort_by=topic">Topic</Dropdown.Item>
        <Dropdown.Item href="articles?sort_by=author">Author</Dropdown.Item>
        <Dropdown.Item href="articles?sort_by=votes">Vote Count</Dropdown.Item>
      </DropdownButton>
      <Button variant="danger" onClick={handleOrderClick}>
        {orderIcon}
      </Button>
    </>
  )
}
