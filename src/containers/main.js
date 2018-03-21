import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  withRouter,
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sendForms } from '../redux/actions/forms'
//ui
import {withStyles } from 'material-ui/styles';
import {
  Button,Typography,Toolbar,AppBar,Grid,Paper,IconButton,
  Drawer,Divider,Hidden,TextField
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import {NAVS,serviceTab, demoTab, processTab, blogTab, aboutTab, imgSrc } from './data'
import Slider from '../components/slider'
// import './style.css'
import styles from './style'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      nav: 'home',
      open: true,
    }
  }

  scrollToAnchor(anchorName){
    this.setState({
      nav: anchorName,
    })
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if(anchorElement) {
        anchorElement.scrollIntoView()
      }
    }
  }
  handleOpen(){
    this.setState({ open: !this.state.open });
  }

  handleClose(){
    this.setState({ open: false });
  }
  handleSumbit() {
    console.log('提交')
    let {actions} = this.props
    // actions.sendForms({
    //   body: {
    //
    //   },
    //   success: (d) => console.log('d->',d)
    // })
  }
  render() {
    const { classes } = this.props
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <a id="#"></a>
          <a id="home"></a>
          <Grid container>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems='center' spacing={0} style={{height: 90,backgroundColor: '#fff'}}>
                <img src={require('../assets/logo.png')}/>
              </Grid>
            </Grid>
            <Hidden smUp>
              <AppBar position="static" className={classes.navbar}>
                <IconButton
                  onClick={() => this.handleOpen()}
                  className={classes.menuButton} color="contrast" aria-label="Menu">
                  <MenuIcon/>
                </IconButton>
              </AppBar>
              <Grid item xs={12} style={!this.state.open ? {display: 'none',padding: 0} : {padding: 0,}}>
                <Grid container justify="center" spacing={0} className={classes.nav}>
                  {
                    NAVS.map((item) => (
                      <Grid item xs={12} sm={2} key={item.key}>
                        <a onClick={()=>this.scrollToAnchor(item.key)}>
                          <Button
                            className={item.key === this.state.nav ? classes.navItemActive : classes.navItem}
                            >{item.name}</Button>
                        </a>
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
            </Hidden>
            <Hidden xsDown>
              <Grid item xs={12} style={{paddingTop: 0,paddingBottom: 0}}>
                <Grid container justify="center" className={classes.nav} spacing={0} >
                  {
                    NAVS.map((item) => (
                      <Grid item xs={12} sm={2} key={item.key}>
                        <a onClick={()=>this.scrollToAnchor(item.key)}>
                          <Button
                            className={item.key === this.state.nav ? classes.navItemActive : classes.navItem}
                            >{item.name}</Button>
                        </a>
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
            </Hidden>
            <Hidden xsDown>
              <Grid item xs={12}>
                <Slider imgData={imgSrc} />
              </Grid>
            </Hidden>
            <Grid item xs={12} style={{marginBottom:30}}>
              <a id="service"></a>
              <Grid container className={classes.service} spacing={0}>
                <Grid item xs={12}>
                  <h1 style={{textAlign:'center'}}>我们的服务</h1>
                </Grid>
                {
                  serviceTab.map((item,i) => (
                    <Grid item xs={12} sm={6} md={3} key={i} className={classes.service_item}>
                      <div className={classes.service_card}>
                        <div className={classes.imgbox}>
                          <img src={item.img}/>
                        </div>
                        <h4>{item.title}</h4>
                        <div className={classes.content}>{item.contents}</div>
                      </div>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            <Grid item xs={12} style={{marginBottom:50}}>
              <a id="demo"></a>
              <Grid container className={classes.service} spacing={0}>
                <Grid item xs={12} style={{marginBottom:10}}>
                  <h1 style={{textAlign:'center'}}>案例介绍</h1>
                </Grid>
                {
                  demoTab.map((item,i) => (
                    <Grid item xs={12} lg={6} key={i} className={classes.service_item}>
                      <div className={classes.service_card}>
                        <div className={classes.demoImgBox} onClick={()=>{window.open(item.uri)}}>
                          <img src={item.img}/>
                        </div>
                        <h3 style={{fontSize: 20}}>{item.title}</h3>
                        <div style={{fontSize: 14,fontWeight:300,color: '#333'}}>{item.contents}</div>
                      </div>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            <Grid item xs={12} style={{marginBottom:30}}>
              <a id="process"></a>
              <GridList cols={1} cellHeight={400} >
                <GridListTile>
                  <GridListTileBar
                    title={'定制开发服务流程'}
                    subtitle={<span>规范化服务流程  确保项目及时交付</span>}
                    className={classes.titleBar}
                  />
                  <img src={require('../assets/bg-progress.png')}/>
                </GridListTile>
              </GridList>
              <div className={classes.process}>
                <span className={classes.text_pro}>定制开发服务流程</span>
                <span className={classes.text_pro1}>规范化服务流程  确保项目及时交付</span>
              </div>
              <Grid container className={classes.service} spacing={0}>
                {
                  processTab.map((item,i) => (
                    <Grid item xs={12} sm={6} lg={2} key={i}>
                      <div className={classes.service_card}>
                        <div className={classes.imgbox}>
                          <img src={item.img}/>
                        </div>
                        <h3>{item.title}</h3>
                        <div className={classes.content}>{item.contents}</div>
                      </div>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            <Grid item xs={12} style={{marginBottom:30}}>
              <a id="blog"></a>
              <Grid container className={classes.service} spacing={0}>
                <Grid item xs={12} style={{marginBottom:10}}>
                  <h1 style={{textAlign:'center'}}>团队博客</h1>
                </Grid>
                {
                  blogTab.map((item,i) => (
                    <Grid item xs={12} md={6} lg={4} key={i} className={classes.service_item}>
                      <div className={classes.service_card}>
                        <div className={classes.demoImgBox} onClick={()=>{window.open(item.uri)}}>
                          <img src={item.img}/>
                          <div className={classes.blog_content}>{item.title}</div>
                        </div>
                      </div>
                    </Grid>
                  ))
                }
                <Grid item xs={12} style={{marginBottom:10}}>
                  <div className={classes.service_card}>
                    <Button className={classes.more_button}>查看更多</Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <a id="about"></a>
              <Grid container className={classes.service} spacing={0}>
                <Grid item xs={12} style={{marginBottom:10}}>
                  <h1 style={{textAlign:'center'}}>联系我们</h1>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={40}>
                    <Grid item xs={12} md={6}>
                      {
                        aboutTab.map((item,i) => (
                          <div className={classes.infoItem} key={i}>
                            <div className={classes.infoImg}>
                              <img src={item.img}/>
                            </div>
                            <span className={classes.infoText}>{item.contents}</span>
                          </div>
                        ))
                      }
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <Grid container justify="center" className={classes.inputItem} spacing={0}>
                        <Grid item xs={12} sm={6} className={classes.input1}>
                          <input type="text" className={classes.input} placeholder="姓名" />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{paddingRight: 15,marginTop: 10,}}>
                          <input type="text" className={classes.input} placeholder="邮箱/手机" />
                        </Grid>
                        <textarea className={classes.textarea} placeholder="您的需求.." />
                        <Button
                          onClick={() => this.handleSumbit()}
                          className={classes.submit_button}>提交</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.footer}>
              <Grid container className={classes.footerItem} spacing={40}>
                <Grid item xs={12} md={6}>
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p className={classes.footerTitle}>关于我们</p>
                    <div className={classes.footerInfo}>
                      我们是一群来自不同城市却怀着同样梦想的年轻人，
                      同时也是在各自技术领域，都有着深入研究的老司机。
                      2016年我们在美丽的西子湖畔—“杭州”创立了亿矩科技，
                      取意非负矩阵算法，标识着我们是有着“智慧”基因的团队，
                      我们的产品将永远走在创新的路上。
                    </div>
                    <p className={classes.footerInfo1}>
                      Copyright &copy; 2017 杭州亿矩网络科技有限公司 浙ICP备17006139号-1
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={classes.linkItem}>
                    <div>
                      <p style={{marginRight: 10}}>友情链接: </p>
                      <a className={classes.footerLink} href="#">米阳科技</a>
                      <a className={classes.footerLink} href="#">运叔科技</a>
                      <a className={classes.footerLink} href="#">阿里云Code</a>
                      <a className={classes.footerLink} href="#">阿里云企业邮箱</a>
                    </div>
                  </div>
                  <div className={classes.footerButton}>
                    <img src={require('../assets/qrcode-wechat.png')}/>
                    <a onClick={()=>this.scrollToAnchor('home')} className={classes.topButton}>
                      <img src={require('../assets/icon-top.png')}/>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}


Main.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({sendForms}, dispatch),
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Main)))
