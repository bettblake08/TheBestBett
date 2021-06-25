import { Component } from "react";
import { motion } from "framer-motion";

import workPageContext from "../workPageContext";
import variants from "./variants";

import "./collection.scss";

const Work = ({ work, index, selected, handleOnClick }) => (
  <motion.div
    id={work.id}
    variants={selected ? variants.cardSelected : variants.card}
    transition={{
      type: "spring",
      damping: 5,
      mass: 0.75,
      stiffness: 500,
      duration: 0.5
    }}
    className={`work-collection__item${selected ? "--selected" : ""}`}
    onClick={() => handleOnClick(index)}
    layoutTransition={{
      ease: "easeIn",
      duration: 0.5
    }}
    whileHover="card-hover"
  >
    <div className="work-collection__item__image">
      <motion.img
        src={work.image}
        alt={`${work.title}`}
        variants={variants.cardImage}
      />
    </div>
    <motion.div
      className="work-collection__item__name font--label"
      variants={selected ? variants.cardNameSelected : variants.cardName}
    >
      {work.title}
    </motion.div>
  </motion.div>
);

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
        <div className="work-collection__title font--header">{title}</div>
        <div className="work-collection__list">
          {list.map((work, index) => (
            <Work
              work={work}
              key={work.id}
              index={index}
              selected={selectedWork.group === title && index === 0}
              handleOnClick={this.handleOnClick}
            />
          ))}
        </div>
      </motion.div>
    );
  }
}

Collection.contextType = workPageContext;

export default Collection;
