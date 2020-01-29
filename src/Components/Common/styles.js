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
    background: '#fff', padding: 0 
  },
  content: { 
    margin: '24px 16px 0', 
    overflow: 'initial' 
  },

  // OTHERS?

}


export default useStyles