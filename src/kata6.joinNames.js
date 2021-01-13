const joinNames = namesObj => {
    const first = namesObj.map(a => a.name).slice(0, 2).join(", ");
    const last = namesObj.map(a => a.name).pop()
    return first + " & " + last
};

module.exports = joinNames;
