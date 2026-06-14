---
title: 集合|包装类|方法|四种引用
date: 2024/09/28
tags:
  - 集合
  - 包装类
  - 方法
  - 四种引用
categories:
  - Java
hideComments: false
---

## 1. 集合（ArrayList）

#### 1.1 概念

+  什么是集合  
   提供一种存储空间可变的存储模型，存储的数据容量可以发生改变
+  ArrayList集合的特点  
   长度可以变化，只能存储引用数据类型。
+  泛型的使用（在ArrayList中是   这个    <数据类型>  ）  
   **用于约束集合中存储元素的数据类型**



#### 集合和数组的优势对比：

1.  长度可变，删除元素集合自动减。
2.  添加数据的时候不需要考虑索引，默认将数据添加到末尾
3.  存储类型

| 数组 | 可以存基本数据类型和引用数据类型                 |
| ---- | ------------------------------------------------ |
| 集合 | 可以存引用数据类型，基本数据类型需要变换成包装类 |






#### 1.2 ArrayList类常用方法

##### 1.2.1 构造方法

| 方法名             | 说明                 |
| ------------------ | -------------------- |
| public ArrayList() | 创建一个空的集合对象 |


```java
//JDK7之前
ArrayList<String> list = new ArrayList<String> ();

//JDK7及之后 等号之后的数据类型可以不写，但必须留着。
ArrayList<String> list = new ArrayList <>();
```



##### 1.2.2 成员方法

| 方法名                                  | 说明                                   |
| --------------------------------------- | -------------------------------------- |
| public boolean add(要添加的元素)增      | 将指定的元素追加到此集合的末尾         |
| public boolean remove(要删除的元素)删   | 删除指定元素,返回值表示是否删除成功    |
| public E  remove(int   index)删         | 删除指定索引处的元素，返回被删除的元素 |
| public E   set(int index,E   element)改 | 修改指定索引处的元素，返回被修改的元素 |
| public E   get(int   index)查           | 返回指定索引处的元素                   |
| public int   size()                     | 返回集合中的元素的个数                 |




##### 1.2.3 示例代码


```java
public class ArrayListDemo02 {
    public static void main(String[] args) {
        //创建集合
        ArrayList<String> array = new ArrayList<String>();
		//此时输出 []
        ///此时我们创建的是ArrayList的对象，而ArrayList是java已经写好的一个类
        //这个类在底层做了一些处理
        //打印对象不是地址值，而是集合中存储数据内容
        //在展示的时候会拿[]把所有的数据进行包裹
        //添加元素
        array.add("hello");
        array.add("world");
        array.add("java");

        //public boolean remove(Object o)：删除指定的元素，返回删除是否成功
        //        System.out.println(array.remove("world"));
        //        System.out.println(array.remove("javaee"));

        //public E remove(int index)：删除指定索引处的元素，返回被删除的元素
        //        System.out.println(array.remove(1));

        //IndexOutOfBoundsException
        //        System.out.println(array.remove(3));

        //public E set(int index,E element)：修改指定索引处的元素，返回被修改的元素
        //        System.out.println(array.set(1,"javaee"));

        //IndexOutOfBoundsException
        //        System.out.println(array.set(3,"javaee"));

        //public E get(int index)：返回指定索引处的元素
        //        System.out.println(array.get(0));
        //        System.out.println(array.get(1));
        //        System.out.println(array.get(2));
        //System.out.println(array.get(3)); //？？？？？？ 自己测试

        //public int size()：返回集合中的元素的个数
        System.out.println(array.size());

        //输出集合
        System.out.println("array:" + array);
    }
}
```



#### 1.3 ArrayList存储字符串并遍历

##### 1.3.1 案例需求


	创建一个存储字符串的集合，存储3个字符串元素，使用程序实现在控制台遍历该集合



##### 1.3.2 代码实现


```java
public class ArrayListDemo3 {
    public static void main(String[] args) {
        //1.创建集合对象
        ArrayList<String> list = new ArrayList<>();

        //2.添加元素
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");
        list.add("ddd");

        //3.遍历
        //快捷键: list.fori 正向遍历
        //list.forr 倒着遍历
        System.out.print("[");
        for (int i = 0; i < list.size(); i++) {
            //i 依次表示集合里面的每一个索引

            if(i == list.size() - 1){
                //最大索引
                System.out.print(list.get(i));
            }else{
                //非最大索引
                System.out.print(list.get(i) + ", ");
            }
        }
        System.out.print("]");
    }
}
```



#### 1.4 ArrayList存储学生对象并遍历

##### 1.4.1 案例需求

	创建一个存储学生对象的集合，存储3个学生对象，使用程序实现在控制台遍历该集合

##### 1.4.2 代码实现

```java
public class ArrayListDemo4 {
    public static void main(String[] args) {
        //1.创建集合对象，用来存储数据
        ArrayList<Student> list = new ArrayList<>();

        //2.创建学生对象
        Student s1 = new Student("zhangsan",16);
        Student s2 = new Student("lisi",15);
        Student s3 = new Student("wangwu",18);

        //3.把学生对象添加到集合中
        list.add(s1);
        list.add(s2);
        list.add(s3);

        //4.遍历
        for (int i = 0; i < list.size(); i++) {
            //i 依次表示集合中的每一个索引
            Student stu = list.get(i);
            System.out.println(stu.getName() + ", " + stu.getAge());
        }
/*
		for (int i = 0; i < list.size(); i++) {
            Student stu = list.get(i);
            System.out.println(stu);

        }
        输出结果为：
        Student{name = zhangsan, age = 23}
		Student{name = lisi, age = 24}
*/

    }
}
```



