import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/bundles/UIAppBundle/queries/**/*.ts'],
  hooks: {
    afterAllFileWrite: ['prettier --write', 'eslint --fix'],
  },
  generates: {
    './src/bundles/UIAppBundle/queries/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        withMutationFn: true,
      },
    },
  },
};

export default config;
