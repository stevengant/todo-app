import { IconSettings } from '@tabler/icons-react';
import { Button, Card, createStyles, Grid, NumberInput, Switch, Text, TextInput } from '@mantine/core';
import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { When } from 'react-if';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md
  }
}));

const SettingsForm = () => {
  const [show, setShow] = useState(false);
  const { classes } = useStyles();
  const {
    displayCount,
    showCompleted,
    sort,
    setSort,
    setDisplayCount,
    setShowCompleted,
    saveLocalStorage
  } = useContext(SettingsContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveLocalStorage();
  };

  return (
    <>
      <h1 className={classes.h1}><IconSettings /> Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={6}>
          <Card withBorder>
            <form onSubmit={handleSubmit}>
              <Text m="xl" fontSize="xl" weight="bold">Updated Settings</Text>
              <Switch
                label="SHow Completed Todos"
                checked={showCompleted}
                onChange={(event) => setShowCompleted(event.currentTarget.checked)}
              />
              <NumberInput
                placeholder={displayCount}
                label="Items Per Page"
                onChange={(value) => setDisplayCount(value)}
              />
              <TextInput
                placeholder={sort}
                label="Sort Keyword"
                onChange={(e) => setSort(e.target.value)}
              />
              <Button type="submit">Save New Settings</Button>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <When condition={show}>
            <Card withBorder>
              <Card.Section>
                <Text m="xl" fontSize="xl" weight="bold">Updated Settings</Text>
              </Card.Section>
              <Text m="sm">{showCompleted ? 'Show' : 'Hide'} Completed ToDos</Text>
              <Text m="sm">Items Per page: {displayCount}</Text>
              <Text m="sm">Sort Keyword: {sort}</Text>
            </Card>
          </When>
        </Grid.Col>

      </Grid>
    </>
  )

}

export default SettingsForm;