#### 1.5 查找用户的索引

需求：

1，main方法中定义一个集合，存入三个用户对象。

用户属性为：id，username，password

2，要求：定义一个方法，根据id查找对应的学生信息。

如果存在，返回索引

如果不存在，返回-1

**注意**  
如果我们要返回多个数据，可以把这些数据先放到一个容器当中，再把容器返回集合数组。



代码示例：

```java
public class ArrayListDemo6 {
    public static void main(String[] args) {
        /*需求：
        1，main方法中定义一个集合，存入三个用户对象。
        用户属性为：id，username，password
        2，要求：定义一个方法，根据id查找对应的学生信息。
        如果存在，返回索引
        如果不存在，返回-1*/


        //1.创建集合对象
        ArrayList<User> list = new ArrayList<>();

        //2.创建用户对象
        User u1 = new User("heima001", "zhangsan", "123456");
        User u2 = new User("heima002", "lisi", "1234");
        User u3 = new User("heima003", "wangwu", "1234qwer");

        //3.把用户对象添加到集合当中
        list.add(u1);
        list.add(u2);
        list.add(u3);

        //4.调用方法，通过id获取对应的索引
        int index = getIndex(list, "heima001");

        System.out.println(index);

    }


    //1.我要干嘛？  根据id查找对应的学生信息
    //2.我干这件事情需要什么才能完成？   集合 id
    //3.方法的调用处是否需要继续使用方法的结果？
    //要用必须返回，不要用可以返回也可以不返回
    //明确说明需要有返回值 int
    public static int getIndex(ArrayList<User> list, String id) {
        //遍历集合得到每一个元素
        for (int i = 0; i < list.size(); i++) {
            User u = list.get(i);
            String uid = u.getId();
            if(uid.equals(id)){
                return i;
            }
        }
        //因为只有当集合里面所有的元素都比较完了，才能断定id是不存在的。
        return -1;
    }
}
```



#### 1.6 判断用户的是否存在

```java
public class ArrayListDemo5 {
    public static void main(String[] args) {
       /* 需求：
        1，main方法中定义一个集合，存入三个用户对象。
        用户属性为：id，username，password
        2，要求：定义一个方法，根据id查找对应的学生信息。
        如果存在，返回true
        如果不存在，返回false*/

        //1.定义集合
        ArrayList<User> list = new ArrayList<>();

        //2.创建对象
        User u1 = new User("heima001","zhangsan","123456");
        User u2 = new User("heima002","lisi","12345678");
        User u3 = new User("heima003","wangwu","1234qwer");

        //3.把用户对象添加到集合当中
        list.add(u1);
        list.add(u2);
        list.add(u3);

        //4.调用方法，查询id是否存在
        boolean result = contains(list, "heima001");
        System.out.println(result);

    }

    //定义在测试类中的方法需要加static
    //1.我要干嘛？ 我要根据id查询学生是否存在
    //2.我干这件事情，需要什么才能完成？ 集合 id
    //3.方法的调用处是否需要使用方法的结果？
    //如果要用，必须返回，如果不用，可以返回也可以不返回
    //但是本题明确说明需要返回
    public static boolean contains(ArrayList<User> list, String id){
        //循环遍历集合，得到集合里面的每一个元素
        //再进行判断

        for (int i = 0; i < list.size(); i++) {
            //i 索引  list.get(i); 元素
            User u = list.get(i);
            //判断id是否存在，我是拿着谁跟谁比较
            //需要把用户对象里面的id拿出来再进行比较。
            String uid = u.getId();
            if(id.equals(uid)){
                return true;//return 关键字：作用就是结束方法。
            }
        }
        //只有当集合里面所有的元素全部比较完毕才能认为是不存在的。
        return false;
    }

}
```



#### 易错点

```java
public class Test5 {
public static void main(String[]args){
	//1.创建集合
	ArrayList<Student>list new ArrayList<>();
	//长度为0
	//2.键盘录入学生的信息并添加到集合当中
	for (int i=0;i<list.size();i++) {
	System.out.println("看看我执行了吗？")；
	Student s new Student();
	list.add(s);
    }
	//集合里面是否有学生对象
	//f
	System.out.println(list.size());//0
}
```



## 2 基本数据类型的对应包装类

| 基本数据类型                                     | 包装类        |
| ------------------------------------------------ | ------------- |
| byte                                             | Byte          |
| short                                            | Short         |
| **char**                                         | **Character** |
| **int**<br/> jdk5 之后int 与Integer 可以相互转化 | **Integer**   |
| long                                             | Long          |
| float                                            | Float         |
| double                                           | Double        |
| boolean                                          | Boolean       |




```java
ArrayList<integer>list new ArrayList<>();

//2.添加元素
/jdk5以后int Integer之间是可以互相转化的
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
```



