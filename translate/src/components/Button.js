import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends Component {
  // static contextType = LanguageContext;


  render() {
    // const text = this.context === 'english' ? 'Submit' : 'Изпрати';

    return (
      <ColorContext.Consumer>
        {
          (color) =>
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {({ language }) => language === 'english' ? 'Submit' : 'Изпрати'}
              </LanguageContext.Consumer>
            </button>
        }
      </ColorContext.Consumer>
    )
  }
}

export default Button
