import React from 'react'
// import { Scrollspy } from 'react-scrollspy'
import './OverView.scss'

const categories = {
 'Demographics': [15],
 'English Proficiency': [13, 14],
 'Educational Attainment' : [1,2,3],
 'Income' : [7,8,9],
 'Poverty' : [10,11,12],
 'Unemployment' : [4,5,6]
}
const categories_2 = {
 'Demographics': [16,17],
 'English Proficiency': [4,5,6],
 'Educational Attainment' : [1,2,3],
 'Income' : [10,11,12],
 'Poverty' : [13,14,15],
 'Unemployment' : [7,8,9]
}
function toggle_state(event){
 let el = event.target;
 if (el.id == '2014') {
  el.nextSibling.childNodes[3].style.display = "none";
  el.nextSibling.nextSibling.childNodes[3].style.display = "none";
  el.nextSibling.nextSibling.nextSibling.childNodes[3].style.display = "none";
  //el.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[3].style.display = "none";
  //el.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[3].style.display = "none";
 }else if(el.id == '2016'){
  el.previousSibling.childNodes[3].style.display = "none";
  el.nextSibling.childNodes[3].style.display = "none";
  el.nextSibling.nextSibling.childNodes[3].style.display = "none";
  //el.nextSibling.nextSibling.nextSibling.childNodes[3].style.display = "none";
  //el.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[3].style.display = "none";
 } else if(el.id == '2017'){
  el.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.childNodes[3].style.display = "none";
  el.nextSibling.childNodes[3].style.display = "none";
  //el.nextSibling.nextSibling.childNodes[3].style.display = "none";
  //el.nextSibling.nextSibling.nextSibling.childNodes[3].style.display = "none";
 }else if(el.id == 'HISP_2016'){
  el.previousSibling.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.childNodes[3].style.display = "none";
  //el.nextSibling.nextSibling.childNodes[3].style.display = "none";
  //el.nextSibling.childNodes[3].style.display = "none";
 }else if(el.id == 'PR_2012_2016'){
  el.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.childNodes[3].style.display = "none";
  el.nextSibling.childNodes[3].style.display = "none";
 }else if(el.id == 'PR_new'){
  el.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.previousSibling.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.previousSibling.childNodes[3].style.display = "none";
  el.previousSibling.childNodes[3].style.display = "none";
 }

 el.childNodes[3].style.display = el.childNodes[3].style.display == "none" ? "block" : "none";

}
class OverView extends React.Component {
 constructor (props) {
  super(props)
  this.state = {
   activeCategory : 'Demographics'
  }
 }

 render () {
  let years = ['2014','2016','2017']
  let years_2 = ['HISP_2016']; {/*,'PR_2012_2016','PR_new'*/}
  return (
   <div>
    <div className='container-fluid text-center overview_container' style={{ backgroundColor: '#fff', overflow:'hidden' }}>
     <div className='container overview-content'>
      <div className='row'>
       <div className='col-md-2'>
        <br />

        {
         years.map(function (year,index) {
          return(
           <div onMouseEnter={toggle_state} id={year}>{year}
            <div items={Object.keys(categories)} currentClassName='' style={{display:"none"}} >
             {
              Object.keys(categories).map(cat => {
               return (
                <a href={'#' + cat + '_' + year} className='list-group-item'>
                 {cat}
                </a>
               )
              })}
            </div>
           </div>
          )
         })
        }

        {
         years_2.map(function (year,index) {
          return(
           <div onMouseEnter={toggle_state} id={year}>{year}
            <div items={Object.keys(categories_2)} currentClassName='' style={{display:"none"}} >
             {
              Object.keys(categories_2).map(cat => {
               return (
                <a href={'#' + cat + '_' + year} className='list-group-item'>
                 {cat}
                </a>
               )
              })}
            </div>
           </div>
          )
         })
        }


       </div>
       <div className='col-md-10' style={{ height:'100vh', paddingRight: 0 }}>
        <div style={{ height: '100%', overflowY:'scroll', padding: 30, textAlign:'justify' }} >

         {
          years.map(function (year,index) {
           return(

            Object.keys(categories).map(cat => {
             return (
              <div style={{maxWidth: 940}}>
               <h4 id={cat + '_' + year} >
                {cat + ' ' + year}
               </h4>
               {
                categories[cat].map(imgId => {
                 return (
                  <img style={{maxWidth: 850, width: '100%', height:'auto'}}className='img-responsive img img-fluid' src={'/womeningov/iii/img/data_overview/' + year + '/img' + imgId + '.png'} />
                 )
                })}
              </div>
             )
            })

           )
          })
         }

         {
          years_2.map(function (year,index) {
           return(

            Object.keys(categories_2).map(cat => {
             return (
              <div style={{maxWidth: 940}}>
               <h4 id={cat + '_' + year} >
                {cat + ' ' + year}
               </h4>
               {
                categories_2[cat].map(imgId => {
                 return (
                  <img style={{maxWidth: 850, width: '100%', height:'auto'}}className='img-responsive img img-fluid' src={'/womeningov/iii/img/data_overview/' + year + '/img' + imgId + '.png'} />
                 )
                })}
              </div>
             )
            })

           )
          })
         }


        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  )
 }
}

export default OverView

