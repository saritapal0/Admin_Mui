import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@mui/material";
import { SidebarWidth } from "../../assets/global/Theme-variable";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import SwitchCameraOutlinedIcon from "@mui/icons-material/SwitchCameraOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";


const Sidebar = (props) => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));



  const menuItems = [
    {
      id: 1,
      title: "Dashboard",
      icon: DashboardOutlinedIcon,
      href: "/dashboard",
    },
    {
      id: 2,
      title: "Autocomplete",
      icon: AddToPhotosOutlinedIcon,
      href: "/autocomplete",
    },
    {
      id: 3,
      title: "Buttons",
      icon: AspectRatioOutlinedIcon,
      href: "/button",
      subItems: [
        {
          id: 31,
          title: "Button1",
          icon: AspectRatioOutlinedIcon,
          href: "/button/button1",
        },
        {
          id: 32,
          title: "Button2",
          icon: AspectRatioOutlinedIcon,
          href: "/button/button2",
        },
        {
          id: 33,
          title: "Button3",
          icon: AspectRatioOutlinedIcon,
          href: "/button/button3",
        },
      ],
    },
    {
      id: 4,
      title: "Checkbox",
      icon: AssignmentTurnedInOutlinedIcon,
      href: "/checkbox",
    },
    {
      id: 5,
      title: "Radio",
      icon: AlbumOutlinedIcon,
      href: "/radio",
    },
    {
      id: 6,
      title: "Slider",
      icon: SwitchCameraOutlinedIcon,
      href: "/slider",
    },
    {
      id: 7,
      title: "Switch",
      icon: SwitchLeftOutlinedIcon,
      href: "/switch",
    },
    {
      id: 8,
      title: "Form",
      icon: DescriptionOutlinedIcon,
      href: "/form-layouts",
    },
    {
      id: 9,
      title: "Table",
      icon: AutoAwesomeMosaicOutlinedIcon,
      href: "/basic-table",
    },
    {
      id: 10,
      title: "Register",
      icon: AppRegistrationIcon,
      href: "/register",
    },
  ];
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setOpen(true);
  }, [pathDirect]);

  const handleClick = (index, hasSubItems) => {
    if (lgUp) {
      props.onSidebarClose();
    }

    if (!hasSubItems) {
      props.onSidebarClose();
    } else if (open === index) {
      setOpen((prevOpen) => !prevOpen);
    } else {
      setOpen(index);
    }
  };

  const SidebarContent = (
    <Box sx={{ p: 3, height: "calc(100vh - 40px)" }}>
      <Link to="/">
        <Box sx={{ display: "flex", alignItems: "Center" }}>
          <h1>Admin</h1>
        </Box>
      </Link>

      <Box>
        <List
          sx={{
            mt: 0,
          }}
        >
          {menuItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <List component="li" disablePadding>
                <ListItem
                  key={item.id}
                  onClick={() => handleClick(index, !!item.subItems)}
                  button
                  component={NavLink}
                  to={item.href}
                  selected={pathDirect === item.href}
                  sx={{
                    mb: 1,
                    ...(pathDirect === item.href && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `${theme.palette.primary.main}!important`,
                    }),
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ...(pathDirect === item.href && { color: "white" }),
                    }}
                  >
                    <item.icon width="20" height="20" />
                  </ListItemIcon>
                  <ListItemText sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {item.title}
                    {item.subItems && (
                      <IconButton
                        sx={{ position: 'absolute', right: 20, color: 'inherit', p: 0 }}
                      >
                        {open === index ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    )}
                  </ListItemText>
                </ListItem>
              </List>

              {item.subItems && open === index && (
                <List component="ul" disablePadding sx={{ paddingLeft: 2 }}>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      key={subItem.id}
                      onClick={() => handleClick(index, false)}
                      button
                      component={NavLink}
                      to={subItem.href}
                      selected={pathDirect === subItem.href}
                      sx={{
                        mb: 1,
                        ...(pathDirect === subItem.href && {
                          color: "white",
                          backgroundColor: (theme) =>
                            `${theme.palette.primary.main}!important`,
                        }),
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ...(pathDirect === subItem.href && { color: "white" }),
                        }}
                      >
                        <subItem.icon width="20" height="20" />
                      </ListItemIcon>
                      <ListItemText>{subItem.title}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={props.isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth,
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;
