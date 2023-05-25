import React from 'react'
import PropTypes from 'prop-types'

const Component2 = ({
    job = 'Backend Engineer',
    count = 100,
}) => {
  return (
    <div>
        <div>
            Applied for {job} with {count} others
        </div>
    </div>
  )
}

Component2.propTypes = {
  job: PropTypes.string.isRequired,
  count: PropTypes.number
}

export default Component2