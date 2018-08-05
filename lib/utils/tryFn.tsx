function tryFn(obj) {
  try {
    return obj();
  } catch (error) {
    return undefined;
  }
}

export default tryFn;
