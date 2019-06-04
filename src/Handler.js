import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Icon from './Icon';

function ScaleAnchor(props) {
  let {boundingBox} = props;
  let style = {
    marginTop: boundingBox.height,
    marginLeft: boundingBox.width
  };
  let [anchorHovered, setAnchorHovered] = useState(false);
  return (
    <div style={{...styles.anchor,
                 ...styles.scaleAnchor,
                 ...anchorHovered ? styles.anchorHovered : {},
                 ...style}}
         className={'resize-anchor'}
         onMouseOver={() => setAnchorHovered(true)}
         onMouseOut={() => setAnchorHovered(false)}
         onMouseDown={props.onMouseDown} />
  );
};

function RotateAnchor(props) {
  let style = {
    marginLeft: props.boundingBox.width + 5
  };
  let [anchorHovered, setAnchorHovered] = useState(false);
  return (
    <div style={{...styles.anchor,
                 ...styles.rotateAnchor,
                 ...anchorHovered ? styles.anchorHovered : {},
                 ...style}}
         className={'rotate-anchor'}
         onMouseOver={() => setAnchorHovered(true)}
         onMouseOut={() => setAnchorHovered(false)}
         onMouseDown={props.onMouseDown} />
  )
};

class Handler extends Component {
  onMouseDown(event) {
    // event.preventDefault();

    if (event.target.classList.contains('handler')) {
      this.props.onDrag(event);
    }
  }

  render() {
    let {props} = this;
    let {boundingBox} = props;

    let handlerStyle = {
      ...styles.handler,
      ...boundingBox,
      width: boundingBox.width + 10,
      height: boundingBox.height + 10,
      left: boundingBox.left - 5,
      top: boundingBox.top - 5,
      transform: `rotate(${boundingBox.rotate}deg)`
    };

    return (
      <div className={'handler'}
        style={handlerStyle}
        onMouseLeave={props.onMouseLeave}
        onDoubleClick={props.onDoubleClick}
        onMouseDown={this.onMouseDown.bind(this)}>
          {props.canResize &&
            <ScaleAnchor onMouseDown={props.onResize}
                         boundingBox={boundingBox} />}
      </div>
    );
  }
}

const styles = {
  handler: {
    'position': 'absolute',
    'border': '2px solid #dedede',
    'zIndex': 999999
  },
  anchor: {
    'width': 16,
    'height': 16
  },
  anchorHovered: {
    'background': '#03A9F4',
  },
  scaleAnchor: {
    'background': '#fff',
    'border': '1px solid #fff',
    'border-radius': 16,
    'position': 'absolute',
    'zIndex': -1
  },
  rotateAnchor: {
    'marginTop': -8,
    'background': '#fff',
    'border': '1px solid #fff',
    'border-radius': 16,
    'position': 'absolute',
    'zIndex': -1
  }
};

export default Handler;
