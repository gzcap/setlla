---
title: 泛型|函数编程
date: 2024/09/28
tags:
  - 泛型
  - 函数编程
categories:
  - Java
hideComments: false
---

## 泛型

### 为什么会引入泛型

泛型的本质是为了参数化类型（在不创建新的类型的情况下，通过泛型指定的不同类型来控制形参具体限制的类型）。也就是说在泛型使用过程中，操作的数据类型被指定为一个参数，这种参数类型可以用在类、接口和方法中，分别被称为泛型类、泛型接口、泛型方法。

引入泛型的意义在于：

+ **适用于多种数据类型执行相同的代码**（代码复用）

我们通过一个例子来阐述，先看下下面的代码：

```java
private static int add(int a, int b) {
    System.out.println(a + "+" + b + "=" + (a + b));
    return a + b;
}

private static float add(float a, float b) {
    System.out.println(a + "+" + b + "=" + (a + b));
    return a + b;
}

private static double add(double a, double b) {
    System.out.println(a + "+" + b + "=" + (a + b));
    return a + b;
}
```

如果没有泛型，要实现不同类型的加法，每种类型都需要重载一个add方法；通过泛型，我们可以复用为一个方法：

```java
private static <T extends Number> double add(T a, T b) {
    System.out.println(a + "+" + b + "=" + (a.doubleValue() + b.doubleValue()));
    return a.doubleValue() + b.doubleValue();
}
```

+ 泛型中的类型在使用时指定，不需要强制类型转换（**类型安全**，编译器会**检查类型**）

看下这个例子：

```java
List list = new ArrayList();
list.add("xxString");
list.add(100d);
list.add(new Person());
```

我们在使用上述list中，list中的元素都是Object类型（无法约束其中的类型），所以在取出集合元素时需要人为的强制类型转化到具体的目标类型，且很容易出现`java.lang.ClassCastException`异常。



引入泛型，它将提供类型的约束，提供编译前的检查：

```java
List<String> list = new ArrayList<String>();

// list中只能放String, 不能放其它类型的元素
```

### 泛型的基本使用

> 我们通过一些例子来学习泛型的使用；泛型有三种使用方式，分别为：泛型类、泛型接口、泛型方法。一些例子可以参考《李兴华 - Java实战经典》。

#### 泛型类

+ 从一个简单的泛型类看起：

```java
class Point<T>{         // 此处可以随便写标识符号，T是type的简称  
    private T var ;     // var的类型由T指定，即：由外部指定  
    public T getVar(){  // 返回值的类型由外部决定  
        return var ;  
    }  
    public void setVar(T var){  // 设置的类型也由外部决定  
        this.var = var ;  
    }  
}  
public class GenericsDemo06{  
    public static void main(String args[]){  
        Point<String> p = new Point<String>() ;     // 里面的var类型为String类型  
        p.setVar("it") ;                            // 设置字符串  
        System.out.println(p.getVar().length()) ;   // 取得字符串的长度  
    }  
}
```

+ 多元泛型

```java
class Notepad<K,V>{       // 此处指定了两个泛型类型  
    private K key ;     // 此变量的类型由外部决定  
    private V value ;   // 此变量的类型由外部决定  
    public K getKey(){  
        return this.key ;  
    }  
    public V getValue(){  
        return this.value ;  
    }  
    public void setKey(K key){  
        this.key = key ;  
    }  
    public void setValue(V value){  
        this.value = value ;  
    }  
} 
public class GenericsDemo09{  
    public static void main(String args[]){  
        Notepad<String,Integer> t = null ;        // 定义两个泛型类型的对象  
        t = new Notepad<String,Integer>() ;       // 里面的key为String，value为Integer  
        t.setKey("汤姆") ;        // 设置第一个内容  
        t.setValue(20) ;            // 设置第二个内容  
        System.out.print("姓名；" + t.getKey()) ;      // 取得信息  
        System.out.print("，年龄；" + t.getValue()) ;       // 取得信息  
  
    }  
}
```

#### 泛型接口

+ 简单的泛型接口

```java
interface Info<T>{        // 在接口上定义泛型  
    public T getVar() ; // 定义抽象方法，抽象方法的返回值就是泛型类型  
}  
class InfoImpl<T> implements Info<T>{   // 定义泛型接口的子类  
    private T var ;             // 定义属性  
    public InfoImpl(T var){     // 通过构造方法设置属性内容  
        this.setVar(var) ;    
    }  
    public void setVar(T var){  
        this.var = var ;  
    }  
    public T getVar(){  
        return this.var ;  
    }  
} 
public class GenericsDemo24{  
    public static void main(String arsg[]){  
        Info<String> i = null;        // 声明接口对象  
        i = new InfoImpl<String>("汤姆") ;  // 通过子类实例化对象  
        System.out.println("内容：" + i.getVar()) ;  
    }  
}
```

#### 泛型方法

泛型方法，是在调用方法的时候指明泛型的具体类型。重点看下泛型的方法（图参考自：https://www.cnblogs.com/iyangyuan/archive/2013/04/09/3011274.html）

+ 定义泛型方法语法格式


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727090398697-8d7a753d-41af-4adc-a307-ae2dc72110eb.png" />


+ 调用泛型方法语法格式


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727090405496-cf812b21-144b-4a7f-8bae-5e59c1d89747.png" />


说明一下，定义泛型方法时，必须在返回值前边加一个`<T>`，来声明这是一个泛型方法，持有一个泛型`T`，然后才可以用泛型T作为方法的返回值。

`Class<T>`的作用就是指明泛型的具体类型，而`Class<T>`类型的变量c，可以用来创建泛型类的对象。

为什么要用变量c来创建对象呢？既然是泛型方法，就代表着我们不知道具体的类型是什么，也不知道构造方法如何，因此没有办法去new一个对象，但可以利用变量c的newInstance方法去创建对象，也就是利用反射创建对象。

泛型方法要求的参数是`Class<T>`类型，而`Class.forName()`方法的返回值也是`Class<T>`，因此可以用`Class.forName()`作为参数。其中，`forName()`方法中的参数是何种类型，返回的`Class<T>`就是何种类型。在本例中，`forName()`方法中传入的是User类的完整路径，因此返回的是`Class<User>`类型的对象，因此调用泛型方法时，变量c的类型就是`Class<User>`，因此泛型方法中的泛型T就被指明为User，因此变量obj的类型为User。

当然，泛型方法不是仅仅可以有一个参数`Class<T>`，可以根据需要添加其他参数。

**为什么要使用泛型方法呢**？因为泛型类要在实例化的时候就指明类型，如果想换一种类型，不得不重新new一次，可能不够灵活；而泛型方法可以在调用的时候指明类型，更加灵活。

#### 泛型的上下限

+ **先看下如下的代码，很明显是会报错的** （具体错误原因请参考后文）。

```java
class A{}
class B extends A {}

// 如下两个方法不会报错
public static void funA(A a) {
    // ...          
}
public static void funB(B b) {
    funA(b);
    // ...             
}

// 如下funD方法会报错
public static void funC(List<A> listA) {
    // ...          
}
public static void funD(List<B> listB) {
    funC(listB); // Unresolved compilation problem: The method doPrint(List<A>) in the type test is not applicable for the arguments (List<B>)
    // ...             
}
```

那么如何解决呢？

为了解决泛型中隐含的转换问题，Java泛型加入了类型参数的上下边界机制。`<? extends A>`表示该类型参数可以是A(上边界)或者A的子类类型。编译时擦除到类型A，即用A类型代替类型参数。这种方法可以解决开始遇到的问题，编译器知道类型参数的范围，如果传入的实例类型B是在这个范围内的话允许转换，这时只要一次类型转换就可以了，运行时会把对象当做A的实例看待。

```java
public static void funC(List<? extends A> listA) {
    // ...          
}
public static void funD(List<B> listB) {
    funC(listB); // OK
    // ...             
}
```

+ **泛型上下限的引入**

在使用泛型的时候，我们可以为传入的泛型类型实参进行上下边界的限制，如：类型实参只准传入某种类型的父类或某种类型的子类。

上限

```java
class Info<T extends Number>{    // 此处泛型只能是数字类型
    private T var ;        // 定义泛型变量
    public void setVar(T var){
        this.var = var ;
    }
    public T getVar(){
        return this.var ;
    }
    public String toString(){    // 直接打印
        return this.var.toString() ;
    }
}
public class demo1{
    public static void main(String args[]){
        Info<Integer> i1 = new Info<Integer>() ;        // 声明Integer的泛型对象
    }
}
```

下限

```java
class Info<T>{
    private T var ;        // 定义泛型变量
    public void setVar(T var){
        this.var = var ;
    }
    public T getVar(){
        return this.var ;
    }
    public String toString(){    // 直接打印
        return this.var.toString() ;
    }
}
public class GenericsDemo21{
    public static void main(String args[]){
        Info<String> i1 = new Info<String>() ;        // 声明String的泛型对象
        Info<Object> i2 = new Info<Object>() ;        // 声明Object的泛型对象
        i1.setVar("hello") ;
        i2.setVar(new Object()) ;
        fun(i1) ;
        fun(i2) ;
    }
    public static void fun(Info<? super String> temp){    // 只能接收String或Object类型的泛型，String类的父类只有Object类
        System.out.print(temp + ", ") ;
    }
}
```

**小结**

```java
<?> 无限制通配符
<? extends E> extends 关键字声明了类型的上界，表示参数化的类型可能是所指定的类型，或者是此类型的子类
<? super E> super 关键字声明了类型的下界，表示参数化的类型可能是指定的类型，或者是此类型的父类

// 使用原则《Effictive Java》
// 为了获得最大限度的灵活性，要在表示 生产者或者消费者 的输入参数上使用通配符，使用的规则就是：生产者有上限、消费者有下限
1. 如果参数化类型表示一个 T 的生产者，使用 < ? extends T>;
2. 如果它表示一个 T 的消费者，就使用 < ? super T>；
3. 如果既是生产又是消费，那使用通配符就没什么意义了，因为你需要的是精确的参数类型。
```

+ 再看一个实际例子，**加深印象**

```java
private  <E extends Comparable<? super E>> E max(List<? extends E> e1) {
    if (e1 == null){
        return null;
    }
    //迭代器返回的元素属于 E 的某个子类型
    Iterator<? extends E> iterator = e1.iterator();
    E result = iterator.next();
    while (iterator.hasNext()){
        E next = iterator.next();
        if (next.compareTo(result) > 0){
            result = next;
        }
    }
    return result;
}
```

上述代码中的类型参数 E 的范围是`<E extends Comparable<? super E>>`，我们可以分步查看：

+ 要进行比较，所以 E 需要是可比较的类，因此需要 `extends Comparable<…>`（注意这里不要和继承的 `extends` 搞混了，不一样）
+ `Comparable< ? super E>` 要对 E 进行比较，即 E 的消费者，所以需要用 super
+ 而参数 `List< ? extends E>` 表示要操作的数据是 E 的子类的列表，指定上限，这样容器才够大
+ **多个限制**

使用&符号

```java
public class Client {
    //工资低于2500元的上斑族并且站立的乘客车票打8折
    public static <T extends Staff & Passenger> void discount(T t){
        if(t.getSalary()<2500 && t.isStanding()){
            System.out.println("恭喜你！您的车票打八折！");
        }
    }
    public static void main(String[] args) {
        discount(new Me());
    }
}
```

#### 泛型数组

具体可以参考下文中关于泛型数组的理解。

首先，我们泛型数组相关的申明：

```java
List<String>[] list11 = new ArrayList<String>[10]; //编译错误，非法创建 
List<String>[] list12 = new ArrayList<?>[10]; //编译错误，需要强转类型 
List<String>[] list13 = (List<String>[]) new ArrayList<?>[10]; //OK，但是会有警告 
List<?>[] list14 = new ArrayList<String>[10]; //编译错误，非法创建 
List<?>[] list15 = new ArrayList<?>[10]; //OK 
List<String>[] list6 = new ArrayList[10]; //OK，但是会有警告
```

那么通常我们如何用呢？

+ 讨巧的使用场景

```java
public class GenericsDemo30{  
    public static void main(String args[]){  
        Integer i[] = fun1(1,2,3,4,5,6) ;   // 返回泛型数组  
        fun2(i) ;  
    }  
    public static <T> T[] fun1(T...arg){  // 接收可变参数  
        return arg ;            // 返回泛型数组  
    }  
    public static <T> void fun2(T param[]){   // 输出  
        System.out.print("接收泛型数组：") ;  
        for(T t:param){  
            System.out.print(t + "、") ;  
        }  
    }  
}
```

+ 合理使用

```java
public ArrayWithTypeToken(Class<T> type, int size) {
    array = (T[]) Array.newInstance(type, size);
}
```

具体可以查看后文解释。

### 深入理解泛型

> **提示**
>
> 我们通过泛型背后的类型擦除以及相关的问题来进一步理解泛型。

#### 如何理解Java中的泛型是伪泛型？泛型中类型擦除

Java泛型这个特性是从JDK 1.5才开始加入的，因此为了兼容之前的版本，Java泛型的实现采取了“**伪泛型**”的策略，即Java在语法上支持泛型，但是在编译阶段会进行所谓的“**类型擦除**”（Type Erasure），将所有的泛型表示（尖括号中的内容）都替换为具体的类型（其对应的原生态类型），就像完全没有泛型一样。理解类型擦除对于用好泛型是很有帮助的，尤其是一些看起来“疑难杂症”的问题，弄明白了类型擦除也就迎刃而解了。

**泛型的类型擦除原则**是：

+ 消除类型参数声明，即删除`<>`及其包围的部分。
+ 根据类型参数的上下界推断并替换所有的类型参数为原生态类型：如果类型参数是无限制通配符或没有上下界限定则替换为Object，如果存在上下界限定则根据子类替换原则取类型参数的最左边限定类型（即父类）。
+ 为了保证类型安全，必要时插入强制类型转换代码。
+ 自动产生“桥接方法”以保证擦除类型后的代码仍然具有泛型的“多态性”。

**那么如何进行擦除的呢**？

参考自：http://softlab.sdut.edu.cn/blog/subaochen/2017/01/generics-type-erasure/

+ 擦除类定义中的类型参数 - 无限制类型擦除

当类定义中的类型参数没有任何限制时，在类型擦除中直接被替换为Object，即形如`<T>`和`<?>`的类型参数都被替换为Object。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727090759630-4a7aafd0-1f5e-466b-a9a2-e2faafc6062c.png" />


+ 擦除类定义中的类型参数 - 有限制类型擦除

当类定义中的类型参数存在限制（上下界）时，在类型擦除中替换为类型参数的上界或者下界，比如形如`<T extends Number>`和`<? extends Number>`的类型参数被替换为`Number`，`<? super Number>`被替换为Object。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727090775219-6debd6c7-82bf-48b6-abd4-6057fee1c349.png" />


