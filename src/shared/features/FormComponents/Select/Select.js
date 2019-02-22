import * as React from 'react';
import listensToClickOutside from 'react-onclickoutside';

import { Label } from '../Label/Label';
import {
  SelectStyled,
  SelectionCurrent,
  SelectionCurrentValue,
  SelectionListItem,
  SelectionList,
  InputStyles
} from './styles';

class Select extends React.Component {
  static defaultProps = {
    label: '',
    options: [],
    allowPrintMode: false
  };

  state = {
    text: '',
    isTyping: false,
    isOpen: false
  };

  onCurrentClick = () => {
    if (this.props.disabled || this.state.isTyping) {
      return;
    }
    this.setState({
      isOpen: !this.state.isOpen,
      isTyping: this.props.allowPrintMode ? true : this.state.isTyping
    });
  };

  closeList = (value) =>
    this.setState({
      isOpen: false,
      isTyping: false,
      text: value ? this.props.options.filter(o => o.value === value)[0].label : this.state.text
    });

  handleClickOutside = () => this.state.isOpen && this.closeList();

  onClickItem = (name, value) => {
    const { onChange } = this.props;

    const event = {
      currentTarget: {
        name,
        value
      }
    };
    onChange(event);
    this.closeList(value);
  };

  onTyping = (e) => {
    this.setState({
      text: e.currentTarget.value
    });
  };

  renderList = (options) => {
    return options.map((option, index) => {
      return (
        <SelectionListItem
          key={index}
          onClick={() => this.onClickItem(this.props.name, option.value)}
        >
          {option.label}
        </SelectionListItem>
      );
    });
  };

  render() {
    const {
      label,
      options,
      value,
      name,
      allowPrintMode
    } = this.props;
    const { isOpen, isTyping, text } = this.state;

    let currentLabel = options[0].label;
    options.forEach(item => {
      currentLabel = item.value === value ? item.label : currentLabel;
    });

    const filteredOptions =
      text && allowPrintMode ? options.filter(o => o.label.toUpperCase().includes(text.toUpperCase())) : options;
    return (
      <SelectStyled name={name}>
        {!!label && (
          <Label label={label}>
            {label}
          </Label>
        )}
        <SelectionCurrent
          onClick={this.onCurrentClick}
        >
          <SelectionCurrentValue isTyping={isTyping}>
            {isTyping ? <InputStyles type="text" value={text} onChange={this.onTyping} /> : currentLabel}
          </SelectionCurrentValue>
        </SelectionCurrent>
        <SelectionList isOpen={isOpen}>
          {this.renderList(filteredOptions)}
        </SelectionList>
      </SelectStyled>
    );
  }
}

const select = listensToClickOutside(Select);

export { select as Select };

