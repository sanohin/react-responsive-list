export const omit = (obj, omitProps) =>
    Object.keys(obj)
        .filter(key => omitProps.indexOf(key) === -1)
        .reduce((returnObj, key) => ({ ...returnObj, [key]: obj[key] }), {});

export const allowed = props =>
    omit(props, ['inHeader', 'columnKey', '_responsiveTable', 'breakPoint']);

export const randomString = () =>
    'a' +
    Math.random()
        .toString(36)
        .substring(7);

export const getCssString = (className, breakPoint) => `
@media screen and (max-width: ${breakPoint}px) {
    table.r-responsive-table.${className} {
        border: 0;
    }

    table.r-responsive-table.${className} thead {
        border: none;
        /* clip: rect(0 0 0 0); */
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    table.r-responsive-table.${className} tr {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 0.625em;
    }
    table.r-responsive-table.${className} td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;
    }
    table.r-responsive-table.${className} .tdBefore {
        display: initial;
        float: left;
        font-weight: bold;
        /* text-transform: uppercase; */
    }
    table.r-responsive-table.${className} td:last-child {
        border-bottom: 0;
    }
}
`;
