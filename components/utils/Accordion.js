import React, { useState, useRef } from 'react';
import styles from '../../styles/ultisCss/Accordion.module.css';

function Accordion(props) {
  const { title, children } = props;
  const [active, setActive] = useState(false);
  const activityCardRef = useRef(null);

  const height_style_active = {
    height:
      active && activityCardRef.current
        ? `${activityCardRef.current.scrollHeight}px`
        : '0px',

    borderTop: 'solid 1px #d3d3d3',
  };

  const height_style = {
    height: '0px',
  };

  function toggleActive() {
    setActive(!active);
  }
  return (
    <>
      <div className={styles.Accordion}>
        <div className={styles.AccordionHeader} onClick={toggleActive}>
          <span>{title} </span>
          <div className={styles.iconWrap}>
            {active ? (
              <img src="/icons/minus.svg" width={10} />
            ) : (
              <img src="/icons/plus.svg" width={10} />
            )}
          </div>
        </div>
        <div
          ref={activityCardRef}
          style={active ? height_style_active : height_style}
        >
          <div className={styles.AccordionBody}>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Accordion;
