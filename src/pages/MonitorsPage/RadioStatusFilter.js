import React, { useState } from 'react'

function RadioStatusFilter() {
  const [isOpen, setIsOpen] = useState(false)

  function showCheckboxes() {
    let checkboxes = document.getElementById('checkboxes')
    if (!isOpen) {
      checkboxes.style.display = 'block'
      setIsOpen(true)
    } else {
      checkboxes.style.display = 'none'
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* <form> */}
      <select name='cars' multiple>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
        <option value='opel'>Opel</option>
        <option value='audi'>Audi</option>
      </select>
      <input type='submit' />
      {/* </form> */}
      {/* <form>
        <div className='multiselect'>
          <div className='selectBox' onClick={showCheckboxes}>
            <select>
              <option>Select an option</option>
            </select>
            <div className='overSelect'></div>
          </div>
        <div id='checkboxes'>
          <label for='one'>
            <input type='checkbox' id='one' />
            First checkbox
          </label>
          <label for='two'>
            <input type='checkbox' id='two' />
            Second checkbox
          </label>
          <label for='three'>
            <input type='checkbox' id='three' />
            Third checkbox
          </label>
        </div>
        </div>
      </form> */}
    </>
  )
}

export default RadioStatusFilter
