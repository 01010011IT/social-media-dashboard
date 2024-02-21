import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import MovieCreationIcon from "@mui/icons-material/MovieCreation"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import RecentActorsIcon from "@mui/icons-material/RecentActors"
import GroupIcon from "@mui/icons-material/Group"
import TheatersIcon from "@mui/icons-material/Theaters"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import { useContext, useState } from "react"
import { faClone, faCommentDots, faReplyAll, faUserPlus, faBacterium } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AdminAddModal from "./AdminAddModal"
import { Button } from "react-bootstrap"
const drawerWidth = 240
export default function PermanentDrawerLeft() {
  const [show, setShow] = useState(false)
  return (
    <>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "#52796f" },
            background: { paper: "#87b38d" },
          },
        })}
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            <ListItem>
              {/* <ListItemIcon>
              <TheatersIcon />
            </ListItemIcon> */}
              {/* <img src="https://icon2.cleanpng.com/20200924/os/transparent-growth-icon-agriculture-gardening-icon-plant-ico-5f6c8a71824683.7860384616009488495336.jpg" /> */}
              <ListItemText primary="Plants platform" style={{ color: "#52796f", marginLeft: 14 }} />
            </ListItem>
          </List>
          <List>
            <Link to="/posts" style={{ textDecoration: "none" }}>
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faClone} style={{ height: 25, width: 20, color: "#52796f" }} />
                </ListItemIcon>
                <ListItemText primary="posts" sx={{ color: "#52796f" }} />
              </ListItem>
            </Link>
            <Link to="/category" style={{ textDecoration: "none" }}>
              <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faBacterium} style={{ height: 25, width: 20, color: "#52796f" }} />
                </ListItemIcon>
                <ListItemText primary="category" sx={{ color: "#52796f", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <ListItem button>
                <ListItemIcon>
                  <GroupIcon style={{ color: "#52796f" }} />
                </ListItemIcon>
                <ListItemText primary="users" sx={{ color: "#52796f", textDecoration: "none" }} />
              </ListItem>
            </Link>
          </List>
          <ListItem
            button
            style={{ marginBottom: 10, paddingLeft: 2, color: "#52796f" }}
            onClick={() => setShow(true)}
            variant="outline-light"
          >
            <ListItem>
              <FontAwesomeIcon icon={faUserPlus} style={{ height: 25, width: 20, marginRight: 36, color: "#52796f" }} />
              <ListItemText primary="add Admin" sx={{ color: "#52796f", textDecoration: "none" }} />
            </ListItem>
          </ListItem>
          <List style={{ marginTop: "auto" }}>
            {localStorage.tokenDashboardFilms ? (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <LoginIcon style={{ color: "#52796f" }} />
                  </ListItemIcon>
                  <ListItemText primary="logout" sx={{ color: "#52796f", textDecoration: "none" }} />
                </ListItem>
              </Link>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <LoginIcon style={{ color: "#52796f" }} />
                  </ListItemIcon>
                  <ListItemText primary="login" sx={{ color: "#52796f", textDecoration: "none" }} />
                </ListItem>
              </Link>
            )}
          </List>
        </Drawer>
      </ThemeProvider>
      <AdminAddModal show={show} setShow={setShow} />
    </>
  )
}
