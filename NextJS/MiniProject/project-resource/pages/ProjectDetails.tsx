import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

type Anchor = "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  function handleChange(){
    console.log("clicked")
  }
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <Divider />
      <List>
        <Box
          sx={{
            "& > :not(style)": {
              display: "flex",
              justifyContent: "space-around",
            },
          }}
        >
          <div>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Name"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Title"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Status"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Progress"
              variant="filled"
            />
          </div>
          <Box
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained" color="primary" sx={{ height: 40 }} onClick={handleChange}>
              Add
            </Button>
          </Box>
        </Box>
      </List>
    </Box>
  );
  return (
    <div>
      <Box m={7} display="flex" justifyContent="flex-end" alignItems="flex-end">
        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>add</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Box>
      <Container>
        <Typography variant="h4" textAlign={"center"}>
          Project Details
        </Typography>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead
              style={{ backgroundColor: "#ADD8E6", borderRadius: "1px" }}
            >
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>DojoProject</TableCell>
                <TableCell>Real time project </TableCell>
                <TableCell>Completed</TableCell>
                <TableCell>Done</TableCell>
                <TableCell>
                  <Grid container spacing={4}>
                    <Grid item xs={2}>
                      <Button>
                        <EditIcon />
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Button>
                        <DeleteForeverIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
