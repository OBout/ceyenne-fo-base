    call tsc
    call git add -A
    call git commit --verbose
    call npm version patch
    call npm publish