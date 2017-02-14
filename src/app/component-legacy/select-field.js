import React, {createElement} from 'react'
import {compose, branch, withState, withHandlers} from 'recompose'
import uniqueId from 'lodash/uniqueId'
import identity from 'lodash/identity'

import Icon from './icon'
import arrowDownIcon from '../../asset/icon/arrow-down.svg'
import propTypes from '../lib/prop-types'
import buildClassName from '../lib/build-class-name'

const SelectField = ({
  classNames,
  modifiers = [],
  label,
  children,
  value,
  initValue,  // eslint-disable-line no-unused-vars-rest/no-unused-vars
  ...params
}) => {
  if (!value) {
    modifiers.push('nothing-selected')
  }

  const selectedItem = children.reduce((last, cur) =>
    (cur.props.value === value ? cur : last), children[0])

  const selectedChildren = selectedItem
    ? createElement('span', null, selectedItem.props.children)
    : null

  const id = uniqueId('uid-')

  return (
    <div
      className={buildClassName('select-field',
        [modifiers, {'nothing-selected': !selectedChildren}],
        classNames)
      }
    >
      <select id={id} value={value} selected={value} className="select-field__input" {...params}>
        {children}
      </select>
      <label htmlFor={id} className="select-field__label">{label}</label>
      <div className="select-field__selected-text">{selectedChildren}</div>
      <div className="select-field__expand-icon"><Icon source={arrowDownIcon} /></div>
    </div>
  )
}

SelectField.propTypes = {
  ...propTypes.component,
  selected: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  value: React.PropTypes.string
}

// Add initValue property
const enhanced = compose(
  branch(
    ownProps => ownProps.initValue !== undefined,
    compose(
      withState('value', 'onChange', ownProps => ownProps.initValue),
      withHandlers({
        onChange: props => event => props.onChange(event.target.value)
      }),
    ),
    identity
  )
)

export default enhanced(SelectField)