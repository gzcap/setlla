---
title: 注释|关键字|字面量|变量|数据类型|标识符|运算符
date: 2024/09/28
tags:
  - 注释
  - 关键字
  - 字面量
  - 变量
  - 数据类型
  - 标识符
  - 运算符
categories:
  - Java
hideComments: false
---


## 1 注释(comment)

用于注解说明解释程序的文字（在程序指定位置添加的说明性文字），注释提高了代码的阅读性

简单的理解，就是对代码的一种解释，方便自已和他人阅读

### 1.1 单行注释

基本格式：`// 注释信息`

使用细节

+ 被注释的文字不会被JVM解释执行

### 1.2 多行注释

> /* 注释信息 */

使用细节

+ 被注释的文字不会被JVM解释执行
+ 多行注释里面不允许有多行注释嵌套

不能嵌套运行

```java
/*  wode  /*  nide mingzi */   */
```



### 1.3 文档注释

格式` /**  注释信息*/`

注释内容可以被 JDK 提供的工具 javadoc 所解析，生成一套以网页文件形式体现的该程序的说明文档，一般写在类

+ 基本格式

```java
/**
  * @author gzc
  * @version 1.0
  */
```

+ 如何生成对应的文档注释
+ 应用实例

```java
javadoc -d 文件夹名 -xx -yy [-encoding utf-8] Demo3.java
```


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1708524466101-0bdafbdd-dc6e-489a-a268-782694d7e014.png" />



<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1708524480172-dd151761-c46d-4bc8-864c-bee83500a4df.png" />


乱码的，还要在dos命令加上-encoding utf-8

+ javadoc标签


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1708524538418-de9e78c4-3071-4b88-8a81-713b3bca047e.png" />


注释不会影响代码运行结果

例子：

```java
public class knowledge {
	//叫做main方法，表示程序的主入口
	public static void main (String[] args) {
        /**叫做输出语句（打印语句）
		  *会把小括里面的内容进行输出打印
		  */
		System.out.println("hello world!!");
	}
}
```

Java代码规范

1.类、方法的注释，要以 javadoc 的方式来写。

2.非 Java D6c 的注释，往往是给代码的维护者看的，着重告述读者为什么这样写，如何修改，注意什么问题等

3.使用tab操作，实现缩进，默认整体向右边移动，时候用shift+tab整体向左移

4.运算符和=两边习惯性各加一个空格。比如：2+4*5+345-89

5.源文件使用utf-8编码

6.行宽度不要超过80字符

7.代码编写次行风格和行尾风格

## 2 关键字

### 2.1 含义

	被 java **赋予了特定含义**的**英文单词**。

### 2.2 特点

+ 1.关键字的字母**全部小写**。
+ 2.常用的代码编辑器，针对关键字有特殊的颜色标记，非常直观。



### 2.3 常见的关键字

#### class

用于（创建/定义）**一个类是Java最基本的组成单元**。

#### <font style="color:rgb(51,51,51);">Java 有没有 goto </font>

<font style="color:rgb(51,51,51);">goto </font><font style="color:rgb(51,51,51);">是</font><font style="color:rgb(51,51,51);"> Java </font><font style="color:rgb(51,51,51);">中的保留字，在目前版本的</font><font style="color:rgb(51,51,51);"> Java </font><font style="color:rgb(51,51,51);">中没有使用。 </font>

#### <font style="color:rgb(51,51,51);">final 有什么用？ </font>

<font style="color:rgb(51,51,51);">用于修饰类、属性和方法； </font>

<font style="color:rgb(51,51,51);">被</font><font style="color:rgb(51,51,51);">final</font><font style="color:rgb(51,51,51);">修饰的类不可以被继承 </font>

<font style="color:rgb(51,51,51);">被</font><font style="color:rgb(51,51,51);">final</font><font style="color:rgb(51,51,51);">修饰的方法不可以被重写 </font>

<font style="color:rgb(51,51,51);">被</font><font style="color:rgb(51,51,51);">final</font><font style="color:rgb(51,51,51);">修饰的变量不可以被改变，被</font><font style="color:rgb(51,51,51);">final</font><font style="color:rgb(51,51,51);">修饰不可变的是变量的引用，而不是引用指向的内容，引 </font>

<font style="color:rgb(51,51,51);">用指向的内容是可以改变的 </font>

#### <font style="color:rgb(51,51,51);">final finally finalize区别 </font>

<font style="color:rgb(51,51,51);">final可以修饰类、变量、方法，修饰类表示该类不能被继承、修饰方法表示该方法不能被重写、修 饰变量表示该变量是一个常量不能被重新赋值。 finally一般作用在try-catch代码块中，在处理异常的时候，通常我们将一定要执行的代码方法 </font>

<font style="color:rgb(51,51,51);">finally代码块中，表示不管是否出现异常，该代码块都会执行，一般用来存放一些关闭资源的代 码。 </font>

<font style="color:rgb(51,51,51);">finalize是一个方法，属于Object类的一个方法，而Object类是所有类的父类，该方法一般由垃圾 回收器来调用，当我们调用System.gc() 方法的时候，由垃圾回收器调用finalize()，回收垃圾，一 个对象是否可回收的最后判断。 </font>

#### <font style="color:rgb(51,51,51);">this关键字的用法 </font>

<font style="color:rgb(51,51,51);">this是自身的一个对象，代表对象本身，可以理解为：指向对象本身的一个指 针。 </font>

<font style="color:rgb(51,51,51);">this</font><font style="color:rgb(51,51,51);">的用法在</font><font style="color:rgb(51,51,51);">java</font><font style="color:rgb(51,51,51);">中大体可以分为</font><font style="color:rgb(51,51,51);">3</font><font style="color:rgb(51,51,51);">种： </font>

<font style="color:rgb(51,51,51);">1.</font><font style="color:rgb(51,51,51);">普通的直接引用，</font><font style="color:rgb(51,51,51);">this</font><font style="color:rgb(51,51,51);">相当于是指向当前对象本身。 </font>

<font style="color:rgb(51,51,51);">2.形参与成员名字重名，用this来区分： </font>

<font style="color:rgb(51,51,51);">3.</font><font style="color:rgb(51,51,51);">引用本类的构造函数 </font>

```javascript
public Person(String name, int age) { 
  this.name = name; 
  this.age = age; 
} 

class Person { 
  private String name; 
  private int age; 

  public Person() { } 

  public Person(String name) { 
    this.name = name; 
  } 
}
```

**<font style="color:rgb(51,51,51);"></font>**

#### <font style="color:rgb(51,51,51);">super关键字的用法 </font>

<font style="color:rgb(51,51,51);">super可以理解为是指向自己超（父）类对象的一个指针，而这个超类指的是离自己最近的一个父类。 </font>

<font style="color:rgb(51,51,51);">super</font><font style="color:rgb(51,51,51);">也有三种用法： </font>

<font style="color:rgb(51,51,51);">1.普通的直接引用 ：与this类似，super相当于是指向当前对象的父类的引用，这样就可以用 super.xxx来引用父类的成员。 </font>

<font style="color:rgb(51,51,51);">2.子类中的成员变量或方法与父类中的成员变量或方法同名时，用super进行区分 </font>

<font style="color:rgb(51,51,51);">3.</font><font style="color:rgb(51,51,51);">引用父类构造函数 </font>

<font style="color:rgb(51,51,51);">super</font><font style="color:rgb(51,51,51);">（参数）：调用父类中的某一个构造函数（应该为构造函数中的第一条语句）。 </font>

<font style="color:rgb(51,51,51);">this</font><font style="color:rgb(51,51,51);">（参数）：调用本类中另一种形式的构造函数（应该为构造函数中的第一条语句）。 </font>

##### <font style="color:rgb(51,51,51);">this与super的区别 </font>

<font style="color:rgb(51,51,51);">super: </font><font style="color:rgb(51,51,51);">它引用当前对象的直接父类中的成员（用来访问直接父类中被隐藏的父类中成员数据或函 </font>

<font style="color:rgb(51,51,51);">数，基类与派生类中有相同成员定义时如：</font><font style="color:rgb(51,51,51);">super.</font><font style="color:rgb(51,51,51);">变量名</font><font style="color:rgb(51,51,51);"> super.</font><font style="color:rgb(51,51,51);">成员函数据名（实参） </font>

<font style="color:rgb(51,51,51);">this</font><font style="color:rgb(51,51,51);">：它代表当前对象名（在程序中易产生二义性之处，应使用</font><font style="color:rgb(51,51,51);">this</font><font style="color:rgb(51,51,51);">来指明当前对象；如果函数的 </font>

