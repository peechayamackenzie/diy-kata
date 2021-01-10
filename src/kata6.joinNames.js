const joinNames = namesObj => {
    const length = namesObj.length -1;
    const firstname = namesObj.map(a => a.name).slice(0, 2).join(", ");
    const lastname = namesObj[length].name;
    return firstname + " & " + lastname
};

module.exports = joinNames;
