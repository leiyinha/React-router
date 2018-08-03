import React from 'react';
import './style.less';
import {
    HashRouter,
    Route,
    Link,
    Switch
  }   from 'react-router-dom';
// import GameApp from './GameApp';
  
  // class Home extends React.Component {
    
  //   render(){
  //     return <div>
  //           <h2>首页</h2> 
  //           <div>
  //             <p>balabalbalbalbablablabal...</p>
  //             <p>balabalbalbalbablablabal...</p>
  //             <p>balabalbalbalbablablabal...</p>
  //           </div>
  //      </div>;
  //   }
  // }
  
  


  class Myhouduan extends React.Component {
    
    render(){
      return <div>
            <h2>后端内容</h2> 
            <h2>后端内容</h2> 
            <h2>后端内容</h2> 
            <h2>后端内容</h2> 
            <h2>后端内容</h2> 

       </div>;
    }
  }

  class Myqianduan extends React.Component {
    
    render(){
      return <div>
            <h2>前端内容</h2> 
            <h2>前端内容</h2> 
            <h2>前端内容</h2> 
            <h2>前端内容</h2> 
            <h2>前端内容</h2> 

       </div>;
    }
  }

  class Myyidong extends React.Component {
    
    render(){
      return <div>
            <h2>移动中心内容</h2> 
            <h2>移动中心内容</h2> 
            <h2>移动中心内容</h2> 
            <h2>移动中心内容</h2> 
            <h2>移动中心内容</h2> 

       </div>;
    }
  }

  class Mytiqian extends React.Component {
    
    render(){
      return <div>
            <h2>提前内容</h2> 
            <h2>提前内容</h2> 
            <h2>提前内容</h2> 
            <h2>提前内容</h2> 
            <h2>提前内容</h2> 

       </div>;
    }
  }

  class Myrongjing extends React.Component {
    
    render(){
      return <div>
            <h2>融晶内容</h2> 
            <h2>融晶内容</h2> 
            <h2>融晶内容</h2> 
            <h2>融晶内容</h2> 
            <h2>融晶内容</h2> 

       </div>;
    }
  }

  class Myceshi extends React.Component {
    
    render(){
      return <div>
            <h2>测试内容</h2> 
            <h2>测试内容</h2> 
            <h2>测试内容</h2> 
            <h2>测试内容</h2> 
            <h2>测试内容</h2> 

       </div>;
    }
  }

  class MyVideo extends React.Component {
    
    render(){
      return <div>
            <h2>规范分类</h2> 
            <div>
              <p>Sql规范</p>
              <p>JAVA基础规范</p>
              <p>java后端服务开发规范</p>
              <p>前端服务开发规范</p>
            </div>
       </div>;
    }
  }
  
  class MyPicture extends React.Component {
    
    render(){
      return <div>
            <h2>Sql规范</h2> 
            <h2>Sql规范</h2> 
            <h2>Sql规范</h2> 
            <h2>Sql规范</h2> 
            <h2>Sql规范</h2> 
            <h2>Sql规范</h2> 

           
       </div>;
    }
  }
  
  
  class MyResume extends React.Component {
    
    render(){
      return <div>
            <h2>JAVA基础规范</h2> 
            <h2>JAVA基础规范</h2> 
            <h2>JAVA基础规范</h2> 
            <h2>JAVA基础规范</h2> 
            <h2>JAVA基础规范</h2> 
            <h2>JAVA基础规范</h2> 

            
       </div>;
    }
  }

  class Myjavahouduan extends React.Component {
    
    render(){
      return <div>
            <h2>JAVA后端服务开发规范</h2> 
            <h2>JAVA后端服务开发规范</h2> 
            <h2>JAVA后端服务开发规范</h2> 
            <h2>JAVA后端服务开发规范</h2> 
            <h2>JAVA后端服务开发规范</h2> 
            <h2>JAVA后端服务开发规范</h2> 

            
       </div>;
    }
  }

  class Myrest extends React.Component {
    
    render(){
      return <div>
            <h2>Rest api 开发规范</h2> 
            <h2>Rest api 开发规范</h2> 
            <h2>Rest api 开发规范</h2> 
            <h2>Rest api 开发规范</h2> 
            <h2>Rest api 开发规范</h2> 
            <h2>Rest api 开发规范</h2> 

            
       </div>;
    }
  }

  class Myqianduanfuwu extends React.Component {
    
    render(){
      return <div>
            <h2>前端服务开发规范</h2> 
            <h2>前端服务开发规范</h2> 
            <h2>前端服务开发规范</h2> 
            <h2>前端服务开发规范</h2> 
            <h2>前端服务开发规范</h2> 
            <h2>前端服务开发规范</h2> 

            
       </div>;
    }
  }

  class Mygittijiao extends React.Component {
    
    render(){
      return <div>
            <h2>Git提交规范</h2> 
            <h2>Git提交规范</h2> 
            <h2>Git提交规范</h2> 
            <h2>Git提交规范</h2> 
            <h2>Git提交规范</h2> 
            <h2>Git提交规范</h2> 

            
       </div>;
    }
  }

  class Mygitlab extends React.Component {
    
    render(){
      return <div>
            <h2>Gitlab CI规范</h2> 
            <h2>Gitlab CI规范</h2> 
            <h2>Gitlab CI规范</h2> 
            <h2>Gitlab CI规范</h2> 
            <h2>Gitlab CI规范</h2> 
            <h2>Gitlab CI规范</h2> 

           
       </div>;
    }
  }
  

  class AboutMe extends React.Component {
    
    render(){
      return (
            <div className="about-me-wrap">
                {/* <h2>关于我</h2>  */}
                <div className="container">
                  <div className="side">
                    <ul>
                      <li><Link to="/index/video">编码规范</Link></li>
                      <li><Link to="/index/picture">Sql规范</Link></li>
                      <li><Link to="/index/resume">JAVA基础规范</Link></li>
                      <li><Link to="/index/javahouduan">JAVA后端服务开发规范</Link></li>
                      <li><Link to="/index/rest">Rest api 开发规范</Link></li>
                      <li><Link to="/index/qianduanfuwu">前端服务开发规范</Link></li>
                      <li><Link to="/index/gittijiao">Git提交规范</Link></li>
                      <li><Link to="/index/gitlab">Gitlab CI规范</Link></li>
                    </ul>
                   </div>
                  <div className="main">
                    <Switch>
                     <Route path="/index/video" component={MyVideo}/>
                     <Route path="/index/picture" component={MyPicture}/>
                     <Route path="/index/resume" component={MyResume}/>
                     <Route path="/index/javahouduan" component={Myjavahouduan}/>
                     <Route path="/index/rest" component={Myrest}/>
                     <Route path="/index/qianduanfuwu" component={Myqianduanfuwu}/>
                     <Route path="/index/gittijiao" component={Mygittijiao}/>
                     <Route path="/index/gitlab" component={Mygitlab}/>
                     <Route component={MyResume}/>
                    </Switch>
                  </div>
                </div>
           </div>
      );
    }
  }

  class zongjie extends React.Component {
    
    render(){
      return (
            <div className="other-me-wrap">
                {/* <h2>关于我</h2>  */}
                <div className="container">
                  <div className="side">
                    <ul>
                      {/* 分支路由的名字 */}
                      <li><Link to="/other/houduan">后端</Link></li>
                      <li><Link to="/other/qianduan">前端</Link></li>
                      <li><Link to="/other/yidong">移动中心</Link></li>
                      <li><Link to="/other/tiqian">提前批</Link></li>
                      <li><Link to="/other/rongjing">融晶</Link></li>
                      <li><Link to="/other/ceshi">测试中心</Link></li>
                    </ul>
                   </div>
                  <div className="main">
                  {/* 分支路由 */}
                    <Switch>
                     <Route path="/other/houduan" component={Myhouduan}/>
                     <Route path="/other/qianduan" component={Myqianduan}/>
                     <Route path="/other/yidong" component={Myyidong}/>
                     <Route path="/other/tiqian" component={Mytiqian}/>
                     <Route path="/other/rongjing" component={Myrongjing}/>
                     <Route path="/other/ceshi" component={Myceshi}/>
                     <Route component={Myhouduan}/>
                    </Switch>
                  </div>
                </div>
           </div>
      );
    }
  }

  
  class App extends React.Component {
    
   render(){
      return (
          <HashRouter>
            <div className="app-wrap">
              <ul className="nav-header">
                {/* <li><Link to="/index">首页</Link></li> */}
                
                <li><Link to="/other">每日总结</Link></li>
                <li><Link to="/index">文档</Link></li>
                <li><a href="http://train.new.hpay.saas.hand-china.com/">
                <img src="../choerodon_logo_fixed.svg" />
                
                </a>
                </li>                
              </ul>
              <div className="app-main">
                <Switch>
                  {/* <Route path="/index" component={Home}/> */}
                  <Route path="/index" component={AboutMe} />
                  <Route path="/other" component={zongjie} />

                  {/* <Route path="/other" component={GameApp}/> */}
                  <Route component={AboutMe}/>
                </Switch>
              </div>
            </div>
        </HashRouter>
      );
   }
  }
  

export default App;
//   ReactDOM.render(<App />,  document.getElementById('container'));