import { configureStore } from '@reduxjs/toolkit';
import workflowReducer from './WorkflowSlice'

export const store = configureStore({
  reducer: {
    workflow: workflowReducer,
  },
});
