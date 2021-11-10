// 最简单就是递归算出值, 但是时间复杂度较高o(2^n)
var fibre = function(n) {
    if(n ==1 || n ==2) return 1;
    return fibre(n -1) + fibre(n-2);
}
// 带备忘录的递归,自顶向下
var memo = [];
var fibrem = function (n) {
    if(n ==1 || n== 2) return 1;
    if(memo[n]) return memo[n];
    memo[n] = fibrem(n-1) + fibrem(n-2);
    return memo[n];
}
// 动态规划内容,自下向上 时间复杂度 o(n) 空间复杂度 o(1) 
var fib = function (n) {
    return fibrem(n);
}
var dp = function (n) {
    if(n<2) return n;
    // 滑动数据
    let first = 0, second = 0, result = 1;
    for(let i = 1; i<n;i++) {
        first = second;
        second  = result;
        result = first + second;
    }
    return result;
}
// 矩阵快速幂算法
// [f(n+1)+f(n),f[n]] = [[1,1],[0,1]]*[f(n+1),f(n)]
// => [f(n+1), f(n)] = [[1,1],[0,1]]^n
var matrixQuick = function(n) {
    if(n<2) return n;
    let single = [[1,1],[1,0]];
    let matrix = pow(single, n- 1);
    return matrix[0][0];
}
var pow = function(matrix, n) {
    let result = [[1,0],[0,1]];
    while(n>0) {
        if((n&1) === 1) {
            // 奇数最后需要增加一次
            result = multiplyMatrix(result, matrix);
        }
        n >>= 1;
        // double
        matrix = multiplyMatrix(matrix, matrix);
    }
    return result;
}
var multiplyMatrix = function(m1, m2) {
    let result = [[0,0],[0,0]];
    for(let i=0; i<2;i++) {
        for(j=0; j<2;j++) {
            result[i][j] = m1[i][0]*m2[0][j] + m1[i][1]*m2[1][j]
        }
    }
    return result;
}
console.log(fib(20))