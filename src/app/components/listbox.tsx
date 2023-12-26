import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import styles from "./listbox-component.module.css";

const ListboxComponent: NextPage = () => {
  const [listboxComponentAnchorEl, setListboxComponentAnchorEl] =
    useState<HTMLElement | null>(null);
  const listboxComponentOpen = Boolean(listboxComponentAnchorEl);
  const handleListboxComponentClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setListboxComponentAnchorEl(event.currentTarget);
  };
  const handleListboxComponentClose = () => {
    setListboxComponentAnchorEl(null);
  };
  return (
    <div>
      <Button
        sx={{ width: 268 }}
        id="button-Priority"
        aria-controls="menu-Priority"
        aria-haspopup="true"
        aria-expanded={listboxComponentOpen ? "true" : undefined}
        onClick={handleListboxComponentClick}
        color="primary"
      >
        Priority
      </Button>
      <Menu
        anchorEl={listboxComponentAnchorEl}
        open={listboxComponentOpen}
        onClose={handleListboxComponentClose}
      />
    </div>
  );
};

export default ListboxComponent;
