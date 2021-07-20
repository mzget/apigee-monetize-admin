import {  GraphQLClient } from 'graphql-request'

const endpoint = process.env.REACT_APP_GRAPHQL as string
const client = new GraphQLClient(process.env.NODE_ENV === "production" ?endpoint:"/graphql", 
{ headers: {}, mode: "no-cors" })
export default client