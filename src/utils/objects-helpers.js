export const updateObjectInArray = (items, itemId, objPropName, newOnjProps) => {
    return items.map((u) => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newOnjProps }
        }
        return u;
    })
}