### 装箱

**<font style="color:rgb(51,51,51);">装箱就是自动将基本数据类型转换为包装器类型（int-->Integer）；调用方法(原理)：Integer的valueOf(int) 方法 </font>**

### 拆箱

**<font style="color:rgb(51,51,51);">拆箱就是自动将包装器类型转换为基本数据类型（Integer-->int）。调用方法（原理）：Integer的intValue方法 </font>**

<font style="color:rgb(25, 27, 31);">我们有以下自动拆装箱的代码：</font>

```java
public static  void main(String[]args){
    Integer integer=1; //装箱
    int i=integer; //拆箱
}
```

<font style="color:rgb(25, 27, 31);">对以上代码进行反编译后可以得到以下代码：</font>

```java
public static  void main(String[]args){
    Integer integer=Integer.valueOf(1); 
    int i=integer.intValue(); 
}
```

<font style="color:rgb(51,51,51);">在</font><font style="color:rgb(51,51,51);">Java SE5</font><font style="color:rgb(51,51,51);">之前，如果要生成一个数值为</font><font style="color:rgb(51,51,51);">10</font><font style="color:rgb(51,51,51);">的</font><font style="color:rgb(51,51,51);">Integer</font><font style="color:rgb(51,51,51);">对象，必须这样进行： </font>

<font style="color:rgb(51,51,51);">而在从</font><font style="color:rgb(51,51,51);">Java SE5</font><font style="color:rgb(51,51,51);">开始就提供了自动装箱的特性，如果要生成一个数值为</font><font style="color:rgb(51,51,51);">10</font><font style="color:rgb(51,51,51);">的</font><font style="color:rgb(51,51,51);">Integer</font><font style="color:rgb(51,51,51);">对象，只需要 </font>

<font style="color:rgb(51,51,51);">这样就可以了： </font>

<font style="color:rgb(51,51,51);"></font>

### <font style="color:rgb(51,51,51);">基本数据类型缓存池</font>

<font style="color:rgb(44, 62, 80);">基本数据类型的包装类除了 Float 和 Double 之外，其他六个包装器类（Byte、Short、Integer、Long、Character、Boolean）都有常量缓存池。</font>

+ <font style="color:rgb(44, 62, 80);">Byte：-128~127，也就是所有的 byte 值</font>
+ <font style="color:rgb(44, 62, 80);">Short：-128~127</font>
+ <font style="color:rgb(44, 62, 80);">Long：-128~127</font>
+ <font style="color:rgb(44, 62, 80);">Character：\u0000 - \u007F</font>
+ <font style="color:rgb(44, 62, 80);">Boolean：true 和 false</font>

<font style="color:rgb(44, 62, 80);">拿 Integer 来举例子，Integer 类内部中内置了 256 个 Integer 类型的缓存数据，当使用的数据范围在 -128~127 之间时，会直接返回常量池中数据的引用，而不是创建对象，超过这个范围时会创建新的对象。</font>

<font style="color:rgb(44, 62, 80);">18 在 -128~127 之间，300 不在。</font>

<font style="color:rgb(44, 62, 80);">来看一下 valueOf 方法的源码吧。</font>

```plain
public static Integer valueOf(int i) {
    if (i >=IntegerCache.low && i <=IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

<font style="color:rgb(44, 62, 80);">“哦，原来是因为 Integer.IntegerCache 这个内部类的原因啊！”三妹好像发现了新大陆。</font>

<font style="color:rgb(44, 62, 80);">“是滴。来看一下 IntegerCache 这个静态内部类的源码吧。”</font>

```plain
private static class IntegerCache {
    static final int low = -128;
    static final int high;
    static final Integer cache[];

    static {
        // high value may be configured by property
        int h = 127;
        String integerCacheHighPropValue =
                sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
        if (integerCacheHighPropValue != null) {
            try {
                int i = parseInt(integerCacheHighPropValue);
                i = Math.max(i, 127);
                // Maximum array size is Integer.MAX_VALUE
                h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
            } catch( NumberFormatException nfe) {
                // If the property cannot be parsed into an int, ignore it.
            }
        }
        high = h;

        cache = new Integer[(high - low) + 1];
        int j = low;
        for(int k = 0; k < cache.length; k++)
            cache[k] = new Integer(j++);

        // range [-128, 127] must be interned (JLS7 5.1.7)
        assert Integer.IntegerCache.high >= 127;
    }

