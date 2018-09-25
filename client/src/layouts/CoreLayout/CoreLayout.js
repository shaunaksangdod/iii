import React from 'react'
import Header from 'components/Nav'
import './CoreLayout.scss'
import 'styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container-fluid'>
    <div className='row'>
      <Header />
    </div>
    <div className='row core-layout__viewport' style={{ marginTop: '55px' }}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
