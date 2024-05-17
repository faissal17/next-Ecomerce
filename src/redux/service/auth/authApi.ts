import { ApiSlice } from '../../api/apiSlice';
export const authApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `/auth/login`,
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: 'POST',
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: `/auth/register`,
        method: 'POST',
        body,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (body) =>({
        url:'/auth/verify-email',
        method: 'POST',
        body
      })
    })
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  authApi;
