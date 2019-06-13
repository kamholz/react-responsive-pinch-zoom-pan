'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var reselect = require('reselect');
var warning = _interopDefault(require('warning'));
var RBush = _interopDefault(require('rbush'));
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
require('./styles.css');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var containerStyle = {
  position: 'absolute',
  zIndex: 1000
};

var ZoomOutButton = function ZoomOutButton(_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick;
  return React.createElement("button", {
    className: "iconButton",
    style: {
      margin: '10px'
    },
    onClick: onClick,
    disabled: disabled
  }, React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faMinus
  }));
};

var ZoomInButton = function ZoomInButton(_ref2) {
  var disabled = _ref2.disabled,
      onClick = _ref2.onClick;
  return React.createElement("button", {
    className: "iconButton",
    style: {
      margin: '10px',
      marginLeft: '0px'
    },
    onClick: onClick,
    disabled: disabled
  }, React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faPlus
  }));
};

var ZoomButtons = function ZoomButtons(_ref3) {
  var scale = _ref3.scale,
      minScale = _ref3.minScale,
      maxScale = _ref3.maxScale,
      onZoomInClick = _ref3.onZoomInClick,
      onZoomOutClick = _ref3.onZoomOutClick;
  return React.createElement("div", {
    style: containerStyle
  }, React.createElement(ZoomOutButton, {
    onClick: onZoomOutClick,
    disabled: scale <= minScale
  }), React.createElement(ZoomInButton, {
    onClick: onZoomInClick,
    disabled: scale >= maxScale
  }));
};

ZoomButtons.propTypes = {
  scale: PropTypes.number.isRequired,
  minScale: PropTypes.number.isRequired,
  maxScale: PropTypes.number.isRequired,
  onZoomInClick: PropTypes.func.isRequired,
  onZoomOutClick: PropTypes.func.isRequired
};

var style = {
  position: 'absolute',
  marginTop: '40px',
  marginLeft: '5px',
  backgroundColor: 'rgba(0,0,0,0)',
  zIndex: '1000',
  color: 'white'
};
var DebugView = (function (_ref) {
  var top = _ref.top,
      left = _ref.left,
      scale = _ref.scale,
      overflow = _ref.overflow;
  var overflowDisplay = [overflow.top > 0 ? 'top' : '', overflow.right > 0 ? 'right' : '', overflow.bottom > 0 ? 'bottom' : '', overflow.left > 0 ? 'left' : ''].filter(function (o) {
    return o.length;
  }).join(', ') || 'none';
  return React.createElement("div", {
    style: style
  }, React.createElement("div", null, "top: ".concat(top)), React.createElement("div", null, "left: ".concat(left)), React.createElement("div", null, "scale: ".concat(scale)), React.createElement("div", null, "overflow: ".concat(overflowDisplay)));
});

var snapToTarget = function snapToTarget(value, target, tolerance) {
  var withinRange = Math.abs(target - value) < tolerance;
  return withinRange ? target : value;
};
var constrain = function constrain(lowerBound, upperBound, value) {
  return Math.min(upperBound, Math.max(lowerBound, value));
};
var negate = function negate(value) {
  return value * -1;
};
var getRelativePosition = function getRelativePosition(_ref, relativeToElement) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  var rect = relativeToElement.getBoundingClientRect();
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
};
var getPinchMidpoint = function getPinchMidpoint(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      touch1 = _ref3[0],
      touch2 = _ref3[1];

  return {
    x: (touch1.clientX + touch2.clientX) / 2,
    y: (touch1.clientY + touch2.clientY) / 2
  };
};
var getPinchLength = function getPinchLength(_ref4) {
  var _ref5 = _slicedToArray(_ref4, 2),
      touch1 = _ref5[0],
      touch2 = _ref5[1];

  return Math.sqrt(Math.pow(touch1.clientY - touch2.clientY, 2) + Math.pow(touch1.clientX - touch2.clientX, 2));
};
var isEqualDimensions = function isEqualDimensions(dimensions1, dimensions2) {
  if (dimensions1 === dimensions2 === undefined) {
    return true;
  }

  if (dimensions1 === undefined || dimensions2 === undefined) {
    return false;
  }

  return dimensions1.width === dimensions2.width && dimensions1.height === dimensions2.height;
};
var getDimensions = function getDimensions(object) {
  if (object === undefined) {
    return undefined;
  }

  return {
    width: object.offsetWidth || object.width,
    height: object.offsetHeight || object.height
  };
};
var getContainerDimensions = function getContainerDimensions(image) {
  return {
    width: image.parentNode.offsetWidth,
    height: image.parentNode.offsetHeight
  };
};
var isEqualTransform = function isEqualTransform(transform1, transform2) {
  if (transform1 === transform2 === undefined) {
    return true;
  }

  if (transform1 === undefined || transform2 === undefined) {
    return false;
  }

  return round(transform1.top, 5) === round(transform2.top, 5) && round(transform1.left, 5) === round(transform2.left, 5) && round(transform1.scale, 5) === round(transform2.scale, 5);
};
var getAutofitScale = function getAutofitScale(containerDimensions, imageDimensions) {
  var _ref6 = imageDimensions || {},
      imageWidth = _ref6.width,
      imageHeight = _ref6.height;

  if (!(imageWidth > 0 && imageHeight > 0)) {
    return 1;
  }

  return Math.min(containerDimensions.width / imageWidth, containerDimensions.height / imageHeight, 1);
};
var getMinScale = reselect.createSelector(function (state) {
  return state.containerDimensions;
}, function (state) {
  return state.imageDimensions;
}, function (state, props) {
  return props.minScale;
}, function (containerDimensions, imageDimensions, minScaleProp) {
  return String(minScaleProp).toLowerCase() === 'auto' ? getAutofitScale(containerDimensions, imageDimensions) : minScaleProp || 1;
});

function round(number, precision) {
  if (precision && number !== null && number !== undefined) {
    // Shift with exponential notation to avoid floating-point issues.
    // See [MDN](https://mdn.io/round#Examples) for more details.
    var pair = (String(number) + 'e').split('e'),
        value = Math.round(pair[0] + 'e' + (+pair[1] + precision));
    pair = (String(value) + 'e').split('e');
    return +(pair[0] + 'e' + (+pair[1] - precision));
  }

  return Math.round(number);
}
var tryCancelEvent = function tryCancelEvent(event) {
  if (event.cancelable === false) {
    return false;
  }

  event.preventDefault();
  return true;
};

function calculateOverflowLeft(left, scale, imageDimensions, containerDimensions) {
  var overflow = negate(left);
  return overflow > 0 ? overflow : 0;
}

function calculateOverflowTop(top, scale, imageDimensions, containerDimensions) {
  var overflow = negate(top);
  return overflow > 0 ? overflow : 0;
}

function calculateOverflowRight(left, scale, imageDimensions, containerDimensions) {
  var overflow = Math.max(0, scale * imageDimensions.width - containerDimensions.width);
  return overflow > 0 ? overflow - negate(left) : 0;
}

function calculateOverflowBottom(top, scale, imageDimensions, containerDimensions) {
  var overflow = Math.max(0, scale * imageDimensions.height - containerDimensions.height);
  return overflow > 0 ? overflow - negate(top) : 0;
}

var getImageOverflow = function getImageOverflow(top, left, scale, imageDimensions, containerDimensions) {
  return {
    top: calculateOverflowTop(top, scale, imageDimensions, containerDimensions),
    right: calculateOverflowRight(left, scale, imageDimensions, containerDimensions),
    bottom: calculateOverflowBottom(top, scale, imageDimensions, containerDimensions),
    left: calculateOverflowLeft(left, scale, imageDimensions, containerDimensions)
  };
};

var OVERZOOM_TOLERANCE = 0.05;
var DOUBLE_TAP_THRESHOLD = 250;
var ANIMATION_SPEED = 0.1;

var isInitialized = function isInitialized(top, left, scale) {
  return scale !== undefined && left !== undefined && top !== undefined;
};

