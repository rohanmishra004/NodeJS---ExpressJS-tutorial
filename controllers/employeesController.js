const data = {}
data.employees = require('../../ExpressJs/model/employees.json')

const getAllEmployees = (req, res) => {
    res.json(data)
}


const createNewEmployee = (req, res) => {
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
    });
}

const updateEmployee = (req, res) => {
    res.json({
        "firstname": req.body.firstname,
        "lastname":req.body.lastname
    })
}

const deleteEmployee = (req, res) => {
        res.json({
            "id":req.body.id
        })
}
    
const getOneEmployee = (req, res) => {
        res.json({ "id": req.params });
}


module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getOneEmployee
}