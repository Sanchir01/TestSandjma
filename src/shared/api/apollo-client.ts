import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'
import { EnumTokens } from '../constants/Enum.Tokens'

const link = createHttpLink({
	uri: process.env.SERVER_GRAPHQL,
	credentials: 'include'
})

const authLink = setContext((_, { headers }) => {
	const token = Cookies.get(EnumTokens.REFRESH_TOKEN)
	return {
		headers: {
			...headers,
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzAxNzY1MzE0LCJleHAiOjE3MDE5MzgxMTR9.KBZHlFeVhyGyvMywvp4UoQbKbjaKZuEkBeFnwR8BvoI`
		}
	}
})

export const client = new ApolloClient({
	link: authLink.concat(link),
	cache: new InMemoryCache(),
	credentials: 'include',
	connectToDevTools: true
})
