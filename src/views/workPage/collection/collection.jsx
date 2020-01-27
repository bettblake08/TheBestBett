import React, { Component } from "react";
import { motion } from "framer-motion";
import workPageContext from "../workPageContext";
import variants from "./variants";

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

    const work = list[index];
    list[index] = list[0];
    list[0] = work;

    this.setState({ list }, () =>
      workPage.setSelectedWork({ ...work, group: title })
    );
  };

  renderItem = (item, index, selected) => (
    <motion.div
      key={item.id}
      id={item.id}
      variants={selected ? variants.cardSelected : variants.card}
      transition={{
        type: "spring",
        damping: 5,
        mass: 0.75,
        stiffness: 500,
        duration: 0.5
      }}
      className={`work-collection__item${selected ? "--selected" : ""}`}
      onClick={() => this.handleOnClick(index)}
      layoutTransition={{
        ease: "easeIn",
        duration: 0.5
      }}
      whileHover="card-hover"
    >
      <div className="work-collection__item__image">
        <motion.img src={item.image} alt={`${item.title}`} variants={variants.cardImage} />
      </div>
      <motion.div
        className="work-collection__item__name"
        variants={selected ? variants.cardNameSelected : variants.cardName}
      >
        {item.title}
      </motion.div>
    </motion.div>
  );

  render() {
    const { title } = this.props;
    const { list } = this.state;
    const { selectedWork } = this.context;

    return (
      <motion.div
        className="work-collection"
        variants={variants.collection}
        animate="card-in"
        initial="card-initial"
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
