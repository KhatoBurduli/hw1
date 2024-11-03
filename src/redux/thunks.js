import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('app/fetchItems', async () => {
  const response = await axios.get('/api/items');
  return response.data;
});

export const addItem = createAsyncThunk('app/addItem', async (newItem) => {
  const response = await axios.post('/api/items', newItem);
  return response.data;
});

export const updateItem = createAsyncThunk('app/updateItem', async (updatedItem) => {
  const response = await axios.put(`/api/items/${updatedItem.id}`, updatedItem);
  return response.data;
});

export const deleteItem = createAsyncThunk('app/deleteItem', async (id) => {
  await axios.delete(`/api/items/${id}`);
  return id;
});
