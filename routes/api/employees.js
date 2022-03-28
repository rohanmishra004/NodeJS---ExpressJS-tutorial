const express = require('express');
const router = express.Router()
const path = require('path')
const employeeController = require('../../controllers/employeesController')
const data = {}

data.employees = require('../../model/employees.json')


router.route('/')
    .get(employeeController.getAllEmployees)
    .post(employeeController.createNewEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee);

router.route('/:id')
    .get(employeeController.getOneEmployee)


module.exports = router