+ 擦除方法定义中的类型参数

擦除方法定义中的类型参数原则和擦除类定义中的类型参数是一样的，这里仅以擦除方法定义中的有限制类型参数为例。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727090782574-a2f78604-5a2c-4234-8eb5-e26ae95bbbd8.png" />


#### 如何证明类型的擦除呢？

我们通过两个例子证明Java类型的类型擦除

+ 原始类型相等

```java
public class Test {

    public static void main(String[] args) {

        ArrayList<String> list1 = new ArrayList<String>();
        list1.add("abc");

        ArrayList<Integer> list2 = new ArrayList<Integer>();
        list2.add(123);

        System.out.println(list1.getClass() == list2.getClass()); // true
    }
}
```

在这个例子中，我们定义了两个ArrayList数组，不过一个是`ArrayList<String>`泛型类型的，只能存储字符串；一个是`ArrayList<Integer>`泛型类型的，只能存储整数，最后，我们通过list1对象和list2对象的`getClass()`方法获取他们的类的信息，最后发现结果为true。说明泛型类型String和Integer都被擦除掉了，只剩下原始类型。

+ 通过反射添加其它类型元素

```java
public class Test {

    public static void main(String[] args) throws Exception {

        ArrayList<Integer> list = new ArrayList<Integer>();

        list.add(1);  //这样调用 add 方法只能存储整形，因为泛型类型的实例为 Integer

        list.getClass().getMethod("add", Object.class).invoke(list, "asd");

        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }
    }

}
```

在程序中定义了一个`ArrayList`泛型类型实例化为`Integer`对象，如果直接调用`add()`方法，那么只能存储整数数据，不过当我们利用反射调用`add()`方法的时候，却可以存储字符串，这说明了`Integer`泛型实例在编译之后被擦除掉了，只保留了原始类型。

#### 如何理解类型擦除后保留的原始类型?

在上面，两次提到了原始类型，什么是原始类型？

**原始类型** 就是擦除去了泛型信息，最后在字节码中的类型变量的真正类型，无论何时定义一个泛型，相应的原始类型都会被自动提供，类型变量擦除，并使用其限定类型（无限定的变量用Object）替换。

+ 原始类型Object

```java
class Pair<T> {  
    private T value;  
    public T getValue() {  
        return value;  
    }  
    public void setValue(T  value) {  
        this.value = value;  
    }  
}
```

Pair的原始类型为:

```java
class Pair {  
    private Object value;  
    public Object getValue() {  
        return value;  
    }  
    public void setValue(Object  value) {  
        this.value = value;  
    }  
}
```

因为在`Pair<T>`中，`T` 是一个无限定的类型变量，所以用Object替换，其结果就是一个普通的类，如同泛型加入Java语言之前的已经实现的样子。在程序中可以包含不同类型的Pair，如`Pair<String>`或`Pair<Integer>`，但是擦除类型后他们的就成为原始的Pair类型了，原始类型都是Object。

从上面章节，我们也可以明白ArrayList被擦除类型后，原始类型也变为Object，所以通过反射我们就可以存储字符串了。

如果类型变量有限定，那么原始类型就用第一个边界的类型变量类替换。

比如: Pair这样声明的话

```java
public class Pair<T extends Comparable> {}
```

那么原始类型就是Comparable。

要区分原始类型和泛型变量的类型。

在调用泛型方法时，可以指定泛型，也可以不指定泛型:

+ 在不指定泛型的情况下，泛型变量的类型为该方法中的几种类型的同一父类的最小级，直到Object
+ 在指定泛型的情况下，该方法的几种类型必须是该泛型的实例的类型或者其子类

```java
public class Test {  
    public static void main(String[] args) {  

        /**不指定泛型的时候*/  
        int i = Test.add(1, 2); //这两个参数都是Integer，所以T为Integer类型  
        Number f = Test.add(1, 1.2); //这两个参数一个是Integer，一个是Float，所以取同一父类的最小级，为Number  
        Object o = Test.add(1, "asd"); //这两个参数一个是Integer，一个是String，所以取同一父类的最小级，为Object  

        /**指定泛型的时候*/  
        int a = Test.<Integer>add(1, 2); //指定了Integer，所以只能为Integer类型或者其子类  
        int b = Test.<Integer>add(1, 2.2); //编译错误，指定了Integer，不能为Float  
        Number c = Test.<Number>add(1, 2.2); //指定为Number，所以可以为Integer和Float  
    }  

    //这是一个简单的泛型方法  
    public static <T> T add(T x,T y){  
        return y;  
    }  
}
```

其实在泛型类中，不指定泛型的时候，也差不多，只不过这个时候的泛型为Object，就比如ArrayList中，如果不指定泛型，那么这个ArrayList可以存储任意的对象。

+ Object泛型

```java
public static void main(String[] args) {  
    ArrayList list = new ArrayList();  
    list.add(1);  
    list.add("121");  
    list.add(new Date());  
}
```

#### 如何理解泛型的编译期检查？

既然说类型变量会在编译的时候擦除掉，那为什么我们往 ArrayList 创建的对象中添加整数会报错呢？不是说泛型变量String会在编译的时候变为Object类型吗？为什么不能存别的类型呢？既然类型擦除了，如何保证我们只能使用泛型变量限定的类型呢？

Java编译器是通过先检查代码中泛型的类型，然后在进行类型擦除，再进行编译。

例如：

```java
public static  void main(String[] args) {  

    ArrayList<String> list = new ArrayList<String>();  
    list.add("123");  
    list.add(123);//编译错误  
}
```

在上面的程序中，使用add方法添加一个整型，在IDE中，直接会报错，说明这就是在编译之前的检查，因为如果是在编译之后检查，类型擦除后，原始类型为Object，是应该允许任意引用类型添加的。可实际上却不是这样的，这恰恰说明了关于泛型变量的使用，是会在编译之前检查的。

那么，**这个类型检查是针对谁的呢**？我们先看看参数化类型和原始类型的兼容。

以 ArrayList举例子，以前的写法:

```java
ArrayList list = new ArrayList();
```

现在的写法:

```java
ArrayList<String> list = new ArrayList<String>();
```

如果是与以前的代码兼容，各种引用传值之间，必然会出现如下的情况：

```java
ArrayList<String> list1 = new ArrayList(); //第一种 情况
ArrayList list2 = new ArrayList<String>(); //第二种 情况
```

这样是没有错误的，不过会有个编译时警告。

不过在第一种情况，可以实现与完全使用泛型参数一样的效果，第二种则没有效果。

因为类型检查就是编译时完成的，new ArrayList()只是在内存中开辟了一个存储空间，可以存储任何类型对象，而真正涉及类型检查的是它的引用，因为我们是使用它引用list1来调用它的方法，比如说调用add方法，所以list1引用能完成泛型类型的检查。而引用list2没有使用泛型，所以不行。

举例子：

```java
public class Test {  

    public static void main(String[] args) {  

        ArrayList<String> list1 = new ArrayList();  
        list1.add("1"); //编译通过  
        list1.add(1); //编译错误  
        String str1 = list1.get(0); //返回类型就是String  

        ArrayList list2 = new ArrayList<String>();  
        list2.add("1"); //编译通过  
        list2.add(1); //编译通过  
        Object object = list2.get(0); //返回类型就是Object  

        new ArrayList<String>().add("11"); //编译通过  
        new ArrayList<String>().add(22); //编译错误  

        String str2 = new ArrayList<String>().get(0); //返回类型就是String  
    }  
}
```

通过上面的例子，我们可以明白，**类型检查就是针对引用的，谁是一个引用，用这个引用调用泛型方法，就会对这个引用调用的方法进行类型检测，而无关它真正引用的对象**。

**泛型中参数话类型为什么不考虑继承关系**？

在Java中，像下面形式的引用传递是不允许的:

```java
ArrayList<String> list1 = new ArrayList<Object>(); //编译错误  
ArrayList<Object> list2 = new ArrayList<String>(); //编译错误
```

+ 我们先看第一种情况，将第一种情况拓展成下面的形式：

```java
ArrayList<Object> list1 = new ArrayList<Object>();  
list1.add(new Object());  
list1.add(new Object());  
ArrayList<String> list2 = list1; //编译错误
```

实际上，在第4行代码的时候，就会有编译错误。那么，我们先假设它编译没错。那么当我们使用list2引用用get()方法取值的时候，返回的都是String类型的对象（上面提到了，类型检测是根据引用来决定的），可是它里面实际上已经被我们存放了Object类型的对象，这样就会有`ClassCastException`了。所以为了避免这种极易出现的错误，Java不允许进行这样的引用传递。（这也是泛型出现的原因，就是为了解决类型转换的问题，我们不能违背它的初衷）。

+ 再看第二种情况，将第二种情况拓展成下面的形式：

```java
ArrayList<String> list1 = new ArrayList<String>();  
list1.add(new String());  
list1.add(new String());

ArrayList<Object> list2 = list1; //编译错误
```

没错，这样的情况比第一种情况好的多，最起码，在我们用list2取值的时候不会出现ClassCastException，因为是从String转换为Object。可是，这样做有什么意义呢，泛型出现的原因，就是为了解决类型转换的问题。

我们使用了泛型，到头来，还是要自己强转，违背了泛型设计的初衷。所以java不允许这么干。再说，你如果又用list2往里面add()新的对象，那么到时候取得时候，我怎么知道我取出来的到底是String类型的，还是Object类型的呢？

所以，要格外注意，泛型中的引用传递的问题。

#### [#](#如何理解泛型的多态-泛型的桥接方法) 如何理解泛型的多态？泛型的桥接方法

类型擦除会造成多态的冲突，而JVM解决方法就是桥接方法。

现在有这样一个泛型类：

```java
class Pair<T> {  

    private T value;  

    public T getValue() {  
        return value;  
    }  

    public void setValue(T value) {  
        this.value = value;  
    }  
}
```

然后我们想要一个子类继承它。

```java
class DateInter extends Pair<Date> {  

    @Override  
    public void setValue(Date value) {  
        super.setValue(value);  
    }  

    @Override  
    public Date getValue() {  
        return super.getValue();  
    }  
}
```

在这个子类中，我们设定父类的泛型类型为`Pair<Date>`，在子类中，我们覆盖了父类的两个方法，我们的原意是这样的：将父类的泛型类型限定为Date，那么父类里面的两个方法的参数都为Date类型。

```java
public Date getValue() {  
    return value;  
}  

public void setValue(Date value) {  
    this.value = value;  
}
```

所以，我们在子类中重写这两个方法一点问题也没有，实际上，从他们的`@Override`标签中也可以看到，一点问题也没有，实际上是这样的吗？

分析：实际上，类型擦除后，父类的的泛型类型全部变为了原始类型Object，所以父类编译之后会变成下面的样子：

```java
class Pair {  
    private Object value;  

    public Object getValue() {  
        return value;  
    }  

    public void setValue(Object  value) {  
        this.value = value;  
    }  
}
```

再看子类的两个重写的方法的类型：

```java
@Override  
public void setValue(Date value) {  
    super.setValue(value);  
}  
@Override  
public Date getValue() {  
    return super.getValue();  
}
```

先来分析setValue方法，父类的类型是Object，而子类的类型是Date，参数类型不一样，这如果实在普通的继承关系中，根本就不会是重写，而是重载。 我们在一个main方法测试一下：

```java
public static void main(String[] args) throws ClassNotFoundException {  
        DateInter dateInter = new DateInter();  
        dateInter.setValue(new Date());                  
        dateInter.setValue(new Object()); //编译错误  
}
```

如果是重载，那么子类中两个setValue方法，一个是参数Object类型，一个是Date类型，可是我们发现，根本就没有这样的一个子类继承自父类的Object类型参数的方法。所以说，却是是重写了，而不是重载了。

**为什么会这样呢**？

原因是这样的，我们传入父类的泛型类型是Date，`Pair<Date>`，我们的本意是将泛型类变为如下：

```java
class Pair {  
    private Date value;  
    public Date getValue() {  
        return value;  
    }  
    public void setValue(Date value) {  
        this.value = value;  
    }  
}
```

然后再子类中重写参数类型为Date的那两个方法，实现继承中的多态。

可是由于种种原因，虚拟机并不能将泛型类型变为Date，只能将类型擦除掉，变为原始类型Object。这样，我们的本意是进行重写，实现多态。可是类型擦除后，只能变为了重载。这样，类型擦除就和多态有了冲突。JVM知道你的本意吗？知道！！！可是它能直接实现吗，不能！！！如果真的不能的话，那我们怎么去重写我们想要的Date类型参数的方法啊。

于是JVM采用了一个特殊的方法，来完成这项功能，那就是桥方法。

首先，我们用javap -c className的方式反编译下DateInter子类的字节码，结果如下：

```java
class com.tao.test.DateInter extends com.tao.test.Pair<java.util.Date> {  
  com.tao.test.DateInter();  
    Code:  
       0: aload_0  
       1: invokespecial #8                  // Method com/tao/test/Pair."<init>":()V  
       4: return  

  public void setValue(java.util.Date);  //我们重写的setValue方法  
    Code:  
       0: aload_0  
       1: aload_1  
       2: invokespecial #16                 // Method com/tao/test/Pair.setValue:(Ljava/lang/Object;)V  
       5: return  

  public java.util.Date getValue();    //我们重写的getValue方法  
    Code:  
       0: aload_0  
       1: invokespecial #23                 // Method com/tao/test/Pair.getValue:()Ljava/lang/Object;  
       4: checkcast     #26                 // class java/util/Date  
       7: areturn  

  public java.lang.Object getValue();     //编译时由编译器生成的桥方法  
    Code:  
       0: aload_0  
       1: invokevirtual #28                 // Method getValue:()Ljava/util/Date 去调用我们重写的getValue方法;  
       4: areturn  

  public void setValue(java.lang.Object);   //编译时由编译器生成的桥方法  
    Code:  
       0: aload_0  
       1: aload_1  
       2: checkcast     #26                 // class java/util/Date  
       5: invokevirtual #30                 // Method setValue:(Ljava/util/Date; 去调用我们重写的setValue方法)V  
       8: return  
}
```

从编译的结果来看，我们本意重写setValue和getValue方法的子类，竟然有4个方法，其实不用惊奇，最后的两个方法，就是编译器自己生成的桥方法。可以看到桥方法的参数类型都是Object，也就是说，子类中真正覆盖父类两个方法的就是这两个我们看不到的桥方法。而打在我们自己定义的setvalue和getValue方法上面的@Oveerride只不过是假象。而桥方法的内部实现，就只是去调用我们自己重写的那两个方法。

所以，虚拟机巧妙的使用了桥方法，来解决了类型擦除和多态的冲突。