<font style="color:rgb(51,51,51);">形参与类中的成员数据同名，这时需用</font><font style="color:rgb(51,51,51);">this</font><font style="color:rgb(51,51,51);">来指明成员变量名） </font>

##### <font style="color:rgb(51,51,51);">super()和this()类似</font>

<font style="color:rgb(51,51,51);">区别是，super()在子类中调用父类的构造方法，this()在本类内调用本类的其它构造方法。 </font>

<font style="color:rgb(51,51,51);">super()</font><font style="color:rgb(51,51,51);">和</font><font style="color:rgb(51,51,51);">this()</font><font style="color:rgb(51,51,51);">均需放在构造方法内第一行。 </font>

<font style="color:rgb(51,51,51);">尽管可以用</font><font style="color:rgb(51,51,51);">this</font><font style="color:rgb(51,51,51);">调用一个构造器，但却不能调用两个。 </font>

<font style="color:rgb(51,51,51);">this和super不能同时出现在一个构造函数里面，因为this必然会调用其它的构造函数，其它的构造函数必然也会有super语句的存在，所以在同一个构造函数里面有相同的语句，就失去了语句的意义，编译器也会通过。 </font>

<font style="color:rgb(51,51,51);">this()和super()都指的是对象，所以，均不可以在static环境中使用。包括：static变量,static方法，static语句块。 </font>

<font style="color:rgb(51,51,51);">从本质上讲，</font><font style="color:rgb(51,51,51);">this</font><font style="color:rgb(51,51,51);">是一个指向本对象的指针</font><font style="color:rgb(51,51,51);">, </font><font style="color:rgb(51,51,51);">然而</font><font style="color:rgb(51,51,51);">super</font><font style="color:rgb(51,51,51);">是一个</font><font style="color:rgb(51,51,51);">Java</font><font style="color:rgb(51,51,51);">关键字。 </font>

##### <font style="color:rgb(51,51,51);">static存在的主要意义 </font>

<font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">的主要意义是在于创建独立于具体对象的域变量或者方法。以致于即使没有创建对象，也能使用属 </font>

<font style="color:rgb(51,51,51);">性和调用方法！ </font>

<font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">关键字还有一个比较关键的作用就是 用来形成静态代码块以优化程序性能。</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">块可以置于类中 </font>

<font style="color:rgb(51,51,51);">的任何地方，类中可以有多个</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">块。在类初次被加载的时候，会按照</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">块的顺序来执行每个</font><font style="color:rgb(51,51,51);">static </font>

<font style="color:rgb(51,51,51);">块，并且只会执行一次。为什么说static块可以用来优化程序性能，是因为它的特性:只会在类加载的时候 </font>

<font style="color:rgb(51,51,51);">执行一次。因此，很多时候会将一些只需要进行一次的初始化操作都放在</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">代码块中进行。 </font>

**<font style="color:rgb(51,51,51);">static</font>****<font style="color:rgb(51,51,51);">的独特之处 </font>**

<font style="color:rgb(51,51,51);">1</font><font style="color:rgb(51,51,51);">、被</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">修饰的变量或者方法是独立于该类的任何对象，也就是说，这些变量和方法不属于任何一个 </font>

<font style="color:rgb(51,51,51);">实例对象，而是被类的实例对象所共享。 </font>

> <font style="color:rgb(119,119,119);">怎么理解 “被类的实例对象所共享” 这句话呢？就是说，一个类的静态成员，它是属于大伙的【大伙指的是这个类的多个对象实例，我们都知道一个类可以创建多个实例！】，所有的类对象共享的，不像成员变量是自个的【自个指的是这个类的单个实例对象】…我觉得我已经讲的很通俗了，你明白了咩？ </font>

<font style="color:rgb(51,51,51);">2</font><font style="color:rgb(51,51,51);">、在该类被第一次加载的时候，就会去加载被</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">修饰的部分，而且只在类第一次使用时加载并进行 </font>

<font style="color:rgb(51,51,51);">初始化，注意这是第一次用就要初始化，后面根据需要是可以再次赋值的。 </font>

<font style="color:rgb(51,51,51);">3</font><font style="color:rgb(51,51,51);">、</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">变量值在类加载的时候分配空间，以后创建类对象的时候不会重新分配。赋值的话，是可以任 </font>

<font style="color:rgb(51,51,51);">意赋值的！ </font>

<font style="color:rgb(51,51,51);">4</font><font style="color:rgb(51,51,51);">、被</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">修饰的变量或者方法是优先于对象存在的，也就是说当一个类加载完毕之后，即便没有创建 </font>

<font style="color:rgb(51,51,51);">对象，也可以去访问。 </font>

##### <font style="color:rgb(51,51,51);">static应用场景 </font>

<font style="color:rgb(51,51,51);">因为</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">是被类的实例对象所共享，因此如果某个成员变量是被所有对象所共享的，那么这个成员变量 </font>

<font style="color:rgb(51,51,51);">就应该定义为静态变量。 </font>

<font style="color:rgb(51,51,51);">因此比较常见的</font><font style="color:rgb(51,51,51);">static</font><font style="color:rgb(51,51,51);">应用场景有：</font>

<font style="color:rgb(119,119,119);">1、修饰成员变量 </font>

<font style="color:rgb(119,119,119);">2</font><font style="color:rgb(119,119,119);">、修饰成员方法 </font>

<font style="color:rgb(119,119,119);">3</font><font style="color:rgb(119,119,119);">、静态代码块 </font>

<font style="color:rgb(119,119,119);">4</font><font style="color:rgb(119,119,119);">、修饰类【只能修饰内部类也就是静态内部类】 </font>

<font style="color:rgb(119,119,119);">5</font><font style="color:rgb(119,119,119);">、静态导包 </font>

##### <font style="color:rgb(51,51,51);">static注意事项 </font>

<font style="color:rgb(51,51,51);">1、静态只能访问静态。 </font>

<font style="color:rgb(51,51,51);">2、非静态既可以访问非静态的，也可以访问静态的。</font>

## 3 字面量

### 3.1 含义

	告诉数据在程序中的书写格式 。（就是数值或符号）

### 3.2 字面量的分类

| 字面量类型 | 说明                       | 举例                   |
| :--------- | -------------------------- | ---------------------- |
| 整数类型   | 不带小数的数字             | 666，-8                |
| 小数类型   | 带小数点的数字             | 13.2，-9.0             |
| 字符串类型 | 用双引号括起来的内容       | "黑哦了 hello"         |
| 字符类型   | 单引号括起来，内容只有一个 | 'h'，'我'              |
| 布尔类型   | 布尔值，表示真假           | 只有两个值：true false |
| 空类型     | 一个特殊的值，空值         | 值是：null             |


注意：

1.null不能直接打印，如果我们打印null ，只能用字符串输出

2.true false 是关键字，输出直接输出 true 和 false



### 3.3 特殊字符的字面量

> 1. \t 在打印的时候，把前面的字符串的长度补齐到八，**或者 8 的整数倍**，最少补一个空格最多补八个空格

```java
//\t 制表符 目的：熟悉制表符基本用法
System.out.println("name" + '\t' + "age");
```



2. null



### 3.4 字面量的默认值

Java程序中，任何变量必须初始化后才能使用。

| 数据类型     | 初始值          |
| ------------ | --------------- |
| byte         | 0               |
| short        | 0               |
| int          | 0               |
| long         | 0L              |
| char         | 'u0000’（null） |
| float        | 0.0f            |
| double       | 0               |
| boolean      | false           |
| 所有引用类型 | null            |


但并不是所有的未初始化的变量都会有默认值。



## 4 变量

变量是程序的基本组成单位

变量相当内存中一个数据的存储空间的表示

### 4.1 变量的定义格式

_**<u>数据类型 变量名 = 数据值；</u>**_

数据类型：空间中储存的数据，加入类型限制：整数或小数......

变量名：为空间起的名字。

数据值：存在空间里面的数值。

数据类型：限定了变量当中能存储什么类型的数据。

    - 如果要存10，那么数据类型就需要写整数类型。
    - 如果要存10.0，那么数据类型就需要写小数类型。



变量名：其实就是这个容器的名字。

    - 当以后想要使用变量里面的数据时，直接使用变量名就可以了。



数据值：真正存储在容器中的数据。

分号：表示语句的结束，就跟以前写作文时候的句号是一样的。



### 4.2 **注意点**

+ 如果要定义 一个整数类型的变量，不知道选择哪种数据类型了，默认使用int。
+ 如果要定义 一个小数类型的变量，不知道选择哪种数据类型了，默认使用double。
+ **如果要定义一个long类型的变量，那么在数据值的后面需要加上L后缀。（大小写都可以，建议大写。）**
+ **如果要定义一个float类型的变量，那么在数据值的后面需要加上F后缀。（大小写都可以**）