    private IntegerCache() {}
}
```

<font style="color:rgb(44, 62, 80);">详细解释下：当我们通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Integer.valueOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法获取整数对象时，会先检查该整数是否在 IntegerCache 中，如果在，则返回缓存中的对象，否则创建一个新的对象并缓存起来。</font>

<font style="color:rgb(44, 62, 80);">需要注意的是，如果使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new Integer()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">创建对象，即使值在 -128 到 127 范围内，也不会被缓存，每次都会创建新的对象。因此，推荐使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Integer.valueOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法获取整数对象。</font>

[<font style="color:rgb(44, 62, 80);">学习 static 关键字</font>](https://javabetter.cn/oo/static.html)<font style="color:rgb(44, 62, 80);">的时候，会详细解释静态代码块，你暂时先记住，静态代码块通常用来初始化一些静态变量，它会优先于 main() 方法执行。</font>

<font style="color:rgb(44, 62, 80);">在静态代码块中，low 为 -128，也就是缓存池的最小值；high 默认为 127，也就是缓存池的最大值，共计 256 个。</font>

_<font style="color:rgb(44, 62, 80);">可以在 JVM 启动的时候，通过 </font>_`_<font style="color:rgb(44, 62, 80);">-XX:AutoBoxCacheMax=NNN</font>_`_<font style="color:rgb(44, 62, 80);"> 来设置缓存池的大小，当然了，不能无限大，最大到 </font>_`_<font style="color:rgb(44, 62, 80);">Integer.MAX_VALUE - 129</font>_`

<font style="color:rgb(44, 62, 80);">之后，初始化 cache 数组的大小，然后遍历填充，下标从 0 开始。</font>

<font style="color:rgb(44, 62, 80);">“明白了吧？三妹。”我喝了一口水后，扭头看了看旁边的三妹。</font>

<font style="color:rgb(44, 62, 80);">“这段代码不难理解，难理解的是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">assert Integer.IntegerCache.high >= 127;</font>`<font style="color:rgb(44, 62, 80);">，这行代码是干嘛的呀？”三妹很是不解。</font>

<font style="color:rgb(44, 62, 80);">“哦哦，你挺细心的呀！”三妹真不错，求知欲望越来越强烈了。</font>

<font style="color:rgb(44, 62, 80);">assert 是 Java 中的一个关键字，寓意是断言，为了方便调试程序，并不是发布程序的组成部分。</font>

<font style="color:rgb(44, 62, 80);">默认情况下，断言是关闭的，可以在命令行运行 Java 程序的时候加上</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">-ea</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">参数打开断言。</font>

<font style="color:rgb(44, 62, 80);">来看这段代码。</font>

```plain
public class AssertTest {
    public static void main(String[] args) {
        int high = 126;
        assert high >= 127;
    }
}
```

<font style="color:rgb(44, 62, 80);">假设手动设置的缓存池大小为 126，显然不太符合缓存池的预期值 127，结果会输出什么呢？</font>

<font style="color:rgb(44, 62, 80);">直接在 Intellij IDEA 中打开命令行终端，进入 classes 文件，执行：</font>

```plain
/usr/libexec/java_home -v 1.8 --exec java -ea com.itwanger.s51.AssertTest
```

_<font style="color:rgb(44, 62, 80);">我用的 macOS 环境，装了好多个版本的 JDK，该命令可以切换到 JDK 8</font>_

<font style="color:rgb(44, 62, 80);">也可以不指定 Java 版本直接执行（加上</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">-ea</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">参数）：</font>

```plain
java -ea com.itwanger.s51.AssertTest
```

<font style="color:rgb(44, 62, 80);">“呀，报错了呀。”三妹喊道。</font>

```plain
Exception in thread "main" java.lang.AssertionError
        at com.itwanger.s51.AssertTest.main(AssertTest.java:9)
```

<font style="color:rgb(44, 62, 80);">“是滴，因为 126 小于 127。”我回答道。</font>

<font style="color:rgb(44, 62, 80);">“原来 assert 是这样用的啊，我明白了。”三妹表示学会了。</font>

<font style="color:rgb(44, 62, 80);">在 Java 中，针对一些基本数据类型（如 Integer、Long、Boolean 等），Java 会在程序启动时创建一些常用的对象并缓存在内存中，以提高程序的性能和节省内存开销。这些常用对象被缓存在一个固定的范围内，超出这个范围的值会被重新创建新的对象。</font>

<font style="color:rgb(44, 62, 80);">使用数据类型缓存池可以有效提高程序的性能和节省内存开销，但需要注意的是，在特定的业务场景下，缓存池可能会带来一些问题，例如缓存池中的对象被不同的线程同时修改，导致数据错误等问题。因此，在实际开发中，需要根据具体的业务需求来决定是否使用数据类型缓存池。</font>

### <font style="color:rgb(51,51,51);">面试题1： 以下代码会输出什么？ </font>

```java
public class Main {
 public static void main(String[] args) {
     Integer i1 = 100;
     Integer i2 = 100;
     Integer i3 = 200;
     Integer i4 = 200;
     
     System.out.println(i1==i2);
     System.out.println(i3==i4);
 }
}
```

<font style="color:rgb(51,51,51);">运行结果： </font>

```java
true
false
```

<font style="color:rgb(51,51,51);">为什么会出现这样的结果？输出结果表明 i1 和 i2 指向的是同一个对象，而 i3 和  i4 指向的是不同的对 </font>

<font style="color:rgb(51,51,51);">象。此时只需一看源码便知究竟，下面这段代码是</font><font style="color:rgb(51,51,51);">Integer</font><font style="color:rgb(51,51,51);">的</font><font style="color:rgb(51,51,51);">valueOf</font><font style="color:rgb(51,51,51);">方法的具体实现： </font>

```java
public static Integer valueOf(int i) {
 if(i >= -128 && i <= IntegerCache.high)
     return IntegerCache.cache[i + 128];
 else
     return new Integer(i);
}
```

