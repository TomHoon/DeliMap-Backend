const hash = {
    makeHash: (password) => {
        const salt = 'workout';
        const salted = btoa(password + salt);
        return salted;
    },
    compare: (password, hashed) => {
        const target = this.makeHash(password);
        return target == hashed;
    }
};

module.exports = hash;