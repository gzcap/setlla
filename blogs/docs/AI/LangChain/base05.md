---
title: 面向对象OOP
date: 2024/09/30
tags:
  - 面向对象
categories:
  - Java
hideComments: false
---


## 类和对象

### 面向过程和面向对象

#### 什么是 OOP？

OOP 的英文全称是 Object Oriented Programming，要理解它的话，就要先理解面向对象，要想理解面向对象的话，就要先理解面向过程，因为一开始没有面向对象的编程语言，都是面向过程。

举个简单点的例子来区分一下面向过程和面向对象。

有一天，你想吃小碗汤了，怎么办呢？有两个选择：

1）自己买食材，豆腐皮啊、肉啊、蒜苔啊等等，自己动手做。

2）到饭店去，只需要对老板喊一声，“来份小碗汤。”

第一种就是面向过程，第二种就是面向对象。

面向过程有什么劣势呢？假如你买了小碗汤的食材，临了又想吃宫保鸡丁了，你是不是还得重新买食材？

面向对象有什么优势呢？假如你不想吃小碗汤了，你只需要对老板说，“我那个小碗汤如果没做的话，换成宫保鸡丁吧！”

**面向过程是流程化**的，一步一步，上一步做完了，再做下一步。

**面向对象是模块化**的，我做我的，你做你的，我需要你做的话，我就告诉你一声。我不需要知道你到底怎么做，只看功劳不看苦劳。

不过，如果追到底的话，面向对象的底层其实还是面向过程，只不过把面向过程进行了抽象化，封装成了类，方便我们的调用。

### 类

对象可以是现实中看得见的任何物体，比如说，一只特立独行的猪；也可以是想象中的任何虚拟物体，比如说能七十二变的孙悟空。

Java 通过类（class）来定义这些物体，这些物体有什么状态，通过字段来定义，比如说比如说猪的颜色是纯色还是花色；这些物体有什么行为，通过方法来定义，比如说猪会吃，会睡觉。

来，定义一个简单的类给你看看。

```plain
/**
 *
 * @author 
 * @date 2020/11/19
 */
public class Person {
    private String name;
    private int age;
    private int sex;
    private void eat() {}
    private void sleep() {}
    private void dadoudou() {}
}
```

一个类可以包含：

+ 字段（Filed）
+ 方法（Method）
+ 构造方法（Constructor）

