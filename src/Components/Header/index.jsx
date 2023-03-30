import { createStyles, Flex, Group, Header, Navbar, rem } from "@mantine/core";
import { Link } from "react-router-dom";
import Login from '../../Components/Login';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    height: rem(56),
    width: '100%',
    margin: 'auto',
    padding: theme.spacing.md,

  },

  link: {
    width: '80px',
    textDecoration: 'none',
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
  },
}));

const HeaderComponent = (props) => {
  const { classes } = useStyles();

  return (
    <Header>
      <Group>
      <Navbar className={classes.navbar}>
        <Flex
          display="flex"
          justify="flex-start"
          align="flex-start"
          direction="row"
        >
        
          <Link to='/' default className={classes.link}>Home</Link>
          <Link to='/settings' className={classes.link}>Settings</Link>
          <Login />
        </Flex>
        
      </Navbar>
      </Group>
    </Header>
  )
};

export default HeaderComponent;