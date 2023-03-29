import { useContext } from "react";
import { SettingsContext } from "../../Context/Settings";
import { IconSettings } from "@tabler/icons-react";
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md
  }
}));

const Settings = (props) => {
  const { classes } = useStyles();
  const { pageItems, showCompleted, sort, setSort, setPageItems, setShowCompleted, saveLocalStorage } = useContext(SettingsContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    saveLocalStorage();
  };
  
  return (

    <>
    
      <h1 className={classes.h1}><IconSettings />Manage Settings</h1>
      <form onSubmit={handleSubmit} >
        <label>
          <span>Show Completed?</span>
          <input type="checkbox" name="showCompleted" checked={showCompleted} onChange={(e) => setShowCompleted(e.target.checked)} />
        </label>
        <label>
          <span>Items per page</span>
          <input type="number" name="pageItems" value={pageItems} onChange={(e) => setPageItems(e.target.value)} />
        </label>
        <label>
          <span>Sort by</span>
          <input type="text" name="sort" value={sort} onChange={(e) => setSort(e.target.value)} />
        </label>
        <label>
          <button type="submit">Submit</button>
        </label>
      </form>
    </>
  )

}

export default Settings;