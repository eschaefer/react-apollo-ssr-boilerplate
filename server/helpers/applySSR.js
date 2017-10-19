const applySSR = (req, res) => {
  /* NOTE: serverBundle is added by `webpack-server-render-middleware`
     if dev mode.
  */
  res.serverBundle.default(req, res);
};

export default applySSR;
