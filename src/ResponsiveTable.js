import React from 'react';
import PropTypes from 'prop-types';
import provideContext from './provideContext';
import withContext from './withContext';
import { allowed, randomString, getCssString } from './helpers';

const contextKey = '_responsiveTable';

const contextShape = PropTypes.shape({ headers: PropTypes.object });
const TableContext = provideContext(contextKey, contextShape);
const withTableContext = withContext(contextKey, contextShape);

export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: {},
            prefix: ''
        };
    }

    componentDidMount() {
        this.setState();
        const prefix = randomString();
        this.setState({ prefix }, () => {
            const head =
                document.head || document.getElementsByTagName('head')[0];
            this.style = document.createElement('style');
            this.style.type = 'text/css';
            this.style.setAttribute('data-id', prefix);
            this.updateStyles(this.props.breakPoint, prefix);
            head.appendChild(this.style);
        });
    }

    componentWillReceiveProps({ breakPoint }) {
        if (this.props.breakPoint !== breakPoint) {
            this.updateStyles(breakPoint, this.state.prefix);
        }
    }

    componentWillUnmount() {
        const head = document.head || document.getElementsByTagName('head')[0];
        head.removeChild(this.style);
    }

    updateStyles(breakPoint, prefix) {
        const { style } = this;
        const css = getCssString(prefix, breakPoint);
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            while (style.hasChildNodes()) {
                style.removeChild(style.lastChild);
            }
            style.appendChild(document.createTextNode(css));
        }
    }

    render() {
        const { headers, prefix } = this.state;
        const className =
            (this.props.className ? this.props.className + ' ' : '') +
            'r-responsive-table ' +
            prefix;
        return (
            <TableContext headers={headers}>
                <table {...allowed(this.props)} className={className} />
            </TableContext>
        );
    }
}

Table.defaultProps = {
    breakPoint: 600
};

Table.propTypes = {
    breakPoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const Thead = props => (
    <thead {...allowed(props)}>
        {React.cloneElement(props.children, { inHeader: true })}
    </thead>
);

class TrInner extends React.Component {
    constructor(props) {
        super(props);
        const { headers } = props._responsiveTable;
        if (headers && props.inHeader) {
            props.children.map((child, i) => {
                headers[i] = child.props.children;
            });
        }
    }
    render() {
        const { children } = this.props;
        return (
            <tr {...allowed(this.props)}>
                {children &&
                    React.Children.map(children, (child, i) =>
                        React.cloneElement(child, {
                            key: i,
                            columnKey: i
                        })
                    )}
            </tr>
        );
    }
}

export const Tr = withTableContext(TrInner);
export const Th = props => <th {...allowed(props)} />;
export const Tbody = props => <tbody {...allowed(props)} />;

class TdInner extends React.Component {
    render() {
        const {
            _responsiveTable: { headers },
            children,
            columnKey,
            ...rest
        } = this.props;
        return (
            <td {...rest}>
                <div className="tdBefore">{headers[columnKey]}</div>
                {children !== undefined ? children : <div>&nbsp;</div>}
            </td>
        );
    }
}

export const Td = withTableContext(TdInner);
