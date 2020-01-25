import React, { Component } from "react";
import { motion } from "framer-motion";
import workPageContext from "../workPageContext";
import pageVariants from "../../../utilities/pageVariants";

import "./collection.scss";

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedWork: 1,
      list: props.list
    };
  }

  handleOnClick = index => {
    const workPage = this.context;
    const { title } = this.props;
    const { list } = this.state;
    workPage.setSelectedWork({ ...list[index], group: title });

    const temp = list[index];
    list[index] = list[0];
    list[0] = temp;

    this.setState({ list });
  };

  renderItem = (item, index, selected) => (
    <motion.div
      key={item.id}
      id={item.id}
      initial="card-initial"
      animate="card-in"
      custom={index}
      variants={pageVariants}
      className={`work-collection__item${selected ? "--selected" : ""}`}
      onClick={() => this.handleOnClick(index)}
      layoutTransition={{
        ease: 'easeIn'
      }}
    >
      <div className="work-collection__item__image">
        <img src={item.image} alt={`${item.title}`} />
      </div>
      <div className="work-collection__item__name">{item.title}</div>
      <div className="work-collection__item__description">
        {item.description}
      </div>
    </motion.div>
  );

  render() {
    const { title } = this.props;
    const { list } = this.state;
    const { selectedWork } = this.context;

    return (
      <motion.div
        className="work-collection"
        animate={{
          transition: {
            staggerChildren: 0.5
          }
        }}
      >
        <div className="work-collection__title">{title}</div>
        <div className="work-collection__list">
          {list.map((item, index) =>
            this.renderItem(
              item,
              index,
              selectedWork.group === title && index === 0
            )
          )}
        </div>
      </motion.div>
    );
  }
}

Collection.contextType = workPageContext;

export default Collection;
