module.exports = function (babel) {
    const { types: t } = babel;

    return {
        visitor: {
            ExpressionStatement (path) {
                if (!path.get('expression.callee.property').isIdentifier({ name: 'setState' })) return;
            
                path.replaceWith(
                    t.expressionStatement(
                        t.callExpression(
                            t.identifier('proxy'),
                            path.get('expression.arguments').map(arg => arg.node)
                        )
                    )
                );
            }
        }
    }
}