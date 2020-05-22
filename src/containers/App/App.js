import React from 'react';
import outsideClickHOC from '../../hoc/outsideClickHoc/outsideClickHOC';
import SelectDropdown from '../../components/SelectDropdown/SelectDropdown';
import styles from './App.module.css';

function App() {
  const HocComponent1 = outsideClickHOC(SelectDropdown);
  const HocComponent2 = outsideClickHOC(SelectDropdown);
  const HocComponent3 = outsideClickHOC(SelectDropdown);
  return (
    <div className={styles.App}>
      <HocComponent1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis sint rerum aliquid minima eos cum quaerat dignissimos ab. Consequatur sunt asperiores quas. Veniam eum iure quis, accusantium quia asperiores?
      </HocComponent1>
      <HocComponent2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt earum iste, pariatur fugiat iusto nobis sit cum, ullam aliquid ipsam sequi distinctio laboriosam voluptas labore architecto quidem eum modi?
        Quam facilis debitis necessitatibus modi natus quae consequuntur. Molestiae iusto eaque asperiores distinctio, maxime eum corporis iure a illum quod. Ex quod voluptatem repudiandae, corporis dolores dolorem. Itaque, impedit in.
      </HocComponent2>
      <HocComponent3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque accusantium, cum ab at quam impedit illum modi expedita repudiandae nemo, saepe nobis molestias nulla reprehenderit incidunt dignissimos illo natus iste?
      </HocComponent3>
    </div>
  );
}

export default App;
