import React from 'react'
import NavDropdown from 'components/utils/NavDropdown'
import DataExplorer from '/Users/shaun/Documents/iii/client/src/routes/DataExplorer/components/DataExplorer.js' //ToDo need to chenge to relative path
import { IndexLink, Link } from 'react-router'
import './Nav.scss'
const studyAreas = [
  {
    url: '/data/2014/nativity',
    text: 'The Effects of Nativity Status',
    img: '/img/image_1.jpg'
  },
  {
    url: '/data/2014/race',
    text: 'The Effects of Race'
  },
  {
    url: '/data/2014/gender',
    text: 'The Effects of Gender'
  },
  {
    url: '/data/2014/vulnerable',
    text: 'The Effects of Low English Proficiency & Educational Attainment'
  }
]
const studyAreas_2016 = [
 {
  url: '/data/2016/nativity',
  text: 'The Effects of Nativity Status',
  img: '/img/image_1.jpg'
 },
 {
  url: '/data/2016/race',
  text: 'The Effects of Race'
 },
 {
  url: '/data/2016/gender',
  text: 'The Effects of Gender'
 },
 {
  url: '/data/2016/vulnerable',
  text: 'The Effects of Low English Proficiency & Educational Attainment'
 }
]

function toggle_menu(event) {
 let el = event.target;
 // make other sibling lists hidden
 if (el.id == 'menu_2014') {
  el.nextSibling.childNodes[3].style.display = "none";
  window.year = '2014';
 }else if(el.id == 'menu_2016'){
  el.previousSibling.childNodes[3].style.display = "none";
  window.year = '2016';
 }

 // toggle state
 el.childNodes[3].style.display = el.childNodes[3].style.display == "none" ? "block" : "none";
}
export const Nav = () => {
 var links_2014 = studyAreas.map(d => (<Link key={d.text} to={d.url} className='dropdown-item'>{d.text}</Link>))
 var links_2016 = studyAreas_2016.map(d => (<Link key={d.text} to={d.url} className='dropdown-item'>{d.text}</Link>))
  return (
    <nav className='navbar navbar-dark theme-color nav-custom'>
      <button className='navbar-toggler hidden-sm-up' type='button' data-toggle='collapse' data-target='#collapseEx2'>
        <i className='fa fa-bars' />
      </button>

      <div className='container'>
        <IndexLink to='/' className='navbar-brand'>
            Immigrant Integration Index
          </IndexLink>
        <div className='collapse navbar-toggleable-md' id='collapseEx2'>

          <ul className='nav navbar-nav' />
          <form className='form-inline'>
            <ul className='nav navbar-nav hidden'>

              <li className='nav-item'>
                <Link to='/' className='nav-link active'>HOME</Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link active'>ABOUT</Link>
              </li>
              <li className='nav-item btn-group'>
                <NavDropdown title={<span>DATA EXPLORER</span>}>
                 <menu id={'menu_2014'} onMouseEnter={toggle_menu}>2014
                  <menu id={'links'} style={{display: 'none'}}>{links_2014}</menu>
                 </menu>
                 <menu id={'menu_2016'} onMouseEnter={toggle_menu}>2016
                  <menu id={'links'} style={{display: 'none'}}>{links_2016}</menu>
                 </menu>
                </NavDropdown>
              </li>
              <li className='nav-item'>
                <Link to='/research' className='nav-link active'>METHODOLOGY</Link>
              </li>
              <li className='nav-item'>
                <Link to='/publications' className='nav-link active'>PUBLICATIONS</Link>
              </li>
              <li className='nav-item'>
                <Link to='/team' className='nav-link active'>TEAM</Link>
              </li>
             <li className='nav-item'>
              <Link to='#' className='nav-link active'>{window.year}</Link>
             </li>
            </ul>
          </form>
        </div>

      </div>

    </nav>
  )
}

export default Nav
