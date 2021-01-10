const getEmployerRole = (employeeName, employees) => {
    const person = employees.find(a => a.name === employeeName)
    return person.role
};

module.exports = getEmployerRole;
