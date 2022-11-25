import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// createApi crea customhooks
export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),

        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}`
        })
    })
})

//mutation o delete
export const { useGetTodosQuery, useGetTodoQuery } = todosApi;