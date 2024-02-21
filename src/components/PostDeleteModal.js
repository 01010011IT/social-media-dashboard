import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function PostDeleteModal(props) {
  const { deletePost } = useContext(PlantsContext)
  const { show, setShow, postId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this post ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deletePost(postId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PostDeleteModal