<font style="color:rgb(51,51,51);">其中IntegerCache类的实现为：</font>

```java
private static class IntegerCache {
     static final int high;
     static final Integer cache[];
     static {
         final int low = -128;
         // high value may be configured by property
         int h = 127;
         if (integerCacheHighPropValue != null) {
             // java.lang.Long.decode() 方法将 String 解码为 Long。它接受十进制、十六进制和八进制数。
             // Use Long.decode here to avoid invoking methods that
             // require Integer's autoboxing cache to be initialized
             int i = Long.decode(integerCacheHighPropValue).intValue();
             i = Math.max(i, 127);
             // Maximum array size is Integer.MAX_VALUE
             h = Math.min(i, Integer.MAX_VALUE - -low);
         }
         high = h;
         cache = new Integer[(high - low) + 1];
         int j = low;
         for(int k = 0; k < cache.length; k++)
         cache[k] = new Integer(j++);
     }
     private IntegerCache() {}
}
```

<font style="color:rgb(51,51,51);">从这</font><font style="color:rgb(51,51,51);">2</font><font style="color:rgb(51,51,51);">段代码可以看出，在通过</font><font style="color:rgb(51,51,51);">valueOf</font><font style="color:rgb(51,51,51);">方法创建</font><font style="color:rgb(51,51,51);">Integer</font><font style="color:rgb(51,51,51);">对象的时候，如果数值在</font><font style="color:rgb(51,51,51);">[-128,127]</font><font style="color:rgb(51,51,51);">之间， </font>

<font style="color:rgb(51,51,51);">便返回指向</font><font style="color:rgb(51,51,51);">IntegerCache.cache</font><font style="color:rgb(51,51,51);">中已经存在的对象的引用；否则创建一个新的</font><font style="color:rgb(51,51,51);">Integer</font><font style="color:rgb(51,51,51);">对象。 </font>

<font style="color:rgb(51,51,51);">上面的代码中</font><font style="color:rgb(51,51,51);">i1</font><font style="color:rgb(51,51,51);">和</font><font style="color:rgb(51,51,51);">i2</font><font style="color:rgb(51,51,51);">的数值为</font><font style="color:rgb(51,51,51);">100</font><font style="color:rgb(51,51,51);">，因此会直接从</font><font style="color:rgb(51,51,51);">cache</font><font style="color:rgb(51,51,51);">中取已经存在的对象，所以</font><font style="color:rgb(51,51,51);">i1</font><font style="color:rgb(51,51,51);">和</font><font style="color:rgb(51,51,51);">i2</font><font style="color:rgb(51,51,51);">指向的是 </font>

<font style="color:rgb(51,51,51);">同一个对象，而i3和i4则是分别指向不同的对象。</font>

<font style="color:rgb(25, 27, 31);">Integer缓存支持-128到127之间的自动装箱过程。最大值127可以通过</font><font style="color:rgb(25, 27, 31);background-color:rgb(248, 248, 250);">-XX:AutoBoxCacheMax=size</font>

### <font style="color:rgb(51,51,51);">面试题2：以下代码输出什么</font>

```java
public class Main {
 public static void main(String[] args) {
 
     Double i1 = 100.0;
     Double i2 = 100.0;
     Double i3 = 200.0;
     Double i4 = 200.0;
     
     System.out.println(i1==i2);
     System.out.println(i3==i4);
 }
}
```

运行结果

<font style="color:rgb(51,51,51);">false </font>

<font style="color:rgb(51,51,51);">false</font>

<font style="color:rgb(51,51,51);">原因： 在某个范围内的整型数值的个数是有限的，而浮点数却不是。 </font>







## 3 方法

### <font style="color:rgb(51, 51, 51);">1.方法</font>

#### <font style="color:rgb(51, 51, 51);">1.1 概念</font>

<font style="color:rgb(51, 51, 51);">	</font>**<font style="color:rgb(51, 51, 51);">方法（method）</font>**<font style="color:rgb(51, 51, 51);">是程序中</font>**<font style="color:rgb(51, 51, 51);">最小的执行单元</font>**

+ <font style="color:rgb(51, 51, 51);">注意：</font>
    - <font style="color:rgb(51, 51, 51);">方法必须先创建才可以使用，该过程成为方法定义</font>
    - <font style="color:rgb(51, 51, 51);">方法创建后并不是直接可以运行的，需要手动使用后，才执行，该过程成为方法调用</font>

#### <font style="color:rgb(51, 51, 51);">1.2. 实际开发中，什么时候用到方法？</font>

<font style="color:rgb(51, 51, 51);">重复的代码、具有独立功能的代码可以抽取到方法中。</font>

#### <font style="color:rgb(51, 51, 51);">1.3. 实际开发中，方法有什么好处？</font>

<font style="color:rgb(51, 51, 51);">● 可以提高代码的复用性</font>

<font style="color:rgb(51, 51, 51);">● 可以提高代码的可维护性</font>

#### <font style="color:rgb(51, 51, 51);">1.4 方法的定义</font>

<font style="color:rgb(51, 51, 51);">通俗来说，就是把一些代码打包起来，</font>

