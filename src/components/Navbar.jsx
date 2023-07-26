import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2}
    sx={{
      position: "sticky",
      backgorund: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="lohoh" height={45} />
      <Typography sx={{ml:2,fontSize:28, color: '#fff'}}>
      VidMate 💖
      </Typography>
    </Link>
    
    <SearchBar />
  </Stack>
);

export default Navbar;