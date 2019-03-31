import users from '../data/users';

module.exports = {
    Query: {
        user: (_, args) => users.find(user => user.id === args.id),
        totalUsers: () => users.length,
        allUsers: () => users,
    }
}
