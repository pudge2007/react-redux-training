import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { styles } from "./styles";

const LogoutMenu = ({user, onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div style={styles.wrapper}>
      <p style={styles.name}>{user.lastName + ' ' + user.firstName}</p>
      <AccountCircle style={styles.icon} onClick={openMenu} />
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        PaperProps={{
          style: {
            width: 200
          }
        }}
      >
        <MenuItem onClick={onLogout}>Выйти</MenuItem>
      </Menu>
    </div>
  );
};

export default LogoutMenu;
