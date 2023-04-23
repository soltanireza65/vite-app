import { NavLink } from "react-router-dom";
import { menuItems } from "./menuItems";
import Styles from "./Siddebar.module.css";
import { Box, Flex, Text } from "@mantine/core";
import { List } from "@mantine/core";

export default function SideBar() {
  return (
    <Box
      sx={{
        display: "flex",
        borderLeft: "1px solid #adadad",
        height: "100vh",
      }}
    >
      <List listStyleType="none" p={4}>
        {menuItems.map((item, key) => (
          <List.Item key={key}>
            <NavLink
              to={item.link}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "blue" : "white",
                  textDecoration: "none",
                };
              }}
            >
              <Flex className={Styles.sideBarItem}>
                <item.IconComponent />
                <Text>{item.text}</Text>
              </Flex>
            </NavLink>
          </List.Item>
        ))}
      </List>
    </Box>
  );
}