在 Person 类中，字段有 3 个，分别是 name、age 和 sex，它们也称为**成员**[**变量**](https://javabetter.cn/oo/var.html)**——在类内部但在方法外部，方法内部的叫临时变量**。

成员变量有时候也叫做实例变量，在编译时不占用内存空间，在运行时获取内存，也就是说，只有在对象实例化（`new Person()`）后，字段才会获取到内存，这也正是它被称作“实例”变量的原因。

[方法](https://javabetter.cn/oo/method.html)有 3 个，分别是 `eat()`、`sleep()` 和 `dadoudou()`，表示 Person 这个对象可以做什么，也就是吃饭睡觉打豆豆。

那三妹是不是要问，“怎么没有构造方法呢？”

的确在 Person 类的源码文件（.java）中没看到，但在反编译后的字节码文件（.class）中是可以看得到的。

```plain
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.itwanger.twentythree;

public class Person {
    private String name;
    private int age;
    private int sex;

    public Person() {
    }

    private void eat() {
    }

    private void sleep() {
    }

    private void dadoudou() {
    }
}
```

`public Person(){}` 就是默认的构造方法，因为是空的构造方法（方法体中没有内容），所以可以缺省。Java 聪明就聪明在这，有些很死板的代码不需要开发人员添加，它会偷偷地做了。

### new 一个对象

创建 Java 对象时，需要用到 `new` 关键字。

```plain
Person person = new Person();
```

这行代码就通过 Person 类创建了一个 Person 对象。所有**对象**在创建的时候都会在**堆内存中分配空间**。

创建对象的时候，需要一个 `main()` 方法作为入口， `main()` 方法可以在当前类中，也可以在另外一个类中。

第一种：`main()` 方法直接放在 Person 类中。

```plain
public class Person {
    private String name;
    private int age;
    private int sex;

    private void eat() {}
    private void sleep() {}
    private void dadoudou() {}

    public static void main(String[] args) {
        Person person = new Person();
        System.out.println(person.name);
        System.out.println(person.age);
        System.out.println(person.sex);
    }
}
```

输出结果如下所示：

```plain
null
0
0
```

第二种：`main()` 方法不在 Person 类中，而在另外一个类中。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727234038036-0f80dcd5-5060-4308-994b-09d676d0af7a.png" />


实际开发中，我们通常不在当前类中直接创建对象并使用它，而是放在使用对象的类中，比如说上图中的 PersonTest 类。

可以把 PersonTest 类和 Person 类放在两个文件中，也可以放在一个文件（命名为 PersonTest.java）中，就像下面这样。

```plain
/**
 * @author 
 */
public class PersonTest {
    public static void main(String[] args) {
        Person person = new Person();
    }
}

class Person {
    private String name;
    private int age;
    private int sex;

    private void eat() {}
    private void sleep() {}
    private void dadoudou() {}
}
```

### 初始化对象

在之前的例子中，程序输出结果为：

```plain
null
0
0
```

为什么会有这样的输出结果呢？因为 Person 对象没有初始化，因此输出了 String 的默认值 null，int 的默认值 0。

那怎么初始化 Person 对象（对字段赋值）呢？

#### [第一种：通过对象的引用变量。](https://javabetter.cn/oo/object-class.html#%E7%AC%AC%E4%B8%80%E7%A7%8D-%E9%80%9A%E8%BF%87%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%BC%95%E7%94%A8%E5%8F%98%E9%87%8F%E3%80%82)

```plain
public class Person {
    private String name;
    private int age;
    private int sex;

    public static void main(String[] args) {
        Person person = new Person();
        person.name = "";
        person.age = 18;
        person.sex = 1;
        
        System.out.println(person.name);
        System.out.println(person.age);
        System.out.println(person.sex);
    }
}
```

person 被称为对象 Person 的引用变量，见下图：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727234038054-431ecd5e-8864-47f2-b5e6-9d4e0876a677.png" />


通过对象的引用变量，可以直接对字段进行初始化（`person.name = ""`），所以以上代码输出结果如下所示：

```plain
18
1
```

#### 第二种：通过方法初始化。

```plain
/**
 * @author ，一枚有趣的程序员
 */
public class Person {
    private String name;
    private int age;
    private int sex;

    public void initialize(String n, int a, int s) {
        name = n;
        age = a;
        sex = s;
    }

    public static void main(String[] args) {
        Person person = new Person();
        person.initialize("",18,1);

        System.out.println(person.name);
        System.out.println(person.age);
        System.out.println(person.sex);
    }
}
```

在 Person 类中新增方法 `initialize()`，然后在新建对象后传参进行初始化（`person.initialize("", 18, 1)`）。

#### 第三种：通过构造方法初始化。

```java
/**
 * @author ，一枚有趣的程序员
 */
public class Person {
    private String name;
    private int age;
    private int sex;

    public Person(String name, int age, int sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    public static void main(String[] args) {
        Person person = new Person("", 18, 1);

        System.out.println(person.name);
        System.out.println(person.age);
        System.out.println(person.sex);
    }
}
```

这也是最标准的一种做法，直接在 new 的时候把参数传递过去。

补充一点知识，匿名对象。匿名对象意味着没有引用变量，它只能在创建的时候被使用一次。

```plain
new Person();
```

可以直接通过匿名对象调用方法：

```plain
new Person().initialize("", 18, 1);
```

### 关于 Object 类

在 Java 中，经常提到一个词“万物皆对象”，其中的“万物”指的是 Java 中的所有类，而这些类都是 Object 类的子类。

Object 主要提供了 11 个方法，大致可以分为六类：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727234038361-ac4a399d-d324-4b45-8b90-fd0a2e19a7c0.png" />


三分恶面渣逆袭：Object类的方法

#### 对象比较：

①`public native int hashCode()` ：[native 方法](https://javabetter.cn/oo/native-method.html)，用于返回对象的哈希码。

```plain
public native int hashCode();
```

按照约定，相等的对象必须具有相等的哈希码。如果重写了 equals 方法，就应该重写 hashCode 方法。可以使用 [Objects.hash()](https://javabetter.cn/common-tool/Objects.html#%E8%8E%B7%E5%8F%96%E5%AF%B9%E8%B1%A1%E7%9A%84hashcode) 方法来生成哈希码。

```plain
public int hashCode() {
    return Objects.hash(name, age);
}
```

②、`public boolean equals(Object obj)`：用于比较 2 个对象的内存地址是否相等。

```plain
public boolean equals(Object obj) {
    return (this == obj);
}
```

如果比较的是两个对象的值是否相等，就要重写该方法，比如 [String 类](https://javabetter.cn/string/string-source.html)、Integer 类等都重写了该方法。举个例子，假如有一个 Person 类，我们认为只要年龄和名字相同，就是同一个人，那么就可以这样重写 equals 方法：

```plain
class Person1 {
    private String name;
    private int age;

    // 省略 gettter 和 setter 方法

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof Person1) {
            Person1 p = (Person1) obj;
            return this.name.equals(p.getName()) && this.age == p.getAge();
        }
        return false;
    }
}
```

#### 对象拷贝：

`protected native Object clone() throws CloneNotSupportedException`：naitive 方法，返回此对象的一个副本。默认实现只做[浅拷贝](https://javabetter.cn/basic-extra-meal/deep-copy.html)，且类必须实现 Cloneable 接口。

Object 本身没有实现 Cloneable 接口，所以在不重写 clone 方法的情况下直接直接调用该方法会发生 CloneNotSupportedException 异常。

#### [对象转字符串：](https://javabetter.cn/oo/object-class.html#%E5%AF%B9%E8%B1%A1%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2)

`public String toString()`：返回对象的字符串表示。默认实现返回类名@哈希码的十六进制表示，但通常会被重写以返回更有意义的信息。

```plain
public String toString() {
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```

比如说一个 Person 类，我们可以重写 toString 方法，返回一个有意义的字符串：

```plain
public String toString() {
    return "Person{" +
            "name='" + name + '\'' +
            ", age=" + age +
            '}';
}
```

当然了，这项工作也可以直接交给 IDE，比如 IntelliJ IDEA，直接右键选择 Generate，然后选择 toString 方法，就会自动生成一个 toString 方法。

也可以交给 [Lombok](https://javabetter.cn/springboot/lombok.html)，使用 @Data 注解，它会自动生成 toString 方法。

数组也是一个对象，所以通常我们打印数组的时候，会看到诸如 `[I@1b6d3586` 这样的字符串，这个就是 int 数组的哈希码。

#### [多线程调度：](https://javabetter.cn/oo/object-class.html#%E5%A4%9A%E7%BA%BF%E7%A8%8B%E8%B0%83%E5%BA%A6)

每个对象都可以调用 Object 的 wait/notify 方法来实现等待/通知机制。我们来写一个例子：

```plain
public class WaitNotifyDemo {
    public static void main(String[] args) {
        Object lock = new Object();
        new Thread(() -> {
            synchronized (lock) {
                System.out.println("线程1：我要等待");
                try {
                    lock.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("线程1：我被唤醒了");
            }
        }).start();
        new Thread(() -> {
            synchronized (lock) {
                System.out.println("线程2：我要唤醒");
                lock.notify();
                System.out.println("线程2：我已经唤醒了");
            }
        }).start();
    }
}
```

解释一下：

+ 线程 1 先执行，它调用了 `lock.wait()` 方法，然后进入了等待状态。
+ 线程 2 后执行，它调用了 `lock.notify()` 方法，然后线程 1 被唤醒了。

①、`public final void wait() throws InterruptedException`：调用该方法会导致当前线程等待，直到另一个线程调用此对象的`notify()`方法或`notifyAll()`方法。

②、`public final native void notify()`：唤醒在此对象监视器上等待的单个线程。如果有多个线程等待，选择一个线程被唤醒。

③、`public final native void notifyAll()`：唤醒在此对象监视器上等待的所有线程。

④、`public final native void wait(long timeout) throws InterruptedException`：等待 timeout 毫秒，如果在 timeout 毫秒内没有被唤醒，会自动唤醒。

⑥、`public final void wait(long timeout, int nanos) throws InterruptedException`：更加精确了，等待 timeout 毫秒和 nanos 纳秒，如果在 timeout 毫秒和 nanos 纳秒内没有被唤醒，会自动唤醒。

#### [反射：](https://javabetter.cn/oo/object-class.html#%E5%8F%8D%E5%B0%84)

`public final native Class<?> getClass()`：用于获取对象的类信息，如类名。比如说：

```plain
public class GetClassDemo {
    public static void main(String[] args) {
        Person p = new Person();
        Class<? extends Person> aClass = p.getClass();
        System.out.println(aClass.getName());
    }
}
```

输出结果：

```plain
com.itwanger.Person
```

#### [垃圾回收：](https://javabetter.cn/oo/object-class.html#%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6)

`protected void finalize() throws Throwable`：当垃圾回收器决定回收对象占用的内存时调用此方法。用于清理资源，但 Java 不推荐使用，因为它不可预测且容易导致问题，Java 9 开始已被弃用。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727234039454-57d8313b-8b35-4a92-a2d4-f0f70f6ced4a.png" />


### 关于对象一些小知识

#### 抽象的历程

所有编程语言都是一种抽象，甚至可以说，我们能够解决的问题的复杂程度取决于抽象的类型和质量。

Smalltalk 是历史上第一门获得成功的面向对象语言，也为 Java 提供了灵感。它有 5 个基本特征：

+ 万物皆对象。
+ 一段程序实际上就是多个对象通过发送消息的方式来告诉彼此该做什么。
+ 通过组合的方式，可以将多个对象封装成其他更为基础的对象。
+ 对象是通过类实例化的。
+ 同一类型的对象可以接收相同的消息。

总结一句话就是：

状态+行为+标识=对象，每个对象在内存中都会有一个唯一的地址。

#### 对象具有接口

所有的对象，都可以被归为一类，并且同一类对象拥有一些共同的行为和特征。在 Java 中，class 关键字用来定义一个类型。

**创建抽象数据类型**是面向对象编程的一个基本概念。你可以创建某种类型的变量，Java 中称之为对象或者实例，然后你就可以操作这些变量，Java 中称之为发送消息或者发送请求，最后对象决定自己该怎么做。

**类描述了一系列具有相同特征和行为的对象，从宽泛的概念上来说，类其实就是一种自定义的数据类型**。

一旦创建了一个类，就可以用它创建任意多个对象。面向对象编程语言遇到的最大一个挑战就是，如何把现实/虚拟的元素抽象为 Java 中的对象。

**对象能够接收什么样的请求是由它的**[**接口**](https://javabetter.cn/oo/interface.html)**定义的。具体是怎么做到的，就由它的实现方法来实现**。

#### 访问权限修饰符

类的创建者有时候也被称为 API 提供者，对应的，类的使用者就被称为 API 调用者。

JDK 就给我们提供了 Java 的基础实现，JDK 的作者也就是基础 API 的提供者（Java 多线程部分的作者 Doug Lea 是被 Java 程序员敬佩的一个大佬），我们这些 Java 语言的使用者，说白了就是 JDK 的调用者。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727234038079-f34165fe-f602-424d-9a40-7f6a07e3bf6f.png" />


当然了，假如我们也提供了新的类给其他调用者，我们也就成为了新的创建者。

API 创建者在创建新的类的时候，只暴露必要的接口，而隐藏其他所有不必要的信息，之所以要这么做，是因为如果这些信息对调用者是不可见的，那么创建者就可以随意修改隐藏的信息，而不用担心对调用者的影响。

这里就必须要讲到 [Java 的权限修饰符](https://javabetter.cn/oo/access-control.html)。

访问权限修饰符的第一个作用是，防止类的调用者接触到他们不该接触的内部实现；第二个作用是，让类的创建者可以轻松修改内部机制而不用担心影响到调用者的使用。

+ public
+ private
+ protected

还有一种“默认”的权限修饰符，是缺省的，它修饰的类可以访问同一个包下面的其他类。

#### 组合

我们可以把一个创建好的类作为另外一个类的成员变量来使用，利用已有的类组成成一个新的类，被称为“复用”，组合代表的关系是 has-a 的关系。

#### 继承

继承是 Java 中非常重要的一个概念，子类继承父类，也就拥有了父类中 protected 和 public 修饰的方法和字段，同时，子类还可以扩展一些自己的方法和字段，也可以重写继承过来方法。

常见的例子，就是形状可以有子类圆形、方形、三角形，它们的基础接口是相同的，比如说都有一个 `draw()` 的方法，子类可以继承这个方法实现自己的绘制方法。

如果子类只是重写了父类的方法，那么它们之间的关系就是 is-a 的关系，但如果子类增加了新的方法，那么它们之间的关系就变成了 is-like-a 的关系。

#### 多态

比如说有一个父类Shape

```plain
public class Shape {
    public void draw() {
        System.out.println("形状");
    }
}
```

子类Circle

```plain
public class Circle extends Shape{
    @Override
    public void draw() {
        System.out.println("圆形");
    }
}
```

子类Line

```plain
public class Line extends Shape {
    @Override
    public void draw() {
        System.out.println("线");
    }
}
```

测试类

```plain
public class Test {
    public static void main(String[] args) {
        Shape shape1 = new Line();
        shape1.draw();
        Shape shape2 = new Circle();
        shape2.draw();
    }
}
```

运行结果：

```plain
线
圆形
```

在测试类中，shape1 的类型为 Shape，shape2 的类型也为 Shape，但调用 `draw()` 方法后，却能自动调用子类 Line 和 Circle 的 `draw()` 方法，这是为什么呢？

其实就是 Java 中的[多态](https://javabetter.cn/oo/polymorphism.html)

## package 包

### 关于包

在前面的代码中，我们把类和接口命名为`Person`、`Student`、`Hello`等简单的名字。

在团队开发中，如果小明写了一个`Person`类，小红也写了一个`Person`类，现在，小白既想用小明的`Person`，也想用小红的`Person`，怎么办？

如果小军写了一个`Arrays`类，恰好 JDK 也自带了一个`Arrays`类，如何解决类名冲突？

在 Java 中，我们使用`package`来解决名字冲突。

Java 定义了一种名字空间，称之为包：`package`。一个类总是属于某个包，类名（比如`Person`）只是一个简写，真正的完整类名是`包名.类名`。

例如：

小明的`Person`类存放在包`ming`下面，因此，完整类名是`ming.Person`；

小红的`Person`类存放在包`hong`下面，因此，完整类名是`hong.Person`；

小军的`Arrays`类存放在包`mr.jun`下面，因此，完整类名是`mr.jun.Arrays`；

JDK 的`Arrays`类存放在包`java.util`下面，因此，完整类名是`java.util.Arrays`。

在定义`class`的时候，我们需要在第一行声明这个`class`属于哪个包。

小明的`Person.java`文件：

```plain
package ming; // 申明包名ming

public class Person {
}
```

小军的`Arrays.java`文件：

```plain
package mr.jun; // 申明包名mr.jun

public class Arrays {
}
```

**在 Java 虚拟机执行的时候，JVM 只看完整类名，因此，只要包名不同，类就不同**。

包可以是多层结构，用`.`隔开。例如：`java.util`。

要特别注意：包没有父子关系。java.util和java.util.zip是不同的包，两者没有任何继承关系。

没有定义包名的`class`，它使用的是默认包，非常容易引起名字冲突，因此，不推荐不写包名的做法。

我们还需要按照包结构把上面的 Java 文件组织起来。假设以`package_sample`作为根目录，`src`作为源码目录，那么所有文件结构就是：

```plain
package_sample
└─ src
    ├─ hong
    │  └─ Person.java
    │  ming
    │  └─ Person.java
    └─ mr
       └─ jun
          └─ Arrays.java
```

即所有 Java 文件对应的目录层次要和包的层次一致。

编译后的`.class`文件也需要按照包结构存放。如果使用 IDE，把编译后的`.class`文件放到`bin`目录下，那么，编译的文件结构就是：

```plain
package_sample
└─ bin
   ├─ hong
   │  └─ Person.class
   │  ming
   │  └─ Person.class
   └─ mr
      └─ jun
         └─ Arrays.class
```

编译的命令相对比较复杂，我们需要在`src`目录下执行`javac`命令：

```plain
javac -d ../bin ming/Person.java hong/Person.java mr/jun/Arrays.java
```

在 IDE 中，会自动根据包结构编译所有 Java 源码，所以不必担心使用命令行编译的复杂命令。

### 包的作用域

位于同一个包的类，可以访问包作用域的字段和方法。

不用`public`、`protected`、`private`修饰的字段和方法就是包作用域。例如，`Person`类定义在`hello`包下面：

```plain
package hello;

public class Person {
    // 包作用域:
    void hello() {
        System.out.println("Hello!");
    }
}
```

`Main`类也定义在`hello`包下面，就可以直接访问 Person 类：

```plain
package hello;

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.hello(); // 可以调用，因为Main和Person在同一个包
    }
}
```

### 导入包

在一个`class`中，我们总会引用其他的`class`。例如，小明的`ming.Person`类，如果要引用小军的`mr.jun.Arrays`类，他有三种写法：

第一种，直接写出完整类名，例如：

```plain
// Person.java
package ming;

public class Person {
    public void run() {
        mr.jun.Arrays arrays = new mr.jun.Arrays();
    }
}
```

很显然，每次都要写完整的类名比较痛苦。

因此，第二种写法是用`import`语句，导入小军的`Arrays`，然后写简单类名：

```plain
// Person.java
package ming;

// 导入完整类名:
import mr.jun.Arrays;

public class Person {
    public void run() {
        Arrays arrays = new Arrays();
    }
}
```

在写`import`的时候，可以使用`*`，表示把这个包下面的所有`class`都导入进来（但不包括子包的`class`）：

```plain
// Person.java
package ming;

// 导入mr.jun包的所有class:
import mr.jun.*;

public class Person {
    public void run() {
        Arrays arrays = new Arrays();
    }
}
```

我们一般不推荐这种写法，因为在导入了多个包后，很难看出`Arrays`类属于哪个包。

还有一种`import static`的语法，它可以导入一个类的静态字段和静态方法：

```plain
package main;

// 导入System类的所有静态字段和静态方法:
import static java.lang.System.*;

public class Main {
    public static void main(String[] args) {
        // 相当于调用System.out.println(…)
        out.println("Hello, world!");
    }
}
```

`import static`很少使用。

Java 编译器最终编译出的`.class`文件只使用 _完整类名_，因此，在代码中，当编译器遇到一个`class`名称时：

+ 如果是完整类名，就直接根据完整类名查找这个`class`；
+ 如果是简单类名，按下面的顺序依次查找：
    - 查找当前`package`是否存在这个`class`；
    - 查找`import`的包是否包含这个`class`；
    - 查找`java.lang`包是否包含这个`class`。

如果按照上面的规则还无法确定类名，则编译报错。

我们来看一个例子：

```plain
// Main.java
package test;

import java.text.Format;

public class Main {
    public static void main(String[] args) {
        java.util.List list; // ok，使用完整类名 -> java.util.List
        Format format = null; // ok，使用import的类 -> java.text.Format
        String s = "hi"; // ok，使用java.lang包的String -> java.lang.String
        System.out.println(s); // ok，使用java.lang包的System -> java.lang.System
        MessageFormat mf = null; // 编译错误：无法找到MessageFormat: MessageFormat cannot be resolved to a type
    }
}
```

因此，编写 class 的时候，编译器会自动帮我们做两个 import 动作：

+ 默认自动`import`当前`package`的其他`class`；
+ 默认自动`import java.lang.*`。

注意：自动导入的是java.lang包，但类似java.lang.reflect这些包仍需要手动导入。

如果有两个`class`名称相同，例如，`mr.jun.Arrays`和`java.util.Arrays`，那么只能`import`其中一个，另一个必须写完整类名。

### 包的最佳实践

为了避免名字冲突，我们需要确定唯一的包名。推荐的做法是使用倒置的域名来确保唯一性。例如：

+ org.apache
+ org.apache.commons.log
+ com.tobebetterjavaer.sample

子包就可以根据功能自行命名。

要注意不要和`java.lang`包的类重名，即自己的类不要使用这些名字：

+ String
+ System
+ Runtime
+ ...

要注意也不要和 JDK 常用类重名：

+ java.util.List
+ java.text.Format
+ java.math.BigInteger
+ ...

### 小结

Java 内建的`package`机制是为了避免`class`命名冲突；

JDK 的核心类使用`java.lang`包，编译器会自动导入；

JDK 的其它常用类定义在`java.util.*`，`java.math.*`，`java.text.*`，……；

包名推荐使用倒置的域名，例如`org.apache`。

## 变量

Java 变量就好像一个容器，可以保存程序在运行过程中的值，它在声明的时候会定义对应的[数据类型](https://javabetter.cn/basic-grammar/basic-data-type.html)（Java 分为两种数据类型：基本数据类型和引用数据类型）。变量按照作用域的范围又可分为三种类型：局部变量，成员变量和静态变量。

比如说，`int data = 88;`，其中 data 就是一个变量，它的值为 88，类型为整型（int）。

### 局部变量

在方法体内声明的变量被称为局部变量，该变量只能在该方法内使用，类中的其他方法并不知道该变量。来看下面这个示例：

```plain
/**
 * @author 
 */
public class LocalVariable {
    public static void main(String[] args) {
        int a = 10;
        int b = 10;
        int c = a + b;
        System.out.println(c);
    }
}
```

其中 a、b、c 就是局部变量，它们只能在当前这个 main 方法中使用。

声明局部变量时的注意事项：

+ 局部变量声明在方法、构造方法或者语句块中。
+ 局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，将会被销毁。
+ 访问修饰符不能用于局部变量。
+ 局部变量只在声明它的方法、构造方法或者语句块中可见。
+ 局部变量是在栈上分配的。
+ 局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用。

### 成员变量

在类内部但在方法体外声明的变量称为成员变量，或者实例变量，或者字段。之所以称为实例变量，是因为该变量只能通过类的实例（对象）来访问。来看下面这个示例：

```plain
/**
 * @author 
 */
public class InstanceVariable {
    int data = 88;
    public static void main(String[] args) {
        InstanceVariable iv = new InstanceVariable();
        System.out.println(iv.data); // 88
    }
}
```

其中 iv 是一个变量，它是一个引用类型的变量。`new` 关键字可以创建一个类的实例（也称为对象），通过“=”操作符赋值给 iv 这个变量，iv 就成了这个对象的引用，通过 `iv.data` 就可以访问成员变量了。

声明成员变量时的注意事项：

+ 成员变量声明在一个类中，但在方法、构造方法和语句块之外。
+ 当一个对象被实例化之后，每个成员变量的值就跟着确定。
+ 成员变量在对象创建的时候创建，在对象被销毁的时候销毁。
+ 成员变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息。
+ 成员变量可以声明在使用前或者使用后。
+ 访问修饰符可以修饰成员变量。
+ 成员变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把成员变量设为私有。通过使用访问修饰符可以使成员变量对子类可见；
+ 成员变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。

### 静态变量

通过 [static 关键字](https://javabetter.cn/oo/static.html)声明的变量被称为静态变量（类变量），它可以直接被类访问，来看下面这个示例：

```plain
/**
 * @author 
 */
public class StaticVariable {
    static int data = 99;
    public static void main(String[] args) {
        System.out.println(StaticVariable.data); // 99
    }
}
```

其中 data 就是静态变量，通过`类名.静态变量`就可以访问了，不需要创建类的实例。

声明静态变量时的注意事项：

+ 静态变量在类中以 static 关键字声明，但必须在方法构造方法和语句块之外。
+ 无论一个类创建了多少个对象，类只拥有静态变量的一份拷贝。
+ 静态变量除了被声明为常量外很少使用。
+ 静态变量储存在静态存储区。
+ 静态变量在程序开始时创建，在程序结束时销毁。
+ 与成员变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型。
+ 静态变量的默认值和实例变量相似。
+ 静态变量还可以在静态语句块中初始化。

### 常量

在 Java 中，有些数据的值是不会发生改变的，这些数据被叫做常量——使用 [final 关键字](https://javabetter.cn/oo/final.html)修饰的成员变量。常量的值一旦给定就无法改变！

常量在程序运行过程中主要有 2 个作用：

+ 代表常数，便于修改（例如：圆周率的值，`final double PI = 3.14`）
+ 增强程序的可读性（例如：常量 UP、DOWN 用来代表上和下，`final int UP = 0`）

Java 要求常量名必须大写。来看下面这个示例：

```plain
/**
 * @author 
 */
public class FinalVariable {
    final String CHEN = "沉";
    static final String MO = "默";
    public static void main(String[] args) {
        FinalVariable fv = new FinalVariable();
        System.out.println(fv.CHEN);
        System.out.println(MO);
    }
}
```



## 方法 - 实例方法、静态方法与抽象方法的区别与应用

### Java中的方法是什么？

方法用来实现代码的可重用性，我们编写一次方法，并多次使用它。通过增加或者删除方法中的一部分代码，就可以提高整体代码的可读性。

只有方法被调用时，它才会执行。Java 中最有名的方法当属 `main()` 方法，这是程序的入口。

### 如何声明方法？

方法的声明反映了方法的一些信息，比如说可见性、返回类型、方法名和参数。如下图所示。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727246864984-89650bbf-4a25-4d46-9ae8-3f8b19c40b9f.png" />


**访问权限**：它指定了方法的可见性。Java 提供了四种[访问权限修饰符](https://javabetter.cn/oo/access-control.html)：

+ public：该方法可以被所有类访问。
+ private：该方法只能在定义它的类中访问。
+ protected：该方法可以被同一个包中的类，或者不同包中的子类访问。
+ default：如果一个方法没有使用任何访问权限修饰符，那么它是 package-private 的，意味着该方法只能被同一个包中的类可见。

**返回类型**：方法返回的数据类型，可以是基本数据类型、对象和集合，如果不需要返回数据，则使用 void 关键字。

**方法名**：方法名最好反应出方法的功能，比如，我们要创建一个将两个数字相减的方法，那么方法名最好是 subtract。

方法名最好是一个动词，并且以小写字母开头。如果方法名包含两个以上单词，那么第一个单词最好是动词，然后是形容词或者名词，并且要以驼峰式的命名方式命名。比如：

+ 一个单词的方法名：`sum()`
+ 多个单词的方法名：`stringComparision()`

一个方法可能与同一个类中的另外一个方法同名，这被称为方法重载。

**参数**：参数被放在一个圆括号内，如果有多个参数，可以使用逗号隔开。参数包含两个部分，参数类型和参数名。如果方法没有参数，圆括号是空的。

**方法签名**：每一个方法都有一个签名，包括方法名和参数。

**方法体**：方法体放在一对花括号内，把一些代码放在一起，用来执行特定的任务。

### 方法有哪几种？

方法可以分为两种，一种叫标准类库方法，一种叫用户自定义方法。

#### 预先定义方法

Java 提供了大量预先定义好的方法供我们调用，也称为标准类库方法，或者内置方法。比如说 String 类的 `length()`、`equals()`、`compare()` 方法，以及我们在初学 Java 阶段最常用的 `println()` 方法，用来在控制台打印信息。

```plain
/**
 * @author 
 */
public class PredefinedMethodDemo {
    public static void main(String[] args) {
        System.out.println("，一枚有趣的程序员");
    }
}
```

在上面的代码中，我们使用了两个预先定义的方法，`main()` 方法是程序运行的入口，`println()` 方法是 `PrintStream` 类的一个方法。这些方法已经提前定义好了，所以我们可以直接使用它们。

我们可以通过集成开发工具查看预先定义方法的方法签名，当我们把鼠标停留在 `println()` 方法上面时，就会显示下图中的内容：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727246865233-d22d6791-5d63-4726-a5f6-aabe8f5d6d7e.png" />


`println()` 方法的访问权限修饰符是 public，返回类型为 void，方法名为 println，参数为 `String x`，以及 Javadoc（方法是干嘛的）。

预先定义方法让编程变得简单了起来，我们只需要在实现某些功能的时候直接调用这些方法即可，不需要重新编写。

Java 的一个非常大的优势，就是，JDK 的设计者（开发者）为我们提供了大量的标准类库方法，这对于初学编程的新手来说极其友好；不仅如此，GitHub/码云上也有大量可以直接拿到生产环境下使用的第三方类库，比如说 hutool 啊、Apache 包啊、一线大厂或者顶级开发大佬贡献的类库，比如说 Druid、Gson 等等。

但如果你想从一个初级开发者（俗称调包侠）晋升为一名优秀的 Java 工程师，那就需要深入研究这些源码，并掌握，最好是能自己写出来这些源码，最起码能自定义一些源码，以便为我们所用。

#### 用户自定义方法

当预先定义方法无法满足我们的要求时，就需要自定义一些方法，比如说，我们来定义这样一个方法，用来检查数字是偶数还是奇数。

```plain
public static void findEvenOdd(int num) {
    if (num % 2 == 0) {
        System.out.println(num + " 是偶数");
    } else {
        System.out.println(num + " 是奇数");
    }
}
```

方法名叫做 `findEvenOdd`，访问权限修饰符是 public，并且是静态的（static），返回类型是 void，参数有一个整型（int）的 num。方法体中有一个 if else 语句，如果 num 可以被 2 整除，那么就打印这个数字是偶数，否则就打印这个数字是奇数。

方法被定义好后，如何被调用呢？

```plain
/**
 * @author 
 */
public class EvenOddDemo {
    public static void main(String[] args) {
        findEvenOdd(10);
        findEvenOdd(11);
    }

    public static void findEvenOdd(int num) {
        if (num % 2 == 0) {
            System.out.println(num + " 是偶数");
        } else {
            System.out.println(num + " 是奇数");
        }
    }
}
```

`main()` 方法是程序的入口，并且是静态的，那么就可以直接调用同样是静态方法的 `findEvenOdd()`。

当一个方法被 static 关键字修饰时，它就是一个静态方法。换句话说，静态方法是属于类的，不属于类实例的（不需要通过 new 关键字创建对象来调用，直接通过类名就可以调用）。

### 什么是实例方法？

没有使用 [static 关键字](https://javabetter.cn/oo/static.html)修饰，但在类中声明的方法被称为实例方法，在调用实例方法之前，必须创建类的对象。

```plain
/**
 * @author 
 */
public class InstanceMethodExample {
    public static void main(String[] args) {
        InstanceMethodExample instanceMethodExample = new InstanceMethodExample();
        System.out.println(instanceMethodExample.add(1, 2));
    }

    public int add(int a, int b) {
        return a + b;
    }
}
```

`add()` 方法是一个实例方法，需要创建 InstanceMethodExample 对象来访问。

实例方法有两种特殊类型：

+ getter 方法
+ setter 方法

getter 方法用来获取私有变量（private 修饰的字段）的值，setter 方法用来设置私有变量的值。

```plain
/**
 * @author ，一枚有趣的程序员
 */
public class Person {
    private String name;
    private int age;
    private int sex;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }
}
```

getter 方法以 get 开头，setter 方法以 set 开头。

### 什么是静态方法？

相应的，有 [static 关键字](https://javabetter.cn/oo/static.html)修饰的方法就叫做静态方法。

```plain
/**
 * 
 *
 * @author 
 * @date 8/9/22
 */
public class StaticMethodExample {
    public static void main(String[] args) {
        System.out.println(add(1,2));
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
```

StaticMethodExample 类中，mian 和 add 方法都是静态方法，不同的是，main 方法是程序的入口。当我们调用静态方法的时候，就不需要 new 出来类的对象，就可以直接调用静态方法了，一些工具类的方法都是静态方法，比如说 hutool 工具类库，里面有大量的静态方法可以直接调用。

> Hutool 的目标是使用一个工具方法代替一段复杂代码，从而最大限度的避免“复制粘贴”代码的问题，彻底改变我们写代码的方式。
>
> 以计算 MD5 为例：
>
> + 👴【以前】打开搜索引擎 -> 搜“Java MD5 加密” -> 打开某篇博客-> 复制粘贴 -> 改改好用
> + 👦【现在】引入 Hutool -> SecureUtil.md5()
>
> Hutool 的存在就是为了减少代码搜索成本，避免网络上参差不齐的代码出现导致的 bug。

### 什么是抽象方法？

没有方法体的方法被称为抽象方法，它总是在[抽象类](https://javabetter.cn/oo/abstract.html)中声明。这意味着如果类有抽象方法的话，这个类就必须是抽象的。可以使用 abstract 关键字创建抽象方法和抽象类。

```plain
/**
 * @author 
 */
abstract class AbstractDemo {
    abstract void display();
}
```

当一个类继承了抽象类后，就必须重写抽象方法：

```plain
/**
 * @author 
 */
public class MyAbstractDemo extends AbstractDemo {
    @Override
    void display() {
        System.out.println("重写了抽象方法");
    }

    public static void main(String[] args) {
        MyAbstractDemo myAbstractDemo = new MyAbstractDemo();
        myAbstractDemo.display();
    }
}
```

输出结果如下所示：

```plain
重写了抽象方法
```



## 可变参数

可变参数是 Java 1.5 的时候引入的功能，它允许方法使用任意多个、类型相同（`is-a`）的值作为参数。就像下面这样。

```plain
public static void main(String[] args) {
    print("沉");
    print("沉", "默");
    print("沉", "默", "王");
    print("沉", "默", "王", "二");
}

public static void print(String... strs) {
    for (String s : strs)
        System.out.print(s);
    System.out.println();
}
```

静态方法 `print()` 就使用了可变参数，所以 `print("沉")` 可以，`print("沉", "默")` 也可以，甚至 3 个、 4 个或者更多个字符串都可以作为参数传递给 `print()` 方法。

说到可变参数，我想起来[阿里巴巴开发手册](https://javabetter.cn/pdf/ali-java-shouce.html)上有这样一条规约。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727246947876-f2ad2bd5-2db8-4b80-a939-a1dff9ddbfb8.png" />


意思就是尽量不要使用可变参数，如果要用的话，可变参数必须要在参数列表的最后一位。既然坑位有限，只能在最后，那么可变参数就只能有一个（悠着点，悠着点）。如果可变参数不在最后一位，IDE 就会提示对应的错误，如下图所示。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727246948104-f4c79773-f6b3-4d3e-a639-503cf4b4e8aa.png" />


可变参数看起来就像是个语法糖，它背后究竟隐藏了什么呢？让我们来一探究竟，在追求真理这条路上我们要执着。

其实也很简单。**当使用可变参数的时候，实际上是先创建了一个数组，该数组的大小就是可变参数的个数，然后将参数放入数组当中，再将数组传递给被调用的方法**。

这就是为什么可以使用数组作为参数来调用带有可变参数的方法的根本原因。代码如下所示。

```plain
public static void main(String[] args) {
    print(new String[]{"沉"});
    print(new String[]{"沉", "默"});
    print(new String[]{"沉", "默", "王"});
    print(new String[]{"沉", "默", "王", "二"});
}

public static void print(String... strs) {
    for (String s : strs)
        System.out.print(s);
    System.out.println();
}
```

那如果方法的参数是一个数组，然后像使用可变参数那样去调用方法的时候，能行得通吗？

“三妹，给你留个思考题：一般什么时候使用可变参数呢？”

可变参数，可变参数，顾名思义，当一个方法需要处理任意多个相同类型的对象时，就可以定义可变参数。Java 中有一个很好的例子，就是 String 类的 `format()` 方法，就像下面这样。

```plain
System.out.println(String.format("年纪是: %d", 18));
System.out.println(String.format("年纪是: %d 名字是: %s", 18, ""));
```

`%d` 表示将整数格式化为 10 进制整数，`%s` 表示输出字符串。

如果不使用可变参数，那需要格式化的参数就必须使用“+”号操作符拼接起来了。麻烦也就惹上身了。

在实际的项目代码中，[slf4j](https://javabetter.cn/gongju/slf4j.html) 的日志输出就经常要用到可变参数（[log4j](https://javabetter.cn/gongju/log4j.html) 就没法使用可变参数，日志中需要记录多个参数时就痛苦不堪了）。就像下面这样。

```plain
protected Logger logger = LoggerFactory.getLogger(getClass());
logger.debug("名字是{}", mem.getName());
logger.debug("名字是{}，年纪是{}", mem.getName(), mem.getAge());
```

查看源码就可以发现，`debug()` 方法使用了可变参数。

```plain
public void debug(String format, Object... arguments);
```

“那在使用可变参数的时候有什么注意事项吗？”三妹问。

有的。我们要避免重载带有可变参数的方法——这样很容易让编译器陷入自我怀疑中。

```plain
public static void main(String[] args) {
    print(null);
}

public static void print(String... strs) {
    for (String a : strs)
        System.out.print(a);
    System.out.println();
}

public static void print(Integer... ints) {
    for (Integer i : ints)
        System.out.print(i);
    System.out.println();
}
```

这时候，编译器完全不知道该调用哪个 `print()` 方法，`print(String... strs)` 还是 `print(Integer... ints)`，傻傻分不清。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727246947869-bcad44b6-6cf4-4334-9fef-a618778ab0c2.png" />


假如真的需要重载带有可变参数的方法，就必须在调用方法的时候给出明确的指示，不要让编译器去猜。

```plain
public static void main(String[] args) {
    String [] strs = null;
    print(strs);

    Integer [] ints = null;
    print(ints);
}

public static void print(String... strs) {
}

public static void print(Integer... ints) {
}
```

上面这段代码是可以编译通过的。因为编译器知道参数是 String 类型还是 Integer 类型，只不过为了运行时不抛出 `NullPointerException`，两个 `print()` 方法的内部要做好判空操作。

## native 方法






## 构造方法

Java 有两种类型的构造方法：**无参构造方法和有参构造方法**。”

“注意，之所以叫它构造方法，是因为对象在创建的时候，需要通过构造方法初始化值——描写对象有哪些初始化状态。”

“哥，你缓缓，一口气说这么多，也真有你的。”三妹听得聚精会神，但也知道关心她这个既当哥又当老师的二哥了。

### 创建构造方法的规则

构造方法必须符合以下规则：

+ 构造方法的名字必须和类名一样；
+ 构造方法没有返回类型，包括 void；
+ 构造方法不能是抽象的（abstract）、静态的（static）、最终的（final）、同步的（synchronized）。

简单解析一下最后一条规则。

+ 由于构造方法不能被子类继承，所以用 final 和 abstract 关键字修饰没有意义；
+ 构造方法用于初始化一个对象，所以用 static 关键字修饰没有意义；
+ 多个线程不会同时创建内存地址相同的同一个对象，所以用 synchronized 关键字修饰没有必要。

构造方法的语法格式如下：

```plain
class class_name {
    public class_name(){}    // 默认无参构造方法
    public ciass_name([paramList]){}    // 定义有参数列表的构造方法
    …
    // 类主体
}
```

值得注意的是，如果用 void 声明构造方法的话，编译时不会报错，但 Java 会把这个所谓的“构造方法”当成普通方法来处理。

```plain
/**
 * 微信搜索「沉默王二」，回复 Java
 *
 * @author 沉默王二
 * @date 2020/11/26
 */
public class Demo {
    void Demo(){ }
}
```

`void Demo(){}` 看起来很符合构造方法的写法（与类名相同），但其实只是一个不符合规范的普通方法，方法名的首字母使用了大写，方法体为空，它并不是默认的无参构造方法，可以通过反编译后的字节码验证。

```plain
public class Demo {
    public Demo() {
    }

    void Demo() {
    }
}
```

`public Demo() {}` 才是真正的无参构造方法。

不过，可以使用[访问权限修饰符](https://javabetter.cn/oo/access-control.html)（private、protected、public、default）来修饰构造方法，访问权限修饰符决定了构造方法的创建方式。

### 默认构造方法

如果一个构造方法中没有任何参数，那么它就是一个默认构造方法，也称为无参构造方法。

```plain
/**
 * @author 
 */
public class Bike {
    Bike(){
        System.out.println("一辆自行车被创建");
    }

    public static void main(String[] args) {
        Bike bike = new Bike();
    }
}
```

在上面这个例子中，我们为 Bike 类中创建了一个无参的构造方法，它在我们创建对象的时候被调用。

程序输出结果如下所示：

```plain
一辆自行车被创建
```

通常情况下，无参构造方法是可以缺省的，我们开发者并不需要显式的声明无参构造方法，把这项工作交给编译器就可以了。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727253927668-460e6b6e-c86b-4c65-a85d-64e32c28eb64.png" />


“二哥，默认构造方法的目的是什么？它为什么是一个空的啊？”三妹疑惑地看着我，提出了这个尖锐的问题。

“三妹啊，默认构造方法的目的主要是为对象的字段提供默认值，看下面这个例子你就明白了。”我胸有成竹地回答道。

```plain
/**
 * @author 
 */
public class Person {
    private String name;
    private int age;

    public static void main(String[] args) {
        Person p = new Person();
        System.out.println("姓名 " + p.name + " 年龄 " + p.age);
    }
}
```

输出结果如下所示：

```plain
姓名 null 年龄 0
```

在上面的例子中，默认构造方法初始化了 name 和 age 的值，name 是 String 类型，所以默认值为 null，age 是 int 类型，所以默认值为 0。如果没有默认构造方法的话，这项工作就无法完成了。

### 有参构造方法

有参数的构造方法被称为有参构造方法，参数可以有一个或多个。有参构造方法可以为不同的对象提供不同的值。当然，也可以提供相同的值。

```plain
/**
 * @author 
 */
public class ParamConstructorPerson {
    private String name;
    private int age;

    public ParamConstructorPerson(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void out() {
        System.out.println("姓名 " + name + " 年龄 " + age);
    }

    public static void main(String[] args) {
        ParamConstructorPerson p1 = new ParamConstructorPerson("沉默王二",18);
        p1.out();

        ParamConstructorPerson p2 = new ParamConstructorPerson("沉默王三",16);
        p2.out();
    }
}
```

在上面的例子中，构造方法有两个参数（name 和 age），这样的话，我们在创建对象的时候就可以直接为 name 和 age 赋值了。

```plain
new ParamConstructorPerson("沉默王二",18);
new ParamConstructorPerson("沉默王三",16);
```

如果没有有参构造方法的话，就需要通过 setter 方法给字段赋值了。

### 重载构造方法

在 Java 中，构造方法和方法类似，只不过没有返回类型。它也可以像方法一样被[重载](https://javabetter.cn/basic-extra-meal/override-overload.html)。构造方法的重载也很简单，只需要提供不同的参数列表即可。编译器会通过参数的数量来决定应该调用哪一个构造方法。

```plain
/**
 * @author 
 */
public class OverloadingConstrutorPerson {
    private String name;
    private int age;
    private int sex;

    public OverloadingConstrutorPerson(String name, int age, int sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    public OverloadingConstrutorPerson(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void out() {
        System.out.println("姓名 " + name + " 年龄 " + age + " 性别 " + sex);
    }

    public static void main(String[] args) {
        OverloadingConstrutorPerson p1 = new OverloadingConstrutorPerson("沉默王二",18, 1);
        p1.out();

        OverloadingConstrutorPerson p2 = new OverloadingConstrutorPerson("沉默王三",16);
        p2.out();
    }
}
```

创建对象的时候，如果传递的是三个参数，那么就会调用 `OverloadingConstrutorPerson(String name, int age, int sex)` 这个构造方法；如果传递的是两个参数，那么就会调用 `OverloadingConstrutorPerson(String name, int age)` 这个构造方法。

### 构造方法和方法的区别

构造方法和方法之间的区别还是蛮多的，比如说下面这些：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727253927953-86e619c1-0b2f-43ec-b552-23b3f8582b4b.png" />


### 复制对象

复制一个对象可以通过下面三种方式完成：

+ 通过构造方法
+ 通过对象的值
+ 通过 Object 类的 `clone()` 方法

#### 通过构造方法

```plain
/**
 * @author 
 */
public class CopyConstrutorPerson {
    private String name;
    private int age;

    public CopyConstrutorPerson(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public CopyConstrutorPerson(CopyConstrutorPerson person) {
        this.name = person.name;
        this.age = person.age;
    }

    public void out() {
        System.out.println("姓名 " + name + " 年龄 " + age);
    }

    public static void main(String[] args) {
        CopyConstrutorPerson p1 = new CopyConstrutorPerson("沉默王二",18);
        p1.out();

        CopyConstrutorPerson p2 = new CopyConstrutorPerson(p1);
        p2.out();
    }
}
```

在上面的例子中，有一个参数为 CopyConstrutorPerson 的构造方法，可以把该参数的字段直接复制到新的对象中，这样的话，就可以在 new 关键字创建新对象的时候把之前的 p1 对象传递过去。

#### 通过对象的值

```plain
/**
 * @author 
 */
public class CopyValuePerson {
    private String name;
    private int age;

    public CopyValuePerson(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public CopyValuePerson() {
    }

    public void out() {
        System.out.println("姓名 " + name + " 年龄 " + age);
    }

    public static void main(String[] args) {
        CopyValuePerson p1 = new CopyValuePerson("沉默王二",18);
        p1.out();

        CopyValuePerson p2 = new CopyValuePerson();
        p2.name = p1.name;
        p2.age = p1.age;
        
        p2.out();
    }
}
```

这种方式比较粗暴，直接拿 p1 的字段值复制给 p2 对象（`p2.name = p1.name`）。

#### 通过 Object 类的clone()方法

```plain
/**
 * @author 
 */
public class ClonePerson implements Cloneable {
    private String name;
    private int age;

    public ClonePerson(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public void out() {
        System.out.println("姓名 " + name + " 年龄 " + age);
    }

    public static void main(String[] args) throws CloneNotSupportedException {
        ClonePerson p1 = new ClonePerson("沉默王二",18);
        p1.out();

        ClonePerson p2 = (ClonePerson) p1.clone();
        p2.out();
    }
}
```

通过 `clone()` 方法复制对象的时候，ClonePerson 必须先实现 Cloneable 接口的 `clone()` 方法，然后再调用 `clone()` 方法（`ClonePerson p2 = (ClonePerson) p1.clone()`）。

拓展阅读：[浅拷贝与深拷贝](https://javabetter.cn/basic-extra-meal/deep-copy.html)



## 访问权限修饰符

考虑两个场景：

场景 1：工程师 A 编写了一个类 ClassA，但是工程师 A 并不希望 ClassA 被其他类都访问到，该如何处理呢？

场景 2：工程师 A 编写了一个类 ClassA，其中有两个方法 fun1、fun2，工程师只想让 fun1 对外可见，也就是说，如果别的工程师来调用 ClassA，只可以调用方法 fun1，该怎么处理呢？

此时，访问权限控制便可以起到作用了。

在 Java 中，提供了四种访问权限控制：

+ 默认访问权限（包访问权限）
+ public
+ private
+ protected

类只可以用默认访问权限和 public 修饰。比如说：

```plain
public class Wanger{}
```

或者

```plain
class Wanger{}
```

但变量和方法则都可以修饰。

### 修饰类

+ 默认访问权限（包访问权限）：用来修饰类的话，表示该类只对同一个包中的其他类可见。
+ public：用来修饰类的话，表示该类对其他所有的类都可见。

例 1：

```plain
package com.tobetterjavaer.test1;

public class Main {
	public static void main(String\[\] args) {

		People people = new People("Tom");
		System.out.println(people.getName());
	}

}
```

```plain
package com.tobetterjavaer.test1;

class People {//默认访问权限（包访问权限）

	private String name = null;

	public People(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
```

从代码可以看出，修饰 People 类采用的是默认访问权限，而由于 People 类和 Main 类在同一个包中，因此 People 类对于 Main 类是可见的。

例子 2：

```plain
package com.tobetterjavaer.test2;

class People {//默认访问权限（包访问权限）

	private String name = null;

	public People(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
```

此时 People 类和 Main 类不在同一个包中，会发生什么情况呢？

下面是 Main 类中的提示的错误：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727253953208-f9548ce5-3bdd-4a5e-b905-3c33cee0f9fb.png" />


提示 Peolple 类在 Main 类中不可见。从这里就可以看出，如果用默认访问权限去修饰一个类，该类只对同一个包中的其他类可见，对于不同包中的类是不可见的。

正如上图的快速修正提示所示，将 People 类的默认访问权限更改为 public 的话，People 类对于 Main 类便可见了。

### 修饰方法和变量

+ 默认访问权限（包访问权限）：如果一个类的方法或变量被包访问权限修饰，也就意味着只能在同一个包中的其他类中显示地调用该类的方法或者变量，在不同包中的类中不能显式地调用该类的方法或变量。
+ private：如果一个类的方法或者变量被 private 修饰，那么这个类的方法或者变量只能在该类本身中被访问，在类外以及其他类中都不能显式的进行访问。
+ protected：如果一个类的方法或者变量被 protected 修饰，对于同一个包的类，这个类的方法或变量是可以被访问的。对于不同包的类，只有继承于该类的类才可以访问到该类的方法或者变量。
+ public：被 public 修饰的方法或者变量，在任何地方都是可见的。

例 3：

Main.java 没有变化

```plain
package com.tobebetterjavaer.test1;

public class People {

	private String name = null;

	public People(String name) {
		this.name = name;
	}

	String getName() {    //默认访问权限（包访问权限）
		return name;
	}

	void setName(String name) {   //默认访问权限（包访问权限）
		this.name = name;
	}
}
```

此时在 Main 类是可以显示调用方法 getName 和 setName 的。

但是如果 People 类和 Main 类不在同一个包中：

```plain
package com.tobebetterjavaer.test2;    //与Main类处于不同包中

public class People {

	private String name = null;

	public People(String name) {
		this.name = name;
	}

	String getName() {    //默认访问权限（包访问权限）
		return name;
	}

	void setName(String name) {   //默认访问权限（包访问权限）
		this.name = name;
	}
}
```

此时在 Main 类中会提示错误：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727253952389-07001306-5807-41f9-8115-f26a46c6f322.png" />


由此可以看出，如果用默认访问权限来修饰类的方法或者变量，则只能在同一个包的其他类中进行访问。

例 4:

People.java

```plain
package com.tobebetterjavaer.test1;

public class People {

	private String name = null;

	public People(String name) {
		this.name = name;
	}

	protected String getName() {
		return name;
	}

	protected void setName(String name) {
		this.name = name;
	}
}
```

此时是可以在 Main 中显示调用方法 getName 和 setName 的。

如果 People 类和 Main 类处于不同包中：

```plain
package com.tobebetterjavaer.test2;

public class People {

	private String name = null;

	public People(String name) {
		this.name = name;
	}

	protected String getName() {
		return name;
	}

	protected void setName(String name) {
		this.name = name;
	}
}
```

则会在 Main 中报错：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727253952472-4dc30227-d9b2-425f-a852-18754e9434f1.png" />


如果在 com.cxh.test1 中定一个类 Man 继承 People，则可以在类 Man 中显示调用方法 getName 和 setName：

```plain
package com.tobebetterjavaer.test1;

import com.tobebetterjavaer.test2.People;

public class Man extends People {

    public Man(String name){
        super(name);
    }

    public String toString() {
        return getName();
    }
}
```

补充一些关于 Java 包和类文件的知识：

1）Java 中的包主要是为了防止类文件命名冲突以及方便进行代码组织和管理；

2）对于一个 Java 源代码文件，如果存在 public 类的话，只能有一个 public 类，且此时源代码文件的名称必须和 public 类的名称完全相同。

另外，如果还存在其他类，这些类在包外是不可见的。如果源代码文件没有 public 类，则源代码文件的名称可以随意命名。

“三妹，理解了吧？”我问三妹。

“是的，很简单，换句话说，不想让别人看的就 private，想让人看的就 public，想同一个班级/部门看的就默认，想让下一级看的就 protected，对吧？哥”三妹很自信地回答。

“不错不错，总结得有那味了。”

原文链接：[https://www.cnblogs.com/dolphin0520/p/3734915.html](https://www.cnblogs.com/dolphin0520/p/3734915.html) 作者: Matrix海子，编辑：沉默王二



## 代码初始化块

来看下面的代码，我们可以直接通过 `=` 操作符对成员变量进行初始化。

```plain
class Bike{  
    int speed=100;  
}
```

“哥，那为什么还需要代码初始化块呢？”三妹眨了眨眼睛，不解地问。

“我们可以通过代码初始化块执行一个更复杂的操作，比如为集合填充值。来看下面这段代码。”

```plain
public class Bike {
    List<String> list;

    {
        list = new ArrayList<>();
        list.add("沉默王二");
        list.add("沉默王三");
    }

    public static void main(String[] args) {
        System.out.println(new Bike().list);
    }
}
```

“如果只使用‘=’操作符的话，是没办法完成集合初始化的，对吧？‘=’ 后面只能 new 出集合，却没办法填充值，代码初始化就可以完成这项工作。”

“[构造方法](https://javabetter.cn/oo/construct.html)执行得早还是代码初始化块啊，哥？”三妹这个问题问的还是挺有水平的。

“不要着急，三妹，先来看下面这个例子。”

```plain
public class Car {
    Car() {
        System.out.println("构造方法");
    }

    {
        System.out.println("代码初始化块");
    }

    public static void main(String[] args) {
        new Car();
    }
}
```

“我们来看一下程序的输出结果就一下子明白了。”

```plain
代码初始化块
构造方法
```

“从输出结果看上去，仿佛代码初始化块执行得更早，对吧？事实上是这样子吗？”我露出神秘的微笑，问三妹。

“难道我看到的是假象吗？”三妹睁大了眼睛。

“不是的，对象在初始化的时候会先调用构造方法，这是毫无疑问的，只不过，构造方法在执行的时候会把代码初始化块放在构造方法中其他代码之前，所以，先看到了‘代码初始化块’，后看到了‘’构造方法’。”

说完这句话，我打开 draw.io，使上了吃奶的劲，画出了下面这幅图。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254063830-b68859ce-719e-4f03-8b36-690b502ddee6.png" />


“哦，原来如此啊！”三妹仿佛发现了新大陆，意味深长地说，“编译器把代码初始化块放到了构造方法中，怪不得。”

等三妹明白彻底搞明白后，我对她继续说道：“对于代码初始化来说，它有三个规则。”

+ 类实例化的时候执行代码初始化块；
+ 实际上，代码初始化块是放在构造方法中执行的，只不过比较靠前；
+ 代码初始化块里的执行顺序是从前到后的。

“这些规则不用死记硬背，大致了解一下就行了。我们继续来看下面这段代码。”话音刚落，我就在新版的 IDEA 中噼里啪啦地敲了起来，新版真香。

```plain
class A {
    A () {
        System.out.println("父类构造方法");
    }
}
public class B extends A{
    B() {
        System.out.println("子类构造方法");
    }

    {
        System.out.println("代码初始化块");
    }

    public static void main(String[] args) {
        new B();
    }
}
```

“来看一下输出结果。”

```plain
父类构造方法
代码初始化块
子类构造方法
```

“在默认情况下，子类的构造方法在执行的时候会主动去调用父类的构造方法。也就是说，其实是构造方法先执行的，再执行的代码初始化块。”

“这个例子再次印证了之前的第二条规则：代码初始化块是放在构造方法中执行的，只不过比较靠前。”

除了这种实例化代码初始化块，还有静态初始化，不过我们会放到 [static 关键字](https://javabetter.cn/oo/static.html)中去讲，这里先大致了解一下。

下面是一个 Java 示例代码，演示实例初始化块和静态初始化块的用法：

```plain
public class Example {
    // 静态变量
    public static int staticVar = 1;
    // 实例变量
    public int instanceVar = 2;

    // 静态初始化块
    static {
        System.out.println("执行静态初始化块");
        staticVar = 3;
    }

    // 实例初始化块
    {
        System.out.println("执行实例初始化块");
        instanceVar = 4;
    }

    // 构造方法
    public Example() {
        System.out.println("执行构造方法");
    }

    public static void main(String[] args) {
        System.out.println("执行main方法");

        Example e1 = new Example();
        Example e2 = new Example();

        System.out.println("e1的静态变量：" + e1.staticVar);
        System.out.println("e1的实例变量：" + e1.instanceVar);
        System.out.println("e2的静态变量：" + e2.staticVar);
        System.out.println("e2的实例变量：" + e2.instanceVar);
    }
}
```

在这个示例代码中，有一个静态变量 staticVar 和一个实例变量 instanceVar，以及一个静态初始化块和一个实例初始化块。在静态初始化块中，我们打印了一条消息并修改了静态变量的值；在实例初始化块中，我们也打印了一条消息并修改了实例变量的值。

来看一下执行结果：

```plain
执行静态初始化块
执行main方法
执行实例初始化块
执行构造方法
执行实例初始化块
执行构造方法
e1的静态变量：3
e1的实例变量：4
e2的静态变量：3
e2的实例变量：4
```

从输出结果可以看出，静态初始化块在类加载时执行，只会执行一次，并且优先于实例初始化块和构造方法的执行；实例初始化块在每次创建对象时执行，在构造方法之前执行。

“好了，今天就先讲到这吧，中午休息一下，下午的精神会更足。”刚对三妹说完这句话，我的哈欠就上来了，好困。



## 抽象类

### 定义抽象类

定义抽象类的时候需要用到关键字 `abstract`，放在 `class` 关键字前，就像下面这样。

```plain
abstract class AbstractPlayer {
}
```

关于抽象类的命名，《[阿里的 Java 开发手册](https://javabetter.cn/pdf/ali-java-shouce.html)》上有强调，“抽象类命名要使用 Abstract 或 Base 开头”，这条规约还是值得遵守的，真正做到名如其意。

### 抽象类的特征

抽象类是不能实例化的，尝试通过 `new` 关键字实例化的话，编译器会报错，提示“类是抽象的，不能实例化”。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254124842-9c11b4a3-f9da-4a87-b459-16e83c5384e6.png" />


虽然抽象类不能实例化，但可以有子类。子类通过 `extends` 关键字来继承抽象类。就像下面这样。

```plain
public class BasketballPlayer extends AbstractPlayer {
}
```

如果一个类定义了一个或多个抽象方法，那么这个类必须是抽象类。

当我们尝试在一个普通类中定义抽象方法的时候，编译器会有两处错误提示。第一处在类级别上，提示“这个类必须通过 `abstract` 关键字定义”，见下图。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254125226-122d3d94-5063-44cb-9738-9813151dc2e4.png" />


第二处在尝试定义 abstract 的方法上，提示“抽象方法所在的类不是抽象的”，见下图。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254124578-4ebe0337-894b-4464-8a73-2b3ee3c7d448.png" />


抽象类中既可以定义抽象方法，也可以定义普通方法，就像下面这样：

```plain
public abstract class AbstractPlayer {
    abstract void play();
    
    public void sleep() {
        System.out.println("运动员也要休息而不是挑战极限");
    }
}
```

抽象类派生的子类必须实现父类中定义的抽象方法。比如说，抽象类 AbstractPlayer 中定义了 `play()` 方法，子类 BasketballPlayer 中就必须实现。

```plain
public class BasketballPlayer extends AbstractPlayer {
    @Override
    void play() {
        System.out.println("我是张伯伦，篮球场上得过 100 分");
    }
}
```

如果没有实现的话，编译器会提示“子类必须实现抽象方法”，见下图。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254124789-7c85e5eb-5a04-4962-a163-75f7c50cf9bc.png" />


### 抽象类的应用场景

#### 第一种场景

当我们希望一些通用的功能被多个子类复用的时候，就可以使用抽象类。比如说，AbstractPlayer 抽象类中有一个普通的方法 `sleep()`，表明所有运动员都需要休息，那么这个方法就可以被子类复用。

```plain
abstract class AbstractPlayer {
    public void sleep() {
        System.out.println("运动员也要休息而不是挑战极限");
    }
}
```

子类 BasketballPlayer 继承了 AbstractPlayer 类：

```plain
class BasketballPlayer extends AbstractPlayer {
}
```

也就拥有了 `sleep()` 方法。BasketballPlayer 的对象可以直接调用父类的 `sleep()` 方法：

```plain
BasketballPlayer basketballPlayer = new BasketballPlayer();
basketballPlayer.sleep();
```

子类 FootballPlayer 继承了 AbstractPlayer 类：

```plain
class FootballPlayer extends AbstractPlayer {
}
```

也拥有了 `sleep()` 方法，FootballPlayer 的对象也可以直接调用父类的 `sleep()` 方法：

```plain
FootballPlayer footballPlayer = new FootballPlayer();
footballPlayer.sleep();
```

这样是不是就实现了代码的复用呢？

#### 第二种场景

当我们需要在抽象类中定义好 API，然后在子类中扩展实现的时候就可以使用抽象类。比如说，AbstractPlayer 抽象类中定义了一个抽象方法 `play()`，表明所有运动员都可以从事某项运动，但需要对应子类去扩展实现，表明篮球运动员打篮球，足球运动员踢足球。

```plain
abstract class AbstractPlayer {
    abstract void play();
}
```

BasketballPlayer 继承了 AbstractPlayer 类，扩展实现了自己的 `play()` 方法。

```plain
public class BasketballPlayer extends AbstractPlayer {
    @Override
    void play() {
        System.out.println("我是张伯伦，我篮球场上得过 100 分，");
    }
}
```

FootballPlayer 继承了 AbstractPlayer 类，扩展实现了自己的 `play()` 方法。

```plain
public class FootballPlayer extends AbstractPlayer {
    @Override
    void play() {
        System.out.println("我是C罗，我能接住任意高度的头球");
    }
}
```

为了进一步展示抽象类的特性，我们再来看一个具体的示例。



假设现在有一个文件，里面的内容非常简单，只有一个“Hello World”，现在需要有一个读取器将内容从文件中读取出来，最好能按照大写的方式，或者小写的方式来读。

这时候，最好定义一个抽象类 BaseFileReader：

```plain
/**
 * 抽象类，定义了一个读取文件的基础框架，其中 mapFileLine 是一个抽象方法，具体实现需要由子类来完成
 */
abstract class BaseFileReader {
    protected Path filePath; // 定义一个 protected 的 Path 对象，表示读取的文件路径

    /**
     * 构造方法，传入读取的文件路径
     * @param filePath 读取的文件路径
     */
    protected BaseFileReader(Path filePath) {
        this.filePath = filePath;
    }

    /**
     * 读取文件的方法，返回一个字符串列表
     * @return 字符串列表，表示文件的内容
     * @throws IOException 如果文件读取出错，抛出该异常
     */
    public List<String> readFile() throws IOException {
        return Files.lines(filePath) // 使用 Files 类的 lines 方法，读取文件的每一行
                .map(this::mapFileLine) // 对每一行应用 mapFileLine 方法，将其转化为指定的格式
                .collect(Collectors.toList()); // 将处理后的每一行收集到一个字符串列表中，返回
    }

    /**
     * 抽象方法，子类需要实现该方法，将文件中的每一行转化为指定的格式
     * @param line 文件中的每一行
     * @return 转化后的字符串
     */
    protected abstract String mapFileLine(String line);
}
```

+ filePath 为文件路径，使用 protected 修饰，表明该成员变量可以在需要时被子类访问到。
+ `readFile()` 方法用来读取文件，方法体里面调用了抽象方法 `mapFileLine()`——需要子类来扩展实现大小写的不同读取方式。

在我看来，BaseFileReader 类设计的就非常合理，并且易于扩展，子类只需要专注于具体的大小写实现方式就可以了。

小写的方式：

```plain
class LowercaseFileReader extends BaseFileReader {
    protected LowercaseFileReader(Path filePath) {
        super(filePath);
    }

    @Override
    protected String mapFileLine(String line) {
        return line.toLowerCase();
    }
}
```

大写的方式：

```plain
class UppercaseFileReader extends BaseFileReader {
    protected UppercaseFileReader(Path filePath) {
        super(filePath);
    }

    @Override
    protected String mapFileLine(String line) {
        return line.toUpperCase();
    }
}
```

从文件里面一行一行读取内容的代码被子类复用了。与此同时，子类只需要专注于自己该做的工作，LowercaseFileReader 以小写的方式读取文件内容，UppercaseFileReader 以大写的方式读取文件内容。

来看一下测试类 FileReaderTest：

```plain
public class FileReaderTest {
    public static void main(String[] args) throws URISyntaxException, IOException {
        URL location = FileReaderTest.class.getClassLoader().getResource("helloworld.txt");
        Path path = Paths.get(location.toURI());
        BaseFileReader lowercaseFileReader = new LowercaseFileReader(path);
        BaseFileReader uppercaseFileReader = new UppercaseFileReader(path);
        System.out.println(lowercaseFileReader.readFile());
        System.out.println(uppercaseFileReader.readFile());
    }
}
```

在项目的 resource 目录下建一个文本文件，名字叫 helloworld.txt，里面的内容就是“Hello World”。文件的具体位置如下图所示，我用的集成开发环境是 Intellij IDEA。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254124739-2ffb65d2-3625-421f-89b8-0f212026c832.png" />


在 resource 目录下的文件可以通过 `ClassLoader.getResource()` 的方式获取到 URI 路径，然后就可以取到文本内容了。

输出结果如下所示：

```plain
[hello world]
[HELLO WORLD]
```

### 抽象类总结

好了，对于抽象类我们简单总结一下：

+ 1、抽象类不能被实例化。
+ 2、抽象类应该至少有一个抽象方法，否则它没有任何意义。
+ 3、抽象类中的抽象方法没有方法体。
+ 4、抽象类的子类必须给出父类中的抽象方法的具体实现，除非该子类也是抽象类。

## 接口

官方解释：**Java接口是一系列方法的声明，是一些方法特征的集合**，一个接口只有方法的特征没有方法的实现，因此这些方法可以在不同的地方被不同的类实现，而这些实现可以具有不同的行为（功能）。

    我的解释：接口可以理解为一种特殊的类，里面全部是由全局常量和公共的抽象方法所组成。接口是解决Java无法使用多继承的一种手段，但是接口在实际中更多的作用是制定标准的。或者我们可以直接把接口理解为100%的抽象类，既接口中的方法必须全部是抽象方法。（JDK1.8之前可以这样理解）

### 定义接口

“接口是什么呀？”三妹顺着我的话题及时的插话到。

接口通过 interface 关键字来定义，它可以包含一些常量和方法，来看下面这个示例。

```plain
public interface Electronic {
    // 常量
    String LED = "LED";

    // 抽象方法
    int getElectricityUse();

    // 静态方法
    static boolean isEnergyEfficient(String electtronicType) {
        return electtronicType.equals(LED);
    }

    // 默认方法
    default void printDescription() {
        System.out.println("电子");
    }
}
```

来看一下这段代码反编译后的字节码。

```plain
public interface Electronic
{

    public abstract int getElectricityUse();

    public static boolean isEnergyEfficient(String electtronicType)
    {
        return electtronicType.equals("LED");
    }

    public void printDescription()
    {
        System.out.println("\u7535\u5B50");
    }

    public static final String LED = "LED";
}
```

发现没？接口中定义的所有变量或者方法，都会自动添加上 `public` 关键字。

接下来，我来一一解释下 Electronic 接口中的核心知识点。

**1）接口中定义的变量会在编译的时候自动加上**** **`**public static final**`** ****修饰符**（注意看一下反编译后的字节码），也就是说上例中的 LED 变量其实就是一个常量。

Java 官方文档上有这样的声明：

> Every field declaration in the body of an interface is implicitly public, static, and final.

换句话说，接口可以用来作为常量类使用，还能省略掉 `public static final`，看似不错的一种选择，对吧？

不过，这种选择并不可取。因为接口的本意是对方法进行抽象，而常量接口会对子类中的变量造成命名空间上的“污染”。

**2）没有使用**** **`**private**`**、**`**default**`** ****或者**** **`**static**`** ****关键字修饰的方法是隐式抽象的**，在编译的时候会自动加上 `public abstract` 修饰符。也就是说上例中的 `getElectricityUse()` 其实是一个抽象方法，没有方法体——这是定义接口的本意。

**3）从 Java 8 开始，接口中允许有静态方法**，比如说上例中的 `isEnergyEfficient()` 方法。

静态方法无法由（实现了该接口的）类的对象调用，它只能通过接口名来调用，比如说 `Electronic.isEnergyEfficient("LED")`。

接口中定义静态方法的目的是为了提供一种简单的机制，使我们不必创建对象就能调用方法，从而提高接口的竞争力。

**4）接口中允许定义 **`**default**`** 方法，**也是从 Java 8 开始的，比如说上例中的 `printDescription()` 方法，它始终由一个代码块组成，为实现该接口而不覆盖该方法的类提供默认实现。既然要提供默认实现，就要有方法体，换句话说，默认方法后面不能直接使用“;”号来结束——编译器会报错。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254152948-6dec0e54-90a9-4025-8379-47e8a175dbaa.png" />


“为什么要在接口中定义默认方法呢？”三妹好奇地问到。

允许在接口中定义默认方法的理由很充分，因为一个接口可能有多个实现类，这些类就必须实现接口中定义的抽象类，否则编译器就会报错。假如我们需要在所有的实现类中追加某个具体的方法，在没有 `default` 方法的帮助下，我们就必须挨个对实现类进行修改。

由之前的例子我们就可以得出下面这些结论：

+ 接口中允许定义变量
+ 接口中允许定义抽象方法
+ 接口中允许定义静态方法（Java 8 之后）
+ 接口中允许定义默认方法（Java 8 之后）

除此之外，我们还应该知道：

**1）接口不允许直接实例化**，否则编译器会报错。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254152953-a73d9190-93b9-471c-96b1-e68948d14e6c.png" />


需要定义一个类去实现接口，见下例。

```plain
public class Computer implements Electronic {

    public static void main(String[] args) {
        new Computer();
    }

    @Override
    public int getElectricityUse() {
        return 0;
    }
}
```

然后再实例化。

```plain
Electronic e = new Computer();
```

**2）接口可以是空的**，既可以不定义变量，也可以不定义方法。最典型的例子就是 Serializable 接口，在 `java.io` 包下。

```plain
public interface Serializable {
}
```

Serializable 接口用来为序列化的具体实现提供一个标记，也就是说，只要某个类实现了 Serializable 接口，那么它就可以用来序列化了。

**3）不要在定义接口的时候使用 final 关键字**，否则会报编译错误，因为接口就是为了让子类实现的，而 final 阻止了这种行为。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254152910-1e4cf2ee-124a-412e-8824-093c26ea544c.png" />


**4）接口的抽象方法不能是 private、protected 或者 final**，否则编译器都会报错。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254154418-0338d511-d998-4672-b037-6bb82a46272d.png" />


**5）接口的变量是隐式**** **`**public static final**`**（常量）**，所以其值无法改变。

### 接口的作用

“接口可以做什么呢？”三妹见缝插针，问的很及时。

**第一，使某些实现类具有我们想要的功能**，比如说，实现了 Cloneable 接口的类具有拷贝的功能，实现了 Comparable 或者 Comparator 的类具有比较功能。

Cloneable 和 Serializable 一样，都属于标记型接口，它们内部都是空的。实现了 Cloneable 接口的类可以使用 `Object.clone()` 方法，否则会抛出 CloneNotSupportedException。

```plain
public class CloneableTest implements Cloneable {
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public static void main(String[] args) throws CloneNotSupportedException {
        CloneableTest c1 = new CloneableTest();
        CloneableTest c2 = (CloneableTest) c1.clone();
    }
}
```

运行后没有报错。现在把 `implements Cloneable` 去掉。

```plain
public class CloneableTest {
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public static void main(String[] args) throws CloneNotSupportedException {
        CloneableTest c1 = new CloneableTest();
        CloneableTest c2 = (CloneableTest) c1.clone();

    }
}
```

运行后抛出 CloneNotSupportedException：

```plain
Exception in thread "main" java.lang.CloneNotSupportedException: com.cmower.baeldung.interface1.CloneableTest
	at java.base/java.lang.Object.clone(Native Method)
	at com.cmower.baeldung.interface1.CloneableTest.clone(CloneableTest.java:6)
	at com.cmower.baeldung.interface1.CloneableTest.main(CloneableTest.java:11)
```

**第二，Java 原则上只支持单一继承，但通过接口可以实现多重继承的目的**。

如果有两个类共同继承（extends）一个父类，那么父类的方法就会被两个子类重写。然后，如果有一个新类同时继承了这两个子类，那么在调用重写方法的时候，编译器就不能识别要调用哪个类的方法了。这也正是著名的菱形问题，见下图。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254154680-f1466979-93e0-4adc-a423-5cbd6c412a4e.png" />


简单解释下，ClassC 同时继承了 ClassA 和 ClassB，ClassC 的对象在调用 ClassA 和 ClassB 中重写的方法时，就不知道该调用 ClassA 的方法，还是 ClassB 的方法。

接口没有这方面的困扰。来定义两个接口，Fly 接口会飞，Run 接口会跑。

```plain
public interface Fly {
    void fly();
}
public interface Run {
    void run();
}
```

然后让 Pig 类同时实现这两个接口。

```plain
public class Pig implements Fly,Run{
    @Override
    public void fly() {
        System.out.println("会飞的猪");
    }

    @Override
    public void run() {
        System.out.println("会跑的猪");
    }
}
```

在某种形式上，接口实现了多重继承的目的：现实世界里，猪的确只会跑，但在雷军的眼里，站在风口的猪就会飞，这就需要赋予这只猪更多的能力，通过抽象类是无法实现的，只能通过接口。

**第三，实现多态**。

什么是多态呢？通俗的理解，就是同一个事件发生在不同的对象上会产生不同的结果，鼠标左键点击窗口上的 X 号可以关闭窗口，点击超链接却可以打开新的网页。

多态可以通过继承（`extends`）的关系实现，也可以通过接口的形式实现。

Shape 接口表示一个形状。

```plain
public interface Shape {
    String name();
}
```

Circle 类实现了 Shape 接口，并重写了 `name()` 方法。

```plain
public class Circle implements Shape {
    @Override
    public String name() {
        return "圆";
    }
}
```

Square 类也实现了 Shape 接口，并重写了 `name()` 方法。

```plain
public class Square implements Shape {
    @Override
    public String name() {
        return "正方形";
    }
}
```

然后来看测试类。

```plain
List<Shape> shapes = new ArrayList<>();
Shape circleShape = new Circle();
Shape squareShape = new Square();

shapes.add(circleShape);
shapes.add(squareShape);

for (Shape shape : shapes) {
    System.out.println(shape.name());
}
```

这就实现了多态，变量 circleShape、squareShape 的引用类型都是 Shape，但执行 `shape.name()` 方法的时候，Java 虚拟机知道该去调用 Circle 的 `name()` 方法还是 Square 的 `name()` 方法。

说一下多态存在的 3 个前提：

+ 1、要有继承关系，比如说 Circle 和 Square 都实现了 Shape 接口。
+ 2、子类要重写父类的方法，Circle 和 Square 都重写了 `name()` 方法。
+ 3、父类引用指向子类对象，circleShape 和 squareShape 的类型都为 Shape，但前者指向的是 Circle 对象，后者指向的是 Square 对象。

然后，我们来看一下测试结果：

```plain
圆
正方形
```

也就意味着，尽管在 for 循环中，shape 的类型都为 Shape，但在调用 `name()` 方法的时候，它知道 Circle 对象应该调用 Circle 类的 `name()` 方法，Square 对象应该调用 Square 类的 `name()` 方法。

### 接口的三种模式

**在编程领域，好的设计模式能够让我们的代码事半功倍**。在使用接口的时候，经常会用到三种模式，分别是策略模式、适配器模式和工厂模式。

#### 策略模式

策略模式的思想是，针对一组算法，将每一种算法封装到具有共同接口的实现类中，接口的设计者可以在不影响调用者的情况下对算法做出改变。示例如下：

```plain
// 接口：教练
interface Coach {
    // 方法：防守
    void defend();
}

// 何塞·穆里尼奥
class Hesai implements Coach {

    @Override
    public void defend() {
        System.out.println("防守赢得冠军");
    }
}

// 德普·瓜迪奥拉
class Guatu implements Coach {

    @Override
    public void defend() {
        System.out.println("进攻就是最好的防守");
    }
}

public class Demo {
    // 参数为接口
    public static void defend(Coach coach) {
        coach.defend();
    }
    
    public static void main(String[] args) {
        // 为同一个方法传递不同的对象
        defend(new Hesai());
        defend(new Guatu());
    }
}
```

`Demo.defend()` 方法可以接受不同风格的 Coach，并根据所传递的参数对象的不同而产生不同的行为，这被称为“策略模式”。

#### 适配器模式

适配器模式的思想是，针对调用者的需求对原有的接口进行转接。生活当中最常见的适配器就是HDMI（英语：`High Definition Multimedia Interface`，中文：高清多媒体接口）线，可以同时发送音频和视频信号。适配器模式的示例如下：

```plain
interface Coach {
    void defend();
    void attack();
}

// 抽象类实现接口，并置空方法
abstract class AdapterCoach implements Coach {
    public void defend() {};
    public void attack() {};
}

// 新类继承适配器
class Hesai extends AdapterCoach {
    public void defend() {
        System.out.println("防守赢得冠军");
    }
}

public class Demo {
    public static void main(String[] args) {
        Coach coach = new Hesai();
        coach.defend();
    }
}
```

Coach 接口中定义了两个方法（`defend()` 和 `attack()`），如果类直接实现该接口的话，就需要对两个方法进行实现。

如果我们只需要对其中一个方法进行实现的话，就可以使用一个抽象类作为中间件，即适配器（AdapterCoach），用这个抽象类实现接口，并对抽象类中的方法置空（方法体只有一对花括号），这时候，新类就可以绕过接口，继承抽象类，我们就可以只对需要的方法进行覆盖，而不是接口中的所有方法。

#### 工厂模式

所谓的工厂模式理解起来也不难，就是什么工厂生产什么，比如说宝马工厂生产宝马，奔驰工厂生产奔驰，A 级学院毕业 A 级教练，C 级学院毕业 C 级教练。示例如下：

```plain
// 教练
interface Coach {
    void command();
}

// 教练学院
interface CoachFactory {
    Coach createCoach();
}

// A级教练
class ACoach implements Coach {

    @Override
    public void command() {
        System.out.println("我是A级证书教练");
    }
    
}

// A级教练学院
class ACoachFactory implements CoachFactory {

    @Override
    public Coach createCoach() {
        return new ACoach();
    }
    
}

// C级教练
class CCoach implements Coach {

    @Override
    public void command() {
        System.out.println("我是C级证书教练");
    }
    
}

// C级教练学院
class CCoachFactory implements CoachFactory {

    @Override
    public Coach createCoach() {
        return new CCoach();
    }
    
}

public class Demo {
    public static void create(CoachFactory factory) {
        factory.createCoach().command();
    }
    
    public static void main(String[] args) {
        // 对于一支球队来说，需要什么样的教练就去找什么样的学院
        // 学院会介绍球队对应水平的教练。
        create(new ACoachFactory());
        create(new CCoachFactory());
    }
}
```

有两个接口，一个是 Coach（教练），可以 `command()`（指挥球队）；另外一个是 CoachFactory（教练学院），能 `createCoach()`（教出一名优秀的教练）。然后 ACoach 类实现 Coach 接口，ACoachFactory 类实现 CoachFactory 接口；CCoach 类实现 Coach 接口，CCoachFactory 类实现 CoachFactory 接口。当需要 A 级教练时，就去找 A 级教练学院；当需要 C 级教练时，就去找 C 级教练学院。

依次类推，我们还可以用 BCoach 类实现 Coach 接口，BCoachFactory 类实现 CoachFactory 接口，从而不断地丰富教练的梯队。

### 抽象类和接口的区别

简单总结一下抽象类和接口的区别。

在 Java 中，通过关键字 `abstract` 定义的类叫做抽象类。Java 是一门面向对象的语言，因此所有的对象都是通过类来描述的；但反过来，并不是所有的类都是用来描述对象的，抽象类就是其中的一种。

以下示例展示了一个简单的抽象类：

```plain
// 个人认为，一名教练必须攻守兼备
abstract class Coach {
	public abstract void defend();

	public abstract void attack();
}
```

我们知道，有抽象方法的类被称为抽象类，也就意味着抽象类中还能有不是抽象方法的方法。这样的类就不能算作纯粹的接口，尽管它也可以提供接口的功能——只能说抽象类是普通类与接口之间的一种中庸之道。

**接口（英文：Interface），在 Java 中是一个抽象类型，是抽象方法的集合**；接口通过关键字 `interface` 来定义。接口与抽象类的不同之处在于：

+ 1、抽象类可以有方法体的方法，但接口没有（Java 8 以前）。
+ 2、接口中的成员变量隐式为 `static final`，但抽象类不是的。
+ 3、一个类可以实现多个接口，但只能继承一个抽象类。

以下示例展示了一个简单的接口：

```plain
// 隐式的abstract
interface Coach {
	// 隐式的public
	void defend();
	void attack();
}
```

+ 接口是隐式抽象的，所以声明时没有必要使用 `abstract` 关键字；
+ 接口的每个方法都是隐式抽象的，所以同样不需要使用 `abstract` 关键字；
+ 接口中的方法都是隐式 `public` 的。

#### 语法层面上

+ 抽象类可以包含具体方法的实现；而在接口中，方法默认是 public abstract 的，但从 Java 8 开始，接口也可以包含有实现的默认方法和静态方法。
+ 抽象类中的成员变量可以是各种类型的，而接口中的成员变量只能是 public static final 类型的；
+ 接口中不能含有静态代码块，而抽象类可以有静态代码块；
+ 一个类只能继承一个抽象类，而一个类却可以实现多个接口。

#### 设计层面上

抽象类是对一种事物的抽象，即对类抽象，继承抽象类的子类和抽象类本身是一种 `is-a` 的关系。而接口是对行为的抽象。抽象类是对整个类整体进行抽象，包括属性、行为，但是接口却是对类局部（行为）进行抽象。

举个简单的例子，飞机和鸟是不同类的事物，但是它们都有一个共性，就是都会飞。那么在设计的时候，可以将飞机设计为一个类 Airplane，将鸟设计为一个类 Bird，但是不能将 飞行 这个特性也设计为类，因此它只是一个行为特性，并不是对一类事物的抽象描述。

此时可以将 飞行 设计为一个接口 Fly，包含方法 fly()，然后 Airplane 和 Bird 分别根据自己的需要实现 Fly 这个接口。然后至于有不同种类的飞机，比如战斗机、民用飞机等直接继承 Airplane 即可，对于鸟也是类似的，不同种类的鸟直接继承 Bird 类即可。从这里可以看出，继承是一个 "是不是"的关系，而 接口 实现则是 "有没有"的关系。如果一个类继承了某个抽象类，则子类必定是抽象类的种类，而接口实现则是有没有、具备不具备的关系，比如鸟是否能飞（或者是否具备飞行这个特点），能飞行则可以实现这个接口，不能飞行就不实现这个接口。

接口是对类的某种行为的一种抽象，接口和类之间并没有很强的关联关系，举个例子来说，所有的类都可以实现 [Serializable接口](https://javabetter.cn/io/Serializbale.html)，从而具有序列化的功能，但不能说所有的类和 Serializable 之间是 `is-a` 的关系。

抽象类作为很多子类的父类，它是一种模板式设计。而接口是一种行为规范，它是一种辐射式设计。什么是模板式设计？最简单例子，大家都用过 ppt 里面的模板，如果用模板 A 设计了 ppt B 和 ppt C，ppt B 和 ppt C 公共的部分就是模板 A 了，如果它们的公共部分需要改动，则只需要改动模板 A 就可以了，不需要重新对 ppt B 和 ppt C 进行改动。而辐射式设计，比如某个电梯都装了某种报警器，一旦要更新报警器，就必须全部更新。也就是说对于抽象类，如果需要添加新的方法，可以直接在抽象类中添加具体的实现，子类可以不进行变更；而对于接口则不行，如果接口进行了变更，则所有实现这个接口的类都必须进行相应的改动。

## 内部类

“在 Java 中，可以将一个类定义在另外一个类里面或者一个方法里面，这样的类叫做内部类。”我放下手中的枸杞杯，对三妹说，“一般来说，内部类分为成员内部类、局部内部类、匿名内部类和静态内部类。”

### 成员内部类

成员内部类是最常见的内部类，看下面的代码：

```plain
class Wanger {
    int age = 18;
    
    class Wangxiaoer {
        int age = 81;
    }
}
```

看起来内部类 Wangxiaoer 就好像 Wanger 的一个成员，成员内部类可以无限制访问外部类的所有成员属性。

```plain
public class Wanger {
    int age = 18;
    private String name = "沉默王二";
    static double money = 1;

    class Wangxiaoer {
        int age = 81;
        
        public void print() {
            System.out.println(name);
            System.out.println(money);
        }
    }
}
```

内部类可以随心所欲地访问外部类的成员，但外部类想要访问内部类的成员，就不那么容易了，必须先创建一个成员内部类的对象，再通过这个对象来访问：

```plain
public class Wanger {
    int age = 18;
    private String name = "沉默王二";
    static double money = 1;

    public Wanger () {
        new Wangxiaoer().print();
    }

    class Wangxiaoer {
        int age = 81;

        public void print() {
            System.out.println(name);
            System.out.println(money);
        }
    }
}
```

这也就意味着，如果想要在静态方法中访问成员内部类的时候，就必须先得创建一个外部类的对象，因为内部类是依附于外部类的。

```plain
public class Wanger {
    int age = 18;
    private String name = "沉默王二";
    static double money = 1;

    public Wanger () {
        new Wangxiaoer().print();
    }

    public static void main(String[] args) {
        Wanger wanger = new Wanger();
        Wangxiaoer xiaoer = wanger.new Wangxiaoer();
        xiaoer.print();
    }

    class Wangxiaoer {
        int age = 81;

        public void print() {
            System.out.println(name);
            System.out.println(money);
        }
    }
}
```

这种创建内部类的方式在实际开发中并不常用，因为内部类和外部类紧紧地绑定在一起，使用起来非常不便。



关于成员内部类的继承问题。一般来说，内部类是很少用来作为继承用的。但是当用来继承的话，要注意两点：

1）成员内部类的引用方式必须为 Outter.Inner.

2）构造器中必须有指向外部类对象的引用，并通过这个引用调用super()。这段代码摘自《Java编程思想》

```plain
class WithInner {
    class Inner{
         
    }
}
class InheritInner extends WithInner.Inner {
      
    // InheritInner() 是不能通过编译的，一定要加上形参
    InheritInner(WithInner wi) {
        wi.super(); //必须有这句调用
    }
  
    public static void main(String[] args) {
        WithInner wi = new WithInner();
        InheritInner obj = new InheritInner(wi);
    }
}
```

### 局部内部类

局部内部类是定义在一个方法或者一个作用域里面的类，所以局部内部类的生命周期仅限于作用域内。

```plain
public class Wangsan {
    public Wangsan print() {
        class Wangxiaosan extends Wangsan{
            private int age = 18;
        }
        return new Wangxiaosan();
    }
}
```

局部内部类就好像一个局部变量一样，它是不能被权限修饰符修饰的，比如说 public、protected、private 和 static 等。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254177130-697f1ef1-268d-4cdf-88ed-33fdb52945aa.png" />


### 匿名内部类

匿名内部类是我们平常用得最多的，尤其是启动多线程的时候，会经常用到，并且 IDE 也会帮我们自动生成。

```plain
public class ThreadDemo {
    public static void main(String[] args) {
        Thread t = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName());
            }
        });
        t.start();
    }
}
```

匿名内部类就好像一个方法的参数一样，用完就没了，以至于我们都不需要为它专门写一个构造方法，它的名字也是由系统自动命名的。仔细观察编译后的字节码文件也可以发现，匿名内部类连名字都不配拥有，哈哈，直接借用的外部类，然后 `$1` 就搞定了。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254177460-5ecbe07f-5929-43f2-837b-fbdb749e417d.png" />


匿名内部类是唯一一种没有构造方法的类。就上面的写法来说，匿名内部类也不允许我们为其编写构造方法，因为它就像是直接通过 new 关键字创建出来的一个对象。

匿名内部类的作用主要是用来继承其他类或者实现接口，并不需要增加额外的方法，方便对继承的方法进行实现或者重写。

### 静态内部类

静态内部类和成员内部类类似，只是多了一个 [static 关键字](https://javabetter.cn/oo/static.html)。

```plain
public class Wangsi {
    static int age;
    double money;
    
    static class Wangxxiaosi {
        public Wangxxiaosi (){
            System.out.println(age);
        }
    }
}
```

由于 static 关键字的存在，静态内部类是不允许访问外部类中非 static 的变量和方法的，这一点也非常好理解：你一个静态的内部类访问我非静态的成员变量干嘛？


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254177366-1c644780-7431-4310-9266-e09bd5c32095.png" />


“为什么要使用内部类呢？”三妹问。

三妹这个问题问的非常妙，是时候引经据典了。

在《Think in java》中有这样一句话：

> 使用内部类最吸引人的原因是：每个内部类都能独立地继承一个（接口的）实现，所以无论外围类是否已经继承了某个（接口的）实现，对于内部类都没有影响。

在我们程序设计中有时候会存在一些使用接口很难解决的问题，这个时候我们可以利用内部类提供的、可以继承多个具体的或者抽象的类的能力来解决这些程序设计问题。可以这样说，接口只是解决了部分问题，而内部类使得多重继承的解决方案变得更加完整。

使用内部类还能够为我们带来如下特性：

+ 1、内部类可以使用多个实例，每个实例都有自己的状态信息，并且与其他外围对象的信息相互独立。
+ 2、在单个外部类中，可以让多个内部类以不同的方式实现同一个接口，或者继承同一个类。
+ 3、创建内部类对象的时刻并不依赖于外部类对象的创建。
+ 4、内部类并没有令人迷惑的“is-a”关系，他就是一个独立的实体。
+ 5、内部类提供了更好的封装，除了该外围类，其他类都不能访问。

参考链接：[https://www.cnblogs.com/dolphin0520/p/3811445.html](https://www.cnblogs.com/dolphin0520/p/3811445.html)，作者：Matrix海 子，编辑：沉默王二

## 封装继承多态

在谈 Java 面向对象的时候，不得不提到面向对象的三大特征：[封装](https://javabetter.cn/oo/encapsulation.html)、[继承](https://javabetter.cn/oo/extends-bigsai.html)、[多态](https://javabetter.cn/oo/polymorphism.html)。三大特征紧密联系而又有区别，合理使用继承能大大减少重复代码，**提高代码复用性。**

### 封装

封装从字面上来理解就是包装的意思，专业点就是信息隐藏，**是指利用抽象将数据和基于数据的操作封装在一起，使其构成一个不可分割的独立实体**。

数据被保护在类的内部，尽可能地隐藏内部的实现细节，只保留一些对外接口使之与外部发生联系。

其他对象只能通过已经授权的操作来与这个封装的对象进行交互。也就是说用户是无需知道对象内部的细节（当然也无从知道），但可以通过该对象对外的提供的接口来访问该对象。

使用封装有 4 大好处：

+ 1、良好的封装能够减少耦合。
+ 2、类内部的结构可以自由修改。
+ 3、可以对成员进行更精确的控制。
+ 4、隐藏信息，实现细节。

首先我们先来看两个类。

```plain
public class Husband {

    /*
     * 对属性的封装
     * 一个人的姓名、性别、年龄、妻子都是这个人的私有属性
     */
    private String name ;
    private String sex ;
    private int age ;
    private Wife wife;

    /*
     * setter()、getter()是该对象对外开发的接口
     */
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setWife(Wife wife) {
        this.wife = wife;
    }
}
```



```plain
public class Wife {
    private String name;
    private int age;
    private String sex;
    private Husband husband;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setHusband(Husband husband) {
        this.husband = husband;
    }

    public Husband getHusband() {
        return husband;
    }

}
```

可以看得出， Husband 类里面的 wife 属性是没有 `getter()`的，同时 Wife 类的 age 属性也是没有 `getter()`方法的。至于理由我想三妹你是懂的。

没有哪个女人愿意别人知道她的年龄。

所以封装把一个对象的属性私有化，同时提供一些可以被外界访问的属性的方法，如果不想被外界方法，我们大可不必提供方法给外界访问。

但是如果一个类没有提供给外界任何可以访问的方法，那么这个类也没有什么意义了。

比如我们将一个房子看做是一个对象，里面有漂亮的装饰，如沙发、电视剧、空调、茶桌等等都是该房子的私有属性，但是如果我们没有那些墙遮挡，是不是别人就会一览无余呢？没有一点儿隐私！

因为存在那个遮挡的墙，我们既能够有自己的隐私而且我们可以随意的更改里面的摆设而不会影响到外面的人。

但是如果没有门窗，一个包裹的严严实实的黑盒子，又有什么存在的意义呢？所以通过门窗别人也能够看到里面的风景。所以说门窗就是房子对象留给外界访问的接口。

通过这个我们还不能真正体会封装的好处。现在我们从程序的角度来分析封装带来的好处。如果我们不使用封装，那么该对象就没有 `setter()`和 `getter()`，那么 Husband 类应该这样写：

```plain
public class Husband {
    public String name ;
    public String sex ;
    public int age ;
    public Wife wife;
}
```

我们应该这样来使用它：

```plain
Husband husband = new Husband();
husband.age = 30;
husband.name = "张三";
husband.sex = "男";    //貌似有点儿多余
```

但是哪天如果我们需要修改 Husband，例如将 age 修改为 String 类型的呢？你只有一处使用了这个类还好，如果你有几十个甚至上百个这样地方，你是不是要改到崩溃。如果使用了封装，我们完全可以不需要做任何修改，只需要稍微改变下 Husband 类的 `setAge()`方法即可。

```plain
public class Husband {

    /*
     * 对属性的封装
     * 一个人的姓名、性别、年龄、妻子都是这个人的私有属性
     */
    private String name ;
    private String sex ;
    private String age ;    /* 改成 String类型的*/
    private Wife wife;

    public String getAge() {
        return age;
    }

    public void setAge(int age) {
        //转换即可
        this.age = String.valueOf(age);
    }

    /** 省略其他属性的setter、getter **/

}
```

其他的地方依然这样引用( `husband.setAge(22)` )保持不变。

到了这里我们确实可以看出，**封装确实可以使我们更容易地修改类的内部实现，而无需修改使用了该类的代码**。

我们再看这个好处：**封装可以对成员变量进行更精确的控制**。

还是那个 Husband，一般来说我们在引用这个对象的时候是不容易出错的，但是有时你迷糊了，写成了这样：

```plain
Husband husband = new Husband();
husband.age = 300;
```

也许你是因为粗心写成了这样，你发现了还好，如果没有发现那就麻烦大了，谁见过 300 岁的老妖怪啊！

但是使用封装我们就可以避免这个问题，我们对 age 的访问入口做一些控制(setter)如：

```plain
public class Husband {

    /*
     * 对属性的封装
     * 一个人的姓名、性别、年龄、妻子都是这个人的私有属性
     */
    private String name ;
    private String sex ;
    private int age ;    /* 改成 String类型的*/
    private Wife wife;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if(age > 120){
            System.out.println("ERROR：error age input....");    //提示錯誤信息
        }else{
            this.age = age;
        }

    }

    /** 省略其他属性的setter、getter **/

}
```

上面都是对 setter 方法的控制，其实通过封装我们也能够对对象的出口做出很好的控制。例如性别在数据库中一般都是以 1、0 的方式来存储的，但是在前台我们又不能展示 1、0，这里我们只需要在 `getter()`方法里面做一些转换即可。

```plain
public String getSexName() {
    if("0".equals(sex)){
        sexName = "女";
    }
    else if("1".equals(sex)){
        sexName = "男";
    }
    return sexName;
}
```

在使用的时候我们只需要使用 sexName 即可实现正确的性别显示。同理也可以用于针对不同的状态做出不同的操作。

```plain
public String getCzHTML(){
    if("1".equals(zt)){
        czHTML = "<a href='javascript:void(0)' onclick='qy("+id+")'>启用</a>";
    }
    else{
        czHTML = "<a href='javascript:void(0)' onclick='jy("+id+")'>禁用</a>";
    }
    return czHTML;
}
```

“好了，关于封装我们就暂时就聊这么多吧。”我喝了一口普洱茶后，对三妹说。

“好的，哥，我懂了。”

参考链接：[https://www.cnblogs.com/chenssy/p/3351835.html](https://www.cnblogs.com/chenssy/p/3351835.html)，整理：沉默王二

### 继承

#### 什么是继承

**继承**（英语：inheritance）是面向对象软件技术中的一个概念。它使得**复用以前的代码非常容易。**

Java 语言是非常典型的面向对象的语言，在 Java 语言中**继承就是子类继承父类的属性和方法，使得子类对象（实例）具有父类的属性和方法，或子类从父类继承方法，使得子类具有父类相同的方法**。

我们来举个例子：动物有很多种，是一个比较大的概念。在动物的种类中，我们熟悉的有猫(Cat)、狗(Dog)等动物，它们都有动物的一般特征（比如能够吃东西，能够发出声音），不过又在细节上有区别（不同动物的吃的不同，叫声不一样）。

在 Java 语言中实现 Cat 和 Dog 等类的时候，就需要继承 Animal 这个类。继承之后 Cat、Dog 等具体动物类就是子类，Animal 类就是父类。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254222800-a1a95fbf-4e4e-4425-ac7e-cc5d55dbdcf4.png" />


#### 为什么需要继承

三妹，你可能会问**为什么需要继承**？

如果仅仅只有两三个类，每个类的属性和方法很有限的情况下确实没必要实现继承，但事情并非如此，事实上一个系统中往往有很多个类并且有着很多相似之处，比如猫和狗同属动物，或者学生和老师同属人。各个类可能又有很多个相同的属性和方法，这样的话如果每个类都重新写不仅代码显得很乱，代码工作量也很大。

这时继承的优势就出来了：可以直接使用父类的属性和方法，自己也可以有自己新的属性和方法满足拓展，父类的方法如果自己有需求更改也可以重写。这样**使用继承不仅大大的减少了代码量，也使得代码结构更加清晰可见**。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254223306-8a91679f-a479-4099-8179-334d11ef881f.png" />


所以这样从代码的层面上来看我们设计这个完整的 Animal 类是这样的：

```plain
class Animal
{
    public int id;
    public String name;
    public int age;
    public int weight;

    public Animal(int id, String name, int age, int weight) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    //这里省略get set方法
    public void sayHello()
    {
        System.out.println("hello");
    }
    public void eat()
    {
        System.out.println("I'm eating");
    }
    public void sing()
    {
        System.out.println("sing");
    }
}
```

而 Dog，Cat，Chicken 类可以这样设计：

```plain
class Dog extends Animal//继承animal
{
    public Dog(int id, String name, int age, int weight) {
        super(id, name, age, weight);//调用父类构造方法
    }
}
class Cat extends Animal{

    public Cat(int id, String name, int age, int weight) {
        super(id, name, age, weight);//调用父类构造方法
    }
}
class Chicken extends Animal{

    public Chicken(int id, String name, int age, int weight) {
        super(id, name, age, weight);//调用父类构造方法
    }
    //鸡下蛋
    public void layEggs()
    {
        System.out.println("我是老母鸡下蛋啦，咯哒咯！咯哒咯！");
    }
}
```

各自的类继承 Animal 后可以直接使用 Animal 类的属性和方法而不需要重复编写，各个类如果有自己的方法也可很容易地拓展。

#### 继承的分类

继承分为单继承和多继承，Java 语言只支持类的单继承，但可以通过实现接口的方式达到多继承的目的。**这个我们之前在讲接口的时候就提到过，这里我们再聊一下。**

| 继承                                                         | 定义                       | 优缺点                                                       |
| ------------------------------------------------------------ | -------------------------- | ------------------------------------------------------------ |
| 单继承
<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254222883-087f9dbc-7c99-4157-8457-000b85759bfb.png" />
 | 一个子类只拥有一个父类     | 优点：在类层次结构上比较清晰   缺点：结构的丰富度有时不能满足使用需求 |
| 多继承（Java 不支持，但可以用其它方式满足多继承使用需求）
<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254222790-62d17612-4e14-4570-8d71-1e8e79df9186.png" />
 | 一个子类拥有多个直接的父类 | 优点：子类的丰富度很高   缺点：容易造成混乱                  |


##### 单继承

单继承，一个子类只有一个父类，如我们上面讲过的 Animal 类和它的子类。**单继承在类层次结构上比较清晰，但缺点是结构的丰富度有时不能满足使用需求**。

##### 多继承

多继承，一个子类有多个直接的父类。这样做的好处是子类拥有所有父类的特征，**子类的丰富度很高，但是缺点就是容易造成混乱**。下图为一个混乱的例子。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254222792-2243da31-5623-41fb-9f53-fe24e08bdcd1.png" />


Java 虽然不支持多继承，但是 Java 有三种实现多继承效果的方式，**分别是**内部类、多层继承和实现接口。

[内部类](https://javabetter.cn/oo/inner-class.html)可以继承一个与外部类无关的类，保证了内部类的独立性，正是基于这一点，可以达到多继承的效果。

**多层继承：****子类继承父类，父类如果还继承其他的类，那么这就叫****多层继承**。这样子类就会拥有所有被继承类的属性和方法。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254227237-4ded842a-e55c-4e00-9598-af90ab4e7d7c.png" />


[实现接口](https://javabetter.cn/oo/interface.html)无疑是满足多继承使用需求的最好方式，一个类可以实现多个接口满足自己在丰富性和复杂环境的使用需求。

类和接口相比，**类就是一个实体，有属性和方法，而接口更倾向于一组方法**。举个例子，就拿斗罗大陆的唐三来看，他存在的继承关系可能是这样的：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254227978-28f794cf-c7ab-47f4-89a1-5ccd3f772b8c.png" />


#### 如何实现继承

##### extends 关键字

在 Java 中，类的继承是单一继承，也就是说一个子类只能拥有一个父类，所以**extends**只能继承一个类。其使用语法为：

```plain
class 子类名 extends 父类名{}
```

例如 Dog 类继承 Animal 类，它是这样的：

```plain
class Animal{} //定义Animal类
class Dog extends Animal{} //Dog类继承Animal类
```

子类继承父类后，就拥有父类的非私有的**属性和方法**。如果不明白，请看这个案例，在 IDEA 下创建一个项目，创建一个 test 类做测试，分别创建 Animal 类和 Dog 类，Animal 作为父类写一个 sayHello()方法，Dog 类继承 Animal 类之后就可以调用 sayHello()方法。具体代码为：

```plain
class Animal {
    public void  sayHello()//父类的方法
    {
        System.out.println("hello,everybody");
    }
}
class Dog extends Animal//继承animal
{ }
public class test {
    public static void main(String[] args) {
       Dog dog=new Dog();
       dog.sayHello();
    }
}
```

点击运行的时候 Dog 子类可以直接使用 Animal 父类的方法。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254227747-28091f7b-b633-4dde-8e42-a113e2db9ab6.png" />


##### implements 关键字

使用 implements 关键字可以变相使 Java 拥有多继承的特性，使用范围为类实现接口的情况，一个类可以实现多个接口(接口与接口之间用逗号分开)。

我们来看一个案例，创建一个 test2 类做测试，分别创建 doA 接口和 doB 接口，doA 接口声明 sayHello()方法，doB 接口声明 eat()方法，创建 Cat2 类实现 doA 和 doB 接口，并且在类中需要重写 sayHello()方法和 eat()方法。具体代码为：

```plain
interface doA{
     void sayHello();
}
interface doB{
     void eat();
    //以下会报错 接口中的方法不能具体定义只能声明
    //public void eat(){System.out.println("eating");}
}
class Cat2 implements  doA,doB{
    @Override//必须重写接口内的方法
    public void sayHello() {
        System.out.println("hello!");
    }
    @Override
    public void eat() {
        System.out.println("I'm eating");
    }
}
public class test2 {
    public static void main(String[] args) {
        Cat2 cat=new Cat2();
        cat.sayHello();
        cat.eat();
    }
}
```

Cat 类实现 doA 和 doB 接口的时候，需要实现其声明的方法，点击运行结果如下，这就是一个类实现接口的简单案例：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254227696-3e3b5047-3cad-46cf-a386-1f99776535a4.png" />


#### 继承的特点

继承的主要内容就是子类继承父类，并重写父类的方法。使用子类的属性或方法时候，首先要创建一个对象，而对象通过[构造方法](https://javabetter.cn/oo/construct.html)去创建，在构造方法中我们可能会调用子父类的一些属性和方法，所以就需要提前掌握 [this 和 super 关键字](https://javabetter.cn/oo/this-super.html)。

创建完这个对象之后，再调用**重写**父类后的方法，注意[重写和重载的区别](https://javabetter.cn/basic-extra-meal/override-overload.html)。

##### this 和 super 关键字

[后面](https://javabetter.cn/oo/this-super.html)会详细讲，这里先来简单了解一下。

this 和 super 关键字是继承中**非常重要的知识点**，分别表示当前对象的引用和父类对象的引用，两者有很大相似又有一些区别。

**this 表示当前对象，是指向自己的引用。**

```plain
this.属性 // 调用成员变量，要区别成员变量和局部变量
this.方法() // 调用本类的某个方法
this() // 表示调用本类构造方法
```

**super 表示父类对象，是指向父类的引用。**

```plain
super.属性 // 表示父类对象中的成员变量
super.方法() // 表示父类对象中定义的方法
super() // 表示调用父类构造方法
```

##### 构造方法

[构造方法](https://javabetter.cn/oo/construct.html)是一种特殊的方法，**它是一个与类同名的方法**。在继承中**构造方法是一种比较特殊的方法**（比如不能继承），所以要了解和学习在继承中构造方法的规则和要求。

继承中的构造方法有以下几点需要注意：

**父类的构造方法不能被继承：**

因为构造方法语法是**与类同名**，而继承则不更改方法名，如果子类继承父类的构造方法，那明显与构造方法的语法冲突了。比如 Father 类的构造方法名为 Father()，Son 类如果继承 Father 类的构造方法 Father()，那就和构造方法定义：**构造方法与类同名**冲突了，所以在子类中不能继承父类的构造方法，但子类会调用父类的构造方法。

**子类的构造过程必须调用其父类的构造方法：**

Java 虚拟机**构造子类对象前会先构造父类对象，父类对象构造完成之后再来构造子类特有的属性，****这被称为****内存叠加**。而 Java 虚拟机构造父类对象会执行父类的构造方法，所以子类构造方法必须调用 super()即父类的构造方法。就比如一个简单的继承案例应该这么写：

```plain
class A{
    public String name;
    public A() {//无参构造
    }
    public A (String name){//有参构造
    }
}
class B extends A{
    public B() {//无参构造
       super();
    }
    public B(String name) {//有参构造
      //super();
       super(name);
    }
}
```

**如果子类的构造方法中没有显示地调用父类构造方法，则系统默认调用父类无参数的构造方法。**

你可能有时候在写继承的时候子类并没有使用 super()调用，程序依然没问题，其实这样是为了节省代码，系统执行时会自动添加父类的无参构造方式，如果不信的话我们对上面的类稍作修改执行：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254227844-86579f2b-4ad4-40da-9fb7-e39062aafe13.png" />


##### 方法重写(Override)

[方法重写](https://javabetter.cn/basic-extra-meal/Overriding.html)也就是子类中出现和父类中一模一样的方法(包括返回值类型，方法名，参数列表)，它建立在继承的基础上。你可以理解为方法的**外壳不变，但是核心内容重写**。

在这里提供一个简单易懂的方法重写案例：

```plain
class E1{
    public void doA(int a){
        System.out.println("这是父类的方法");
    }
}
class E2 extends E1{
    @Override
    public void doA(int a) {
        System.out.println("我重写父类方法，这是子类的方法");
    }
}
```

其中`@Override` 注解显示声明该方法为注解方法，可以帮你检查重写方法的语法正确性，当然如果不加也是可以的，但建议加上。

##### [方法重载(Overload)](https://javabetter.cn/oo/encapsulation-inheritance-polymorphism.html#%E6%96%B9%E6%B3%95%E9%87%8D%E8%BD%BD-overload)

如果有两个方法的**方法名相同**，但参数不一致，那么可以说一个方法是另一个方法的[重载](https://javabetter.cn/basic-extra-meal/override-overload.html)。

重载可以通常理解为完成同一个事情的方法名相同，但是参数列表不同其他条件也可能不同。一个简单的方法重载的例子，类 E3 中的 add()方法就是一个重载方法。

```plain
class E3{
    public int add(int a,int b){
        return a+b;
    }
    public double add(double a,double b) {
        return a+b;
    }
    public int add(int a,int b,int c) {
        return a+b+c;
    }
}
```

#### 继承与修饰符

Java 修饰符的作用就是对类或类成员进行修饰或限制，每个修饰符都有自己的作用，而在继承中可能有些特殊修饰符使得被修饰的属性或方法不能被继承，或者继承需要一些其他的条件。

Java 语言提供了很多修饰符，修饰符用来定义类、方法或者变量，通常放在语句的最前端。主要分为以下两类：

+ [访问权限修饰符](https://javabetter.cn/oo/access-control.html)，也就是 public、private、protected 等
+ 非访问修饰符，也就是 static、final、abstract 等

##### 访问修饰符

Java 子类重写继承的方法时，**不可以降低方法的访问权限**，**子类继承父类的访问修饰符作用域不能比父类小**，也就是更加开放，假如父类是 protected 修饰的，其子类只能是 protected 或者 public，绝对不能是 default(默认的访问范围)或者 private。所以在继承中需要重写的方法不能使用 private 修饰词修饰。

如果还是不太清楚可以看几个小案例就很容易搞懂，写一个 A1 类中用四种修饰词实现四个方法，用子类 A2 继承 A1，重写 A1 方法时候你就会发现父类私有方法不能重写，非私有方法重写使用的修饰符作用域不能变小(大于等于)。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254228121-edf185e0-2c82-4e63-a786-d24e31e903ad.png" />


正确的案例应该为：

```plain
class A1 {
    private void doA(){ }
    void doB(){}//default
    protected void doC(){}
    public void doD(){}
}
class A2 extends A1{

    @Override
    public void doB() { }//继承子类重写的方法访问修饰符权限可扩大

    @Override
    protected void doC() { }//继承子类重写的方法访问修饰符权限可和父类一致

    @Override
    public void doD() { }//不可用protected或者default修饰
}
```

还要注意的是，**继承当中子类抛出的异常必须是父类抛出的异常或父类抛出异常的子异常**。下面的一个案例四种方法测试可以发现子类方法的异常不可大于父类对应方法抛出异常的范围。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254230129-1bd2b0d3-6503-4f11-819b-6bdb513db0a3.png" />


正确的案例应该为：

```plain
class B1{
    public void doA() throws Exception{}
    public void doB() throws Exception{}
    public void doC() throws IOException{}
    public void doD() throws IOException{}
}
class B2 extends B1{
    //异常范围和父类可以一致
    @Override
    public void doA() throws Exception { }
    //异常范围可以比父类更小
    @Override
    public void doB() throws IOException { }
    //异常范围 不可以比父类范围更大
    @Override
    public void doC() throws IOException { }//不可抛出Exception等比IOException更大的异常
    @Override
    public void doD() throws IOException { }
}
```

##### 非访问修饰符

访问修饰符用来控制访问权限，而非访问修饰符每个都有各自的作用，下面针对 static、final、abstract 修饰符进行介绍。

[static 修饰符](https://javabetter.cn/oo/static.html)

static 翻译为“静态的”，能够与变量，方法和类一起使用，**称为静态变量，静态方法(也称为类变量、类方法)**。如果在一个类中使用 static 修饰变量或者方法的话，它们**可以直接通过类访问，不需要创建一个类的对象来访问成员。**

我们在设计类的时候可能会使用静态方法，有很多工具类比如`Math`，`Arrays`等类里面就写了很多静态方法。

可以看以下的案例证明上述规则：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254229923-beeae744-a4f2-4d13-aa2b-88ad8e7ae42d.png" />


源代码为：

```plain
class C1{
    public  int a;
    public C1(){}
   // public static C1(){}// 构造方法不允许被声明为static
    public static void doA() {}
    public static void doB() {}
}
class C2 extends C1{
    public static  void doC()//静态方法中不存在当前对象，因而不能使用this和super。
    {
        //System.out.println(super.a);
    }
    public static void doA(){}//静态方法能被静态方法重写
   // public void doB(){}//静态方法不能被非静态方法重写
}
```

[final 修饰符](https://javabetter.cn/oo/final.html)

final 变量：

+ final 表示"最后的、最终的"含义，**变量一旦赋值后，不能被重新赋值**。被 final 修饰的实例变量必须显式指定初始值(即不能只声明)。final 修饰符通常和 static 修饰符一起使用来创建类常量。

final 方法：

+ **父类中的 final 方法可以被子类继承，但是不能被子类重写**。声明 final 方法的主要目的是防止该方法的内容被修改。

final 类：

+ **final 类不能被继承**，没有类能够继承 final 类的任何特性。

所以无论是变量、方法还是类被 final 修饰之后，都有代表最终、最后的意思。内容无法被修改。

[abstract 修饰符](https://javabetter.cn/oo/abstract.html)

abstract 英文名为“抽象的”，主要用来修饰类和方法，称为抽象类和抽象方法。

**抽象方法**：有很多不同类的方法是相似的，但是具体内容又不太一样，所以我们只能抽取他的声明，没有具体的方法体，即抽象方法可以表达概念但无法具体实现。

**抽象类**：**有抽象方法的类必须是抽象类**，抽象类可以表达概念但是无法构造实体的类。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254230325-f0e2811d-b31a-448f-a4d0-0f595b90ed48.png" />


比如我们可以这样设计一个 People 抽象类以及一个抽象方法，在子类中具体完成：

```plain
abstract class People{
    public abstract void sayHello();//抽象方法
}
class Chinese extends People{
    @Override
    public void sayHello() {//实现抽象方法
        System.out.println("你好");
    }
}
class Japanese extends People{
    @Override
    public void sayHello() {//实现抽象方法
        System.out.println("口你七哇");
    }
}
class American extends People{
    @Override
    public void sayHello() {//实现抽象方法
        System.out.println("hello");
    }
}
```

#### Object 类和转型

提到 Java 继承，不得不提及所有类的根类：Object(java.lang.Object)类，如果一个类没有显式声明它的父类（即没有写 extends xx），那么默认这个类的父类就是 Object 类，任何类都可以使用 Object 类的方法，创建的类也可和 Object 进行向上、向下转型，所以 Object 类是掌握和理解继承所必须的知识点。

Java 向上和向下转型在 Java 中运用很多，也是建立在继承的基础上，所以 Java 转型也是掌握和理解继承所必须的知识点。

##### Object 类概述

1. Object 是类层次结构的**根类**，所有的类都隐式的继承自 Object 类。
2. Java 中，所有的对象都拥有 Object 的默认方法。
3. Object 类有一个[构造方法](https://javabetter.cn/oo/construct.html)，并且是**无参构造方法**。

Object 是 Java 所有类的父类，是整个类继承结构的顶端，也是最抽象的一个类。

像 toString()、equals()、hashCode()、wait()、notify()、getClass()等都是 Object 的方法。你以后可能会经常碰到，但其中遇到更多的就是 toString()方法和 equals()方法，我们经常需要重写这两种方法满足我们的使用需求。

toString()方法表示返回该对象的字符串，由于各个对象构造不同所以需要重写，如果不重写的话默认返回`类名@hashCode`格式。

**如果重写 toString()方法后**直接调用 toString()方法就可以返回我们自定义的该类转成字符串类型的内容输出，而不需要每次都手动的拼凑成字符串内容输出，大大简化输出操作。

equals()方法主要比较两个对象是否相等，因为对象的相等不一定非要严格要求两个对象地址上的相同，有时内容上的相同我们就会认为它相等，比如 String 类就重写了 euqals()方法，通过[字符串的内容比较是否相等](https://javabetter.cn/string/equals.html)。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254230591-ef27372d-d906-4a15-94c0-089c6f733acb.png" />


##### 向上转型

**向上转型** : 通过子类对象(小范围)实例化父类对象(大范围)，这种属于自动转换。用一张图就能很好地表示向上转型的逻辑：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254229983-58d55547-795b-4df3-a7bb-89cde13aed90.png" />


父类引用变量指向子类对象后，只能使用父类已声明的方法，但方法如果被重写会执行子类的方法，如果方法未被重写那么将执行父类的方法。

##### 向下转型

**向下转型** : 通过父类对象(大范围)实例化子类对象(小范围)，在书写上父类对象需要加括号`()`强制转换为子类类型。但父类引用变量实际引用必须是子类对象才能成功转型，这里也用一张图就能很好表示向下转型的逻辑：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254232782-d0f3b7ce-2903-4626-b8f0-2460d466193c.png" />


子类引用变量指向父类引用变量指向的对象后(一个 Son()对象)，就完成向下转型，就可以调用一些子类特有而父类没有的方法 。

在这里写一个向上转型和向下转型的案例：

```plain
Object object=new Integer(666);//向上转型

Integer i=(Integer)object;//向下转型Object->Integer，object的实质还是指向Integer

String str=(String)object;//错误的向下转型，虽然编译器不会报错但是运行会报错
```

#### 子父类初始化顺序

在 Java 继承中，父子类初始化先后顺序为：

1. 父类中静态成员变量和静态代码块
2. 子类中静态成员变量和静态代码块
3. 父类中普通成员变量和代码块，父类的构造方法
4. 子类中普通成员变量和代码块，子类的构造方法

总的来说，就是**静态>非静态，父类>子类，非构造方法>构造方法**。同一类别（例如普通变量和普通代码块）成员变量和代码块执行从前到后，需要注意逻辑。

这个也不难理解，静态变量也称类变量，可以看成一个全局变量，静态成员变量和静态代码块在类加载的时候就初始化，而非静态变量和代码块在对象创建的时候初始化。所以静态快于非静态初始化。

而在创建子类对象的时候需要先创建父类对象，所以父类优先于子类。

而在调用构造方法的时候，是对成员变量进行一些初始化操作，所以普通成员变量和代码块优于构造方法执行。

至于更深层次为什么这个顺序，就要更深入了解 JVM 执行流程啦。下面一个测试代码为：

```plain
class Father{
    public Father() {
        System.out.println(++b1+"父类构造方法");
    }//父类构造方法 第四
    static int a1=0;//父类static 第一 注意顺序
    static {
        System.out.println(++a1+"父类static");
    }
    int b1=a1;//父类成员变量和代码块 第三
    {
        System.out.println(++b1+"父类代码块");
    }
}
class Son extends Father{
    public Son() {
        System.out.println(++b2+"子类构造方法");
    }//子类构造方法 第六
    static {//子类static第二步
        System.out.println(++a1+"子类static");
    }
    int b2=b1;//子类成员变量和代码块 第五
    {
        System.out.println(++b2 + "子类代码块");
    }
}
public class test9 {
    public static void main(String[] args) {
        Son son=new Son();
    }
}
```

执行结果：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254233329-c437ea38-4769-49e5-abfc-ab5ef1297ff6.png" />


### 多态

Java 的多态是指在面向对象编程中，同一个类的对象在不同情况下表现出来的不同行为和状态。

+ 子类可以继承父类的字段和方法，子类对象可以直接使用父类中的方法和字段（私有的不行）。
+ 子类可以重写从父类继承来的方法，使得子类对象调用这个方法时表现出不同的行为。
+ 可以将子类对象赋给父类类型的引用，这样就可以通过父类类型的引用调用子类中重写的方法，实现多态。

多态的目的是为了提高代码的灵活性和可扩展性，使得代码更容易维护和扩展。

比如说，通过允许子类继承父类的方法并重写，增强了代码的复用性。

再比如说多态可以实现动态绑定，这意味着程序在运行时再确定对象的方法调用也不迟。

“光说理论很枯燥，我们再通过代码来具体地分析一下。”

#### 多态是什么

在我的印象里，西游记里的那段孙悟空和二郎神的精彩对战就能很好的解释“多态”这个词：一个孙悟空，能七十二变；一个二郎神，也能七十二变；他们都可以变成不同的形态，只需要悄悄地喊一声“变”。

Java 的多态是什么？其实就是一种能力——同一个行为具有不同的表现形式；换句话说就是，执行一段代码，Java 在运行时能根据对象类型的不同产生不同的结果。和孙悟空和二郎神都只需要喊一声“变”，然后就变了，并且每次变得还不一样；一个道理。

多态的前提条件有三个：

+ 子类继承父类
+ 子类重写父类的方法
+ 父类引用指向子类的对象

多态的一个简单应用，来看程序清单 1-1：

```plain
//子类继承父类
public class Wangxiaoer extends Wanger {
    public void write() { // 子类重写父类方法
        System.out.println("记住仇恨，表明我们要奋发图强的心智");
    }

    public static void main(String[] args) {
        // 父类引用指向子类对象
        Wanger[] wangers = { new Wanger(), new Wangxiaoer() };

        for (Wanger wanger : wangers) {
            // 对象是王二的时候输出：勿忘国耻
            // 对象是王小二的时候输出：记住仇恨，表明我们要奋发图强的心智
            wanger.write();
        }
    }
}

class Wanger {
    public void write() {
        System.out.println("勿忘国耻");
    }
}
```

#### 多态与后期绑定

现在，我们来思考一个问题：程序清单 1-1 在执行 `wanger.write()` 时，由于编译器只有一个 Wanger 引用，它怎么知道究竟该调用父类 Wanger 的 `write()` 方法，还是子类 Wangxiaoer 的 `write()` 方法呢？

答案是在运行时根据对象的类型进行后期绑定，编译器在编译阶段并不知道对象的类型，但是 Java 的方法调用机制能找到正确的方法体，然后执行，得到正确的结果。

多态机制提供的一个重要的好处就是程序具有良好的扩展性。来看程序清单 2-1：

```plain
//子类继承父类
public class Wangxiaoer extends Wanger {
    public void write() { // 子类覆盖父类方法
        System.out.println("记住仇恨，表明我们要奋发图强的心智");
    }

    public void eat() {
        System.out.println("我不喜欢读书，我就喜欢吃");
    }

    public static void main(String[] args) {
        // 父类引用指向子类对象
        Wanger[] wangers = { new Wanger(), new Wangxiaoer() };

        for (Wanger wanger : wangers) {
            // 对象是王二的时候输出：勿忘国耻
            // 对象是王小二的时候输出：记住仇恨，表明我们要奋发图强的心智
            wanger.write();
        }
    }
}

class Wanger {
    public void write() {
        System.out.println("勿忘国耻");
    }

    public void read() {
        System.out.println("每周读一本好书");
    }
}
```

在程序清单 2-1 中，我们在 Wanger 类中增加了 `read()` 方法，在 Wangxiaoer 类中增加了 `eat()`方法，但这丝毫不会影响到 `write()` 方法的调用。

`write()` 方法忽略了周围代码发生的变化，依然正常运行。这让我想起了金庸《倚天屠龙记》里九阳真经的口诀：“他强由他强，清风拂山岗；他横由他横，明月照大江。”

多态的这个优秀的特性，让我们在修改代码的时候不必过于紧张，因为多态是一项让程序员“将改变的与未改变的分离开来”的重要特性。

#### 多态与构造方法

在构造方法中调用多态方法，会产生一个奇妙的结果，我们来看程序清单 3-1：

```plain
public class Wangxiaosan extends Wangsan {
    private int age = 3;
    public Wangxiaosan(int age) {
        this.age = age;
        System.out.println("王小三的年龄：" + this.age);
    }

    public void write() { // 子类覆盖父类方法
        System.out.println("我小三上幼儿园的年龄是：" + this.age);
    }

    public static void main(String[] args) {
        new Wangxiaosan(4);
//      上幼儿园之前
//      我小三上幼儿园的年龄是：0
//      上幼儿园之后
//      王小三的年龄：4
    }
}

class Wangsan {
    Wangsan () {
        System.out.println("上幼儿园之前");
        write();
        System.out.println("上幼儿园之后");
    }
    public void write() {
        System.out.println("老子上幼儿园的年龄是3岁半");
    }
}
```

从输出结果上看，是不是有点诧异？明明在创建 Wangxiaosan 对象的时候，年龄传递的是 4，但输出结果既不是“老子上幼儿园的年龄是 3 岁半”，也不是“我小三上幼儿园的年龄是：4”。

为什么？

因为在创建子类对象时，会先去调用父类的构造方法，而父类构造方法中又调用了被子类覆盖的多态方法，由于父类并不清楚子类对象中的字段值是什么，于是把 int 类型的属性暂时初始化为 0，然后再调用子类的构造方法（子类构造方法知道王小二的年龄是 4）。

#### 多态与向下转型

向下转型是指将父类引用强转为子类类型；这是不安全的，因为有的时候，父类引用指向的是父类对象，向下转型就会抛出 ClassCastException，表示类型转换失败；但如果父类引用指向的是子类对象，那么向下转型就是成功的。

来看程序清单 4-1：

```plain
public class Wangxiaosi extends Wangsi {
    public void write() {
        System.out.println("记住仇恨，表明我们要奋发图强的心智");
    }

    public void eat() {
        System.out.println("我不喜欢读书，我就喜欢吃");
    }

    public static void main(String[] args) {
        Wangsi[] wangsis = { new Wangsi(), new Wangxiaosi() };

        // wangsis[1]能够向下转型
        ((Wangxiaosi) wangsis[1]).write();
        // wangsis[0]不能向下转型
        ((Wangxiaosi)wangsis[0]).write();
    }
}

class Wangsi {
    public void write() {
        System.out.println("勿忘国耻");
    }

    public void read() {
        System.out.println("每周读一本好书");
    }
}
```

### 小结

好啦，三妹，本次继承就介绍到这里啦，Java 面向对象三大特征封装继承多态——优秀的你已经掌握。

+ **封装**：是对类的封装，封装是对类的属性和方法进行封装，只对外暴露方法而不暴露具体使用细节，所以我们一般设计类成员变量时候大多设为私有而通过一些 get、set 方法去读写。
+ **继承**：子类继承父类，即“子承父业”，子类拥有父类除私有的所有属性和方法，自己还能在此基础上拓展自己新的属性和方法。主要目的是**复用代码**。
+ **多态**：多态是同一个行为具有多个不同表现形式或形态的能力。即一个父类可能有若干子类，各子类实现父类方法有多种多样，调用父类方法时，父类引用变量指向不同子类实例而执行不同方法，这就是所谓父类方法是多态的。

最后送你一张图捋一捋其中的关系吧。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254233825-c1b449c1-dfff-4b10-9139-83615b37e911.png" />


封装|继承|多态



## this 和 super 关键字

“this 关键字有很多种用法，其中最常用的一个是，它可以作为引用变量，指向当前对象。”我面带着朴实无华的微笑继续说，“除此之外， this 关键字还可以完成以下工作。”

+ 调用当前类的方法；
+ `this()` 可以调用当前类的构造方法；
+ this 可以作为参数在方法中传递；
+ this 可以作为参数在构造方法中传递；
+ this 可以作为方法的返回值，返回当前类的对象。

### 指向当前对象

```plain
public class WithoutThisStudent {
    String name;
    int age;

    WithoutThisStudent(String name, int age) {
        name = name;
        age = age;
    }

    void out() {
        System.out.println(name+" " + age);
    }

    public static void main(String[] args) {
        WithoutThisStudent s1 = new WithoutThisStudent("沉默王二", 18);
        WithoutThisStudent s2 = new WithoutThisStudent("沉默王三", 16);

        s1.out();
        s2.out();
    }
}
```

“在上面的例子中，构造方法的参数名和实例变量名相同，由于没有使用 this 关键字，所以无法为实例变量赋值。”我抬起右手的食指，指着屏幕上的 name 和 age 对着三妹说。

“来看一下程序的输出结果。”

```plain
null 0
null 0
```

“从结果中可以看得出来，尽管创建对象的时候传递了参数，但实例变量并没有赋值。这是因为如果构造方法中没有使用 this 关键字的话，name 和 age 指向的并不是实例变量而是参数本身。”我把脖子扭向右侧，看着三妹说。

“那怎么解决这个问题呢？哥。”三妹着急地问。

“如果参数名和实例变量名产生了冲突.....”我正准备给出答案，三妹打断了我。

“难道用 this 吗？”三妹脱口而出。

“哇，越来越棒了呀，你。”我感觉三妹在学习 Java 这条道路上逐渐有了自己主动思考的意愿。

“是的，来看加上 this 关键字后的代码。”

```plain
public class WithThisStudent {
    String name;
    int age;

    WithThisStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void out() {
        System.out.println(name+" " + age);
    }

    public static void main(String[] args) {
        WithThisStudent s1 = new WithThisStudent("沉默王二", 18);
        WithThisStudent s2 = new WithThisStudent("沉默王三", 16);

        s1.out();
        s2.out();
    }
}
```

“再来看一下程序的输出结果。”

```plain
沉默王二 18
沉默王三 16
```

“这次，实例变量有值了，在构造方法中，`this.xxx` 指向的就是实例变量，而不再是参数本身了。”我慢吞吞地说着，“当然了，如果参数名和实例变量名不同的话，就不必使用 this 关键字，但我建议使用 this 关键字，这样的代码更有意义。”

### 调用当前类的方法

“仔细听，三妹，看我敲键盘的速度是不是够快。”

```plain
public class InvokeCurrentClassMethod {
    void method1() {}
    void method2() {
        method1();
    }

    public static void main(String[] args) {
        new InvokeCurrentClassMethod().method1();
    }
}
```

仔细瞧，三妹，上面这段代码中没有见到 this 关键字吧？”我面带着神秘的微笑，准备给三妹变个魔术。

我快速的在 classes 目录下找到 InvokeCurrentClassMethod.class 文件，然后双击打开（IDEA 默认会使用 FernFlower 打开字节码文件）。

```plain
public class InvokeCurrentClassMethod {
    public InvokeCurrentClassMethod() {
    }

    void method1() {
    }

    void method2() {
        this.method1();
    }

    public static void main(String[] args) {
        (new InvokeCurrentClassMethod()).method1();
    }
}
```

“瞪大眼睛仔细瞧，三妹，`this` 关键字是不是出现了？”

“哇，真的呢，好神奇啊！”三妹为了配合我的演出，也是十二分的卖力。

“我们可以在一个类中使用 this 关键字来调用另外一个方法，如果没有使用的话，编译器会自动帮我们加上。”我对自己深厚的编程功底充满自信，“在源代码中，`method2()` 在调用 `method1()` 的时候并没有使用 this 关键字，但通过反编译后的字节码可以看得到。”

### 调用当前类的构造方法

“再来看下面这段代码。”

```plain
public class InvokeConstrutor {
    InvokeConstrutor() {
        System.out.println("hello");
    }

    InvokeConstrutor(int count) {
        this();
        System.out.println(count);
    }

    public static void main(String[] args) {
        InvokeConstrutor invokeConstrutor = new InvokeConstrutor(10);
    }
}
```

“在有参构造方法 `InvokeConstrutor(int count)` 中，使用了 `this()` 来调用无参构造方法 `InvokeConstrutor()`。”这次，我换成了左手的食指，指着屏幕对三妹说，“`this()` 可用于调用当前类的构造方法——构造方法可以重用了。”

“来看一下输出结果。”

```plain
hello
10
```

“真的啊，无参构造方法也被调用了，所以程序输出了 hello。”三妹看到输出结果后不假思索地说。

“也可以在无参构造方法中使用 `this()` 并传递参数来调用有参构造方法。”话音没落，我就在键盘上敲了起来，“来看下面这段代码。”

```plain
public class InvokeParamConstrutor {
    InvokeParamConstrutor() {
        this(10);
        System.out.println("hello");
    }

    InvokeParamConstrutor(int count) {
        System.out.println(count);
    }

    public static void main(String[] args) {
        InvokeParamConstrutor invokeConstrutor = new InvokeParamConstrutor();
    }
}
```

“再来看一下程序的输出结果。”

```plain
10
hello
```

“不过，需要注意的是，`this()` 必须放在构造方法的第一行，否则就报错了。”


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254249011-45072b70-bcd1-4c5e-b2ed-8fc35a12bae0.png" />


### 作为参数在方法中传递

“来看下面这段代码。”

```plain
public class ThisAsParam {
    void method1(ThisAsParam p) {
        System.out.println(p);
    }

    void method2() {
        method1(this);
    }

    public static void main(String[] args) {
        ThisAsParam thisAsParam = new ThisAsParam();
        System.out.println(thisAsParam);
        thisAsParam.method2();
    }
}
```

“`this` 关键字可以作为参数在方法中传递，此时，它指向的是当前类的对象。”一不小心，半个小时过去了，我感到嗓子冒烟，于是赶紧又喝了一口水，润润嗓子后继续说道。

“来看一下输出结果，你就明白了，三妹。”

```plain
com.itwanger.twentyseven.ThisAsParam@77459877
com.itwanger.twentyseven.ThisAsParam@77459877
```

“`method2()` 调用了 `method1()`，并传递了参数 this，`method1()` 中打印了当前对象的字符串。 `main()` 方法中打印了 thisAsParam 对象的字符串。从输出结果中可以看得出来，两者是同一个对象。”

### 作为参数在构造方法中传递

“继续来看代码。”

```plain
public class ThisAsConstrutorParam {
    int count = 10;

    ThisAsConstrutorParam() {
        Data data = new Data(this);
        data.out();
    }

    public static void main(String[] args) {
        new ThisAsConstrutorParam();
    }
}

class Data {
    ThisAsConstrutorParam param;
    Data(ThisAsConstrutorParam param) {
        this.param = param;
    }

    void out() {
        System.out.println(param.count);
    }
}
```

“在构造方法 `ThisAsConstrutorParam()` 中，我们使用 this 关键字作为参数传递给了 Data 对象，它其实指向的就是 `new ThisAsConstrutorParam()` 这个对象。”

“`this` 关键字也可以作为参数在构造方法中传递，它指向的是当前类的对象。当我们需要在多个类中使用一个对象的时候，这非常有用。”

“来看一下输出结果。”

```plain
10
```

### 作为方法的返回值

```plain
public class ThisAsMethodResult {
    ThisAsMethodResult getThisAsMethodResult() {
        return this;
    }
    
    void out() {
        System.out.println("hello");
    }

    public static void main(String[] args) {
        new ThisAsMethodResult().getThisAsMethodResult().out();
    }
}
```

“`getThisAsMethodResult()` 方法返回了 this 关键字，指向的就是 `new ThisAsMethodResult()` 这个对象，所以可以紧接着调用 `out()` 方法——达到了链式调用的目的，这也是 this 关键字非常经典的一种用法。”

“链式调用的形式在 JavaScript 代码更加常见。”为了向三妹证实这一点，我打开了 jQuery 的源码。

“原来这么多链式调用啊！”三妹感叹到。

“是的。”我点点头，然后指着 `getThisAsMethodResult()` 方法的返回值对三妹说，“需要注意的是，`this` 关键字作为方法的返回值的时候，方法的返回类型为类的类型。”

“来看一下输出结果。”

```plain
hello
```

### super 关键字

“super 关键字的用法主要有三种。”

+ 指向父类对象；
+ 调用父类的方法；
+ `super()` 可以调用父类的构造方法。

“其实和 this 有些相似，只不过用意不大相同。”我端起水瓶，咕咚咕咚又喝了几大口，好渴。“每当创建一个子类对象的时候，也会隐式的创建父类对象，由 super 关键字引用。”

“如果父类和子类拥有同样名称的字段，super 关键字可以用来访问父类的同名字段。”

“来看下面这段代码。”

```plain
public class ReferParentField {
    public static void main(String[] args) {
        new Dog().printColor();
    }
}

class Animal {
    String color = "白色";
}

class Dog extends Animal {
    String color = "黑色";

    void printColor() {
        System.out.println(color);
        System.out.println(super.color);
    }
}
```

“父类 Animal 中有一个名为 color 的字段，子类 Dog 中也有一个名为 color 的字段，子类的 `printColor()` 方法中，通过 super 关键字可以访问父类的 color。”

“来看一下输出结果。”

```plain
黑色
白色
```

“当子类和父类的方法名相同时，可以使用 super 关键字来调用父类的方法。换句话说，super 关键字可以用于方法重写时访问到父类的方法。”

```plain
public class ReferParentMethod {
    public static void main(String[] args) {
        new Dog().work();
    }
}

class Animal {
    void eat() {
        System.out.println("吃...");
    }
}

class Dog extends Animal {
    @Override
    void eat() {
        System.out.println("吃...");
    }

    void bark() {
        System.out.println("汪汪汪...");
    }

    void work() {
        super.eat();
        bark();
    }
}
```

“瞧，三妹。父类 Animal 和子类 Dog 中都有一个名为 `eat()` 的方法，通过 `super.eat()` 可以访问到父类的 `eat()` 方法。”

等三妹在自我消化的时候，我在键盘上又敲完了一串代码。

```plain
public class ReferParentConstructor {
    public static void main(String[] args) {
        new Dog();
    }
}

class Animal {
    Animal(){
        System.out.println("动物来了");
    }
}

class Dog extends Animal {
    Dog() {
        super();
        System.out.println("狗狗来了");
    }
}
```

“子类 Dog 的构造方法中，第一行代码为 `super()`，它就是用来调用父类的构造方法的。”

“来看一下输出结果。”

```plain
动物来了
狗狗来了
```

“当然了，在默认情况下，`super()` 是可以省略的，编译器会主动去调用父类的构造方法。也就是说，子类即使不使用 `super()` 主动调用父类的构造方法，父类的构造方法仍然会先执行。”

```plain
public class ReferParentConstructor {
    public static void main(String[] args) {
        new Dog();
    }
}

class Animal {
    Animal(){
        System.out.println("动物来了");
    }
}

class Dog extends Animal {
    Dog() {
        System.out.println("狗狗来了");
    }
}
```

“输出结果和之前一样。”

```plain
动物来了
狗狗来了
```

“`super()` 也可以用来调用父类的有参构造方法，这样可以提高代码的可重用性。”

```plain
class Person {
    int id;
    String name;

    Person(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

class Emp extends Person {
    float salary;

    Emp(int id, String name, float salary) {
        super(id, name);
        this.salary = salary;
    }

    void display() {
        System.out.println(id + " " + name + " " + salary);
    }
}

public class CallParentParamConstrutor {
    public static void main(String[] args) {
        new Emp(1, "沉默王二", 20000f).display();
    }
}
```

“Emp 类继承了 Person 类，也就继承了 id 和 name 字段，当在 Emp 中新增了 salary 字段后，构造方法中就可以使用 `super(id, name)` 来调用父类的有参构造方法。”

“来看一下输出结果。”

```plain
1 沉默王二 20000.0
```



## static 关键字

“static 关键字的作用可以用一句话来描述：‘**方便在没有创建对象的情况下进行调用**，包括变量和方法’。也就是说，只要类被加载了，就可以通过类名进行访问。”我扶了扶沉重眼镜，继续说到，“static 可以用来修饰类的成员变量，以及成员方法。我们一个个来看。”

### 静态变量

“如果在声明变量的时候使用了 static 关键字，那么这个变量就被称为静态变量。静态变量只在类加载的时候获取一次内存空间，这使得静态变量很节省内存空间。”

考虑这样一个 Student 类

```plain
public class Student {
    String name;
    int age;
    String school = "郑州大学";
}
```

这段代码敲完后，我对三妹说：“假设郑州大学录取了一万名新生，那么在创建一万个 Student 对象的时候，所有的字段（name、age 和 school）都会获取到一块内存。学生的姓名和年纪不尽相同，但都属于郑州大学，如果每创建一个对象，school 这个字段都要占用一块内存的话，就很浪费，对吧？三妹。”

“因此，最好将 school 这个字段设置为 static，这样就只会占用一块内存，而不是一万块。”

安静的房子里又响起了一阵噼里啪啦的键盘声。

```plain
public class Student {
    String name;
    int age;
    static String school = "郑州大学";

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public static void main(String[] args) {
        Student s1 = new Student("沉默王二", 18);
        Student s2 = new Student("沉默王三", 16);
    }
}
```

“瞧，三妹。s1 和 s2 这两个引用变量存放在栈区（stack），沉默王二+18 这个对象和沉默王三+16 这个对象存放在堆区（heap），school 这个静态变量存放在静态区。”

“等等，哥，栈、堆、静态区？”三妹的脸上塞满了疑惑。

“哦哦，别担心，三妹，画幅图你就全明白了。”说完我就打开 draw.io 这个网址，认真地画起了图。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254274233-af315057-fd5c-4c4c-8517-0fc6b94ba4d9.png" />


“现在，是不是一下子就明白了？”看着这幅漂亮的手绘图，我心里有点小开心。

“哇，哥，惊艳了呀！”三妹也不忘拍马屁，给我了一个大大的赞。

“好了，三妹，我们来看下面这串代码。”

```plain
public class Counter {
    int count = 0;

    Counter() {
        count++;
        System.out.println(count);
    }

    public static void main(String args[]) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();
    }
}
```

“我们创建一个成员变量 count，并且在构造函数中让它自增。因为成员变量会在创建对象的时候获取内存，因此每一个对象都会有一个 count 的副本， count 的值并不会随着对象的增多而递增。”

我在侃侃而谈，而三妹似乎有些不太明白。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254274140-148df5cf-481e-4d3e-bb61-0ef9580a51eb.png" />


“没关系，三妹，你先盲猜一下，这段代码输出的结果是什么？”

“按照你的逻辑，应该输出三个 1？是这样吗？”三妹眨眨眼，有点不太自信地回答。

“哎呀，不错哟。”

我在 IDEA 中点了一下运行按钮，程序跑了起来。

```plain
1
1
1
```

“每创建一个 Counter 对象，count 的值就从 0 自增到 1。三妹，想一下，如果 count 是静态的呢？”

“我不知道啊。”

“嗯，来看下面这段代码。”

```plain
public class StaticCounter {
    static int count = 0;

    StaticCounter() {
        count++;
        System.out.println(count);
    }

    public static void main(String args[]) {
        StaticCounter c1 = new StaticCounter();
        StaticCounter c2 = new StaticCounter();
        StaticCounter c3 = new StaticCounter();
    }
}
```

“来看一下输出结果。”

```plain
1
2
3
```

“简单解释一下哈，由于静态变量只会获取一次内存空间，所以任何对象对它的修改都会得到保留，所以每创建一个对象，count 的值就会加 1，所以最终的结果是 3，明白了吧？三妹。这就是静态变量和成员变量之间的差别。”

“另外，需要注意的是，由于静态变量属于一个类，所以不要通过对象引用来访问，而应该直接通过类名来访问，否则编译器会发出警告。”


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254274152-ddd4e700-ee2d-4b37-9431-cd42d1acfdab.png" />


### 静态方法

“说完静态变量，我们来说静态方法。”说完，我准备点一支华子来抽，三妹阻止了我，她指一指烟盒上的「吸烟有害身体健康」，我笑了。

“好吧。”我只好喝了一口咖啡继续说，“如果方法上加了 static 关键字，那么它就是一个静态方法。”

“静态方法有以下这些特征。”

+ 静态方法属于这个类而不是这个类的对象；
+ 调用静态方法的时候不需要创建这个类的对象；
+ 静态方法可以访问静态变量。

“来，继续上代码”

```plain
public class StaticMethodStudent {
    String name;
    int age;
    static String school = "郑州大学";

    public StaticMethodStudent(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    static void change() {
        school = "河南大学";
    }
    
    void out() {
        System.out.println(name + " " + age + " " + school);
    }

    public static void main(String[] args) {
        StaticMethodStudent.change();
        
        StaticMethodStudent s1 = new StaticMethodStudent("沉默王二", 18);
        StaticMethodStudent s2 = new StaticMethodStudent("沉默王三", 16);
        
        s1.out();
        s2.out();
    }
}
```

“仔细听，三妹。`change()` 方法就是一个静态方法，所以它可以直接访问静态变量 school，把它的值更改为河南大学；并且，可以通过类名直接调用 `change()` 方法，就像 `StaticMethodStudent.change()` 这样。”

“来看一下程序的输出结果吧。”

```plain
沉默王二 18 河南大学
沉默王三 16 河南大学
```

“需要注意的是，静态方法不能访问非静态变量和调用非静态方法。你看，三妹，我稍微改动一下代码，编译器就会报错。”

“先是在静态方法中访问非静态变量，编译器不允许。”


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254274163-f3eadb79-6c50-4d45-8373-cc72ea349e7d.png" />


“然后在静态方法中访问非静态方法，编译器同样不允许。”


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254274189-d5f0530d-6a88-4c9b-afd6-8c4e8b58650a.png" />


“关于静态方法的使用，这下清楚了吧，三妹？”

看着三妹点点头，我欣慰地笑了。

“哥，我想到了一个问题，为什么 main 方法是静态的啊？”没想到，三妹串联知识点的功力还是不错的。

“如果 main 方法不是静态的，就意味着 Java 虚拟机在执行的时候需要先创建一个对象才能调用 main 方法，而 main 方法作为程序的入口，创建一个额外的对象显得非常多余。”我不假思索的回答令三妹感到非常的钦佩。

“java.lang.Math 类的几乎所有方法都是静态的，可以直接通过类名来调用，不需要创建类的对象。”


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254275986-1a335b9c-f9aa-40c6-8499-baf8b072b074.png" />


### 静态代码块

“用一个 static 关键字，外加一个大括号括起来的代码被称为静态代码块。”

“就像下面这串代码。”

```plain
public class StaticBlock {
    static {
        System.out.println("静态代码块");
    }

    public static void main(String[] args) {
        System.out.println("main 方法");
    }
}
```

“**静态代码块通常用来初始化一些静态变量，它会优先于 **`**main()**`** 方法执行。**”

“来看一下程序的输出结果吧。”

```plain
静态代码块
main 方法
```

“二哥，既然静态代码块先于 `main()` 方法执行，那没有 `main()` 方法的 Java 类能执行成功吗？”三妹的脑回路越来越令我敬佩了。

“Java 1.6 是可以的，但 Java 7 开始就无法执行了。”我胸有成竹地回答到。

```plain
public class StaticBlockNoMain {
    static {
        System.out.println("静态代码块，没有 main");
    }
}
```

“在命令行中执行 `java StaticBlockNoMain` 的时候，会抛出 NoClassDefFoundError 的错误。”


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254276364-37a02b4d-88d2-429c-aec7-6df050473e62.png" />


“三妹，来看下面这个例子。”

```plain
public class StaticBlockDemo {
    public static List<String> writes = new ArrayList<>();

    static {
        writes.add("沉默王二");
        writes.add("沉默王三");
        writes.add("沉默王四");

        System.out.println("第一块");
    }

    static {
        writes.add("沉默王五");
        writes.add("沉默王六");

        System.out.println("第二块");
    }
}
```

“writes 是一个静态的 ArrayList，所以不太可能在声明的时候完成初始化，因此需要在静态代码块中完成初始化。”

“静态代码块在初始集合的时候，真的非常有用。在实际的项目开发中，通常使用静态代码块来加载配置文件到内存当中。”

### 静态内部类

“三妹啊，除了以上只写，static 还有一个不太常用的功能——静态内部类。”

“Java 允许我们在一个类中声明一个内部类，它提供了一种令人信服的方式，允许我们只在一个地方使用一些变量，使代码更具有条理性和可读性。”

“常见的内部类有四种，成员内部类、局部内部类、匿名内部类和静态内部类，限于篇幅原因，前三种不在我们本次的讨论范围之内，以后有机会再细说。”

“来看下面这个例子。”三妹有点走神，我敲了敲她的脑袋后继续说。

```plain
public class Singleton {
    private Singleton() {}

    private static class SingletonHolder {
        public static final Singleton instance = new Singleton();
    }

    public static Singleton getInstance() {
        return SingletonHolder.instance;
    }
}
```

“三妹，打起精神，马上就结束了。”

“哦哦，这段代码看起来很别致啊，哥。”

“是的，三妹，这段代码在以后创建单例的时候还会见到。”

“第一次加载 Singleton 类时并不会初始化 instance，只有第一次调用 `getInstance()` 方法时 Java 虚拟机才开始加载 SingletonHolder 并初始化 instance，这样不仅能确保线程安全，也能保证 Singleton 类的唯一性。不过，创建单例更优雅的一种方式是使用枚举，以后再讲给你听。”

“需要注意的是。第一，静态内部类不能访问外部类的所有成员变量；第二，静态内部类可以访问外部类的所有静态变量，包括私有静态变量。第三，外部类不能声明为 static。”

“三妹，你看，在 Singleton 类上加 static 后，编译器就提示错误了。”


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727254276322-8bdff946-27d7-43b2-9937-66aa407f8abe.png" />


三妹点了点头，所有所思。



## final 关键字

### <font style="color:rgb(44, 62, 80);">final 变量</font>

<font style="color:rgb(44, 62, 80);">“好了，我们先来看 final 修饰的变量吧！”</font>

<font style="color:rgb(44, 62, 80);">“被 final 修饰的变量无法重新赋值。换句话说，final 变量一旦初始化，就无法更改。”</font>

<font style="color:rgb(44, 62, 80);">“来看这行代码。”</font>

```plain
final int age = 18;
```

<font style="color:rgb(44, 62, 80);">“当尝试将 age 的值修改为 30 的时候，编译器就生气了。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350690756-869a713e-a9f1-45e0-940f-9a9d24573ce7.png" />


<font style="color:rgb(44, 62, 80);">“再来看这段代码。”</font>

```plain
public class Pig {
   private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

<font style="color:rgb(44, 62, 80);">“这是一个很普通的 Java 类，它有一个字段 name。”</font>

<font style="color:rgb(44, 62, 80);">“然后，我们创建一个测试类，并声明一个 final 修饰的 Pig 对象。”</font>

```plain
final Pig pig = new Pig();
```

<font style="color:rgb(44, 62, 80);">“如果尝试将 pig 重新赋值的话，编译器同样会生气。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350690763-c0e10738-b5f3-46ac-aa02-f22a92d9cf8d.png" />


<font style="color:rgb(44, 62, 80);">“但我们仍然可以去修改 pig 对象的 name。”</font>

```plain
final Pig pig = new Pig();
pig.setName("特立独行");
System.out.println(pig.getName()); // 特立独行
```

<font style="color:rgb(44, 62, 80);">“另外，final 修饰的成员变量必须有一个默认值，否则编译器将会提醒没有初始化。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350690901-96725ad1-8796-4b86-b5b9-1636a09a5352.png" />


<font style="color:rgb(44, 62, 80);">“final 和 static 一起修饰的成员变量叫做常量，常量名必须全部大写。”</font>

```plain
public class Pig {
   private final int age = 1;
   public static final double PRICE = 36.5;
}
```

<font style="color:rgb(44, 62, 80);">“有时候，我们还会用 final 关键字来修饰参数，它意味着参数在方法体内不能被再修改。”</font>

<font style="color:rgb(44, 62, 80);">“来看下面这段代码。”</font>

```plain
public class ArgFinalTest {
    public void arg(final int age) {
    }

    public void arg1(final String name) {
    }
}
```

<font style="color:rgb(44, 62, 80);">“如果尝试去修改它的话，编译器会提示以下错误。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350690956-1c7e2e51-a565-4beb-ab00-4eced13b2fd4.png" />


### <font style="color:rgb(44, 62, 80);">final 方法</font>

<font style="color:rgb(44, 62, 80);">“被 final 修饰的方法不能被重写。如果我们在设计一个类的时候，认为某些方法不应该被重写，就应该把它设计成 final 的。”</font>

<font style="color:rgb(44, 62, 80);">“Thread 类就是一个例子，它本身不是 final 的，这意味着我们可以扩展它，但它的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">isAlive()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法是 final 的。”</font>

```plain
public class Thread implements Runnable {
    public final native boolean isAlive();
}
```

<font style="color:rgb(44, 62, 80);">“需要注意的是，该方法是一个本地（native）方法，用于确认线程是否处于活跃状态。而本地方法是由操作系统决定的，因此重写该方法并不容易实现。”</font>

<font style="color:rgb(44, 62, 80);">“来看这段代码。”</font>

```plain
public class Actor {
    public final void show() {

    }
}
```

<font style="color:rgb(44, 62, 80);">“当我们想要重写该方法的话，就会出现编译错误。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350690987-49fc18bf-54cf-430a-a784-c5a7cb9434ea.png" />


<font style="color:rgb(44, 62, 80);">“一个类是 final 的，和一个类不是 final，但它所有的方法都是 final 的，考虑一下，它们之间有什么区别？”</font>

<font style="color:rgb(44, 62, 80);">“我能想到的一点，就是前者不能被</font>[<font style="color:rgb(44, 62, 80);">继承</font>](https://javabetter.cn/oo/extends-bigsai.html)<font style="color:rgb(44, 62, 80);">，也就是说方法无法被重写；后者呢，可以被继承，然后追加一些非 final 的方法。”</font>



### <font style="color:rgb(44, 62, 80);">final 类</font>

<font style="color:rgb(44, 62, 80);">“如果一个类使用了 final 关键字修饰，那么它就无法被继承.....”</font>

<font style="color:rgb(44, 62, 80);">“等等，哥，我知道，String 类就是一个 final 类。”还没等我说完，三妹就抢着说到。</font>

<font style="color:rgb(44, 62, 80);">“说得没毛病。”</font>

```plain
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence,
               Constable, ConstantDesc {}
```

<font style="color:rgb(44, 62, 80);">“那三妹你知道为什么 String 类要设计成 final 吗？”</font>

<font style="color:rgb(44, 62, 80);">“这个还真不知道。”三妹的表情透露出这种无奈。</font>

<font style="color:rgb(44, 62, 80);">“原因大致有 3 个。”</font>

+ <font style="color:rgb(44, 62, 80);">为了实现字符串常量池</font>
+ <font style="color:rgb(44, 62, 80);">为了线程安全</font>
+ <font style="color:rgb(44, 62, 80);">为了 HashCode 的不可变性</font>

<font style="color:rgb(44, 62, 80);">“想了解更详细的原因，可以一会看看我之前写的这篇文章。”</font>

[<font style="color:rgb(44, 62, 80);">为什么 Java 字符串是不可变的？</font>](https://javabetter.cn/string/immutable.html)

<font style="color:rgb(44, 62, 80);">“任何尝试从 final 类继承的行为将会引发编译错误。来看这段代码。”</font>

```plain
public final class Writer {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

<font style="color:rgb(44, 62, 80);">“尝试去继承它，编译器会提示以下错误，Writer 类是 final 的，无法继承。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350691179-0940b820-1825-4dab-8fd1-e5d6b44d5825.png" />


<font style="color:rgb(44, 62, 80);">“不过，类是 final 的，并不意味着该类的对象是不可变的。”</font>

<font style="color:rgb(44, 62, 80);">“来看这段代码。”</font>

```plain
Writer writer = new Writer();
writer.setName("沉默王二");
System.out.println(writer.getName()); // 沉默王二
```

<font style="color:rgb(44, 62, 80);">“Writer 的 name 字段的默认值是 null，但可以通过 settter 方法将其更改为沉默王二。也就是说，如果一个类只是 final 的，那么它并不是不可变的全部条件。”</font>

<font style="color:rgb(44, 62, 80);">“关于不可变类，我们留到后面来细讲。”</font>

[<font style="color:rgb(44, 62, 80);">不可变类</font>](https://javabetter.cn/basic-extra-meal/immutable.html)

<font style="color:rgb(44, 62, 80);">“把一个类设计成 final 的，有其安全方面的考虑，但不应该故意为之，因为把一个类定义成 final 的，意味着它没办法继承，假如这个类的一些方法存在一些问题的话，我们就无法通过重写的方式去修复它。”</font>

<font style="color:rgb(44, 62, 80);">“三妹，final 关键字我们就学到这里吧，你一会再学习一下 Java 字符串为什么是不可变的和不可变类。”我揉一揉犯困的双眼，疲惫地给三妹说，“学完这两个知识点，你会对 final 的认知更清晰一些。”</font>

<font style="color:rgb(44, 62, 80);">“好的，二哥，我这就去学习去。你去休息会。”</font>

<font style="color:rgb(44, 62, 80);">我起身站到阳台上，看着窗外的车水马龙，不一会儿，就发起来呆。</font>

<font style="color:rgb(44, 62, 80);">“好想去再看一场周杰伦的演唱会，不知道 2021 有没有这个机会。”</font>

<font style="color:rgb(44, 62, 80);">我心里这样想着，天渐渐地暗了下来。</font>



## instanceof 关键字

<font style="color:rgb(44, 62, 80);">instanceof 关键字的用法其实很简单：</font>

```plain
(object) instanceof (type)
```

<font style="color:rgb(44, 62, 80);">用意也非常简单，判断对象是否符合指定的类型，结果要么是 true，要么是 false。在</font>[<font style="color:rgb(44, 62, 80);">反序列化</font>](https://javabetter.cn/io/serialize.html)<font style="color:rgb(44, 62, 80);">的时候，instanceof 操作符还是蛮常用的，因为这时候我们不太确定对象属不属于指定的类型，如果不进行判断的话，就容易抛出 ClassCastException 异常。</font>

<font style="color:rgb(44, 62, 80);">我们来建这样一个简单的类 Round：</font>

```plain
class Round {
}
```

<font style="color:rgb(44, 62, 80);">然后新增一个扩展类 Ring：</font>

```plain
class Ring extends Round {
}
```

<font style="color:rgb(44, 62, 80);">这时候，我们就可以通过 instanceof 来检查 Ring 对象是否属于 Round 类型。</font>

```plain
Ring ring = new Ring();
System.out.println(ring instanceof Round);
```

<font style="color:rgb(44, 62, 80);">结果会输出 true，因为 Ring 继承了 Round，也就意味着 Ring 和 Round 符合</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">is-a</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的关系，而 instanceof 操作符正是基于类与类之间的继承关系，以及类与接口之间的实现关系的。</font>

<font style="color:rgb(44, 62, 80);">我们再来新建一个接口 Shape：</font>

```plain
interface Shape {
}
```

<font style="color:rgb(44, 62, 80);">然后新建 Circle 类实现 Shape 接口并继承 Round 类：</font>

```plain
class Circle extends Round implements Shape {
}
```

<font style="color:rgb(44, 62, 80);">如果对象是由该类创建的，那么 instanceof 的结果肯定为 true。</font>

```plain
Circle circle = new Circle();
System.out.println(circle instanceof Circle);
```

<font style="color:rgb(44, 62, 80);">这个肯定没毛病，instanceof 就是干这个活的，大家也很好理解。那如果类型是父类呢？</font>

```plain
System.out.println(circle instanceof Round);
```

<font style="color:rgb(44, 62, 80);">结果肯定还是 true，因为依然符合</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">is-a</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的关系。那如果类型为接口呢？</font>

```plain
System.out.println(circle instanceof Shape);
```

<font style="color:rgb(44, 62, 80);">结果仍然为 true， 因为也符合</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">is-a</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的关系。如果要比较的对象和要比较的类型之间没有关系，当然是不能使用 instanceof 进行比较的。</font>

<font style="color:rgb(44, 62, 80);">为了验证这一点，我们来创建一个实现了 Shape 但与 Circle 无关的 Triangle 类：</font>

```plain
class Triangle implements Shape {
}
```

<font style="color:rgb(44, 62, 80);">这时候，再使用 instanceof 进行比较的话，编译器就报错了。</font>

```plain
System.out.println(circle instanceof Triangle);
```

<font style="color:rgb(44, 62, 80);">错误信息如下所示：</font>

```plain
Inconvertible types; cannot cast 'com.itwanger.twentyfour.instanceof1.Circle' to 'com.itwanger.twentyfour.instanceof1.Triangle'
```

<font style="color:rgb(44, 62, 80);">意思就是类型不匹配，不能转换，我们使用 instanceof 比较的目的，也就是希望如果结果为 true 的时候能进行类型转换。但显然 Circle 不能转为 Triangle。</font>

<font style="color:rgb(44, 62, 80);">编译器已经提前帮我们预知了，很聪明。</font>

<font style="color:rgb(44, 62, 80);">Java 是一门面向对象的编程语言，也就意味着除了基本数据类型，所有的类都会隐式继承 Object 类。所以下面的结果肯定也会输出 true。</font>

```plain
Thread thread = new Thread();
System.out.println(thread instanceof Object);
```

<font style="color:rgb(44, 62, 80);">“那如果对象为 null 呢？”我这时候插话了。</font>

<font style="color:rgb(44, 62, 80);">“这个还真的是一个好问题啊。”三妹忍不住对我竖了一个大拇指。</font>

```plain
System.out.println(null instanceof Object);
```

<font style="color:rgb(44, 62, 80);">只有对象才会有 null 值，所以编译器是不会报错的，只不过，对于 null 来说，instanceof 的结果为 false。因为所有的对象都可以为 null，所以也不好确定 null 到底属于哪一个类。</font>

<font style="color:rgb(44, 62, 80);">通常，我们是这样使用 instanceof 操作符的。</font>

```plain
// 先判断类型
if (obj instanceof String) {
    // 然后强制转换
    String s = (String) obj;
    // 然后才能使用
}
```

<font style="color:rgb(44, 62, 80);">先用 instanceof 进行类型判断，然后再把 obj 强制转换成我们期望的类型再进行使用。</font>

<font style="color:rgb(44, 62, 80);">JDK 16 的时候，instanceof 模式匹配转了正，意味着使用 instanceof 的时候更便捷了。</font>

```plain
if (obj instanceof String s) {
    // 如果类型匹配 直接使用 s
}
```

<font style="color:rgb(44, 62, 80);">可以直接在 if 条件判断类型的时候添加一个变量，就不需要再强转和声明新的变量了。</font>

<font style="color:rgb(44, 62, 80);">“哇，这样就简洁了呀！”为了配合三妹，我不仅惊叹到！</font>

<font style="color:rgb(44, 62, 80);">“好了，关于 instanceof 操作符我们就先讲到这吧，难是一点都不难，希望哥也能够很好的掌握。”三妹笑嘻嘻地说，看来她很享受这个讲的过程嘛。</font>

<font style="color:rgb(44, 62, 80);"></font>

```java
// RandomAccess 接口 一个标记接口，官方解释是只要List实现这个接口，就能支持快速随机访问
```



## 不可变对象

<font style="color:rgb(44, 62, 80);">二哥，你能给我说说为什么 String 是 immutable 类（不可变对象）吗？</font>

### <font style="color:rgb(44, 62, 80);">什么是不可变类</font>

<font style="color:rgb(44, 62, 80);">一个类的对象在通过构造方法创建后如果状态不会再被改变，那么它就是一个不可变（immutable）类。它的所有成员变量的赋值仅在构造方法中完成，不会提供任何 setter 方法供外部类去修改。</font>

<font style="color:rgb(44, 62, 80);">自从有了多线程，生产力就被无限地放大了，所有的程序员都爱它，因为强大的硬件能力被充分地利用了。但与此同时，所有的程序员都对它心生忌惮，因为一不小心，多线程就会把对象的状态变得混乱不堪。</font>

<font style="color:rgb(44, 62, 80);">为了保护状态的原子性、可见性、有序性，我们程序员可以说是竭尽所能。其中，synchronized（同步）关键字是最简单最入门的一种解决方案。</font>

<font style="color:rgb(44, 62, 80);">假如说类是不可变的，那么对象的状态就也是不可变的。这样的话，每次修改对象的状态，就会产生一个新的对象供不同的线程使用，我们程序员就不必再担心并发问题了。</font>

### <font style="color:rgb(44, 62, 80);">常见的不可变类</font>

<font style="color:rgb(44, 62, 80);">提到不可变类，几乎所有的程序员第一个想到的，就是 String 类。那为什么 String 类要被设计成不可变的呢？</font>

#### <font style="color:rgb(44, 62, 80);">常量池的需要</font>

[<font style="color:rgb(44, 62, 80);">字符串常量池</font>](https://javabetter.cn/string/constant-pool.html)<font style="color:rgb(44, 62, 80);">是 Java 堆内存中一个特殊的存储区域，当创建一个 String 对象时，假如此字符串在常量池中不存在，那么就创建一个；假如已经存，就不会再创建了，而是直接引用已经存在的对象。这样做能够减少 JVM 的内存开销，提高效率。</font>

#### <font style="color:rgb(44, 62, 80);">hashCode 需要</font>

<font style="color:rgb(44, 62, 80);">因为字符串是不可变的，所以在它创建的时候，其 hashCode 就被缓存了，因此非常适合作为哈希值（比如说作为</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的键），多次调用只返回同一个值，来提高效率。</font>

#### <font style="color:rgb(44, 62, 80);">线程安全</font>

<font style="color:rgb(44, 62, 80);">就像之前说的那样，如果对象的状态是可变的，那么在多线程环境下，就很容易造成不可预期的结果。而 String 是不可变的，就可以在多个线程之间共享，不需要同步处理。</font>

<font style="color:rgb(44, 62, 80);">因此，当我们调用 String 类的任何方法（比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">trim()</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">substring()</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">toLowerCase()</font>`<font style="color:rgb(44, 62, 80);">）时，总会返回一个新的对象，而不影响之前的值。</font>

```plain
String cmower = "沉默王二，一枚有趣的程序员";
cmower.substring(0,4);
System.out.println(cmower);// 沉默王二，一枚有趣的程序员
```

<font style="color:rgb(44, 62, 80);">虽然调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">substring()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法对 cmower 进行了截取，但 cmower 的值没有改变。</font>

<font style="color:rgb(44, 62, 80);">除了 String 类，包装器类 Integer、Long 等也是不可变类。</font>

### <font style="color:rgb(44, 62, 80);">手撸一个不可变类</font>

<font style="color:rgb(44, 62, 80);">看懂一个不可变类也许容易，但要创建一个自定义的不可变类恐怕就有点难了。但知难而进是我们作为一名优秀的程序员不可或缺的品质，正因为不容易，我们才能真正地掌握它。</font>

<font style="color:rgb(44, 62, 80);">接下来，就请和我一起，来自定义一个不可变类吧。一个不可变类，必须要满足以下 4 个条件：</font>

**<font style="color:rgb(44, 62, 80);">1）确保类是 final 的</font>**<font style="color:rgb(44, 62, 80);">，不允许被其他类继承*。</font>

**<font style="color:rgb(44, 62, 80);">2）确保所有的成员变量（字段）是 final 的</font>**<font style="color:rgb(44, 62, 80);">，这样的话，它们就只能在构造方法中初始化值，并且不会在随后被修改。</font>

**<font style="color:rgb(44, 62, 80);">3）不要提供任何 setter 方法</font>**<font style="color:rgb(44, 62, 80);">。</font>

**<font style="color:rgb(44, 62, 80);">4）如果要修改类的状态，必须返回一个新的对象</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">按照以上条件，我们来自定义一个简单的不可变类 Writer。</font>

```plain
public final class Writer {
    private final String name;
    private final int age;

    public Writer(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }
}
```

<font style="color:rgb(44, 62, 80);">Writer 类是 final 的，name 和 age 也是 final 的，没有 setter 方法。</font>

<font style="color:rgb(44, 62, 80);">OK，据说这个作者分享了很多博客，广受读者的喜爱，因此某某出版社找他写了一本书（Book）。Book 类是这样定义的：</font>

```plain
public class Book {
    private String name;
    private int price;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Book{" +
                "name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
```

<font style="color:rgb(44, 62, 80);">2 个字段，分别是 name 和 price，以及 getter 和 setter，重写后的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">toString()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。然后，在 Writer 类中追加一个可变对象字段 book。</font>

```plain
public final class Writer {
    private final String name;
    private final int age;
    private final Book book;

    public Writer(String name, int age, Book book) {
        this.name = name;
        this.age = age;
        this.book = book;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public Book getBook() {
        return book;
    }
}
```

<font style="color:rgb(44, 62, 80);">并在构造方法中追加了 Book 参数，以及 Book 的 getter 方法。</font>

<font style="color:rgb(44, 62, 80);">完成以上工作后，我们来新建一个测试类，看看 Writer 类的状态是否真的不可变。</font>

```plain
public class WriterDemo {
    public static void main(String[] args) {
        Book book = new Book();
        book.setName("二哥的 Java 进阶之路");
        book.setPrice(79);

        Writer writer = new Writer("沉默王二",18, book);
        System.out.println("定价：" + writer.getBook());
        writer.getBook().setPrice(59);
        System.out.println("促销价：" + writer.getBook());
    }
}
```

<font style="color:rgb(44, 62, 80);">程序输出的结果如下所示：</font>

```plain
定价：Book{name='二哥的 Java 进阶之路', price=79}
促销价：Book{name='二哥的 Java 进阶之路', price=59}
```

<font style="color:rgb(44, 62, 80);">糟糕，Writer 类的不可变性被破坏了，价格发生了变化。为了解决这个问题，我们需要为不可变类的定义规则追加一条内容：</font>

<font style="color:rgb(44, 62, 80);">如果一个不可变类中包含了可变类的对象，那么就需要确保返回的是可变对象的副本。也就是说，Writer 类中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">getBook()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法应该修改为：</font>

```plain
public Book getBook() {
    Book clone = new Book();
    clone.setPrice(this.book.getPrice());
    clone.setName(this.book.getName());
    return clone;
}
```

<font style="color:rgb(44, 62, 80);">这样的话，构造方法初始化后的 Book 对象就不会再被修改了。此时，运行 WriterDemo，就会发现价格不再发生变化了。</font>

```plain
定价：Book{name='二哥的 Java 进阶之路', price=79}
促销价：Book{name='二哥的 Java 进阶之路', price=79}
```

### <font style="color:rgb(44, 62, 80);">总结</font>

<font style="color:rgb(44, 62, 80);">不可变类有很多优点，就像之前提到的 String 类那样，尤其是在多线程环境下，它非常的安全。尽管每次修改都会创建一个新的对象，增加了内存的消耗，但这个缺点相比它带来的优点，显然是微不足道的——无非就是捡了西瓜，丢了芝麻。</font>

## 方法重写和方法重载

<font style="color:rgb(44, 62, 80);">“如果一个类有多个名字相同但参数个数不同的方法，我们通常称这些方法为方法重载。 ”我面带着朴实无华的微笑继续说，“如果方法的功能是一样的，但参数不同，使用相同的名字可以提高程序的可读性。”</font>

<font style="color:rgb(44, 62, 80);">“如果子类具有和父类一样的方法（参数相同、返回类型相同、方法名相同，但方法体可能不同），我们称之为方法重写。 方法重写用于提供父类已经声明的方法的特殊实现，是实现多态的基础条件。”</font>

<font style="color:rgb(44, 62, 80);">“只不过，方法重载与方法重写在名字上很相似，就像是兄弟俩，导致初学者经常把它们俩搞混。”</font>

<font style="color:rgb(44, 62, 80);">“方法重载的英文名叫 Overloading，方法重写的英文名叫 Overriding，因此，不仅中文名很相近，英文名之间也很相近，这就更容易让初学者搞混了。”</font>

<font style="color:rgb(44, 62, 80);">“但两者其实是完全不同的！通过下面这张图，你就能看得一清二楚。”</font>

<font style="color:rgb(44, 62, 80);">话音刚落，我就在 IDEA 中噼里啪啦地敲了起来。两段代码，分别是方法重写和方法重载。然后，把这两段代码截图到 draw.io（一个很漂亮的在线画图网站）上，加了一些文字说明。最后，打开 Photoscape X，把两张图片合并到了一起。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350732539-bcb1c6d8-d6a0-47e9-b470-54bf44b1321d.png" />


### <font style="color:rgb(44, 62, 80);">方法重载</font>

<font style="color:rgb(44, 62, 80);">“三妹，你仔细听哦。”我缓了一口气后继续说道。</font>

<font style="color:rgb(44, 62, 80);">“在 Java 中，有两种方式可以达到方法重载的目的。”</font>

<font style="color:rgb(44, 62, 80);">“第一，改变参数的数目。来看下面这段代码。”</font>

```plain
public class OverloadingByParamNum {
    public static void main(String[] args) {
        System.out.println(Adder.add(10, 19));
        System.out.println(Adder.add(10, 19, 20));
    }
}

class Adder {
    static int add(int a, int b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

<font style="color:rgb(44, 62, 80);">“Adder 类有两个方法，第一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法有两个参数，在调用的时候可以传递两个参数；第二个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法有三个参数，在调用的时候可以传递三个参数。”</font>

<font style="color:rgb(44, 62, 80);">“二哥，这样的代码不会显得啰嗦吗？如果有四个参数的时候就再追加一个方法？”三妹突然提了一个很尖锐的问题。</font>

<font style="color:rgb(44, 62, 80);">“那倒是，这个例子只是为了说明方法重载的一种类型。如果参数类型相同的话，Java 提供了可变参数的方式，就像下面这样。”</font>

```plain
static int add(int ... args) {
    int sum = 0;
    for ( int a: args) {
        sum += a;
    }
    return sum;
}
```

<font style="color:rgb(44, 62, 80);">“第二，通过改变参数类型，也可以达到方法重载的目的。来看下面这段代码。”</font>

```plain
public class OverloadingByParamType {
    public static void main(String[] args) {
        System.out.println(Adder.add(10, 19));
        System.out.println(Adder.add(10.1, 19.2));
    }
}

class Adder {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }
}
```

<font style="color:rgb(44, 62, 80);">“Adder 类有两个方法，第一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的参数类型为 int，第二个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的参数类型为 double。”</font>

<font style="color:rgb(44, 62, 80);">“二哥，改变参数的数目和类型都可以实现方法重载，为什么改变方法的返回值类型就不可以呢？”三妹很能抓住问题的重点嘛。</font>

<font style="color:rgb(44, 62, 80);">“因为仅仅改变返回值类型的话，会把编译器搞懵逼的。”我略带调皮的口吻回答她。</font>

<font style="color:rgb(44, 62, 80);">“编译时报错优于运行时报错，所以当两个方法的名字相同，参数个数和类型也相同的时候，虽然返回值类型不同，但依然会提示方法已经被定义的错误。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350732414-1336d617-2aa4-4f20-b8a2-63448c9f25c5.png" />


<font style="color:rgb(44, 62, 80);">“你想啊，三妹。我们在调用一个方法的时候，可以指定返回值类型，也可以不指定。当不指定的时候，直接指定</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add(1, 2)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候，编译器就不知道该调用返回 int 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法还是返回 double 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，产生了歧义。”</font>

<font style="color:rgb(44, 62, 80);">“方法的返回值只是作为方法运行后的一个状态，它是保持方法的调用者和被调用者进行通信的一个纽带，但并不能作为某个方法的‘标识’。”</font>

<font style="color:rgb(44, 62, 80);">“二哥，我想到了一个点，</font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法可以重载吗？”</font>

<font style="color:rgb(44, 62, 80);">“三妹，这是个好问题啊！答案是肯定的，毕竟</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法也是个方法，只不过，Java 虚拟机在运行的时候只会调用带有 String 数组的那个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。”</font>

```plain
public class OverloadingMain {
    public static void main(String[] args) {
        System.out.println("String[] args");
    }

    public static void main(String args) {
        System.out.println("String args");
    }

    public static void main() {
        System.out.println("无参");
    }
}
```

<font style="color:rgb(44, 62, 80);">“第一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的参数形式为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String[] args</font>`<font style="color:rgb(44, 62, 80);">，是最标准的写法；第二个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的参数形式为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String args</font>`<font style="color:rgb(44, 62, 80);">，少了中括号；第三个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法没有参数。”</font>

<font style="color:rgb(44, 62, 80);">“来看一下程序的输出结果。”</font>

```plain
String[] args
```

<font style="color:rgb(44, 62, 80);">“从结果中，我们可以看得出，尽管</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法可以重载，但程序只认标准写法。”</font>

<font style="color:rgb(44, 62, 80);">“由于可以通过改变参数类型的方式实现方法重载，那么当传递的参数没有找到匹配的方法时，就会发生隐式的类型转换。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350732535-b6bf378c-55d0-4c95-bfde-9c55bea83183.png" />


<font style="color:rgb(44, 62, 80);">“如上图所示，byte 可以向上转换为 short、int、long、float 和 double，short 可以向上转换为 int、long、float 和 double，char 可以向上转换为 int、long、float 和 double，依次类推。”</font>

<font style="color:rgb(44, 62, 80);">“三妹，来看下面这个示例。”</font>

```plain
public class OverloadingTypePromotion {
    void sum(int a, long b) {
        System.out.println(a + b);
    }

    void sum(int a, int b, int c) {
        System.out.println(a + b + c);
    }

    public static void main(String args[]) {
        OverloadingTypePromotion obj = new OverloadingTypePromotion();
        obj.sum(20, 20);
        obj.sum(20, 20, 20);
    }
}
```

<font style="color:rgb(44, 62, 80);">“执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">obj.sum(20, 20)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候，发现没有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">sum(int a, int b)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的方法，所以此时第二个 20 向上转型为 long，所以调用的是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">sum(int a, long b)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的方法。”</font>

<font style="color:rgb(44, 62, 80);">“再来看一个示例。”</font>

```plain
public class OverloadingTypePromotion1 {
    void sum(int a, int b) {
        System.out.println("int");
    }

    void sum(long a, long b) {
        System.out.println("long");
    }

    public static void main(String args[]) {
        OverloadingTypePromotion1 obj = new OverloadingTypePromotion1();
        obj.sum(20, 20);
    }
}
```

<font style="color:rgb(44, 62, 80);">“执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">obj.sum(20, 20)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候，发现有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">sum(int a, int b)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的方法，所以就不会向上转型为 long。”</font>

<font style="color:rgb(44, 62, 80);">“来看一下程序的输出结果。”</font>

```plain
int
```

<font style="color:rgb(44, 62, 80);">“继续来看示例。”</font>

```plain
public class OverloadingTypePromotion2 {
    void sum(long a, int b) {
        System.out.println("long int");
    }

    void sum(int a, long b) {
        System.out.println("int long");
    }

    public static void main(String args[]) {
        OverloadingTypePromotion2 obj = new OverloadingTypePromotion2();
        obj.sum(20, 20);
    }
}
```

<font style="color:rgb(44, 62, 80);">“二哥，我又想到一个问题。当有两个方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">sum(long a, int b)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">sum(int a, long b)</font>`<font style="color:rgb(44, 62, 80);">，参数个数相同，参数类型相同，只不过位置不同的时候，会发生什么呢？”</font>

<font style="color:rgb(44, 62, 80);">“当通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">obj.sum(20, 20)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来调用 sum 方法的时候，编译器会提示错误。”</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350732604-ac994847-2f67-4b4a-a372-4bf74ce569e8.png" />


<font style="color:rgb(44, 62, 80);">“不明确，编译器会很为难，究竟是把第一个 20 从 int 转成 long 呢，还是把第二个 20 从 int 转成 long，智障了！所以，不能写这样让编译器左右为难的代码。”</font>

### <font style="color:rgb(44, 62, 80);">方法重写</font>

<font style="color:rgb(44, 62, 80);">“在 Java 中，方法重写需要满足以下三个规则。”</font>

+ <font style="color:rgb(44, 62, 80);">重写的方法必须和父类中的方法有着相同的名字；</font>
+ <font style="color:rgb(44, 62, 80);">重写的方法必须和父类中的方法有着相同的参数；</font>
+ <font style="color:rgb(44, 62, 80);">必须是 is-a 的关系（继承关系）。</font>

<font style="color:rgb(44, 62, 80);">“来看下面这段代码。”</font>

```plain
public class Bike extends Vehicle {
    public static void main(String[] args) {
        Bike bike = new Bike();
        bike.run();
    }
}

class Vehicle {
    void run() {
        System.out.println("车辆在跑");
    }
}
```

<font style="color:rgb(44, 62, 80);">“来看一下程序的输出结果。”</font>

```plain
车辆在跑
```

<font style="color:rgb(44, 62, 80);">“Bike is-a Vehicle，自行车是一种车，没错。Vehicle 类有一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">run()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的方法，也就是说车辆可以跑，Bike 继承了 Vehicle，也可以跑。但如果 Bike 没有重写</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">run()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的话，自行车就只能是‘车辆在跑’，而不是‘自行车在跑’，对吧？”</font>

<font style="color:rgb(44, 62, 80);">“如果有了方法重写，一切就好办了。”</font>

```plain
public class Bike extends Vehicle {
    @Override
    void run() {
        System.out.println("自行车在跑");
    }

    public static void main(String[] args) {
        Bike bike = new Bike();
        bike.run();
    }
}

class Vehicle {
    void run() {
        System.out.println("车辆在跑");
    }
}
```

<font style="color:rgb(44, 62, 80);">我把鼠标移动到 Bike 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">run()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，对三妹说：“你看，在方法重写的时候，IDEA 会建议使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">@Override</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">注解，显式的表示这是一个重写后的方法，尽管可以缺省。”</font>

<font style="color:rgb(44, 62, 80);">“来看一下程序的输出结果。”</font>

```plain
自行车在跑
```

<font style="color:rgb(44, 62, 80);">“Bike 重写了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">run()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，也就意味着，Bike 可以跑出自己的风格。”</font>

<font style="color:rgb(44, 62, 80);">好，接下来说一下重写时应当遵守的 12 条规则，应当谨记哦。</font>

#### [<font style="color:rgb(44, 62, 80);">规则一：只能重写继承过来的方法。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E4%B8%80-%E5%8F%AA%E8%83%BD%E9%87%8D%E5%86%99%E7%BB%A7%E6%89%BF%E8%BF%87%E6%9D%A5%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82)

<font style="color:rgb(44, 62, 80);">因为重写是在子类重新实现从父类</font>[<font style="color:rgb(44, 62, 80);">继承</font>](https://javabetter.cn/oo/extends-bigsai.html)<font style="color:rgb(44, 62, 80);">过来的方法时发生的，所以只能重写继承过来的方法，这很好理解。这就意味着，只能重写那些被 public、protected 或者 default 修饰的方法，private 修饰的方法无法被重写。</font>

<font style="color:rgb(44, 62, 80);">Animal 类有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">move()</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">eat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">sleep()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">三个方法：</font>

```plain
public class Animal {
    public void move() { }

    protected void eat() { }
    
    void sleep(){ }
}
```

<font style="color:rgb(44, 62, 80);">Dog 类来重写这三个方法：</font>

```plain
public class Dog extends Animal {
    public void move() { }

    protected void eat() { }

    void sleep(){ }
}
```

<font style="color:rgb(44, 62, 80);">OK，完全没有问题。但如果父类中的方法是 private 的，就行不通了。</font>

```plain
public class Animal {
    private void move() { }
}
```

<font style="color:rgb(44, 62, 80);">此时，Dog 类中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">move()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法就不再是一个重写方法了，因为父类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">move()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法是 private 的，对子类并不可见。</font>

```plain
public class Dog extends Animal {
    public void move() { }
}
```

#### [<font style="color:rgb(44, 62, 80);">规则二：final、static 的方法不能被重写。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E4%BA%8C-final%E3%80%81static-%E7%9A%84%E6%96%B9%E6%B3%95%E4%B8%8D%E8%83%BD%E8%A2%AB%E9%87%8D%E5%86%99%E3%80%82)

<font style="color:rgb(44, 62, 80);">一个方法是</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">final</font>](https://javabetter.cn/oo/final.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的就意味着它无法被子类继承到，所以就没办法重写。</font>

```plain
public class Animal {
    final void move() { }
}
```

<font style="color:rgb(44, 62, 80);">由于父类 Animal 中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">move()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是 final 的，所以子类在尝试重写该方法的时候就出现编译错误了！</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350732676-008e612e-dcfb-4df1-acd1-8fc631f3a28d.png" />


<font style="color:rgb(44, 62, 80);">同样的，如果一个方法是</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">static</font>](https://javabetter.cn/oo/static.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的，也不允许重写，因为静态方法可用于父类以及子类的所有实例。</font>

```plain
public class Animal {
    final void move() { }
}
```

<font style="color:rgb(44, 62, 80);">重写的目的在于根据对象的类型不同而表现出多态，而静态方法不需要创建对象就可以使用。没有了对象，重写所需要的“对象的类型”也就没有存在的意义了。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350734086-b5e2f76a-7f59-447c-9efe-414c02395316.png" />


#### [<font style="color:rgb(44, 62, 80);">规则三：重写的方法必须有相同的参数列表。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E4%B8%89-%E9%87%8D%E5%86%99%E7%9A%84%E6%96%B9%E6%B3%95%E5%BF%85%E9%A1%BB%E6%9C%89%E7%9B%B8%E5%90%8C%E7%9A%84%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8%E3%80%82)

```plain
public class Animal {
    void eat(String food) { }
}
```

<font style="color:rgb(44, 62, 80);">Dog 类中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">eat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法保持了父类方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">eat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的同一个调调，都有一个参数——String 类型的 food。</font>

```plain
public class Dog extends Animal {
    public void eat(String food) { }
}
```

<font style="color:rgb(44, 62, 80);">一旦子类没有按照这个规则来，比如说增加了一个参数：</font>

```plain
public class Dog extends Animal {
    public void eat(String food, int amount) { }
}
```

<font style="color:rgb(44, 62, 80);">这就不再是重写的范畴了，当然也不是重载的范畴，因为重载考虑的是同一个类。</font>

**<font style="color:rgb(44, 62, 80);">规则四：重写的方法必须返回相同的类型</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">父类没有返回类型：</font>

```plain
public class Animal {
    void eat(String food) { }
}
```

<font style="color:rgb(44, 62, 80);">子类尝试返回 String：</font>

```plain
public class Dog extends Animal {
    public String eat(String food) {
        return null;
    }
}
```

<font style="color:rgb(44, 62, 80);">于是就编译出错了（返回类型不兼容）。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350733940-1163eb91-462b-4b80-9ea9-4be09d7f8f2c.png" />


#### [<font style="color:rgb(44, 62, 80);">规则五：重写的方法不能使用限制等级更严格的权限修饰符。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E4%BA%94-%E9%87%8D%E5%86%99%E7%9A%84%E6%96%B9%E6%B3%95%E4%B8%8D%E8%83%BD%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6%E7%AD%89%E7%BA%A7%E6%9B%B4%E4%B8%A5%E6%A0%BC%E7%9A%84%E6%9D%83%E9%99%90%E4%BF%AE%E9%A5%B0%E7%AC%A6%E3%80%82)

<font style="color:rgb(44, 62, 80);">可以这样来理解：</font>

+ <font style="color:rgb(44, 62, 80);">如果被重写的方法是 default，那么重写的方法可以是 default、protected 或者 public。</font>
+ <font style="color:rgb(44, 62, 80);">如果被重写的方法是 protected，那么重写的方法只能是 protected 或者 public。</font>
+ <font style="color:rgb(44, 62, 80);">如果被重写的方法是 public， 那么重写的方法就只能是 public。</font>

<font style="color:rgb(44, 62, 80);">举个例子，父类中的方法是 protected：</font>

```plain
public class Animal {
    protected void eat() { }
}
```

<font style="color:rgb(44, 62, 80);">子类中的方法可以是 public：</font>

```plain
public class Dog extends Animal {
    public void eat() { }
}
```

<font style="color:rgb(44, 62, 80);">如果子类中的方法用了更严格的权限修饰符，编译器就报错了。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727350734009-24a69197-e598-45b9-96d9-e25c370fbac0.png" />


#### [<font style="color:rgb(44, 62, 80);">规则六：重写后的方法不能抛出比父类中更高级别的异常。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E5%85%AD-%E9%87%8D%E5%86%99%E5%90%8E%E7%9A%84%E6%96%B9%E6%B3%95%E4%B8%8D%E8%83%BD%E6%8A%9B%E5%87%BA%E6%AF%94%E7%88%B6%E7%B1%BB%E4%B8%AD%E6%9B%B4%E9%AB%98%E7%BA%A7%E5%88%AB%E7%9A%84%E5%BC%82%E5%B8%B8%E3%80%82)

<font style="color:rgb(44, 62, 80);">举例来说，如果父类中的方法抛出的是 IOException，那么子类中重写的方法不能抛出 Exception，可以是 IOException 的子类或者不抛出任何</font>[<font style="color:rgb(44, 62, 80);">异常</font>](https://javabetter.cn/exception/gailan.html)<font style="color:rgb(44, 62, 80);">。这条规则只适用于可检查的异常。</font>

<font style="color:rgb(44, 62, 80);">可检查（checked）异常必须在源代码中显式地进行捕获处理，不检查（unchecked）异常就是所谓的运行时异常，比如说 NullPointerException、ArrayIndexOutOfBoundsException 之类的，不会在编译器强制要求。</font>

<font style="color:rgb(44, 62, 80);">父类抛出 IOException：</font>

```plain
public class Animal {
    protected void eat() throws IOException { }
}
```

<font style="color:rgb(44, 62, 80);">子类抛出 FileNotFoundException 是可以满足重写的规则的，因为 FileNotFoundException 是 IOException 的子类。</font>

```plain
public class Dog extends Animal {
   public void eat() throws FileNotFoundException { }
}
```

<font style="color:rgb(44, 62, 80);">如果子类抛出了一个新的异常，并且是一个 checked 异常：</font>

```plain
public class Dog extends Animal {
   public void eat() throws FileNotFoundException, InterruptedException { }
}
```

<font style="color:rgb(44, 62, 80);">那编译器就会提示错误：</font>

```plain
Error:(9, 16) java: com.itwanger.overriding.Dog中的eat()无法覆盖com.itwanger.overriding.Animal中的eat()
  被覆盖的方法未抛出java.lang.InterruptedException
```

<font style="color:rgb(44, 62, 80);">但如果子类抛出的是一个 unchecked 异常，那就没有冲突：</font>

```plain
public class Dog extends Animal {
   public void eat() throws FileNotFoundException, IllegalArgumentException { }
}
```

<font style="color:rgb(44, 62, 80);">如果子类抛出的是一个更高级别的异常：</font>

```plain
public class Dog extends Animal {
   public void eat() throws Exception { }
}
```

<font style="color:rgb(44, 62, 80);">编译器同样会提示错误，因为 Exception 是 IOException 的父类。</font>

```plain
Error:(9, 16) java: com.itwanger.overriding.Dog中的eat()无法覆盖com.itwanger.overriding.Animal中的eat()
  被覆盖的方法未抛出java.lang.Exception
```

#### [<font style="color:rgb(44, 62, 80);">规则七：可以在子类中通过 super 关键字来调用父类中被重写的方法。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E4%B8%83-%E5%8F%AF%E4%BB%A5%E5%9C%A8%E5%AD%90%E7%B1%BB%E4%B8%AD%E9%80%9A%E8%BF%87-super-%E5%85%B3%E9%94%AE%E5%AD%97%E6%9D%A5%E8%B0%83%E7%94%A8%E7%88%B6%E7%B1%BB%E4%B8%AD%E8%A2%AB%E9%87%8D%E5%86%99%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%82)

<font style="color:rgb(44, 62, 80);">子类继承父类的方法而不是重新实现是很常见的一种做法，在这种情况下，可以按照下面的形式调用父类的方法：</font>

```plain
super.overriddenMethodName();
```

<font style="color:rgb(44, 62, 80);">来看例子。</font>

```plain
public class Animal {
    protected void eat() { }
}
```

<font style="color:rgb(44, 62, 80);">子类重写了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">eat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，然后在子类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">eat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法中，可以在方法体的第一行通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">super.eat()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">调用父类的方法，然后再增加属于自己的代码。</font>

```plain
public class Dog extends Animal {
   public void eat() {
       super.eat();
       // Dog-eat
   }
}
```

#### [<font style="color:rgb(44, 62, 80);">规则八：构造方法不能被重写。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E5%85%AB-%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95%E4%B8%8D%E8%83%BD%E8%A2%AB%E9%87%8D%E5%86%99%E3%80%82)

<font style="color:rgb(44, 62, 80);">因为</font>[<font style="color:rgb(44, 62, 80);">构造方法</font>](https://javabetter.cn/oo/construct.html)<font style="color:rgb(44, 62, 80);">很特殊，而且子类的构造方法不能和父类的构造方法同名（类名不同），所以构造方法和重写之间没有任何关系。</font>

#### [<font style="color:rgb(44, 62, 80);">规则九：如果一个类继承了抽象类，抽象类中的抽象方法必须在子类中被重写。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E4%B9%9D-%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AA%E7%B1%BB%E7%BB%A7%E6%89%BF%E4%BA%86%E6%8A%BD%E8%B1%A1%E7%B1%BB-%E6%8A%BD%E8%B1%A1%E7%B1%BB%E4%B8%AD%E7%9A%84%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%E5%BF%85%E9%A1%BB%E5%9C%A8%E5%AD%90%E7%B1%BB%E4%B8%AD%E8%A2%AB%E9%87%8D%E5%86%99%E3%80%82)

<font style="color:rgb(44, 62, 80);">先来看这样一个接口：</font>

```plain
public interface Animal {
    void move();
}
```

<font style="color:rgb(44, 62, 80);">接口中的方法默认都是抽象方法，通过反编译是可以看得到的：</font>

```plain
public interface Animal
{
    public abstract void move();
}
```

<font style="color:rgb(44, 62, 80);">如果一个抽象类实现了 Animal 接口，</font>`<font style="color:rgb(44, 62, 80);">move()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法不是必须被重写的：</font>

```plain
public abstract class AbstractDog implements Animal {
    protected abstract void bark();
}
```

<font style="color:rgb(44, 62, 80);">但如果一个类继承了抽象类 AbstractDog，那么 Animal 接口中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">move()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法和抽象类 AbstractDog 中的抽象方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">bark()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">都必须被重写：</font>

```plain
public class BullDog extends AbstractDog {
 
    public void move() {}
 
    protected void bark() {}
}
```

#### [<font style="color:rgb(44, 62, 80);">规则十：synchronized 关键字对重写规则没有任何影响。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E5%8D%81-synchronized-%E5%85%B3%E9%94%AE%E5%AD%97%E5%AF%B9%E9%87%8D%E5%86%99%E8%A7%84%E5%88%99%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E5%BD%B1%E5%93%8D%E3%80%82)

[<font style="color:rgb(44, 62, 80);">synchronized 关键字</font>](https://javabetter.cn/thread/synchronized-1.html)<font style="color:rgb(44, 62, 80);">用于在多线程环境中获取和释放监听对象，因此它对重写规则没有任何影响，这就意味着 synchronized 方法可以去重写一个非同步方法。</font>

#### [<font style="color:rgb(44, 62, 80);">规则十一：strictfp 关键字对重写规则没有任何影响。</font>](https://javabetter.cn/basic-extra-meal/override-overload.html#%E8%A7%84%E5%88%99%E5%8D%81%E4%B8%80-strictfp-%E5%85%B3%E9%94%AE%E5%AD%97%E5%AF%B9%E9%87%8D%E5%86%99%E8%A7%84%E5%88%99%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E5%BD%B1%E5%93%8D%E3%80%82)

<font style="color:rgb(44, 62, 80);">如果你想让浮点运算更加精确，而且不会因为硬件平台的不同导致执行的结果不一致的话，可以在方法上添加 </font>[<font style="color:rgb(44, 62, 80);">strictfp 关键字，之前讲过</font>](https://javabetter.cn/basic-extra-meal/48-keywords.html)<font style="color:rgb(44, 62, 80);">。因此 </font>**<font style="color:rgb(44, 62, 80);">strictfp</font>**<font style="color:rgb(44, 62, 80);"> 关键字和重写规则无关。</font>

### <font style="color:rgb(44, 62, 80);">总结</font>

<font style="color:rgb(44, 62, 80);">“首先来说一下方法重载时的注意事项，‘两同一不同’。”</font>

<font style="color:rgb(44, 62, 80);">“‘两同’：在同一个类，方法名相同。”</font>

<font style="color:rgb(44, 62, 80);">“‘一不同’：参数不同。”</font>

<font style="color:rgb(44, 62, 80);">“再来说一下方法重写时的注意事项，‘两同一小一大’。”</font>

<font style="color:rgb(44, 62, 80);">“‘两同’：方法名相同，参数相同。”</font>

<font style="color:rgb(44, 62, 80);">“‘一小’：子类方法声明的异常类型要比父类小一些或者相等。”</font>

<font style="color:rgb(44, 62, 80);">“‘一大’：子类方法的访问权限应该比父类的更大或者相等。”</font>

<font style="color:rgb(44, 62, 80);">“记住了吧？三妹。带上口罩，拿好手机，咱准备出门吧。”今天限号，没法开车送三妹去学校了。</font>



## 枚举 - enum

### 定义

“枚举（enum），是 Java 1.5 时引入的关键字，它表示一种特殊类型的类，继承自 java.lang.Enum。”

枚举类与普通类不同之处 默认继承 java.lang.Enum 类，所以不能继承其他父类；其中 java.lang.Enum 类实现了 java.lang.Serializable 和 java.lang.Comparable 接口；

### 语法

+ enum 与 class、interface 具有相同地位，可以继承多个接口，可以拥有构造器、成员方法、成员变量；
+ 使用 enum 定义，默认使用 final 修饰，因此不能派生子类；
+ 构造器默认使用 private 修饰，且只能使用 private 修饰；
+ 枚举类所有实例必须在第一行给出，默认添加 public static final 修饰，否则无法产生实例；
+ 枚举类名建议带上Enum后缀
+ 枚举成员名称需要全大写，单词间用下划线隔开
+ enum 构造方法缺省默认为私有

### 使用

#### 简单使用 - 无参

“我们来新建一个枚举 PlayerType。”

```plain
public enum PlayerType {
    TENNIS,
    FOOTBALL,
    BASKETBALL
}
```

“二哥，我没看到有继承关系呀！”

“别着急，看一下反编译后的字节码，你就明白了。”

```plain
public final class PlayerType extends Enum {

    public static PlayerType[] values()
    {
        return (PlayerType[])$VALUES.clone();
    }

    public static PlayerType valueOf(String name)
    {
        return (PlayerType)Enum.valueOf(com/cmower/baeldung/enum1/PlayerType, name);
    }

    private PlayerType(String s, int i)
    {
        super(s, i);
    }

    public static final PlayerType TENNIS;
    public static final PlayerType FOOTBALL;
    public static final PlayerType BASKETBALL;
    private static final PlayerType $VALUES[];

    static 
    {
        TENNIS = new PlayerType("TENNIS", 0);
        FOOTBALL = new PlayerType("FOOTBALL", 1);
        BASKETBALL = new PlayerType("BASKETBALL", 2);
        $VALUES = (new PlayerType[] {
            TENNIS, FOOTBALL, BASKETBALL
        });
    }
}
```

“看到没？Java 编译器帮我们做了很多隐式的工作，不然手写一个枚举就没那么省心省事了。”

+ 要继承 Enum 类；
+ 要写构造方法；
+ 要声明静态变量和数组；
+ 要用 static 块来初始化静态变量和数组；
+ 要提供静态方法，比如说 `values()` 和 `valueOf(String name)`。

#### 使用带有参枚举类

```java
package com.example.a;
 
interface IEnum{
    String getCode();
    String getDescription();
}
 
enum PayTypeEnum implements IEnum{
    ALIPAY("ALIPAY", "支付宝"),
    WECHAT("WECHAT", "微信"),
    UNION_PAY("UNION_PAY", "银联"),
    ;
 
    //这个必须定义，且成员变量的类型及个数必须对应于上边枚举的定义
    //枚举标识码（英文描述）
    private final String code;
 
    //枚举标识码（中文描述）
    private final String description;
 
    //必须提供，而且是私有的，防止外部new对象
    PayTypeEnum(String code, String description) {
        this.code = code;
        this.description = description;
    }
 
    public static String getDescriptionByCode(String code){
        for(PayTypeEnum value : PayTypeEnum.values()){
            if(value.getCode().equals(code)){
                return value.getDescription();
            }
        }
        return null;
    }
 
    @Override
    public String getCode() {
        return this.code;
    }
 
    @Override
    public String getDescription() {
        return this.description;
    }
}
 
public class Demo {
    public static void main(String[] args){
        System.out.println(PayTypeEnum.getDescriptionByCode(PayTypeEnum.ALIPAY.getCode()));
        System.out.println(PayTypeEnum.getDescriptionByCode(PayTypeEnum.WECHAT.getCode()));
    }
}
```

#### switch

```java
public static void showColor(Color color) {
    switch (color) {
        case Red:
            System.out.println(color);
            break;
        case Blue:
            System.out.println(color);
            break;
        case Yellow:
            System.out.println(color);
            break;
        case Green:
            System.out.println(color);
            break;
    }
}
```

<font style="color:rgb(77, 77, 77);">switch 语句只能使用整型或字符串类型的值，但是由于 enum 内部已经构建了一个整型序列，并且可以通过 ordinal() 方法来得到枚举实例的顺序（显然编译器做了相应的工作），所以枚举类型可以用在 switch 语句中</font>

#### <font style="color:rgb(0, 0, 0);">向枚举中添加新方法</font>

<font style="color:rgb(51, 51, 51);">果打算自定义自己的方法，那么必须在enum实例序列的最后添加一个分号。而且 Java 要求必须先定义 enum 实例。</font>

```java
enum Color {
    //每个颜色都是枚举类的一个实例，并且构造方法要和枚举类的格式相符合。
    //如果实例后面有其他内容，实例序列结束时要加分号。
    Red("红色", 1), Green("绿色", 2), Blue("蓝色", 3), Yellow("黄色", 4);
    String name;
    int index;
    Color(String name, int index) {
        this.name = name;
        this.index = index;
    }
    public void showAllColors() {
        //values是Color实例的数组，在通过index和name可以获取对应的值。
        for (Color color : Color.values()) {
            System.out.println(color.index + ":" + color.name);
        }
    }
}
```

#### <font style="color:rgb(0, 0, 0);">覆盖枚举的方法</font>

<font style="color:rgb(51, 51, 51);">所有枚举类都继承自Enum类，所以可以重写该类的方法 下面给出一个toString()方法覆盖的例子。</font>

```java
@Override
public String toString() {
    return this.index + ":" + this.name;
}
```

#### <font style="color:rgb(0, 0, 0);">实现接口</font>

<font style="color:rgb(51, 51, 51);">所有的枚举都继承自java.lang.Enum类。由于Java 不支持多继承，所以枚举对象不能再继承其他类。</font>

```java
public interface IOperation {
    double apply(double x, double y);
}
```

```java
/**
 * 枚举计算类
 */
public enum Operation implements IOperation{
    PLUS("+") {
        @Override
        public double apply(double x, double y) {
            return x + y;
        }
    }, MINUS("-") {
        @Override
        public double apply(double x, double y) {
            return x - y;
        }
    }, TIMES("*") {
        @Override
        public double apply(double x, double y) {
            return x * y;
        }
    }, DIVIDE("/") {
        @Override
        public double apply(double x, double y) {
            return x / y;
        }
    };

    private final String symbol;

    Operation(String symbol) {
        this.symbol = symbol;
    }
    @Override
    public String toString() {
        return symbol;
    }
    public static void main(String[] args) {
        double x = 4;
        double y = 2;
        for (Operation operation : Operation.values()) {
            System.out.printf("%f %s %f = %f%n",
                    x, operation, y, operation.apply(x, y));
        }

    }
}
```

<font style="color:rgb(77, 77, 77);"></font>

```java
public enum ExtOperation implements IOperation {

    EXP("^") {
        @Override
        public double apply(double x, double y) {
            return Math.pow(x, y);
        }
    };
    private final String symbol;

    ExtOperation(String symbol) {
        this.symbol = symbol;
    }

    @Override
    public String toString() {
        return this.symbol;
    }
    
	//入参实现IOperation接口并且是枚举类型。这个可以将该限定去掉，只要实现IOperation接口即可。
    private static <T extends Enum<T> & IOperation> void test(Class<T> tClass, double x,
                                                              double y) {
        for (IOperation operation : tClass.getEnumConstants()) {
            System.out.printf("%f %s %f = %f%n",
                    x, operation, y, operation.apply(x, y));
        }
    }

    public static void main(String[] args) {
        test(ExtOperation.class,2,3);//使用扩展实现枚举对象
        test(Operation.class,2,3);//使用默认的实现
    }
}
```

#### <font style="color:rgb(0, 0, 0);">使用接口组织枚举</font>

```java
public class 用接口组织枚举 {
    public static void main(String[] args) {
        Food cf = chineseFood.dumpling;
        Food jf = Food.JapaneseFood.fishpiece;
        for (Food food : chineseFood.values()) {
            System.out.println(food);
        }
        for (Food food : Food.JapaneseFood.values()) {
            System.out.println(food);
        }
    }
}
interface Food {
    enum JapaneseFood implements Food {
        suse, fishpiece
    }
}
enum chineseFood implements Food {
    dumpling, tofu
}
```



#### 使用“==”运算符来比较两个枚举是否相等

由于枚举是 final 的，所以可以确保在 Java 虚拟机中仅有一个常量对象，基于这个原因，我们可以**使用“==”运算符来比较两个枚举是否相等**，参照 `isBasketballPlayer()` 方法。

“那为什么**不使用 **`**equals()**`** 方法判断呢**？”三妹问。

```plain
if(player.getType().equals(Player.PlayerType.BASKETBALL)){};
```

“我来给你解释下。”

“==”运算符比较的时候，如果两个对象都为 null，并不会发生 `NullPointerException`，而 `equals()` 方法则会。

另外， “==”运算符会在编译时进行检查，如果两侧的类型不匹配，会提示错误，而 `equals()` 方法则不会。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727247169889-76bb88d4-4d81-47d4-8c32-8ee7d3e23880.png" />


<font style="color:rgb(51, 51, 51);">枚举类型对象之间的值比较，是可以使用==，直接来比较值，是否相等的，不是必须使用equals方法的哟。</font>

<font style="color:rgb(51, 51, 51);">因为枚举类Enum已经重写了equals方法</font>

“枚举还可用于 switch 语句，和基本数据类型的用法一致。”我说。

```plain
switch (playerType) {
    case TENNIS:
        return "网球运动员费德勒";
    case FOOTBALL:
        return "足球运动员C罗";
    case BASKETBALL:
        return "篮球运动员詹姆斯";
    case UNKNOWN:
        throw new IllegalArgumentException("未知");
    default:
        throw new IllegalArgumentException(
                "运动员类型: " + playerType);

}
```

“如果枚举中需要包含更多信息的话，可以为其添加一些字段，比如下面示例中的 name，此时需要为枚举添加一个带参的构造方法，这样就可以在定义枚举时添加对应的名称了。”我继续说。

```plain
public enum PlayerType {
    TENNIS("网球"),
    FOOTBALL("足球"),
    BASKETBALL("篮球");

    private String name;

    PlayerType(String name) {
        this.name = name;
    }
}
```



### Enum常用方法的使用

|   **返回值**   |                **方法**                 |                  **描述**                   |
|:-----------:| :-------------------------------------: | :-----------------------------------------: |
|   String    |                 name()                  |             获取枚举成员的名称              |
|  static T   | `valueOf(Class<T> enumType, String name)` |    获取指定枚举成员名称和类型的枚举成员     |
|  String[]   |                values()                 |            获取枚举成员的所有值             |
|     int     |             compareTo(E o)              |         比较此枚举与指定对象的顺序          |
|     int     |               hashCode()                |            获取枚举成员的哈希值             |
|     int     |                ordinal()                | 获取枚举成员的序数（第一个枚举成员位置为0） |
|   String    |               toString()                |              返回枚举成员名称               |
| `Class<E>`  |           getDeclaringClass()           |            获取枚举成员的类对象             |


#### name和toString

关于name方法和toString方法，其实很简单。name()就是根据枚举成员来获取该枚举成员的字符串名称。而同String方法也是用来获取枚举成员的字符串名称。虽然作用都是相同的，但是name方法是用final修饰的不能被重写，而toString是可以被重写的。这里我们还使用季节的案例来演示，打印结果并放在了代码后面的注释中，如下：

```java
System.out.println(Season.SUMMER.name());            //SUMMER
System.out.println(Season.SUMMER.toString());        //SUMMER
```

#### valueOf

此方法的作用是**传入一个字符串，然后将它转换成对应的枚举成员**。这里传入的字符串必须与定义的枚举成员的名称一致，严格区分大小写。如果传入的字符串并没有找到其对应的枚举成员对象，就会抛出异常。如下：

```java
System.out.println(Season.valueOf("WINTER")); //WINTER
System.out.println(Season.valueOf("WIN")); //java.lang.IllegalArgumentException
```


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727337064591-70818aa9-5491-45d3-b876-f0644998beb9.png" />


#### values

values方法的名字中就带有一个s，再加上它的返回值是一个字符串数组。所以我们就可以得出它的作用是获取枚举成员的所有值，这些值并以数组的形式存储。

```java
Season[] seasons = Season.values();
for (Season season : seasons) {
    System.out.print(season + " ");
}
```

**结果为：**

```java
SPRING SUMMER AUTUMN WINTER
```

#### ordinal

该方法是获取枚举成员的序数，其第一个枚举成员位置为0。其实，为了好理解的话，可以把它看作数组中的索引。数组中的第一个元素位置同样也是从0开始。那我们打印一下，看看结果如何，如下：

```java
//获取指定枚举成员的次序
System.out.println(Season.SUMMER.ordinal());

//获取所有成员的次序
Season[] seasons = Season.values();
for (Season s : seasons) {
    System.out.println(s + " -> " + s.ordinal());
}
```

**结果为：**


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727337064480-61dc4e72-05fa-40da-b626-1fd70be34b5a.png" />


image-20200608175529079

其源码就是返回了一个从0开始int类型的值，从源码中也可以看出最大值是int取值范围的最大值。如下：


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727337064512-a38e7646-737f-4de4-b4b7-52f39e4ee899.png" />


image-20200608180839568

#### compareTo

compareTo方法相信我们已经是很熟悉了。其作用就是用来比较的。但是在枚举类中它比较的是什么呢？实际上compareTo方法比较的是两个枚举成员的次序数，并返回次序相减后的结果。

首先，我们要知道SUMMER的次序数为1，WINTER的次序数为3。当使用前者比较后者，打印的结果是前者与后者相减后的差值，即`1-3=-2`

```java
System.out.println(Season.SUMMER.compareTo(Season.WINTER));            //-2
```

它的源码是怎么做的呢？那我们进入查看一下。

其中，前面的操作都是在判断比较的双方是否是一个枚举类，如果不是的话就抛出异常。如果为枚举类的话，就直接将次序数做了相减操作并返回。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727337064754-a307bbda-e34c-4c84-8a47-3a902f3cbd7b.png" />




### 枚举类集合

“EnumSet 是一个专门针对枚举类型的 [Set 接口](https://javabetter.cn/collection/gailan.html)（后面会讲）的实现类，它是处理枚举类型数据的一把利器，非常高效。”我说，“从名字上就可以看得出，EnumSet 不仅和 Set 有关系，和枚举也有关系。”

“因为 EnumSet 是一个抽象类，所以创建 EnumSet 时不能使用 new 关键字。不过，EnumSet 提供了很多有用的静态工厂方法。”


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727247169883-ca6e73b5-23fc-40e3-9ec6-4905d2b87cad.png" />


“来看下面这个例子，我们使用 `noneOf()` 静态工厂方法创建了一个空的 PlayerType 类型的 EnumSet；使用 `allOf()` 静态工厂方法创建了一个包含所有 PlayerType 类型的 EnumSet。”

```plain
public class EnumSetTest {
    public enum PlayerType {
        TENNIS,
        FOOTBALL,
        BASKETBALL
    }

    public static void main(String[] args) {
        EnumSet<PlayerType> enumSetNone = EnumSet.noneOf(PlayerType.class);
        System.out.println(enumSetNone);

        EnumSet<PlayerType> enumSetAll = EnumSet.allOf(PlayerType.class);
        System.out.println(enumSetAll);
    }
}
```

“来看一下输出结果。”

```plain
[]
[TENNIS, FOOTBALL, BASKETBALL]
```

有了 EnumSet 后，就可以使用 Set 的一些方法了，见下图。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727247169938-d44a9a0e-4c1f-4c4e-8916-62e353adf537.png" />


“除了 EnumSet，还有 EnumMap，是一个专门针对枚举类型的 Map 接口的实现类，它可以将枚举常量作为键来使用。EnumMap 的效率比 HashMap 还要高，可以直接通过数组下标（枚举的 ordinal 值）访问到元素。”

“和 EnumSet 不同，EnumMap 不是一个抽象类，所以创建 EnumMap 时可以使用 new 关键字。”

```plain
EnumMap<PlayerType, String> enumMap = new EnumMap<>(PlayerType.class);
```

有了 EnumMap 对象后就可以使用 Map 的一些方法了，见下图。


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727247170164-1ff78ec8-07c6-4031-985a-d1e11240f8a4.png" />


和 [HashMap](https://javabetter.cn/collection/hashmap.html)（后面会讲）的使用方法大致相同，来看下面的例子。

```plain
EnumMap<PlayerType, String> enumMap = new EnumMap<>(PlayerType.class);
enumMap.put(PlayerType.BASKETBALL,"篮球运动员");
enumMap.put(PlayerType.FOOTBALL,"足球运动员");
enumMap.put(PlayerType.TENNIS,"网球运动员");
System.out.println(enumMap);

System.out.println(enumMap.get(PlayerType.BASKETBALL));
System.out.println(enumMap.containsKey(PlayerType.BASKETBALL));
System.out.println(enumMap.remove(PlayerType.BASKETBALL));
```

“来看一下输出结果。”

```plain
{TENNIS=网球运动员, FOOTBALL=足球运动员, BASKETBALL=篮球运动员}
篮球运动员
true
篮球运动员
```

“除了以上这些，《Effective Java》这本书里还提到了一点，如果要实现单例的话，最好使用枚举的方式。”我说。

“等等二哥，单例是什么？”三妹没等我往下说，就连忙问道。

“单例（Singleton）用来保证一个类仅有一个对象，并提供一个访问它的全局访问点，在一个进程中。因为这个类只有一个对象，所以就不能再使用 `new` 关键字来创建新的对象了。”

“Java 标准库有一些类就是单例，比如说 Runtime 这个类。”

```plain
Runtime runtime = Runtime.getRuntime();
```

“Runtime 类可以用来获取 Java 程序运行时的环境。”

“关于单例，懂了些吧？”我问三妹。

“噢噢噢噢。”三妹点了点头。

“通常情况下，实现单例并非易事，来看下面这种写法。”

```plain
public class Singleton {  
    private volatile static Singleton singleton; 
    private Singleton (){}  
    public static Singleton getSingleton() {  
    if (singleton == null) {
        synchronized (Singleton.class) { 
        if (singleton == null) {  
            singleton = new Singleton(); 
        }  
        }  
    }  
    return singleton;  
    }  
}
```

“要用到 [volatile](https://javabetter.cn/thread/volatile.html)、[synchronized](https://javabetter.cn/thread/synchronized-1.html) 关键字等等，但枚举的出现，让代码量减少到极致。”

```plain
public enum EasySingleton{
    INSTANCE;
}
```

“就这？”三妹睁大了眼睛。

“对啊，枚举默认实现了 [Serializable 接口](https://javabetter.cn/io/Serializbale.html)，因此 Java 虚拟机可以保证该类为单例，这与传统的实现方式不大相同。传统方式中，我们必须确保单例在反序列化期间不能创建任何新实例。”我说。

#### EnumSet集合

关于Set集合，我们知道其集合中的元素是不重复的。其中的方法有以下几种：

| **返回值**        | **方法**                     | **描述**                                                     |
| :---------------- | :--------------------------- | :----------------------------------------------------------- |
| `static EnumSet<E>` | `allOf(Class<E> elementType)`  | 创建一个包含指定元素类型的所有元素的枚举 set。               |
| `EnumSet<E>`        | clone()                      | 返回一个set集合。                                            |
| `static EnumSet<E>` | `complementOf(EnumSet<E> s)`   | 创建一个其元素类型与指定枚举set相同的set集合（新集合中包含原集合所不包含的枚举成员） |
| `static EnumSet<E>` | `copyOf(EnumSet<E> s)`         | 创建一个其元素类型与指定枚举 set 相同的枚举 set集合（新集合中包含与原集合相同的枚举成员） |
| `static EnumSet<E>` | `copyOf(Collection<E> s) `     | 创建一个从指定 collection 初始化的枚举 set                   |
| `static EnumSet<E>` | `noneOf(Class<E> elementType)` | 创建一个具有指定元素类型的空枚举 set                         |
| `static EnumSet<E>` | range(E from, E to)          | 创建一个最初包含由两个指定端点所定义范围内的所有元素的枚举 set。 |
| `static EnumSet<E>` | of                           | 创建一个最初包含指定元素的枚举 set。注意：可以指定多个元素，所以在这里我没有列举参数 |


##### allOf

allOf方法需要我们传入一个枚举的类对象，它会根据传入的枚举类对象生成一个具有该类对象枚举成员的Set集合。

```java
//创建一个包含Week所有枚举元素的Set集合
EnumSet<Week> weeks = EnumSet.allOf(Week.class);
System.out.println(weeks);              //[MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]

//打印Set集合中的元素
for (Week week1 : weeks) {
    System.out.print(week1 + " ");      //MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY
}
```

##### clone

clone方法与直接打印枚举的Set集合结果相同！

```java
//返回一个Set集合
System.out.println(weeks.clone());      //[MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]
```

##### range

上面详细讲过枚举是有序数的，而且枚举类中的枚举成员是秉承着从左向右的顺序。所以我们可以使用range方法来创建指定枚举成员端点的Set集合，也就是说我们需要传入枚举成员的起始与结束去创建一个该拥有该范围枚举成员的Set集合。如下：

```java
1//创建一个最初包含由两个指定端点所定义范围内的所有元素的枚举 set。
2System.out.println(EnumSet.range(Week.MONDAY, Week.FRIDAY));        //[MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY]
```

##### complementOf

该方法有点特殊，它根据EnumSet去创建一个新Set集合。而新Set集合中枚举成员相当于旧Set集合中枚举成员的取反。

我们用场景来模拟一下，当前Week枚举类中有星期一到星期日7个枚举成员。我们使用range方法创建一个从星期一到星期五的Set集合（s1），随后我在将使用complementOf方法根据s1生成新的Set集合（s2），最后打印s2查看集合中的元素就只有星期六和星期日。

**注意：** 如果我们的旧Set集合占据了枚举类中的所有枚举成员，在使用complementOf方法生成的新Set集合，新集合中的元素打印后为空Set，即`[]`。

```java
//创建一个其元素类型与指定枚举set相同的set集合（新集合中包含原集合所不包含的枚举成员）
EnumSet<Week> weeks1 = EnumSet.complementOf(weeks);
System.out.println(weeks1);             //[]

EnumSet<Week> range = EnumSet.range(Week.MONDAY, Week.FRIDAY);
EnumSet<Week> weeks3 = EnumSet.complementOf(range);
System.out.println(weeks3);                //[SATURDAY, SUNDAY]
```

##### copyOf

copyOf方法与complementOf相反，它创建一个新Set集合。而新Set集合中的枚举成员与旧Set集合中的枚举成员相同，这相当于就是Copy（复制功能）。如果你理解了complementOf方法，这个方法对你来说也是没有挑战。以下我使用copyOf方法复制了一份weeks，其枚举成员一个不少。

**注意：** copyOf方法还有一个可以复制connection集合来创建Set集合，其connection集合中必须存储的是枚举成员。

```java
//创建一个其元素类型与指定枚举 set 相同的枚举 set集合（新集合中包含与原集合相同的枚举成员）
EnumSet<Week> weeks2 = EnumSet.copyOf(weeks);
System.out.println(weeks2);             //[MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]
```

```java
//复制存储枚举成员的HashSet集合
Set set = new HashSet();
set.add(Week.MONDAY);
EnumSet set1 = EnumSet.copyOf(set);
System.out.println(set1);        //[MONDAY]
```

##### of

of 方法为我们提供了选择性的便利，我们可以挑选任意枚举成员成为Set集合的元素。

```java
//创建一个最初包含指定元素的枚举 set。
System.out.println(EnumSet.of(Week.MONDAY,Week.FRIDAY));            //[MONDAY, FRIDAY]
```

##### 8.1.7 noneOf

传入一个枚举的类对象去创建一个空Set集合

```java
EnumSet<Week> noneOf = EnumSet.noneOf(Week.class);
System.out.println(noneOf);                     //[]
```

#### EnumMap 集合

##### EnumMap集合的方法列表

关于Map集合，我们知道它是由键和值组成。EnumMap集合与HashMap集合的效率比较来说，EnumMap的效率高些。

关于EnumMap集合的使用与HashMap是一致的，没有什么特殊的。至于EnumMap集合的方法，我这里列举一下。

| **返回值**    | **方法**                    | **描述**                                     |
| :------------ | :-------------------------- | :------------------------------------------- |
| void          | clear()                     | 移除所有映射关系。                           |
| EnumMap       | clone()                     | 返回EnumMap集合。                            |
| boolean       | containsKey(Object key)     | 包含此键，则返回true                         |
| boolean       | containsValue(Object value) | 包含一个或多个键映射到的该指定值，则返回true |
| `Set>`          | entrySet()                  | 返回映射键值关系的Set集合                    |
| boolean       | equals(Object o)            | 比较对象与映射的相等关系                     |
| V             | get(Object key)             | 获取指定键映射的值，如果没有，返回null       |
| `Set<K>`      | keySet()                    | 返回所有键的Set集合                          |
| V             | put(K key, V value)         | 将指定键值存储在EnumMap集合中                |
| void          | putAll(Map m)               | 将所有键值对存储在集合中                     |
| V             | remove(Object key)          | 如果存在映射关系，则移除该映射关系           |
| int           | size()                      | 返回存在映射关系的数量                       |
| `Collection<V>` | values()                    | 返回此映射中所包含值的 Collection集合        |


##### 8.2.2 EnumMap集合的基本使用

由于EnumMap集合与HashMap集合基本相似，这里我就演示一下基本使用与HashMap不同的地方。

EnumMap集合是我们new出来的对象，创建出来的对象需要传入一个枚举的类对象，才返回一个Map集合。Map集合是键值对形式存储，所以我们在写EnumMap集合的泛型时，根据需求来写，如果需要键是某枚举类型，我们泛型就写它。如果有枚举类是值的要求，那就泛型中的值写枚举类。键值对都要求是枚举那也是OK的，我们写泛型时都写需求的枚举类即可。除了创建对象和存储对象需要指定枚举类外，其他的与HashMap基本相同。

如下，我在创建EnumMap集合时执行的Week枚举类的类对象，泛型的键写的是Week枚举类，值写的Integer，这就意味着我们在put（存储键值对）的时候，键需要存储Week枚举类中的枚举成员，值需要存储Integer数值。

```java
EnumMap<Week, Integer> map = new EnumMap<>(Week.class);
map.put(Week.MONDAY, 1);
map.put(Week.THURSDAY, 4);
System.out.println(map);            //{MONDAY=1, THURSDAY=4}
```



