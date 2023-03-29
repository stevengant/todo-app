import { useContext } from "react";
import { Card, createStyles, Grid, Switch, NumberInput, TextInput, Button } from '@mantine/core';
import { IconSettings } from "@tabler/icons-react";
import { SettingsContext } from "../../Context/Settings";

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

const Settings = (props) => {
  const { classes } = useStyles();
  const {
    pageItems,
    showCompleted,
    sort,
    setSort,
    setPageItems,
    setShowCompleted,
    saveLocalStorage
  } = useContext(SettingsContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    saveLocalStorage();
  };

  return (
    <>
      <h1 className={classes.h1}><IconSettings />Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <form className="form-container" onSubmit={handleSubmit}>
            <Card withBorder>
              <h2 className="form-h2">Update Settings</h2>

              <Switch
                className="switch"
                label="Show Completed ToDos"
                checked={showCompleted}
                onChange={(e) => setShowCompleted(e.currentTarget.checked)}
              />

              <NumberInput
                className="number"
                defaultValue={3}
                label="Items Per Page"
                value={pageItems}
                onChange={(value) => setPageItems(parseInt(value))} />

              <label className="sort">
                <TextInput
                  placeholder='Keyword'
                  label='Sort Keyword'
                  name="text"
                  onChange={(e) => setSort(e.target.value)}
                />
              </label>

              <label className="submit-button">
                <Button mt="sm" type="submit">Show New Settings</Button>
              </label>
            </Card>
          </form>
        </Grid.Col>

        <Grid.Col xs={12} sm={8}>
          <div className="updated-settings">
            <h2 className="form-h2">Updated Settings</h2>
            <p>{showCompleted ? 'Show Completed ToDos' : 'Hide Completed ToDos'}</p>
            <p>{`Items Per Page: ${pageItems}`}</p>
            <p>{`Sort Keyword: ${sort}`}</p>
          </div>
        </Grid.Col>

      </Grid>
    </>
  )

}

export default Settings;