不过，要提到一点，这里面的setValue和getValue这两个桥方法的意义又有不同。

setValue方法是为了解决类型擦除与多态之间的冲突。

而getValue却有普遍的意义，怎么说呢，如果这是一个普通的继承关系：

那么父类的getValue方法如下：

```java
public Object getValue() {  
    return super.getValue();  
}
```

而子类重写的方法是：

```java
public Date getValue() {  
    return super.getValue();  
}
```

其实这在普通的类继承中也是普遍存在的重写，这就是协变。

并且，还有一点也许会有疑问，子类中的桥方法`Object getValue()`和`Date getValue()`是同时存在的，可是如果是常规的两个方法，他们的方法签名是一样的，也就是说虚拟机根本不能分别这两个方法。如果是我们自己编写Java代码，这样的代码是无法通过编译器的检查的，但是虚拟机却是允许这样做的，因为虚拟机通过参数类型和返回类型来确定一个方法，所以编译器为了实现泛型的多态允许自己做这个看起来“不合法”的事情，然后交给虚拟器去区别。

#### 如何理解基本类型不能作为泛型类型？

比如，我们没有`ArrayList<int>`，只有`ArrayList<Integer>`, 为何？

因为当类型擦除后，ArrayList的原始类型变为Object，但是Object类型不能存储int值，只能引用Integer的值。

另外需要注意，我们能够使用`list.add(1)`是因为Java基础类型的自动装箱拆箱操作。

#### 如何理解泛型类型不能实例化？

不能实例化泛型类型, 这本质上是由于类型擦除决定的：

我们可以看到如下代码会在编译器中报错：

```java
T test = new T(); // ERROR
```

因为在 Java 编译期没法确定泛型参数化类型，也就找不到对应的类字节码文件，所以自然就不行了，此外由于`T` 被擦除为 `Object`，如果可以 `new T()` 则就变成了 `new Object()`，失去了本意。     如果我们确实需要实例化一个泛型，应该如何做呢？可以通过反射实现：

```java
static <T> T newTclass (Class < T > clazz) throws InstantiationException, IllegalAccessException {
    T obj = clazz.newInstance();
    return obj;
}
```

#### 泛型数组：能不能采用具体的泛型类型进行初始化？

我们先来看下Oracle官网提供的一个例子：

```java
List<String>[] lsa = new List<String>[10]; // Not really allowed.
Object o = lsa;
Object[] oa = (Object[]) o;
List<Integer> li = new ArrayList<Integer>();
li.add(new Integer(3));
oa[1] = li; // Unsound, but passes run time store check
String s = lsa[1].get(0); // Run-time error ClassCastException.
```

由于 JVM 泛型的擦除机制，所以上面代码可以给 `oa[1]` 赋值为 ArrayList 也不会出现异常，但是在取出数据的时候却要做一次类型转换，所以就会出现 `ClassCastException`，如果可以进行泛型数组的声明则上面说的这种情况在编译期不会出现任何警告和错误，只有在运行时才会出错，但是泛型的出现就是为了消灭 `ClassCastException`，所以如果 Java 支持泛型数组初始化操作就是搬起石头砸自己的脚。

而对于下面的代码来说是成立的：

```java
List<?>[] lsa = new List<?>[10]; // OK, array of unbounded wildcard type.
Object o = lsa;
Object[] oa = (Object[]) o;
List<Integer> li = new ArrayList<Integer>();
li.add(new Integer(3));
oa[1] = li; // Correct.
Integer i = (Integer) lsa[1].get(0); // OK
```

所以说采用通配符的方式初始化泛型数组是允许的，因为对于通配符的方式最后取出数据是要做显式类型转换的，符合预期逻辑。综述就是说Java 的泛型数组初始化时数组类型不能是具体的泛型类型，只能是通配符的形式，因为具体类型会导致可存入任意类型对象，在取出时会发生类型转换异常，会与泛型的设计思想冲突，而通配符形式本来就需要自己强转，符合预期。

