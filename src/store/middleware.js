// applyMiddleware
export const loggerData = (state) => (next) => (action) => {
  console.log('Logged action: ', action.type);
  console.log('Data in action is: ', action.data);
  console.log('I can use logger, but I dont');
  next(action)
}
