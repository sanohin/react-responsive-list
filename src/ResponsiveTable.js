import React from 'react';
import PropTypes from 'prop-types';
import provideContext from './provideContext';
import withContext from './withContext';
import { allowed } from './helpers';

const contextKey = '_responsiveTable'

const contextShape = PropTypes.shape({ headers: PropTypes.object });
const TableContext = provideContext(contextKey, contextShape);
const withTableContext = withContext(contextKey, contextShape);

export class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: {}
        };
    }
    render() {
        const { headers } = this.state;
        const className =
            (this.props.className ? this.props.className + ' ' : '') +
            'r-responsive-table';
        return (
            <TableContext headers={headers}>
                <table {...allowed(this.props)} className={className} />
            </TableContext>
        );
    }
}

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