Oracle 官方文档：[https://docs.oracle.com/javase/tutorial/extra/generics/fineprint.html在新窗口打开](https://docs.oracle.com/javase/tutorial/extra/generics/fineprint.html)

更进一步的，我们看看如下的代码：

```java
List<String>[] list11 = new ArrayList<String>[10]; //编译错误，非法创建 
List<String>[] list12 = new ArrayList<?>[10]; //编译错误，需要强转类型 
List<String>[] list13 = (List<String>[]) new ArrayList<?>[10]; //OK，但是会有警告 
List<?>[] list14 = new ArrayList<String>[10]; //编译错误，非法创建 
List<?>[] list15 = new ArrayList<?>[10]; //OK 
List<String>[] list6 = new ArrayList[10]; //OK，但是会有警告
```

因为在 Java 中是不能创建一个确切的泛型类型的数组的，除非是采用通配符的方式且要做显式类型转换才可以。

####  泛型数组：如何正确的初始化泛型数组实例？

这个无论我们通过`new ArrayList[10]` 的形式还是通过泛型通配符的形式初始化泛型数组实例都是存在警告的，也就是说仅仅语法合格，运行时潜在的风险需要我们自己来承担，因此那些方式初始化泛型数组都不是最优雅的方式。

我们在使用到泛型数组的场景下应该尽量使用列表集合替换，此外也可以通过使用 `java.lang.reflect.Array.newInstance(Class<T> componentType, int length)` 方法来创建一个具有指定类型和维度的数组，如下：

```java
public class ArrayWithTypeToken<T> {
    private T[] array;

    public ArrayWithTypeToken(Class<T> type, int size) {
        array = (T[]) Array.newInstance(type, size);
    }

    public void put(int index, T item) {
        array[index] = item;
    }

    public T get(int index) {
        return array[index];
    }

    public T[] create() {
        return array;
    }
}
//...

ArrayWithTypeToken<Integer> arrayToken = new ArrayWithTypeToken<Integer>(Integer.class, 100);
Integer[] array = arrayToken.create();
```

所以使用反射来初始化泛型数组算是优雅实现，因为泛型类型 `T`在运行时才能被确定下来，我们能创建泛型数组也必然是在 Java 运行时想办法，而运行时能起作用的技术最好的就是反射了。

####  如何理解泛型类中的静态方法和静态变量？

泛型类中的静态方法和静态变量不可以使用泛型类所声明的泛型类型参数

举例说明：

```java
public class Test2<T> {    
    public static T one;   //编译错误    
    public static  T show(T one){ //编译错误    
        return null;    
    }    
}
```

因为泛型类中的泛型参数的实例化是在定义对象的时候指定的，而静态变量和静态方法不需要使用对象来调用。对象都没有创建，如何确定这个泛型参数是何种类型，所以当然是错误的。

但是要注意区分下面的一种情况：

```java
public class Test2<T> {    

    public static <T >T show(T one){ //这是正确的    
        return null;    
    }    
}
```

因为这是一个泛型方法，在泛型方法中使用的T是自己在方法中定义的 T，而不是泛型类中的T。

####  如何理解异常中使用泛型？

+ **不能抛出也不能捕获泛型类的对象**。事实上，泛型类扩展Throwable都不合法。例如：下面的定义将不会通过编译：

```java
public class Problem<T> extends Exception {

}
```

为什么不能扩展Throwable，因为异常都是在运行时捕获和抛出的，而在编译的时候，泛型信息全都会被擦除掉，那么，假设上面的编译可行，那么，在看下面的定义：

```java
try{

} catch(Problem<Integer> e1) {

} catch(Problem<Number> e2) {

}
```

类型信息被擦除后，那么两个地方的catch都变为原始类型Object，那么也就是说，这两个地方的catch变的一模一样,就相当于下面的这样

```java
try{

} catch(Problem<Object> e1) {

} catch(Problem<Object> e2) {

}
```

这个当然就是不行的。

+ **不能再catch子句中使用泛型变量**

```java
public static <T extends Throwable> void doWork(Class<T> t) {
    try {
        ...
    } catch(T e) { //编译错误
        ...
    }
}
```

因为泛型信息在编译的时候已经变为原始类型，也就是说上面的T会变为原始类型Throwable，那么如果可以再catch子句中使用泛型变量，那么，下面的定义呢：

```java
public static <T extends Throwable> void doWork(Class<T> t){
    try {

    } catch(T e) { //编译错误

    } catch(IndexOutOfBounds e) {

    }                         
}
```

根据异常捕获的原则，一定是子类在前面，父类在后面，那么上面就违背了这个原则。即使你在使用该静态方法的使用T是`ArrayIndexOutofBounds`，在编译之后还是会变成Throwable，`ArrayIndexOutofBounds`是IndexOutofBounds的子类，违背了异常捕获的原则。所以java为了避免这样的情况，禁止在catch子句中使用泛型变量。

+ 但是在异常声明中可以使用类型变量。下面方法是合法的。

```java
public static<T extends Throwable> void doWork(T t) throws T {
    try{
        ...
    } catch(Throwable realCause) {
        t.initCause(realCause);
        throw t; 
    }
}
```

上面的这样使用是没问题的。

####  如何获取泛型的参数类型？

既然类型被擦除了，那么如何获取泛型的参数类型呢？可以通过反射（`java.lang.reflect.Type`）获取泛型

`java.lang.reflect.Type`是Java中所有类型的公共高级接口, 代表了Java中的所有类型. Type体系中类型的包括：数组类型(GenericArrayType)、参数化类型(ParameterizedType)、类型变量(TypeVariable)、通配符类型(WildcardType)、原始类型(Class)、基本类型(Class), 以上这些类型都实现Type接口。

```java
public class GenericType<T> {
    private T data;

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public static void main(String[] args) {
        GenericType<String> genericType = new GenericType<String>() {};
        Type superclass = genericType.getClass().getGenericSuperclass();
        //getActualTypeArguments 返回确切的泛型参数, 如Map<String, Integer>返回[String, Integer]
        Type type = ((ParameterizedType) superclass).getActualTypeArguments()[0]; 
        System.out.println(type);//class java.lang.String
    }
}
```

其中 `ParameterizedType`:

```java
public interface ParameterizedType extends Type {
    // 返回确切的泛型参数, 如Map<String, Integer>返回[String, Integer]
    Type[] getActualTypeArguments();
    
    //返回当前class或interface声明的类型, 如List<?>返回List
    Type getRawType();
    
    //返回所属类型. 如,当前类型为O<T>.I<S>, 则返回O<T>. 顶级类型将返回null 
    Type getOwnerType();
}
```

### 参考文章

泛型作为Java基础知识点之一，网上知识点比较多也比较散，本文主要综合了网络上比较好的文章，方便你快速学习。（以下是一部分我参考的链接）

+ https://blog.csdn.net/sunxianghuang/article/details/51982979
+ https://blog.csdn.net/LonelyRoamer/article/details/7868820
+ https://docs.oracle.com/javase/tutorial/extra/generics/index.html
+ https://blog.csdn.net/s10461/article/details/53941091
+ https://www.cnblogs.com/iyangyuan/archive/2013/04/09/3011274.html
+ https://www.cnblogs.com/rudy-laura/articles/3391013.html
+ https://www.jianshu.com/p/986f732ed2f1
+ https://blog.csdn.net/u011240877/article/details/53545041

---



## 函数编程（lambda 表达式）

### 简介

在Java世界里面，面向对象还是主流思想，对于习惯了面向对象编程的开发者来说，抽象的概念并不陌生。面向对象编程是对数据进行抽象，而函数式编程是对行为进行抽象。现实世界中，数据和行为并存，程序也是如此，因此这两种编程方式我们都得学。

这种新的抽象方式还有其他好处。很多人不总是在编写性能优先的代码，对于这些人来说，函数式编程带来的好处尤为明显。程序员能编写出更容易阅读的代码——这种代码更多地表达了业务逻辑，而不是从机制上如何实现。易读的代码也易于维护、更可靠、更不容易出错。

在写回调函数和事件处理器时，程序员不必再纠缠于匿名内部类的冗繁和可读性，函数式编程让事件处理系统变得更加简单。能将函数方便地传递也让编写惰性代码变得容易，只有在真正需要的时候，才初始化变量的值。



面向对象编程是对数据进行抽象；

函数式编程是对行为进行抽象。

核心思想: **使用不可变值和函数，函数对一个值进行处理，映射成另一个值**。

对核心类库的改进主要包括集合类的API和新引入的流Stream。流使程序员可以站在更高的抽象层次上对集合进行操作。

### lambda表达式

<font style="color:rgb(44, 62, 80);">Lambda 表达式描述了一个代码块（或者叫匿名方法），可以将其作为参数传递给构造方法或者普通方法以便后续执行</font>

+ lambda表达式仅能放入如下代码: 预定义使用了 @Functional 注释的函数式接口，自带一个抽象函数的方法，或者SAM(Single Abstract Method 单个抽象方法)类型。这些称为lambda表达式的目标类型，可以用作返回类型，或lambda目标代码的参数。例如，若一个方法接收Runnable、Comparable或者 Callable 接口，都有单个抽象方法，可以传入lambda表达式。类似的，如果一个方法接受声明于 java.util.function 包内的接口，例如 Predicate、Function、Consumer 或 Supplier，那么可以向其传lambda表达式。
+ lambda表达式内可以使用`方法引用`，仅当该方法不修改lambda表达式提供的参数。本例中的lambda表达式可以换为方法引用，因为这仅是一个参数相同的简单方法调用。

```java
list.forEach(n -> System.out.println(n)); 
list.forEach(System.out::println);  // 使用方法引用
```

然而，若对参数有任何修改，则不能使用方法引用，而需键入完整地lambda表达式，如下所示:

```java
list.forEach((String s) -> System.out.println("*" + s + "*"));
```

事实上，可以省略这里的lambda参数的类型声明，编译器可以从列表的类属性推测出来。

+ lambda内部可以使用静态、非静态和局部变量，这称为 lambda 内的变量捕获。
+ Lambda表达式在Java中又称为闭包或匿名函数，所以如果有同事把它叫闭包的时候，不用惊讶。
+ Lambda 方法在编译器内部被翻译成私有方法，并派发 invokedynamic 字节码指令来进行调用。可以使用JDK中的 javap 工具来反编译class文件。使用 javap -p 或 javap -c -v 命令来看一看lambda表达式生成的字节码。大致应该长这样:

```java
private static java.lang.Object lambda$0(java.lang.String);
```

+ lambda表达式有个限制，那就是只能引用 final 或 final 局部变量，这就是说不能在lambda内部修改定义在域外的变量。

```java
List<Integer> primes = Arrays.asList(new Integer[]{2, 3,5,7});
int factor = 2;
primes.forEach(element -> { factor++; });
```

Compile time error : "local variables referenced from a lambda expression must be final or effectively final" 另外，只是访问它而不作修改是可以的，如下所示:

```java
List<Integer> primes = Arrays.asList(new Integer[]{2, 3,5,7});
int factor = 2;
primes.forEach(element -> { System.out.println(factor*element); });
```

<font style="color:rgb(44, 62, 80);">我终于找到了 3 个可行的解决方案：</font>

<font style="color:rgb(44, 62, 80);">1）把 limit 变量声明为 static。</font>

<font style="color:rgb(44, 62, 80);">2）把 limit 变量声明为 AtomicInteger。</font>

<font style="color:rgb(44, 62, 80);">3）使用数组。</font>

**<font style="color:rgb(44, 62, 80);">把 limit 变量声明为 static</font>**

<font style="color:rgb(44, 62, 80);">要想把 limit 变量声明为 static，就必须将 limit 变量放在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法外部，因为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法本身是 static 的。完整的代码示例如下所示。</font>

```plain
public class ModifyVariable2StaticInsideLambda {
    static int limit = 10;
    public static void main(String[] args) {
        Runnable r = () -> {
            limit = 5;
            for (int i = 0; i < limit; i++) {
                System.out.println(i);
            }
        };
        new Thread(r).start();
    }
}
```

<font style="color:rgb(44, 62, 80);">来看一下程序输出的结果：</font>

```plain
0
1
2
3
4
```

<font style="color:rgb(44, 62, 80);">OK，该方案是可行的。</font>

**<font style="color:rgb(44, 62, 80);">把 limit 变量声明为 AtomicInteger</font>**

```plain
public class ModifyVariable2AtomicInsideLambda {
    public static void main(String[] args) {
        final AtomicInteger limit = new AtomicInteger(10);
        Runnable r = () -> {
            limit.set(5);
            for (int i = 0; i < limit.get(); i++) {
                System.out.println(i);
            }
        };
        new Thread(r).start();
    }
}
```

<font style="color:rgb(44, 62, 80);">来看一下程序输出的结果：</font>

```plain
0
1
2
3
4
```

<font style="color:rgb(44, 62, 80);">OK，该方案也是可行的。</font>

**<font style="color:rgb(44, 62, 80);">使用数组</font>**

<font style="color:rgb(44, 62, 80);">使用数组的方式略带一些欺骗的性质，在声明数组的时候设置为 final，但更改 int 的值时却修改的是数组的一个元素。</font>

```plain
public class ModifyVariable2ArrayInsideLambda {
    public static void main(String[] args) {
        final int [] limits = {10};
        Runnable r = () -> {
            limits[0] = 5;
            for (int i = 0; i < limits[0]; i++) {
                System.out.println(i);
            }
        };
        new Thread(r).start();
    }
}
```

<font style="color:rgb(44, 62, 80);">来看一下程序输出的结果：</font>

```plain
0
1
2
3
4
```

<font style="color:rgb(44, 62, 80);">OK，该方案也是可行的。</font>

### <font style="color:rgb(44, 62, 80);">this 在lambda的范围</font>

<font style="color:rgb(44, 62, 80);">1）单独的 this 关键字</font>

```plain
System.out.printf("this = %s%n", this);
```

<font style="color:rgb(44, 62, 80);">其中 this 为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法中通过 new 关键字创建的 LamadaTest 对象——</font>`<font style="color:rgb(44, 62, 80);">new LamadaTest()</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">2）匿名内部类中的 this 关键字</font>

```plain
Runnable r = new Runnable()
{
    @Override
    public void run()
    {
        System.out.printf("this = %s%n", this);
    }
};
```

<font style="color:rgb(44, 62, 80);">其中 this 为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">work()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法中通过 new 关键字创建的 Runnable 对象——</font>`<font style="color:rgb(44, 62, 80);">new Runnable(){...}</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">3）Lambda 表达式中的 this 关键字</font>

<font style="color:rgb(44, 62, 80);">其中 this 关键字和 1）中的相同。</font>

<font style="color:rgb(44, 62, 80);">我们来看一下程序的输出结果：</font>

```plain
this = com.cmower.java_demo.journal.LamadaTest@3feba861
this = com.cmower.java_demo.journal.LamadaTest$1@64f033cb
this = com.cmower.java_demo.journal.LamadaTest@3feba861
```

<font style="color:rgb(44, 62, 80);">符合我们分析的预期。</font>

### 分类

#### 惰性求值方法

```java
lists.stream().filter(f -> f.getName().equals("p1"))
```

如上示例，这行代码并未做什么实际性的工作，filter只是**描述**了Stream，**没有产生新的集合**。

如果是多个条件组合，可以通过代码块{}

#### 及早求值方法

```java
List<Person> list2 = lists.stream().filter(f -> f.getName().equals("p1")).collect(Collectors.toList());
```

如上示例，collect最终会从Stream产生新值，拥有终止操作。

理想方式是形成一个惰性求值的链，最后用一个及早求值的操作返回想要的结果。与建造者模式相似，建造者模式先是使用一系列操作设置属性和配置，最后调用build方法，创建对象。



### stream & parallelStream

#### stream & parallelStream

每个Stream都有两种模式: 顺序执行和并行执行。

顺序流:

```java
List <Person> people = list.getStream.collect(Collectors.toList());
```

并行流:

```java
List <Person> people = list.getStream.parallel().collect(Collectors.toList());
```

顾名思义，当使用顺序方式去遍历时，每个item读完后再读下一个item。而使用并行去遍历时，数组会被分成多个段，其中每一个都在不同的线程中处理，然后将结果一起输出。

#### parallelStream原理:

```java
List originalList = someData;
split1 = originalList(0, mid);//将数据分小部分
split2 = originalList(mid,end);
new Runnable(split1.process());//小部分执行操作
new Runnable(split2.process());
List revisedList = split1 + split2;//将结果合并
```

大家对hadoop有稍微了解就知道，里面的 MapReduce 本身就是用于并行处理大数据集的软件框架，其 处理大数据的核心思想就是大而化小，分配到不同机器去运行map，最终通过reduce将所有机器的结果结合起来得到一个最终结果，与MapReduce不同，Stream则是利用多核技术可将大数据通过多核并行处理，而MapReduce则可以分布式的。

#### stream与parallelStream性能测试对比

如果是多核机器，理论上并行流则会比顺序流快上一倍，下面是测试代码

```java
long t0 = System.nanoTime();

//初始化一个范围100万整数流,求能被2整除的数字，toArray()是终点方法

int a[]=IntStream.range(0, 1_000_000).filter(p -> p % 2==0).toArray();

long t1 = System.nanoTime();

//和上面功能一样，这里是用并行流来计算

int b[]=IntStream.range(0, 1_000_000).parallel().filter(p -> p % 2==0).toArray();

long t2 = System.nanoTime();

//我本机的结果是serial: 0.06s, parallel 0.02s，证明并行流确实比顺序流快

System.out.printf("serial: %.2fs, parallel %.2fs%n", (t1 - t0) * 1e-9, (t2 - t1) * 1e-9);
```

#### Stream中常用方法如下:

+ `stream()`, `parallelStream()`
+ `filter()`
+ `findAny()``findFirst()`
+ `sort`
+ `forEach` void
+ `map(), reduce()`
+ `flatMap()` - 将多个Stream连接成一个Stream
+ `collect(Collectors.toList())`
+ `distinct`, `limit`
+ `count`
+ `min`, `max`, `summaryStatistics`

看下所有API:


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726672439859-a624b08d-b7cb-4ac9-8dfc-3eb6950ce5e8.png" />


---

### 常用例子

#### 匿名类简写

```java
new Thread( () -> System.out.println("In Java8, Lambda expression rocks !!") ).start();

// 用法
(params) -> expression
(params) -> statement
(params) -> { statements }
```

#### forEach

```java
// forEach
List features = Arrays.asList("Lambdas", "Default Method", "Stream API", "Date and Time API");
features.forEach(n -> System.out.println(n));
 
// 使用Java 8的方法引用更方便，方法引用由::双冒号操作符标示，
features.forEach(System.out::println);
```

#### 方法引用

_构造引用_

```java
// Supplier<Student> s = () -> new Student();
Supplier<Student> s = Student::new;
```

_对象::实例方法_ Lambda表达式的(形参列表)与实例方法的(实参列表)类型，个数是对应

```java
// set.forEach(t -> System.out.println(t));
set.forEach(System.out::println);
```

_类名::静态方法_

```java
// Stream<Double> stream = Stream.generate(() -> Math.random());
Stream<Double> stream = Stream.generate(Math::random);
```

_类名::实例方法_

```java
//  TreeSet<String> set = new TreeSet<>((s1,s2) -> s1.compareTo(s2));
/*  这里如果使用第一句话，编译器会有提示: Can be replaced with Comparator.naturalOrder，这句话告诉我们
  String已经重写了compareTo()方法，在这里写是多此一举，这里为什么这么写，是因为为了体现下面
  这句编译器的提示: Lambda can be replaced with method reference。好了，下面的这句就是改写成方法引用之后: 
*/
TreeSet<String> set = new TreeSet<>(String::compareTo);
```

#### Filter & Predicate

常规用法

```java
public static void main(args[]){
    List languages = Arrays.asList("Java", "Scala", "C++", "Haskell", "Lisp");
 
    System.out.println("Languages which starts with J :");
    filter(languages, (str)->str.startsWith("J"));
 
    System.out.println("Languages which ends with a ");
    filter(languages, (str)->str.endsWith("a"));
 
    System.out.println("Print all languages :");
    filter(languages, (str)->true);
 
    System.out.println("Print no language : ");
    filter(languages, (str)->false);
 
    System.out.println("Print language whose length greater than 4:");
    filter(languages, (str)->str.length() > 4);
}
 
public static void filter(List names, Predicate condition) {
    names.stream().filter((name) -> (condition.test(name))).forEach((name) -> {
        System.out.println(name + " ");
    });
}
```

多个Predicate组合filter

```java
// 可以用and()、or()和xor()逻辑函数来合并Predicate，
// 例如要找到所有以J开始，长度为四个字母的名字，你可以合并两个Predicate并传入
Predicate<String> startsWithJ = (n) -> n.startsWith("J");
Predicate<String> fourLetterLong = (n) -> n.length() == 4;
names.stream()
    .filter(startsWithJ.and(fourLetterLong))
    .forEach((n) -> System.out.print("nName, which starts with 'J' and four letter long is : " + n));
```

#### Map&Reduce

map将集合类(例如列表)元素进行转换的。还有一个 reduce() 函数可以将所有值合并成一个

```java
List costBeforeTax = Arrays.asList(100, 200, 300, 400, 500);
double bill = costBeforeTax.stream().map((cost) -> cost + .12*cost).reduce((sum, cost) -> sum + cost).get();
System.out.println("Total : " + bill);
```

#### Collectors

```java
// 将字符串换成大写并用逗号链接起来
List<String> G7 = Arrays.asList("USA", "Japan", "France", "Germany", "Italy", "U.K.","Canada");
String G7Countries = G7.stream().map(x -> x.toUpperCase()).collect(Collectors.joining(", "));
System.out.println(G7Countries);
```

+ Collectors.joining(", ")
+ Collectors.toList()
+ Collectors.toSet() ，生成set集合
+ Collectors.toMap(MemberModel::getUid, Function.identity())
+ Collectors.toMap(ImageModel::getAid, o -> IMAGE_ADDRESS_PREFIX + o.getUrl())

#### flatMap

将多个Stream连接成一个Stream

```java
List<Integer> result= Stream.of(Arrays.asList(1,3),Arrays.asList(5,6)).flatMap(a->a.stream()).collect(Collectors.toList());
```

结果: [1, 3, 5, 6]

#### distinct

去重

```java
List<LikeDO> likeDOs=new ArrayList<LikeDO>();
List<Long> likeTidList = likeDOs.stream().map(LikeDO::getTid)
                .distinct().collect(Collectors.toList());
```

#### count

计总数

```java
int countOfAdult=persons.stream()
                       .filter(p -> p.getAge() > 18)
                       .map(person -> new Adult(person))
                       .count();
```

#### Match

```java
boolean anyStartsWithA =
    stringCollection
        .stream()
        .anyMatch((s) -> s.startsWith("a"));

System.out.println(anyStartsWithA);      // true

boolean allStartsWithA =
    stringCollection
        .stream()
        .allMatch((s) -> s.startsWith("a"));

System.out.println(allStartsWithA);      // false

boolean noneStartsWithZ =
    stringCollection
        .stream()
        .noneMatch((s) -> s.startsWith("z"));

System.out.println(noneStartsWithZ);      // true
```

#### min,max,summaryStatistics

最小值，最大值

```java
List<Person> lists = new ArrayList<Person>();
lists.add(new Person(1L, "p1"));
lists.add(new Person(2L, "p2"));
lists.add(new Person(3L, "p3"));
lists.add(new Person(4L, "p4"));
Person a = lists.stream().max(Comparator.comparing(t -> t.getId())).get();
System.out.println(a.getId());
```

如果比较器涉及多个条件，比较复杂，可以定制

```java
Person a = lists.stream().min(new Comparator<Person>() {

      @Override
      public int compare(Person o1, Person o2) {
           if (o1.getId() > o2.getId()) return -1;
           if (o1.getId() < o2.getId()) return 1;
           return 0;
       }
 }).get();
```

summaryStatistics

```java
//获取数字的个数、最小值、最大值、总和以及平均值
List<Integer> primes = Arrays.asList(2, 3, 5, 7, 11, 13, 17, 19, 23, 29);
IntSummaryStatistics stats = primes.stream().mapToInt((x) -> x).summaryStatistics();
System.out.println("Highest prime number in List : " + stats.getMax());
System.out.println("Lowest prime number in List : " + stats.getMin());
System.out.println("Sum of all prime numbers : " + stats.getSum());
System.out.println("Average of all prime numbers : " + stats.getAverage());
```

#### peek

可以使用peek方法，peek方法可只包含一个空的方法体，只要能设置断点即可，但有些IDE不允许空，可以如下文示例，简单写一个打印逻辑。

注意，调试完后要删掉。

```java
List<Person> lists = new ArrayList<Person>();
lists.add(new Person(1L, "p1"));
lists.add(new Person(2L, "p2"));
lists.add(new Person(3L, "p3"));
lists.add(new Person(4L, "p4"));
System.out.println(lists);

List<Person> list2 = lists.stream()
				 .filter(f -> f.getName().startsWith("p"))
                .peek(t -> {
                    System.out.println(t.getName());
                })
                .collect(Collectors.toList());
System.out.println(list2);
```

## Functional Interface

### 理解注解 @FunctionInterface

```java
/**
 * An informative annotation type used to indicate that an interface
 * type declaration is intended to be a <i>functional interface</i> as
 * defined by the Java Language Specification.
 *
 * Conceptually, a functional interface has exactly one abstract
 * method.  Since {@linkplain java.lang.reflect.Method#isDefault()
 * default methods} have an implementation, they are not abstract.  If
 * an interface declares an abstract method overriding one of the
 * public methods of {@code java.lang.Object}, that also does
 * <em>not</em> count toward the interface's abstract method count
 * since any implementation of the interface will have an
 * implementation from {@code java.lang.Object} or elsewhere.
 *
 * <p>Note that instances of functional interfaces can be created with
 * lambda expressions, method references, or constructor references.
 *
 * <p>If a type is annotated with this annotation type, compilers are
 * required to generate an error message unless:
 *
 * <ul>
 * <li> The type is an interface type and not an annotation type, enum, or class.
 * <li> The annotated type satisfies the requirements of a functional interface.
 * </ul>
 *
 * <p>However, the compiler will treat any interface meeting the
 * definition of a functional interface as a functional interface
 * regardless of whether or not a {@code FunctionalInterface}
 * annotation is present on the interface declaration.
 *
 * @jls 4.3.2. The Class Object
 * @jls 9.8 Functional Interfaces
 * @jls 9.4.3 Interface Method Body
 * @since 1.8
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface FunctionalInterface{
    
}
```

+ interface 做注解的注解类型，被定义成java语言规范
+ 一个被它注解的接口只能有一个抽象方法，有两种例外
+ 第一是接口允许有实现的方法，这种实现的方法是用default关键字来标记的( java 反射中java.lang.reflect.Method#isDefault() 方法用来判断是否是default方法 )
+ 第二如果声明的方法和 java.lang.Object 中的某个方法一样，它可以不当做未实现的方法，不违背这个原则: 一个被它注解的接口只能有一个抽象方法, 比如: `java public interface Comparator<T> { int compare(T o1, T o2); boolean equals(Object obj); } `
+ 如果一个类型被这个注解修饰，那么编译器会要求这个类型必须满足如下条件:
    - 这个类型必须是一个interface，而不是其他的注解类型、枚举enum或者类class
    - 这个类型必须满足function interface的所有要求，如你个包含两个抽象方法的接口增加这个注解，会有编译错误。
+ 编译器会自动把满足function interface要求的接口自动识别为function interface，所以你才不需要对上面示例中的 ITest接口增加@FunctionInterface注解。

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/um91rntpzsh8sxg6#自定义函数接口) 自定义函数接口

```java
@FunctionalInterface
public interface IMyInterface {
    void study();
}

package com.isea.java;
public class TestIMyInterface {
    public static void main(String[] args) {
        IMyInterface iMyInterface = () -> System.out.println("I like study");
        iMyInterface.study();
    }
}
```

### 内置四大函数接口

```java
接口      参数          返回          中文          示例
Supplier None T 提供者 工厂方法创建对象

Consumer T void 消费者 输出一个值

Predicate T boolean 谓语，顾名思义，中文中的‘是’与‘不是’是中文语法的谓语

Function T R 函数 获得某个对象的名字

BinaryOperator (T, T) T 二元操作符，二元（就是数学里二元一次方程那个二元,代表 2 个的意思）,双重的。
                即有两个操作数 例如求两个数的乘积(*)
    
UnaryOperator T T 一元操作符，只有一个操作数 逻辑非(!)
```

#### 消费型接口: Consumer< T> void accept(T t)有参数，无返回值的抽象方法

**代表接受单一的输入变量而且没有返回值的一类操作**。

它的作用和 Supplier 相反，是消费一个数据的，消费的数据类型需要通过泛型指定。

它的源代码如下：

```java
@FunctionalInterface
public interface Consumer<T>{
 //接受 t 对象，无返回值
 void accept(T t);
    
 //默认的组合方法，参数和返回值都是 Consumer 类型，
 //先调用自己的 accept()方法，再调用参数的 accept()方法
 default Consumer<T>  andThen(Consumer<T>  after) {
     Objects.requireNonNull(after);
     return (T t) -> { accept(t); after.accept(t); };
 }
}
```

Consumer 接口中的方法

+ void accept(T t) 接受对给定的参数进行操作。

Consumer 接口中的默认方法：

+ `default Consumer<T>  andThen(Consumer<T>  after)`

如果一个方法的参数和返回值全都是 `Consumer<T>`  类型，那么就可以实现效果：

消费一个数据的时候，首先做一个操作，然后再做另一个操作，两个操作依次执行，实现一种组合操作。



例子：

（1）**直接使用 Consumer 对象**

**实现步骤：**

**1) 使用 Lambda 创建 Consumer 对象，直接打印传入的字符串数据。**

**2) 调用 Consumer 的 accept()方法，在 accept()方法中传入一个字符串数据。**

