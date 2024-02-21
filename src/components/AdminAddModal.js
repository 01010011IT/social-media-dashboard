import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function AdminAddModal(props) {
  const { show, setShow } = props
  const { addAdmin } = useContext(PlantsContext)
  const locations = [
    "Albaha",
    "Jeddah",
    "AlQasim",
    "Makkah",
    "AlMadinah",
    "Abha",
    "Dammam",
    "Tabok",
    "Jazan",
    "Najran",
    "Araar",
  ]
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addAdmin} style={{ color: "#52796f" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Email
            </Form.Label>
            <Col md="6">
              <Form.Control name="email" type="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              userName
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="userName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              NickName
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="nickName" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Password
            </Form.Label>
            <Col md="6">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Avatar
            </Form.Label>
            <Col md="6">
              <Form.Control type="url" name="avatar" required />
            </Col>
          </Form.Group>
          <Row>
            {/* <Col md="8">{errorSignup !== null ? <Alert variant="danger">{errorSignup}</Alert> : null}</Col> */}
          </Row>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Location
            </Form.Label>
            <Col md="6" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                {locations.map(location => (
                  <Row>
                    <Col md="2">
                      <Form.Check type="radio" name="location" value={location} />
                    </Col>
                    <Col>
                      <span>{location}</span>
                    </Col>
                  </Row>
                ))}
              </Row>
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
            Add Admin
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AdminAddModal
