import React, {Component} from 'react';

import styles from './EditorInnerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class EditorInnerTemplate extends Component {
  state = {
    topPercentage: 0.5
  }

  // separator 클릭 후 마우스를 움직이면 그에 따라 leftPercentage 업데이트
  handleMouseMove = (e) => {
    this.setState({
      topPercentage: e.clientY / window.innerHeight
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
  
  render() {
    const { editor, tree } = this.props;
    const { topPercentage } = this.state;
    const { handleSeparatorMouseDown } = this;

    // 각 영역에 flex 값 적용
    const topStyle = {
      flex: topPercentage
    };
    const bottomStyle = {
      flex: 1 - topPercentage
    };

    // separator 위치 설정
    const separatorStyle = {
      top: `${topPercentage * 100}%`
    };

    return (
      <div className={cx('editorInnerTemplate')}>
        <div className={cx('panes')}>
          <div className={cx('pane', 'editor')} style={topStyle}>
            {editor}
          </div>
          <div className={cx('pane', 'tree')} style={bottomStyle}>
            {tree}
          </div>
          <div className={cx('separator')} 
            style={separatorStyle}
            onMouseDown={handleSeparatorMouseDown}/>
          </div>
      </div>
    );
  }
}
export default EditorInnerTemplate;