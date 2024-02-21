import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function PostViewModal(props) {
  const { show, setShow, post } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {post.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {post.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>image:</strong>
            <img src={post.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Category:</strong>
            <ListGroup>
              <ListGroup.Item>{post.categorys?.name}</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Location:</strong>
            <ListGroup>
              {post.location.map(location => (
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{location}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PostViewModal
