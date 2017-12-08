export const omit = (obj, omitProps) =>
    Object.keys(obj)
        .filter(key => omitProps.indexOf(key) === -1)
        .reduce((returnObj, key) => ({ ...returnObj, [key]: obj[key] }), {});

export const allowed = props =>
    omit(props, ['inHeader', 'columnKey', '_responsiveTable']);
