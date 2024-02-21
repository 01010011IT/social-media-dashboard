import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"
import CategoryRow from "../components/CategoryRow"
import CategoryAddModal from "../components/CategoryAddModal"
import { Button } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"

function Categorys() {
  const { categorys } = useContext(PlantsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10, color: "#52796f" }}>Categorys</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{ marginRight: 40, marginBottom: 10, color: "#52796f" }}
          onClick={() => setShow(true)}
          variant="outline-light"
        >
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed", color: "#52796f" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "58%" }}>Name</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categorys?.map(category => (
            <CategoryRow key={category?._id} category={category} />
          ))}
        </tbody>
      </Table>
      <CategoryAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Categorys
