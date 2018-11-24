import React from 'react';

import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/">Queen</Link>
      </div>
      <div className={cx('right')}>
        {/* 버튼 기능 새로고침 */}
        <Button theme="default" to="/">test</Button>
      </div>
    </div>
  </header>
);


export default Header;