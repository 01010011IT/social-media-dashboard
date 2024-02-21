import { useState } from "react"
import { Button } from "react-bootstrap"
import CategoryDeleteModal from "./CategoryDeleteModal"

function CategoryRow(props) {
  const { category } = props

  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{category._id}</td>
      <td>{category.name}</td>
      <td>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <CategoryDeleteModal show={deleteShow} setShow={setDeleteShow} categoryId={category._id} />
    </tr>
  )
}

export default CategoryRow
