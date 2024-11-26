import {Component} from 'react'

import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'


const tabList =[
  {tabId:'Home', displayText:'Home',href:'home'},
  {tabId:'Skills', displayText:'Skills',href:'skills'},
  {tabId:'Projects', displayText:'Projects',href:'projects'},
  {tabId:'Education', displayText:'Education',href:'education'},
]

class App extends Component {

  state = {
    activeTabId: tabList[0].tabId,
    isToggle:false,
  }

  clickTabItem = id => {
    this.setState({
      activeTabId: id,
      isToggle:false
    })
    
  }

  onClickHamburger = () => {
    this.setState(prevState=> ({
      isToggle: !prevState.isToggle
    }))
    console.log('clicked')
  }



  render() {
    const {activeTabId,isToggle} = this.state
  return (
    <>
    <header className='header-container'>
      <div className='alingment'>
        <a href='#home' className='nav-head-anchor'>
          <h1 className='nav-heading'>Portfolio</h1>
        </a>

        <div className='mobile-hamburger'>
        {isToggle ? (
          <a className='hamburger-menu-anchor'>
            <FaXmark color='#fff' size={20} onClick={this.onClickHamburger} className='hamburger-icon' />
          </a>
              
            ): (
            <a className='hamburger-menu-anchor' onClick={this.onClickHamburger}>
              <GiHamburgerMenu color='#fff' size={20} className='hamburger-icon' />
            </a>)}
        </div>
        </div>
        
        <nav className={ isToggle ? 'nav-container': 'nav-container mobile-menu-link'}>
          <ul className='tab-list'>
              {tabList.map(eachTab => (
                <Navbar 
                key={eachTab.tabId}
                tabDetails ={eachTab}
                clickTabItem = {this.clickTabItem}
                isActive ={eachTab.tabId === activeTabId}
                />
              ))}
            </ul>
        </nav>

    </header>
        
    <main className='app-container'>
      <Home />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
    </main>
    <Footer/>
  </>
  )
}
}

export default App