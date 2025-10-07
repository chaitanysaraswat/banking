let accounts = [];
let accountIdCounter = 1;

function createAccount(name, balance) {
    const acc = { id: accountIdCounter++, name, balance };
    accounts.push(acc);
    return acc;
}

function getAllAccounts() {
    return accounts;
}

function deposit(id, amt) {
    const acc = accounts.find(b => b.id === parseInt(id));
    if (!acc) return { error: 'Account not found' };
    acc.balance += amt;
    return acc;
}

function withdraw(id, amt) {
    const acc = accounts.find(b => b.id === parseInt(id));
    if (!acc) return { error: 'Account not found' };
    if (acc.balance < amt) return { error: 'Insufficient balance' };
    acc.balance -= amt;
    return acc;
}

function transfer(fromId, toId, amount) {
    const fromAcc = accounts.find(b => b.id === parseInt(fromId));
    const toAcc = accounts.find(b => b.id === parseInt(toId));
    if (!fromAcc || !toAcc) return { error: 'Account not found' };
    if (fromAcc.balance < amount) return { error: 'Insufficient balance' };

    fromAcc.balance -= amount;
    toAcc.balance += amount;
    return { fromAcc, toAcc };
}

module.exports = { createAccount, getAllAccounts, transfer, deposit, withdraw };