import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Appeler la fonction de recherche avec la nouvelle requête
  };

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6">Crypto Price Tracker</Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: alpha("#19354f", 0.5),
            borderRadius: "20px",
            marginLeft: "auto",
            paddingLeft: "10px",
          }}
        >
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ flex: 1 }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
