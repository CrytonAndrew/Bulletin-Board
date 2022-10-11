import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
        department: 'Home Affairs'
    },
    {
        name: 'John Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
        department: 'Home Affairs'
    },
    {
        name: 'Jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
        department: 'Licensing Department'
    }
]

export default users