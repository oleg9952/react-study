const { 
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLBoolean, 
    GraphQLList, 
    GraphQLSchema,
} = require('graphql')
const { todos, addTodo, toggle, delTodo } = require('./todos')

const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        status: { type: GraphQLBoolean }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        todos: {
            type: new GraphQLList(TodoType),
            resolve(parent, args) {
                return todos
            }
        },
        todo: {
            type: TodoType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return todos.find(todo => todo.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})