```java
public class DemoConsumer {
  public static void main(String[] args) {
      //创建 Consumer 对象，打印传入的变量 t
      Consumer consumer = t -> System.out.println(t);
      //调用 Consumer 中的方法
      consumer.accept("Hello Lambda");
  }
}
```



（2）**Consumer 做为参数**

List 和 Set 集合中遍历的 forEach 方法它的参数就是 Consumer

请看下面的代码：

 案例需求：

1) 创建一个数组，使用 Arrays.asList("孙悟空", "猪八戒", "白骨精", "嫦娥") 转成 List 对象。

2) 使用 forEach 方法打印每一个元素，forEach 中使用 Lamba 表达式输出传入的字符串

```java
public class DemoForEach {
    public static void main(String[] args) {
        //将数组转成 List 对象
        List names = Arrays.asList("孙悟空", "猪八戒", "白骨精", "嫦娥");
        //打印每一个字符串，forEach 的参数就是 Consumer
        names.forEach(t -> System.out.println(t));
    }
}
   
//分析 forEach()方法的源代码
default void forEach(Consumer<T> action) {
    Objects.requireNonNull(action);//判断某一对象是否不为null
    for (T t : this) {
        action.accept(t);
    }
}
```

这是定义在 java.lang.Iterable 接口中的默认方法，

参数就是 Consumer 对象，方法体内对当前集合使用 for遍历，this 就是集合对象。

每次对一个元素调用 accept()方法。

而我们外部调用的代码中对 accept()方法进行了实现，输出了每个元素。

`public static  T requireNonNull(T obj)`

静态方法，JDK7 中新增的方法，判断传入的对象是否为 NULL，如果是 NULL 则抛出异常，不为 NULL 则返回对象本身。常用于方法或构造方法中传入对象参数的校验。

```java
default Consumer<T> andThen(Consumer<? super T>  after) {
   Objects.requireNonNull(after); //判断 after 是否为 null
      
   //先调用自己的 accept()方法，再调用参数的 accept()方法
   return (T t) -> { 
       accept(t); 
       after.accept(t); 
   };
}
```



要想实现组合，需要两个或多个 Lambda 表达式，而 andThen 的语义正是执行“一步接一步”操作。

**(3) andThen 方法演示示例**

案例需求：将字符串 Hello 首先打印大写的 HELLO，然后打印小写的 hello

实现步骤：

1) 创建 Consumer 对象 c1，使用 Lambda 打印 s 对象的大写

2) 创建 Consumer 对象 c2，使用 Lambda 打印 s 对象的小写

3) c1 调用 andThen(c2)方法，再调用 accept("字符串")，完成依次的操作。

```java
public class DemoConsumer {
    public static void main(String[] args) {
        //打印大写
        Consumer<String> c1 = s -> System.out.println(s.toUpperCase());
        //打印小写
        Consumer<String> c2 = s-> System.out.println(s.toLowerCase());
        //调用方法
        c1.andThen(c2).accept("Hello Consumer");
    }
}
```



比如: map.forEach(BiConsumer<A, T>)

```java
Consumer<Person> greeter = (p) -> System.out.println("Hello, " + p.firstName);
greeter.accept(new Person("Luke", "Skywalker"));
```



****

#### 供给型接口: Supplier < T> T get() 无参有返回值的抽象方法；

```java
Supplier 接口代表一个结果的提供者。

Supplier 接口是用来生成数据的，数据的类型通过泛型参数给定。

使用 get()方法获得返回值，不要求每次调用时都返回新的或不同的结果。
```

接口的源码如下：

```java
@FunctionalInterface
public interface Supplier {
    /**
     * 得到一个结果，返回 T 对象
     */
    T get();
}
```

例子：

（1）**将 Supplier 直接使用**

**案例需求get()方法的基本使用，在 Supplier 接口中 get 方法返回一个字符串。**

**案例步骤：**

**1) 使用 Lambda 创建 Supplier 对象，泛型类型为 String，方法体返回一个字符串，return 可以省略。**

**2) 调用 Supplier 的 get()方法得到字符串，并打印输出**

```java
public class DemoSupplier {
  public static void main(String[] args) {
     //使用 Lambda 创建 Supplier 对象
     Supplier supplier = () -> "Hello Java!";
     //输出它的值
     System.out.println(supplier.get());
  }
}
```



（2）**将 Supplier 使用生成对象**

案例需求：**下面的例子演示了如何通过调用一个静态方法，生成一个员工对象返回。**

**使用构造方法做为 Supplier 参数的引用。**

**案例步骤**

**1) 在主类内部创建一个私有的静态 Employee 对象，重写 toString()方法，返回一个字符串："我是员工"。**

**2) 在 main 函数中创建一个 Supplier 对象，泛型类型是 Employee。使用 Lambda 传入 Supplier 对象，方法体实例化员工对象，省略 return 方法。**

**3) 使用 supplier 对象的 get()方法得到员工对象**

**4) 打印输出员工对象**

因为 Employee 对象是私有的，外部类无法直接实例化员工对象。调用 Supplier 的 get()方法来生成员工对象，这样做的目的是可以控制员工对象的生成方式，类似于工厂模式**。**

****

```java
//主类
public class DemoSupplier {
     //员工类
     private static class Employee {//注意static
         @Override    
         public String toString() { 
             return "我是员工";
         }
     }
     public static void main(String[] args) {
         //使用 Lambda 传入 Supplier 对象，将生成一个员工对象
         //此时仅仅是实例化了接口并未执行里面代码
         Supplier supplier = ()->new Employee();
         //输出员工对象
         System.out.println(supplier.get());
     }
}
```

****

（3）**将 Supplier 做为方法的参数**

**需求说明求数组中的最大值，使用 Supplier 接口作为方法参数类型，通过 Lambda 表达式求出 int 数组中的最大值**

**需求分析**

**1) 定义整型数组 int[] arr = {12,68,10,2,99,313,46};**

**2) 创建静态方法 getMax()：返回 int 类型，将 Supplier 做为参数，泛型类型为 Integer，方法体调用 get()方法返回值。**

**3) 在 main 函数中调用 getMax()方法，使用 Lambda 传入 Supplier 对象，并且实现查找最大值的功能**

**4) 在 Lambda 表达式相当于方法体：遍历每个元素，比较大小，找出最大值**

```java
public class DemoSupplier {
    public static void main(String[] args) {
        int[] arr = {12, 68, 10, 2, 99, 313, 46};
        // 调用 getMax 方法获得最大值，Lambda 相当于方法体
        int num = getMax(() -> {
            int max = arr[0];
            for (int i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
            }
            return max;
        });
        //输出最大值
        System.out.println("最大值是：" + num);
    }
    //使用 Supplier 做为参数
    public static int getMax(Supplier<Integer> supplier) {
        return supplier.get();
    }
}
```

```java
// 调用方法
<R, A> R collect(Collector<? super T, A, R> collector)

// Collectors.toSet
public static <T>
	Collector<T, ?, Set<T>> toSet() {
    	return new CollectorImpl<>((Supplier<Set<T>>) HashSet::new, Set::add,
                               (left, right) -> { left.addAll(right); return left; },
                               CH_UNORDERED_ID);
}

// CollectorImpl
private final Supplier<A> supplier;
private final BiConsumer<A, T> accumulator;
private final BinaryOperator<A> combiner;
private final Function<A, R> finisher;
private final Set<Characteristics> characteristics;

CollectorImpl(Supplier<A> supplier,
              BiConsumer<A, T> accumulator,
              BinaryOperator<A> combiner,
              Function<A,R> finisher,
              Set<Characteristics> characteristics) {
    this.supplier = supplier;
    this.accumulator = accumulator;
    this.combiner = combiner;
    this.finisher = finisher;
    this.characteristics = characteristics;
}

CollectorImpl(Supplier<A> supplier,
              BiConsumer<A, T> accumulator,
              BinaryOperator<A> combiner,
              Set<Characteristics> characteristics) {
    this(supplier, accumulator, combiner, castingIdentity(), characteristics);
}

// collect()方法实现
public final <R, A> R collect(Collector<? super P_OUT, A, R> collector) {
    A container;
    if (isParallel()
            && (collector.characteristics().contains(Collector.Characteristics.CONCURRENT))
            && (!isOrdered() || collector.characteristics().contains(Collector.Characteristics.UNORDERED))) {
        container = collector.supplier().get();
        BiConsumer<A, ? super P_OUT> accumulator = collector.accumulator();
        forEach(u -> accumulator.accept(container, u));
    }
    else {
        container = evaluate(ReduceOps.makeRef(collector));
    }
    return collector.characteristics().contains(Collector.Characteristics.IDENTITY_FINISH)
           ? (R) container
           : collector.finisher().apply(container);
}
```



#### 断定型接口: `Predicate<T> boolean test(T t)`:有参，但是返回值类型是固定的boolean

Predicate 中文意思为谓语，"我是一个程序员"，"是"或"不是"就是谓语。

它代表只有一个变量的函数，返回 boolean 类型。

有时候我们需要进行某种判断，从而得到一个 boolean 值的结果。



可以使用 java.util.function.Predicate接口。

```go
@FunctionalInterface
public interface Predicate<T> {
    
    boolean test(T t); //抽象方法，对 t 进行测试，返回 boolean 类型

    /**
    - 组合方法，将当前的谓语与另一个谓语进行短路的与操作，返回一个谓语对象
    */
    default Predicate<T> and(Predicate<? super T>  other) {
        Objects.requireNonNull(other); //判断 other 是否为空
        return (t) -> test(t) && other.test(t);
    }

    /**
    - 对当前的谓语进行逻辑非操作，返回一个谓语对象
    */
    default Predicate<T> negate() {
        return (t) -> !test(t);
    }

    /**
    - 组合方法，将当前的谓语与另一个谓语进行短路的或操作，返回一个谓语对象
      */
    default Predicate<T> or(Predicate<? super T> other) {
        Objects.requireNonNull(other);
        return (t) -> test(t) || other.test(t);
    }

    /**
    - 静态方法，判断 test(object)方法传入的对象是否与参数 targetRef 对象相等
      */
    static Predicate<T> isEqual(Object targetRef) {
        return (null == targetRef)
        ? Objects::isNull
        : object -> targetRef.equals(object); 
    }
}
```

例子：

（1）**test()方法演示**

