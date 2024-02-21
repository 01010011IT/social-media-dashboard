import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function UserDeleteModal(props) {
  const { deleteUser } = useContext(PlantsContext)
  const { show, setShow, userId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this user ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteUser(userId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserDeleteModal
