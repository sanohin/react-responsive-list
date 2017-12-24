'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var provideContext = function provideContext(contextKey, contextType) {
  var ProvideContext = function (_React$Component) {
    inherits(ProvideContext, _React$Component);

    function ProvideContext() {
      classCallCheck(this, ProvideContext);
      return possibleConstructorReturn(this, (ProvideContext.__proto__ || Object.getPrototypeOf(ProvideContext)).apply(this, arguments));
    }

    createClass(ProvideContext, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var _props = this.props,
            children = _props.children,
            props = objectWithoutProperties(_props, ['children']);

        return defineProperty({}, contextKey, props);
      }
    }, {
      key: 'render',
      value: function render() {
        return React.Children.only(this.props.children);
      }
    }]);
    return ProvideContext;
  }(React.Component);

  ProvideContext.childContextTypes = defineProperty({}, contextKey, contextType);

  return ProvideContext;
};

var withContext = (function (contextKey, contextType) {
  return function (Component) {
    var WithContext = function (_React$Component) {
      inherits(WithContext, _React$Component);

      function WithContext() {
        classCallCheck(this, WithContext);
        return possibleConstructorReturn(this, (WithContext.__proto__ || Object.getPrototypeOf(WithContext)).apply(this, arguments));
      }

      createClass(WithContext, [{
        key: 'render',
        value: function render() {
          var props = _extends({}, this.props, defineProperty({}, contextKey, this.context[contextKey]));
          return React.createElement(Component, props);
        }
      }]);
      return WithContext;
    }(React.Component);

    var displayName = Component.displayName || Component.name || 'Component';
    WithContext.displayName = 'WithContext(' + displayName + ')';

    WithContext.contextTypes = defineProperty({}, contextKey, contextType);

    return WithContext;
  };
});

var omit = function omit(obj, omitProps) {
    return Object.keys(obj).filter(function (key) {
        return omitProps.indexOf(key) === -1;
    }).reduce(function (returnObj, key) {
        return _extends({}, returnObj, defineProperty({}, key, obj[key]));
    }, {});
};

var allowed = function allowed(props) {
    return omit(props, ['inHeader', 'columnKey', '_responsiveTable', 'breakPoint']);
};

var randomString = function randomString() {
    return 'a' + Math.random().toString(36).substring(7);
};

var getCssString = function getCssString(className, breakPoint) {
    return '\n@media screen and (max-width: ' + breakPoint + 'px) {\n    table.r-responsive-table.' + className + ' {\n        border: 0;\n    }\n\n    table.r-responsive-table.' + className + ' thead {\n        border: none;\n        /* clip: rect(0 0 0 0); */\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        width: 1px;\n    }\n    table.r-responsive-table.' + className + ' tr {\n        border-bottom: 3px solid #ddd;\n        display: block;\n        margin-bottom: 0.625em;\n    }\n    table.r-responsive-table.' + className + ' td {\n        border-bottom: 1px solid #ddd;\n        display: block;\n        font-size: 0.8em;\n        text-align: right;\n    }\n    table.r-responsive-table.' + className + ' .tdBefore {\n        display: initial;\n        float: left;\n        font-weight: bold;\n        /* text-transform: uppercase; */\n    }\n    table.r-responsive-table.' + className + ' td:last-child {\n        border-bottom: 0;\n    }\n}\n';
};

var contextKey = '_responsiveTable';

var contextShape = PropTypes.shape({ headers: PropTypes.object });
var TableContext = provideContext(contextKey, contextShape);
var withTableContext = withContext(contextKey, contextShape);

var Table = function (_React$Component) {
    inherits(Table, _React$Component);

    function Table(props) {
        classCallCheck(this, Table);

        var _this = possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.state = {
            headers: {},
            prefix: ''
        };
        return _this;
    }

    createClass(Table, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.setState();
            var prefix = randomString();
            this.setState({ prefix: prefix }, function () {
                var head = document.head || document.getElementsByTagName('head')[0];
                _this2.style = document.createElement('style');
                _this2.style.type = 'text/css';
                _this2.style.setAttribute('data-id', prefix);
                _this2.updateStyles(_this2.props.breakPoint, prefix);
                head.appendChild(_this2.style);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var breakPoint = _ref.breakPoint;

            if (this.props.breakPoint !== breakPoint) {
                this.updateStyles(breakPoint, this.state.prefix);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var head = document.head || document.getElementsByTagName('head')[0];
            head.removeChild(this.style);
        }
    }, {
        key: 'updateStyles',
        value: function updateStyles(breakPoint, prefix) {
            var style = this.style;

            var css = getCssString(prefix, breakPoint);
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                while (style.hasChildNodes()) {
                    style.removeChild(style.lastChild);
                }
                style.appendChild(document.createTextNode(css));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                headers = _state.headers,
                prefix = _state.prefix;

            var className = (this.props.className ? this.props.className + ' ' : '') + 'r-responsive-table ' + prefix;
            return React.createElement(
                TableContext,
                { headers: headers },
                React.createElement('table', _extends({}, allowed(this.props), { className: className }))
            );
        }
    }]);
    return Table;
}(React.Component);

Table.defaultProps = {
    breakPoint: 600
};

Table.propTypes = {
    breakPoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

var Thead = function Thead(props) {
    return React.createElement(
        'thead',
        allowed(props),
        React.cloneElement(props.children, { inHeader: true })
    );
};

var TrInner = function (_React$Component2) {
    inherits(TrInner, _React$Component2);

    function TrInner(props) {
        classCallCheck(this, TrInner);

        var _this3 = possibleConstructorReturn(this, (TrInner.__proto__ || Object.getPrototypeOf(TrInner)).call(this, props));

        var headers = props._responsiveTable.headers;

        if (headers && props.inHeader) {
            props.children.map(function (child, i) {
                headers[i] = child.props.children;
            });
        }
        return _this3;
    }

    createClass(TrInner, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return React.createElement(
                'tr',
                allowed(this.props),
                children && React.Children.map(children, function (child, i) {
                    return React.cloneElement(child, {
                        key: i,
                        columnKey: i
                    });
                })
            );
        }
    }]);
    return TrInner;
}(React.Component);

var Tr = withTableContext(TrInner);
var Th = function Th(props) {
    return React.createElement('th', allowed(props));
};
var Tbody = function Tbody(props) {
    return React.createElement('tbody', allowed(props));
};

var TdInner = function (_React$Component3) {
    inherits(TdInner, _React$Component3);

    function TdInner() {
        classCallCheck(this, TdInner);
        return possibleConstructorReturn(this, (TdInner.__proto__ || Object.getPrototypeOf(TdInner)).apply(this, arguments));
    }

    createClass(TdInner, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                headers = _props._responsiveTable.headers,
                children = _props.children,
                columnKey = _props.columnKey,
                rest = objectWithoutProperties(_props, ['_responsiveTable', 'children', 'columnKey']);

            return React.createElement(
                'td',
                rest,
                React.createElement(
                    'div',
                    { className: 'tdBefore' },
                    headers[columnKey]
                ),
                children !== undefined ? children : React.createElement(
                    'div',
                    null,
                    '\xA0'
                )
            );
        }
    }]);
    return TdInner;
}(React.Component);

var Td = withTableContext(TdInner);

exports.Table = Table;
exports.Thead = Thead;
exports.Tr = Tr;
exports.Th = Th;
exports.Tbody = Tbody;
exports.Td = Td;
//# sourceMappingURL=ResponsiveTable.cjs.js.map
