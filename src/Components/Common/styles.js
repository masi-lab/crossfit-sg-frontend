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
    //background: '#ccc', 
    //paddingLeft: 10
  },
  content: { 
    margin: '16px', 
    overflow: 'initial' 
  },

  // OTHERS?

  StudentsList: {
    flexGrow: 1,
    overflowY: 'auto',
    height: '100%', // content cant have this bcse has the toolbar
    //padding: theme.spacing(3),
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',// almost equals to '50% 50%',
    gridTemplateRows: '32px minmax(0, 1fr) 40px', // almost equal to '100%',
    gridGap: '15px'
  },

  itemFormLabel:{
    justifySelf: 'end', alignSelf: 'center'
  },

  itemFormInput:{
    justifySelf: 'start', alignSelf: 'center'
  },

}


export default useStyles