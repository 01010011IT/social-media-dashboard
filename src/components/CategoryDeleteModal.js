import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function CategoryDeleteModal(props) {
  const { deleteCategory } = useContext(PlantsContext)
  const { show, setShow, categoryId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this category ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCategory(categoryId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CategoryDeleteModal
