import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, addItem, updateItem, deleteItem } from './redux/thunks';
import { toggleTheme } from './redux/reducers';

const App = () => {
  const dispatch = useDispatch();
  const { items, theme, status } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addItem({ name: 'New Item' }));
  };

  const handleUpdate = (id) => {
    dispatch(updateItem({ id, name: 'Updated Item' }));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>CRUD აპლიკაცია</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <button onClick={handleAdd}>დამატება</button>
      
      {status === 'loading' && <p>იტვირთება...</p>}
      
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdate(item.id)}>რედაქტირება</button>
            <button onClick={() => handleDelete(item.id)}>წაშლა</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
