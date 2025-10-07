const express = require('express');
const router = express.Router();
const bank = require('../bank');


router.post('/accounts', (req, res) => {
  const { name, balance } = req.body;
  const account = bank.createAccount(name, balance);
  res.json(account);
});


router.get('/accounts', (req, res) => {
  res.json(bank.getAllAccounts());
});


router.put('/deposit/:id', (req, res) => {
  const result = bank.deposit(req.params.id, req.body.amount);
  res.json(result);
});


router.put('/withdraw/:id', (req, res) => {
  const result = bank.withdraw(req.params.id, req.body.amount);
  res.json(result);
});


router.put('/transfer', (req, res) => {
  const { fromId, toId, amount } = req.body;
  const result = bank.transfer(fromId, toId, amount);
  res.json(result);
});

module.exports = router;