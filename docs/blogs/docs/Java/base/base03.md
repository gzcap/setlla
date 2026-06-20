---
title: 流程控制|数组|字符串
date: 2024/09/28
tags:
  - 流程控制
  - 数组
  - 字符串
categories:
  - Java
hideComments: false
---


## <font style="color:rgb(51, 51, 51);">1.流程控制语句 </font>

### <font style="color:rgb(51, 51, 51);">1.1 流程控制语句分类</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">顺序结构</font>

<font style="color:rgb(51, 51, 51);">	判断和选择结构(if,   switch  )</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">循环结构(for, while, do…while)</font>

### <font style="color:rgb(51, 51, 51);">1.2. 顺序结构</font>

<font style="color:rgb(51, 51, 51);">顺序结构是程序中最简单最基本的流程控制，没有特定的语法结构，按照代码的先后顺序，依次执行，程序中大多数的代码都是这样执行的。</font>

<font style="color:rgb(51, 51, 51);">顺序结构执行流程图：</font>

### <font style="color:rgb(51, 51, 51);">1.3. 判断语句 ：if</font>

#### <font style="color:rgb(51, 51, 51);">1.3.1 格式1</font>

```plain
格式：
 if (关系表达式) {
     语句体;    
 }
```

<font style="color:rgb(51, 51, 51);">执行流程：</font>

<font style="color:rgb(51, 51, 51);">①首先计算关系表达式的值</font>

<font style="color:rgb(51, 51, 51);">②如果关系表达式的值为true就执行语句体</font>

<font style="color:rgb(51, 51, 51);">③如果关系表达式的值为false就不执行语句体</font>

<font style="color:rgb(51, 51, 51);">④继续执行后面的语句内容</font>

#### <font style="color:rgb(51, 51, 51);">if的注意点：</font>

<font style="color:rgb(51, 51, 51);">1,大括号的开头可以另起一行书可，但是建议可在第一行的末尾</font><font style="color:rgb(51, 51, 51);">2,作语句体中，如果只有一句代码，大括号可以省略不写，个人建议，大括号还是不要省略</font><font style="color:rgb(51, 51, 51);">3,如果对一个布尔类的变量进行判断，不要用 ==号，直接把变量写在小括号里即可</font>

#### <font style="color:rgb(51, 51, 51);">1.3.2 if 语句格式2</font>

```plain
格式：
 if (关系表达式) {
     语句体1;   
 } else {
     语句体2;   
 }
```

<font style="color:rgb(51, 51, 51);">执行流程：</font>

<font style="color:rgb(51, 51, 51);">①首先计算关系表达式的值</font>

<font style="color:rgb(51, 51, 51);">②如果关系表达式的值为true就执行语句体1</font>

<font style="color:rgb(51, 51, 51);">③如果关系表达式的值为false就执行语句体2</font>

<font style="color:rgb(51, 51, 51);">④继续执行后面的语句内容</font>

#### <font style="color:rgb(51, 51, 51);">1.3.3 if语句格式3</font>

```plain
格式：
 if (关系表达式1) {
     语句体1;   
 } else if (关系表达式2) {
     语句体2;   
 } 
 …
 else {
     语句体n+1;
 }
```

<font style="color:rgb(51, 51, 51);">执行流程：</font>

<font style="color:rgb(51, 51, 51);">①首先计算关系表达式1的值</font>

<font style="color:rgb(51, 51, 51);">②如果值为true就执行语句体1；如果值为false就计算关系表达式2的值</font>

<font style="color:rgb(51, 51, 51);">③如果值为true就执行语句体2；如果值为false就计算关系表达式3的值</font>

<font style="color:rgb(51, 51, 51);">④…</font>

<font style="color:rgb(51, 51, 51);">⑤如果没有任何关系表达式为true，就执行语句体n+1。</font>

### <font style="color:rgb(51, 51, 51);">1.4  switch  语句</font>

#### <font style="color:rgb(51, 51, 51);">1.4.1 格式</font>

```plain
 switch  (表达式) {
      case  1:
         语句体1;
          break ;
      case  2:
         语句体2;
          break ;
     ...
      default :
         语句体n+1;
          break ;
 }
```

#### <font style="color:rgb(51, 51, 51);">1.4.2 执行流程：</font>

+ <font style="color:rgb(51, 51, 51);">首先计算出表达式的值 </font>
+ <font style="color:rgb(51, 51, 51);">其次，和 case 依次比较，一旦有对应的值，就会执行相应的语句，在执行的过程中，遇到 break 就会结 束。 </font>
+ <font style="color:rgb(51, 51, 51);">最后，如果所有的 case 都和表达式的值不匹配，就会执行 default 语句体部分，然后程序结束掉。 </font>

#### <font style="color:rgb(51, 51, 51);">1.4.3 格式说明：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">1.表达式：(将要匹配的值)取值为</font>**<font style="color:rgb(51, 51, 51);">byte、short、int、char</font>**<font style="color:rgb(51, 51, 51);">。</font>**<font style="color:rgb(51, 51, 51);">JDK5</font>**<font style="color:rgb(51, 51, 51);">以后可以是</font>**<font style="color:rgb(51, 51, 51);">枚举</font>**<font style="color:rgb(51, 51, 51);">，J</font>**<font style="color:rgb(51, 51, 51);">DK7</font>**<font style="color:rgb(51, 51, 51);">以后可以是</font>**<font style="color:rgb(51, 51, 51);">Strin</font>**<font style="color:rgb(51, 51, 51);">g。</font>

1. <font style="color:rgb(51, 51, 51);"> case :后面跟的是要和表达式进行比较的值（被匹配的值）。</font>
2. <font style="color:rgb(51, 51, 51);"> break :表示中断，结束的意思，用来结束 switch 语句。</font>
3. <font style="color:rgb(51, 51, 51);"> default :表示所有情况都不匹配的时候，就执行该处的内容，和if语句的else相似。</font>
4. <font style="color:rgb(51, 51, 51);"> case 后面的值只能是字面量，不能是变量</font>
5. <font style="color:rgb(51, 51, 51);"> case 给出的值不允许重复.</font>

#### <font style="color:rgb(51, 51, 51);">1.4.3  switch 的扩展知识：</font>

+ <font style="color:rgb(51, 51, 51);"> default 的位置和省略情况</font><font style="color:rgb(51, 51, 51);"> default 可以放在任意位置，也可以省略</font>
+ <font style="color:rgb(51, 51, 51);"> case 穿透</font><font style="color:rgb(51, 51, 51);">不写 break 会引发 case 穿透现象</font>
+ **<font style="color:rgb(51, 51, 51);"> switch 在JDK12的新特性</font>**

```plain
int number = 10;
  switch (number) {
      case  1 -> System.out.println("一");
      case  2 -> System.out.println("二");
      case  3 -> System.out.println("三");
      default  -> System.out.println("其他");
 }
 /*
 多个数对应一个执行性语句
 int number = 10;
  switch (number) {
      case  1:
      case  2:
      case  3: System.out.println("一");
      case  5:
      case  7: System.out.println("二");
      case  9: System.out.println("三");
      default : System.out.println("其他");
 }
 变成
 int number = 10;
  switch (number) {
      case  1,2,3 -> System.out.println("一");
      case  5,7 -> System.out.println("二");
      case  9 -> System.out.println("三");
      default  -> System.out.println("其他");
 }
 */
 //相当于：
  switch (表达式) {
      case  1:
         语句体1;
          break ;
      case  2:
         语句体2;
          break ;
     ...
      default :
         语句体n+1;
          break ;
 }
```

+ <font style="color:rgb(51, 51, 51);"> switch 和if第三种格式各自的使用场景</font>

<font style="color:rgb(51, 51, 51);">当我们需要对一个范围进行判断的时候，用if的第三种格式</font>

<font style="color:rgb(51, 51, 51);">当我们把有限个数据列举出来，选择其中一个执行的时候，用 switch 语句</font>

<font style="color:rgb(51, 51, 51);">比如：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">小明的考试成绩，如果用 switch ，那么需要写100个 case ，太麻烦了，所以用if简单。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">如果是星期，月份，客服电话中0~9的功能选择就可以用 switch </font>

#### <font style="color:rgb(51, 51, 51);">✨</font><font style="color:rgb(51, 51, 51);">练习：休息日和工作日</font>

<font style="color:rgb(51, 51, 51);">需求：键盘录入星期数，输出工作日、休息日。</font>

<font style="color:rgb(51, 51, 51);">(1-5) 工作日，(6-7)休息日。</font>

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
//分析：
 //1.键盘录入星期数
 Scanner sc = new Scanner(System.in);
 System.out.println("请输入星期");
 int week = sc.nextInt();//3
 //2.利用 switch 进行匹配
 ----------------------------------------------------
 利用 case 穿透简化代码
  switch  (week){
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
         System.out.println("工作日");
          break ;
      case 6:
      case 7:
         System.out.println("休息日");
          break ;
      default:
         System.out.println("没有这个星期");
          break ;
 }
 
 //----------------------------------------------------
 //利用JDK12简化代码书写
  switch (week) {
      case  1, 2, 3, 4, 5 -> System.out.println("工作日");
      case  6, 7 -> System.out.println("休息日");
      default  -> System.out.println("没有这个星期");
 }
```

## <font style="color:rgb(51, 51, 51);">2. 循环结构</font>

### <font style="color:rgb(51, 51, 51);">2.1 for 循环结构 </font>

#### <font style="color:rgb(51, 51, 51);">2.1.1 for循环结构</font>

```plain
for (初始化语句;条件判断语句;条件控制语句) {
     循环体语句;
 }
```

**<font style="color:rgb(51, 51, 51);">格式解释：</font>**

+ <font style="color:rgb(51, 51, 51);">初始化语句： 用于表示循环开启时的起始状态，简单说就是循环开始的时候什么样</font>
+ <font style="color:rgb(51, 51, 51);">条件判断语句：用于表示循环反复执行的条件，简单说就是判断循环是否能一直执行下去</font>
+ <font style="color:rgb(51, 51, 51);">循环体语句： 用于表示循环反复执行的内容，简单说就是循环反复执行的事情</font>
+ <font style="color:rgb(51, 51, 51);">条件控制语句：用于表示循环执行中每次变化的内容，简单说就是控制循环是否能执行下去</font>

**<font style="color:rgb(51, 51, 51);">执行流程：</font>**

<font style="color:rgb(51, 51, 51);">①执行初始化语句</font>

<font style="color:rgb(51, 51, 51);">②执行条件判断语句，看其结果是true还是false</font>

<font style="color:rgb(51, 51, 51);">如果是false，循环结束</font>

<font style="color:rgb(51, 51, 51);">如果是true，继续执行</font>

<font style="color:rgb(51, 51, 51);">③执行循环体语句</font>

<font style="color:rgb(51, 51, 51);">④执行条件控制语句</font>

<font style="color:rgb(51, 51, 51);">⑤回到②继续</font>

**<font style="color:rgb(51, 51, 51);">for循环书写技巧：</font>**

+ <font style="color:rgb(51, 51, 51);">确定循环的开始条件</font>
+ <font style="color:rgb(51, 51, 51);">确定循环的结束条件</font>
+ <font style="color:rgb(51, 51, 51);">确定循环要重复执行的代码</font>

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
//1.确定循环的开始条件
 //2.确定循环的结束条件
 //3.确定要重复执行的代码
 
 //需求：打印5次HelloWorld
 //开始条件：1
 //结束条件：5
 //重复代码：打印语句
 
 for (int i = 1; i <= 5; i++) {
     System.out.println("HelloWorld");
 }
```

### <font style="color:rgb(51, 51, 51);">2.1.2 求和和统计思想</font>

#### <font style="color:rgb(51, 51, 51);">for循环练习-求和</font>

+ <font style="color:rgb(51, 51, 51);">需求：求1-5之间的数据和，并把求和结果在控制台输出 </font>
+ <font style="color:rgb(51, 51, 51);">示例代码：</font>

```plain
public class ForTest02 {
     public static void main(String[] args) {
         //求和的最终结果必须保存起来，需要定义一个变量，用于保存求和的结果，初始值为0
         int sum = 0;
         //从1开始到5结束的数据，使用循环结构完成
         for(int i=1; i<=5; i++) {
             //将反复进行的事情写入循环结构内部
              // 此处反复进行的事情是将数据 i 加到用于保存最终求和的变量 sum 中
             sum = sum + i;
             /*
                 sum += i;   sum = sum + i;
                 第一次：sum = sum + i = 0 + 1 = 1;
                 第二次：sum = sum + i = 1 + 2 = 3;
                 第三次：sum = sum + i = 3 + 3 = 6;
                 第四次：sum = sum + i = 6 + 4 = 10;
                 第五次：sum = sum + i = 10 + 5 = 15;
             */
         }
         //当循环执行完毕时，将最终数据打印出来
         System.out.println("1-5之间的数据和是：" + sum);
     }
 }
```

+ <font style="color:rgb(51, 51, 51);">本题要点：</font>
    - <font style="color:rgb(51, 51, 51);">今后遇到的需求中，如果带有求和二字，请立即联想到求和变量</font>
    - <font style="color:rgb(51, 51, 51);">求和变量的定义位置，必须在循环外部，如果在循环内部则计算出的数据将是错误的</font>

### <font style="color:rgb(51, 51, 51);">2.2 while循环</font>

#### <font style="color:rgb(51, 51, 51);">2.2.1 格式</font>

```plain
初始化语句;
 while(条件判断语句){
     循环体;
     条件控制语句;
 }
```

<font style="color:rgb(51, 51, 51);">练习1：打印5次HelloWorld</font>

```plain
int i = 1;
 while(i <= 5){
     System.out.println("HelloWorld");
     i++;
 }
 System.out.println(i);
```

### <font style="color:rgb(51, 51, 51);">2.3 do...while循环</font>

#### <font style="color:rgb(51, 51, 51);">2.3.1 格式：</font>

```plain
初始化语句;
 do{
     循环体;
     条件控制语句;
 }while(条件判断语句);
```

#### <font style="color:rgb(51, 51, 51);">2.3.2 特点：先执行，再判断。</font>

### <font style="color:rgb(51, 51, 51);">2.3.3 三种格式的区别：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">1.for和while循环，是先判断，再执行。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">2.do...while是先执行，再判断。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">3.当知道循环次数或者循环范围的时候，用for循环。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">4.当不知道循环次数，也不知道循环范围，但是知道循环的结束条件时，用while循环。</font>

## <font style="color:rgb(51, 51, 51);">3. 练习题</font>

### <font style="color:rgb(51, 51, 51);">回文数</font>

<font style="color:rgb(51, 51, 51);">需求：给你一个整数X。</font><font style="color:rgb(51, 51, 51);">如果X是一个回文整数，打印true,否则，返回false。</font><font style="color:rgb(51, 51, 51);">解释：回文数是指正序（从左向右）和倒序（从右向左)读都是一样的整数。</font><font style="color:rgb(51, 51, 51);">例如，121是回文，而123不是。</font>

```plain
import java.util.Scanner;
 
 public class demo {
     public static void main (String[] args) {
         Scanner sc = new Scanner(System.in);
         int x = sc.nextInt();
         int num=0;
         int tmp =x;
         while (x!=0) {
             int y = x%10;
             x /= 10;
             num = num*10 + y;
         }
         System.out.println(num == tmp);
     }
 }
```

### <font style="color:rgb(51, 51, 51);">求商和余数</font>

<font style="color:rgb(51, 51, 51);">需求：</font><font style="color:rgb(51, 51, 51);">给定两个整数，被除数和除数都是正数，且不超过int的范围</font><font style="color:rgb(51, 51, 51);">将两数相除，</font>**<font style="color:rgb(51, 51, 51);">要求不使用乘法、除法和%运算符</font>**<font style="color:rgb(51, 51, 51);">，得到商和余数。</font>

```plain
//求商和余数
         /*
         int a = 100;
         int b = 10;
         100 - 10 == 90
         90 - 10 == 80
         80 - 10 == 70
         .
         .
         .
         10 - 10 = 0
         */
         //被除数
         int dividend = 100;
         //除数
         int divisor = 10;
         int count = 0;
         while(dividend>=divisor) {
             dividend -= divisor;
             count++;
         }
         System.out.println("商为"+count);
         System.out.println("余数为"+dividend);
```

## <font style="color:rgb(51, 51, 51);">4.循环高级综合练习</font>

### <font style="color:rgb(51, 51, 51);">4.1 无限循环</font>

#### <font style="color:rgb(51, 51, 51);">概念：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">又叫死循环。循环一直停不下来。</font>

#### <font style="color:rgb(51, 51, 51);">for格式：</font>

```plain
for(;;){
     System.out.println("循环执行一直在打印内容");
 }
```

<font style="color:rgb(51, 51, 51);">解释：</font>

<font style="color:rgb(51, 51, 51);">初始化语句可以空着不写，表示循环之前不定义任何的控制变量。</font>

<font style="color:rgb(51, 51, 51);">条件判断语句可以空着不写，如果不写，默认表示true，循环一直进行。</font>

<font style="color:rgb(51, 51, 51);">条件控制语句可以空着不写，表示每次循环体执行完毕后，控制变量不做任何变化。</font>

#### <font style="color:rgb(51, 51, 51);">while格式：</font>

```plain
while(true){
     System.out.println("循环执行一直在打印内容");
 }
```

<font style="color:rgb(51, 51, 51);">解释：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">小括号里面就不能省略了，true一定要写出来，否则代码会报错。</font>

#### <font style="color:rgb(51, 51, 51);">do...while格式：</font>

```plain
do{
     System.out.println("循环执行一直在打印内容");
 }while(true);
```

<font style="color:rgb(51, 51, 51);">解释：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">小括号里面就不能省略了，true一定要写出来，否则代码会报错。</font>

### <font style="color:rgb(51, 51, 51);">无限循环的注意事项：</font>

+ **<font style="color:rgb(51, 51, 51);">最为常用的格式：while</font>**
+ **<font style="color:rgb(51, 51, 51);">无限循环下面不能再写其他代码了，因为永远执行不到。</font>**

### <font style="color:rgb(51, 51, 51);">4.2 条件控制语句</font>

+ <font style="color:rgb(51, 51, 51);"> break </font>
+ <font style="color:rgb(51, 51, 51);">continue</font>

#### <font style="color:rgb(51, 51, 51);">1.break :</font>

<font style="color:rgb(51, 51, 51);">	</font>**<font style="color:rgb(51, 51, 51);">不能单独存在的。可以用在 switch 和循环中，</font>****<font style="color:rgb(0, 0, 0);background-color:rgb(255, 255, 0);">表示结束，跳出的意思。</font>**

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
//1.吃1~5号包子
 for (int i = 1; i <= 5; i++) {
     System.out.println("在吃第" + i + "个包子");
     //2.吃完第三个的时候就不吃了
     if(i == 3){
          break ;//结束整个循环。
     }
 }
```

#### <font style="color:rgb(51, 51, 51);">2.continue:</font>

<font style="color:rgb(51, 51, 51);">	</font>**<font style="color:rgb(51, 51, 51);">不能单独存在的。只能存在于循环当中。</font>**

<font style="color:rgb(51, 51, 51);">	</font>**<font style="color:rgb(51, 51, 51);">表示：</font>****<font style="color:rgb(0, 0, 0);background-color:rgb(255, 255, 0);">跳过本次循环</font>****<font style="color:rgb(51, 51, 51);">，继续执行下次循环。</font>**

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
//1.吃1~5号包子
 for (int i = 1; i <= 5; i++) {
     //2.第3个包子有虫子就跳过，继续吃下面的包子
     if(i == 3){
         //跳过本次循环（本次循环中，下面的代码就不执行了），继续执行下次循环。
         continue;
     }
     System.out.println("在吃第" + i + "个包子");
 }
```

#### <font style="color:rgb(51, 51, 51);">3. Random</font>

**<font style="color:rgb(51, 51, 51);">Random跟Scanner一样，也是Java提前写好的类，我们不需要关心是如何实现的，只要直接使用就可以了。</font>**

###### <font style="color:rgb(51, 51, 51);">使用步骤：</font>

###### <font style="color:rgb(119, 119, 119);">导包</font>

```plain
import java.util.Random;
 导包的动作必须出现在类定义的上边。
```

###### <font style="color:rgb(119, 119, 119);">创建对象</font>

```plain
Random r = new Random ();
 上面这个格式里面，只有r是变量名，可以变，其他的都不允许变。
```

###### <font style="color:rgb(119, 119, 119);">生成随机数</font>

```plain
int number = r.nextInt(随机数的范围);
 上面这个格式里面，只有number是变量名，可以变，其他的都不允许变。
 随机数范围的特点：从0开始，不包含指定值。比如：参数为10，生成的范围[0,10)
```

<font style="color:rgb(51, 51, 51);">求【8，10】的随机数</font>

<font style="color:rgb(51, 51, 51);">1.这个范围头尾都减去一个值，让这个范围从零开始。</font>

<font style="color:rgb(51, 51, 51);">2.尾巴加一。</font>

<font style="color:rgb(51, 51, 51);">3.最终结果再加上第一步减去的值。</font>

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
//1.导包
 import java.util.Random;
 
 public class RandomDemo1 {
     public static void main(String[] args) {
         //2.创建对象
         Random r = new Random();
         //3.生成随机数
         int number = r.nextInt(100);//包左不包右，包头不包尾
         //0 ~ 99
         System.out.println(number);
 
     }
 }
```





### 4.3 <font style="color:rgb(51,51,51);">跳出当前的多重嵌套循环 (循环标记)</font>

<font style="color:rgb(51,51,51);">在</font><font style="color:rgb(51,51,51);">Java</font><font style="color:rgb(51,51,51);">中，要想跳出多重循环，可以在外面的循环语句前定义一个标号，然后在里层循环体的代码中使 </font>

<font style="color:rgb(51,51,51);">用带有标号的break 语句，即可跳出外层循环。例如： </font>

```java
public static void main(String[] args) { 
    ok: 
    for (int i = 0; i < 10; i++) { 
        for (int j = 0; j < 10; j++) { 
            System.out.println("i=" + i + ",j=" + j); 
            if (j == 5) { 
                break ok; 
            } 
         } 
     } 
 }
