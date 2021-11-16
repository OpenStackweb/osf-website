import React, { useEffect, useState } from "react"
import { kebabCase } from "lodash-es";

const Navigator = ({ currentSection, optionsList, changeOption }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const newSelected = optionsList.findIndex(e => kebabCase(e) === currentSection);    
    setSelected(newSelected);
  }, [currentSection])

  const selectOption = (option) => {
    changeOption(optionsList[option], true)
    setIsOpen(!isOpen)
  }

  const prevOption = () => {
    if (selected !== 0) {
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
    <div className="navigator-wrapper">
      <section className="navigator-bar">
        <div className="navigator-section" onClick={() => setIsOpen(!isOpen)}>
          <span>{selected !== -1 ? optionsList[selected] : 'Navigate To Section'}</span>
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
    </div>
  )
}

export default Navigator;