export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'revert',
        'audit',
      ],
    ],
    'scope-case': [2, 'always', ['lower-case', 'camel-case', 'kebab-case']],
    'subject-case': [0],
  },
}