**案例需求：判断 test("字符串")方法给定的参数长度是否大于 5**

**案例步骤：**

**1) 创建一个 Predicate 谓语对象，使用 Lambda 实现 boolean test(T t)方法**

**2) 方法体的参数是 s，返回字符串的长度大于 5，省略 return 关键字**

**3) 两次调用 test()方法看运行结果，第 1 次使用字符串 Hello，第 2 次使用字符串 Predicate**

```java
public class DemoPredicateTest {

    public static void main(String[] args) {

        //创建一个 Predicate 谓语对象，boolean test(T t)方法接收字符串类型，返回 boolean 类型

        Predicate<String> predicate = s -> s.length() > 5;

        //两次调用 test 方法看运行结果

        System.out.println("Hello 的长度是否大于 5：" + predicate.test("Hello"));

        System.out.println("Predicate 的长度是否大于 5：" + predicate.test("Predicate"));

    }
}
```



**默认方法 and()**

既然是条件判断，就会存在与、或、非三种常见的逻辑关系。

其中将两个 Predicate 条件使用“与”逻辑连接起来实现“并且”的效果时，可以使用 default 方法 and。

这个默认方法接收一个 Predicate 参数，返回一个 Predicate参数。

**and 方法演示示例**：

案例需求：判断一个字符串是否包含指定的字符串：既包含大写“H”，又要包含大写“W”

案例步骤：

1) 创建 2 个需要判断的字符串：s1="Hello world"和 s2="Hello World"

2) 使用 Lambda 表达式，创建两个 Predicate 对象

3) 判断字符串 s 是否包含 H

4) 判断字符串 s 是否包含 W

5) 调用 and 方法和 test 方法，分别输出 s1 和 s2 的结果

```java
public class DemoPredicateAnd {

 public static void main(String[] args){

 //创建 2 个需要判断的字符串
 String s1 = "Hello world";
 String s2 = "Hello World";
 // 使用 Lambda 表达式，创建两个 Predicate 对象
 //判断 s 是否包含 H
 Predicate<String> p1 = s -> s.contains("H");
 //判断 s 是否包含 W
 Predicate<String> p2 = s -> s.contains("W");
 //调用 and 方法
 System.out.println(s1 + "是否包含 H 和 W：" + p1.and(p2).test(s1));
 System.out.println(s2 + "是否包含 H 和 W：" + p1.and(p2).test(s2));
 }
}
```

**默认方法 or()**

与 and 的“与”类似，默认方法 or 实现逻辑关系中的“或”操作。

这个默认方法接收一个 Predicate 参数，返回一个 Predicate 参数。

**or 方法演示示例**：

案例需求：判断一个字符串的长度大于 10 或者小于 5

案例步骤：

1) 创建三个字符串 s1,s2,s3 内容如下图

2) 使用 Lambda 创建 2 个 Predicate 接口对象，第 1 个判断长度是否大于 10，每 2 个判断长度是否小于 5

3) 调用 or 和 test 方法输出每个字符串的测试结果

```java
public class DemoPredicateOr {

 public static void main(String[] args) {

 //创建三个字符串

 String s1 = "Hello World"; //大于 10

 String s2 = "Java"; //小于 5

 String s3 = "I am boy"; //既不大于 10，又不小于 5

 //使用 Lambda 创建 2 个 Predicate 接口对象

 Predicate<String> p1 = s -> s.length() > 10;

 Predicate<String> p2 = s -> s.length() < 5;

 //输出每个字符串的测试结果

 System.out.println(s1 + "=" + p1.or(p2).test(s1));

 System.out.println(s2 + "=" + p1.or(p2).test(s2));

 System.out.println(s3 + "=" + p1.or(p2).test(s3));

 }
}
```



**默认方法 negate()**

“与”、“或”已经了解了，剩下的“非”（取反）也会简单。方法没有参数，返回值为 Predicate。

要在 test 方法调用之前调用 negate 方法，正如 and 和 or 方法一样。

 案例需求：判断年龄是否小于 18 岁，将判断的结果取反。

 案例步骤

1) 创建 2 个整数类型的年龄，一个 25，一个 15 岁。

2) 使用 Lambda 创建 1 个 Predicate，判断年龄小于 18 岁。

3) 使用 nagate()取反以后再调用 test()方法，输出两个年龄的结果

```java
public class DemoPredicateNegate {

 public static void main(String[] args) {

 int age1 = 25; //25 岁
 int age2 = 15; //15 岁
 Predicate<Integer> predicate = (a) -> a < 18; //判断是否小于 18 岁
 System.out.println(age1 + "小于 18 岁，取反：" + predicate.negate().test(age1));
 System.out.println(age2 + "小于 18 岁，取反：" + predicate.negate().test(age2));
 }
}
```



**静态方法 isEqual ()**

Predicate 中唯一的静态方法，方法的参数是两个 Object 类型，返回一个 Predicate 类型。

作用：根据 Objects.equals(Object, Object)方法比较两个参数是否相等，

一个对象通过 isEqual()传入，另一个对象通过 test()传入。



 案例需求：比较两个字符串是否相等

 案例步骤：

1) 通过静态方法 isEqual("newboy")，直接返回 Predicate 对象

2) 调用 Predicate 中的 test()方法传入另两个字符串分别比较

```java
public class DemoPredicateIsEqual {
 public static void main(String[] args) {
 //通过静态方法直接返回 Predicate 对象
 Predicate predicate = Predicate.isEqual("newboy");
 //调用 test()方法传入另两个字符串分别比较
 System.out.println("两个字符串是否相等：" + predicate.test("newboy"));
 System.out.println("两个字符串是否相等：" + predicate.test("NewBoy"));
 }
}
```



比如: steam().filter()中参数就是Predicate

```java
Predicate<String> predicate = (s) -> s.length() > 0;

predicate.test("foo");              // true
predicate.negate().test("foo");     // false

Predicate<Boolean> nonNull = Objects::nonNull;
Predicate<Boolean> isNull = Objects::isNull;

Predicate<String> isEmpty = String::isEmpty;
Predicate<String> isNotEmpty = isEmpty.negate();
```

#### 函数型接口: Function<T,R> R apply(T t)有参有返回值的抽象方法

Function接口：

        根据一个参数得到另一个参数值，前面称为计算的参数，后面称为计算的结果。
    
        有进有出，所以称为“函数 Function”。


​

类似于数学中的函数，通过一个变量求出另一个变量的值。如：f(x) = 2x+3

以下是它的 Java 源代码

```go
import java.util.Objects;

/**
代表通过一个变量求出另一个变量的结果的函数

@param  输入给函数的变量

@param  函数输出的结果
*/
@FunctionalInterface
public interface Function<T, R> {

     /**
        对给定的变量 t 进行计算，得到返回的结果 R
    */
     R apply(T t);
      
        
     /**
        默认组合方法，先计算当前函数，再计算传入的函数
    */
    default <V> Function<T, V> andThen(Function<? super R, ? extends V> after) {
        Objects.requireNonNull(after);
        return (T t) -> after.apply(apply(t));
    }
        
     /**
        默认组合方法，先计算传入的函数，再计算当前函数
    */
    default <V> Function<V, R> compose(Function<? super V, ? extends T> before) {
        Objects.requireNonNull(before);
        return (V v) -> apply(before.apply(v));
    }
    
     /**
        静态方法：总是返回它的输入变量
    */
    static <T> Function<T, T> identity() {
        return t -> t;
    }
}
```

**apply 方法演示示例**：

 案例需求将 Integer 类型转换为 String 类型，并且输出转换以后字符串的长度。

1) 创建一个 Function 对象，输入类型是整数，输出类型是字符串

2) Lambda 表达式将一个整数 i 转成字符串

3) 调用 apply(数字)方法得到转换后的字符串，再调用字符串的 length()方法得到长度，打印输出。

4) 第 1 次转换 99 这个数字，第 2 次转换 1000 这个数字。

```go
public class DemoFunction {

 public static void main(String[] args) {
    //创建一个 Function 对象
    Function<Integer,String> converter = i -> Integer.toString(i);
    System.out.println("99 转成字符串的长度是：" + converter.apply(99).length());
    System.out.println("1000 转成字符串的长度是：" + converter.apply(1000).length());
 }
}
```



比如: steam().map() 中参数就是`Function<? super T, ? extends R>`；reduce()中参数`BinaryOperator<T>` (ps: `BinaryOperator<T>` extends BiFunction<T,T,T>)

```java
Function<String, Integer> toInteger = Integer::valueOf;
Function<String, String> backToString = toInteger.andThen(String::valueOf);

backToString.apply("123");     // "123"
```

**andThen 方法演示示例**：

 案例需求：连续进行两个操作：第 1 个操作是将字符串转换成为 int 数字，第 2 个操作将转换好的数字乘以 10。两个操作按照前后顺序组合到一起。

1) 让用户从键盘输入 1 个数字，使用字符串接收。

2) 创建第 1 个 Function 函数将字符串转成整数

3) 创建第 2 个函数将整数乘以 10 返回

4) 调用 andThen 方法和 apply，并且输出结果

```go
public class DemoFunctionAndThen {
    public static void main(String[] args) {
        //用户输入一个字符串
        System.out.println("请输入数字：");
        Scanner input = new Scanner(System.in);
        String str = input.nextLine();
        //第 1 个函数将字符串转成整数
        Function<String,Integer> f1 = s -> Integer.parseInt(s);
        //第 2 个函数将整数乘以 10 返回
        Function<Integer,Integer>  f2 = i -> i * 10;
        //调用 andThen 方法，并且输出结果
        System.out.println("转成整数并乘以 10 以后的结果是：" + f1.andThen(f2).apply(str));
    }
}
```



**compose 方法的演示**

 案例需求：创建两个函数对象：1 个将字符串转成大写，1 个将字符串转成小写。分别使用 andThen 和 compose 方法组合调用，查看不同的计算结果。

 开发步骤：

1) 创建第 1 个 Function，输入输出都是 String 类型，将字符串转成大写。

2) 创建第 2 个 Function，输入输出都是 String 类型，将字符串转成小写。

3) 调用第 1 个函数的 apply 方法，并且输出值

4) 调用第 2 个函数的 apply 方法，并且输出值

5) 调用 andThen 方法和 apply 方法查看运行结果

6) 调用 compose 方法和 apply 方法查看运行结果

```go
public class DemoFunctionCompose {
    public static void main(String[] args) {
        Function<String,String> f1=s -> s.toUpperCase();
        Function<String,String> f2 = s -> s.toLowerCase();
        System.out.println("转成大写：" + f1.apply("Hello"));
        System.out.println("转成小写：" + f2.apply("Hello"));
        System.out.println("先转成大写，再转成小写：" + f1.andThen(f2).apply("Hello"));
        
        System.out.println("先转成小写，再转成大写：" + f1.compose(f2).apply("Hello"));
    }
}
```



### 深入理解函数式编程

#### 行为参数化

<font style="color:rgb(33, 37, 41);">行为参数化，是理解函数式编程的一个重要概念。简单来说便是，一个方法接受多个不同的行为作为参数，并在内部使用它们，完成不同行为的能力。更为通俗的讲，行为参数化是指，定义一段代码，这段代码并不会立即执行，而是可以像普通变量/参数一样进行传递，被程序的其他部分调用。</font>

<font style="color:rgb(33, 37, 41);">我们通过一个特别通用的筛选苹果的例子，来逐步了解如何使用Lambda表达式实现行为参数化。(如果对行为参数化已十分了解，可直接跳过本节)</font>

+ **<font style="color:rgb(33, 37, 41);">需求1</font>**<font style="color:rgb(33, 37, 41);">：筛选绿色苹果</font>

<font style="color:rgb(33, 37, 41);">我们需要将仓库中绿色的苹果过滤出来，对于这样的问题，大多数人来说都是手到擒来 (</font>_<font style="color:rgb(33, 37, 41);">step1: 面向过程</font>_<font style="color:rgb(33, 37, 41);">)</font>

```plain
public static List<Apple> filterGreenApples(List<Apple> apples) {
    List<apple> filteredApples = new LinkedList<>();
    for (Apple apple: apples) {
        if ("green".equals(apple.getColor())) {
            filteredApples.add(apple);
        }
    }
    return filteredApples;
}

List<Apple> greenApples = filterGreenApples(inventory);
```

+ **<font style="color:rgb(33, 37, 41);">需求2：</font>**<font style="color:rgb(33, 37, 41);">筛选任意颜色苹果</font>

<font style="color:rgb(33, 37, 41);">对于这样的需求变更，可能也不是很难</font>

```plain
public static List<Apple> filterApplesByColor(List<Apple> apples, String color) {
    List<apple> filteredApples = new LinkedList<>();
    for (Apple apple: apples) {
        if (color.equals(apple.getColor())) {
            filteredApples.add(apple);
        }
    }
    return filteredApples;
}

List<Apple> someColorApples = filterApplesByColor(inventory, "red");
```

+ **<font style="color:rgb(33, 37, 41);">需求3</font>**<font style="color:rgb(33, 37, 41);">：筛选重量大于150克的苹果</font>

<font style="color:rgb(33, 37, 41);">有了先前的教训，可能会学聪明一些，不会把重量直接写死到程序里，而是提供一个入参</font>

```plain
public static List<Apple> filterApplesByWeight(List<Apple> apples, int minWeight) {
    List<apple> filteredApples = new LinkedList<>();
    for (Apple apple: apples) {
        if (apple.getWeight() > minWeight) {
            filteredApples.add(apple);
        }
    }
    return filteredApples;
}

List<Apple> heavyApples = filterApplesByColor(inventory, 150);
```

+ **<font style="color:rgb(33, 37, 41);">需求4</font>**<font style="color:rgb(33, 37, 41);">：筛选颜色为红色且重量大于150克的苹果</font>

<font style="color:rgb(33, 37, 41);">如果照此下去，程序将变得异常难于维护，每一次小的需求变更，都需要进行大范围的改动。为了避免永无休止的加班，对于了解设计模式的同学，可能会将筛选逻辑抽象出来 (</font>_<font style="color:rgb(33, 37, 41);">step2: 面向对象</font>_<font style="color:rgb(33, 37, 41);">)</font>

```plain
public interface Predicate<Apple> {
    boolean test(Apple apple);
}
```

<font style="color:rgb(33, 37, 41);">预先定义多种筛选策略，将策略动态的传递给筛选函数</font>

```plain
public static List<Apple> filterApples(List<Apple> apples, Predicate predicate) {
    List<apple> filteredApples = new LinkedList<>();
    for (Apple apple: apples) {
        if (predicate.test(apple)) {
            filteredApples.add(apple);
        }
    }
    return filteredApples;
}

Predicate predicate = new Predicate() {
    @override
    public boolean test(Apple apple) {
        return "red".equals(apple.getColor()) && apple.getWeight > 150;
    }
};

List<Apple> satisfactoryApples = filterApples(inventory, predicate);
```

