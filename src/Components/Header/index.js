import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {NavLink} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
 //Material ui framework internal Styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
//Header Component
export default function Header() {
  const [value, setValue] = useState();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'black'}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            LinkComponent={NavLink} to="/">
            Book store
          </Typography>
          <Tabs
            indicatorColor="black"
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="Home" LinkComponent={NavLink} to="/"/>
            <Tab label="New Books" LinkComponent={NavLink} to="/newbook"/>
            <Tab label="contact" LinkComponent={NavLink} to="/contact"/>
          </Tabs>
          <NavLink to="/favorite">
          <FavoriteIcon sx={{m:"10px",cursor:"pointer",color:"white"}}/>
          </NavLink>
          <NavLink to="/cart">
          <AddShoppingCartIcon sx={{m:"10px",cursor:"pointer",color:"white"}}/>
          </NavLink>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
