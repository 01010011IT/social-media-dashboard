import { useState } from "react"
import { Button } from "react-bootstrap"
import PostDeleteModal from "./PostDeleteModal"
import PostViewModal from "./PostViewModal"

function PostRow(props) {
  const { post } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{post._id}</td>
      <td>{post.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{post.description}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{post.CareWay}</td>
      <td>
        <img src={post.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <PostViewModal show={viewShow} setShow={setViewShow} post={post} />
      <PostDeleteModal show={deleteShow} setShow={setDeleteShow} postId={post._id} />
    </tr>
  )
}

export default PostRow
