const styles = theme => ({
  root: {
    width: '100%',
    height: "100%",
    overflow: 'auto',
  },
  nav: {
    backgroundColor: '#222',
    paddingLeft: 300,
    paddingRight: 300,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      paddingLeft: 200,
      paddingRight: 200,
    },
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#222',
  },
  navItem: {
    height: 50,
    width: '100%',
    color: '#fff',
    backgroundColor: '#222',
    '&:hover': {
      backgroundColor: '#F1314F',
    },
  },
  navItemActive: {
    height: 50,
    width: '100%',
    color: '#fff',
    backgroundColor: '#F1314F',
    textDecoration: 'none',
  },
  menuButton: {
    color: '#fff',
    marginRight: 10,
  },
  imgbox: {
    width: 70,
    height: 70,
    border: '1px solid #CFCFCF',
    borderRadius: 35,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#F1314F',
    },
  },
  service_card: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 10px',
  },
  service_item: {
    '&:hover': {
      backgroundColor: '#fffafa',
    },
  },
  content: {
    fontSize: 12,
    fontWeight: 300,
    textAlign: 'center',
    color: '#333',
  },
  blog_content: {
    fontWeight: 300,
    textAlign: 'center',
    color: '#333',
  },
  demoImgBox: {
    cursor: 'pointer',
    overflow: 'hidden',
  },
  demoImg: {
    height: 350,
    verticalAlign: 'middle',
    transition: 'transform .2s',
  },
  progress_img: {
    width: '100%',
    height: 420,
    marginBottom: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  process: {
    position:'relative',
    top: -220,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  text_pro: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
  },
  text_pro1: {
    fontSize: 20,
    color: '#fff',
  },
  service: {
    paddingLeft: 300,
    paddingRight: 300,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      paddingLeft: 200,
      paddingRight: 200,
    },
  },
  more_button: {
    width: 120,
    height: 40,
    color: '#fff',
    backgroundColor: '#F1314F',
    textDecoration: 'none',
  },
  infoItem: {
    height: 50,
    borderBottom:'1px dashed #9B9B9B',
    fontSize: 0,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'left',
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoImg: {
    width: 50,
    height: 50,
    background: '#F1314F',
    borderRadius: 25,
    lineHeight: 50,
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#3D3D3D',
    marginLeft: 30,
  },
  inputItem: {
    // height: 71,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textarea: {
    fontSize: 14,
    marginTop: 10,
    width: '100%',
    height: 120,
    padding: 13,
    border: '1px solid #DDDDDD',
    color: '#3D3D3D',
    resize:'none',
    outline:'none',
  },
  input: {
    fontSize: 14,
    height: 41,
    paddingLeft: 13,
    width: '100%',
    border: '0.3px solid #DDDDDD',
    outline:'none',
  },
  input1: {
    paddingRight: 20,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      paddingRight: 15,
    },
  },
  submit_button: {
    flex: 1,
    marginTop: 10,
    height: 40,
    color: '#fff',
    backgroundColor: '#F1314F',
    textDecoration: 'none',
  },
  footer: {
    backgroundColor: '#29292C',
    color: '#fff',
    marginTop: 30,
    padding: '50px 0px',
  },
  footerItem: {
    padding: '50px 300px',
    [theme.breakpoints.between('md', 'lg')]: {
      padding: '50px 200px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '50px 30px',
    },
  },
  footerTitle: {
    fontWeight: 400,
  },
  footerInfo: {
    fontWeight: 300,
    fontSize: 12,
  },
  footerInfo1: {
    marginTop: 20,
    fontWeight: 300,
    fontSize: 12,
  },
  linkItem: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  footerLink: {
    fontWeight: 300,
    fontSize: 12,
    color: '#eee',
    marginRight: 20,
  },
  footerButton: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  topButton: {
    '&:hover': {
      cursor: 'pointer',
    }
  }
})

export default styles
