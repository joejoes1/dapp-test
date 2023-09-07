import * as s from './overlay.module.scss';

const Overlay = () => {
  return (
    <div className={s.container}>
      <div className={s.light1} />
      <div className={s.light2} />
      <div className={s.light3} />
      <div className={s.light4} />
    </div>
  );
};

export default Overlay;
