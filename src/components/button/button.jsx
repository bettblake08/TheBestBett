import { Component } from "react";
import PropTypes from "prop-types";

import "./button.scss";

export const STATUS_STRINGS = [
  "normal",
  "fail",
  "success",
  "loading",
  "warning",
  "fail:fixed",
  "success:fixed",
  "icon-only"
];

export const COMPONENT_STATUS_CLASS = [
  "normal",
  "fail",
  "success",
  "loading",
  "warning",
  "fail",
  "success",
  "icon-only"
];

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.defaultStatus
    };
  }

  componentDidMount() {
    const { parent, name } = this.props;
    parent.setComponents({
      ...parent.components,
      [name]: this
    });
  }

  componentDidUpdate() {
    const component = this;
    const { status } = component.state;
    if ([1, 2].includes(status)) {
      const { defaultStatus } = component.props;
      setTimeout(() => {
        component.setState({ status: defaultStatus });
      }, 3000);
    }
  }

  setStatus = status => {
    const statusIndex = STATUS_STRINGS.findIndex(string => string === status);
    this.setState({
      status: statusIndex > 0 ? statusIndex : 0
    });
  };

  renderIcon = icon => {
    if (typeof icon === "string") return <i className={`fas fa-${icon}`} />;
    return icon;
  };

  setIcon = config => (
    <>
      <div className="button__icon">{this.renderIcon(config.icon)}</div>
      <div className="button__label">
        <span className="font--normal">{config.label}</span>
      </div>
    </>
  );

  render() {
    const {
      config: { label, action, icon, reverse }
    } = this.props;
    const { status } = this.state;
    const statusText = COMPONENT_STATUS_CLASS[status];

    return (
      <div className={`button--${statusText} ${reverse ? 'button--reverse' : ''}`} onClick={action}>
        {icon ? this.setIcon({ icon, label }) : label}
      </div>
    );
  }
}

Button.propTypes = {
  defaultStatus: PropTypes.number,
  componentStateKey: PropTypes.string,
  name: PropTypes.string.isRequired,
  parent: PropTypes.instanceOf(Object).isRequired,
  config: PropTypes.shape({
    action: PropTypes.func,
    label: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
    reverse: PropTypes.bool
  }).isRequired
};

Button.defaultProps = {
  defaultStatus: 0,
  componentStateKey: "neoComponents"
};

export default Button;