```

### <font style="color:rgb(51, 51, 51);">4.4 猜数字小游戏</font>

<font style="color:rgb(51, 51, 51);">需求：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">程序自动生成一个1-100之间的随机数，在代码中使用键盘录入去猜出这个数字是多少？</font>

<font style="color:rgb(51, 51, 51);">要求：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">使用循环猜，一直猜中为止。</font>

<font style="color:rgb(51, 51, 51);">思路分析：</font>

1. <font style="color:rgb(51, 51, 51);">生成一个1-100之间的随机数</font>
2. <font style="color:rgb(51, 51, 51);">使用键盘录入去猜出这个数字是多少</font>
3. <font style="color:rgb(51, 51, 51);">把反复猜的代码写在循环中</font>

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
//1.生成一个1-100之间的随机数
 Random r = new Random();
 int number = r.nextInt(100) + 1;// 0 ~ 99 + 1 --- 1 ~ 100
 System.out.println(number);
 
 //2.使用键盘录入去猜出这个数字是多少？
 Scanner sc = new Scanner(System.in);
 while(true){
     System.out.println("请输入一个整数");
     int guessNumber = sc.nextInt();
     //3.比较
     if(guessNumber > number){
         System.out.println("您猜的数字大了");
     }else if(guessNumber < number){
         System.out.println("您猜的数字小了");
     }else{
         System.out.println("恭喜你，猜中了");
          break ;
     }
 }
```




## <font style="color:rgb(51, 51, 51);">5. 数组</font>

### <font style="color:rgb(51, 51, 51);">5.1 概念</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">🧨</font><font style="color:rgb(51, 51, 51);">数组指的是一种容器，用来存储同种数据类型的多个值。（在内存中开辟一个空间）但是数组容器在存储数据的时候，需要结合隐式转换考虑。</font>

<font style="color:rgb(51, 51, 51);">比如：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">定义了一个int类型的数组。那么boolean。double类型的数据是不能存到这个数组中的，</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">但是byte类型，short类型，int类型的数据是可以存到这个数组里面的。</font>

<font style="color:rgb(51, 51, 51);">建议：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">容器的类，和存储的数据类型保持一致。</font>

<font style="color:rgb(51, 51, 51);">举例：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">整数1 2 3 4 56 就可以使用int类型的数组来存储。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">小数1.1 1.2 1.3 1.4 就可以使用double类型的数组来存储。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">字符串"aaa" "bbb" "ccc" 就可以使用String类型的数组来存储。</font>

### <font style="color:rgb(51, 51, 51);">5.2 数组的定义</font>

<font style="color:rgb(51, 51, 51);">变量的定义：</font>


[//]: # (<img referrerpolicy="no-referrer" src="6-java%E6%95%B0%E7%BB%84/image-20221230173130357-167771955852314.png" />)


<font style="color:rgb(51, 51, 51);">数组的定义</font>

#### <font style="color:rgb(51, 51, 51);">格式一：数据类型 [] 数组名</font>

<font style="color:rgb(51, 51, 51);">比如：int [] array</font>

#### <font style="color:rgb(51, 51, 51);">格式二：数据类型 数组名 []</font>

<font style="color:rgb(51, 51, 51);">比如： int array []</font>

**<font style="color:rgb(51, 51, 51);">详解</font>**<font style="color:rgb(51, 51, 51);">：</font>

<font style="color:rgb(51, 51, 51);">数据类型：限定了数组以后能存什么类型的数据。</font>

<font style="color:rgb(51, 51, 51);">方括号：表示现在定义的是一个数组。</font>

<font style="color:rgb(51, 51, 51);">数组名：就是一个名字而已，方便以后使用。</font>

**<font style="color:rgb(51, 51, 51);">注意点</font>**<font style="color:rgb(51, 51, 51);">：</font>

<font style="color:rgb(51, 51, 51);">	</font>**<font style="color:rgb(51, 51, 51);">方法括号跟数组名，谁写在前面，谁写在后面都是一样的。</font>**

<font style="color:rgb(51, 51, 51);">	</font>**<font style="color:rgb(51, 51, 51);">平时习惯性使用第一种方式。</font>**

**<font style="color:rgb(51, 51, 51);">格式三</font>**<font style="color:rgb(51, 51, 51);"> 二维数组</font>

<font style="color:rgb(51, 51, 51);">int </font><font style="color:rgb(51, 51, 51);">[</font><font style="color:rgb(51, 51, 51);">][] arrayp; </font>

### <font style="color:rgb(51, 51, 51);">5.3 数组的静态初始化</font>

<font style="color:rgb(51, 51, 51);">初始化：就是在内存中，为数组容器开辟空间，并将数据存入容器中的过程.</font>

##### <font style="color:rgb(51, 51, 51);">完整格式：数据类型[] 数组名 = new 数据类型[]{元素1，元素2，元素3，元素4...};</font>

<font style="color:rgb(51, 51, 51);">比如：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">int[] arr = new int[]{11,22,33};</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">double[] arr = new double[]{1.1,1.2,1.3};</font>

**<font style="color:rgb(51, 51, 51);">格式详解</font>**<font style="color:rgb(51, 51, 51);">：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">数据类型：限定了数组以后能存什么类型的数据。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">方括号：表示现在定义的是一个数组。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">数组名：其实就是名字而已，方便以后使用，在起名字的时候遵循小驼峰命名法。</font>

<font style="color:rgb(51, 51, 51);">			</font><font style="color:rgb(51, 51, 51);">arr namesArr</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">new：就是给数组在内存中开辟了一个空间。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">数据类型：限定了数组以后能存什么类型的数据。</font>

<font style="color:rgb(51, 51, 51);">			</font><font style="color:rgb(51, 51, 51);"> 前面和后面的数据类型一定要保持一致。</font>

<font style="color:rgb(51, 51, 51);">			int[] arr = new double[]{11,22,33}; //错误写法</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">方括号：表示现在定义的是一个数组。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">大括号：表示数组里面的元素。元素也就是存入到数组中的数据。</font>

<font style="color:rgb(51, 51, 51);">			</font><font style="color:rgb(51, 51, 51);">多个元素之间，一定要用逗号隔开。</font>

### <font style="color:rgb(51, 51, 51);">注意点：</font>

+ <font style="color:rgb(51, 51, 51);">等号前后的数据类型必须保持一致。</font>
+ <font style="color:rgb(51, 51, 51);">数组一旦创建之后，长度不能发生变化。</font>

### <font style="color:rgb(51, 51, 51);">简化格式:</font>

<font style="color:rgb(51, 51, 51);">	</font>**<font style="color:rgb(51, 51, 51);">数据类型[] 数组名 = {元素1，元素2，元素3，元素4...};</font>**

<font style="color:rgb(51, 51, 51);">比如：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">int[] array = {1,2,3,4,5};</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">double[] array = {1.1,1.2,1.3};</font>

### <font style="color:rgb(51, 51, 51);">5.4 地址值 </font>

```plain
int[] arr = {1,2,3,4,5};
 System.out.println(arr);//[I@6d03e736
 
 double[] arr2 = {1.1,2.2,3.3};
 System.out.println(arr2);//[D@568db2f2
```

<font style="color:rgb(51, 51, 51);">打印数组的时候，实际出现的是数组的地址值。</font>

<font style="color:rgb(51, 51, 51);">数组的地址值：就表示数组在内存中的位置。</font>

<font style="color:rgb(51, 51, 51);">以[I@6d03e736为例：</font>

**<font style="color:rgb(51, 51, 51);">[</font>**<font style="color:rgb(51, 51, 51);"> ：表示现在打印的是一个数组。</font>

**<font style="color:rgb(51, 51, 51);">I</font>**<font style="color:rgb(51, 51, 51);">：表示现在打印的数组是int类型的。</font>

**<font style="color:rgb(51, 51, 51);">@</font>**<font style="color:rgb(51, 51, 51);">：仅仅是一个间隔符号而已。</font>

**<font style="color:rgb(51, 51, 51);">6d03e736</font>**<font style="color:rgb(51, 51, 51);">：就是数组在内存中真正的地址值。（</font>**<font style="color:rgb(51, 51, 51);">十六进制的</font>**<font style="color:rgb(51, 51, 51);">）</font>

**<font style="color:rgb(51, 51, 51);">但是，我们习惯性会把[I@6d03e736这个整体称之为数组的地址值。</font>**

<font style="color:rgb(51, 51, 51);">地址值对于我们来京，作用不大，简单了解。</font>

### <font style="color:rgb(51, 51, 51);">5.5 元素访问</font>

#### <font style="color:rgb(51, 51, 51);">5.5.1 格式	数组名[索引];</font>

#### <font style="color:rgb(51, 51, 51);">5.5.2 作用：</font>

+ <font style="color:rgb(51, 51, 51);">获取数组中对应索引上的值</font>
+ <font style="color:rgb(51, 51, 51);">修改数组中对应索引上的值</font><font style="color:rgb(51, 51, 51);">一旦修改之后，原来的值就会被覆盖了。</font>

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
public class ArrDemo2 {
     /*
 
         数组中元素访问的格式：
                 数组名[索引];
 
          作用：
             1.获取指定索引上对应的元素
             2.修改指定索引上对应的元素
 
 
     */
     public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        //需求1：获取arr数组中，3索引上的值
         int number = arr[3];
         System.out.println(number);
         System.out.println(arr[3]);
 
        //需求2：将arr数组中，3索引上的值修改为10
             arr[3] = 10;
         System.out.println("修改之后为:" + arr[3]);
 
     }
 }
```

### <font style="color:rgb(51, 51, 51);">5.6 索引</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">也叫角标、下标 。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">就是数组容器中每一个小格子对应的编号。</font>

**<font style="color:rgb(51, 51, 51);">索引的特点</font>**<font style="color:rgb(51, 51, 51);">：</font>

+ <font style="color:rgb(51, 51, 51);">索引一定是从0开始的。</font>
+ <font style="color:rgb(51, 51, 51);">连续不间断。</font>
+ <font style="color:rgb(51, 51, 51);">逐个+1增长。</font>

### <font style="color:rgb(51, 51, 51);">5.7 数组遍历</font>

<font style="color:rgb(51, 51, 51);">遍历：就是把数组里面所有的内容一个一个全部取出来。</font>

<font style="color:rgb(51, 51, 51);">数组的长度：数组名.length;</font>

<font style="color:rgb(51, 51, 51);">通用代码：</font>

```plain
for(int i = 0; i < arr.length; i++){
     //在循环的过程中，i依次表示数组中的每一个索引
     sout(arr[i]);//就可以把数组里面的每一个元素都获取出来，并打印在控制台上了。
 }
```

### <font style="color:rgb(51, 51, 51);">5.8 数组的动态初始化</font>

#### <font style="color:rgb(51, 51, 51);">5.8.1 格式：数据类型[] 数组名 = new 数据类型[数组的长度];</font>

<font style="color:rgb(51, 51, 51);">举例：</font>

```plain
//1.定义一个数组，存3个人的年龄，年龄未知
 int[] agesArr = new int[3];
 
 
 //2.定义一个数组，存班级10名学生的考试成绩，考试成绩暂时未知，考完才知道。
 int[] scoresArr = new int[10];
```

#### <font style="color:rgb(51, 51, 51);">5.8.2 数组的默认初始化值：</font>

<font style="color:rgb(51, 51, 51);">整数类型：0</font>

<font style="color:rgb(51, 51, 51);">小数类型：0.0</font>

<font style="color:rgb(51, 51, 51);">布尔类型：false</font>

<font style="color:rgb(51, 51, 51);">字符类型：'\u0000'（空格）</font>

<font style="color:rgb(51, 51, 51);">引用类型：null</font>

### <font style="color:rgb(51, 51, 51);">5.9 数组两种初始化</font>

#### <font style="color:rgb(51, 51, 51);">5.9.1 区别</font>

<font style="color:rgb(51, 51, 51);">静态初始化：int[] arr = {1,2,3,4,5};</font>

<font style="color:rgb(51, 51, 51);">动态初始化：int[] arr = new int[3];</font>

<font style="color:rgb(51, 51, 51);">静态初始化：手动指定数组的元素，系统会根据元素的个数，计算出数组的长度。</font>

<font style="color:rgb(51, 51, 51);">动态初始化：手动指定数组长度，由系统给出默认初始化值。</font>

#### <font style="color:rgb(51, 51, 51);">5.9.1使用场景：</font>

<font style="color:rgb(51, 51, 51);">只明确元素个数，但是不明确具体的数据，推荐使用动态初始化。</font>

<font style="color:rgb(51, 51, 51);">已经明确了要操作的所有数据，推荐使用静态初始化。</font>

<font style="color:rgb(51, 51, 51);">举例：</font>

+ <font style="color:rgb(51, 51, 51);">使用数组来存储键盘录入的5个整数。</font><font style="color:rgb(51, 51, 51);">int[] arr = new int[5];</font>
+ <font style="color:rgb(51, 51, 51);">将全班的学生成绩存入数组中，已知学生成绩为：66,77,88,99,100</font><font style="color:rgb(51, 51, 51);">int[] arr = new int[5];</font><font style="color:rgb(51, 51, 51);">arr[0] = 66;</font><font style="color:rgb(51, 51, 51);">arr[1] = 77;</font><font style="color:rgb(51, 51, 51);">... 虽然可以实现，但是太麻烦了。</font><font style="color:rgb(51, 51, 51);">建议使用静态初始化：int[] arr = {66,77,88,99,100};</font>

### <font style="color:rgb(51, 51, 51);">5.10 数组常见问题</font>

<font style="color:rgb(51, 51, 51);">当访问了数组中不存在的索引，就会引发索引越界异常。</font>

<font style="color:rgb(51, 51, 51);">避免：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">针对于任意一个数组，索引的范围：</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">最小索引：0</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">最大索引：数组的长度 - 1</font><font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);"> 数组名.length - 1</font>

```plain
public class ArrDemo6 {
     public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,5,5,5,5};
         //用索引来访问数组中的元素
         System.out.println(arr[1]);
         System.out.println(arr[10]);//ArrayIndexOutOfBoundsException
 
     }
 }
```

### <font style="color:rgb(51, 51, 51);">5.11 数组的内存图</font>

#### <font style="color:rgb(51, 51, 51);">5.11.1 java内存分配</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678269874331-59773311-e4e4-4dd4-9cf7-098e60080a0a.png" />


<font style="color:rgb(51, 51, 51);">其中JVM 一开始，堆和方法区连在一起，一块的空间</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678269884802-e1eb8368-c547-4108-be11-8b694cc89927.png" />


<font style="color:rgb(51, 51, 51);">然后JDK8就修改了 ，补充了元空间</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678269894447-c848b30f-3097-4c41-8479-455a76dd1abc.png" />


<font style="color:rgb(51, 51, 51);">●</font><font style="color:rgb(51, 51, 51);">🎈</font><font style="color:rgb(51, 51, 51);">栈：方法运行时使用的内存，比如main方法运行，进入方法栈中执行</font>

<font style="color:rgb(51, 51, 51);">●</font><font style="color:rgb(51, 51, 51);">🎆</font><font style="color:rgb(51, 51, 51);">堆：存储对象或者数组，</font>**<font style="color:rgb(51, 51, 51);">new来创建的，都存储在堆内存</font>**<font style="color:rgb(51, 51, 51);">，会有地址值，表示位置</font>

<font style="color:rgb(51, 51, 51);">●方法区：存储可以运行的class文件</font>

<font style="color:rgb(51, 51, 51);">●本地方法栈：JVM在使用操作系统功能的时候使用，和我们开发无关</font>

<font style="color:rgb(51, 51, 51);">●寄存器：给CPU使用，和我们开发无关</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678269910500-57e8d699-61d1-4f90-99f5-10f1cbe8f3d4.png" />


##### <font style="color:rgb(51, 51, 51);">两个数组指向同一个空间的内存图</font>

```plain
int[]arr1={11,22};
 int[]arr2 arr1;
```

#### 
<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678269926851-77554c91-3fbd-4956-aa02-7e495009cf9c.png" />


### <font style="color:rgb(51, 51, 51);">5.12 练习题</font>

#### <font style="color:rgb(51, 51, 51);">练习7：打乱数据 </font>

<font style="color:rgb(51, 51, 51);">需求：定义一个数组，存入1~5。要求打乱数组中所有数据的顺序。</font>

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
//1.定义数组存储1~5
 int[] arr = {1, 2, 3, 4, 5};
 //2.循环遍历数组，从0索引开始打乱数据的顺序
 Random r = new Random();
 for (int i = 0; i < arr.length; i++) {
     //生成一个随机索引
     int randomIndex = r.nextInt(arr.length);
     //拿着随机索引指向的元素 跟 i 指向的元素进行交换
     int temp = arr[i];
     arr[i] = arr[randomIndex];
     arr[randomIndex] = temp;
 }
 //当循环结束之后，那么数组中所有的数据已经打乱顺序了
 for (int i = 0; i < arr.length; i++) {
     System.out.print(arr[i] + " ");
 }
```




## 6  String类

### 6.1 String类概述

	String 类代表字符串，Java 程序中的所有字符串文字（例如“abc”）都被实现为此类的实例。也就是说，**Java 程序中所有的双引号字符串，都是 String 类的对象**。String 类在 java.lang 包下，所以使用的时候不需要导包！

### 6.2 String类的特点

+  **字符串不可变，它们的值（字符串）在创建后不能被更改**，但是可以赋值新的字符串

```java
String name="尼古拉斯，阿玮";
String schoolName="黑马程序员";
System.out.println(name schoolName);
//产生了三个字符串  


String name="尼古拉斯，阿玮";
name="三连加投币，阿玮";
//两个
//此处并没有改变原本字符串值，而是将这个String类名指代了
//一个新的字符串
```



+  **虽然 String 的值是不可变的，但是它们可以被共享**
+  **字符串效果上相当于字符数组( char[] )，但是底层原理是字节数组( byte[] )**



### 6.3 创建 String 类对象的两种方式

#### 1.直接赋值(开发中常使用)

```java
String name = "尼古拉斯~为";
```

#### 2.new

2.1 空参构造：可以获取一空白的字符串对象



2.2 传递一个字符串，根据传递的字符串内容在创建一个新的字符串对象

需求：修改字符串内容，abc  --> "Qbc";  
abc -->  {'a','b','c'}  -->  {'Q','b','c'} --> "Qbc"



2.3 传递一个字节数组，根据字节数组的内容再创建一个新的字符串对象  
应用场景：以后网络中传输的数据 其实都是字节信息，  
我们一般要把字节信息进行转换，转成字符串，

+  示例代码

```java
package com.itheima.demo4;

public class StringDemo {
    public static void main (String[] args) {
        //1.使用直接赋值的方法获取一个字符串对象
        String s1 =  "abc";
        System.out.println(s1);

        //2.使用new的方式来获取一个字符串对象
        //空参构造：可以获取一盒空白的字符串对象
        String s2 = new String();
        System.out.println(s2);

        //传递一个字符串，根据传递的字符串内容在创建一个新的字符串对象
        String s3 = new String ("abc");
        System.out.println(s3);

        //传递一个字符数组，根据字符数组的内容创建一个新的字符串对象
        //需求：修改字符串内容，abc  --> "Qbc";
        //abc -->  {'a','b','c'}  -->  {'Q','b','c'} --> "Qbc"
        char[] chs = {'a','b','c'};
        String s4 = new String(chs);
        System.out.println(s4+'@');

        //传递一个字节数组，根据字节数组的内容再创建一个新的字符串对象
        //应用场景：以后网络中传输的数据 其实都是字节信息，
        //我们一般要把字节信息进行转换，转成字符串，
        byte[] bytes = {97,98,99,100};
        String s5 = new String(bytes);
        System.out.println(s5);//abcd
    }
}
```

|                            方法名                            |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                      public   String()                       |            创建一个空白字符串对象，不含有任何内容            |
|                 public   String(char[] chs)                  |             根据字符数组的内容，来创建字符串对象             |
|                 public   String(byte[] bys)                  |             根据字节数组的内容，来创建字符串对象             |
|                      String s = "abc";                       |          直接赋值的方式创建字符串对象，内容就是abc           |
| <font style="color:rgb(51, 51, 51);background-color:rgb(243, 241, 236);">public String(char[]value,int offset,int count)</font> | <font style="color:rgb(51, 51, 51);background-color:rgb(243, 241, 236);">将一个指定范围的字符数组变为字符串</font> |




### 6.4 创建字符串对象两种方式的区别

+  通过构造方法创建  
   通过 new 创建的字符串对象，每一次 new 都会申请一个内存空间，虽然内容相同，但是地址值不同
+  直接赋值方式创建  
   以“”方式给出的字符串，只要字符序列相同(顺序和大小写)，无论在程序代码中出现几次，JVM 都只会建立一个 String 对象，并在字符串池中维护



**java内存模型:**

StringTable(串池)   在JDK7开始，从方法去挪到了堆内存

方法区：字节码文件临时存储（.class)


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270114293-b16a173b-0e9e-4e72-88e5-dc19b5c29c7a.png" />




**当使用双引号直接赋值时，系统会检查该字符串在串池中是否存在。**  
**不存在：创建新的**  
**存在：复用**



### 6.5 Java的常用方法（比较）

#### 6.5.1 == 比的究竟是什么

**基本数据类型比较的是数据值**

**引用数据类型比较的是地址值**



示例

```java
//引用数据类型
String s1 = new String("abc");
String s2 = new String("abc");
System.out.println(s1 =s2);//false

String s1 = "ab0c";
String s2 = "abc";
System.out.println(s1 =s2);//true

String s1 = new String("abc");//记录堆里面的地址值
String s2 ="abc";//记录串池中的地址值
System.out.println(s1 =s2);//false

String str1 = "hello";
String str2 = " world";
String str3 = "hello"+" world";
String str4 = str1 + str2;
String str5 = "hello world";
System.out.println(str3 == str1); //false
System.out.println(str3 == str2);//false
System.out.println(str3 == str5);//true
System.out.println(str4 == str5);//false
```

<font style="color:rgb(51, 51, 51);">字符串字面量拼接操作是在Java编译器编译期间执行，直接将拼接的这个常量放入字符串池.		</font>

<font style="color:rgb(51, 51, 51);">字符串引用的+运算是在Java运行期间执行的，会被转为StringBuilder,并且拼接。</font>`<font style="color:rgb(51, 51, 51);">String str4=(new StringBuilder()).append(str1).append(str2).toString()</font>`<font style="color:rgb(51, 51, 51);">字符串连接之后的对象在堆空间，不会自动进入常量池。</font>

<font style="color:rgb(51, 51, 51);">intern( ) 方法手动将字符串加入常量池中，首先查询常量池中是否有字符串存在，</font>**<font style="color:rgb(219, 63, 30);">如果存在，则返回常量池中的引用</font>**<font style="color:rgb(51, 51, 51);">，</font>**<font style="color:rgb(219, 63, 30);">当字符串常量池中找不到对应的字符串时，而只是生成一个对该字符串的引用在字符串常量池。</font>**

