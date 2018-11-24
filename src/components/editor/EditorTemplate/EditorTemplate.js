import React, { Component } from 'react';

import styles from './EditorTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {
  state = {
    leftPercentage: 0.5,
    topPercentage: 0.5
  }

  // separator 클릭 후 마우스를 움직이면 그에 따라 leftPercentage 업데이트
  handleMouseMove = (e) => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    });
  }

  // 마우스를 뗐을 때 등록한 이벤트 제거
  handleMouseUp = (e) => {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  // separator 클릭 시
  handleSeparatorMouseDown = (e) => {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }
// 
  // separator 클릭 후 마우스를 움직이면 그에 따라 leftPercentage 업데이트
  handleMouseMoveInner = (e) => {
    this.setState({
      topPercentage: e.clientY / window.innerHeight
    });
  }

  // 마우스를 뗐을 때 등록한 이벤트 제거
  handleMouseUpInner = (e) => {
    document.body.removeEventListener('mousemove', this.handleMouseMoveInner);
    window.removeEventListener('mouseup', this.handleMouseUpInner);
  }

  // separator 클릭 시
  handleSeparatorMouseDownInner = (e) => {
    document.body.addEventListener('mousemove', this.handleMouseMoveInner);
    window.addEventListener('mouseup', this.handleMouseUpInner);
  }
  
  render() {
    const { header, editor, preview, tree } = this.props;
    const { leftPercentage, topPercentage } = this.state;
    const { handleSeparatorMouseDown, handleSeparatorMouseDownInner } = this;

    // 각 영역에 flex 값 적용
    const leftStyle = {
      flex: leftPercentage
    };
    const rightStyle = {
      flex: 1 - leftPercentage
    };

    // separator 위치 설정
    const separatorStyle = {
      left: `${leftPercentage * 100}%`
    };

    // 각 영역에 flex 값 적용
    const topStyle = {
      flex: topPercentage
    };
    const bottomStyle = {
      flex: 1 - topPercentage
    };

    // separator 위치 설정
    const separatorStyleInner = {
      top: `${topPercentage * 100}%`
    };

    return (
        <div className={cx('editor-template')}>
          <div className={cx('header')}>
            {header}
          </div>
          <div className={cx('panes')}>
            <div className={cx('pane', 'preview')} style={leftStyle}>
              {preview}
            </div>
            <div className={cx('pane', 'editor')} style={rightStyle}>
            <div className={cx('editor-template-inner')}>
              <div className={cx('panes')}>
                <div className={cx('pane', 'editor')} style={topStyle}>
                  {editor}
                </div>
                <div className={cx('pane', 'tree')} style={bottomStyle}>
                  {tree}
                </div>
                <div className={cx('separator')}
                  style={separatorStyleInner}
                  onMouseDown={handleSeparatorMouseDownInner}/>
                </div>
            </div>
            </div>
            <div className={cx('separator')} 
              style={separatorStyle}
              onMouseDown={handleSeparatorMouseDown}/>
          </div>
        </div>
    );
  }
}

export default EditorTemplate;