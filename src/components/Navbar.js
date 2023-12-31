import { Stack} from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../Things/Icons";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#FFF', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" width={80}/>  
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;