```java
String str1 = "hello";
String str2 = " world";
 String str3 = str1 + str2;
str3.intern();
String str4 = "hello world";
System.out.println(str3 == str1); //false
System.out.println(str3 == str2);//false
System.out.println(str3 == str4);//true
        
        
String str1 = "hello";
String str2 = " world";
String str3 = str1 + str2;
String str4 = "hello world";
str3.intern();
System.out.println(str3 == str1); //false
System.out.println(str3 == str2);//false
System.out.println(str3 == str4);//false   
```

#### 6.5.2 字符串比较

	1.boolean equals方法（要比较的字符串）
	
	2.boolean equalsIgnoreCase（要比较的字符串）忽视大小写的比较 **（只能是英文状态下 a A)**

<font style="color:rgb(51, 51, 51);">3.public int compareTo(String str); 返回参与比较的前后两个字符串的ascii码的差值，如果两个字符串首字母不同，则该方法返回首字母的ascii码的差值，即参与比较的两个字符串如果首字符相同，则比较下一个字符，直到有不同的为止，返回该不同的字符的ascii码差值；如果两个字符串不一样长，可以参与比较的字符又完全一样，则返回两个字符串的长度差值</font>

**<font style="color:rgb(64, 224, 208);">返回为正数表示a1>a2, 返回为负数表示a1<a2, 返回为0表示a1==a2</font>**

###### <font style="color:rgb(135, 206, 250);">字符串.equals(String变量)</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1716091720817-fbec8a98-5c4d-43b2-a634-bb280ebf5b75.png" />



<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1716091731578-bc687ab1-b0ac-42d0-a5e0-bd7ea8f4b890.png" />


拓展：<font style="color:rgb(135, 206, 250);">String str1 = sc.next();</font>

```java
public class StringDemo3
public static void main(String[]args){
	//1.假设我现在键盘录入一个abc
	Scanner sc new Scanner(System.in);
	System.out.println("请输入一个字符串")；
	String str1 = sc.next();//abc
	/2.代码中再定义一个字符中abc
	String str2 ="abc";
	//3.用==比较，这两者能一样吗？
	System.out.println(str1 ==str2);//false
}
```

因为是sc.next（） 是new出来的

**以后只要想比较字符串的内容，就必须要用String里面的方法**

#### 6.5.3 字符串子串

<font style="color:rgb(51, 51, 51);">String substring(int beginIndex,int endIndex) //截取</font>

<font style="color:rgb(51, 51, 51);">//注意点：</font>

<font style="color:rgb(51, 51, 51);">// 1.包头不包尾，包左不包右 [ )</font>

<font style="color:rgb(51, 51, 51);">// 2.只有返回值才是截取的小串</font>



#### 6.5.4 转换

### <font style="color:rgb(26, 143, 55);">6.6 字符串子串</font>

<font style="color:rgb(51, 51, 51);">String substring(int beginIndex,int endIndex) //截取</font>

<font style="color:rgb(51, 51, 51);">//注意点：</font><font style="color:rgb(51, 51, 51);">// 1.包头不包尾，包左不包右 [ )</font><font style="color:rgb(51, 51, 51);">// 2.只有返回值才是截取的小串</font>



### <font style="color:rgb(26, 143, 55);">6.7 字符串转字符数组、byte数组</font>

<font style="color:rgb(51, 51, 51);">public char[] toCharArray（） 将字符串变为字符数组</font><font style="color:rgb(51, 51, 51);">public byte[] getBytes（） 将一个字符串变为byte数组</font>

<font style="color:rgb(51, 51, 51);">str.toCharArray（）</font>

### <font style="color:rgb(26, 143, 55);">6.8 检索字符串</font>

##### <font style="color:rgb(135, 206, 250);">public int indexOf(String str)</font>

<font style="color:rgb(51, 51, 51);">返回字符串sr第一次出现的位置，找不到返回-1。</font>

##### <font style="color:rgb(135, 206, 250);">public int indexOf(String str,int fromIndex)</font>

<font style="color:rgb(51, 51, 51);">返回从fromIndex开始字符串str出现的位置，找不到</font><font style="color:rgb(51, 51, 51);">返回-1。</font>

##### <font style="color:rgb(135, 206, 250);">public boolean contains(String s)</font>

<font style="color:rgb(51, 51, 51);">当此字符串包含指定的字符串时，返回true。</font>

##### <font style="color:rgb(135, 206, 250);">public char charAt(int index)</font>

<font style="color:rgb(51, 51, 51);">返回字符串中index位置(0~length-1)上的字符。</font>

<font style="color:rgb(51, 51, 51);">String.valueOf() </font>**<font style="color:rgb(64, 224, 208);">基本数据型态转换成 String 的 static 方法</font>**<font style="color:rgb(51, 51, 51);">,数组对象都可以</font>

### <font style="color:rgb(26, 143, 55);">6.9 字符串拆分</font>

##### <font style="color:rgb(135, 206, 250);">public String split(String regex)</font>

<font style="color:rgb(51, 51, 51);">按照指定字符串（正则表达式）拆分</font>

### <font style="color:rgb(26, 143, 55);">6.10 修改字符串</font>

<font style="color:rgb(51, 51, 51);">String对象本身是不能改变的，修改字符串的方法</font><font style="color:rgb(51, 51, 51);">有多种，但都将构造一个完成修改的字符串的副本。</font>

public String concat(String str)

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">该方法把参数字符串连接到当前字符串的尾部，并返回这个连接而成的字符串，但当前字符串本身不改变。</font>

### <font style="color:rgb(26, 143, 55);">6.11 </font>

<font style="color:rgb(51, 51, 51);">public String replaceAll(String regex,String replacement)</font><font style="color:rgb(51, 51, 51);">把字符串中所有的regex子串替换为replacement子串</font>

<font style="color:rgb(51, 51, 51);">public String replaceFirst(String regex,String replacement)</font><font style="color:rgb(51, 51, 51);">把字符串中第一个regex子串替换为replacement-子串</font>

<font style="color:rgb(51, 51, 51);">public String toLowerCase( )</font><font style="color:rgb(51, 51, 51);">把字符串中所有字符变小写</font>

<font style="color:rgb(51, 51, 51);">public String toUpperCase( )</font><font style="color:rgb(51, 51, 51);">把字符串中所有字符变大写</font>**<font style="color:rgb(219, 63, 30);">public String trim()</font>**<font style="color:rgb(51, 51, 51);">忽略字符串的前导空白和尾部空白。trim方法在处理用户输入命令时十分有用。</font>

### <font style="color:rgb(26, 143, 55);">6.12 其他方法</font>

##### <font style="color:rgb(135, 206, 250);">public int length()</font>

<font style="color:rgb(51, 51, 51);">求字符串常量的长度</font><font style="color:rgb(51, 51, 51);">注意：获取数组的长度是利用length属性，获取字符串的长度是利用length()方法</font>

##### <font style="color:rgb(135, 206, 250);">public boolean startsWith(String prefix)</font>

<font style="color:rgb(51, 51, 51);">判断是否以指定的字符串开头</font>

##### <font style="color:rgb(135, 206, 250);">public boolean endWith(String suffix)</font>

<font style="color:rgb(51, 51, 51);">判断是否以指定的字符串结尾</font>

compareTo()


### 6.13 练习题


#### 遍历字符串

需求：键盘录入一个字符串，使用程序实现在控制台遍历该字符串

```java
public char charAt(int index):根据索引返回字符
public int length():返回此字符串的长度
数组的长度：数组名.length
字符串的长度：字符串对象.length()
```



```java
package com.itheima.demo4;

import java.util.Scanner;

//遍历字符串
public class StringDemo3 {
    public static void main (String[] args) {
        //
        Scanner sc = new Scanner(System.in);
        String str = sc.next();

        for(int i = 0;i <  str.length(); i++)  {
            System.out.println(str.charAt(i));
        }
    }
}
```



#### 金额转换

案例需求

	把2135变成：零佰零拾零万贰仟壹佰叁拾伍元
	
	把789变成：零佰零拾零万零仟柒佰捌拾玖元

**需要注意的是**

> moneyStr = capitalNumber + moneyStr;  
> //第一次循环 ： "伍" + "" = "伍"  
> //第二次循环 ： "叁" + "伍" = "叁伍"
>
>
>
> moneyStr =  moneyStr  + capitalNumber;
>
>
>
> 会增加步骤，得到的字符串需再反转一次



代码实现

```java
package com.itheima.stringdemo;

import java.util.Scanner;

public class StringDemo9 {
    public static void main(String[] args) {
        //1.键盘录入一个金额
        Scanner sc = new Scanner(System.in);
        int money;
        while (true) {
            System.out.println("请录入一个金额");
            money = sc.nextInt();
            if (money >= 0 && money <= 9999999) {
                break;
            } else {
                System.out.println("金额无效");
            }
        }

        //定义一个变量用来表示钱的大写
        String moneyStr = "";

        //2.得到money里面的每一位数字,再转成中文
        while (true) {//2135
            //从右往左获取数据，因为右侧是数据的个位
            int ge = money % 10;
            String capitalNumber = getCapitalNumber(ge);
            //把转换之后的大写拼接到moneyStr当中
            moneyStr = capitalNumber + moneyStr;
            //第一次循环 ： "伍" + "" = "伍"
            //第二次循环 ： "叁" + "伍" = "叁伍"
            //去掉刚刚获取的数据
            money = money / 10;

            //如果数字上的每一位全部获取到了，那么money记录的就是0，此时循环结束
            if (money == 0) {
                break;
            }
        }

        //3.在前面补0，补齐7位
        int count = 7 - moneyStr.length();
        for (int i = 0; i < count; i++) {
            moneyStr = "零" + moneyStr;
        }
        System.out.println(moneyStr);//零零零贰壹叁伍

        //4.插入单位
        //定义一个数组表示单位
        String[] arr = {"佰","拾","万","仟","佰","拾","元"};
        //               零    零   零   贰   壹   叁   伍

        //遍历moneyStr，依次得到 零    零   零   贰   壹   叁   伍
        //然后把arr的单位插入进去

        String result = "";
        for (int i = 0; i < moneyStr.length(); i++) {
            char c = moneyStr.charAt(i);
            //把大写数字和单位拼接到result当中
            result = result + c + arr[i];
        }

        //5.打印最终结果
        System.out.println(result);

    }


    //定义一个方法把数字变成大写的中文
    //1 -- 壹
    public static String getCapitalNumber(int number) {
        //定义数组，让数字跟大写的中文产生一个对应关系
        String[] arr = {"零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"};
        //返回结果
        return arr[number];
    }

}
```



#### 手机号屏蔽

```java
String substring(int beginIndex,int endIndex)  //截取
//注意点：
//  1.包头不包尾，包左不包右 [ )
//  2.只有返回值才是截取的小串
```



## 7 StringBuilder

可以看作一个容器，创建之后，**里面的内容是可变的**。

作用：提高字符串的操作效率

### 7.1 构造方法

```java
public StringBuilder() //创建一个空白可变字符串对象，不含有任何内容
public StringBuilder(String str) //根据字符串的内容，来创建可变字符串对象
```

### 7.2 常用方法

```java
public StringBuilder append(任意类型) //添加数据，并返回对象本身
    
public StringBuilder reverse() //反转容器中的内容，改变自身
    
public int length() //返回长度（字符出现的个数）
    
public String toString()//通过toString()就可以实现把String Builder转换为String
public StringBuffer insert(int offset,String str)
//在字符串的offset位置插入str。
public StringBuffer setCharAt(int index,char ch)
//修改index位置的字符。

public StringBuffer deleteCharAt(int index)
//删除指定位置的字符
public StringBuffer delete(int start,int end)
//删除指定范围的字符或字符串
public StringBuffer replace(int start,int end,String s)
//替换指定的字符串
```

### 7.3 注意事项

1.因为StringBuilder是java已经写好的类，java在底层对他做了一些特殊处理。打印对象不是地址值而是属性值



	   2.用new StringBuilder （）构造输出为空，说明这个是空的。



	   3.new StringBuilder （“abc”）输出，会输出abc。



### 7.4 链式编程


#### 7.4.1 概念


		**当我们在调用一个方法的时候，不需要用变量接收他的结果，可以继续调用其他方法。**



#### 7.4.2


```java
public class StringBuilderDemo4 {
    public static void main(String[] args) {
        //1.创建对象
        StringBuilder sb = new StringBuilder();

        //2.添加字符串
        sb.append("aaa").append("bbb").append("ccc").append("ddd");

        System.out.println(sb);//aaabbbcccddd

        //3.再把StringBuilder变回字符串
        String str = sb.toString();
        System.out.println(str);//aaabbbcccddd

    }
}
```



## 8 StringJoiner


### 8.1 概念


	●StringJoiner跟StringBuilder-一样，也可以看成是一个容器，创建之后里面的内容是可变的。  
	●作用：提高字符串的操作效率，而且代码编写特别简洁，但是目前市场上很少有人用。  
	●JDK8出现的



### 8.2 构造方法


```plain
public StringJoiner(间隔符号)//创建一个StringJoiner对象，指定拼接时的间隔符号
public StringJoiner(间隔符号，开始符号，结束符号)创建一个StringJoiner对像，指定拼接时的间隔符号、开始符号、结束符号
```



### 8.3 基本方法


```java
public StringJoiner add(添加的内容)   //添加数据，并返回对象本身
sj.add("aaa").add("bbb").add("ccc");
public int length()   //返回长度（字符出现的个数）
public String toString() //返回一个字符串（该字符串就是拼接之后的结果）
```





## 9 StringBuffer 线程安全

## 10 字符串原理


**扩展底层原理**1：

字符串存储的内存原理

+ 直接赋值会复用字符串常量池中的
+ new出来不会复用，而是开辟一个新的空间



**扩展底层原理**2**：**

==号比较的到底是什么？

+ 基本数据类型比较数据值
+ 引用数据类型比较地址值



**扩展底层原理3：**

字符串拼接的底层原理

●等号右边无变量

	拼接的时候没有变量，都是字符串。触发字符串的优化机制。在编译的时候就已经是最终的结果了。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270153246-a8384ba1-ed7b-4536-8dff-f19c836006ec.png" />