<font style="color:rgb(51, 51, 51);">带返回值方法的定义：</font>

#### <font style="color:rgb(51, 51, 51);">1.5 方法的调用</font>

<font style="color:rgb(51, 51, 51);">方法定义后并不是直接运行的，而是手动调用才能知执行</font>

#### <font style="color:rgb(51, 51, 51);">1.6 </font>**<font style="color:rgb(51, 51, 51);">最简单的方法定义</font>**<font style="color:rgb(51, 51, 51);">和调用：</font>

**<font style="color:rgb(51, 51, 51);">定义</font>**

```plain
public static void 方法名 () {
     方法体（就是打包起来的代码）; 
 }
```

**<font style="color:rgb(51, 51, 51);">调用</font>**

方法名();

#### <font style="color:rgb(51, 51, 51);">1.7 带参数的方法定义和调用</font>

<font style="color:rgb(51, 51, 51);">参数：由数据类型和变量名组成 - 数据类型 变量名</font>

<font style="color:rgb(51, 51, 51);">示例：int a</font>

**<font style="color:rgb(51, 51, 51);">定义</font>**

```plain
public static void 方法名 (参数1) {
     方法体;
 }
 
 public static void 方法名 (参数1, 参数2, 参数3...) {
     方法体;
 }
```

<font style="color:rgb(51, 51, 51);">方法定义时，参数中的数据类型与变量名都不能缺少，缺少任意一个程序将报错</font>

<font style="color:rgb(51, 51, 51);">方法定义时，多个参数之间使用逗号( ，)分隔</font>

**<font style="color:rgb(51, 51, 51);">调用</font>**

```plain
方法名(参数);
 
 方法名(参数1,参数2);
```

#### <font style="color:rgb(51, 51, 51);">1.8 形参和实参</font>

1. <font style="color:rgb(51, 51, 51);">形参：方法定义中的参数</font>

<font style="color:rgb(51, 51, 51);">等同于变量定义格式，例如：int number</font>

1. <font style="color:rgb(51, 51, 51);">实参：方法调用中的参数</font>

<font style="color:rgb(51, 51, 51);">等同于使用变量或常量，例如： 10 number</font>

#### <font style="color:rgb(51, 51, 51);">1.9 带返回值方法的定义和调用</font>

**<font style="color:rgb(51, 51, 51);">定义</font>**

```plain
public static 数据类型 方法名 ( 参数 ) { 
     return 数据 ;
 }
```

**<font style="color:rgb(51, 51, 51);">调用</font>**

```plain
方法名 ( 参数 ) ;
 数据类型 变量名 = 方法名 ( 参数 ) ;
```

#### <font style="color:rgb(51, 51, 51);">1.10 注意事项</font>

+ <font style="color:rgb(51, 51, 51);">方法不能嵌套定义</font>
    - <font style="color:rgb(51, 51, 51);">示例代码：</font>
+ <font style="color:rgb(51, 51, 51);">void表示无返回值，可以省略return，也可以单独的书写return，后面不加数据</font>
    - <font style="color:rgb(51, 51, 51);">示例代码：</font>

```plain
public class MethodDemo {
     public static void main(String[] args) {
 
     }
 
     public static void methodOne() {
         public static void methodTwo() {
             // 这里会引发编译错误!!!
         }
     }
 }
```



```plain
public class MethodDemo {
     public static void main(String[] args) {
 
     }
     public static void methodTwo() {
         //return 100; 编译错误，因为没有具体返回值类型
         return; 
         //System.out.println(100); return语句后面不能跟数据或代码
     }
 }
```



#### <font style="color:rgb(51, 51, 51);">1.11 方法的通用格式</font>

+ <font style="color:rgb(51, 51, 51);">格式：</font>
+ <font style="color:rgb(51, 51, 51);">解释：</font>
    - <font style="color:rgb(51, 51, 51);">public static </font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">修饰符，目前先记住这个格式</font><font style="color:rgb(51, 51, 51);">返回值类型</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">方法操作完毕之后返回的数据的数据类型</font><font style="color:rgb(51, 51, 51);">			</font><font style="color:rgb(51, 51, 51);">如果方法操作完毕，没有数据返回，这里写void，而且方法体中一般不写return</font><font style="color:rgb(51, 51, 51);">方法名</font><font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">调用方法时候使用的标识</font><font style="color:rgb(51, 51, 51);">参数</font><font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">由数据类型和变量名组成，多个参数之间用逗号隔开</font><font style="color:rgb(51, 51, 51);">方法体</font><font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">完成功能的代码块</font><font style="color:rgb(51, 51, 51);">return</font><font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">如果方法操作完毕，有数据返回，用于把数据返回给调用者</font>
+ <font style="color:rgb(51, 51, 51);">定义方法时，要做到两个明确</font>
    - <font style="color:rgb(51, 51, 51);">明确返回值类型：主要是明确方法操作完毕之后是否有数据返回，如果没有，写void；如果有，写对应的数据类型</font>
    - <font style="color:rgb(51, 51, 51);">明确参数：主要是明确参数的类型和数量</font>
