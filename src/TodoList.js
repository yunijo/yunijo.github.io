import React, { useState, createRef } from 'react';
//import { createRoot } from 'react-dom/client';
import {
  Container,
  ListGroup,
  Button,
} from 'react-bootstrap';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import uuid from 'react-uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

import './TodoList.css';

function TodoList() {

  const now = new Date();
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const today = now.getFullYear().toString() + month[now.getMonth()+1] + now.getDate().toString();
  const [items, setItems] = useState(() => [
    {
      id: uuid(),
      text: '방 청소하기',
      nodeRef: createRef(null),
    },
    {
      id: uuid(),
      text: '유산소 20분',
      nodeRef: createRef(null),
    },
    {
      id: uuid(),
      text: '분리수거',
      nodeRef: createRef(null),
    },
  ]);
  return (
    <Container>
      <ListGroup style={{ marginBottom: '1rem' }}>
        <ul><li>{today}</li><li>TODO LIST</li></ul>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text, nodeRef }) => (
            <CSSTransition
              key={id}
              nodeRef={nodeRef}
              timeout={500}
              classNames="item"
            >
              <ListGroup.Item ref={nodeRef}>
                <Button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    setItems((items) =>
                      items.filter((item) => item.id !== id)
                    )
                  }
                >
                  &times;
                </Button>
                {text}
              </ListGroup.Item>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
      <Button
        onClick={() => {
          const text = prompt('Enter some text');
          if (text) {
            setItems((items) => [
              ...items,
              {
                id: uuid(),
                text,
                nodeRef: createRef(null),
              },
            ]);
          }
        }}
      >
        Add Item
      </Button>
    </Container>
  );
}

export default TodoList;

