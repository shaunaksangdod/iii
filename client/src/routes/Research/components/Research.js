import React from 'react'
import * as d3 from 'd3'
import './Research.scss'

const cats = [
  'Full Time',
  'Poverty',
  'Working Poor',
  'Homeownership',
  'Rent Burden',
  'Unemployment',
  'Income',
  'Naturalization'
]

var Blues = ['#08306b', '#08519c', '#2171b5', '#4292c6', '#6baed6', '#9ecae1', '#c6dbef', '#deebf7', '#f7fbff', '#fff']

class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='container-fluid text-center .research-content' style={{ minHeight:'100vh', background: '#fff' }}>
        <div className='container' >
          <div className='row'>
            <div className='col-md-2' />
            <div className='col-md-8' style={{ overflow:'hidden', textAlign:'justify' }}>

              <div>
               <img style={{width: '100%', height:'auto'}} src={'/womeningov/iii/img/III Methodology.jpg'} alt={'Methodology'} />
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeView
