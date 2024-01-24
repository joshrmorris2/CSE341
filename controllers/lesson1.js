const johnRoute = (req, res) => {
    res.send('John Smith');
};


const janeRoute = (req, res) => {
    res.send('Jane Smith');
};

const joeRoute = (req, res) => {
    res.send('Joe Smith');
};

module.exports = {
    johnRoute,
    janeRoute,
    joeRoute
}