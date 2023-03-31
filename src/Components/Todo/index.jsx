import React, { useEffect, useState } from 'react';

import List from '../List';
import useForm from '../../hooks/form';
import Auth from '../Auth';
import { v4 as uuid } from 'uuid';
import { Button, Card, createStyles, Grid, Slider, Text, TextInput } from '@mantine/core';

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

const Todo = () => {

  const { classes } = useStyles();
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item._id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(_id) {
    const items = list.filter(item => item._id !== _id);
    setList(items);
  }

  function toggleComplete(_id) {

    const items = list.map(item => {
      if (item._id === _id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>

        <h1 className={classes.h1} data-testid="todo-h1">To Do List: {incomplete} items pending</h1>


      <Grid style={{ width: '80%', margin: 'auto' }}>
      <Auth capability="create">
        <Grid.Col xs={12} sm={4}>

          <Card withBorder>
            <form onSubmit={handleSubmit}>
            
              <h2>Add To Do Item</h2>
              <TextInput
                placeholder='Item Details'
                label='To Do Item'
                onChange={handleChange}
                name="text"
              />

              <TextInput
                placeholder='Assignee Name'
                label='Assigned To'
                onChange={handleChange}
                name="assignee"
              />

              <Text>Difficulty</Text>
              <Slider
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                min={1}
                max={5}
                step={1}
              />

              <Button mt="sm" type="submit">Add Item</Button>
              
            </form>
          </Card>
  
        </Grid.Col>
        </Auth>
        <Grid.Col xs={12} sm={8}>
          <List
            list={list}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Todo;