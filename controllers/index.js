const firstPersonFunction = (req, res, next) => {
    res.json('Nora Vila')
};

const secondPersonFunction = (req, res, next) => {
    res.json('Eder Morales')
};


module.exports = { firstPersonFunction, secondPersonFunction };