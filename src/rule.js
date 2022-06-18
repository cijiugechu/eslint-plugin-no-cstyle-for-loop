module.exports = {
  meta: {
    type: 'suggestion',
    messages: {
      replaceForLoopStatement:
        'Avoid using c-style for statement, please use for-of statement, Array.prototype.map, Array.prototype.forEach, etc.',
    },
    schema: [],
  },
  create: (context) => {
    return {
      ForStatement(node) {
        context.report({
          node,
          messageId: 'replaceForLoopStatement',
        })
      },
    }
  },
}