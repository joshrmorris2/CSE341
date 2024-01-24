const johnRoute = (req, res) => {
    res.send('John Smith');
};


const janeRoute = (req, res) => {
    res.send('Jane Smith');
};

module.exports = {
    johnRoute,
    janeRoute
}