<font style="color:rgb(33, 37, 41);">或者直接使用匿名类，将筛选逻辑传递给筛选函数</font>

```plain
List<Apple> satisfactoryApples = filterApples(inventory, new Predicate() {
    @override
    public boolean test(Apple apple) {
        return "red".equals(apple.getColor()) && apple.getWeight > 150;
    }
});
```

<font style="color:rgb(33, 37, 41);">至此，已经可以满足大部分的需求，但对于这种十分啰嗦、被Java程序员诟病了多年的语法，在Lambda表达式出现后，便出现了一丝转机 (</font>_<font style="color:rgb(33, 37, 41);">step3: 面向函数</font>_<font style="color:rgb(33, 37, 41);">)</font>

```plain
@FunctionalInterface
public interface Predicate<Apple> {
    boolean test(Apple apple);
}

public List<Apple> filterApples(List<Apple> apples, Predicate<Apple> predicate) {
    return apples.stream.filter(predicate::test).collect(Collectors.toList());
}

List<Apple> satisfactoryApples = filterApples(inventory, apple -> "red".equals(apple.getColor()) && apple.getWeight > 150);
```

<font style="color:rgb(33, 37, 41);">以上示例中使用了Java8的stream及lambda表达式，关于stream及lambda表达式的具体使用方法，这里不再赘述，重点在于解释什么是</font>`行为参数化`<font style="color:rgb(33, 37, 41);">，示例中直接将筛选逻辑(红色且重量大于150克)的代码片段作为参数传递给了函数（确切的说是将lambda表达式作为参数传递给了函数），而这段代码片段会交由筛选函数进行执行。</font>

<font style="color:rgb(33, 37, 41);">Lambda表达式与匿名类很像，但本质不同，关于Lambda表达式及匿名类的区别，会在之后的文章详细介绍</font>

<font style="color:rgb(33, 37, 41);">如果想让代码更为简洁明了，可以继续将筛选逻辑提取为函数，使用方法引用进行参数传递</font>

```plain
private boolean isRedColorAndWeightGt150(Apple apple) {
    return "red".equals(apple.getColor()) && apple.getWeight > 150;
}

List<Apple> satisfactoryApples = filterApples(inventory, this::isRedColorAndWeightGt150);
```

<font style="color:rgb(33, 37, 41);">至此，我们完成了从</font>`面向过程`<font style="color:rgb(33, 37, 41);">到</font>`面向对象`<font style="color:rgb(33, 37, 41);">再到</font>`面向函数`<font style="color:rgb(33, 37, 41);">的编程思维转变，代码也更加具有语义化，不论是代码阅读还是维护，都较之前有了很大的提升</font>

<font style="color:rgb(33, 37, 41);">等等，如果需要过滤颜色为黄色并且重量在180克以上的苹果，是不是还要定义一个</font>`isYellowColorAndWeightGt180`<font style="color:rgb(33, 37, 41);">的函数出来，貌似又陷入了无穷加班的怪圈~</font>

<font style="color:rgb(33, 37, 41);">还有没有优化空间？能否将筛选条件抽离到单一属性，如</font>`byColor`<font style="color:rgb(33, 37, 41);">、</font>`byMinWeight`<font style="color:rgb(33, 37, 41);">等，之后再做与或计算传递给筛选函数？</font>

<font style="color:rgb(33, 37, 41);">接下来就是我们要介绍的</font>**<font style="color:rgb(33, 37, 41);">高阶函数</font>**

**<font style="color:rgb(33, 37, 41);"></font>**

#### <font style="color:rgb(33, 37, 41);">高阶函数</font>

<font style="color:rgb(33, 37, 41);">高阶函数是一个函数，它接收函数作为参数或将函数作为输出返回</font>

+ <font style="color:rgb(33, 37, 41);">接受至少一个函数作为参数</font>
+ <font style="color:rgb(33, 37, 41);">返回的结果是一个函数</font>

<font style="color:rgb(33, 37, 41);">以上的定义听起来可能有些绕口。结合上节示例，我们的诉求是将苹果的颜色、重量或者其他筛选条件也抽离出来，而不是硬编码到代码中</font>

```plain
private Predicate<apple> byColor(String color) {
    return (apple) -> color.equals(apple.getColor);
}

private Predicate<Apple> byMinWeight(int minWeight) {
    return (apple) -> apple.getWeight > minWeight;
}
```

<font style="color:rgb(33, 37, 41);">以上两个函数的返回值，均为Predicate类型的Lambda表达式，或者可以说，以上两个函数的返回值也是函数</font>

<font style="color:rgb(33, 37, 41);">接下来我们定义与运算，只有传入的所有条件均满足才算最终满足</font>

```plain
private Predicate<Apple> allMatches(Predicate<Apple> ...predicates) {
    return (apple) -> predicates.stream.allMatch(predicate -> predicate.test(apple));
}
```

<font style="color:rgb(33, 37, 41);">以上函数，是将多个筛选逻辑做与计算，注意，该函数接收多个函数(Lambda)作为入参，并返回一个函数(Lambda)，这便是</font>`高阶函数`

<font style="color:rgb(33, 37, 41);">如何使用该函数？作为苹果筛选示例的延伸，我们可以将上一节最后一个示例代码优化如下</font>

`List<Apple> satisfactoryApples = filterApples(inventory, allMatches(byColor("red"), byMinWeight(150)));`

<font style="color:rgb(33, 37, 41);">至此，还可以抽象出</font>`anyMatches`<font style="color:rgb(33, 37, 41);">、</font>`nonMatches`<font style="color:rgb(33, 37, 41);">等高阶函数，组合使用</font>

```plain
// 筛选出 颜色为红色 并且 重量在150克以上 并且 采摘时间在1周以内 并且 产地在中国、美国、加拿大任意之一的苹果
List<Apple> satisfactoryApples = filterApples(
    inventory, 
    allMatches(
        byColor("red"), 
        byMinWeight(150),
        apple -> apple.pluckingTime - currentTimeMillis() < 7L * 24 * 3600 * 1000,
        anyMatches(byGardens("中国"), byGardens("美国"), byGardens("加拿大")
    )
);
```

<font style="color:rgb(33, 37, 41);">如果使用jvm包中的</font>`java.util.function.Predicate`<font style="color:rgb(33, 37, 41);">，我们还可以继续优化，使代码更为语义化</font>

```plain
// 筛选出 颜色为红色 并且 重量在150克以上 并且 采摘时间在1周以内 并且 产地在中国、美国、加拿大任意之一的苹果
List<Apple> satisfactoryApples = filterApples(
    inventory, 
    byColor("red")
      .and(byMinWeight(150))
      .and(apple -> apple.pluckingTime - currentTimeMillis() < 7L * 24 * 3600 * 1000)
      .and(byGardens("中国").or(byGardens("美国").or(byGardens("加拿大")))
);
```

<font style="color:rgb(33, 37, 41);">这里使用了Java8中的默认函数，默认函数允许你在接口interface中定义函数的默认行为，从某方面来讲也可以实现类的多继承</font>

<font style="color:rgb(33, 37, 41);">示例中，</font>`and`<font style="color:rgb(33, 37, 41);">/</font>`or`<font style="color:rgb(33, 37, 41);">函数接收一个Predicate函数(Lambda表达式)作为参数，并返回一个Predicate函数(Lambda表达式)，同样为高阶函数</font>

<font style="color:rgb(33, 37, 41);">关于默认函数的使用，会在之后的文章详细介绍</font>

<font style="color:rgb(33, 37, 41);"></font>

#### <font style="color:rgb(33, 37, 41);">闭包</font>

<font style="color:rgb(33, 37, 41);">闭包(Closure)，能够读取其他函数内部变量的函数</font>

<font style="color:rgb(33, 37, 41);">又是一个比较抽象的概念，其实在使用Lambda表达式的过程中，经常会使用到闭包，比如</font>

```plain
public Future<List<Apple>> filterApplesAsync() {
    List<Apple> inventory = getInventory();
    
    return CompletableFuture.supplyAsync(() -> filterApples(inventory, byColor("red")));
}
```

<font style="color:rgb(33, 37, 41);">在提交异步任务时，传入了内部函数(Lambda表达式)，在内部函数中使用了父函数</font>`filterApplesAsync`<font style="color:rgb(33, 37, 41);">中的局部变量</font>`inventory`<font style="color:rgb(33, 37, 41);">，这便是</font>`闭包`<font style="color:rgb(33, 37, 41);">。</font>

<font style="color:rgb(33, 37, 41);">如果该示例不够明显的话，可以参考如下示例</font>

```plain
private Supplier<Integer> initIntIncreaser(int i) {
    AtomicInteger atomicInteger = new AtomicInteger(i);
    return () -> atomicInteger.getAndIncrement();
}

Supplier<Integer> increaser = initIntIncreaser(1);
System.out.println(increaser.get());
System.out.println(increaser.get());
System.out.println(increaser.get());
System.out.println(increaser.get());

//[out]: 1
//[out]: 2
//[out]: 3
//[out]: 4
```

`initIntIncreaser`<font style="color:rgb(33, 37, 41);">函数返回另一个函数(内部函数)，该函数(</font>`increaser`<font style="color:rgb(33, 37, 41);">)使用了父函数</font>`initIntIncreaser`<font style="color:rgb(33, 37, 41);">的局部变量</font>`atomicInteger`<font style="color:rgb(33, 37, 41);">，该变量会被函数</font>`increaser`<font style="color:rgb(33, 37, 41);">持有，并且会在调用</font>`increaser`<font style="color:rgb(33, 37, 41);">时使用(更改)</font>

<font style="color:rgb(33, 37, 41);"></font>

#### <font style="color:rgb(33, 37, 41);">柯里化</font>

<font style="color:rgb(33, 37, 41);">柯里化是逐步传值，逐步缩小函数的适用范围，逐步求解的过程。</font>

<font style="color:rgb(33, 37, 41);">如，设计一个函数，实现在延迟一定时间之后执行给定逻辑，并可以指定执行的执行器</font>

```plain
public ScheduledFuture executeDelay(Runnable runnable, ScheduledExecutorService scheduler, long delay, TimeUnit timeunit) {
    return scheduler.schedule(runnable, delay, timeunit);
}
```

<font style="color:rgb(33, 37, 41);">目前有一批任务，需要使用执行器</font>`scheduler1`<font style="color:rgb(33, 37, 41);">，并且均延迟5分钟执行</font>

<font style="color:rgb(33, 37, 41);">另一批任务，需要使用执行器</font>`scheduler2`<font style="color:rgb(33, 37, 41);">，并且均延迟15分钟执行</font>

<font style="color:rgb(33, 37, 41);">可以这样实现</font>

```plain
executeDelay(runnable11, scheduler1, 5, TimeUnit.SECONDS);
executeDelay(runnable12, scheduler1, 5, TimeUnit.SECONDS);
executeDelay(runnable13, scheduler1, 5, TimeUnit.SECONDS);

executeDelay(runnable21, scheduler2, 15, TimeUnit.SECONDS);
executeDelay(runnable22, scheduler2, 15, TimeUnit.SECONDS);
executeDelay(runnable23, scheduler2, 15, TimeUnit.SECONDS);
```

<font style="color:rgb(33, 37, 41);">其实，我们发现这里是有规律可循的，比如，使用</font>`某个执行器`<font style="color:rgb(33, 37, 41);">在多久之后执行什么，我们可以将</font>`executeDelay`<font style="color:rgb(33, 37, 41);">函数进行第一次柯里化</font>

```plain
public Function3<ScheduledFuture, Runnable, Integer, TimeUnit> executeDelayBySomeScheduler(ScheduledExecutorService scheduler) {
    return (runnable, delay, timeunit) -> executeDelay(runable, scheduler, delay, timeunit);
}

Function3<ScheduledFuture, Runnable, Integer, TimeUnit> executeWithScheduler1 = executeDelayBySomeScheduler(scheduler1);

Function3<ScheduledFuture, Runnable, Integer, TimeUnit> executeWithScheduler2 = executeDelayBySomeScheduler(scheduler2);

executeWithScheduler1.apply(runnable11, 5, TimeUnit.SECONDS);
executeWithScheduler1.apply(runnable12, 5, TimeUnit.SECONDS);
executeWithScheduler1.apply(runnable13, 5, TimeUnit.SECONDS);

executeWithScheduler2.apply(runnable21, 15, TimeUnit.SECONDS);
executeWithScheduler2.apply(runnable22, 15, TimeUnit.SECONDS);
executeWithScheduler2.apply(runnable23, 15, TimeUnit.SECONDS);
```

<font style="color:rgb(33, 37, 41);">函数</font>`executeDelay`<font style="color:rgb(33, 37, 41);">接收4个参数，函数</font>`executeWithScheduler1`<font style="color:rgb(33, 37, 41);">/</font>`executeWithScheduler2`<font style="color:rgb(33, 37, 41);">接收3个参数，我们通过</font>`executeDelayBySomeScheduler`<font style="color:rgb(33, 37, 41);">将具体的执行器封装在了</font>`executeWithScheduler1`<font style="color:rgb(33, 37, 41);">/</font>`executeWithScheduler2`<font style="color:rgb(33, 37, 41);">中</font>

<font style="color:rgb(33, 37, 41);">进一步，我们可以做第二次柯里化，将延迟时间也封装起来</font>

```plain
public Function<ScheduledFuture, Runnable> executeDelayBySomeSchedulerOnDelay(ScheduledExecutorService scheduler, long delay, TimeUnit timeunit) {
    return (runnable) -> executeDelay(runable, scheduler, delay, timeunit);
}

Function<ScheduledFuture, Runnable> executeWithScheduler1After5M = executeDelayBySomeSchedulerOnDelay(scheduler1, 5, TimeUnit.SECONDS);

Function<ScheduledFuture, Runnable> executeWithScheduler2After15M = executeDelayBySomeSchedulerOnDelay(scheduler2, 15, TimeUnit.SECONDS);

Stream.of(runnable11, runnable12,runnable13).forEach(this::executeWithScheduler1After5M);
Stream.of(runnable21, runnable22,runnable23).forEach(this::executeWithScheduler2After15M);
```

<font style="color:rgb(33, 37, 41);">将具体的执行器及延迟时间封装在</font>`executeWithScheduler1After5M`<font style="color:rgb(33, 37, 41);">/</font>`executeWithScheduler2After15M`<font style="color:rgb(33, 37, 41);">中，调用的时候，只需要关心具体的执行逻辑即可</font>

<font style="color:rgb(33, 37, 41);"></font>

#### <font style="color:rgb(33, 37, 41);">环绕执行(提取共性)</font>

<font style="color:rgb(33, 37, 41);">有时候我们会发现，很多代码块十分相似，但又有些许不同</font>