## 5 数据类型 （与变量定义公式中数据类型相关）

定义：<font style="color:rgb(51,51,51);">Java 语言是</font>**<font style="color:rgb(51,51,51);">强类型语言</font>**<font style="color:rgb(51,51,51);">，对于每一种数据都定义了明确的具体的数据类型，在内存中分配了不同 大小的内存空间</font>

### 1.基本数据类型

| 数据类型 |     关键字     | 内存占用/字节 |                 取值范围                  |
| :------: | :------------: | :-----------: | :---------------------------------------: |
|   整数   |      byte      |       1       |    负的2的7次方 ~ 2的7次方-1(-128~127)    |
|          |     short      |       2       | 负的2的15次方 ~ 2的15次方-1(-32768~32767) |
|          |  int（默认）   |       4       |        负的2的31次方 ~ 2的31次方-1        |
|          |      long      |       8       |        负的2的63次方 ~ 2的63次方-1        |
|  浮点数  |     float      |       4       |        1.401298e-45 ~ 3.402823e+38        |
|          | double（默认） |       8       |      4.9000000e-324 ~ 1.797693e+308       |
|   字符   |      char      |       2       |                  0-65535                  |
|   布尔   |    boolean     |       1       |                true，false                |


**说明：**

	e+38表示是乘以10的38次方，同样，e-45表示乘以10的负45次方。
	
	在java中整数默认是int类型，浮点数默认是double类型。

**<font style="color:rgb(219, 63, 30);">char 采用 </font>****Unicode ****<font style="color:rgb(219, 63, 30);">字符集，</font>****又称统一码字符集，它可以支持多种语言****<font style="color:rgb(219, 63, 30);">。</font>**

**<font style="color:rgb(219, 63, 30);">JVM按 utf-16 格式分配char 内存。输出时，采用 OS 默认编码，占两个字节</font>**

<font style="color:rgb(51, 51, 51);">字符字面量可以表示为 "\uxxxx" 形式的 Unicode 转义序列。这里，\u 表示 Unicode 转义序列的开始，xxxx正好表示四个十六进制数字。由Xx表示的值是字符的Unicode值。字符'A'有6565十进制可以用十六进制表示为41的值的Unicode值。因此，字符'A'可以用Unicode转义序列表示为1u0041'.以下代码将相同的字符"A”分配给char变量c1和c2:	</font>

```plain
char c1  = "A";
char c2  = "\u0041"; // Same as  c2  = "A"
```

**<font style="color:rgb(51,51,51);">switch 是否能作用在 byte 上，是否能作用在 long 上，是否 能作用在 String 上 </font>**

<font style="color:rgb(51,51,51);">在 Java 5 以前，switch(expr)中，expr 只能是 byte、short、char、int。从 Java5 开始，Java 中引入 了枚举类型，expr 也可以是 enum 类型，从 Java 7 开始，expr 还可以是字符串（String），但是长整型（long）在目前所有的版本中都是不可以的</font>

**<font style="color:rgb(51,51,51);">用最有效率的方法计算</font>****<font style="color:rgb(51,51,51);"> 2 </font>****<font style="color:rgb(51,51,51);">乘以</font>****<font style="color:rgb(51,51,51);"> 8 </font>**

<font style="color:rgb(51,51,51);">2 << 3</font><font style="color:rgb(51,51,51);">（左移</font><font style="color:rgb(51,51,51);"> 3 </font><font style="color:rgb(51,51,51);">位相当于乘以</font><font style="color:rgb(51,51,51);"> 2 </font><font style="color:rgb(51,51,51);">的</font><font style="color:rgb(51,51,51);"> 3 </font><font style="color:rgb(51,51,51);">次方，右移</font><font style="color:rgb(51,51,51);"> 3 </font><font style="color:rgb(51,51,51);">位相当于除以</font><font style="color:rgb(51,51,51);"> 2 </font><font style="color:rgb(51,51,51);">的</font><font style="color:rgb(51,51,51);"> 3 </font><font style="color:rgb(51,51,51);">次 方）。 </font>

**<font style="color:rgb(51,51,51);">Math.round(11.5) </font>****<font style="color:rgb(51,51,51);">等于多少？</font>****<font style="color:rgb(51,51,51);">Math.round(-11.5) </font>****<font style="color:rgb(51,51,51);">等于多少 </font>**

<font style="color:rgb(51,51,51);">Math.round(11.5)的返回值是 12，Math.round(-11.5)的返回值是-11。</font>**<font style="color:rgb(51,51,51);">四舍五入的原理是在参数上加 0.5 然后进行下取整</font>**<font style="color:rgb(51,51,51);">。 </font>

**<font style="color:rgb(51,51,51);">float f=3.4;是否正确 </font>**

<font style="color:rgb(51,51,51);">不正确。3.4 是双精度数，将双精度型（double）赋值给浮点型（float）属于 下转型（down-casting， 也称为窄化）会造成精度损失，因此需要强制类型转 换float f =(float)3.4; 或者写成 float f =3.4F;。 </font>

**<font style="color:rgb(51,51,51);">short s1 = 1; s1 = s1 + 1;有错吗?short s1 = 1; s1 += 1;有错吗 </font>**

