import { createCustomers, deleteCustomers, getAllCustomers, getCustomerById, updateCustomers } from '../services/costumersService.js';

export const getCustomersController = async (req, res) => {
    try {
        const customers = await getAllCustomers();
        res.json(customers)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao buscar Customers",
        });
    }
};

export const createCustomersController = async (req, res) => {
    try {
        const newCustomers = await createCustomers(req.body);
        res.status(201).json(newCustomers)
    }
    catch (error) {
        res.status(500).json({
            error: "Erro ao criar customer",
        });
    }
}


export const getCustomer = async (req, res) => {
    try {
        const customer = await getCustomerById(req.params.id)
        if (customer) {
            res.json(customer);
        } else {
            res.status(500).json({ error: "Customer não encontrado" })
        }
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar customer" })
    }
}

export const updateCustomersController = async (req, res) => {
    try {
        const customers = await updateCustomers(req.params.id, req.body);
        res.json(customers);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar Customer" });
    }
}

export const deleteCustomersController = async (req, res) => {
    try {
        await deleteCustomers(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao deletar Customer" });
    }
}