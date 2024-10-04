const dashboard = async(req, res) => {
    const userRole = req.user.role;
    if(userRole === 'Admin'){
        res.send('Welcome Admin')
    }else{
        res.send('Welcome User')
    }
}

const adminDashboard = async(req, res) => {
    if(req.user.role !== 'Admin') return res.sendStatus(403)
    res.send('Welcome to admin dashboard')
}

const userDashboard = async(req, res) => {
    res.send('Welcome to user dashboard')
}

module.exports = {
    dashboard, adminDashboard, userDashboard
}