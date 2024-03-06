import { createSlice } from '@reduxjs/toolkit';

export const workflowSlice = createSlice({
  name: 'workflow',
  initialState: {
    workflows: [],
  },
  reducers: {
    addWorkflow: (state, action) => {
      state.workflows.push(action.payload);
    },
    removeWorkflow: (state, action) => {
      state.workflows = state.workflows.filter(workflow => workflow.id !== action.payload);
    },
  },
});

export const { addWorkflow, removeWorkflow } = workflowSlice.actions;

export const selectWorkflows = state => state.workflow.workflows;

export default workflowSlice.reducer;