+ <font style="color:rgb(51, 51, 51);">调用方法时的注意：</font>
    - <font style="color:rgb(51, 51, 51);">void类型的方法，直接调用即可</font>
    - <font style="color:rgb(51, 51, 51);">非void类型的方法，推荐用变量接收调用</font>

```plain
public static 返回值类型 方法名(参数) {
    方法体; 
    return 数据 ;
 }
```



### <font style="color:rgb(51, 51, 51);">2 方法的重载 </font>**<font style="color:rgb(51,51,51);">Overload</font>**

#### <font style="color:rgb(51, 51, 51);">2.1 概念</font>

+ <font style="color:rgb(51, 51, 51);">方法重载指同一个类中定义的多个方法之间的关系，满足下列条件的多个方法相互构成重载</font>**<font style="color:rgb(51, 51, 51);">简单记</font>**<font style="color:rgb(51, 51, 51);">：</font>**<font style="color:rgb(51, 51, 51);">同一个类中，</font>****<font style="color:rgb(0, 0, 0);background-color:rgb(255, 255, 0);">方法名相同</font>****<font style="color:rgb(51, 51, 51);">，</font>****<font style="color:rgb(0, 0, 0);background-color:rgb(255, 255, 0);">参数不同</font>****<font style="color:rgb(51, 51, 51);">的方法。</font>****<font style="color:rgb(0, 0, 0);background-color:rgb(255, 255, 0);">与返回值</font>****<font style="color:rgb(51, 51, 51);">无关。</font>**<font style="color:rgb(51, 51, 51);">参数不同：</font>**<font style="color:rgb(51, 51, 51);">个数</font>**<font style="color:rgb(51, 51, 51);">，</font>**<font style="color:rgb(51, 51, 51);">类型</font>**<font style="color:rgb(51, 51, 51);">，</font>**<font style="color:rgb(51, 51, 51);">顺序</font>**<font style="color:rgb(51, 51, 51);">不同。</font><font style="color:rgb(51, 51, 51);">java虚拟机会通过参数的不同来区分同名的方法</font>
    - <font style="color:rgb(51, 51, 51);">多个方法在同一个类中</font>
    - <font style="color:rgb(51, 51, 51);">多个方法具有相同的方法名</font>
    - <font style="color:rgb(51, 51, 51);">多个方法的</font>**<font style="color:rgb(51, 51, 51);">参数不相同</font>**<font style="color:rgb(51, 51, 51);">，</font>**<font style="color:rgb(51, 51, 51);">类型不同</font>**<font style="color:rgb(51, 51, 51);">或者</font>**<font style="color:rgb(51, 51, 51);">数量不同</font>**
+ <font style="color:rgb(51, 51, 51);">注意：</font>
    - <font style="color:rgb(51, 51, 51);">重载仅对应方法的定义，与方法的调用无关，调用方式参照标准格式</font>
    - <font style="color:rgb(51, 51, 51);">重载仅针对同一个类中方法的名称与参数进行识别，与返回值无关，换句话说不能通过返回值来判定两个方法是否相互构成重载</font>
+ <font style="color:rgb(51, 51, 51);">正确范例：</font>
+ <font style="color:rgb(51, 51, 51);">错误范例：</font>

```plain
public class MethodDemo {
     public static void fn(int a) {
         //方法体
     }
     public static int fn(double a) {
         //方法体
     }
 }
 
 public class MethodDemo {
     public static float fn(int a) {
         //方法体
     }
     public static int fn(int a , int b) {
         //方法体
     }
 }
```



```plain
public class MethodDemo {
     public static void fn(int a) {
         //方法体
     }
     public static int fn(int a) {   /*错误原因：重载与返回值无关*/
         //方法体
     }
 }
 
 public class MethodDemo01 {
     public static void fn(int a) {
         //方法体
     }
 } 
 public class MethodDemo02 {
     public static int fn(double a) { /*错误原因：这是两个类的两个fn方法*/
         //方法体
     }
 }
```



**<font style="color:rgb(51, 51, 51);">顺序不同</font>**


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270237602-e53d4c8a-b89c-4f0a-8695-ba17f7bd8f16.png" />


### <font style="color:rgb(51, 51, 51);">3. 练习题</font>

#### <font style="color:rgb(51, 51, 51);">3.1 数组遍历</font>

+ <font style="color:rgb(51, 51, 51);">需求：设计一个方法用于数组遍历，要求遍历的结果是在一行上的。例如：[11, 22, 33, 44, 55] </font>
+ <font style="color:rgb(51, 51, 51);">思路：</font>
    - <font style="color:rgb(51, 51, 51);">①因为要求结果在一行上输出，所以这里需要在学习一个新的输出语句System.out.print(“内容”);</font>**<font style="background-color:rgb(255, 255, 0);">System.out.println(“内容”); 输出内容并换行</font>****<font style="background-color:rgb(255, 255, 0);">System.out.print(“内容”); 输出内容不换行</font>**<font style="color:rgb(51, 51, 51);">System.out.println(); 起到换行的作用</font>
    - <font style="color:rgb(51, 51, 51);">②定义一个数组，用静态初始化完成数组元素初始化</font>
    - <font style="color:rgb(51, 51, 51);">③定义一个方法，用数组遍历通用格式对数组进行遍历</font>
    - <font style="color:rgb(51, 51, 51);">④用新的输出语句修改遍历操作</font>
    - <font style="color:rgb(51, 51, 51);">⑤调用遍历方法</font>
