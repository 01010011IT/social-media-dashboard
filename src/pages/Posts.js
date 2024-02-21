import { Button } from "bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"
import AddIcon from "@mui/icons-material/Add"
import PostRow from "../components/PostRow"

function Posts() {
  const { posts } = useContext(PlantsContext)
  const [show, setShow] = useState(false)

  return (
    <>
      <h1 style={{ marginTop: 10, color: "#52796f" }}>Posts</h1>
      <Table bordered hover style={{ tableLayout: "fixed", color: "#52796f" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Title</th>
            <th style={{ width: "18%" }}>Description</th>
            <th style={{ width: "18%" }}>Care way</th>
            <th style={{ width: "18%" }}>image</th>
            <th style={{ width: "18%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <PostRow key={post._id} post={post} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Posts
