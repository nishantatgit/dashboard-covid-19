export const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
      let action = { type };
      argNames.forEach((arg, index) => {
          console.log('inside makeActionCreator ', args[index]);
          action[argNames[index]] = args[index]
      });
      return action;
  }
};