import { defineConfig } from 'orval'

// Might be a bug in Orval
// It recognizes curdir as ratio/ratio/frontend/src on Github Actions
const curDir = process.cwd()

export default defineConfig({
  auth: {
    output: {
      mode: 'single',
      target: 'src/api/endpoints/auth.ts',
      client: 'react-query',
      mock: false,
      override: {
        query: {
          useQuery: true,
          useInfinite: false,
          options: {
            staleTime: 10000,
          },
        },
        mutator: {
          path: 'src/api/mutator/axios-auth.ts',
          name: 'axiosAuth',
        },
      },
    },
    input: {
      target: curDir + '/src/api/docs/auth.yaml',
    },
  },
})