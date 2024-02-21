import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function CategoryAddModal(props) {
  const { show, setShow, category } = props
  const { addCategory } = useContext(PlantsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={addCategory} style={{ color: "#52796f" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            type="submit"
            onClick={() => setShow(false)}
            style={{
              marginRight: 40,
              marginBottom: 10,
              marginTop: 10,
              backgroundColor: "#52796f",
              border: "none",
              paddingBottom: 10,
            }}
          >
            Add category
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CategoryAddModal