<font style="color:rgb(51,51,51);">对于 short s1 = 1; s1 = s1 + 1;由于 1 是 int 类型，因此 s1+1 运算结果也是 int型，需要强制转换类型才 能赋值给 short 型。 而 short s1 = 1; s1 += 1;可以正确编译，因为 s1+= 1;相当于 s1 = (short(s1 + 1);其中有隐含的强制类型转换。 </font>

**<font style="color:rgb(51,51,51);">编码</font>****<font style="color:rgb(51,51,51);">Java</font>****<font style="color:rgb(51,51,51);">语言采用何种编码方案？有何特点？ </font>**

<font style="color:rgb(51,51,51);">Java语言采用Unicode编码标准，Unicode（标准码），它为每个字符制订了一 个唯一的数值，因此在 任何的语言，平台，程序都可以放心的使用。</font>



**需要记住的点：**

1.byte类型的取值范围：

	-128 ~ 127

2.int类型的大概取值范围：

	-21亿多  ~ 21亿多

3.整数类型和小数类型的取值范围大小关系：

	double > float > long > int > short > byte

最为常用的数据类型选择：

+  在定义变量的时候，要根据实际的情况来选择不同类型的变量。  
   比如：人的年龄，可以选择 byte 类型。  
   比如：地球的年龄，可以选择 long 类型。
+  如果整数类型中，不太确定范围，那么默认使用 int 类型。
+  如果小数类型中，不太确定范围，那么默认使用 double 类型。
+  如果要定义字符类型的变量，那么使用 char
+  如果要定义布尔类型的变量，那么使用 boolean

**注意点**

+ 如果要定义 一个整数类型的变量，不知道选择哪种数据类型了，默认使用int。
+ 如果要定义 一个小数类型的变量，不知道选择哪种数据类型了，默认使用double。
+ **如果要定义一个long类型的变量，那么在数据值的后面需要加上L后缀。（大小写都可以，建议大写。）**
+ **如果要定义一个float类型的变量，那么在数据值的后面需要加上F后缀。（大小写都可以**）

### 2.引用数据类型

<font style="color:rgb(51, 51, 51);">class（class）</font>

<font style="color:rgb(51, 51, 51);">数组（[]）</font>

<font style="color:rgb(51, 51, 51);">接口（interface）</font>

### **<font style="color:rgb(219, 63, 30);">3 数据溢出</font>**

<font style="color:rgb(51, 51, 51);">	一个数据类型的最大值和最小值是一个循环，在最大值的基础上在扩大数据或者最小值的基础上再缩小数值，会跳到相反的值上面</font>

**<font style="color:rgb(26, 143, 55);">注：</font>**

<font style="color:rgb(51, 51, 51);">	1.int是基本数据类型，Integer是int的封装类，是引用类型。</font>**<font style="color:rgb(51, 51, 51);">int默认值是0，而Integer默认值是null</font>**<font style="color:rgb(51, 51, 51);">，所以Integer能区分出0和null的情况。一旦java看到null，就知道这个引用还没有指向某个对象，再任何引用使用前，必须为其指定一个对象，否则会报错。</font>

<font style="color:rgb(51, 51, 51);">	2.基本数据类型在声明时系统会自动给它分配空间，而引用类型声明时只是分配了引用空间，必须通过实例化开辟数据空间之后才可以赋值。数组对象也是一个引用对象，将一个数组赋值给另一个数组时只是复制了一个引用，所以通过某一个数组所做的修改在另一个数组中也看的见。虽然定义了boolean这种数据类型，但是只对它提供了非常有限的支持。</font>**<font style="color:rgb(219, 63, 30);">在Java虚拟机中没有任何供boolean值专用的字节码指令，Java语言表达式所操作的boolean值，在编译之后都使用Java虚拟机中的int数据类型来代替</font>**<font style="color:rgb(51, 51, 51);">，而</font>**<font style="color:rgb(219, 63, 30);">boolean数组在oracle虚拟机中，将会被编码成Java虚拟机的byte数组，每个元素boolean元素占8位。这样我们可以得出boolean类型占了单独使用是4个字节</font>**<font style="color:rgb(51, 51, 51);">，在数组中又是1个字节。使用int的原因是，对于当下32位的处理器（CPU）来说，一次处理数据是32位（这里不是指的是32/64位系统，而是指CPU硬件层面），具有高效存取的特点</font>

<font style="color:rgb(44, 62, 80);">论调一。</font>

<font style="color:rgb(44, 62, 80);">对于单独使用的 boolean 类型，JVM 并没有提供专用的字节码指令，而是使用 int 相关的指令 istore 来处理，那么 int 明确是 4 个字节，所以此时的 boolean 也占用 4 个字节。</font>

<font style="color:rgb(44, 62, 80);">对于作为数组来使用的 boolean 类型，JVM 会按照 byte 的指令来处理（bastore），那么已知 byte 类型占用 1 个字节，所以此时的 boolean 也占用 1 个字节。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726659584241-3b95daa8-c910-4028-a875-79606440d951.png" />


<font style="color:rgb(44, 62, 80);">二哥的 Java 进阶之路：javap 验证</font>

<font style="color:rgb(44, 62, 80);">论调二，布尔具体占用的大小是不确定的，取决于 JVM 的具体实现。</font>

<font style="color:rgb(102, 102, 102);">boolean: The boolean data type has only two possible values: true and false. Use this data type for simple flags that track true/false conditions. This data type represents one bit of information, but its "size" isn't something that's precisely defined.</font>

<font style="color:rgb(44, 62, 80);">可以通过 JOL 工具打印出对象的内存布局，展示 boolean 单独使用和作为数组使用时在内存中的实际占用大小。</font>

```plain
public class BooleanSizeExample {
    public static void main(String[] args) {
        boolean singleBoolean = true;
        boolean[] booleanArray = new boolean[10];
        
        // 分析内存占用，可以使用第三方工具如 JOL（Java Object Layout）
        System.out.println("Size of single boolean: " + org.openjdk.jol.info.ClassLayout.parseInstance(singleBoolean).toPrintable());
        System.out.println("Size of boolean array: " + org.openjdk.jol.info.ClassLayout.parseInstance(booleanArray).toPrintable());
    }
}
```

<font style="color:rgb(44, 62, 80);">运行结果如下（64 操作系统 JDK 8）：</font>

```plain
Size of single boolean: java.lang.Boolean object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
      4     4           (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
      8     4           (object header)                           dd 20 00 f8 (11011101 00100000 00000000 11111000) (-134209315)
     12     1   boolean Boolean.value                             true
     13     3           (loss due to the next object alignment)
Instance size: 16 bytes
Space losses: 0 bytes internal + 3 bytes external = 3 bytes total

Size of boolean array: [Z object internals:
 OFFSET  SIZE      TYPE DESCRIPTION                               VALUE
      0     4           (object header)                           01 00 00 00 (00000001 00000000 00000000 00000000) (1)
      4     4           (object header)                           00 00 00 00 (00000000 00000000 00000000 00000000) (0)
      8     4           (object header)                           05 00 00 f8 (00000101 00000000 00000000 11111000) (-134217723)
     12     4           (object header)                           0a 00 00 00 (00001010 00000000 00000000 00000000) (10)
     16    10   boolean [Z.<elements>                             N/A
     26     6           (loss due to the next object alignment)
Instance size: 32 bytes
Space losses: 0 bytes internal + 6 bytes external = 6 bytes total
```

<font style="color:rgb(44, 62, 80);">对于单个 boolean 变量来说：</font>

<font style="color:rgb(44, 62, 80);">①、</font>**<font style="color:rgb(44, 62, 80);">对象头（Object Header）</font>**<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">占用了 12 个字节：</font>

+ **<font style="color:rgb(44, 62, 80);">OFFSET 0 - 4</font>**<font style="color:rgb(44, 62, 80);">：对象头的一部分，包含对象的标记字段（Mark Word），用于存储对象的哈希码、GC 状态等。</font>
+ **<font style="color:rgb(44, 62, 80);">OFFSET 4 - 8</font>**<font style="color:rgb(44, 62, 80);">：对象头的另一部分，通常是指向类元数据的指针（Class Pointer）。</font>
+ **<font style="color:rgb(44, 62, 80);">OFFSET 8 - 12</font>**<font style="color:rgb(44, 62, 80);">：对象头的最后一部分，包含锁状态或其他信息。</font>

<font style="color:rgb(44, 62, 80);">②、实际的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">boolean</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">值占用 1 个字节，也就是</font>**<font style="color:rgb(44, 62, 80);">OFFSET 12 - 13</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">③、为了满足 8 字节的对齐要求（HotSpot JVM 默认的对象对齐方式），有 3 个字节的填充。</font>**<font style="color:rgb(44, 62, 80);">OFFSET 13 - 16</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">也就是说，尽管</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">boolean</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">值本身只需要 1 个字节，但由于对象头和对齐要求，一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">boolean</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">在内存中占用 16 字节。</font>

<font style="color:rgb(44, 62, 80);">对于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">boolean</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">数组来说：</font>

<font style="color:rgb(44, 62, 80);">①、</font>**<font style="color:rgb(44, 62, 80);">对象头（Object Header）</font>**<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">占用了 12 个字节：</font>

+ **<font style="color:rgb(44, 62, 80);">OFFSET 0 - 4</font>**<font style="color:rgb(44, 62, 80);">：对象头的一部分，包含对象的标记字段（Mark Word）。</font>
+ **<font style="color:rgb(44, 62, 80);">OFFSET 4 - 8</font>**<font style="color:rgb(44, 62, 80);">：对象头的另一部分，包含指向类元数据的指针（Class Pointer）。</font>
+ **<font style="color:rgb(44, 62, 80);">OFFSET 8 - 12</font>**<font style="color:rgb(44, 62, 80);">：对象头的最后一部分，通常包含数组的长度信息。</font>

<font style="color:rgb(44, 62, 80);">②、</font>**<font style="color:rgb(44, 62, 80);">数组长度</font>**<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">占用了 4 个字节，此处是 10，</font>**<font style="color:rgb(44, 62, 80);">OFFSET 12 - 16</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">③、实际的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">boolean</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">数组元素，每个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">boolean</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">值占用 1 个字节，总共 10 个字节，</font>**<font style="color:rgb(44, 62, 80);">OFFSET 16 - 26</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">④、为了满足 8 字节对齐要求，有 6 个字节的填充，</font>**<font style="color:rgb(44, 62, 80);">OFFSET 26 - 32</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">也就是说，每个 </font>`<font style="color:rgb(44, 62, 80);">boolean</font>`<font style="color:rgb(44, 62, 80);"> 数组元素占用 1 个字节，加上对象头、对齐填充和数组长度，包含 10 个元素的 </font>`<font style="color:rgb(44, 62, 80);">boolean</font>`<font style="color:rgb(44, 62, 80);"> 数组占用 32 字节。</font>

<font style="color:rgb(51, 51, 51);">Java中的true字面值不等于1，false字面值也不等于0。</font>

<font style="color:rgb(51, 51, 51);"></font>

## 6 标识符  （与变量定义式中变量名有关）

### 6.1 含义

	就是给类，方法，变量等起的名字。

### 6.2 命名规则

必须要这么做，否则代码会报错。

+ **必须由数字、字母、下划线_、美元符号$组成。**
+ **数字不能开头**
+ **不能是关键字**
+ **区分大小写的。**


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678268888659-8dac154f-44cf-4fc2-91f2-b5f5d544efd1.png" />



[//]: ## (<img referrerpolicy="no-referrer" src="3-Java%E5%9F%BA%E7%A1%80/image-20221228204704380.png" />)


### 6.3 小驼峰命名法

适用于**变量名**和**方法名**

+  如果是一个单词，那么全部小写，比如：name
+  **如果是多个单词，那么从第二个单词开始，首字母大写**，比如：firstName、maxAge



### 6.4 大驼峰命名法

适用于类名

+  如果是一个单词，那么首字母大写。比如：Demo、Test。
+  **如果是多个单词，那么每一个单词首字母都需要大写**。比如：HelloWorld

不管起什么名字，都要做到见名知意。



#### 阿里巴巴命名规范细节：

1.  **尽量不要用拼音。但是一些国际通用的拼音可视为英文单词。**  
    正确：alibaba、hangzhou、nanjing  
    错误：jiage、dazhe
2.  **平时在给变量名、方法名、类名起名字的时候，不要使用下划线或美元符号。**  
    错误：_name  
    正确：name



## 7 键盘录入

键盘录入的实际功能Java已经帮我们写好了，不需要我们自己再实现了，而Java写好的功能都放在了Scanner这个类中，所以，我们只要直接使用Scanner这个类就可以了。

使用步骤：

第一步：

	**导包**：其实就是表示先找到Scanner这个类在哪。

第二步：

	**创建对象**：其实就表示申明一下，我准备开始用Scanner这个类了。

第三步：

	**接收数据**：也是真正干活的代码。**nextInt 中I 大写。**

代码：

```java
//导包，其实就是先找到Scanner这个类在哪
import java.util.Scanner;
public class ScannerDemo1{
	public static void main(String[] args){
		//2.创建对象，其实就是申明一下，我准备开始用Scanner这个类了。
		Scanner sc = new Scanner(System.in);
		//3.接收数据
		//当程序运行之后，我们在键盘输入的数据就会被变量i给接收了
		System.out.println("请输入一个数字");
		int i = sc.nextInt();
		System.out.println(i);
	}
}
```

### <font style="color:rgb(119, 119, 119);">各种录入方式</font>

```plain
sc.nextInt();
sc.nextDouble();
sc.next();
sc.nextLine();
sc.hasNextInt();
```

## <font style="color:rgb(0, 119, 187);">8 输出</font>

System.out.println();

### <font style="color:rgb(106, 90, 205);">格式化输出</font>

|                                               |                                                          |                                                      |
| --------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| <font style="color:rgb(51, 51, 51);">s</font> | <font style="color:rgb(51, 51, 51);">字符串</font>       | <font style="color:rgb(51, 51, 51);">Hello</font>    |
| <font style="color:rgb(51, 51, 51);">e</font> | <font style="color:rgb(51, 51, 51);">指数浮点数</font>   | <font style="color:rgb(51, 51, 51);">1.59e+01</font> |
| <font style="color:rgb(51, 51, 51);">d</font> | <font style="color:rgb(51, 51, 51);">十进制整数</font>   | <font style="color:rgb(51, 51, 51);">159</font>      |
| <font style="color:rgb(51, 51, 51);">X</font> | <font style="color:rgb(51, 51, 51);">十六进制整数</font> | <font style="color:rgb(51, 51, 51);">9f</font>       |
| <font style="color:rgb(51, 51, 51);">o</font> | <font style="color:rgb(51, 51, 51);">八进制整数</font>   | <font style="color:rgb(51, 51, 51);">237</font>      |
| <font style="color:rgb(51, 51, 51);">f</font> | <font style="color:rgb(51, 51, 51);">定点浮点数</font>   | <font style="color:rgb(51, 51, 51);">H</font>        |
| <font style="color:rgb(51, 51, 51);">c</font> | <font style="color:rgb(51, 51, 51);">字符</font>         |                                                      |
| <font style="color:rgb(51, 51, 51);">b</font> | <font style="color:rgb(51, 51, 51);">布尔</font>         | <font style="color:rgb(51, 51, 51);">True</font>     |


|                                                  |                                                              |                                                       |
| ------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------- |
| <font style="color:rgb(51, 51, 51);">+</font>    | <font style="color:rgb(51, 51, 51);">打印正数和负数的符号</font> | <font style="color:rgb(51, 51, 51);">+3333.33</font>  |
| <font style="color:rgb(51, 51, 51);">空格</font> | <font style="color:rgb(51, 51, 51);">在正数之前添加空格</font> | <font style="color:rgb(51, 51, 51);">  </font> |               |
| <font style="color:rgb(51, 51, 51);">0</font>    | <font style="color:rgb(51, 51, 51);">数字前面补0</font>      | <font style="color:rgb(51, 51, 51);">003333.33</font> |
| <font style="color:rgb(51, 51, 51);">-</font>    | <font style="color:rgb(51, 51, 51);">左对齐</font>           | <font style="color:rgb(51, 51, 51);">     </font> |            |
| <font style="color:rgb(51, 51, 51);">（</font>   | <font style="color:rgb(51, 51, 51);">将负数括在括号内</font> | <font style="color:rgb(51, 51, 51);">(3333.33)</font> |
| <font style="color:rgb(51, 51, 51);">#</font>    | <font style="color:rgb(51, 51, 51);">添加分组分隔符</font>   | <font style="color:rgb(51, 51, 51);">3,333.33</font>  |
| <font style="color:rgb(51, 51, 51);"><</font>    | <font style="color:rgb(51, 51, 51);">格式化前面的数值 %d<x y以10进制和16进制打印同一个数值</font> | <font style="color:rgb(51, 51, 51);">159 9F</font>    |


<font style="color:rgb(51, 51, 51);">可以使用静态的String.format方法创建一个格式化的字符串，而不打印输出：</font>

```plain
String name = "www";
int age = 1

String message =String.format("Hello,%s.Next year,you'll be %d",name,age);
```




## 9 运算符

### 算数运算符

+ - * /  %  //加减乘除 取模或取余

#### + - *

```java
public class operator {
	public static void main (String[] args) {
		// +
		System.out.println(3 + 1);
		
		// -
		System.out.println(3 - 1);
		
		// * (shift + 数字8)
		System.out.println(3 * 2);
		
		// / 
		System.out.println(3 / 2);
		
		//如果计算时候有小数参与 在代码中，如果有小数参与计算，结果可能不精确的
		//具体原因：到了java.SE时候，会详细学习。
		System.out.println(1.1 + 1.1); // 2.2
		System.out.println(1.1 + 2);  // 3.1
		System.out.println(1.1 - 1.01);// 0.09000000000000008
		
	}
}
```

**<font style="color:rgb(64, 224, 208);">注意</font>**<font style="color:rgb(51, 51, 51);">：</font>

_**<font style="color:rgb(219, 63, 30);">如果计算时候有小数参与 在代码中，如果有小数参与计算，结果可能不精确的.</font>**_<font style="color:rgb(51, 51, 51);">具体原因：到了java.SE时候，会详细学习。</font>

<font style="color:rgb(51, 51, 51);"></font>

#### <font style="color:rgb(51, 51, 51);">/ 除法</font>

```java
//除法
System.out.println(10 / 2);//5
System.out.println(10 / 3);//3
System.out.println(10.0 / 3); //3.3333333333333335
```

<font style="color:rgb(51, 51, 51);">整数参与 计算，结果只能是整数</font>

**<font style="color:rgb(219, 63, 30);">小数参与计算，结果可能存在不精确的，如果我们需要精确计算，那么需要用到后面的知识点。</font>**

**<font style="color:rgb(219, 63, 30);"></font>**



#### %  <font style="color:rgb(26, 143, 55);">取余 or 取模</font>


```java
//取余
System.out.println(10 % 2); //0
System.out.println(10 % 3); //1
```

<font style="color:rgb(51, 51, 51);">应用场景：</font>

<font style="color:rgb(51, 51, 51);">1.可以用来取模来判断 A是否能被Ｂ整除。</font>

<font style="color:rgb(51, 51, 51);">２.可以判断Ａ是否为偶数。</font>

<font style="color:rgb(51, 51, 51);"></font>

#### <font style="color:rgb(51, 51, 51);">应用 -- 数值拆分</font>

<font style="color:rgb(51, 51, 51);">需求：键盘录入一个三位数，将其拆分为个位、十位、百位后，打印在控制台</font>

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```java
//1.键盘录入一个三位数
//导包 --- 创建对象 --- 接收数据
Scanner sc = new Scanner(System.in);
System.out.println("请输入一个三位数");
int number = sc.nextInt();//123

//2.获取这个三位数的个位、十位、百位并打印出来
//公式：
//针对于任意的一个数而言
//个位： 数字 % 10
int ones = number % 10;
//十位： 数字 / 10 % 10
int tens = number / 10 % 10;
//百位： 数字 / 100 % 10
int hundreds = number / 100  % 10;

//输出结果
System.out.println(ones);
System.out.println(tens);
System.out.println(hundreds);
```

<font style="color:rgb(51, 51, 51);">公式：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">获取任意一个数上每一位数。</font>

<font style="color:rgb(51, 51, 51);">个位：数字 % 10</font>

<font style="color:rgb(51, 51, 51);">十位：数字 / 10 % 10</font>

<font style="color:rgb(51, 51, 51);">百位：数字 / 100 % 10</font>

<font style="color:rgb(51, 51, 51);">千位：数字 / 1000 % 10</font>

<font style="color:rgb(51, 51, 51);">。。。以此类推。。。</font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

### <font style="color:rgb(26, 143, 55);">隐式转换（自动类型提升）</font>

<font style="color:rgb(51, 51, 51);">数字进行数据运算时，数据类型不一样的不能运算，需要转换成一样的，才能运算。</font>

#### <font style="color:rgb(51, 51, 51);">含义</font>

<font style="color:rgb(51, 51, 51);">取值范围小的数值变成取值范围大的数值。</font>

<font style="color:rgb(51, 51, 51);">就是把一个取值范围小的数据或者变量，赋值给另一个取值范围大的变量。此时不需要我们额外写代码单独实现，是程序自动帮我们完成的。</font>

**<font style="color:rgb(64, 224, 208);">简单记忆：就是小的给大的，可以直接给。</font>**

#### <font style="color:rgb(135, 206, 250);">两种提升规则</font>

+ <font style="color:rgb(51, 51, 51);">取值范围小的，和取值范围大的进行运算，</font>**<font style="color:rgb(51, 51, 51);">小的会先提升为大的</font>**<font style="color:rgb(51, 51, 51);">，再进行运算。</font>
+ **<font style="color:rgb(219, 63, 30);">byte、short、char </font>****<font style="color:rgb(64, 224, 208);">三种类型的数据在运算的时候，都会直接先提升为int，然后再进行运算。</font>**

**<font style="color:rgb(64, 224, 208);"></font>**

#### <font style="color:rgb(135, 206, 250);">取值范围从小到大的关系：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">byte short int long float double</font>

#### <font style="color:rgb(135, 206, 250);">注意点</font>

```plain
int a = 10;
double b = 12.3;
int c = a + b;
System.out.println(c);
```

<font style="color:rgb(51, 51, 51);">这行代码会报错，等式右边是double型，不会随等号左边的数据类型变换，</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706949404878-fd3a7c1f-90d9-4465-9b8a-a807a375766e.png" />




#### 应用

##### 案例一

```java
double d = 10;
System.out.println(d);//10.0
```

<font style="color:rgb(51, 51, 51);">解释：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">10是整数，整数默认是int类型的。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">而在取值范围的顺序中：byte short int long float double</font>

<font style="color:rgb(51, 51, 51);">	在赋值的时候把一个int类型的赋值给了一个double类型的。把一个小的赋值给一个大的是可以直接给的。</font>

<font style="color:rgb(51, 51, 51);"></font>

##### <font style="color:rgb(51, 51, 51);">案例二</font>

```java
byte b1 = 10;
byte b2 = 20;
result = b1 + b2;//int
//问变量result是什么类型的？
```

<font style="color:rgb(51, 51, 51);">解释：</font>

<font style="color:rgb(51, 51, 51);">	因为b1和b2都是byte或者short类型的。所以在参与计算的时候，变量b1和变量b2里面的值都会自动提升为int类型的。最终其实就是两个int类型的相加，最终结果也是int类型的。</font>

<font style="color:rgb(51, 51, 51);"></font>

### <font style="color:rgb(51, 51, 51);">强制转换</font>

#### <font style="color:rgb(135, 206, 250);">概念</font>

<font style="color:rgb(51, 51, 51);">取值范围大的变成取值范围小的</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">如果要把一个取值范围大的数据或者变量赋值给另一个取值范围小的变量。是不允许直接操作。</font>

<font style="color:rgb(51, 51, 51);">	如果一定要这么干，就需要加入强制转换。</font>

<font style="color:rgb(51, 51, 51);"></font>

#### <font style="color:rgb(135, 206, 250);">书写格式</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">目标数据类型 变量名 = （目标数据类型）被强转的数据；</font>

#### <font style="color:rgb(64, 224, 208);">注意点</font>

<font style="color:rgb(51, 51, 51);">	强制转换有可能会导致数据发生错误。（数据的精度丢失）</font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>

### <font style="color:rgb(26, 143, 55);">字符串的 + 操作</font>

#### <font style="color:rgb(135, 206, 250);">核心操作</font>

+ <font style="color:rgb(51, 51, 51);">当+操作中出现字符串时，此时就是字符串的连接符，会将前后的数据进行拼接，并产生一个新的字符串。</font>
+ **<font style="color:rgb(64, 224, 208);">当连续进行+操作时，从左到右逐个执行的。</font>**

#### <font style="color:rgb(135, 206, 250);">练习题</font>

##### <font style="color:rgb(51, 51, 51);">案例1：</font>

<font style="color:rgb(51, 51, 51);">1 + 2 + "abc" + 2 + 1</font>

<font style="color:rgb(51, 51, 51);">结果：“3abc21”</font>

<font style="color:rgb(51, 51, 51);">解释：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">第一步：1 + 2 。在这个过程中，没有字符串参与的，所以做的是加法运算，结果为3。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">第二步：3 + "abc"。在这个过程中，有字符串参与的，所以做的是拼接操作，产生一个新的字符串"3abc"。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">第三步："3abc" + 2。在这个过程中，有字符串参与的，所以做的是拼接操作，产生一个新的字符串"3abc2"。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">第四步："3abc2" + 1。在这个过程中，有字符串参与的，所以做的是拼接操作，产生一个新的字符串“3abc21”</font>

##### <font style="color:rgb(51, 51, 51);">案例2：</font>

```plain
String name = "黑默丁格";
System.out.println("我的名字是" + name);
```

<font style="color:rgb(51, 51, 51);">结果： 我的名字是黑默丁格</font>

<font style="color:rgb(51, 51, 51);">解释：当字符串跟变量相加的时候，实际上是跟变量里面的值进行拼接。</font>

##### <font style="color:rgb(51, 51, 51);">案例3：</font>

```plain
System.out.println(1+2+"age"+true);
//输出：“3agetrue”
```

<font style="color:rgb(51, 51, 51);">  
</font><font style="color:rgb(51, 51, 51);"> </font>

### <font style="color:rgb(26, 143, 55);">字符相加</font>

#### <font style="color:rgb(135, 206, 250);">✨</font><font style="color:rgb(135, 206, 250);">规则</font>

**<font style="color:rgb(51, 51, 51);">当+操作中出现了字符，会拿着字符到计算机内置的ASCII码表中去查对应的数字，然后再进行计算</font>**<font style="color:rgb(51, 51, 51);">。</font>

#### <font style="color:rgb(64, 224, 208);">案例</font><font style="color:rgb(51, 51, 51);">：</font>

```plain
char c = 'a';
int result = c + 0;
System.out.println(result);//97
```

<font style="color:rgb(51, 51, 51);">ASCII码表中：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">'a' ----- 97</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">'A' ----- 65</font>

#### <font style="color:rgb(135, 206, 250);">练习题</font>

```plain
System.out.println('a' + "age");
//输出：aage
```

#### <font style="color:rgb(26, 143, 55);">总结 字符串只能进行加操作</font>

### <font style="color:rgb(106, 90, 205);">自增自减运算</font>

#### <font style="color:rgb(26, 143, 55);">分类：</font>

```plain
++  自增运算符
--  自减运算符
```

<font style="color:rgb(51, 51, 51);">++：就是把变量里面的值+1</font>

<font style="color:rgb(51, 51, 51);">--：就是把变量里面的值-1</font>

#### <font style="color:rgb(26, 143, 55);">使用方式：</font>

+ <font style="color:rgb(51, 51, 51);">放在变量的前面，我们叫做先++。 比如：++a</font>
+ <font style="color:rgb(51, 51, 51);">放在变量的后面，我们叫做后++。 比如：a++</font>

#### <font style="color:rgb(26, 143, 55);">注意点：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">不管是先++，还是后++。单独写在一行的时候，运算结果是一模一样的。</font>

#### <font style="color:rgb(26, 143, 55);">案例：</font>

```plain
//++
int a = 10;
a++;//就是让变量a里面的值 + 1
System.out.println(a);//11
++a;//就是让变量a里面的值 + 1
System.out.println(a);//12
```

#### <font style="color:rgb(26, 143, 55);">自增自减运算符的应用场景：</font>

<font style="color:rgb(51, 51, 51);">某些情况下，变量需要进行加1或者减1的时候使用。</font>

<font style="color:rgb(51, 51, 51);">比如：过生日多一岁，就用到了自增运算符。</font>

<font style="color:rgb(51, 51, 51);">比如：购物商场中，选择商品数量，也用到了自增或者自减运算符。</font>

<font style="color:rgb(51, 51, 51);">比如：统计很多数据中，有多少个数据满足要求，也用到了自增运算符。</font>

### <font style="color:rgb(106, 90, 205);">赋值运算符</font>

<font style="color:rgb(51, 51, 51);">最为常用的：</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">=</font>

<font style="color:rgb(51, 51, 51);">运算过程：就是把等号右边的结果赋值给左边的变量</font>

<font style="color:rgb(51, 51, 51);">案例：</font>

```plain
public class OperatorDemo6 {
    public static void main(String[] args) {
        //1.最为简单的赋值运算符用法
        int a = 10;//就是把10赋值给变量a
        System.out.println(a);

        //2.如果等号右边需要进行计算。
        int b = 20;
        int c = a + b;//先计算等号右边的，把计算的结果赋值给左边的变量
        System.out.println(c);

        //3.特殊的用法
        a = a + 10;//先计算等号右边的，把计算的结果赋值给左边的变量
        System.out.println(a);//20
    }
}
```

### <font style="color:rgb(106, 90, 205);">扩展赋值运算符</font>

#### <font style="color:rgb(26, 143, 55);">分类：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">+=、-=、*=、/=、%=</font>

#### <font style="color:rgb(26, 143, 55);">运算规则：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">就是把左边跟右边进行运算，把最终的结果赋值给左边，对右边没有任何影响。</font>

#### <font style="color:rgb(26, 143, 55);">案例：</font>

```plain
public class OperatorDemo7 {
    public static void main(String[] args) {
        //扩展赋值运算符
        int a = 10;
        int b = 20;
        a += b;//把左边和右边相加，再把最终的结果赋值给左边，对右边没有任何影响
        // 相当于 a = a + b;
        System.out.println(a);//30
        System.out.println(b);//20
    }
}
```

#### <font style="color:rgb(26, 143, 55);">注意点：</font>**<font style="color:rgb(219, 63, 30);">扩展的赋值运算符中底层还包含了一个强制转换</font>****<font style="color:rgb(64, 224, 208);">。</font>**

<font style="color:rgb(51, 51, 51);">以+=为例。</font>

**<font style="color:rgb(64, 224, 208);">a += b ;实际上相当于 a = (byte)(a + b);</font>**

```plain
public class OperatorDemo8 {
    public static void main(String[] args) {
        byte a = 10;
        byte b = 20;
        //a += b;
        a = (byte)(a + b);
        System.out.println(a);//30
    }
}
```

<font style="color:rgb(51, 51, 51);">  
</font><font style="color:rgb(51, 51, 51);"> </font>

### <font style="color:rgb(0, 119, 187);">关系运算符</font>

<font style="color:rgb(51, 51, 51);">又叫比较运算符，其实就是拿着左边跟右边进行了判断而已。</font>

#### <font style="color:rgb(26, 143, 55);">分类：</font>

| **<font style="color:rgb(51, 51, 51);">符号</font>** | **<font style="color:rgb(51, 51, 51);">解释</font>**         |
| :--------------------------------------------------- | :----------------------------------------------------------- |
| <font style="color:rgb(51, 51, 51);">==</font>       | <font style="color:rgb(51, 51, 51);">就是判断左边跟右边是否相等，如果成立就是true，如果不成立就是false</font> |
| <font style="color:rgb(51, 51, 51);">!=</font>       | <font style="color:rgb(51, 51, 51);">就是判断左边跟右边是否不相等，如果成立就是true，如果不成立就是false</font> |
| <font style="color:rgb(51, 51, 51);">></font>        | <font style="color:rgb(51, 51, 51);">就是判断左边是否大于右边，如果成立就是true，如果不成立就是false</font> |
| <font style="color:rgb(51, 51, 51);">>=</font>       | <font style="color:rgb(51, 51, 51);">就是判断左边是否大于等于右边，如果成立就是true，如果不成立就是false</font> |
| <font style="color:rgb(51, 51, 51);"><</font>        | <font style="color:rgb(51, 51, 51);">就是判断左边是否小于右边，如果成立就是true，如果不成立就是false</font> |
| <font style="color:rgb(51, 51, 51);"><=</font>       | <font style="color:rgb(51, 51, 51);">就是判断左边是否小于等于右边，如果成立就是true，如果不成立就是false</font> |


#### <font style="color:rgb(26, 143, 55);">注意点：</font>

+ <font style="color:rgb(51, 51, 51);">关系运算符最终的结果一定是布尔类型的。要么是true，要么是false</font>
+ <font style="color:rgb(51, 51, 51);">在写==的时候，千万不要写成=</font>

### <font style="color:rgb(106, 90, 205);">逻辑运算符</font>

#### <font style="color:rgb(26, 143, 55);">& 和 | 的使用：</font>

<font style="color:rgb(51, 51, 51);">&：逻辑与（而且）</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">两边都为真，结果才是真，只要有一个为假，那么结果就是假。</font>

<font style="color:rgb(51, 51, 51);">|：逻辑或（或者）</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">两边都为假，结果才是假，只要有一个为真，那么结果就是真。</font>

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
// &  //两边都是真，结果才是真。
System.out.println(true & true);//true
System.out.println(false & false);//false
System.out.println(true & false);//false
System.out.println(false & true);//false

System.out.println("===================================");

// | 或  //两边都是假，结果才是假，如果有一个为真，那么结果就是真。
System.out.println(true | true);//true
System.out.println(false | false);//false
System.out.println(true | false);//true
System.out.println(false | true);//true
```

#### <font style="color:rgb(26, 143, 55);">使用场景：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">根据固定的场景，来选择使用&还是使用|</font>

+ <font style="color:rgb(51, 51, 51);">用户登录。</font><font style="color:rgb(51, 51, 51);">用户名输入正确 & 密码输入正确</font><font style="color:rgb(51, 51, 51);">因为只有用户名和密码同时都正确了，那么才能成功登录，只要有一个失败了都不行。</font><font style="color:rgb(51, 51, 51);">使用技巧：</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">当我们需要同时满足左边和右边两种情况时，可以使用且</font>
+ <font style="color:rgb(51, 51, 51);">丈母娘选女婿</font><font style="color:rgb(51, 51, 51);">丈母娘：女婿啊，你要么买个房子，要么买辆车。就可以把我的小棉袄穿走了。</font><font style="color:rgb(51, 51, 51);">买个房子 | 买辆车</font><font style="color:rgb(51, 51, 51);">两个条件中，只要满足其中一个，就可以穿走小棉袄了。</font><font style="color:rgb(51, 51, 51);">使用技巧：</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">当两种条件只要满足其中一个的时候，可以使用或</font>

#### <font style="color:rgb(26, 143, 55);">^（异或）的使用：</font>

<font style="color:rgb(51, 51, 51);">在以后用的不多，了解一下即可。</font>

<font style="color:rgb(51, 51, 51);">计算规则：如果两边相同，结果为 false，如果两边不同，结果为true</font>

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
//^   //左右不相同，结果才是true，左右相同结果就是false
System.out.println(true ^ true);//false
System.out.println(false ^ false);//false
System.out.println(true ^ false);//true
System.out.println(false ^ true);//true
```

#### <font style="color:rgb(26, 143, 55);">6.4 !（取反）的使用：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">是取反，也叫做非。</font>

<font style="color:rgb(51, 51, 51);">计算规则：false取反就是true，true取反就是false</font>

<font style="color:rgb(51, 51, 51);">温馨提示：</font>**<font style="color:rgb(64, 224, 208);">取反最多只用一个。</font>**

<font style="color:rgb(51, 51, 51);">代码示例：</font>

```plain
System.out.println(!false);//true
System.out.println(!true);//false

System.out.println(!!false);//注意点：取反最多只用一个。
```

### <font style="color:rgb(0, 119, 187);">短路逻辑运算符</font>

<font style="color:rgb(51, 51, 51);">分类： && ||</font>

#### <font style="color:rgb(26, 143, 55);">&&：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">运算结果跟&是一模一样的，只不过具有短路效果。</font>

#### <font style="color:rgb(26, 143, 55);">||：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">运算结果跟|是一模一样的。只不过具有短路效果。</font>

#### <font style="color:rgb(26, 143, 55);">逻辑核心：</font>

<font style="color:rgb(51, 51, 51);">	</font>**<font style="color:rgb(64, 224, 208);">当左边不能确定整个表达式的结果，右边才会执行。</font>**

<font style="color:rgb(51, 51, 51);">	</font>**<font style="color:rgb(64, 224, 208);">当左边能确定整个表达式的结果，那么右边就不会执行了。从而提高了代码的运行效率。</font>**

#### **<font style="color:rgb(64, 224, 208);">举例：</font>**

+ <font style="color:rgb(51, 51, 51);">用户登录案例</font><font style="color:rgb(51, 51, 51);">用户名正确 & 密码正确</font><font style="color:rgb(51, 51, 51);">如果使用一个&，不管用户名是否正确都会去验证密码。</font>

<font style="color:rgb(51, 51, 51);">思考：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">如果用户名输入正确了，那么我们再判断密码是否正确，是符合业务逻辑的。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">但是如果用户名输入错误了，那么现在还有必要去比较密码吗？没有不要了。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">如果使用一个&，那么左边和右边不管什么情况下，都会执行。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">用户名正确 && 密码正确</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">如果用户名输入正确了，那么才会验证密码是否输入正确。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">如果用户名输入错误了，那么就不会再去验证密码是否正确，最终的结果直接为false。从而提高了程序运行的效率。</font>

+ <font style="color:rgb(51, 51, 51);">丈母娘选女婿</font><font style="color:rgb(51, 51, 51);">有房 | 有车</font><font style="color:rgb(51, 51, 51);">首先先看看有没有房，发现有，然后再去看看有没有车。</font>

<font style="color:rgb(51, 51, 51);">思考：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">既然都有房子，干嘛还要去看车呢？多此一举。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">有房 || 有车</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">首先先看看有没有房，如果有，那么右边就不执行了。最终的结果直接为true。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">如果没有房子，才会去看右边有没有车。</font>

#### <font style="color:rgb(26, 143, 55);">总结：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">&& 和 & 、||和|的运行结果都是一模一样的。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">但是短路逻辑运算符可以提高程序的运行效率。</font>

#### <font style="color:rgb(26, 143, 55);">建议：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">最为常用： && || ！</font>

### <font style="color:rgb(106, 90, 205);">三元运算符</font>

<font style="color:rgb(51, 51, 51);">又叫做：三元表达式或者问号冒号表达式。</font>

#### <font style="color:rgb(26, 143, 55);">格式：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">关系表达式 ？ 表达式1 ：表达式2 ；</font>

#### <font style="color:rgb(26, 143, 55);">计算规则：</font>

+ <font style="color:rgb(51, 51, 51);">计算关系表达式的值。</font>
+ <font style="color:rgb(51, 51, 51);">如果关系表达式的值为真，那么执行表达式1。</font>
+ <font style="color:rgb(51, 51, 51);">如果关系表达式的值为假，那么执行表达式2。</font>

#### <font style="color:rgb(26, 143, 55);">注意点：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">三元运算符的最终结果一定要被使用，要么赋值给一个变量，要么直接打印出来。</font>

#### <font style="color:rgb(26, 143, 55);">案例：</font>

```plain
public class OperatorDemo12 {
    public static void main(String[] args) {
        //需求：求两个数的较大值
        int a = 10;
        int b = 20;

        //格式：关系表达式 ？ 表达式1 ： 表达式2 ；
        //注意点：
        //三元运算符的最终结果一定要被使用。
        //要么赋值给一个变量，要么直接输出。
       int max =  a > b ? a : b ;
        System.out.println(max);


        System.out.println(a > b ? a : b);
    }
}
```

### <font style="color:rgb(106, 90, 205);">9. 运算符的优先级</font>

<font style="color:rgb(51, 51, 51);">在Java中涉及了很多的运算符，每一种运算符都有各自的优先级。但是这些优先级不需要记忆。</font>

<font style="color:rgb(51, 51, 51);">咱们只要知道其中一点：</font>

<font style="color:rgb(51, 51, 51);">	小括号优先于所有。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950105229-7ddbc697-ccad-4fbe-b1e2-05a500f63f7d.png" />






### <font style="color:rgb(106, 90, 205);">原码 补码 反码</font>

**<font style="color:rgb(64, 224, 208);">原码</font>**<font style="color:rgb(51, 51, 51);">：十进制数据的二进制表现形式，</font>**<font style="color:rgb(64, 224, 208);">最左边是符号位，0为正，1为负</font>**


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950144202-5fcd6930-0d0e-4cd0-b305-1dd26a9fa96e.png" />


#### <font style="color:rgb(26, 143, 55);">一个字节：8个bit（字节）</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950148657-ff3e060b-f0d1-4e9f-8c4b-821024fd36e8.png" />




<font style="color:rgb(51, 51, 51);">原码的弊端</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">1.当是-1时，</font>

<font style="color:rgb(51, 51, 51);">反码：为了解决原码不能计算负数的问题而出现的。</font><font style="color:rgb(51, 51, 51);">计算规则：正数的反码不变，负数的反码在原码的基础上，符号位不变。数值取反，0变1,1变0.</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(242, 242, 242);"></font>
<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950169832-e5c63e09-89df-43ee-b11d-08fb85922542.png" />


<font style="color:rgb(51, 51, 51);">-56 + 1</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950177144-25083e04-addb-4d17-ba72-147e69318b13.png" />



<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950182009-06876820-7c2c-4167-8c09-68aac3ab7303.png" />



<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950187469-343c71b0-2c33-4a6d-83e0-8ce8f73e5b11.png" />



<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950191523-3ff53a96-93dc-4b3d-961d-b07a78cbfb7d.png" />


​

<font style="color:rgb(51, 51, 51);">然而,当-1 + 1 时,反码:1111 1111 再加 1 反码:0000 0000 还是0</font>
<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950196381-83dd0d16-114e-421a-ab21-75fe5e577f9a.png" />


#### **<font style="color:rgb(64, 224, 208);">原码</font>**

<font style="color:rgb(51, 51, 51);">十进制数据的二进制表现形式，最左边是符号位，0为正，1为负。</font><font style="color:rgb(51, 51, 51);">原码的弊端</font><font style="color:rgb(51, 51, 51);">利用原码进行计算的时候，如果是正数完全没有问题。</font><font style="color:rgb(51, 51, 51);">但是如果是负数计算，结果就出错，实际运算的方向，跟正确的运算方向是相反的。</font>

#### <font style="color:rgb(26, 143, 55);">反码出现的目的</font>

<font style="color:rgb(51, 51, 51);">为了解决原码不能计算负数的问题而出现的。</font><font style="color:rgb(51, 51, 51);">反码的计算规则</font><font style="color:rgb(51, 51, 51);">正数的反码不变，负数的反码在原码的基础上，符不颈，缴值取反，0变1,1变0。</font><font style="color:rgb(51, 51, 51);">反码的弊端</font><font style="color:rgb(51, 51, 51);">负数运算的时候，如果结果不跨0，是没有任何问题的，但是如果结果跨0，跟实际结果会有1的偏差。</font>

#### <font style="color:rgb(26, 143, 55);">补码出现的目的</font>

<font style="color:rgb(51, 51, 51);">为了解决负数计算时跨0的问题而出现的。</font><font style="color:rgb(51, 51, 51);">补码的计算规则</font><font style="color:rgb(51, 51, 51);">正数的补码不变，负数的补码在反码的基础上+1。</font><font style="color:rgb(51, 51, 51);">另外补码还能多记录一个特殊的值-128，该数据在1个字节下，没有原码和反码。</font><font style="color:rgb(51, 51, 51);">补码的注意点</font>**<font style="color:rgb(64, 224, 208);">计算机中的存储和计算都是以补码的形式进行的。</font>**

<font style="color:rgb(51, 51, 51);">基本的数据类型</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950228665-b2893ffc-4969-4e3c-b218-282417be35b9.png" />



<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950239038-15272288-2bcb-4bb1-990c-d43242245ad7.png" />


<font style="color:rgb(51, 51, 51);">强制转换，砍掉前面多余的位，正负，由保留下来的最高位代替。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950250649-905abfa1-4cab-4b11-9b90-24d9401f20b9.png" />


#### <font style="color:rgb(26, 143, 55);">逻辑与</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950255235-bc5a1ae0-5d48-4c4d-89e9-39b8ab9a1b22.png" />


#### <font style="color:rgb(26, 143, 55);">逻辑或 |</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950260905-1c0480b2-7860-4879-920d-1b88a963a050.png" />


#### <font style="color:rgb(26, 143, 55);">右移:</font>**<font style="color:rgb(64, 224, 208);">正数补零,负数补一</font>**


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950266601-0696a91a-cb1b-4bd5-a7f0-eb53760df2fb.png" />


#### <font style="color:rgb(26, 143, 55);">无符号右移</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1706950271784-620fc5eb-493b-4400-af40-f078041eb139.png" />




