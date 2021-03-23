/*
    关系运算符用来比较两个值之间的大小关系的
    >
    >=
    <
    <=
    关系运算符的规则和数学中一致，用来比较两个值之间的关系，
    如果关系成立则返回true，关系不成立则返回false。
    如果比较的两个值是非数值，会将其转换为Number然后再比较。
    如果比较的两个值都是字符串，此时会比较字符串的Unicode编码，而不会转换为Number。
        比较字符编码时，一位一位进行比较
        如果两位一样，则比较下一位
        所以比较中文时没有什么意义
        如果比较两个字符串类型的数字，由于他们会一位一位比较，所以只会得出第一顺位不一样的数字的比较结果，
        使得结果和事实不符，不可预期
        例：'112345'和'1125'比较，前三位相同，第四位中5>4，所以得出的结果是'112345'<'1125'
        所以在比较两个字符串型的数字时，一定要转换数据型成number

*/
console.log('14'>'54321')