<font style="color:rgb(33, 37, 41);">比如，目前有两个接口可以查询汇率，</font>`queryExchangeRateA`<font style="color:rgb(33, 37, 41);">及</font>`queryExchangeRateB`<font style="color:rgb(33, 37, 41);">，我们需要在开关</font>`exchangeRateSwitch`<font style="color:rgb(33, 37, 41);">打开的时候使用</font>`queryExchangeRateA`<font style="color:rgb(33, 37, 41);">查询，否则使用</font>`queryExchangeRateB`<font style="color:rgb(33, 37, 41);">查询，同时在一个接口异常失败的时候，自动降低到另一个接口进行查询</font>

<font style="color:rgb(33, 37, 41);">同样，目前有两个接口可以查询关税，</font>`queryTariffsA`<font style="color:rgb(33, 37, 41);">及</font>`queryTariffsB`<font style="color:rgb(33, 37, 41);">，同样地，我们需要在开关</font>`tariffsSwitch`<font style="color:rgb(33, 37, 41);">打开的时候使用</font>`queryTariffsA`<font style="color:rgb(33, 37, 41);">查询，否则使用</font>`queryTariffsB`<font style="color:rgb(33, 37, 41);">查询，同时在一个接口异常失败的时候，自动降低到另一个接口进行查询</font>

<font style="color:rgb(33, 37, 41);">其实，以上两种场景，除了开关及具体的接口逻辑外，整体流程是一致的</font>


<img referrerpolicy="no-referrer" src="" />


<font style="color:rgb(33, 37, 41);">再分析，其实接口调用的降级逻辑也是一样的</font>

<font style="color:rgb(33, 37, 41);">这里不再列举如何使用抽象类的方法如解决该类问题，我们直接使用Java8的Lambda表达式</font>

<font style="color:rgb(33, 37, 41);">首先，可以将降级逻辑提取为一个函数</font>

```plain
@FunctionalInterface
interface ThrowingSupplier<T> {
    T get() throw Exception;
}

/**
 * 1. 执行A
 * 2. 如果A执行异常，则执行B
 */
public <T> ThrowingSupplier<T> executeIfThrowing(ThrowingSupplier<T> supplierA, ThrowingSupplier<T> supplierB) throws Exception {
    try {
        return supplierA.get();
    } catch(Exception e) {
        // dill with exception
        return supplierB.get();
    }
}
```

<font style="color:rgb(33, 37, 41);">至此，我们完成了降级的逻辑。接来下，将开关逻辑提取为一个函数</font>

```plain
/**
 * 1. switcher打开，执行A
 * 2. switcher关闭，执行B
 */
public <T> T invoke(Supplier<Boolean> switcher, ThrowingSupplier<T> executeA, ThrowingSupplier<T> executeB) throws Exception {
    return switcher.get() ? executeIfThrowing(this::queryExchangeRateA, this::queryExchangeRateB) : executeIfThrowing(this::queryExchangeRateB, this::queryExchangeRateA);
}
```

<font style="color:rgb(33, 37, 41);">回到上边的两个需求，查询汇率及关税，我们可以</font>

```plain
/**
 * 查询汇率
 */
val exchangeRate = invoke(
    exchangeRateSwitch::isOpen, 
    this::queryExchangeRateA,
    this::queryExchangeRateB
)

/**
 * 查询关税
 */
val queryTariffs = invoke(
    tariffsSwitch::isOpen, 
    this::queryTariffsA,
    this::queryTariffsB
)
```

<font style="color:rgb(33, 37, 41);">以上，用到了ThrowingSupplier，该点会在</font>[<font style="color:rgb(33, 37, 41);">《Lambda表达式里的“陷阱”》</font>](https://segmentfault.com/a/1190000018857239)<font style="color:rgb(33, 37, 41);">一问中详细介绍</font>

<font style="color:rgb(33, 37, 41);"></font>

#### <font style="color:rgb(33, 37, 41);"> 设计模式</font>

<font style="color:rgb(33, 37, 41);">Lambda表达式，会给以往面向对象思想的设计模式带来全新的设计思路，这部分内容希望在设计模式系列文章中详细介绍。</font>

<font style="color:rgb(33, 37, 41);">关于Lambda表达式，还有非常多的内容及技巧，无法使用有限的篇幅进行介绍，同时也希望与各位一同讨论。</font>

### 一些例子

+ 输出 年龄>25的女程序员中名字排名前3位的姓名

```java
javaProgrammers.stream()
          .filter((p) -> (p.getAge() > 25))
          .filter((p) -> ("female".equals(p.getGender())))
          .sorted((p, p2) -> (p.getFirstName().compareTo(p2.getFirstName())))
          .limit(3)
          //.forEach(e -> e.setSalary(e.getSalary() / 100 * 5 + e.getSalary()))//涨工资
          .forEach((p) -> System.out.printf("%s %s; ", p.getFirstName(), p.getLastName()));
```

+ 工资最高的 Java programmer

```java
Person person = javaProgrammers
          .stream()
          .max((p, p2) -> (p.getSalary() - p2.getSalary()))
          .get()
```

+ 将 Java programmers 的 first name 存放到 TreeSet

```java
TreeSet<String> javaDevLastName = javaProgrammers
          .stream()
          .map(Person::getLastName)
          .collect(toCollection(TreeSet::new))
```

+ 计算付给 Java programmers 的所有money

```java
int totalSalary = javaProgrammers
          .parallelStream()
          .mapToInt(p -> p.getSalary())
          .sum();
```

+ Comparator多属性排序: 先按名字不分大小写排，再按GID倒序排，最后按年龄正序排

```java
public static void main(String[] args) {
	List<Person> personList = getTestList();
	personList.sort(Comparator.comparing(Person::getName, String.CASE_INSENSITIVE_ORDER)
			.thenComparing(Person::getGid, (a, b) -> b.compareTo(a))
			.thenComparingInt(Person::getAge));
	personList.stream().forEach(System.out::println);
}

public static List<Person> getTestList() {
	return Lists.newArrayList(new Person("dai", "301", 10), new Person("dai", "303", 10),
			new Person("dai", "303", 8), new Person("dai", "303", 6), new Person("dai", "303", 11),
			new Person("dai", "302", 9), new Person("zhang", "302", 9), new Person("zhang", "301", 9),
			new Person("Li", "301", 8));
}

// 输出结果
// Person [name=dai, gid=303, age=6]
// Person [name=dai, gid=303, age=8]
// Person [name=dai, gid=303, age=10]
// Person [name=dai, gid=303, age=11]
// Person [name=dai, gid=302, age=9]
// Person [name=dai, gid=301, age=10]
// Person [name=Li, gid=301, age=8]
// Person [name=zhang, gid=302, age=9]
// Person [name=zhang, gid=301, age=9]
```

+ 处理字符串

两个新的方法可在字符串类上使用: join和chars。第一个方法使用指定的分隔符，将任何数量的字符串连接为一个字符串。

```java
String.join(":", "foobar", "foo", "bar");
// => foobar:foo:bar
```

第二个方法chars从字符串所有字符创建数据流，所以你可以在这些字符上使用流式操作。

```java
"foobar:foo:bar"
    .chars()
    .distinct()
    .mapToObj(c -> String.valueOf((char)c))
    .sorted()
    .collect(Collectors.joining());
// => :abfor
```

不仅仅是字符串，正则表达式模式串也能受益于数据流。我们可以分割任何模式串，并创建数据流来处理它们，而不是将字符串分割为单个字符的数据流，像下面这样:

```java
Pattern.compile(":")
    .splitAsStream("foobar:foo:bar")
    .filter(s -> s.contains("bar"))
    .sorted()
    .collect(Collectors.joining(":"));
// => bar:foobar
```

此外，正则模式串可以转换为谓词。这些谓词可以像下面那样用于过滤字符串流:

```java
Pattern pattern = Pattern.compile(".*@gmail\\.com");
Stream.of("bob@gmail.com", "alice@hotmail.com")
    .filter(pattern.asPredicate())
    .count();
// => 1
```

上面的模式串接受任何以@gmail.com结尾的字符串，并且之后用作Java8的Predicate来过滤电子邮件地址流。

+ Local Cache实现

```java
public class TestLocalCache {

	private static ConcurrentHashMap<Integer, Long> cache = new ConcurrentHashMap<>();

	static long fibonacci(int i) {
		if (i == 0)
			return i;

		if (i == 1)
			return 1;

		return cache.computeIfAbsent(i, (key) -> {
			System.out.println("Slow calculation of " + key);

			return fibonacci(i - 2) + fibonacci(i - 1);
		});
	}
	
	public static void main(String[] args) {
		// warm up
		for (int i = 0; i < 101; i++)
	        System.out.println(
	            "f(" + i + ") = " + fibonacci(i));
		
		// read -> cal
		long current = System.currentTimeMillis();
		System.out.println(fibonacci(100));
		System.out.println(System.currentTimeMillis()-current);
	}
}
```

+ 集合--》取元素的一个属性--》去重---》组装成List--》返回

```java
List<LikeDO> likeDOs=new ArrayList<LikeDO>();
List<Long> likeTidList = likeDOs.stream().map(LikeDO::getTid)
                .distinct().collect(Collectors.toList());
```

+ 集合--》按表达式过滤--》遍历、每个元系处理--》放入预先定义的集合中

```java
Map<String, StkProduct> newStockName2Product = Maps.newConcurrentMap();
        stockProducts.stream().filter(stkProduct -> stkProduct.enabled).forEach(stkProduct -> {
            String newName = BCConvert.bj2qj(StringUtils.replace(stkProduct.name, " ", ""));
            newStockName2Product.put(newName, stkProduct);
        });
```

```java
Set<String> qjStockNames;
 qjStockNames.stream().filter(name -> !acAutomaton.getKey2link().containsKey(name)).forEach(name -> {
            String value = "";
            StkProduct stkProduct = stockNameQj2Product.get(name);
            if (stkProduct != null) {
                value = stkProduct.name;
            }
            acAutomaton.getKey2link().put(name, value);
        });
```

+ 集合--》map

```java
List<ImageModel> imageModelList = null;
Map<Long, String> imagesMap = null;
imagesMap = imageModelList.stream().collect(Collectors.toMap(ImageModel::getAid, o -> IMAGE_ADDRESS_PREFIX + o.getUrl()));
              
             

Map<String, String> kvMap = postDetailCacheList.stream().collect(Collectors.toMap((detailCache) ->
                getBbsSimplePostKey(detailCache.getTid()), JSON::toJSONString));


Map<Long, Long> pidToTid；
List<String> pidKeyList = pidToTid.entrySet().stream().map((o) -> getKeyBbsReplyPid(o.getValue(), o.getKey())).collect(Collectors.toList());
```

+ DO模型---》Model模型

```java
List<AdDO> adDOList;
adDOList.stream().map(adDo -> convertAdModel(adDo))
                .collect(Collectors.toList());
```

+ phones 是一个`List<String>`，将相同的元素分组、归类

```java
List<String> phones=new ArrayList<String>();
        phones.add("a");
        phones.add("b");
        phones.add("a");
        phones.add("a");
        phones.add("c");
        phones.add("b");
        Map<String, List<String>> phoneClassify = phones.stream().collect(Collectors.groupingBy(item -> item));
        System.out.println(phoneClassify);
返回结果: 
{a=[a, a, a], b=[b, b], c=[c]}
```

### 参考资料

+ [Lambda 表达式的 10 个示例在新窗口打开](https://mp.weixin.qq.com/s/Xhr9aNEMr0fIUWh27mH1pw)
+ [learn-java8在新窗口打开](https://github.com/biezhi/learn-java8)
+ [java8-tutorial在新窗口打开](https://github.com/aalansehaiyang/java8-tutorial)
+ [一文让你明白lambda用法与源码分析在新窗口打开](https://mp.weixin.qq.com/s/9mgD2aV6gML57RAPIEbZeQ)
+ [http://blog.csdn.net/renfufei/article/details/24600507在新窗口打开](http://blog.csdn.net/renfufei/article/details/24600507)
+ [http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html在新窗口打开](http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html)
+ Java8 Lambda表达式教程 https://blog.csdn.net/ioriogami/article/details/12782141
+ Java8 6个问题 https://wizardforcel.gitbooks.io/java8-tutorials/content/Java%208%20%E7%9A%846%E4%B8%AA%E9%97%AE%E9%A2%98.html

---



## <font style="color:rgb(31, 35, 40);">Method and Constructor 引用</font>

```plain
Converter<String, Integer> converter = Integer::valueOf;
Integer converted = converter.convert("123");
System.out.println(converted);   // 123
```

<font style="color:rgb(31, 35, 40);">Java 8允许你通过方法或构造器的引用，如</font><font style="color:rgb(31, 35, 40);"> </font>`<font style="color:rgb(31, 35, 40);">::</font>`<font style="color:rgb(31, 35, 40);"> </font><font style="color:rgb(31, 35, 40);">。上面示例演示了引用一个静态方法。另外我们也可以用类实例对象的方法。</font>

```plain
class Something {
    String startsWith(String s) {
        return String.valueOf(s.charAt(0));
    }
}
```

```plain
Something something = new Something();
Converter<String, String> converter = something::startsWith;
String converted = converter.convert("Java");
System.out.println(converted);    // "J"
```

<font style="color:rgb(31, 35, 40);">让我们了解下</font><font style="color:rgb(31, 35, 40);"> </font>`<font style="color:rgb(31, 35, 40);">::</font>`<font style="color:rgb(31, 35, 40);"> </font><font style="color:rgb(31, 35, 40);">字键字如何用在构造器中。首先定义一个类如下结构：</font>

```plain
class Person {
    String firstName;
    String lastName;

    Person() {}

    Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

<font style="color:rgb(31, 35, 40);">接下来，我们定义一个person工厂接口，用于创建新的persons：</font>

```plain
interface PersonFactory<P extends Person> {
    P create(String firstName, String lastName);
}
```

<font style="color:rgb(31, 35, 40);">与传统的实现方式不同，我们通过调用构造器方法来实现：</font>

```plain
PersonFactory<Person> personFactory = Person::new;
Person person = personFactory.create("Peter", "Parker");
```

<font style="color:rgb(31, 35, 40);">我们通过</font><font style="color:rgb(31, 35, 40);"> </font>`<font style="color:rgb(31, 35, 40);">Person::new</font>`<font style="color:rgb(31, 35, 40);">来触发Person的构造器函数。Java编译器能自动选择合适的构造器函数来匹配</font>`<font style="color:rgb(31, 35, 40);">PersonFactory.create</font>`<font style="color:rgb(31, 35, 40);">。</font>

<font style="color:rgb(31, 35, 40);">代码：com.winterbe.java8.samples.lambda.Lambda2</font>




