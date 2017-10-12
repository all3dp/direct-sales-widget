import React, {Component} from 'react'

import propTypes from 'Lib/prop-types'
import buildClassName from 'Lib/build-class-name'

import Icon from 'Component/icon'

import navigationArrow from 'Icon/navigation-arrow.svg'

export default class ExpandableParagraph extends Component {
  static propTypes = {
    ...propTypes.component
  }

  state = {
    expanded: false
  }

  handleExpandToggle = this.handleExpandToggle.bind(this)

  handleExpandToggle () {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render () {
    const {expanded} = this.state
    const {children, modifiers = [], classNames} = this.props

    const finalModifiers = [
      ...modifiers,
      {
        expanded
      }
    ]

    return (
      <div className={buildClassName('expandable-paragraph', finalModifiers, classNames)}>
        <span className="expandable-paragraph__content">{children}</span>
        <button className="expandable-paragraph__button" onClick={this.handleExpandToggle}>
          {this.state.expanded ? 'CLOSE ' : 'LEARN MORE '}
          <span className="expandable-paragraph__icon">
            <Icon source={navigationArrow} />
          </span>
        </button>
      </div>
    )
  }
}
