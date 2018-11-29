import React from 'react'
import NavDropdown from 'components/utils/NavDropdown'
import { IndexLink, Link } from 'react-router'
import './Nav.scss'
const studyAreas = [
  {
    url: '/womeningov/iii/data/2014/nativity',
    text: 'The Effects of Nativity Status',
    img: '/womeningov/iii/img/image_1.jpg'
  },
  {
    url: '/womeningov/iii/data/2014/race',
    text: 'The Effects of Race'
  },
  {
    url: '/womeningov/iii/data/2014/gender',
    text: 'The Effects of Gender'
  },
  {
    url: '/womeningov/iii/data/2014/vulnerable',
    text: 'The Effects of Low English Proficiency & Educational Attainment'
  }
]
const studyAreas_2016 = [
 {
  url: '/womeningov/iii/data/2016/nativity',
  text: 'The Effects of Nativity Status',
  img: '/womeningov/iii/img/image_1.jpg'
 },
 {
  url: '/womeningov/iii/data/2016/race',
  text: 'The Effects of Race'
 },
 {
  url: '/womeningov/iii/data/2016/gender',
  text: 'The Effects of Gender'
 },
 {
  url: '/womeningov/iii/data/2016/vulnerable',
  text: 'The Effects of Low English Proficiency & Educational Attainment'
 }
]
const studyAreas_2017 = [
 {
  url: '/womeningov/iii/data/2017/nativity',
  text: 'The Effects of Nativity Status',
  img: '/womeningov/iii/img/image_1.jpg'
 },
 {
  url: '/womeningov/iii/data/2017/race',
  text: 'The Effects of Race'
 },
 {
  url: '/womeningov/iii/data/2017/gender',
  text: 'The Effects of Gender'
 },
 {
  url: '/womeningov/iii/data/2017/vulnerable',
  text: 'The Effects of Low English Proficiency & Educational Attainment'
 }
]

const studyAreas_HISP_2016 = [
 {
  url: '/womeningov/iii/data/HISP_2016/nativity',
  text: 'The Effects of Nativity Status',
  img: '/img/image_1.jpg'
 },
 {
  url: '/womeningov/iii/data/HISP_2016/race',
  text: 'The Effects of Race'
 },
 {
  url: '/womeningov/iii/data/HISP_2016/gender',
  text: 'The Effects of Gender'
 }
]

const studyAreas_PR_2012_2016 = [
 {
  url: '/womeningov/iii/data/PR_2012_2016/nativity',
  text: 'The Effects of Nativity Status',
  img: '/womeningov/iii/img/image_1.jpg'
 },
 {
  url: '/womeningov/iii/data/PR_2012_2016/race',
  text: 'The Effects of Race'
 },
 {
  url: '/womeningov/iii/data/PR_2012_2016/gender',
  text: 'The Effects of Gender'
 }
]

function toggle_menu(event) {
 // To add new data, Update: Nav.js, Create new DataExplorer, Update DataExplorer/index.js, routes/index.js(lines 4 and 23)
 let el = event.target;
 // make other sibling lists hidden
 if (el.id == 'menu_2014') {
  el.nextSibling.childNodes[3].style.display = "none";
  el.nextSibling.nextSibling.childNodes[3].style.display = "none";
  el.nextSibling.nextSibling.nextSibling.childNodes[3].style.display = "none";
  el.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[3].style.display = "none";
  window.year = '2014';
 }else if(el.id == 'menu_2016'){
  el.previousSibling.childNodes[3].style.display = "none";
  el.nextSibling.childNodes[3].style.display = "none";
  el.nextSibling.nextSibling.childNodes[3].style.display = "none";
  el.nextSibling.nextSibling.nextSibling.childNodes[3].style.display = "none";
  window.year = '2016';
 }else if(el.id == 'menu_2017'){
  el.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.childNodes[3].style.display = "none";
  el.nextSibling.childNodes[3].style.display = "none";
  el.nextSibling.nextSibling.childNodes[3].style.display = "none";
  window.year = '2017';
 }else if(el.id == 'menu_HISP_2016'){
  el.previousSibling.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.childNodes[3].style.display = "none";
  el.nextSibling.childNodes[3].style.display = "none";
  window.year = 'HISP_2016';
 }else if(el.id == 'menu_PR_2012_2016'){
  el.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.childNodes[3].style.display = "none";
  window.year = 'PR_2016';
 }

 // toggle state
 el.childNodes[3].style.display = el.childNodes[3].style.display == "none" ? "block" : "none";
}
export const Nav = () => {
 var links_2014 = studyAreas.map(d => (<Link key={d.text} to={d.url} className='dropdown-item'>{d.text}</Link>))
 var links_2016 = studyAreas_2016.map(d => (<Link key={d.text} to={d.url} className='dropdown-item'>{d.text}</Link>))
 var links_2017 = studyAreas_2017.map(d => (<Link key={d.text} to={d.url} className='dropdown-item'>{d.text}</Link>))
 var links_HISP_2016 = studyAreas_HISP_2016.map(d => (<Link key={d.text} to={d.url} className='dropdown-item'>{d.text}</Link>))
 var links_PR_2012_2016 = studyAreas_PR_2012_2016.map(d => (<Link key={d.text} to={d.url} className='dropdown-item'>{d.text}</Link>))

 return (
    <nav className='navbar navbar-dark theme-color nav-custom'>
      <button className='navbar-toggler hidden-sm-up' type='button' data-toggle='collapse' data-target='#collapseEx2'>
        <i className='fa fa-bars' />
      </button>

      <div className='container'>
        <IndexLink to='/womeningov/iii/' className='navbar-brand'>
            Immigrant Integration Index
          </IndexLink>
        <div className='collapse navbar-toggleable-md' id='collapseEx2'>

          <ul className='nav navbar-nav' />
          <form className='form-inline'>
            <ul className='nav navbar-nav hidden'>

              <li className='nav-item'>
                <Link to='/womeningov/iii/' className='nav-link active'>HOME</Link>
              </li>
              <li className='nav-item'>
                <Link to='/womeningov/iii/about' className='nav-link active'>ABOUT</Link>
              </li>
              <li className='nav-item btn-group'>
                <NavDropdown title={<span>DATA EXPLORER</span>}>
                 <menu id={'menu_2014'} onMouseEnter={toggle_menu}>2014
                  <menu id={'links'} style={{display: 'none'}}>{links_2014}</menu>
                 </menu>
                 <menu id={'menu_2016'} onMouseEnter={toggle_menu}>2016
                  <menu id={'links'} style={{display: 'none'}}>{links_2016}</menu>
                 </menu>
                 <menu id={'menu_2017'} onMouseEnter={toggle_menu}>2017
                  <menu id={'links'} style={{display: 'none'}}>{links_2017}</menu>
                 </menu>
                 <menu id={'menu_HISP_2016'} onMouseEnter={toggle_menu}>Hispanic 2012-2016
                  <menu id={'links'} style={{display: 'none'}}>{links_HISP_2016}</menu>
                 </menu>
                 <menu id={'menu_PR_2012_2016'} onMouseEnter={toggle_menu}>Puerto Rico 2012-2016
                  <menu id={'links'} style={{display: 'none'}}>{links_PR_2012_2016}</menu>
                 </menu>
                </NavDropdown>
              </li>
              <li className='nav-item'>
                <Link to='/womeningov/iii/research' className='nav-link active'>METHODOLOGY</Link>
              </li>
              <li className='nav-item'>
                <Link to='/womeningov/iii/team' className='nav-link active'>TEAM</Link>
              </li>
            </ul>
          </form>
        </div>

      </div>

    </nav>
  )
}

export default Nav
