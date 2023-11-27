// to handle completing a task and moving it to the completed list.

// Dispatching this action would typically update the state to reflect that the task with the specified id is now complete.
export const priorityTaskAction = (id) => ({
  type: "PRIORITY_TASK",
  payload: id,
});

export const moveToPriorityListAction = (id) => ({
  type: "MOVE_TO_PRIORITY_LIST",
  payload: id,
});