import { navigate } from 'gatsby-link'
import { kebabCase } from 'lodash-es'
import React from 'react'
import Content, { HTMLContent } from '../components/Content'

import leftArrow from '../img/svg/arrow-left.svg'

export const SurveyTypeTemplate = ({
  title,
  content,
  logo,
  button,
  contentComponent
}) => {
  const PageContent = contentComponent || Content  

  return (
    <div className="user-survey-abstract" id={kebabCase(title)}>
      <img className="survey-image" src={logo} />
      <PageContent className="survey-text" content={content} />
      <button className="survey-button" onClick={() => navigate(button.link)}>
        {button.text}
        <img src={leftArrow} alt="" />
      </button>
    </div>
  )
}