[//]: # (<img referrerpolicy="no-referrer" src="7-String%E5%AD%97%E7%AC%A6%E4%B8%B2/image-20230104212133351-167771952973711.png" />)




		●等号右边有变量



	     在拼接的时候有变量,JDK8以前底层会使用StringBuilder.


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270159054-959c29d1-5196-4b61-9df5-c80401e820d4.png" />



[//]: # (<img referrerpolicy="no-referrer" src="7-String%E5%AD%97%E7%AC%A6%E4%B8%B2/image-20230104212419093-167771952973712.png" />)



<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270164262-649262b9-cfb6-4630-8598-c21e1d420894.png" />



[//]: # (<img referrerpolicy="no-referrer" src="7-String%E5%AD%97%E7%AC%A6%E4%B8%B2/image-20230104212557286-167771952973713.png" />)




JDK8字符串拼接的底层原理。



先预估最后的字符串长度，字符串拼接的时候有变量参与：  
在内存中创建了很多对象  
浪费空间，时间也非常慢



结论：  
如果很多字符串变量拼接，不要直接+。在底层会创建多个对象，浪费时间，浪费性能。



用StringBuilder



**扩展底层原理4：**



StringBuilder提高效率原理图



**所有要拼接的内容都会往StringBuilder中放，不会创建很多无用的空间，节约内存**



1.



```java
public class Test3 {
public static void main(String[]args){
String s1="abc",//记录串池中的地址值
String s2 = "ab";
String s3 =  s2 +"c";
System.out.println(s1 =s3);
}
//输出结果
```



**字符串拼接的时候，如果有变量：**  
**JDK8以前：系统底层会自动创建一个StringBuilder对象，然后再调用其append方法完成拼接。**  
**拼接后，再调用其toString.方法转换为String类型，而toString方法的底层是直接new了一个字符串对象。**  
**JDK8版本：系统会预估要字符串拼接之后的总大小，把要拼接的内容都放在数组中，此时也是产生一个新的字符串。**



2.



```java
//·问题：下列代码的运行结果是？
public class Test4 {
	public static void main(String[]args) {
		String s1="abc";    //记录串池中的地址值
		String s2="a"+"b"+"c";//复用串池中的字符串
		System.out.printin(s1-=s2)//true
    }
}  
//在编译的时候，就会将"a"+"b"+"c"拼接为"abc"
```



**扩展底层原理5：StringBuilder源码分析**



默认容量为16



长度：实际装了多少。



容量：做多能装多少。



自动扩容：扩容：老容量*2+2=34



扩容：如果超出*2+2的容量则以实际容量为准，即如果超了容量，就按实际长度为容量，例：如果为36，超了34所以就按容量为36扩容。



## 11 String 源码解读

#### [<font style="color:rgb(44, 62, 80);">String 类的声明</font>](https://javabetter.cn/string/string-source.html#string-%E7%B1%BB%E7%9A%84%E5%A3%B0%E6%98%8E)

```java
public final class String implements java.io.Serializable, Comparable<String>, CharSequence {
    @Stable
    private final char[] value;
    ...
}
```

<font style="color:rgb(44, 62, 80);">String 类是 </font>final<font style="color:rgb(44, 62, 80);"> 的，意味着它不能被子类</font>继承

<font style="color:rgb(44, 62, 80);">String 类实现了 </font>Serializable 接口<font style="color:rgb(44, 62, 80);">，意味着它可以</font>序列化<font style="color:rgb(44, 62, 80);">（后面同样会讲，戳链接可跳转）</font>

<font style="color:rgb(44, 62, 80);">String 类实现了 </font>Comparable 接口<font style="color:rgb(44, 62, 80);">，意味着最好不要用‘==’来</font>比较两个字符串是否相等<font style="color:rgb(44, 62, 80);">，而应该用 </font>`<font style="color:rgb(44, 62, 80);">compareTo()</font>`<font style="color:rgb(44, 62, 80);"> 方法去比较。</font>

String 和 StringBuffer、StringBuilder<font style="color:rgb(44, 62, 80);"> 一样，都实现了 CharSequence 接口</font>

#### <font style="color:rgb(44, 62, 80);">String 底层为什么由 char 数组优化为 byte 数组</font>

```java
private final char value[];
```

<font style="color:rgb(44, 62, 80);">Java 9 以前，String 是用 char 型</font>[<font style="color:rgb(44, 62, 80);">数组</font>](https://javabetter.cn/array/array.html)<font style="color:rgb(44, 62, 80);">实现的，之后改成了 byte 型数组实现，并增加了 coder 来表示编码。这样做的好处是在 Latin1 字符为主的程序里，可以把 String 占用的内存减少一半。当然，天下没有免费的午餐，这个改进在节省内存的同时引入了编码检测的开销。</font>

> <font style="color:rgb(102, 102, 102);">Latin1（Latin-1）是一种</font>**<font style="color:rgb(102, 102, 102);">单字节字符集</font>**<font style="color:rgb(102, 102, 102);">（即每个字符只使用一个字节的编码方式），也称为 ISO-8859-1（国际标准化组织 8859-1），它包含了西欧语言中使用的所有字符，包括英语、法语、德语、西班牙语、葡萄牙语、意大利语等等。在 Latin1 编码中，每个字符使用一个 8 位（即一个字节）的编码，可以表示 256 种不同的字符，其中包括 ASCII 字符集中的所有字符，即 0x00 到 0x7F，以及其他西欧语言中的特殊字符，例如 é、ü、ñ 等等。由于 Latin1 只使用一个字节表示一个字符，因此在存储和传输文本时具有较小的存储空间和较快的速度</font>

<font style="color:rgb(102, 102, 102);"></font>

<font style="color:rgb(44, 62, 80);">下面是 JDK 11 版本中的 String 类源码，注意和 JDK 8 的不同。</font>

```plain
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence {
    @Stable
    private final byte[] value;
    private final byte coder;
    private int hash;
}
```

<font style="color:rgb(44, 62, 80);">从</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">char[]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">byte[]</font>`<font style="color:rgb(44, 62, 80);">，最主要的目的是</font>**<font style="color:rgb(44, 62, 80);">节省字符串占用的内存空间</font>**<font style="color:rgb(44, 62, 80);">。内存占用减少带来的另外一个好处，就是</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">GC</font>](https://javabetter.cn/jvm/gc.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">次数也会减少。</font>

> <font style="color:rgb(102, 102, 102);">GC，也就是垃圾回收，JVM 的时候会讲到。</font>

<font style="color:rgb(44, 62, 80);">这里给你讲一个小知识。</font>

<font style="color:rgb(44, 62, 80);">我们使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">jmap -histo:live pid | head -n 10</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">命令就可以查看到堆内对象示例的统计信息、ClassLoader 的信息以及 finalizer 队列等。</font>

<font style="color:rgb(102, 102, 102);">Java 的对象基本上都在</font>[<font style="color:rgb(102, 102, 102);">堆</font>](https://javabetter.cn/jvm/neicun-jiegou.html)<font style="color:rgb(102, 102, 102);">上。后面也会讲。这里的 pid 就是进程号，可以通过</font><font style="color:rgb(102, 102, 102);"> </font>`<font style="color:rgb(102, 102, 102);">ps -ef | grep java</font>`<font style="color:rgb(102, 102, 102);"> </font><font style="color:rgb(102, 102, 102);">命令查看，下图中红色框出来的第二项就是 pid。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660264220-0e5f6ecd-da6a-4b93-9c39-36df031e3342.png" />


window


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726663285021-7a623505-51c7-495b-bb56-352e70e2ff24.png" />


<font style="color:rgb(44, 62, 80);">就以正在运行着的</font>[<font style="color:rgb(44, 62, 80);">编程喵</font>](https://github.com/itwanger/coding-more)<font style="color:rgb(44, 62, 80);">项目来说吧（它是以 JDK 8 运行的），结果是这样的。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660264342-666b63d5-235e-4f14-80bc-f42e10ddf616.png" />


<font style="color:rgb(44, 62, 80);">其中 String 对象有 17638 个，占用了 423312 个字节的内存，排在第三位。</font>

<font style="color:rgb(44, 62, 80);">由于 Java 8 的 String 内部实现仍然是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">char[]</font>`<font style="color:rgb(44, 62, 80);">，所以我们可以看到内存占用排在第 1 位的就是 char 数组。</font>

`<font style="color:rgb(44, 62, 80);">char[]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">对象有 17673 个，占用了 1621352 个字节的内存，排在第一位。</font>

<font style="color:rgb(44, 62, 80);">那也就是说优化 String 节省内存空间是非常有必要的，如果是去优化一个使用频率没有 String 这么高的类，就没什么必要，对吧？</font>

<font style="color:rgb(44, 62, 80);">众所周知，char 类型的数据在 JVM 中是占用两个字节的，并且使用的是 UTF-8</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">编码</font>](https://javabetter.cn/basic-extra-meal/java-unicode.html)<font style="color:rgb(44, 62, 80);">，其值范围在 '\u0000'（0）和 '\uffff'（65,535）（包含）之间。</font>

<font style="color:rgb(44, 62, 80);">也就是说，使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">char[]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来表示 String 就会导致，即使 String 中的字符只用一个字节就能表示，也得占用两个字节。</font>

> <font style="color:rgb(102, 102, 102);">PS：在计算机中，单字节字符通常指的是一个字节（8 位）可以表示的字符，而双字节字符则指需要两个字节（16 位）才能表示的字符。单字节字符和双字节字符的定义是相对的，不同的编码方式对应的单字节和双字节字符集也不同。常见的单字节字符集有 ASCII（美国信息交换标准代码）、ISO-8859（国际标准化组织标准编号 8859）、GBK（汉字内码扩展规范）、GB2312（中国国家标准，现在已经被 GBK 取代），像拉丁字母、数字、标点符号、控制字符都是单字节字符。双字节字符集包括 Unicode、UTF-8、GB18030（中国国家标准），中文、日文、韩文、拉丁文扩展字符属于双字节字符。</font>

<font style="color:rgb(44, 62, 80);">当然了，仅仅将</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">char[]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">优化为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">byte[]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是不够的，还要配合 Latin-1 的编码方式，该编码方式是用单个字节来表示字符的，这样就比 UTF-8 编码节省了更多的空间。</font>

<font style="color:rgb(44, 62, 80);">换句话说，对于：</font>

```plain
String name = "jack";
```

<font style="color:rgb(44, 62, 80);">这样的，使用 Latin-1 编码，占用 4 个字节就够了。</font>

<font style="color:rgb(44, 62, 80);">但对于：</font>

```plain
String name = "小二";
```

<font style="color:rgb(44, 62, 80);">这种，木的办法，只能使用 UTF16 来编码。</font>

<font style="color:rgb(44, 62, 80);">针对 JDK 9 的 String 源码里，为了区别编码方式，追加了一个 coder 字段来区分。</font>

```plain
/**
 * The identifier of the encoding used to encode the bytes in
 * {@code value}. The supported values in this implementation are
 *
 * LATIN1
 * UTF16
 *
 * @implNote This field is trusted by the VM, and is a subject to
 * constant folding if String instance is constant. Overwriting this
 * field after construction will cause problems.
 */
private final byte coder;
```

<font style="color:rgb(44, 62, 80);">Java 会根据字符串的内容自动设置为相应的编码，要么 Latin-1 要么 UTF16。</font>

<font style="color:rgb(44, 62, 80);">也就是说，从</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">char[]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">byte[]</font>`<font style="color:rgb(44, 62, 80);">，</font>**<font style="color:rgb(44, 62, 80);">中文是两个字节，纯英文是一个字节，在此之前呢，中文是两个字节，英文也是两个字节</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">在 UTF-8 中，0-127 号的字符用 1 个字节来表示，使用和 ASCII 相同的编码。只有 128 号及以上的字符才用 2 个、3 个或者 4 个字节来表示。</font>

+ <font style="color:rgb(44, 62, 80);">如果只有一个字节，那么最高的比特位为 0；</font>
+ <font style="color:rgb(44, 62, 80);">如果有多个字节，那么第一个字节从最高位开始，连续有几个比特位的值为 1，就使用几个字节编码，剩下的字节均以 10 开头。</font>

<font style="color:rgb(44, 62, 80);">具体的表现形式为：</font>

+ <font style="color:rgb(44, 62, 80);">0xxxxxxx：一个字节；</font>
+ <font style="color:rgb(44, 62, 80);">110xxxxx 10xxxxxx：两个字节编码形式（开始两个 1）；</font>
+ <font style="color:rgb(44, 62, 80);">1110xxxx 10xxxxxx 10xxxxxx：三字节编码形式（开始三个 1）；</font>
+ <font style="color:rgb(44, 62, 80);">11110xxx 10xxxxxx 10xxxxxx 10xxxxxx：四字节编码形式（开始四个 1）。</font>

<font style="color:rgb(44, 62, 80);">也就是说，UTF-8 是变长的，那对于 String 这种有随机访问方法的类来说，就很不方便。所谓的随机访问，就是 charAt、subString 这种方法，随便指定一个数字，String 要能给出结果。如果字符串中的每个字符占用的内存是不定长的，那么进行随机访问的时候，就需要从头开始数每个字符的长度，才能找到你想要的字符。</font>

<font style="color:rgb(44, 62, 80);">那你可能会问，UTF-16 也是变长的呢？一个字符还可能占用 4 个字节呢？</font>

<font style="color:rgb(44, 62, 80);">的确，UTF-16 使用 2 个或者 4 个字节来存储字符。</font>

+ <font style="color:rgb(44, 62, 80);">对于 Unicode 编号范围在 0 ~ FFFF 之间的字符，UTF-16 使用两个字节存储。</font>
+ <font style="color:rgb(44, 62, 80);">对于 Unicode 编号范围在 10000 ~ 10FFFF 之间的字符，UTF-16 使用四个字节存储，具体来说就是：将字符编号的所有比特位分成两部分，较高的一些比特位用一个值介于 D800~DBFF 之间的双字节存储，较低的一些比特位（剩下的比特位）用一个值介于 DC00~DFFF 之间的双字节存储。</font>

<font style="color:rgb(44, 62, 80);">但是在 Java 中，一个字符（char）就是 2 个字节，占 4 个字节的字符，在 Java 里也是用两个 char 来存储的，而 String 的各种操作，都是以 Java 的字符（char）为单位的，charAt 是取得第几个 char，subString 取的也是第几个到第几个 char 组成的子串，甚至 length 返回的都是 char 的个数。</font>

<font style="color:rgb(44, 62, 80);">所以 UTF-16 在 Java 的世界里，就可以视为一个定长的编码。</font>

<font style="color:rgb(102, 102, 102);">参考链接：</font>[<font style="color:rgb(102, 102, 102);">https://www.zhihu.com/question/447224628</font>](https://www.zhihu.com/question/447224628)

#### <font style="color:rgb(44, 62, 80);">String 类的 hashCode 方法</font>

<font style="color:rgb(44, 62, 80);">每一个字符串都会有一个 hash 值，这个哈希值在很大概率是不会重复的，因此 String 很适合来作为 </font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);">（后面会细讲）的键值。</font>

<font style="color:rgb(44, 62, 80);">来看 String 类的 hashCode 方法。</font>

```plain
private int hash; // 缓存字符串的哈希码

public int hashCode() {
    int h = hash; // 从缓存中获取哈希码
    // 如果哈希码未被计算过（即为 0）且字符串不为空，则计算哈希码
    if (h == 0 && value.length > 0) {
        char val[] = value; // 获取字符串的字符数组

        // 遍历字符串的每个字符来计算哈希码
        for (int i = 0; i < value.length; i++) {
            h = 31 * h + val[i]; // 使用 31 作为乘法因子
        }
        hash = h; // 缓存计算后的哈希码
    }
    return h; // 返回哈希码
}
```

<font style="color:rgb(44, 62, 80);">hashCode 方法首先检查是否已经计算过哈希码，如果已经计算过，则直接返回缓存的哈希码。否则，方法将使用一个循环遍历字符串的所有字符，并使用一个乘法和加法的组合计算哈希码。</font>

<font style="color:rgb(44, 62, 80);">这种计算方法被称为“</font>**<font style="color:rgb(44, 62, 80);">31 倍哈希法</font>**<font style="color:rgb(44, 62, 80);">”。计算完成后，将得到的哈希值存储在 hash 成员变量中，以便下次调用 hashCode 方法时直接返回该值，而不需要重新计算。这是一种</font>**<font style="color:rgb(44, 62, 80);">缓存优化</font>**<font style="color:rgb(44, 62, 80);">，称为“</font>**<font style="color:rgb(44, 62, 80);">惰性计算</font>**<font style="color:rgb(44, 62, 80);">”。</font>

**<font style="color:rgb(44, 62, 80);">31 倍哈希法（31-Hash）是一种简单有效的字符串哈希算法，常用于对字符串进行哈希处理</font>**<font style="color:rgb(44, 62, 80);">。该算法的基本思想是</font>**<font style="color:rgb(44, 62, 80);">将字符串中的每个字符乘以一个固定的质数 31 的幂次方，并将它们相加得到哈希值</font>**<font style="color:rgb(44, 62, 80);">。具体地，假设字符串为 s，长度为 n，则 31 倍哈希值计算公式如下：</font>

```plain
H(s) = (s[0] * 31^(n-1)) + (s[1] * 31^(n-2)) + ... + (s[n-1] * 31^0)
```

<font style="color:rgb(44, 62, 80);">其中，s[i]表示字符串 s 中第 i 个字符的 ASCII 码值，</font>`<font style="color:rgb(44, 62, 80);">^</font>`<font style="color:rgb(44, 62, 80);">表示幂运算。</font>

<font style="color:rgb(44, 62, 80);">31 倍哈希法的优点在于简单易实现，计算速度快，同时也比较均匀地分布在哈希表中。</font>

[<font style="color:rgb(44, 62, 80);">hashCode 方法</font>](https://javabetter.cn/basic-extra-meal/hashcode.html)<font style="color:rgb(44, 62, 80);">，我们会在另外一个章节里详细讲，戳前面的链接了解。</font>

<font style="color:rgb(44, 62, 80);">我们可以通过以下方法模拟 String 的 hashCode 方法：</font>

```plain
public class HashCodeExample {
    public static void main(String[] args) {
        String text = "沉默王二";
        int hashCode = computeHashCode(text);
        System.out.println("字符串 \"" + text + "\" 的哈希码是: " + hashCode);

        System.out.println("String 的 hashCode " + text.hashCode());
    }

    public static int computeHashCode(String text) {
        int h = 0;
        for (int i = 0; i < text.length(); i++) {
            h = 31 * h + text.charAt(i);
        }
        return h;
    }
}
```

<font style="color:rgb(44, 62, 80);">看一下结果：</font>

```plain
字符串 "沉默王二" 的哈希码是: 867758096
String 的 hashCode 867758096
```

<font style="color:rgb(44, 62, 80);">结果是一样的，又学到了吧？</font>

#### <font style="color:rgb(44, 62, 80);">String 类的 substring 方法</font>

<font style="color:rgb(44, 62, 80);">String 类中还有一个方法比较常用 substring，用来截取字符串的，来看源码。</font>

```plain
public String substring(int beginIndex) {
    // 检查起始索引是否小于 0，如果是，则抛出 StringIndexOutOfBoundsException 异常
    if (beginIndex < 0) {
        throw new StringIndexOutOfBoundsException(beginIndex);
    }
    // 计算子字符串的长度
    int subLen = value.length - beginIndex;
    // 检查子字符串长度是否为负数，如果是，则抛出 StringIndexOutOfBoundsException 异常
    if (subLen < 0) {
        throw new StringIndexOutOfBoundsException(subLen);
    }
    // 如果起始索引为 0，则返回原字符串；否则，创建并返回新的字符串
    return (beginIndex == 0) ? this : new String(value, beginIndex, subLen);
}
```

<font style="color:rgb(44, 62, 80);">substring 方法首先检查参数的有效性，如果参数无效，则抛出 StringIndexOutOfBoundsException</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">异常</font>](https://javabetter.cn/exception/gailan.html)<font style="color:rgb(44, 62, 80);">（后面会细讲）。接下来，方法根据参数计算子字符串的长度。如果子字符串长度小于零，也会抛出 StringIndexOutOfBoundsException 异常。</font>

<font style="color:rgb(44, 62, 80);">如果 beginIndex 为 0，说明子串与原字符串相同，直接返回原字符串。否则，使用 value 数组（原字符串的字符数组）的一部分 new 一个新的 String 对象并返回。</font>

<font style="color:rgb(44, 62, 80);">下面是几个使用 substring 方法的示例：</font>

<font style="color:rgb(44, 62, 80);">①、提取字符串中的一段子串：</font>

```plain
String str = "Hello, world!";
String subStr = str.substring(7, 12);  // 从第7个字符（包括）提取到第12个字符（不包括）
System.out.println(subStr);  // 输出 "world"
```

<font style="color:rgb(44, 62, 80);">②、提取字符串中的前缀或后缀：</font>

```plain
String str = "Hello, world!";
String prefix = str.substring(0, 5);  // 提取前5个字符，即 "Hello"
String suffix = str.substring(7);     // 提取从第7个字符开始的所有字符，即 "world!"
```

<font style="color:rgb(44, 62, 80);">③、处理字符串中的空格和分隔符：</font>

```plain
String str = "   Hello,   world!  ";
String trimmed = str.trim();                  // 去除字符串开头和结尾的空格
String[] words = trimmed.split("\\s+");       // 将字符串按照空格分隔成单词数组
String firstWord = words[0].substring(0, 1);  // 提取第一个单词的首字母
System.out.println(firstWord);                // 输出 "H"
```

<font style="color:rgb(44, 62, 80);">④、处理字符串中的数字和符号：</font>

```plain
String str = "1234-5678-9012-3456";
String[] parts = str.split("-");             // 将字符串按照连字符分隔成四个部分
String last4Digits = parts[3].substring(1);  // 提取最后一个部分的后三位数字
System.out.println(last4Digits);             // 输出 "456"
```

<font style="color:rgb(44, 62, 80);">总之，substring 方法可以根据需求灵活地提取字符串中的子串，为字符串处理提供了便利。</font>

#### <font style="color:rgb(44, 62, 80);">String 类的 indexOf 方法</font>

<font style="color:rgb(44, 62, 80);">indexOf 方法用于查找一个子字符串在原字符串中第一次出现的位置，并返回该位置的索引。来看该方法的源码：</font>

```plain
/*
 * 查找字符数组 target 在字符数组 source 中第一次出现的位置。
 * sourceOffset 和 sourceCount 参数指定 source 数组中要搜索的范围，
 * targetOffset 和 targetCount 参数指定 target 数组中要搜索的范围，
 * fromIndex 参数指定开始搜索的位置。
 * 如果找到了 target 数组，则返回它在 source 数组中的位置索引（从0开始），
 * 否则返回-1。
 */
static int indexOf(char[] source, int sourceOffset, int sourceCount,
        char[] target, int targetOffset, int targetCount,
        int fromIndex) {
    // 如果开始搜索的位置已经超出 source 数组的范围，则直接返回-1（如果 target 数组为空，则返回 sourceCount）
    if (fromIndex >= sourceCount) {
        return (targetCount == 0 ? sourceCount : -1);
    }
    // 如果开始搜索的位置小于0，则从0开始搜索
    if (fromIndex < 0) {
        fromIndex = 0;
    }
    // 如果 target 数组为空，则直接返回开始搜索的位置
    if (targetCount == 0) {
        return fromIndex;
    }

    // 查找 target 数组的第一个字符在 source 数组中的位置
    char first = target[targetOffset];
    int max = sourceOffset + (sourceCount - targetCount);

    // 循环查找 target 数组在 source 数组中的位置
    for (int i = sourceOffset + fromIndex; i <= max; i++) {
        /* Look for first character. */
        // 如果 source 数组中当前位置的字符不是 target 数组的第一个字符，则在 source 数组中继续查找 target 数组的第一个字符
        if (source[i] != first) {
            while (++i <= max && source[i] != first);
        }

        /* Found first character, now look at the rest of v2 */
        // 如果在 source 数组中找到了 target 数组的第一个字符，则继续查找 target 数组的剩余部分是否匹配
        if (i <= max) {
            int j = i + 1;
            int end = j + targetCount - 1;
            for (int k = targetOffset + 1; j < end && source[j]
                    == target[k]; j++, k++);

            // 如果 target 数组全部匹配，则返回在 source 数组中的位置索引
            if (j == end) {
                /* Found whole string. */
                return i - sourceOffset;
            }
        }
    }
    // 没有找到 target 数组，则返回-1
    return -1;
}
```

<font style="color:rgb(44, 62, 80);">来看示例。</font>

<font style="color:rgb(44, 62, 80);">①、示例 1：查找子字符串的位置</font>

```plain
String str = "Hello, world!";
int index = str.indexOf("world");  // 查找 "world" 子字符串在 str 中第一次出现的位置
System.out.println(index);        // 输出 7
```

<font style="color:rgb(44, 62, 80);">②、示例 2：查找字符串中某个字符的位置</font>

```plain
String str = "Hello, world!";
int index = str.indexOf(",");     // 查找逗号在 str 中第一次出现的位置
System.out.println(index);        // 输出 5
```

<font style="color:rgb(44, 62, 80);">③、示例 3：查找子字符串的位置（从指定位置开始查找）</font>

```plain
String str = "Hello, world!";
int index = str.indexOf("l", 3);  // 从索引为3的位置开始查找 "l" 子字符串在 str 中第一次出现的位置
System.out.println(index);        // 输出 3
```

<font style="color:rgb(44, 62, 80);">④、示例 4：查找多个子字符串</font>

```plain
String str = "Hello, world!";
int index1 = str.indexOf("o");    // 查找 "o" 子字符串在 str 中第一次出现的位置
int index2 = str.indexOf("o", 5); // 从索引为5的位置开始查找 "o" 子字符串在 str 中第一次出现的位置
System.out.println(index1);       // 输出 4
System.out.println(index2);       // 输出 8
```

#### [<font style="color:rgb(44, 62, 80);">String 类的其他方法</font>](https://javabetter.cn/string/string-source.html#string-%E7%B1%BB%E7%9A%84%E5%85%B6%E4%BB%96%E6%96%B9%E6%B3%95)

<font style="color:rgb(44, 62, 80);">①、比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">length()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">用于返回字符串长度。</font>

<font style="color:rgb(44, 62, 80);">②、比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">isEmpty()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">用于判断字符串是否为空。</font>

<font style="color:rgb(44, 62, 80);">③、比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">charAt()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">用于返回指定索引处的字符。</font>

<font style="color:rgb(44, 62, 80);">④、比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">valueOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">用于将其他类型的数据转换为字符串。</font>

```plain
String str = String.valueOf(123);  // 将整数 123 转换为字符串
```

<font style="color:rgb(44, 62, 80);">valueOf 方法的背后其实调用的是包装器类的 toString 方法，比如说整数转为字符串调用的是 Integer 类的 toString 方法。</font>

```plain
public static String valueOf(int i) {
    return Integer.toString(i);
}
```

<font style="color:rgb(44, 62, 80);">而 Integer 类的 toString 方法又调用了 Integer 类的静态方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">toString(int i)</font>`<font style="color:rgb(44, 62, 80);">：</font>

```plain
public static String toString(int i) {
    // 最小值返回 "-2147483648"
    if (i == Integer.MIN_VALUE)
        return "-2147483648";
    // 整数的长度，负数的长度减 1
    int size = (i < 0) ? stringSize(-i) + 1 : stringSize(i);
    // 把整数复制到字符数组中
    char[] buf = new char[size];
    // 具体的复制过程
    getChars(i, size, buf);
    // 通过 new 返回字符串
    return new String(buf, true);
}
```

<font style="color:rgb(44, 62, 80);">至于 getChars 方法，就是把整数复制到字符数组中的具体过程了，这里就不展开了。</font>

<font style="color:rgb(44, 62, 80);">⑥、比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">getBytes()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">用于返回字符串的字节数组，可以指定编码方式，比如说：</font>

```plain
String text = "沉默王二";
System.out.println(Arrays.toString(text.getBytes(StandardCharsets.UTF_8)));
```

<font style="color:rgb(44, 62, 80);">⑦、比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">trim()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">用于去除字符串两侧的空白字符，来看源码：</font>

```plain
public String trim() {
    int len = value.length;
    int st = 0;
    char[] val = value;    /* avoid getfield opcode */

    while ((st < len) && (val[st] <= ' ')) {
        st++;
    }
    while ((st < len) && (val[len - 1] <= ' ')) {
        len--;
    }
    return ((st > 0) || (len < value.length)) ? substring(st, len) : this;
}
```

<font style="color:rgb(44, 62, 80);">举例：</font>`<font style="color:rgb(44, 62, 80);">" 沉默王二 ".trim()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">会返回"沉默王二"</font>

<font style="color:rgb(44, 62, 80);">除此之外，还有</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">split</font>](https://javabetter.cn/string/split.html)<font style="color:rgb(44, 62, 80);">、</font>[<font style="color:rgb(44, 62, 80);">equals</font>](https://javabetter.cn/string/equals.html)<font style="color:rgb(44, 62, 80);">、</font>[<font style="color:rgb(44, 62, 80);">join</font>](https://javabetter.cn/string/join.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">等这些方法，我们后面会一一来细讲。</font>

### <font style="color:rgb(44, 62, 80);">为什么Java字符串是不可变的？</font>

---

<font style="color:rgb(44, 62, 80);">String 可能是 Java 中使用频率最高的引用类型了，因此 String 类的设计者可以说是用心良苦。</font>

<font style="color:rgb(44, 62, 80);">比如说 String 的不可变性。</font>

+ <font style="color:rgb(44, 62, 80);">String 类被</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">final 关键字</font>](https://javabetter.cn/oo/final.html)<font style="color:rgb(44, 62, 80);">修饰，所以它不会有子类，这就意味着没有子类可以</font>[<font style="color:rgb(44, 62, 80);">重写</font>](https://javabetter.cn/basic-extra-meal/override-overload.html)<font style="color:rgb(44, 62, 80);">它的方法，改变它的行为。</font>
+ <font style="color:rgb(44, 62, 80);">String 类的数据存储在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">char[]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">数组中，而这个数组也被 final 关键字修饰了，这就表示 String 对象是没法被修改的，只要初始化一次，值就确定了。</font>

```plain
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence {
    /** The value is used for character storage. */
    private final char value[];
}
```

<font style="color:rgb(44, 62, 80);">“哥，为什么要这样设计呢？”三妹有些不解。</font>

<font style="color:rgb(44, 62, 80);">“我先简单来说下，三妹，能懂最好，不能懂后面再细说。”</font>

<font style="color:rgb(44, 62, 80);">第一，可以保证 String 对象的安全性，避免被篡改，毕竟像密码这种隐私信息一般就是用字符串存储的。</font>

<font style="color:rgb(44, 62, 80);">以下是一个简单的 Java 示例，演示了字符串的不可变性如何有助于保证 String 对象的安全性。在本例中，我们创建了一个简单的 User 类，该类使用 String 类型的字段存储用户名和密码。同时，我们使用一个静态方法 getUserCredentials 从外部获取用户凭据。</font>

```plain
class User {
    private String username;
    private String password;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}

public class StringSecurityExample {
    public static void main(String[] args) {
        String username = "沉默王二";
        String password = "123456";
        User user = new User(username, password);

        // 获取用户凭据
        String[] credentials = getUserCredentials(user);

        // 尝试修改从 getUserCredentials 返回的用户名和密码字符串
        credentials[0] = "陈清扬";
        credentials[1] = "612311";

        // 输出原始 User 对象中的用户名和密码
        System.out.println("原始用户名: " + user.getUsername());
        System.out.println("原始密码: " + user.getPassword());
    }

    public static String[] getUserCredentials(User user) {
        String[] credentials = new String[2];
        credentials[0] = user.getUsername();
        credentials[1] = user.getPassword();
        return credentials;
    }
}
```

<font style="color:rgb(44, 62, 80);">在这个示例中，尽管我们尝试修改 getUserCredentials 返回的字符串数组（即用户名和密码），但原始 User 对象中的用户名和密码保持不变。这证明了字符串的不可变性有助于保护 String 对象的安全性。</font>

<font style="color:rgb(44, 62, 80);">第二，保证哈希值不会频繁变更。毕竟要经常作为</font>[<font style="color:rgb(44, 62, 80);">哈希表</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);">的键值，经常变更的话，哈希表的性能就会很差劲。</font>

<font style="color:rgb(44, 62, 80);">在 String 类中，哈希值是在第一次计算时缓存的，后续对该哈希值的请求将直接使用缓存值。这有助于提高哈希表等数据结构的性能。以下是一个简单的示例，演示了字符串的哈希值缓存机制：</font>

```plain
String text1 = "沉默王二";
String text2 = "沉默王二";

// 计算字符串 text1 的哈希值，此时会进行计算并缓存哈希值
int hashCode1 = text1.hashCode();
System.out.println("第一次计算 text1 的哈希值: " + hashCode1);

// 再次计算字符串 text1 的哈希值，此时直接返回缓存的哈希值
int hashCode1Cached = text1.hashCode();
System.out.println("第二次计算: " + hashCode1Cached);

// 计算字符串 text2 的哈希值，由于字符串常量池的存在，实际上 text1 和 text2 指向同一个字符串对象
// 所以这里直接返回缓存的哈希值
int hashCode2 = text2.hashCode();
System.out.println("text2 直接使用缓存: " + hashCode2);
```

<font style="color:rgb(44, 62, 80);">在这个示例中，我们创建了两个具有相同内容的字符串 text1 和 text2。首次计算 text1 的哈希值时，会进行实际计算并缓存该值。当我们再次计算 text1 的哈希值或计算具有相同内容的 text2 的哈希值时，将直接返回缓存的哈希值，而不进行重新计算。</font>

<font style="color:rgb(44, 62, 80);">由于 String 对象是不可变的，其哈希值在创建后不会发生变化。这使得 String 类可以缓存哈希值，提高哈希表等数据结构的性能。如果 String 是可变的，那么在每次修改时都需要重新计算哈希值，这会降低性能。</font>

<font style="color:rgb(44, 62, 80);">第三，可以实现</font>[<font style="color:rgb(44, 62, 80);">字符串常量池</font>](https://javabetter.cn/string/constant-pool.html)<font style="color:rgb(44, 62, 80);">，Java 会将相同内容的字符串存储在字符串常量池中。这样，具有相同内容的字符串变量可以指向同一个 String 对象，节省内存空间。</font>

<font style="color:rgb(44, 62, 80);">“由于字符串的不可变性，String 类的一些方法实现最终都返回了新的字符串对象。”等三妹稍微缓了一会后，我继续说到。</font>

<font style="color:rgb(44, 62, 80);">“就拿</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">substring()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法来说。”</font>

```plain
public String substring(int beginIndex) {
    if (beginIndex < 0) {
        throw new StringIndexOutOfBoundsException(beginIndex);
    }
    int subLen = value.length - beginIndex;
    if (subLen < 0) {
        throw new StringIndexOutOfBoundsException(subLen);
    }
    return (beginIndex == 0) ? this : new String(value, beginIndex, subLen);
}
```

`<font style="color:rgb(44, 62, 80);">substring()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于截取字符串，最终返回的都是 new 出来的新字符串对象。</font>

<font style="color:rgb(44, 62, 80);">“还有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">concat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。”</font>

```plain
public String concat(String str) {
    int olen = str.length();
    if (olen == 0) {
        return this;
    }
    if (coder() == str.coder()) {
        byte[] val = this.value;
        byte[] oval = str.value;
        int len = val.length + oval.length;
        byte[] buf = Arrays.copyOf(val, len);
        System.arraycopy(oval, 0, buf, val.length, oval.length);
        return new String(buf, coder);
    }
    int len = length();
    byte[] buf = StringUTF16.newBytesFor(len + olen);
    getBytes(buf, 0, UTF16);
    str.getBytes(buf, len, UTF16);
    return new String(buf, UTF16);
}
```

`<font style="color:rgb(44, 62, 80);">concat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于拼接字符串，不管编码是否一致，最终也返回的是新的字符串对象。</font>

<font style="color:rgb(44, 62, 80);">“</font>`<font style="color:rgb(44, 62, 80);">replace()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">替换方法其实也一样，三妹，你可以自己一会看一下源码，也是返回新的字符串对象。”</font>

<font style="color:rgb(44, 62, 80);">“这就意味着，不管是截取、拼接，还是替换，都不是在原有的字符串上进行的，而是重新生成了新的字符串对象。也就是说，这些操作执行过后，</font>**<font style="color:rgb(44, 62, 80);">原来的字符串对象并没有发生改变</font>**<font style="color:rgb(44, 62, 80);">。”</font>

<font style="color:rgb(44, 62, 80);"></font>

### <font style="color:rgb(44, 62, 80);">深入理解Java字符串常量池</font>

---

#### [<font style="color:rgb(44, 62, 80);">new String("二哥")创建了几个对象</font>](https://javabetter.cn/string/constant-pool.html#new-string-%E4%BA%8C%E5%93%A5-%E5%88%9B%E5%BB%BA%E4%BA%86%E5%87%A0%E4%B8%AA%E5%AF%B9%E8%B1%A1)

<font style="color:rgb(44, 62, 80);">“先从这道面试题开始吧！”</font>

```plain
String s = new String("二哥");
```

<font style="color:rgb(44, 62, 80);">“这行代码创建了几个</font>[<font style="color:rgb(44, 62, 80);">对象</font>](https://javabetter.cn/oo/object-class.html)<font style="color:rgb(44, 62, 80);">？”</font>

<font style="color:rgb(44, 62, 80);">“不就一个吗？”三妹不假思索地回答。</font>

<font style="color:rgb(44, 62, 80);">“不，两个！”我直接否定了三妹的答案，“使用 new 关键字创建一个字符串对象时，Java 虚拟机会先在字符串常量池中查找有没有‘二哥’这个字符串对象，如果有，就不会在字符串常量池中创建‘二哥’这个对象了，直接在堆中创建一个‘二哥’的字符串对象，然后将堆中这个‘二哥’的对象地址返回赋值给变量 s。”</font>

<font style="color:rgb(44, 62, 80);">“如果没有，先在字符串常量池中创建一个‘二哥’的字符串对象，然后再在堆中创建一个‘二哥’的字符串对象，然后将堆中这个‘二哥’的字符串对象地址返回赋值给变量 s。”</font>

<font style="color:rgb(44, 62, 80);">我画图表示一下，会更加清楚。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660488701-3bdec85a-e29b-4f9f-8f17-d14e1ae4d658.png" />


<font style="color:rgb(44, 62, 80);">String s = new String("二哥")</font>

<font style="color:rgb(44, 62, 80);">在 Java 中，栈上存储的是基本数据类型的变量和对象的引用，而对象本身则存储在堆上。</font>

<font style="color:rgb(44, 62, 80);">对于这行代码</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String s = new String("二哥");</font>`<font style="color:rgb(44, 62, 80);">，它创建了两个对象：一个是字符串对象 "二哥"，它被添加到了字符串常量池中，另一个是通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">构造方法创建的字符串对象 "二哥"，它被分配在堆内存中，同时引用变量 s 存储在栈上，它指向堆内存中的字符串对象 "二哥"。</font>

<font style="color:rgb(44, 62, 80);">“</font>**<font style="color:rgb(44, 62, 80);">为什么要先在字符串常量池中创建对象，然后再在堆上创建呢</font>**<font style="color:rgb(44, 62, 80);">？这样不就多此一举了？”三妹敏锐地发现了问题。</font>

<font style="color:rgb(44, 62, 80);">我回答，“是的。由于字符串的使用频率实在是太高了，所以 Java 虚拟机为了提高性能和减少内存开销，在创建字符串对象的时候进行了一些优化，特意为字符串开辟了一块空间——也就是字符串常量池。”</font>

#### [<font style="color:rgb(44, 62, 80);">字符串常量池的作用</font>](https://javabetter.cn/string/constant-pool.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%B8%B8%E9%87%8F%E6%B1%A0%E7%9A%84%E4%BD%9C%E7%94%A8)

<font style="color:rgb(44, 62, 80);">通常情况下，我们会采用双引号的方式来创建字符串对象，而不是通过 new 关键字的方式，就像下面 </font><font style="color:rgb(44, 62, 80);">👇🏻</font><font style="color:rgb(44, 62, 80);"> 这样，这样就不会多此一举：</font>

```plain
String s = "三妹";
```

<font style="color:rgb(44, 62, 80);">当执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String s = "三妹"</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">时，Java 虚拟机会先在字符串常量池中查找有没有“三妹”这个字符串对象，如果有，则不创建任何对象，直接将字符串常量池中这个“三妹”的对象地址返回，赋给变量 s；如果没有，在字符串常量池中创建“三妹”这个对象，然后将其地址返回，赋给变量 s。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660488986-af42e106-525f-4d13-a9b7-690a496f4646.png" />


<font style="color:rgb(44, 62, 80);">Java 虚拟机创建了一个字符串对象 "三妹"，它被添加到了字符串常量池中，同时引用变量 s 存储在栈上，它指向字符串常量池中的字符串对象 "三妹"。你看，是不是省了一步，比之前高效了。</font>

<font style="color:rgb(44, 62, 80);">“哦，我明白了，哥。”三妹突然插话到，“有了字符串常量池，就可以通过双引号的方式直接创建字符串对象，不用再通过 new 的方式在堆中创建对象了，对吧？”</font>

<font style="color:rgb(44, 62, 80);">“是滴。new 的方式始终会创建一个对象，不管字符串的内容是否已经存在，而双引号的方式会重复利用字符串常量池中已经存在的对象。”我说。</font>

<font style="color:rgb(44, 62, 80);">来看下面这个例子：</font>

```plain
String s = new String("二哥");
String s1 = new String("二哥");
```

<font style="color:rgb(44, 62, 80);">按照我们之前的分析，这两行代码会创建三个对象，字符串常量池中一个，堆上两个。</font>

<font style="color:rgb(44, 62, 80);">再来看下面这个例子：</font>

```plain
String s = "三妹";
String s1 = "三妹";
```

<font style="color:rgb(44, 62, 80);">这两行代码只会创建一个对象，就是字符串常量池中的那个。这样的话，性能肯定就提高了！</font>

#### [<font style="color:rgb(44, 62, 80);">字符串常量池在内存中的什么位置呢？</font>](https://javabetter.cn/string/constant-pool.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%B8%B8%E9%87%8F%E6%B1%A0%E5%9C%A8%E5%86%85%E5%AD%98%E4%B8%AD%E7%9A%84%E4%BB%80%E4%B9%88%E4%BD%8D%E7%BD%AE%E5%91%A2)

<font style="color:rgb(44, 62, 80);">“那哥，字符串常量池在内存中的什么位置呢？”三妹问。</font>

<font style="color:rgb(44, 62, 80);">我说，“三妹，你这个问题问得好呀！”</font>

<font style="color:rgb(44, 62, 80);">分为三个阶段。</font>

##### [<font style="color:rgb(44, 62, 80);">Java 7 之前</font>](https://javabetter.cn/string/constant-pool.html#java-7-%E4%B9%8B%E5%89%8D)

<font style="color:rgb(44, 62, 80);">在 Java 7 之前，字符串常量池位于永久代（Permanent Generation）的内存区域中，主要用来存储一些字符串常量（静态数据的一种）。永久代是 Java 堆（Java Heap）的一部分，用于存储类信息、方法信息、常量池信息等静态数据。</font>

<font style="color:rgb(44, 62, 80);">而 Java 堆是 JVM 中存储对象实例和数组的内存区域，也就是说，永久代是 Java 堆的一个子区域。</font>

<font style="color:rgb(44, 62, 80);">换句话说，永久代中存储的静态数据与堆中存储的对象实例和数组是分开的，它们有不同的生命周期和分配方式。</font>

<font style="color:rgb(44, 62, 80);">但是，永久代和堆的大小是相互影响的，因为它们都使用了 JVM 堆内存，因此它们的大小都受到 JVM 堆大小的限制。</font>

<font style="color:rgb(44, 62, 80);">于是，当我们创建一个字符串常量时，它会被储存在永久代的字符串常量池中。如果我们创建一个普通字符串对象，则它将被储存在堆中。如果字符串对象的内容是一个已经存在于字符串常量池中的字符串常量，那么这个对象会指向已经存在的字符串常量，而不是重新创建一个新的字符串对象。</font>

<font style="color:rgb(44, 62, 80);">画幅图，大概就是这个样子。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660488696-d1e1104e-39e2-4757-b6f6-1de99f9e8ffb.png" />


##### [<font style="color:rgb(44, 62, 80);">Java 7</font>](https://javabetter.cn/string/constant-pool.html#java-7)

<font style="color:rgb(44, 62, 80);">需要注意的是，永久代的大小是有限的，并且很难准确地确定一个应用程序需要多少永久代空间。如果我们在应用程序中使用了大量的类、方法、常量等静态数据，就有可能导致永久代空间不足。这种情况下，JVM 就会抛出 OutOfMemoryError 错误。</font>

<font style="color:rgb(44, 62, 80);">因此，从 Java 7 开始，为了解决永久代空间不足的问题，将字符串常量池从永久代中移动到堆中。这个改变也是为了更好地支持动态语言的运行时特性。</font>

<font style="color:rgb(44, 62, 80);">再画幅图，大概就是这样子。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660488855-1d5c38bc-789b-476c-9d7a-3fabd03d80f2.png" />


##### [<font style="color:rgb(44, 62, 80);">Java 8</font>](https://javabetter.cn/string/constant-pool.html#java-8)

<font style="color:rgb(44, 62, 80);">到了 Java 8，永久代（PermGen）被取消，并由元空间（Metaspace）取代。元空间是一块本机内存区域，和 JVM 内存区域是分开的。不过，元空间的作用依然和之前的永久代一样，用于存储类信息、方法信息、常量池信息等静态数据。</font>

<font style="color:rgb(44, 62, 80);">与永久代不同，元空间具有一些优点，例如：</font>

+ <font style="color:rgb(44, 62, 80);">它不会导致 OutOfMemoryError 错误，因为元空间的大小可以动态调整。</font>
+ <font style="color:rgb(44, 62, 80);">元空间使用本机内存，而不是 JVM 堆内存，这可以避免堆内存的碎片化问题。</font>
+ <font style="color:rgb(44, 62, 80);">元空间中的垃圾收集与堆中的垃圾收集是分离的，这可以避免应用程序在运行过程中因为进行类加载和卸载而频繁地触发 Full GC。</font>

<font style="color:rgb(44, 62, 80);">再画幅图，对比来看一下，就会一目了然。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660489029-5f8edc7e-b18e-44f3-a8e5-026447d270ca.png" />


<font style="color:rgb(44, 62, 80);">字符串常量池的位置变化</font>

#### [<font style="color:rgb(44, 62, 80);">永久代、方法区、元空间</font>](https://javabetter.cn/string/constant-pool.html#%E6%B0%B8%E4%B9%85%E4%BB%A3%E3%80%81%E6%96%B9%E6%B3%95%E5%8C%BA%E3%80%81%E5%85%83%E7%A9%BA%E9%97%B4)

<font style="color:rgb(44, 62, 80);">“哥，能再简单给我解释一下方法区，永久代和元空间的概念吗？有点模糊。”三妹说。</font>

<font style="color:rgb(44, 62, 80);">“可以呀。”</font>

+ <font style="color:rgb(44, 62, 80);">方法区是 Java 虚拟机规范中的一个概念，就像是一个</font>[<font style="color:rgb(44, 62, 80);">接口</font>](https://javabetter.cn/oo/interface.html)<font style="color:rgb(44, 62, 80);">吧；</font>
+ <font style="color:rgb(44, 62, 80);">永久代是 HotSpot 虚拟机中对方法区的一个实现，就像是接口的实现类；</font>
+ <font style="color:rgb(44, 62, 80);">Java 8 的时候，移除了永久代，取而代之的是元空间，是方法区的另外一种实现，更灵活了。</font>

<font style="color:rgb(44, 62, 80);">永久代是放在运行时数据区中的，所以它的大小受到 Java 虚拟机本身大小的限制，所以 Java 8 之前，会经常遇到 </font>`<font style="color:rgb(44, 62, 80);">java.lang.OutOfMemoryError: PremGen Space</font>`<font style="color:rgb(44, 62, 80);"> 的异常，PremGen Space 就是方法区的意思；而元空间是直接放在内存中的，所以只受本机可用内存的限制。</font>

<font style="color:rgb(44, 62, 80);"></font>

### <font style="color:rgb(44, 62, 80);">详解 String.intern() 方法</font>

---

<font style="color:rgb(44, 62, 80);">“哥，你发给我的那篇文章我看了，结果直接把我给看得不想学 Java 了！”三妹气冲冲地说。</font>

<font style="color:rgb(44, 62, 80);">“哪一篇啊？”看着三妹面色沉重，我关心地问到。</font>

<font style="color:rgb(44, 62, 80);">“就是</font>[<font style="color:rgb(44, 62, 80);">美团技术团队深入解析String.intern()那篇</font>](https://tech.meituan.com/2014/03/06/in-depth-understanding-string-intern.html)<font style="color:rgb(44, 62, 80);">啊！”三妹回答。</font>

<font style="color:rgb(44, 62, 80);">“哦，我想起来了，不挺好一篇文章嘛，深入浅出，精品中的精品，看完后你应该对 String 的 intern 方法彻底理解了才对呀。”</font>

<font style="color:rgb(44, 62, 80);">“好是好，但我就是看不懂！”三妹委屈地说，“哥，还是你亲自给我讲讲吧？”</font>

<font style="color:rgb(44, 62, 80);">“好吧，上次学的</font>[<font style="color:rgb(44, 62, 80);">字符串常量池</font>](https://javabetter.cn/string/constant-pool.html)<font style="color:rgb(44, 62, 80);">你都搞清楚了吧？”</font>

<font style="color:rgb(44, 62, 80);">“嗯。”三妹微微的点了点头。</font>

<font style="color:rgb(44, 62, 80);">要理解美团技术团队的这篇文章，你只需要记住这几点内容：</font>

<font style="color:rgb(44, 62, 80);">第一，使用双引号声明的字符串对象会保存在字符串常量池中。</font>

<font style="color:rgb(44, 62, 80);">第二，使用 new 关键字创建的字符串对象会先从字符串常量池中找，如果没找到就创建一个，然后再在堆中创建字符串对象；如果找到了，就直接在堆中创建字符串对象。</font>

<font style="color:rgb(44, 62, 80);">第三，针对没有使用双引号声明的字符串对象来说，就像下面代码中的 s1 那样：</font>

```plain
String s1 = new String("二哥") + new String("三妹");
```

<font style="color:rgb(44, 62, 80);">如果想把 s1 的内容也放入字符串常量池的话，可以调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">intern()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法来完成。</font>

<font style="color:rgb(44, 62, 80);">不过，需要注意的是，Java 7 的时候，字符串常量池从永久代中移动到了堆中，虽然此时永久代还没有完全被移除。Java 8 的时候，永久代被彻底移除。</font>

<font style="color:rgb(44, 62, 80);">这个变化也直接影响了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String.intern()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法在执行时的策略，Java 7 之前，执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String.intern()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的时候，不管对象在堆中是否已经创建，字符串常量池中仍然会创建一个内容完全相同的新对象； Java 7 之后呢，由于字符串常量池放在了堆中，执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String.intern()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的时候，如果对象在堆中已经创建了，字符串常量池中就不需要再创建新的对象了，而是直接保存堆中对象的引用，也就节省了一部分的内存空间。</font>

<font style="color:rgb(44, 62, 80);">“还没有理解清楚，二哥”，三妹很苦恼。</font>

<font style="color:rgb(44, 62, 80);">“嗯。。。别怕，三妹，先来猜猜这段代码输出的结果吧。”我说。</font>

```plain
String s1 = new String("二哥三妹");
String s2 = s1.intern();
System.out.println(s1 == s2);
```

<font style="color:rgb(44, 62, 80);">“哥，这我完全猜不出啊，还是你直接解释吧。”三妹说。</font>

<font style="color:rgb(44, 62, 80);">“好吧。”</font>

<font style="color:rgb(44, 62, 80);">第一行代码，字符串常量池中会先创建一个“二哥三妹”的对象，然后堆中会再创建一个“二哥三妹”的对象，s1 引用的是堆中的对象。</font>

<font style="color:rgb(44, 62, 80);">第二行代码，对 s1 执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">intern()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，该方法会从字符串常量池中查找“二哥三妹”这个字符串是否存在，此时是存在的，所以 s2 引用的是字符串常量池中的对象。</font>

<font style="color:rgb(44, 62, 80);">也就意味着 s1 和 s2 的引用地址是不同的，一个来自堆，一个来自字符串常量池，所以输出的结果为 false。</font>

<font style="color:rgb(44, 62, 80);">“来看一下运行结果。”我说。</font>

```plain
false
```

<font style="color:rgb(44, 62, 80);">“我来画幅图，帮助你理解下。”看到三妹惊讶的表情，我耐心地说。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660542998-2e56ddfd-01ce-4d4f-ac8e-c480109fbbfa.png" />


<font style="color:rgb(44, 62, 80);">“这下理解了吧？”我问三妹。</font>

<font style="color:rgb(44, 62, 80);">“嗯嗯，一下子就豁然开朗了！”三妹说。</font>

<font style="color:rgb(44, 62, 80);">“好，我们再来看下面这段代码。”</font>

```plain
String s1 = new String("二哥") + new String("三妹");
String s2 = s1.intern();
System.out.println(s1 == s2);
```

<font style="color:rgb(44, 62, 80);">“难道也输出 false ？”三妹有点不确定。</font>

<font style="color:rgb(44, 62, 80);">“不，这段代码会输出 true。”我否定了三妹的猜测。</font>

<font style="color:rgb(44, 62, 80);">“为啥呀？”三妹迫切地想要知道答案。</font>

<font style="color:rgb(44, 62, 80);">第一行代码，会在字符串常量池中创建两个对象，一个是“二哥”，一个是“三妹”，然后在堆中会创建两个匿名对象“二哥”和“三妹”，最后还有一个“二哥三妹”的对象（稍后会解释），s1 引用的是堆中“二哥三妹”这个对象。</font>

<font style="color:rgb(44, 62, 80);">第二行代码，对 s1 执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">intern()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，该方法会从字符串常量池中查找“二哥三妹”这个对象是否存在，此时不存在的，但堆中已经存在了，所以字符串常量池中保存的是堆中这个“二哥三妹”对象的引用，也就是说，s2 和 s1 的引用地址是相同的，所以输出的结果为 true。</font>

<font style="color:rgb(44, 62, 80);">“来看一下运行结果。”我胸有成竹地说。</font>

```plain
true
```

<font style="color:rgb(44, 62, 80);">“我再来画幅图，帮助你理解下。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660543114-fe0a2d55-77ce-4419-8847-2fbf1ce3d0ec.png" />


<font style="color:rgb(44, 62, 80);">“哇，我明白了！”三妹长舒一口气，大有感慨 intern 也没什么难理解的意味，“不过，我有一个疑惑，“二哥三妹”这个对象是什么时候创建的呢？”</font>

<font style="color:rgb(44, 62, 80);">“三妹，不错嘛，能抓住问题的关键。再来解释一下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String s1 = new String("二哥") + new String("三妹")</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这行代码。”我对三妹的表现非常开心。</font>

1. <font style="color:rgb(44, 62, 80);">创建 "二哥" 字符串对象，存储在字符串常量池中。</font>
2. <font style="color:rgb(44, 62, 80);">创建 "三妹" 字符串对象，存储在字符串常量池中。</font>
3. <font style="color:rgb(44, 62, 80);">执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String("二哥")</font>`<font style="color:rgb(44, 62, 80);">，在堆上创建一个字符串对象，内容为 "二哥"。</font>
4. <font style="color:rgb(44, 62, 80);">执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String("三妹")</font>`<font style="color:rgb(44, 62, 80);">，在堆上创建一个字符串对象，内容为 "三妹"。</font>
5. <font style="color:rgb(44, 62, 80);">执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String("二哥") + new String("三妹")</font>`<font style="color:rgb(44, 62, 80);">，会创建一个 StringBuilder 对象，并将 "二哥" 和 "三妹" 追加到其中，然后调用 StringBuilder 对象的 toString() 方法，将其转换为一个新的字符串对象，内容为 "二哥三妹"。这个新的字符串对象存储在堆上。</font>

<font style="color:rgb(44, 62, 80);">也就是说，当编译器遇到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">号这个操作符的时候，会将</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String("二哥") + new String("三妹")</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这行代码编译为以下代码：</font>

```plain
new StringBuilder().append("二哥").append("三妹").toString();
```

<font style="color:rgb(44, 62, 80);">实际执行过程如下：</font>

+ <font style="color:rgb(44, 62, 80);">创建一个 StringBuilder 对象。</font>
+ <font style="color:rgb(44, 62, 80);">在 StringBuilder 对象上调用 append("二哥")，将 "二哥" 追加到 StringBuilder 中。</font>
+ <font style="color:rgb(44, 62, 80);">在 StringBuilder 对象上调用 append("三妹")，将 "三妹" 追加到 StringBuilder 中。</font>
+ <font style="color:rgb(44, 62, 80);">在 StringBuilder 对象上调用 toString() 方法，将 StringBuilder 转换为一个新的字符串对象，内容为 "二哥三妹"。</font>

<font style="color:rgb(44, 62, 80);">关于</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">StringBuilder</font>](https://javabetter.cn/string/builder-buffer.html)<font style="color:rgb(44, 62, 80);">，我们随后会详细地讲到。今天先了解到这。</font>

<font style="color:rgb(44, 62, 80);">不过需要注意的是，尽管 intern 可以确保所有具有相同内容的字符串共享相同的内存空间，但也不要烂用 intern，因为任何的缓存池都是有大小限制的，不能无缘无故就占用了相对稀缺的缓存空间，导致其他字符串没有坑位可占。</font>

<font style="color:rgb(44, 62, 80);">另外，字符串常量池本质上是一个固定大小的 StringTable，如果放进去的字符串过多，就会造成严重的哈希冲突，从而导致链表变长，链表变长也就意味着字符串常量池的性能会大幅下降，因为要一个一个找是需要花费时间的。</font>

<font style="color:rgb(44, 62, 80);">“好了，三妹，关于 String 的 intern 就讲到这吧，这次理解了吧？”我问。</font>

<font style="color:rgb(44, 62, 80);">“哥，你真棒！”</font>

<font style="color:rgb(44, 62, 80);">看到三妹一点一滴的进步，我也感到由衷的开心。</font>

<font style="color:rgb(44, 62, 80);"></font>

### <font style="color:rgb(44, 62, 80);">聊聊 Java StringBuilder和StringBuffer 两兄弟</font>

---

**<font style="color:rgb(44, 62, 80);">此页内容</font>**

<font style="color:rgb(44, 62, 80);">“哥，</font>[<font style="color:rgb(44, 62, 80);">上一篇深入理解 String.intern()</font>](https://javabetter.cn/string/intern.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">讲到了 StringBuilder，这一节我们就来聊聊吧！”三妹很期待。</font>

<font style="color:rgb(44, 62, 80);">“好啊，它们之间的关系还真的是挺和谐的。”看着三妹好奇的样子，我感到学技术就应该是这个样子才对。</font>

#### [<font style="color:rgb(44, 62, 80);">StringBuffer和StringBuilder的区别</font>](https://javabetter.cn/string/builder-buffer.html#stringbuffer%E5%92%8Cstringbuilder%E7%9A%84%E5%8C%BA%E5%88%AB)

<font style="color:rgb(44, 62, 80);">由于</font>[<font style="color:rgb(44, 62, 80);">字符串是不可变的</font>](https://javabetter.cn/string/immutable.html)<font style="color:rgb(44, 62, 80);">，所以当遇到</font>[<font style="color:rgb(44, 62, 80);">字符串拼接</font>](https://javabetter.cn/string/join.html)<font style="color:rgb(44, 62, 80);">（尤其是使用</font>`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);">号操作符）的时候，就需要考量性能的问题，你不能毫无顾虑地生产太多 String 对象，对珍贵的内存造成不必要的压力。</font>

<font style="color:rgb(44, 62, 80);">于是 Java 就设计了一个专门用来解决此问题的 StringBuffer 类。</font>

```plain
public final class StringBuffer extends AbstractStringBuilder implements Serializable, CharSequence {

    public StringBuffer() {
        super(16);
    }
    
    public synchronized StringBuffer append(String str) {
        super.append(str);
        return this;
    }

    public synchronized String toString() {
        return new String(value, 0, count);
    }

    // 其他方法
}
```

<font style="color:rgb(44, 62, 80);">不过，由于 StringBuffer 操作字符串的方法加了</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">synchronized关键字</font>](https://javabetter.cn/thread/synchronized-1.html)<font style="color:rgb(44, 62, 80);">进行了同步，主要是考虑到多线程环境下的安全问题，所以如果在非多线程环境下，执行效率就会比较低，因为加了没必要的锁。</font>

<font style="color:rgb(44, 62, 80);">于是 Java 就给 StringBuffer “生了个兄弟”，名叫 StringBuilder，说，“孩子，你别管线程安全了，你就在单线程环境下使用，这样效率会高得多，如果要在多线程环境下修改字符串，你到时候可以使用</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">ThreadLocal</font>](https://javabetter.cn/thread/ThreadLocal.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来避免多线程冲突。”</font>

```plain
public final class StringBuilder extends AbstractStringBuilder
    implements java.io.Serializable, CharSequence
{
    // ...

    public StringBuilder append(String str) {
        super.append(str);
        return this;
    }

    public String toString() {
        // Create a copy, don't share the array
        return new String(value, 0, count);
    }

    // ...
}
```

<font style="color:rgb(44, 62, 80);">除了类名不同，方法没有加 synchronized，基本上完全一样。</font>

<font style="color:rgb(44, 62, 80);">实际开发中，StringBuilder 的使用频率也是远高于 StringBuffer，甚至可以这么说，StringBuilder 完全取代了 StringBuffer。</font>

#### [<font style="color:rgb(44, 62, 80);">StringBuilder的使用</font>](https://javabetter.cn/string/builder-buffer.html#stringbuilder%E7%9A%84%E4%BD%BF%E7%94%A8)

[<font style="color:rgb(44, 62, 80);">之前我们也曾聊过</font>](https://javabetter.cn/overview/what-is-java.html)<font style="color:rgb(44, 62, 80);">，Java 是一门解释型的编程语言，所以当编译器遇到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">号这个操作符的时候，会将</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String("二哥") + new String("三妹")</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这行代码解释为以下代码：</font>

```plain
new StringBuilder().append("二哥").append("三妹").toString();
```

<font style="color:rgb(44, 62, 80);">这个过程是我们看不见的，但这正是 Java 的“智能”之处，它可以在编译的时候偷偷地帮我们做很多优化，这样既可以提高我们的开发效率（</font>`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">号写起来比创建 StringBuilder 对象便捷得多），也不会影响 JVM 的执行效率。</font>

<font style="color:rgb(44, 62, 80);">当然了，如果我们使用</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">javap</font>](https://javabetter.cn/jvm/bytecode.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">反编译</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String("二哥") + new String("三妹")</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的字节码的时候，也是能看出 StringBuilder 的影子的。</font>

[<font style="color:rgb(102, 102, 102);">javap 和字节码</font>](https://javabetter.cn/jvm/bytecode.html)<font style="color:rgb(102, 102, 102);">会在后面讲 JVM 的时候详细讲解，戳链接了解详情。</font>

```plain
0: new           #2                  // class java/lang/StringBuilder
3: dup
4: invokespecial #3                  // Method java/lang/StringBuilder."<init>":()V
7: new           #4                  // class java/lang/String
10: dup
11: ldc           #5                  // String 二哥
13: invokespecial #6                  // Method java/lang/String."<init>":(Ljava/lang/String;)V
16: invokevirtual #7                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
19: new           #4                  // class java/lang/String
22: dup
23: ldc           #8                  // String 三妹
25: invokespecial #6                  // Method java/lang/String."<init>":(Ljava/lang/String;)V
28: invokevirtual #7                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
31: invokevirtual #9                  // Method java/lang/StringBuilder.toString:()Ljava/lang/String;
34: areturn
```

<font style="color:rgb(44, 62, 80);">可以看到 Java 编译器将字符串拼接操作（</font>`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);">）转换为了 StringBuilder 对象的 append 方法，然后再调用 StringBuilder 对象的 toString 方法返回拼接后的字符串。</font>

#### [<font style="color:rgb(44, 62, 80);">StringBuilder的内部实现</font>](https://javabetter.cn/string/builder-buffer.html#stringbuilder%E7%9A%84%E5%86%85%E9%83%A8%E5%AE%9E%E7%8E%B0)

<font style="color:rgb(44, 62, 80);">来看一下 StringBuilder 的 toString 方法：</font>

```plain
public String toString() {
    return new String(value, 0, count);
}
```

<font style="color:rgb(44, 62, 80);">value 是一个 char 类型的</font>[<font style="color:rgb(44, 62, 80);">数组</font>](https://javabetter.cn/array/array.html)<font style="color:rgb(44, 62, 80);">：</font>

```plain
/**
 * The value is used for character storage.
 */
char[] value;
```

<font style="color:rgb(44, 62, 80);">在 StringBuilder 对象创建时，会为 value 分配一定的内存空间（初始容量 16），用于存储字符串。</font>

```plain
/**
 * Constructs a string builder with no characters in it and an
 * initial capacity of 16 characters.
 */
public StringBuilder() {
    super(16);
}
```

<font style="color:rgb(44, 62, 80);">随着字符串的拼接，value 数组的长度会不断增加，因此在 StringBuilder 对象的实现中，value 数组的长度是可以</font>[<font style="color:rgb(44, 62, 80);">动态扩展的，就像ArrayList那样</font>](https://javabetter.cn/collection/arraylist.html)<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">继续来看 StringBuilder 的 toString 方法：</font>

```plain
public String toString() {
    return new String(value, 0, count);
}
```

<font style="color:rgb(44, 62, 80);">value 用于存储 StringBuilder 对象中包含的字符序列。count 是一个 int 类型的变量，表示字符序列的长度。toString() 方法会调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String(value, 0, count)</font>`<font style="color:rgb(44, 62, 80);">，使用 value 数组中从 0 开始的前 count 个元素创建一个新的字符串对象，并将其返回。</font>

<font style="color:rgb(44, 62, 80);">再来看一下 append 方法：</font>

```plain
public StringBuilder append(String str) {
    super.append(str);
    return this;
}
```

<font style="color:rgb(44, 62, 80);">实际上是调用了 AbstractStringBuilder 中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append(String str)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。在 AbstractStringBuilder 中，</font>`<font style="color:rgb(44, 62, 80);">append(String str)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法会检查当前字符序列中的字符是否够用，如果不够用则会进行扩容，并将指定字符串追加到字符序列的末尾。</font>

```plain
public AbstractStringBuilder append(String str) {
    if (str == null)
        return appendNull();
    int len = str.length();
    ensureCapacityInternal(count + len);
    str.getChars(0, len, value, count);
    count += len;
    return this;
}
```

`<font style="color:rgb(44, 62, 80);">append(String str)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将指定字符串追加到当前字符序列中。如果指定字符串为 null，则追加字符串 "null"；否则会检查指定字符串的长度，然后根据当前字符序列中的字符数和指定字符串的长度来判断是否需要扩容。</font>

<font style="color:rgb(44, 62, 80);">如果需要扩容，则会调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ensureCapacityInternal(int minimumCapacity)</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">方法。扩容之后，将指定字符串的字符拷贝到字符序列中。</font>

<font style="color:rgb(44, 62, 80);">来看一下 ensureCapacityInternal 方法：</font>

```plain
private void ensureCapacityInternal(int minimumCapacity) {
    // 不够用了，扩容
    if (minimumCapacity - value.length > 0)
        expandCapacity(minimumCapacity);
}

void expandCapacity(int minimumCapacity) {
    // 扩容策略：新容量为旧容量的两倍加上 2
    int newCapacity = value.length * 2 + 2;
    // 如果新容量小于指定的最小容量，则新容量为指定的最小容量
    if (newCapacity - minimumCapacity < 0)
        newCapacity = minimumCapacity;
    // 如果新容量小于 0，则新容量为 Integer.MAX_VALUE
    if (newCapacity < 0) {
        if (minimumCapacity < 0) // overflow
            throw new OutOfMemoryError();
        newCapacity = Integer.MAX_VALUE;
    }
    // 将字符序列的容量扩容到新容量的大小
    value = Arrays.copyOf(value, newCapacity);
}
```

`<font style="color:rgb(44, 62, 80);">ensureCapacityInternal(int minimumCapacity)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于确保当前字符序列的容量至少等于指定的最小容量 minimumCapacity。如果当前容量小于指定的容量，就会为字符序列分配一个新的内部数组。新容量的计算方式如下：</font>

+ <font style="color:rgb(44, 62, 80);">如果指定的最小容量大于当前容量，则新容量为两倍的旧容量加上 2。为什么要加 2 呢？对于非常小的字符串（比如空的或只有一个字符的 StringBuilder），仅仅将容量加倍可能仍然不足以容纳更多的字符。在这种情况下，+ 2 提供了一个最小的增长量，确保即使对于很小的初始容量，扩容后也能至少添加一些字符而不需要立即再次扩容。</font>
+ <font style="color:rgb(44, 62, 80);">如果指定的最小容量小于等于当前容量，则不会进行扩容，直接返回当前对象。</font>

<font style="color:rgb(44, 62, 80);">在进行扩容之前，</font>`<font style="color:rgb(44, 62, 80);">ensureCapacityInternal(int minimumCapacity)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法会先检查当前字符序列的容量是否足够，如果不足就会调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">expandCapacity(int minimumCapacity)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法进行扩容。</font>`<font style="color:rgb(44, 62, 80);">expandCapacity(int minimumCapacity)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法首先计算出新容量，然后使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Arrays.copyOf(char[] original, int newLength)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将原字符数组扩容到新容量的大小。</font>

+ [<font style="color:rgb(102, 102, 102);">Arrays</font>](https://javabetter.cn/common-tool/arrays.html)<font style="color:rgb(102, 102, 102);"> </font><font style="color:rgb(102, 102, 102);">是 Java 中用于操作数组的工具类，后面也会讲到。</font>
+ <font style="color:rgb(102, 102, 102);">关于扩容，后面在讲</font>[<font style="color:rgb(102, 102, 102);">ArrayList</font>](https://javabetter.cn/collection/arraylist.html)<font style="color:rgb(102, 102, 102);">的时候会再次说明，到时候你可以回头对比来看一下，因为 ArrayList 底部实现也是数组。</font>

#### [<font style="color:rgb(44, 62, 80);">StringBuilder的 reverse 方法</font>](https://javabetter.cn/string/builder-buffer.html#stringbuilder%E7%9A%84-reverse-%E6%96%B9%E6%B3%95)

<font style="color:rgb(44, 62, 80);">StringBuilder 还提供了一个 reverse 方法，用于反转当前字符序列中的字符。</font>

```plain
public StringBuilder reverse() {
    super.reverse();
    return this;
}
```

<font style="color:rgb(44, 62, 80);">也是调用了父类 AbstractStringBuilder 中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">reverse()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，我把一些非核心代码剔除掉了。</font>

```plain
public AbstractStringBuilder reverse() {
    int n = count - 1; // 字符序列的最后一个字符的索引
    // 遍历字符串的前半部分
    for (int j = (n-1) >> 1; j >= 0; j--) {
        int k = n - j; // 计算相对于 j 对称的字符的索引
        char cj = value[j]; // 获取当前位置的字符
        char ck = value[k]; // 获取对称位置的字符
        value[j] = ck; // 交换字符
        value[k] = cj; // 交换字符
    }
    return this; // 返回反转后的字符串构建器对象
}
```

1. **<font style="color:rgb(44, 62, 80);">初始化</font>**<font style="color:rgb(44, 62, 80);">：</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">n</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是字符串中最后一个字符的索引。</font>
2. **<font style="color:rgb(44, 62, 80);">字符串反转</font>**<font style="color:rgb(44, 62, 80);">：</font>
    - <font style="color:rgb(44, 62, 80);">方法通过一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">for</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">循环遍历字符串的前半部分和后半部分，这是一个非常巧妙的点，比从头到尾遍历省了一半的时间。</font>`<font style="color:rgb(44, 62, 80);">(n-1) >> 1</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">(n-1) / 2</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的位运算表示，也就是字符串的前半部分的最后一个字符的索引。</font>
    - <font style="color:rgb(44, 62, 80);">在每次迭代中，计算出与当前索引</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">j</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">对称的索引</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">k</font>`<font style="color:rgb(44, 62, 80);">，并交换这两个索引位置的字符。</font>

<font style="color:rgb(44, 62, 80);">LeetCode 的第 7 题《</font>[<font style="color:rgb(44, 62, 80);">007.整数反转</font>](https://leetcode-cn.com/problems/reverse-integer/)<font style="color:rgb(44, 62, 80);">》要求我们反转一个整数，其实就可以借助 StringBuilder 的 reverse 方法来实现。</font>

<font style="color:rgb(102, 102, 102);">题解放在了</font>[<font style="color:rgb(102, 102, 102);">技术派</font>](https://paicoding.com/column/7/7)<font style="color:rgb(102, 102, 102);">上，可以参考。</font>

#### [<font style="color:rgb(44, 62, 80);">小结</font>](https://javabetter.cn/string/builder-buffer.html#%E5%B0%8F%E7%BB%93)

<font style="color:rgb(44, 62, 80);">“我想，关于 StringBuilder、StringBuilder 之间的差别，你都搞清楚了吧？”我问。</font>

<font style="color:rgb(44, 62, 80);">“搞清楚的话，可以通过 LeetCode 的第六题《006.Z 字形变换》进行测试，我把题解放在了</font>[<font style="color:rgb(44, 62, 80);">技术派</font>](https://paicoding.com/column/7/6)<font style="color:rgb(44, 62, 80);">上，你可以作为参考。”</font>

<font style="color:rgb(44, 62, 80);">“哥，你真棒！区别我是搞清楚了，你后面讲的源码扩容还没消化，我一会去加个餐，再细看一下。”三妹说。</font>

<font style="color:rgb(44, 62, 80);">“可以的，实际上，你现在只需要知道 StringBuilder 的用法就可以了。”喝了一口右手边的可口可乐（无糖）后，我感觉好爽快啊。</font>

---

<font style="color:rgb(44, 62, 80);">GitHub 上标星 10000+ 的开源知识库《</font>[<font style="color:rgb(44, 62, 80);">二哥的 Java 进阶之路</font>](https://github.com/itwanger/toBeBetterJavaer)<font style="color:rgb(44, 62, 80);">》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：</font>[<font style="color:rgb(44, 62, 80);">太赞了，GitHub 上标星 10000+ 的 Java 教程</font>](https://javabetter.cn/overview/)

<font style="color:rgb(44, 62, 80);"></font>

### <font style="color:rgb(44, 62, 80);">字符串相等判断：Java中的equals()与==的区别与用法</font>

---

<font style="color:rgb(44, 62, 80);">“二哥，如何比较两个字符串相等啊？”三妹问。</font>

<font style="color:rgb(44, 62, 80);">“这个问题看似简单，却在 Stack Overflow 上有超过 370 万+的访问量。”我说，“这个问题也可以引申为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和 ‘==’ 操作符有什么区别。”</font>

+ <font style="color:rgb(44, 62, 80);">“==”操作符用于比较两个对象的地址是否相等。</font>
+ `<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于比较两个对象的内容是否相等。</font>

<font style="color:rgb(44, 62, 80);">“不是很理解。”三妹感到很困惑。</font>

<font style="color:rgb(44, 62, 80);">“我来举个不恰当又很恰当的例子，一看你就明白了，三妹。”</font>

<font style="color:rgb(44, 62, 80);">有一对双胞胎，姐姐叫阿丽塔，妹妹叫洛丽塔。我们普通人可能完全无法分辨谁是姐姐谁是妹妹，可她们的妈妈却可以轻而易举地辨认出。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660586531-1f59be1c-47a2-46c9-9087-ac8626cbd2ac.png" />


`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">就好像我们普通人，看见阿丽塔以为是洛丽塔，看见洛丽塔以为是阿丽塔，看起来一样就觉得她们是同一个人；“==”操作符就好像她们的妈妈，要求更严格，观察更细致，一眼就能分辨出谁是姐姐谁是妹妹。</font>

```plain
String alita = new String("小萝莉");
String luolita = new String("小萝莉");

System.out.println(alita.equals(luolita)); // true
System.out.println(alita == luolita); // false
```

<font style="color:rgb(44, 62, 80);">就上面这段代码来说，</font>`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">输出的结果为 true，而“==”操作符输出的结果为 false——前者要求内容相等就可以，后者要求必须是同一个对象。</font>

<font style="color:rgb(44, 62, 80);">“三妹，之前已经学过了，Java 的所有类都默认地继承 Object 这个超类，该类有一个名为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的方法。”一边说，我一边打开了 Object 类的源码。</font>

```plain
public boolean equals(Object obj) {
    return (this == obj);
}
```

<font style="color:rgb(44, 62, 80);">你看，Object 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法默认采用的是“</font><font style="color:rgb(44, 62, 80);">”操作符进行比较。假如子类没有重写该方法的话，那么“</font><font style="color:rgb(44, 62, 80);">”操作符和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的功效就完全一样——比较两个对象的内存地址是否相等。</font>

<font style="color:rgb(44, 62, 80);">但实际情况中，有不少类重写了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，因为比较内存地址的要求比较严格，不太符合现实中所有的场景需求。拿 String 类来说，我们在比较字符串的时候，的确只想判断它们俩的内容是相等的就可以了，并不想比较它们俩是不是同一个对象。</font>

<font style="color:rgb(44, 62, 80);">况且，字符串有</font>[<font style="color:rgb(44, 62, 80);">字符串常量池</font>](https://javabetter.cn/string/constant-pool.html)<font style="color:rgb(44, 62, 80);">的概念，本身就推荐使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String s = "字符串"</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这种形式来创建字符串对象，而不是通过 new 关键字的方式，因为可以把字符串缓存在字符串常量池中，方便下次使用，不用遇到 new 就在堆上开辟一块新的空间。</font>

<font style="color:rgb(44, 62, 80);">“哦，我明白了。”三妹说。</font>

<font style="color:rgb(44, 62, 80);">“那就来看一下 String 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码吧。”我说。</font>

```plain
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String aString = (String)anObject;
        if (coder() == aString.coder()) {
            return isLatin1() ? StringLatin1.equals(value, aString.value)
                    : StringUTF16.equals(value, aString.value);
        }
    }
    return false;
}
```

<font style="color:rgb(44, 62, 80);">首先，如果两个字符串对象的可以“==”，那就直接返回 true 了，因为这种情况下，字符串内容是必然相等的。否则就按照字符编码进行比较，分为 UTF16 和 Latin1，差别不是很大，就拿 Latin1 的来说吧。</font>

```plain
@HotSpotIntrinsicCandidate
public static boolean equals(byte[] value, byte[] other) {
    if (value.length == other.length) {
        for (int i = 0; i < value.length; i++) {
            if (value[i] != other[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}
```

<font style="color:rgb(44, 62, 80);">这个 JDK 版本是 Java 17，也就是最新的 LTS（长期支持）版本。该版本中，String 类使用字节数组实现的，所以比较两个字符串的内容是否相等时，可以先比较字节数组的长度是否相等，不相等就直接返回 false；否则就遍历两个字符串的字节数组，只有有一个字节不相等，就返回 false。</font>

<font style="color:rgb(44, 62, 80);">这是 Java 8 中的 equals 方法源码：</font>

```plain
public boolean equals(Object anObject) {
    // 判断是否为同一对象
    if (this == anObject) {
        return true;
    }
    // 判断对象是否为 String 类型
    if (anObject instanceof String) {
        String anotherString = (String)anObject;
        int n = value.length;
        // 判断字符串长度是否相等
        if (n == anotherString.value.length) {
            char v1[] = value;
            char v2[] = anotherString.value;
            int i = 0;
            // 判断每个字符是否相等
            while (n-- != 0) {
                if (v1[i] != v2[i])
                    return false;
                i++;
            }
            return true;
        }
    }
    return false;
}
```

<font style="color:rgb(44, 62, 80);">JDK 8 比 JDK 17 更容易懂一些：首先判断两个对象是否为同一个对象，如果是，则返回 true。接着，判断对象是否为 String 类型，如果不是，则返回 false。如果对象为 String 类型，则比较两个字符串的长度是否相等，如果长度不相等，则返回 false。如果长度相等，则逐个比较每个字符是否相等，如果都相等，则返回 true，否则返回 false。</font>

<font style="color:rgb(44, 62, 80);">“嗯，二哥，这段源码不难理解。”三妹自信地说。</font>

<font style="color:rgb(44, 62, 80);">“那出几道题考考你吧！”我说。</font>

<font style="color:rgb(44, 62, 80);">第一题：</font>

```plain
new String("小萝莉").equals("小萝莉")
```

<font style="color:rgb(44, 62, 80);">“输出什么呢？”我问。</font>

<font style="color:rgb(44, 62, 80);">“</font>`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">比较的是两个字符串对象的内容是否相等，所以结果为 true。”三妹不假思索地答到。</font>

<font style="color:rgb(44, 62, 80);">第二题：</font>

```plain
new String("小萝莉") == "小萝莉"
```

<font style="color:rgb(44, 62, 80);">“==操作符左侧的是在堆中创建的对象，右侧是在字符串常量池中的对象，尽管内容相同，但内存地址不同，所以返回 false。”三妹答。</font>

<font style="color:rgb(44, 62, 80);">第三题：</font>

```plain
new String("小萝莉") == new String("小萝莉")
```

<font style="color:rgb(44, 62, 80);">“new 出来的对象肯定是完全不同的内存地址，所以返回 false。”三妹答。</font>

<font style="color:rgb(44, 62, 80);">第四题：</font>

```plain
"小萝莉" == "小萝莉"
```

<font style="color:rgb(44, 62, 80);">“字符串常量池中只会有一个相同内容的对象，所以返回 true。”三妹答。</font>

<font style="color:rgb(44, 62, 80);">第五题：</font>

```plain
"小萝莉" == "小" + "萝莉"
```

<font style="color:rgb(44, 62, 80);">“由于‘小’和‘萝莉’都在字符串常量池，所以编译器在遇到‘+’操作符的时候将其自动优化为“小萝莉”，所以返回 true。”</font>

<font style="color:rgb(44, 62, 80);">PS：至于为什么，查看这篇</font>[<font style="color:rgb(44, 62, 80);">String、StringBuilder、StringBuffer</font>](https://javabetter.cn/string/builder-buffer.html)

<font style="color:rgb(44, 62, 80);">第六题：</font>

```plain
new String("小萝莉").intern() == "小萝莉"
```

<font style="color:rgb(44, 62, 80);">“</font>`<font style="color:rgb(44, 62, 80);">new String("小萝莉")</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">在执行的时候，会先在字符串常量池中创建对象，然后再在堆中创建对象；执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">intern()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的时候发现字符串常量池中已经有了‘小萝莉’这个对象，所以就直接返回字符串常量池中的对象引用了，那再与字符串常量池中的‘小萝莉’比较，当然会返回 true 了。”三妹说。</font>

<font style="color:rgb(44, 62, 80);">PS：</font>[<font style="color:rgb(44, 62, 80);">intern</font>](https://javabetter.cn/string/intern.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法我们之前已经深究过了。</font>

<font style="color:rgb(44, 62, 80);">哇，不得不说，三妹前几节的字符串相关内容都完全学会了呀！</font>

<font style="color:rgb(44, 62, 80);">“三妹，哥再给你补充一点。”我说。</font>

<font style="color:rgb(44, 62, 80);">“如果要进行两个字符串对象的内容比较，除了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，还有其他两个可选的方案。”</font>

<font style="color:rgb(44, 62, 80);">1）</font>`<font style="color:rgb(44, 62, 80);">Objects.equals()</font>`

`<font style="color:rgb(44, 62, 80);">Objects.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这个静态方法的优势在于不需要在调用之前判空。</font>

```plain
public static boolean equals(Object a, Object b) {
    return (a == b) || (a != null && a.equals(b));
}
```

<font style="color:rgb(44, 62, 80);">如果直接使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">a.equals(b)</font>`<font style="color:rgb(44, 62, 80);">，则需要在调用之前对 a 进行判空，否则可能会抛出空指针</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">java.lang.NullPointerException</font>`<font style="color:rgb(44, 62, 80);">。</font>`<font style="color:rgb(44, 62, 80);">Objects.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">用起来就完全没有这个担心。</font>

```plain
Objects.equals("小萝莉", new String("小" + "萝莉")) // --> true
Objects.equals(null, new String("小" + "萝莉")); // --> false
Objects.equals(null, null) // --> true

String a = null;
a.equals(new String("小" + "萝莉")); // throw exception
```

<font style="color:rgb(44, 62, 80);">2）String 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.contentEquals()</font>`

`<font style="color:rgb(44, 62, 80);">.contentEquals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的优势在于可以将字符串与任何的字符序列（StringBuffer、StringBuilder、String、CharSequence）进行比较。</font>

```plain
public boolean contentEquals(CharSequence cs) {
    // Argument is a StringBuffer, StringBuilder
    if (cs instanceof AbstractStringBuilder) {
        if (cs instanceof StringBuffer) {
            synchronized(cs) {
                return nonSyncContentEquals((AbstractStringBuilder)cs);
            }
        } else {
            return nonSyncContentEquals((AbstractStringBuilder)cs);
        }
    }
    // Argument is a String
    if (cs instanceof String) {
        return equals(cs);
    }
    // Argument is a generic CharSequence
    int n = cs.length();
    if (n != length()) {
        return false;
    }
    byte[] val = this.value;
    if (isLatin1()) {
        for (int i = 0; i < n; i++) {
            if ((val[i] & 0xff) != cs.charAt(i)) {
                return false;
            }
        }
    } else {
        if (!StringUTF16.contentEquals(val, cs, n)) {
            return false;
        }
    }
    return true;
}
```

<font style="color:rgb(44, 62, 80);">从源码上可以看得出，如果 cs 是 StringBuffer，该方法还会进行同步，非常的智能化；如果是 String 的话，其实调用的还是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。当然了，这也就意味着使用该方法进行比较的时候，多出来了很多步骤，性能上有些损失。</font>

<font style="color:rgb(44, 62, 80);">同样来看一下 JDK 8 的源码：</font>

```plain
public boolean contentEquals(CharSequence cs) {
    // argument can be any CharSequence implementation
    if (cs.length() != value.length) {
        return false;
    }
    // Argument is a StringBuffer, StringBuilder or String
    if (cs instanceof AbstractStringBuilder) {
        char v1[] = value;
        char v2[] = ((AbstractStringBuilder)cs).getValue();
        int i = 0;
        int n = value.length;
        while (n-- != 0) {
            if (v1[i] != v2[i])
                return false;
            i++;
        }
        return true;
    }
    // Argument is a String
    if (cs.equals(this))
        return true;
    // Argument is a non-String, non-AbstractStringBuilder CharSequence
    char v1[] = value;
    int i = 0;
    int n = value.length;
    while (n-- != 0) {
        if (v1[i] != cs.charAt(i))
            return false;
        i++;
    }
    return true;
}
```

<font style="color:rgb(44, 62, 80);">同样更容易理解一些：首先判断参数长度是否相等，不相等则返回 false。如果参数是 AbstractStringBuilder 的实例，则取出其 char 数组，遍历比较两个 char 数组的每个元素是否相等。如果参数是 String 的实例，则直接调用 equals 方法比较两个字符串是否相等。如果参数是其他实现了 CharSequence 接口的对象，则遍历比较两个对象的每个字符是否相等。</font>

<font style="color:rgb(44, 62, 80);">“是的，总体上感觉还是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Objects.equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">比较舒服。”三妹的眼睛是雪亮的，发现了这个方法的优点。</font>

<font style="color:rgb(44, 62, 80);">  
</font><font style="color:rgb(44, 62, 80);"> </font>

### <font style="color:rgb(44, 62, 80);">最优雅的Java字符串String拼接是哪种方式？</font>

---

**<font style="color:rgb(44, 62, 80);">此页内容</font>**

<font style="color:rgb(44, 62, 80);">“哥，你让我看的《</font>[<font style="color:rgb(44, 62, 80);">Java 开发手册</font>](https://javabetter.cn/pdf/ali-java-shouce.html)<font style="color:rgb(44, 62, 80);">》上有这么一段内容：循环体内，拼接字符串最好使用 StringBuilder 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，而不是 + 号操作符。这是为什么呀？”三妹疑惑地问。</font>

<font style="color:rgb(44, 62, 80);">“其实这个问题，我们之前在</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">StringBuilder</font>](https://javabetter.cn/string/builder-buffer.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">时已经聊过了。”我慢吞吞地回答道，“不过，三妹，哥今天来给你深入地讲讲。”</font>

<font style="color:rgb(44, 62, 80);">PS：三妹能在学习的过程中不断地发现问题，让我感到非常的开心。其实很多时候，我们不应该只是把知识点记在心里，还应该问一问自己，到底是为什么，只有迈出去这一步，才能真正的成长起来。</font>

#### [<font style="color:rgb(44, 62, 80);">+号操作符的本质</font>](https://javabetter.cn/string/join.html#%E5%8F%B7%E6%93%8D%E4%BD%9C%E7%AC%A6%E7%9A%84%E6%9C%AC%E8%B4%A8)

<font style="color:rgb(44, 62, 80);">“+ 号操作符其实被 Java 在编译的时候重新解释了，换一种说法就是，+ 号操作符是一种语法糖，让字符串的拼接变得更简便了。”一边给三妹解释，我一边在 Intellij IDEA 中敲出了下面这段代码。</font>

```plain
class Demo {
    public static void main(String[] args) {
        String chenmo = "沉默";
        String wanger = "王二";
        System.out.println(chenmo + wanger);
    }
}
```

<font style="color:rgb(44, 62, 80);">在 Java 8 的环境下，使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">javap -c Demo.class</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">反编译</font>[<font style="color:rgb(44, 62, 80);">字节码</font>](https://javabetter.cn/jvm/bytecode.html)<font style="color:rgb(44, 62, 80);">后（字节码和 javap 我们会在 JVM 中详细讲，这里可以硬着头皮瞄一眼），可以看到以下内容：</font>

```plain
Compiled from "Demo.java"
class Demo {
  Demo();
    Code:
       0: aload_0
       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
       4: return

  public static void main(java.lang.String[]);
    Code:
       0: ldc           #2                  // String 沉默
       2: astore_1
       3: ldc           #3                  // String 王二
       5: astore_2
       6: getstatic     #4                  // Field java/lang/System.out:Ljava/io/PrintStream;
       9: new           #5                  // class java/lang/StringBuilder
      12: dup
      13: invokespecial #6                  // Method java/lang/StringBuilder."<init>":()V
      16: aload_1
      17: invokevirtual #7                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
      20: aload_2
      21: invokevirtual #7                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
      24: invokevirtual #8                  // Method java/lang/StringBuilder.toString:()Ljava/lang/String;
      27: invokevirtual #9                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
      30: return
}
```

<font style="color:rgb(44, 62, 80);">（如果你之前没有了解过</font>[<font style="color:rgb(44, 62, 80);">字节码指令</font>](https://javabetter.cn/jvm/zijiema-zhiling.html)<font style="color:rgb(44, 62, 80);">，可能会有一点压力，不过，不用担心，我们稍微解释一下就懂了）</font>

<font style="color:rgb(44, 62, 80);">“你看，三妹，这里有一个 new 关键字，并且 class 类型为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">java/lang/StringBuilder</font>`<font style="color:rgb(44, 62, 80);">。”我指着标号为 9 的那行对三妹说，“这意味着新建了一个 StringBuilder 的对象。”</font>

<font style="color:rgb(44, 62, 80);">“然后看标号为 17 的这行，是一个 invokevirtual 指令，用于调用对象的方法，也就是 StringBuilder 对象的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。”</font>

<font style="color:rgb(44, 62, 80);">“也就意味着把 chenmo（"沉默"）这个字符串添加到 StringBuilder 对象中了。”</font>

<font style="color:rgb(44, 62, 80);">“再往下看，标号为 21 的这行，又调用了一次</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，意味着把 wanger（"王二"）这个字符串添加到 StringBuilder 对象中了。”</font>

<font style="color:rgb(44, 62, 80);">换成 Java 代码来表示的话，大概是这个样子：</font>

```plain
class Demo {
    public static void main(String[] args) {
        String chenmo = "沉默";
        String wanger = "王二";
        System.out.println((new StringBuilder(chenmo)).append(wanger).toString());
    }
}
```

<font style="color:rgb(44, 62, 80);">“哦，原来编译的时候把“+”号操作符替换成了 StringBuilder 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法啊。”三妹恍然大悟。</font>

<font style="color:rgb(44, 62, 80);">“是的，不过到了 Java 9（不是长期支持版本，所以我会拿 Java 11 来演示），情况发生了一些改变，同样的代码，字节码指令完全不同了。”我说。</font>

<font style="color:rgb(44, 62, 80);">同样的代码，在 Java 11 的环境下，字节码指令是这样的：</font>

```plain
Compiled from "Demo.java"
public class com.itwanger.thirtyseven.Demo {
  public com.itwanger.thirtyseven.Demo();
    Code:
       0: aload_0
       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
       4: return

  public static void main(java.lang.String[]);
    Code:
       0: ldc           #2                  // String
       2: astore_1
       3: iconst_0
       4: istore_2
       5: iload_2
       6: bipush        10
       8: if_icmpge     41
      11: new           #3                  // class java/lang/String
      14: dup
      15: ldc           #4                  // String 沉默
      17: invokespecial #5                  // Method java/lang/String."<init>":(Ljava/lang/String;)V
      20: astore_3
      21: ldc           #6                  // String 王二
      23: astore        4
      25: aload_1
      26: aload_3
      27: aload         4
      29: invokedynamic #7,  0              // InvokeDynamic #0:makeConcatWithConstants:(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
      34: astore_1
      35: iinc          2, 1
      38: goto          5
      41: return
}
```

<font style="color:rgb(44, 62, 80);">看标号为 29 的这行，字节码指令为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">invokedynamic</font>`<font style="color:rgb(44, 62, 80);">，该指令允许由应用级的代码来决定方法解析，所谓的应用级的代码其实是一个方法——被称为引导方法（Bootstrap Method），简称 BSM，BSM 会返回一个 CallSite（调用点） 对象，这个对象就和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">invokedynamic</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">指令链接在一起。以后再执行这条</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">invokedynamic</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">指令时就不会创建新的 CallSite 对象。CallSite 其实就是一个 MethodHandle（方法句柄）的 holder，指向一个调用点真正执行的方法——此时就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">StringConcatFactory.makeConcatWithConstants()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

<font style="color:rgb(44, 62, 80);">“哥，你别再说了，再说我就听不懂了。”三妹打断了我的话。</font>

<font style="color:rgb(44, 62, 80);">“好吧，总之就是 Java 9 以后，JDK 用了另外一种方法来动态解释 + 号操作符，具体的实现方式在字节码指令层面已经看不到了，所以我就以 Java 8 来继续讲解吧。”</font>

<font style="color:rgb(44, 62, 80);">这里我们再多讲一点，如果是下面这段代码：</font>

```plain
class StringConcat {
    public static void main(String[] args) {
        int i = 11;
        String s = i + "";
        System.out.println(s);
    }
}
```

`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">号操作符又是如何完成拼接呢？</font>

<font style="color:rgb(44, 62, 80);">同样可以来通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">javap -c StringConcat</font>`<font style="color:rgb(44, 62, 80);">看一下字节码指令：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660602042-74f849e4-c17a-4758-93ea-462505ad3551.png" />


<font style="color:rgb(44, 62, 80);">从上图中可以看到，</font>`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">号操作符被编译成了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">StringBuilder</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

<font style="color:rgb(44, 62, 80);">那如果是这样的代码：</font>

```plain
class StringConcat1 {
    public static void main(String[] args) {
        String s = 11 + "";
        System.out.println(s);
    }
}
```

`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">号操作符又是如何完成拼接呢？</font>

<font style="color:rgb(44, 62, 80);">同样可以来通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">javap -c StringConcat1</font>`<font style="color:rgb(44, 62, 80);">看一下字节码指令：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660601876-96ea4523-bc32-4acb-b1ed-1c490f3bcb35.png" />


<font style="color:rgb(44, 62, 80);">StringBuilder 不见了？这是为什么呢？</font>

<font style="color:rgb(44, 62, 80);">这是因为 + 连接操作的两个操作数都是编译时常量（一个是字面量整数 11，另一个是空字符串 ""），所以编译器能够在编译时就完成这个字符串连接操作。</font>

<font style="color:rgb(44, 62, 80);">也就是说，字符串连接 11 + "" 被编译器优化处理了，编译器在编译阶段就将其解析为了字符串常量 "11"。</font>

#### [<font style="color:rgb(44, 62, 80);">为什么要编译为 StringBuilder.append</font>](https://javabetter.cn/string/join.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BC%96%E8%AF%91%E4%B8%BA-stringbuilder-append)

<font style="color:rgb(44, 62, 80);">“再回到《</font>[<font style="color:rgb(44, 62, 80);">Java 开发手册</font>](https://javabetter.cn/pdf/ali-java-shouce.html)<font style="color:rgb(44, 62, 80);">》上的那段内容：</font>

**<font style="color:rgb(44, 62, 80);">循环体内，拼接字符串最好使用 StringBuilder 的</font>****<font style="color:rgb(44, 62, 80);"> </font>**`**<font style="color:rgb(44, 62, 80);">append()</font>**`**<font style="color:rgb(44, 62, 80);"> </font>****<font style="color:rgb(44, 62, 80);">方法，而不是 + 号操作符</font>**<font style="color:rgb(44, 62, 80);">。原因就在于循环体内如果用 + 号操作符的话，就会产生大量的 StringBuilder 对象，不仅占用了更多的内存空间，还会让 Java 虚拟机不停的进行垃圾回收，从而降低了程序的性能。”</font>

<font style="color:rgb(44, 62, 80);">更好的写法就是在循环的外部新建一个 StringBuilder 对象，然后使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将循环体内的字符串添加进来：</font>

```plain
class Demo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i < 10; i++) {
            String chenmo = "沉默";
            String wanger = "王二";
            sb.append(chenmo);
            sb.append(wanger);
        }
        System.out.println(sb);
    }
}
```

<font style="color:rgb(44, 62, 80);">来做个小测试。</font>

<font style="color:rgb(44, 62, 80);">第一个，for 循环中使用”+”号操作符。</font>

```plain
String result = "";
for (int i = 0; i < 100000; i++) {
    result += "六六六";
}
```

<font style="color:rgb(44, 62, 80);">第二个，for 循环外部新建 StringBuilder，循环体内使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

```plain
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 100000; i++) {
    sb.append("六六六");
}
```

<font style="color:rgb(44, 62, 80);">“这两个小测试分别会耗时多长时间呢？三妹你来运行下。”</font>

<font style="color:rgb(44, 62, 80);">“哇，第一个小测试的执行时间是 6212 毫秒，第二个只用了不到 1 毫秒，差距也太大了吧！”三妹说。</font>

<font style="color:rgb(44, 62, 80);">“是的，这下明白了原因吧？”我说。</font>

<font style="color:rgb(44, 62, 80);">“是的，哥，原来如此。”</font>

#### [<font style="color:rgb(44, 62, 80);">append方法源码解析</font>](https://javabetter.cn/string/join.html#append%E6%96%B9%E6%B3%95%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90)

<font style="color:rgb(44, 62, 80);">“好了，三妹，来看一下 StringBuilder 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码吧！”</font>

```plain
public StringBuilder append(String str) {
    super.append(str);
    return this;
}
```

<font style="color:rgb(44, 62, 80);">这 3 行代码其实没啥看的。我们来看父类 AbstractStringBuilder 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法：</font>

```plain
public AbstractStringBuilder append(String str) {
    if (str == null)
        return appendNull();
    int len = str.length();
    ensureCapacityInternal(count + len);
    str.getChars(0, len, value, count);
    count += len;
    return this;
}
```

<font style="color:rgb(44, 62, 80);">1）判断拼接的字符串是不是 null，如果是，当做字符串“null”来处理。</font>`<font style="color:rgb(44, 62, 80);">appendNull()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码如下：</font>

```plain
private AbstractStringBuilder appendNull() {
    int c = count;
    ensureCapacityInternal(c + 4);
    final char[] value = this.value;
    value[c++] = 'n';
    value[c++] = 'u';
    value[c++] = 'l';
    value[c++] = 'l';
    count = c;
    return this;
}
```

<font style="color:rgb(44, 62, 80);">2）获取字符串的长度。</font>

<font style="color:rgb(44, 62, 80);">3）</font>`<font style="color:rgb(44, 62, 80);">ensureCapacityInternal()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码如下：</font>

```plain
private void ensureCapacityInternal(int minimumCapacity) {
    // overflow-conscious code
    if (minimumCapacity - value.length > 0) {
        value = Arrays.copyOf(value,
                newCapacity(minimumCapacity));
    }
}
```

<font style="color:rgb(44, 62, 80);">由于字符串内部是用</font>[<font style="color:rgb(44, 62, 80);">数组</font>](https://javabetter.cn/array/array.html)<font style="color:rgb(44, 62, 80);">实现的，所以需要先判断拼接后的字符数组长度是否超过当前数组的长度，如果超过，先对数组进行扩容，然后把原有的值复制到新的数组中。</font>

<font style="color:rgb(44, 62, 80);">4）将拼接的字符串 str 复制到目标数组 value 中。</font>

```plain
str.getChars(0, len, value, count)
```

<font style="color:rgb(44, 62, 80);">5）更新数组的长度 count。</font>

#### [<font style="color:rgb(44, 62, 80);">String.concat 拼接字符串</font>](https://javabetter.cn/string/join.html#string-concat-%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2)

<font style="color:rgb(44, 62, 80);">“除了可以使用 + 号操作符，StringBuilder 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，还有其他的字符串拼接方法吗？”三妹问。</font>

<font style="color:rgb(44, 62, 80);">“有啊，比如说 String 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">concat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，有点像 StringBuilder 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">append()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。”</font>

```plain
String chenmo = "沉默";
String wanger = "王二";
System.out.println(chenmo.concat(wanger));
```

<font style="color:rgb(44, 62, 80);">可以来看一下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">concat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码。</font>

```plain
public String concat(String str) {
    int otherLen = str.length();
    if (otherLen == 0) {
        return this;
    }
    int len = value.length;
    char buf[] = Arrays.copyOf(value, len + otherLen);
    str.getChars(buf, len);
    return new String(buf, true);
}
```

<font style="color:rgb(44, 62, 80);">1）如果拼接的字符串的长度为 0，那么返回拼接前的字符串。</font>

<font style="color:rgb(44, 62, 80);">2）将原字符串的字符数组 value 复制到变量 buf 数组中。</font>

<font style="color:rgb(44, 62, 80);">3）把拼接的字符串 str 复制到字符数组 buf 中，并返回新的字符串对象。</font>

<font style="color:rgb(44, 62, 80);">我一行一行地给三妹解释着。</font>

<font style="color:rgb(44, 62, 80);">“和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">号操作符相比，</font>`<font style="color:rgb(44, 62, 80);">concat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法在遇到字符串为 null 的时候，会抛出 NullPointerException，而“+”号操作符会把 null 当做是“null”字符串来处理。”</font>

<font style="color:rgb(44, 62, 80);">如果拼接的字符串是一个空字符串（""），那么 concat 的效率要更高一点,毕竟不需要</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new StringBuilder</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">对象。</font>

<font style="color:rgb(44, 62, 80);">如果拼接的字符串非常多，</font>`<font style="color:rgb(44, 62, 80);">concat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的效率就会下降，因为创建的字符串对象越来越多。</font>

<font style="color:rgb(44, 62, 80);">“还有吗？”三妹似乎对字符串拼接很感兴趣。</font>

<font style="color:rgb(44, 62, 80);">“有，当然有。”</font>

#### [<font style="color:rgb(44, 62, 80);">String.join 拼接字符串</font>](https://javabetter.cn/string/join.html#string-join-%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2)

<font style="color:rgb(44, 62, 80);">String 类有一个静态方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">join()</font>`<font style="color:rgb(44, 62, 80);">，可以这样来使用。</font>

```plain
String chenmo = "沉默";
String wanger = "王二";
String cmower = String.join("", chenmo, wanger);
System.out.println(cmower);
```

<font style="color:rgb(44, 62, 80);">第一个参数为字符串连接符，比如说：</font>

```plain
String message = String.join("-", "王二", "太特么", "有趣了");
```

<font style="color:rgb(44, 62, 80);">输出结果为：</font>`<font style="color:rgb(44, 62, 80);">王二-太特么-有趣了</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">来看一下 join 方法的源码：</font>

```plain
public static String join(CharSequence delimiter, CharSequence... elements) {
    Objects.requireNonNull(delimiter);
    Objects.requireNonNull(elements);
    // Number of elements not likely worth Arrays.stream overhead.
    StringJoiner joiner = new StringJoiner(delimiter);
    for (CharSequence cs: elements) {
        joiner.add(cs);
    }
    return joiner.toString();
}
```

<font style="color:rgb(44, 62, 80);">里面新建了一个叫 StringJoiner 的对象，然后通过 for-each 循环把可变参数添加了进来，最后调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">toString()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法返回 String。</font>

#### [<font style="color:rgb(44, 62, 80);">StringUtils.join 拼接字符串</font>](https://javabetter.cn/string/join.html#stringutils-join-%E6%8B%BC%E6%8E%A5%E5%AD%97%E7%AC%A6%E4%B8%B2)

<font style="color:rgb(44, 62, 80);">“实际的工作中，</font>`<font style="color:rgb(44, 62, 80);">org.apache.commons.lang3.StringUtils</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">join()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法也经常用来进行字符串拼接。”</font>

```plain
String chenmo = "沉默";
String wanger = "王二";
StringUtils.join(chenmo, wanger);
```

<font style="color:rgb(44, 62, 80);">该方法不用担心 NullPointerException。</font>

```plain
StringUtils.join(null)            = null
StringUtils.join([])              = ""
StringUtils.join([null])          = ""
StringUtils.join(["a", "b", "c"]) = "abc"
StringUtils.join([null, "", "a"]) = "a"
```

<font style="color:rgb(44, 62, 80);">来看一下源码：</font>

```plain
public static String join(final Object[] array, String separator, final int startIndex, final int endIndex) {
    if (array == null) {
        return null;
    }
    if (separator == null) {
        separator = EMPTY;
    }

    final StringBuilder buf = new StringBuilder(noOfItems * 16);

    for (int i = startIndex; i < endIndex; i++) {
        if (i > startIndex) {
            buf.append(separator);
        }
        if (array[i] != null) {
            buf.append(array[i]);
        }
    }
    return buf.toString();
}
```

<font style="color:rgb(44, 62, 80);">内部使用的仍然是 StringBuilder。</font>

<font style="color:rgb(44, 62, 80);">“好了，三妹，关于字符串拼接的知识点我们就讲到这吧。注意 Java 9 以后，对 + 号操作符的解释和之前发生了变化，字节码指令已经不同了，等后面你学了</font>[<font style="color:rgb(44, 62, 80);">字节码指令</font>](https://javabetter.cn/jvm/zijiema-zhiling.html)<font style="color:rgb(44, 62, 80);">后我们再详细地讲一次。”我说。</font>

<font style="color:rgb(44, 62, 80);">“嗯，哥，你休息吧，我把这些例子再重新跑一遍。”三妹说。</font>

<font style="color:rgb(44, 62, 80);"></font>

### <font style="color:rgb(44, 62, 80);">如何在Java中拆分字符串：详解String类的split()方法</font>

---

<font style="color:rgb(44, 62, 80);">“哥，我感觉字符串拆分没什么可讲的呀，直接上 String 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">split()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法不就可以了！”三妹毫不客气地说。</font>

<font style="color:rgb(44, 62, 80);">“假如你真的这么觉得，那可要注意了，事情远没这么简单。”我微笑着说。</font>

<font style="color:rgb(44, 62, 80);">假如现在有这样一串字符序列“沉默王二，一枚有趣的程序员”，需要按照中文逗号“，”进行拆分，这意味着第一串字符序列为逗号前面的“沉默王二”，第二串字符序列为逗号后面的“一枚有趣的程序员”。</font>

<font style="color:rgb(44, 62, 80);">“这不等于没说吗？哥！”还没等我说，三妹就打断了我。</font>

<font style="color:rgb(44, 62, 80);">“别着急嘛，等哥说完。”我依然保持着微笑继续说，“在拆分之前，要先进行检查，判断一下这串字符是否包含逗号，否则应该抛出异常。”</font>

```plain
public class Test {
    public static void main(String[] args) {
        String cmower = "沉默王二，一枚有趣的程序员";
        if (cmower.contains("，")) {
            String [] parts = cmower.split("，");
            System.out.println("第一部分：" + parts[0] +" 第二部分：" + parts[1]);
        } else {
            throw new IllegalArgumentException("当前字符串没有包含逗号");
        }
    }
}
```

<font style="color:rgb(44, 62, 80);">“三妹你看，这段代码挺严谨的吧？”我说，“来看一下程序的输出结果。”</font>

```plain
第一部分：沉默王二 第二部分：一枚有趣的程序员
```

<font style="color:rgb(44, 62, 80);">“的确和预期完全一致。”三妹说。</font>

<font style="color:rgb(44, 62, 80);">“这是建立在字符串是确定的情况下，最重要的是分隔符是确定的。否则，麻烦就来了。”我说，“大约有 12 种英文特殊符号，如果直接拿这些特殊符号替换上面代码中的分隔符（中文逗号），这段程序在运行的时候就会出现以下提到的错误。”</font>

+ <font style="color:rgb(44, 62, 80);">反斜杠</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">\</font>`<font style="color:rgb(44, 62, 80);">（ArrayIndexOutOfBoundsException）</font>
+ <font style="color:rgb(44, 62, 80);">插入符号</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">^</font>`<font style="color:rgb(44, 62, 80);">（同上）</font>
+ <font style="color:rgb(44, 62, 80);">美元符号</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">$</font>`<font style="color:rgb(44, 62, 80);">（同上）</font>
+ <font style="color:rgb(44, 62, 80);">逗点</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.</font>`<font style="color:rgb(44, 62, 80);">（同上）</font>
+ <font style="color:rgb(44, 62, 80);">竖线</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">|</font>`<font style="color:rgb(44, 62, 80);">（正常，没有出错）</font>
+ <font style="color:rgb(44, 62, 80);">问号</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">?</font>`<font style="color:rgb(44, 62, 80);">（PatternSyntaxException）</font>
+ <font style="color:rgb(44, 62, 80);">星号</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">*</font>`<font style="color:rgb(44, 62, 80);">（同上）</font>
+ <font style="color:rgb(44, 62, 80);">加号</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">+</font>`<font style="color:rgb(44, 62, 80);">（同上）</font>
+ <font style="color:rgb(44, 62, 80);">左小括号或者右小括号</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">()</font>`<font style="color:rgb(44, 62, 80);">（同上）</font>
+ <font style="color:rgb(44, 62, 80);">左方括号或者右方括号</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">[]</font>`<font style="color:rgb(44, 62, 80);">（同上）</font>
+ <font style="color:rgb(44, 62, 80);">左大括号或者右大括号</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">{}</font>`<font style="color:rgb(44, 62, 80);">（同上）</font>

<font style="color:rgb(44, 62, 80);">“那遇到这些特殊符号该怎么办呢？”三妹问。</font>

<font style="color:rgb(44, 62, 80);">“用正则表达式。”我说，“正则表达式是一组由字母和符号组成的特殊文本，它可以用来从文本中找出满足你想要的格式的句子。”</font>

<font style="color:rgb(44, 62, 80);">我在 GitHub 上找打了一个开源的正则表达式学习文档，非常详细。一开始写正则表达式的时候难免会感觉到非常生疏，你可以查看一下这份文档。记不住没关系，遇到就查。</font>

[<font style="color:rgb(102, 102, 102);">https://github.com/cdoco/learn-regex-zh</font>](https://github.com/cdoco/learn-regex-zh)

<font style="color:rgb(44, 62, 80);">除了这份文档，还有一份：</font>

[<font style="color:rgb(102, 102, 102);">https://github.com/cdoco/common-regex</font>](https://github.com/cdoco/common-regex)

<font style="color:rgb(44, 62, 80);">作者收集了一些在平时项目开发中经常用到的正则表达式，可以直接拿来用。</font>

<font style="color:rgb(44, 62, 80);">“哥，你真周到。”三妹笑着说。</font>

<font style="color:rgb(44, 62, 80);">“好了，来用英文逗点</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">替换一下分隔符。”我说。</font>

```plain
String cmower = "沉默王二.一枚有趣的程序员";
if (cmower.contains(".")) {
    String [] parts = cmower.split("\\.");
    System.out.println("第一部分：" + parts[0] +" 第二部分：" + parts[1]);
}
```

<font style="color:rgb(44, 62, 80);">由于英文逗点属于特殊符号，所以在使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">split()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的时候，就需要使用正则表达式</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">\\.</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">而不能直接使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">.</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">“为什么用两个反斜杠呢？”三妹问。</font>

<font style="color:rgb(44, 62, 80);">“因为反斜杠本身就是一个特殊字符，需要用反斜杠来转义。”我说。</font>

<font style="color:rgb(44, 62, 80);">当然了，你也可以使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">[]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来包裹住英文逗点“.”，</font>`<font style="color:rgb(44, 62, 80);">[]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">也是一个正则表达式，用来匹配方括号中包含的任意字符。</font>

```plain
cmower.split("[.]");
```

<font style="color:rgb(44, 62, 80);">除此之外， 还可以使用 Pattern 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">quote()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法来包裹英文逗点“.”，该方法会返回一个使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">\Q\E</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">包裹的字符串。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660616460-6dd9f490-1ba1-492d-b0e4-eed9ee62a793.png" />


<font style="color:rgb(44, 62, 80);">来看示例：</font>

```plain
String [] parts = cmower.split(Pattern.quote("."));
```

<font style="color:rgb(44, 62, 80);">当</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">split()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的参数是正则表达式的时候，方法最终会执行下面这行代码：</font>

```plain
return Pattern.compile(regex).split(this, limit);
```

<font style="color:rgb(44, 62, 80);">也就意味着，拆分字符串有了新的选择，可以不使用 String 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">split()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，直接用下面的方式。</font>

```plain
public class TestPatternSplit {
    private static Pattern twopart = Pattern.compile("\\.");

    public static void main(String[] args) {
        String [] parts = twopart.split("沉默王二.一枚有趣的程序员");
        System.out.println("第一部分：" + parts[0] +" 第二部分：" + parts[1]);
    }
}
```

<font style="color:rgb(44, 62, 80);">“为什么要把 Pattern 表达式声明称 static 的呢？”三妹问。</font>

<font style="color:rgb(44, 62, 80);">“由于模式是确定的，通过 static 的预编译功能可以提高程序的效率。”我说，“除此之外，还可以使用 Pattern 配合 Matcher 类进行字符串拆分，这样做的好处是可以对要拆分的字符串进行一些严格的限制，来看这段示例代码。”</font>

```plain
public class TestPatternMatch {
    /**
     * 使用预编译功能，提高效率
     */
    private static Pattern twopart = Pattern.compile("(.+)\\.(.+)");

    public static void main(String[] args) {
        checkString("沉默王二.一枚有趣的程序员");
        checkString("沉默王二.");
        checkString(".一枚有趣的程序员");
    }

    private static void checkString(String str) {
        Matcher m = twopart.matcher(str);
        if (m.matches()) {
            System.out.println("第一部分：" + m.group(1) + " 第二部分：" + m.group(2));
        } else {
            System.out.println("不匹配");
        }
    }
}
```

<font style="color:rgb(44, 62, 80);">正则表达式</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">(.+)\\.(.+)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的意思是，不仅要把字符串按照英文标点的方式拆成两部分，并且英文逗点的前后要有内容。</font>

<font style="color:rgb(44, 62, 80);">来看一下程序的输出结果：</font>

```plain
第一部分：沉默王二 第二部分：一枚有趣的程序员
不匹配
不匹配
```

<font style="color:rgb(44, 62, 80);">不过，使用 Matcher 来匹配一些简单的字符串时相对比较沉重一些，使用 String 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">split()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">仍然是首选，因为该方法还有其他一些牛逼的功能。比如说，如果你想把分隔符包裹在拆分后的字符串的第一部分，可以这样做：</font>

```plain
String cmower = "沉默王二，一枚有趣的程序员";
if (cmower.contains("，")) {
    String [] parts = cmower.split("(?<=，)");
    System.out.println("第一部分：" + parts[0] +" 第二部分：" + parts[1]);
}
```

<font style="color:rgb(44, 62, 80);">程序输出的结果如下所示：</font>

```plain
第一部分：沉默王二， 第二部分：一枚有趣的程序员
```

<font style="color:rgb(44, 62, 80);">可以看到分隔符“，”包裹在了第一部分，如果希望包裹在第二部分，可以这样做：</font>

```plain
String [] parts = cmower.split("(?=，)");
```

<font style="color:rgb(44, 62, 80);">“</font>`<font style="color:rgb(44, 62, 80);">?<=</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">?=</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是什么东东啊？”三妹好奇地问。</font>

<font style="color:rgb(44, 62, 80);">“它其实是正则表达式中的断言模式。”我说，“你有时间的话，可以看看前面我推荐的两份开源文档。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660616446-61bdf300-b3e4-41a9-9139-4cb9d760725d.png" />


<font style="color:rgb(44, 62, 80);">“</font>`<font style="color:rgb(44, 62, 80);">split()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法可以传递 2 个参数，第一个为分隔符，第二个为拆分的字符串个数。”我说。</font>

```plain
String cmower = "沉默王二，一枚有趣的程序员，宠爱他";
if (cmower.contains("，")) {
    String [] parts = cmower.split("，", 2);
    System.out.println("第一部分：" + parts[0] +" 第二部分：" + parts[1]);
}
```

<font style="color:rgb(44, 62, 80);">进入 debug 模式的话，可以看到以下内容：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726660616657-0fa64ae0-87b4-40d1-a0d7-6c783ff9e1cd.png" />


<font style="color:rgb(44, 62, 80);">也就是说，传递 2 个参数的时候，会直接调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">substring()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">进行截取，第二个分隔符后的就不再拆分了。</font>

<font style="color:rgb(44, 62, 80);">来看一下程序输出的结果：</font>

```plain
第一部分：沉默王二 第二部分：一枚有趣的程序员，宠爱他
```

<font style="color:rgb(44, 62, 80);">“没想到啊，这个字符串拆分还挺讲究的呀！”三妹感慨地说。</font>

<font style="color:rgb(44, 62, 80);">“是的，其实字符串拆分在实际的工作当中还是挺经常用的。前端经常会按照规则传递一长串字符序列到后端，后端就需要按照规则把字符串拆分再做处理。”我说。</font>

<font style="color:rgb(44, 62, 80);">“嗯，我把今天的内容温习下，二哥，你休息会。”三妹说。</font>

<font style="color:rgb(44, 62, 80);"></font>

## [<font style="color:rgb(44, 62, 80);">小结</font>](https://javabetter.cn/string/string-source.html#%E5%B0%8F%E7%BB%93)

扩展底层原理1：字符串存储的内存原理  
●直接赋值会复用字符串常量池中的  
●new出来不会复用，而是开辟一个新的空间



扩展底层原理2：==号比较的到底是什么？  
●基本数据类型比较数据值  
●引用数据类型比较地址值



扩展底层原理3：字符串拼接的底层原理  
●如果没有变量参与，都是字符串直接相加，编译之后就是拼接之后的结果，会复用串池中的字符串。  
●如果有变量参与，会创建新的字符串，浪费内存。



扩展底层原理4：StringBuilder提高效率原理图  
●所有要拼接的内容都会往StringBuilder中放，不会创建很多无用的空间，节约内存



扩展底层原理5：StringBuilder源码分析  
●默认创建一个长度为16的字节数组。  
●添加的内容长度小于16，直接存。





### 