var imageStyle = reselect.createSelector(function (state) {
  return state.top;
}, function (state) {
  return state.left;
}, function (state) {
  return state.scale;
}, function (top, left, scale) {
  var style = {
    cursor: 'pointer',
    display: 'inline-block',
    userSelect: 'none'
  };
  return isInitialized(top, left, scale) ? _objectSpread({}, style, {
    transform: "translate3d(".concat(left, "px, ").concat(top, "px, 0) scale(").concat(scale, ")"),
    transformOrigin: '0 0'
  }) : style;
});
var imageOverflow = reselect.createSelector(function (state) {
  return state.top;
}, function (state) {
  return state.left;
}, function (state) {
  return state.scale;
}, function (state) {
  return state.imageDimensions;
}, function (state) {
  return state.containerDimensions;
}, function (top, left, scale, imageDimensions, containerDimensions) {
  if (!isInitialized(top, left, scale)) {
    return '';
  }

  return getImageOverflow(top, left, scale, imageDimensions, containerDimensions);
});
var browserPanActions = reselect.createSelector(imageOverflow, function (imageOverflow) {
  //Determine the panning directions where there is no image overflow and let
  //the browser handle those directions (e.g., scroll viewport if possible).
  //Need to replace 'pan-left pan-right' with 'pan-x', etc. otherwise
  //it is rejected (o_O), therefore explicitly handle each combination.
  var browserPanX = !imageOverflow.left && !imageOverflow.right ? 'pan-x' //we can't pan the image horizontally, let the browser take it
  : !imageOverflow.left ? 'pan-left' : !imageOverflow.right ? 'pan-right' : '';
  var browserPanY = !imageOverflow.top && !imageOverflow.bottom ? 'pan-y' : !imageOverflow.top ? 'pan-up' : !imageOverflow.bottom ? 'pan-down' : '';
  return [browserPanX, browserPanY].join(' ').trim();
});

var debounce = function debounce(func, delay) {
  var callTime, callTimer;
  return function (args) {
    var previousTime = callTime;
    callTime = Date.now();

    if (previousTime && callTime - previousTime <= delay) {
      clearTimeout(callTimer);
    }

    callTimer = setTimeout(func, delay, args);
  };
}; //Ensure the image is not over-panned, and not over- or under-scaled.
//These constraints must be checked when image changes, and when container is resized.


var PinchZoomPan =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PinchZoomPan, _React$Component);

  function PinchZoomPan() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PinchZoomPan);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PinchZoomPan)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "lastPointerUpTimeStamp", void 0);

    _defineProperty(_assertThisInitialized(_this), "lastPanPointerPosition", void 0);

    _defineProperty(_assertThisInitialized(_this), "lastPinchLength", void 0);

    _defineProperty(_assertThisInitialized(_this), "animation", void 0);

    _defineProperty(_assertThisInitialized(_this), "divRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "canvasRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "canvasIndex", new RBush());

    _defineProperty(_assertThisInitialized(_this), "isImageLoaded", void 0);

    _defineProperty(_assertThisInitialized(_this), "originalOverscrollBehaviorY", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function (event) {
      _this.cancelAnimation();

      var touches = event.touches;

      if (touches.length === 2) {
        _this.lastPinchLength = getPinchLength(touches);
        _this.lastPanPointerPosition = null;
      } else if (touches.length === 1) {
        _this.lastPinchLength = null;

        _this.pointerDown(touches[0]);

        tryCancelEvent(event); //suppress mouse events
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchMove", function (event) {
      var touches = event.touches;

      if (touches.length === 2) {
        _this.pinchChange(touches); //suppress viewport scaling on iOS


        tryCancelEvent(event);
      } else if (touches.length === 1) {
        var requestedPan = _this.pan(touches[0]);

        if (!_this.controlOverscrollViaCss) {
          //let the browser handling panning if we are at the edge of the image in
          //both pan directions, or if we are primarily panning in one direction
          //and are at the edge in that directino
          var overflow = imageOverflow(_this.state);
          var hasOverflowX = requestedPan.left && overflow.left > 0 || requestedPan.right && overflow.right > 0;
          var hasOverflowY = requestedPan.up && overflow.top > 0 || requestedPan.down && overflow.bottom > 0;

          if (!hasOverflowX && !hasOverflowY) {
            //no overflow in both directions
            return;
          }

          var panX = requestedPan.left || requestedPan.right;
          var panY = requestedPan.up || requestedPan.down;

          if (panY > 2 * panX && !hasOverflowY) {
            //primarily panning up or down and no overflow in the Y direction
            return;
          }

          if (panX > 2 * panY && !hasOverflowX) {
            //primarily panning left or right and no overflow in the X direction
            return;
          }

          tryCancelEvent(event);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function (event) {
      _this.cancelAnimation();

      if (event.touches.length === 0 && event.changedTouches.length === 1) {
        if (_this.lastPointerUpTimeStamp && _this.lastPointerUpTimeStamp + DOUBLE_TAP_THRESHOLD > event.timeStamp) {
          var pointerPosition = getRelativePosition(event.changedTouches[0], _this.divRef.parentNode);

          _this.doubleClick(pointerPosition);
        }

        _this.lastPointerUpTimeStamp = event.timeStamp;
        tryCancelEvent(event); //suppress mouse events
      } //We allow transient +/-5% over-pinching.
      //Animate the bounce back to constraints if applicable.


      _this.maybeAdjustCurrentTransform(ANIMATION_SPEED);

      return;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (event) {
      _this.cancelAnimation();

      _this.pointerDown(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (event) {
      if (!event.buttons) return null;

      _this.pan(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDoubleClick", function (event) {
      _this.cancelAnimation();

      var pointerPosition = getRelativePosition(event, _this.divRef.parentNode);

      _this.doubleClick(pointerPosition);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseWheel", function (event) {
      _this.cancelAnimation();

      var point = getRelativePosition(event, _this.divRef.parentNode);

      if (event.deltaY > 0) {
        if (_this.state.scale > getMinScale(_this.state, _this.props)) {
          _this.zoomOut(point);

          tryCancelEvent(event);
        }
      } else if (event.deltaY < 0) {
        if (_this.state.scale < _this.props.maxScale) {
          _this.zoomIn(point);

          tryCancelEvent(event);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageLoad", function (event) {
      _this.debug('handleImageLoad');

      _this.isImageLoaded = true; //this.canvasRef.current.style.height = `${event.target.height}px`;
      //this.canvasRef.current.style.width = `${event.target.width}px`;

      _this.maybeHandleDimensionsChanged();
    });

    _defineProperty(_assertThisInitialized(_this), "handleZoomInClick", function () {
      _this.cancelAnimation();

      _this.zoomIn();
    });

    _defineProperty(_assertThisInitialized(_this), "handleZoomOutClick", function () {
      _this.cancelAnimation();

      _this.zoomOut();
    });

    _defineProperty(_assertThisInitialized(_this), "handleWindowResize", function () {
      return _this.maybeHandleDimensionsChanged();
    });

    _defineProperty(_assertThisInitialized(_this), "handleRefDiv", function (ref) {
      if (_this.divRef) {
        _this.cancelAnimation();

        _this.divRef.removeEventListener('touchmove', _this.handleTouchMove);
      }

      _this.divRef = ref;

      if (ref) {
        _this.divRef.addEventListener('touchmove', _this.handleTouchMove, {
          passive: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "enhance", debounce(function () {
      var imageRegion = _this.getCanvasRegion();

      var rect = {
        minX: imageRegion.x,
        minY: imageRegion.y,
        maxX: imageRegion.x + imageRegion.width,
        maxY: imageRegion.y + imageRegion.height
      };

      if (!_this.alreadyEnhanced(rect)) {
        var img = new Image();

        var onLoad = function onLoad() {
          var ctx = _this.canvasRef.current.getContext("2d");

          ctx.drawImage(img, imageRegion.x, imageRegion.y);

          _this.canvasIndex.insert(rect);

          img.removeEventListener("load", onLoad);
        };

        img.addEventListener("load", onLoad, {
          once: true
        });
        img.src = imageRegion.url;
      }
    }, _this.props.enhanceDelay));

    return _this;
  }

  _createClass(PinchZoomPan, [{
    key: "pointerDown",
    //actions
    value: function pointerDown(clientPosition) {
      this.lastPanPointerPosition = getRelativePosition(clientPosition, this.divRef.parentNode);
    }
  }, {
    key: "pan",
    value: function pan(pointerClientPosition) {
      if (!this.isTransformInitialized) {
        return;
      }

      if (!this.lastPanPointerPosition) {
        //if we were pinching and lifted a finger
        this.pointerDown(pointerClientPosition);
        return 0;
      }

      var pointerPosition = getRelativePosition(pointerClientPosition, this.divRef.parentNode);
      var translateX = pointerPosition.x - this.lastPanPointerPosition.x;
      var translateY = pointerPosition.y - this.lastPanPointerPosition.y;
      this.lastPanPointerPosition = pointerPosition;
      var top = this.state.top + translateY;
      var left = this.state.left + translateX;
      this.constrainAndApplyTransform(top, left, this.state.scale, 0, 0);
      return {
        up: translateY > 0 ? translateY : 0,
        down: translateY < 0 ? negate(translateY) : 0,
        right: translateX < 0 ? negate(translateX) : 0,
        left: translateX > 0 ? translateX : 0
      };
    }
  }, {
    key: "doubleClick",
    value: function doubleClick(pointerPosition) {
      if (String(this.props.doubleTapBehavior).toLowerCase() === 'zoom' && this.state.scale * (1 + OVERZOOM_TOLERANCE) < this.props.maxScale) {
        this.zoomIn(pointerPosition, ANIMATION_SPEED, 0.3);
      } else {
        //reset
        this.applyInitialTransform(ANIMATION_SPEED);
      }
    }
  }, {
    key: "pinchChange",
    value: function pinchChange(touches) {
      var length = getPinchLength(touches);
      var midpoint = getPinchMidpoint(touches);
      var scale = this.lastPinchLength ? this.state.scale * length / this.lastPinchLength //sometimes we get a touchchange before a touchstart when pinching
      : this.state.scale;
      this.zoom(scale, midpoint, OVERZOOM_TOLERANCE);
      this.lastPinchLength = length;
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(midpoint) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
      midpoint = midpoint || {
        x: this.state.containerDimensions.width / 2,
        y: this.state.containerDimensions.height / 2
      };
      this.zoom(this.state.scale * (1 + factor), midpoint, 0, speed);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(midpoint) {
      midpoint = midpoint || {
        x: this.state.containerDimensions.width / 2,
        y: this.state.containerDimensions.height / 2
      };
      this.zoom(this.state.scale * 0.9, midpoint, 0);
    }
  }, {
    key: "zoom",
    value: function zoom(requestedScale, containerRelativePoint, tolerance) {
      var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (!this.isTransformInitialized) {
        return;
      }

      var _this$state = this.state,
          scale = _this$state.scale,
          top = _this$state.top,
          left = _this$state.left;
      var imageRelativePoint = {
        top: containerRelativePoint.y - top,
        left: containerRelativePoint.x - left
      };
      var nextScale = this.getConstrainedScale(requestedScale, tolerance);
      var incrementalScalePercentage = (nextScale - scale) / scale;
      var translateY = imageRelativePoint.top * incrementalScalePercentage;
      var translateX = imageRelativePoint.left * incrementalScalePercentage;
      var nextTop = top - translateY;
      var nextLeft = left - translateX;
      this.constrainAndApplyTransform(nextTop, nextLeft, nextScale, tolerance, speed);
    } //compare stored dimensions to actual dimensions; capture actual dimensions if different

  }, {
    key: "maybeHandleDimensionsChanged",
    value: function maybeHandleDimensionsChanged() {
      var _this2 = this;

      if (this.isImageReady) {
        var containerDimensions = getContainerDimensions(this.divRef);
        var imageDimensions = getDimensions(this.divRef);

        if (!isEqualDimensions(containerDimensions, getDimensions(this.state.containerDimensions)) || !isEqualDimensions(imageDimensions, getDimensions(this.state.imageDimensions))) {
          this.cancelAnimation(); //capture new dimensions

          this.setState({
            containerDimensions: containerDimensions,
            imageDimensions: imageDimensions
          }, function () {
            //When image loads and image dimensions are first established, apply initial transform.
            //If dimensions change, constraints change; current transform may need to be adjusted.
            //Transforms depend on state, so wait until state is updated.
            if (!_this2.isTransformInitialized) {
              _this2.applyInitialTransform();
            } else {
              _this2.maybeAdjustCurrentTransform();
            }
          });
          this.debug("Dimensions changed: Container: ".concat(containerDimensions.width, ", ").concat(containerDimensions.height, ", Image: ").concat(imageDimensions.width, ", ").concat(imageDimensions.height));
        }
      } else {
        this.debug('Image not loaded');
      }
    } //transformation methods
    //Zooming and panning cause transform to be requested.

  }, {
    key: "constrainAndApplyTransform",
    value: function constrainAndApplyTransform(requestedTop, requestedLeft, requestedScale, tolerance) {
      var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var requestedTransform = {
        top: requestedTop,
        left: requestedLeft,
        scale: requestedScale
      };
      this.debug("Requesting transform: left ".concat(requestedLeft, ", top ").concat(requestedTop, ", scale ").concat(requestedScale)); //Correct the transform if needed to prevent overpanning and overzooming

      var transform = this.getCorrectedTransform(requestedTransform, tolerance) || requestedTransform;
      this.debug("Applying transform: left ".concat(transform.left, ", top ").concat(transform.top, ", scale ").concat(transform.scale));

      if (isEqualTransform(transform, this.state)) {
        return false;
      }

      this.applyTransform(transform, speed);
      return true;
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(_ref, speed) {
      var _this3 = this;

      var top = _ref.top,
          left = _ref.left,
          scale = _ref.scale;

      if (this.canvasRef.current && scale >= this.props.enhanceScale) {
        this.enhance();
      }

      if (speed > 0) {
        var frame = function frame() {
          var translateY = top - _this3.state.top;
          var translateX = left - _this3.state.left;
          var translateScale = scale - _this3.state.scale;
          var nextTransform = {
            top: snapToTarget(_this3.state.top + speed * translateY, top, 1),
            left: snapToTarget(_this3.state.left + speed * translateX, left, 1),
            scale: snapToTarget(_this3.state.scale + speed * translateScale, scale, 0.001)
          }; //animation runs until we reach the target

          if (!isEqualTransform(nextTransform, _this3.state)) {
            _this3.setState(nextTransform, function () {
              return _this3.animation = requestAnimationFrame(frame);
            });
          }
        };

        this.animation = requestAnimationFrame(frame);
      } else {
        this.setState({
          top: top,
          left: left,
          scale: scale
        });
      }
    } //Returns constrained scale when requested scale is outside min/max with tolerance, otherwise returns requested scale

  }, {
    key: "getConstrainedScale",
    value: function getConstrainedScale(requestedScale, tolerance) {
      var lowerBoundFactor = 1.0 - tolerance;
      var upperBoundFactor = 1.0 + tolerance;
      return constrain(getMinScale(this.state, this.props) * lowerBoundFactor, this.props.maxScale * upperBoundFactor, requestedScale);
    } //Returns constrained transform when requested transform is outside constraints with tolerance, otherwise returns null

  }, {
    key: "getCorrectedTransform",
    value: function getCorrectedTransform(requestedTransform, tolerance) {
      var scale = this.getConstrainedScale(requestedTransform.scale, tolerance); //get dimensions by which scaled image overflows container

      var negativeSpace = this.calculateNegativeSpace(scale);
      var overflow = {
        width: Math.max(0, negate(negativeSpace.width)),
        height: Math.max(0, negate(negativeSpace.height))
      }; //if image overflows container, prevent moving by more than the overflow
      //example: overflow.height = 100, tolerance = 0.05 => top is constrained between -105 and +5

      var _this$props = this.props,
          position = _this$props.position,
          initialTop = _this$props.initialTop,
          initialLeft = _this$props.initialLeft;
      var _this$state2 = this.state,
          imageDimensions = _this$state2.imageDimensions,
          containerDimensions = _this$state2.containerDimensions;
      var upperBoundFactor = 1.0 + tolerance;
      var top = overflow.height ? constrain(negate(overflow.height) * upperBoundFactor, overflow.height * upperBoundFactor - overflow.height, requestedTransform.top) : position === 'center' ? (containerDimensions.height - imageDimensions.height * scale) / 2 : initialTop || 0;
      var left = overflow.width ? constrain(negate(overflow.width) * upperBoundFactor, overflow.width * upperBoundFactor - overflow.width, requestedTransform.left) : position === 'center' ? (containerDimensions.width - imageDimensions.width * scale) / 2 : initialLeft || 0;
      var constrainedTransform = {
        top: top,
        left: left,
        scale: scale
      };
      return isEqualTransform(constrainedTransform, requestedTransform) ? null : constrainedTransform;
    } //Ensure current transform is within constraints

  }, {
    key: "maybeAdjustCurrentTransform",
    value: function maybeAdjustCurrentTransform() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var correctedTransform;

      if (correctedTransform = this.getCorrectedTransform(this.state, 0)) {
        this.applyTransform(correctedTransform, speed);
      }
    }
  }, {
    key: "applyInitialTransform",
    value: function applyInitialTransform() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _this$state3 = this.state,
          imageDimensions = _this$state3.imageDimensions,
          containerDimensions = _this$state3.containerDimensions;
      var _this$props2 = this.props,
          position = _this$props2.position,
          initialScale = _this$props2.initialScale,
          maxScale = _this$props2.maxScale,
          initialTop = _this$props2.initialTop,
          initialLeft = _this$props2.initialLeft;
      var scale = String(initialScale).toLowerCase() === 'auto' ? getAutofitScale(containerDimensions, imageDimensions) : initialScale;
      var minScale = getMinScale(this.state, this.props);

      if (minScale > maxScale) {
        warning(false, 'minScale cannot exceed maxScale.');
        return;
      }

      if (scale < minScale || scale > maxScale) {
        warning(false, 'initialScale must be between minScale and maxScale.');
        return;
      }

      var initialPosition;

      if (position === 'center') {
        warning(initialTop === undefined, 'initialTop prop should not be supplied with position=center. It was ignored.');
        warning(initialLeft === undefined, 'initialLeft prop should not be supplied with position=center. It was ignored.');
        initialPosition = {
          top: (containerDimensions.width - imageDimensions.width * scale) / 2,
          left: (containerDimensions.height - imageDimensions.height * scale) / 2
        };
      } else {
        initialPosition = {
          top: initialTop || 0,
          left: initialLeft || 0
        };
      }

      this.constrainAndApplyTransform(initialPosition.top, initialPosition.left, scale, 0, speed);
    }
  }, {
    key: "alreadyEnhanced",
    value: function alreadyEnhanced(rect) {
      var result = this.canvasIndex.search(rect);
      return result.length && result.some(function (el) {
        return rect.minX >= el.minX && rect.maxX <= el.maxX && rect.minY >= el.minY && rect.maxY <= el.maxY;
      });
    }
  }, {
    key: "getCanvasRegion",
    value: function getCanvasRegion() {
      var _this$state4 = this.state,
          left = _this$state4.left,
          top = _this$state4.top,
          scale = _this$state4.scale,
          containerDimensions = _this$state4.containerDimensions,
          imageDimensions = _this$state4.imageDimensions;
      var _this$props$iiifDimen = this.props.iiifDimensions,
          canvasWidth = _this$props$iiifDimen.width,
          canvasHeight = _this$props$iiifDimen.height;
      var x = Math.round(canvasWidth * -1 * left / (imageDimensions.width * scale));
      var y = Math.round(canvasHeight * -1 * top / (imageDimensions.height * scale));
      var width = Math.round(canvasWidth * containerDimensions.width / (imageDimensions.width * scale));
      var height = Math.round(canvasHeight * containerDimensions.height / (imageDimensions.height * scale));
      return {
        x: x,
        y: y,
        width: width,
        height: height,
        url: "".concat(this.props.iiifUrl, "/").concat(x, ",").concat(y, ",").concat(width, ",").concat(height, "/full/0/default.jpg")
      };
    } //lifecycle methods

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          zoomButtons = _this$props3.zoomButtons,
          maxScale = _this$props3.maxScale,
          debug = _this$props3.debug,
          iiifUrl = _this$props3.iiifUrl,
          iiifDimensions = _this$props3.iiifDimensions;
      var scale = this.state.scale;
      var touchAction = this.controlOverscrollViaCss ? browserPanActions(this.state) || 'none' : undefined;
      var containerStyle = {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        touchAction: touchAction
      };
      return React.createElement("div", {
        style: containerStyle
      }, zoomButtons && this.isImageReady && this.isTransformInitialized && React.createElement(ZoomButtons, {
        scale: scale,
        minScale: getMinScale(this.state, this.props),
        maxScale: maxScale,
        onZoomOutClick: this.handleZoomOutClick,
        onZoomInClick: this.handleZoomInClick
      }), debug && React.createElement(DebugView, _extends({}, this.state, {
        overflow: imageOverflow(this.state)
      })), React.createElement("div", {
        ref: this.handleRefDiv,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onDoubleClick: this.handleMouseDoubleClick,
        onWheel: this.handleMouseWheel,
        onDragStart: tryCancelEvent,
        onContextMenu: tryCancelEvent,
        style: imageStyle(this.state)
      }, React.createElement("img", {
        src: this.props.imageUrl,
        onLoad: this.handleImageLoad
      }), iiifUrl && iiifDimensions && React.createElement("canvas", {
        className: "canvasOverlay",
        ref: this.canvasRef,
        height: iiifDimensions.height,
        width: iiifDimensions.width
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.handleWindowResize);
      this.maybeHandleDimensionsChanged();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.maybeHandleDimensionsChanged();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelAnimation();
      this.divRef.removeEventListener('touchmove', this.handleTouchMove);
      window.removeEventListener('resize', this.handleWindowResize);
    }
  }, {
    key: "calculateNegativeSpace",
    value: function calculateNegativeSpace(scale) {
      //get difference in dimension between container and scaled image
      var _this$state5 = this.state,
          containerDimensions = _this$state5.containerDimensions,
          imageDimensions = _this$state5.imageDimensions;
      var width = containerDimensions.width - scale * imageDimensions.width;
      var height = containerDimensions.height - scale * imageDimensions.height;
      return {
        width: width,
        height: height
      };
    }
  }, {
    key: "cancelAnimation",
    value: function cancelAnimation() {
      if (this.animation) {
        cancelAnimationFrame(this.animation);
      }
    }
  }, {
    key: "debug",
    value: function debug(message) {
      if (this.props.debug) {
        console.log(message);
      }
    }
  }, {
    key: "isImageReady",
    get: function get() {
      return this.isImageLoaded;
    }
  }, {
    key: "isTransformInitialized",
    get: function get() {
      return isInitialized(this.state.top, this.state.left, this.state.scale);
    }
  }, {
    key: "controlOverscrollViaCss",
    get: function get() {
      return CSS && CSS.supports('touch-action', 'pan-up');
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.initialTop !== prevState.initialTop || nextProps.initialLeft !== prevState.initialLeft || nextProps.initialScale !== prevState.initialScale || nextProps.position !== prevState.position) {
        return {
          position: nextProps.position,
          initialScale: nextProps.initialScale,
          initialTop: nextProps.initialTop,
          initialLeft: nextProps.initialLeft
        };
      } else {
        return null;
      }
    }
  }]);

  return PinchZoomPan;
}(React.Component);
PinchZoomPan.defaultProps = {
  initialScale: 'auto',
  minScale: 'auto',
  maxScale: 1,
  enhanceScale: 1.5,
  enhanceDelay: 500,
  position: 'topLeft',
  zoomButtons: true,
  doubleTapBehavior: 'reset'
};
PinchZoomPan.propTypes = {
  initialScale: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minScale: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxScale: PropTypes.number,
  position: PropTypes.oneOf(['topLeft', 'center']),
  zoomButtons: PropTypes.bool,
  doubleTapBehavior: PropTypes.oneOf(['reset', 'zoom']),
  initialTop: PropTypes.number,
  initialLeft: PropTypes.number
};

module.exports = PinchZoomPan;
