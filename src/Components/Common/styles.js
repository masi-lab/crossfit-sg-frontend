const useStyles = {
  // MAIN LAYOUT
  root: {
    display: 'flex',
    overflowY: 'auto',
    height: '100vh', // IMPORTANTE
    flex: '1 0 auto',
  },
  sider: {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0, // check, 200px widht?
  },
  workSpace: {
    marginLeft: 200,
    height: '100vh',
  },
  header: {
    background: '#bff', 
    //paddingLeft: 10
  },
  content: { 
    margin: '16px', 
    overflow: 'initial' 
  },

  // OTHERS?

}


export default useStyles