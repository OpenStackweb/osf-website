import React, { useState } from "react"

const Navigator = ({ optionsList, changeOption }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null)

  const selectOption = (option) => {
    setSelected(option)
    changeOption(optionsList[option])
    setIsOpen(!isOpen)
  }

  const prevOption = () => {
    if (selected !== 0) {
      setSelected(selected - 1)
      changeOption(optionsList[selected - 1])
      setIsOpen(false)
    }
  }
  const nextOption = () => {
    if (selected !== optionsList.length - 1) {
      setSelected(selected + 1)
      changeOption(optionsList[selected + 1])
      setIsOpen(false)
    }
  }

  return (
    <>
      <section className="navigator-wrapper">
        <div className="navigator-section" onClick={() => setIsOpen(!isOpen)}>
          <span>{selected !== null ? optionsList[selected] : 'Navigate To Section'}</span>
          <i className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
        </div>
        <div className="navigator-icons">
          <i onClick={() => prevOption()} className="fa fa-chevron-left" />
          <i onClick={() => nextOption()} className="fa fa-chevron-right" />
        </div>
      </section>
      {isOpen &&
        <section className="navigator-dropdown">
          {optionsList.map((o, index) => {            
            return (
              <div key={`navigator-${index}`} onClick={() => selectOption(index)}>
                {o}
              </div>
            )
          })}
        </section>
      }
    </>
  )
}

export default Navigator;