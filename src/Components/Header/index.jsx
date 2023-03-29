import { createStyles, Flex, Header, Navbar, rem } from "@mantine/core";
import { NavLink } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    color: theme.colors.gray[0],
    height: rem(56),
    width: '100%',
    margin: 'auto',
    fontSize: theme.fontSizes.md,
    textDecoration: 'none',

  }
}));

const HeaderComponent = (props) => {
  const { classes } = useStyles();

  return (
    <Header>
      <Navbar className={classes.navbar}>
        <Flex
          display="flex"
          justify="flex-start"
          align="flex-start"
          direction="row"
        >
          <NavLink to='/' className={classes.navbar}>Home</NavLink>
          <NavLink to='/settings' className={classes.navbar}>Settings</NavLink>
        </Flex>
      </Navbar>
    </Header>
  )
};

export default HeaderComponent;