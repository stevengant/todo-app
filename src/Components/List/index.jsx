import { useContext, useState } from "react";
import { Else, If, Then } from "react-if";
import Auth from '../Auth';
import { AuthContext } from "../../Context/Auth";
import { SettingsContext } from "../../Context/Settings";
import { Card, CloseButton, Group, Pagination, Text, Badge } from '@mantine/core';


const List = ({ list, toggleComplete, deleteItem }) => {
  const { isLoggedIn, can } = useContext(AuthContext);
  const { pageItems, showCompleted } = useContext(SettingsContext);

  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(list.length / pageItems);

  const displayItems = showCompleted
    ? list
    : list.filter((item) => !item.complete);

  const firstItem = (currentPage - 1) * pageItems;
  const lastItem = currentPage * pageItems;
  const listItems = displayItems.slice(firstItem, lastItem);

  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          {listItems.map(item => (
            <Card withBorder shadow="md" key={item.id} mb="sm">
              <Card.Section withBorder>
                <Group position="apart">
                  <Group>
                    <Badge
                      onClick={() => toggleComplete(item.id)}
                      color={item.complete ? 'red' : 'green'}
                      variant="filled"
                      m="3px"
                    >
                      {item.complete ? 'Complete' : 'Pending'}
                    </Badge>
                    <Text>{item.assignee}</Text>
                  </Group>
                  <CloseButton
                    onClick={() => deleteItem(item.id)}
                    title="Close Todo Item"
                  />
                </Group>
              </Card.Section>
              <Text mt="sm">{item.text}</Text>
              <Text align="right">Difficulty: {item.difficulty}</Text>
              <If condition={isLoggedIn && can('update')}>
                <Then>
                  <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
                </Then>
                <Else>
                  <div>Complete: {item.complete.toString()}</div>
                </Else>
              </If>
              <Auth capability="delete">
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </Auth>
            </Card>

          ))}

        </Then>
      </If>

      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={(value) => setCurrentPage(value)}
      />
    </>
  )
}

export default List;