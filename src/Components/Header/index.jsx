import { createStyles,Header, Navbar, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    color: theme.colors.gray[0],
    height: '100%',
    width: '100%',
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md
  }
}));

const HeaderComponent = (props) => {
  const { classes } = useStyles();
  return (
    <Header>
      <Navbar className={classes.navbar}>
        <Text span>Home</Text>
      </Navbar>
    </Header>
  )
};

export default HeaderComponent;