+ <font style="color:rgb(51, 51, 51);">代码：</font>

```plain
public class Test1 {
     public static void main(String[] args) {
       /*  //先打印数据，再进行换行
         System.out.println("aaa");
         //只打印不换行
         System.out.print("bbb");
         System.out.print("ddd");
         //不打印任何内容，只换行
         System.out.println();
         System.out.print("cc");*/
         //设计一个方法用于数组遍历，要求遍历的结果是在一行上的。例如：[11, 22, 33, 44, 55]
         int[] arr = {1,2,3,4,5};
         printArr(arr);
     }
     //1.我要遍历数组
     //2.需要什么？  数组
     //3.调用处是否需要使用方法的结果。
     public static void printArr(int[] arr){
         System.out.print("[");
         for (int i = 0; i < arr.length; i++) {
             if(i == arr.length - 1){
                 System.out.println(arr[i] + "]");
             }else{
                 System.out.print(arr[i] + ", ");
             }
         }
     }
 }
```



### <font style="color:rgb(51, 51, 51);">4 方法的基本内存原理</font>

#### <font style="color:rgb(51, 51, 51);">4.1 方法调用的基本内存原理</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270247735-782c6085-9d18-4a60-93eb-73b7349d3802.png" />


### <font style="color:rgb(51, 51, 51);">5 基本数据类型 和 ·引用数据类型</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270253630-8a6c4726-64c7-4f09-9a2e-ed5b9e2e8144.png" />


#### 
<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270269954-fec1cb40-e2f7-4fa0-87e9-5daf5983130c.png" />


#### <font style="color:rgb(51, 51, 51);">从内存角度：基本数据类型和引用数据类型区别</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270262699-90aa6bde-2318-4253-9cad-1c4e0fca1e30.png" />


### <font style="color:rgb(51, 51, 51);">6 方法的值的传递</font>

#### <font style="color:rgb(51, 51, 51);">6.1 方法传递基本数据类型的原理</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2023/png/35376129/1678270279285-c222c462-ed61-4240-a30e-cf1ec398a10a.png" />








## <font style="color:rgb(0, 119, 187);">java中的四种引用，强弱软虚</font>

### <font style="color:rgb(106, 90, 205);">强引用</font>

+ <font style="color:rgb(51, 51, 51);">强引用是平常中使用最多的引用，强引用在程序内存不足（OOM）的时候也不会被回收，</font>
+ <font style="color:rgb(51, 51, 51);">使用方式</font>

```plain
String str = new String("str");
System.out.println(str);
```

### <font style="color:rgb(106, 90, 205);">软引用</font>

+ <font style="color:rgb(51, 51, 51);">软引用在程序内存不足时，会被回收</font>
+ <font style="color:rgb(51, 51, 51);">使用方式：</font>

```plain
// 注意：wrf这个引用也是强引用，它是指向SoftReference这个对象的，
// 这里的软引用指的是指向new String("str")的引用，也就是SoftReference类中T
SoftReference<String> wrf = new SoftReference<String>(new String("str"));
```

+ <font style="color:rgb(51, 51, 51);">可用场景： </font>

<font style="color:rgb(51, 51, 51);">	创建缓存的时候，创建的对象放进缓存中，当内存不足时，JVM就会回收早先创建的对象。</font>

### <font style="color:rgb(106, 90, 205);">弱引用</font>

+ <font style="color:rgb(51, 51, 51);">弱引用就是只要JVM垃圾回收器发现了它，就会将之回收</font>
+ `WeakReference<String> wrf = new WeakReference<String>(str);`
+ **<font style="color:rgb(64, 224, 208);">可用场景：</font>**<font style="color:rgb(51, 51, 51);"> Java源码中的 java.util.WeakHashMap 中的 key 就是使用弱引用，我的理解就是，一旦我不需要某个引用，JVM会自动帮我处理它，这样我就不需要做其它操作。</font>

### <font style="color:rgb(106, 90, 205);">虚引用</font>

+ <font style="color:rgb(51, 51, 51);">虚引用的回收机制跟弱引用差不多，但是它被回收之前，会被放入ReferenceQueue 中。注意哦，其它引用是被JVM回收后才被传入 ReferenceQueue 中的。由于这个机制，所以虚引用大多被用于引用销毁前的处理工作。还有就是，虚引用创建的时候，必须带有 ReferenceQueue ，</font>
+ <font style="color:rgb(51, 51, 51);">使用例子</font>

```java
PhantomReference<String> prf = new PhantomReference<String>(
    new String("str"),new ReferenceQueue<>()
);
```

<font style="color:rgb(51, 51, 51);">可用场景： </font>

<font style="color:rgb(51, 51, 51);">对象销毁前的一些操作，比如说资源释放等。 Object.finalize() 虽然也可以做这类动作，但是这个方式即不安全又低效，</font>

<font style="color:rgb(51, 51, 51);">上诉所说的几类引用，都是指对象本身的引用，而不是指Reference的四个子类的引用(SoftReference等)</font>




