---
title: 集合体系结构
date: 2024/09/28
tags:
  - 集合体系结构
categories:
  - Java
hideComments: false
---

## 集合体系结构


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726665524007-aea7bc67-01cf-43c8-878f-a3c56cd1e147.png" />


**java 集合框架分为两大支线**

<font style="color:rgb(44, 62, 80);">① Collection，主要由 List、Set、Queue 组成：</font>

+ <font style="color:rgb(44, 62, 80);">List 代表</font>**<font style="color:rgb(44, 62, 80);">有序</font>**<font style="color:rgb(44, 62, 80);">、</font>**<font style="color:rgb(44, 62, 80);">可重复</font>**<font style="color:rgb(44, 62, 80);">的</font>**<font style="color:rgb(44, 62, 80);">集合</font>**<font style="color:rgb(44, 62, 80);">，典型代表就是封装了动态数组的 ArrayList 和封装了链表的 LinkedList；</font>
+ <font style="color:rgb(44, 62, 80);">Set 代表</font>**<font style="color:rgb(44, 62, 80);">无序</font>**<font style="color:rgb(44, 62, 80);">、</font>**<font style="color:rgb(44, 62, 80);">不可重复</font>**<font style="color:rgb(44, 62, 80);">的</font>**<font style="color:rgb(44, 62, 80);">集合</font>**<font style="color:rgb(44, 62, 80);">，典型代表就是 HashSet 和 TreeSet；</font>
+ <font style="color:rgb(44, 62, 80);">Queue 代表队列，典型代表就是双端队列</font><font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">ArrayDeque</font><font style="color:rgb(44, 62, 80);">，以及优先级队列</font><font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">PriorityQueue</font><font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">② Map，代表键值对的集合，典型代表就是 HashMap</font>

## List

<font style="color:rgb(44, 62, 80);">特点是存取有序，可以存放重复的元素，可以用下标对元素进行操作。</font>

### <font style="color:rgb(44, 62, 80);">ArrayList</font>

<font style="color:rgb(44, 62, 80);">先来一段 ArrayList 的增删改查，学会用。</font>

```plain
// 创建一个集合
ArrayList<String> list = new ArrayList<String>();
// 添加元素
list.add("王二");
list.add("沉默");
list.add("陈清扬");

// 遍历集合 for 循环
for (int i = 0; i < list.size(); i++) {
    String s = list.get(i);
    System.out.println(s);
}
// 遍历集合 for each
for (String s : list) {
    System.out.println(s);
}

// 删除元素
list.remove(1);
// 遍历集合
for (String s : list) {
    System.out.println(s);
}

// 修改元素
list.set(1, "王二狗");
// 遍历集合
for (String s : list) {
    System.out.println(s);
}
```

<font style="color:rgb(44, 62, 80);">简单介绍一下 ArrayList 的特征，</font><font style="color:rgb(44, 62, 80);">后面还会详细讲</font><font style="color:rgb(44, 62, 80);">。</font>

+ <font style="color:rgb(44, 62, 80);">ArrayList 是由</font>**<font style="color:rgb(44, 62, 80);">数组</font>**<font style="color:rgb(44, 62, 80);">实现的，支持随机存取，也就是可以通过下标直接存取元素；</font>
+ <font style="color:rgb(44, 62, 80);">从</font>**<font style="color:rgb(44, 62, 80);">尾部插入和删除元素会比较快捷</font>**<font style="color:rgb(44, 62, 80);">，从</font>**<font style="color:rgb(44, 62, 80);">中间插入和删除元素会比较低效</font>**<font style="color:rgb(44, 62, 80);">，因为涉及到数组元素的复制和移动；</font>
+ <font style="color:rgb(44, 62, 80);">如果内部数组的容量不足时会自动扩容，因此当元素非常庞大的时候，效率会比较低。</font>

<font style="color:rgb(44, 62, 80);"></font>

<font style="color:rgb(44, 62, 80);"></font>

### <font style="color:rgb(44, 62, 80);">LinkedList</font>

<font style="color:rgb(44, 62, 80);">来一段 LinkedList 的增删改查，和 ArrayList 几乎没什么差别。</font>

```plain
// 创建一个集合
LinkedList<String> list = new LinkedList<String>();
// 添加元素
list.add("王二");
list.add("沉默");
list.add("陈清扬");

// 遍历集合 for 循环
for (int i = 0; i < list.size(); i++) {
    String s = list.get(i);
    System.out.println(s);
}
// 遍历集合 for each
for (String s : list) {
    System.out.println(s);
}

// 删除元素
list.remove(1);
// 遍历集合
for (String s : list) {
    System.out.println(s);
}

// 修改元素
list.set(1, "王二狗");
// 遍历集合
for (String s : list) {
    System.out.println(s);
}
```

<font style="color:rgb(44, 62, 80);">不过，LinkedList 和 ArrayList 仍然有较大的不同，</font><font style="color:rgb(44, 62, 80);">后面也会详细地讲</font><font style="color:rgb(44, 62, 80);">。</font>

+ <font style="color:rgb(44, 62, 80);">LinkedList 是由</font>**<font style="color:rgb(44, 62, 80);">双向链表</font>**<font style="color:rgb(44, 62, 80);">实现的，</font>**<font style="color:rgb(44, 62, 80);">不支持随机存取</font>**<font style="color:rgb(44, 62, 80);">，</font>**<font style="color:rgb(44, 62, 80);">只能从一端开始遍历，直到找到需要的元素后返回</font>**<font style="color:rgb(44, 62, 80);">；</font>
+ <font style="color:rgb(44, 62, 80);">任意位置</font>**<font style="color:rgb(44, 62, 80);">插入和删除元素都很方便</font>**<font style="color:rgb(44, 62, 80);">，因为只需要改变前一个节点和后一个节点的引用即可，不像 ArrayList 那样需要复制和移动数组元素；</font>
+ <font style="color:rgb(44, 62, 80);">因为每个元素都存储了前一个和后一个节点的引用，所以相对来说，</font>**<font style="color:rgb(44, 62, 80);">占用的内存空间会比 ArrayList 多</font>**<font style="color:rgb(44, 62, 80);">一些。</font>



### <font style="color:rgb(44, 62, 80);">Vector 和 Stack</font>

<font style="color:rgb(44, 62, 80);">List 的实现类还有一个 Vector，是一个元老级的类，比 ArrayList 出现得更早。ArrayList 和 Vector 非常相似，只不过 </font>**<font style="color:rgb(44, 62, 80);">Vector 是线程安全</font>**<font style="color:rgb(44, 62, 80);">的，像 get、set、add 这些方法都加了 </font>`<font style="color:rgb(44, 62, 80);">synchronized</font>`<font style="color:rgb(44, 62, 80);"> 关键字，就导致执行效率会比较低，所以现在已经很少用了。</font>

<font style="color:rgb(44, 62, 80);">我就不写太多代码了，只看一下 add 方法的源码就明白了。</font>

```plain
public synchronized boolean add(E e) {
    elementData[elementCount++] = e;
    return true;
}
```

<font style="color:rgb(44, 62, 80);">这种加了同步方法的类，注定会被淘汰掉，就像 </font>[<font style="color:rgb(44, 62, 80);">StringBuilder 取代 StringBuffer</font>](https://javabetter.cn/string/builder-buffer.html)<font style="color:rgb(44, 62, 80);"> 那样。JDK 源码也说了：</font>

<font style="color:rgb(102, 102, 102);">如果不需要线程安全，建议使用 ArrayList 代替 Vector。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726665868134-6a53698b-5b79-4b8d-96c1-0d97c124f6a1.png" />


<font style="color:rgb(44, 62, 80);">Stack 是 Vector 的一个子类，本质上也是由</font>**<font style="color:rgb(44, 62, 80);">动态数组实现</font>**<font style="color:rgb(44, 62, 80);">的，只不过还实现了先进后出的功能（在 get、set、add 方法的基础上追加了 pop「返回并移除栈顶的元素」、peek「只返回栈顶元素」等方法），所以叫</font>**<font style="color:rgb(44, 62, 80);">栈</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">下面是这两个方法的源码，增删改查我就不写了，和 ArrayList 和 LinkedList 几乎一样。</font>

```java
public synchronized E pop() {
    E obj;
    int len = size();

    obj = peek();
    removeElementAt(len - 1);

    return obj;
}

public synchronized E peek() {
    int len = size();

    if (len == 0)
        throw new EmptyStackException();
    return elementAt(len - 1);
}
```

<font style="color:rgb(44, 62, 80);">不过，由于 Stack 执行效率比较低（方法上同样加了 synchronized 关键字），就被双端队列 ArrayDeque 取代了（下面会介绍）。</font>

#### 

## Set

<font style="color:rgb(44, 62, 80);">Set 的特点是存取无序，不可以存放重复的元素，不可以用下标对元素进行操作，和 List 有很多不同。</font>

### <font style="color:rgb(44, 62, 80);">HashSet</font>

<font style="color:rgb(44, 62, 80);">HashSet 其实是由 </font>**<font style="color:rgb(44, 62, 80);">HashMap 实现</font>**<font style="color:rgb(44, 62, 80);">的，只不过</font>**<font style="color:rgb(44, 62, 80);">值由一个固定的 Object 对象填充，而键用于操作</font>**<font style="color:rgb(44, 62, 80);">。来简单看一下它的源码。</font>

```java
public class HashSet<E> extends AbstractSet<E> implements Set<E>, 
    Cloneable, java.io.Serializable {
    private transient HashMap<E,Object> map;

    // Dummy value to associate with an Object in the backing Map
    private static final Object PRESENT = new Object();

    public HashSet() {
        map = new HashMap<>();
    }

    public boolean add(E e) {
        return map.put(e, PRESENT)==null;
    }

    public boolean remove(Object o) {
        return map.remove(o)==PRESENT;
    }
}
```

<font style="color:rgb(44, 62, 80);">实际开发中，HashSet 并不常用，比如，如果我们需要按照顺序存储一组元素，那么 ArrayList 和 LinkedList 可能更适合；如果我们需要存储键值对并根据键进行查找，那么 HashMap 可能更适合。</font>

<font style="color:rgb(44, 62, 80);">来一段增删改查体验一下：</font>

```plain
// 创建一个新的HashSet
HashSet<String> set = new HashSet<>();

// 添加元素
set.add("沉默");
set.add("王二");
set.add("陈清扬");

// 输出HashSet的元素个数
System.out.println("HashSet size: " + set.size()); // output: 3

// 判断元素是否存在于HashSet中
boolean containsWanger = set.contains("王二");
System.out.println("Does set contain '王二'? " + containsWanger); // output: true

// 删除元素
boolean removeWanger = set.remove("王二");
System.out.println("Removed '王二'? " + removeWanger); // output: true

// 修改元素，需要先删除后添加
boolean removeChenmo = set.remove("沉默");
boolean addBuChenmo = set.add("不沉默");
System.out.println("Modified set? " + (removeChenmo && addBuChenmo)); // output: true

// 输出修改后的HashSet
System.out.println("HashSet after modification: " + set); // output: [陈清扬, 不沉默]
```

<font style="color:rgb(44, 62, 80);">HashSet 主要用于去重，比如，我们需要统计一篇文章中有多少个不重复的单词，就可以使用 HashSet 来实现。</font>

```plain
// 创建一个 HashSet 对象
HashSet<String> set = new HashSet<>();

// 添加元素
set.add("沉默");
set.add("王二");
set.add("陈清扬");
set.add("沉默");

// 输出 HashSet 的元素个数
System.out.println("HashSet size: " + set.size()); // output: 3

// 遍历 HashSet
for (String s : set) {
    System.out.println(s);
}
```

<font style="color:rgb(44, 62, 80);">从上面的例子可以看得出，HashSet 会自动去重，因为它是用 HashMap 实现的，</font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的键是唯一的（哈希值），相同键的值会覆盖掉原来的值，于是第二次</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">set.add("沉默")</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候就覆盖了第一次的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">set.add("沉默")</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">我在《</font>[<font style="color:rgb(44, 62, 80);">LeetCode 的第 15 题：三数之和</font>](https://paicoding.com/column/7/15)<font style="color:rgb(44, 62, 80);">》的时候用到了 HashSet，大家可以通过链接去查看一下。</font>

### <font style="color:rgb(44, 62, 80);">LinkedHashSet</font>

<font style="color:rgb(44, 62, 80);">LinkedHashSet 虽然继承自 HashSet，其实是由</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">LinkedHashMap</font>](https://javabetter.cn/collection/linkedhashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">实现的。</font>

<font style="color:rgb(44, 62, 80);">这是 LinkedHashSet 的无参构造方法：</font>

```plain
public LinkedHashSet() {
    super(16, .75f, true);
}
```

[<font style="color:rgb(44, 62, 80);">super</font>](https://javabetter.cn/oo/this-super.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的意思是它将调用父类的 HashSet 的一个有参构造方法：</font>

```plain
HashSet(int initialCapacity, float loadFactor, boolean dummy) {
    map = new LinkedHashMap<>(initialCapacity, loadFactor);
}
```

<font style="color:rgb(44, 62, 80);">看到</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">LinkedHashMap</font>](https://javabetter.cn/collection/linkedhashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">了吧，这个我们后面会去讲。</font>

<font style="color:rgb(44, 62, 80);">好吧，来看一段 LinkedHashSet 的增删改查吧。</font>

```plain
LinkedHashSet<String> set = new LinkedHashSet<>();

// 添加元素
set.add("沉默");
set.add("王二");
set.add("陈清扬");

// 删除元素
set.remove("王二");

// 修改元素
set.remove("沉默");
set.add("沉默的力量");

// 查找元素
boolean hasChenQingYang = set.contains("陈清扬");
System.out.println("set包含陈清扬吗？" + hasChenQingYang);
```

<font style="color:rgb(44, 62, 80);">在以上代码中，我们首先创建了一个 LinkedHashSet 对象，然后使用 add 方法依次添加了三个元素：沉默、王二和陈清扬。接着，我们使用 remove 方法删除了王二这个元素，并使用 remove 和 add 方法修改了沉默这个元素。最后，我们使用 contains 方法查找了陈清扬这个元素是否存在于 set 中，并打印了结果。</font>

<font style="color:rgb(44, 62, 80);">LinkedHashSet 是一种基于哈希表实现的 Set 接口，它继承自 HashSet，并且使用链表维护了元素的插入顺序。因此，它既具有 HashSet 的快速查找、插入和删除操作的优点，又可以维护元素的插入顺序。</font>

### <font style="color:rgb(44, 62, 80);">TreeSet</font>

<font style="color:rgb(44, 62, 80);">“二哥，不用你讲了，我能猜到，TreeSet 是由</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">TreeMap（后面会讲）</font>](https://javabetter.cn/collection/treemap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">实现的，只不过同样操作的键位，值由一个固定的 Object 对象填充。”</font>

<font style="color:rgb(44, 62, 80);">哇，三妹都学会了推理。</font>

<font style="color:rgb(44, 62, 80);">是的，与 TreeMap 相似，TreeSet 是一种基于红黑树实现的有序集合，它实现了 SortedSet 接口，可以自动对集合中的元素进行排序。按照键的自然顺序或指定的比较器顺序进行排序。</font>

```plain
// 创建一个 TreeSet 对象
TreeSet<String> set = new TreeSet<>();

// 添加元素
set.add("沉默");
set.add("王二");
set.add("陈清扬");
System.out.println(set); // 输出 [沉默, 王二, 陈清扬]

// 删除元素
set.remove("王二");
System.out.println(set); // 输出 [沉默, 陈清扬]

// 修改元素：TreeSet 中的元素不支持直接修改，需要先删除再添加
set.remove("陈清扬");
set.add("陈青阳");
System.out.println(set); // 输出 [沉默, 陈青阳]

// 查找元素
System.out.println(set.contains("沉默")); // 输出 true
System.out.println(set.contains("王二")); // 输出 false
```

<font style="color:rgb(44, 62, 80);">需要注意的是，TreeSet 不允许插入 null 元素，否则会抛出 NullPointerException 异常。</font>

<font style="color:rgb(44, 62, 80);">“总体上来说，Set 集合不是关注的重点，因为底层都是由 Map 实现的，为什么要用 Map 实现呢？三妹你能猜到原因吗？”</font>

<font style="color:rgb(44, 62, 80);">“让我想想。”</font>

<font style="color:rgb(44, 62, 80);">“嗯？难道是因为 Map 的键不允许重复、无序吗？”</font>

<font style="color:rgb(44, 62, 80);">老天，竟然被三妹猜到了。</font>

<font style="color:rgb(44, 62, 80);">“是的，你这水平长进了呀，三妹。”</font>

## <font style="color:rgb(44, 62, 80);">Queue</font>

<font style="color:rgb(44, 62, 80);">Queue，也就是队列，通常遵循先进先出（FIFO）的原则，新元素插入到队列的尾部，访问元素返回队列的头部。</font>

### <font style="color:rgb(44, 62, 80);">ArrayDeque</font>

<font style="color:rgb(44, 62, 80);">从名字上可以看得出，ArrayDeque 是一个基于数组实现的双端队列，为了满足可以同时在数组两端插入或删除元素的需求，数组必须是循环的，也就是说数组的任何一点都可以被看作是起点或者终点。</font>

<font style="color:rgb(44, 62, 80);">这是一个包含了 4 个元素的双端队列，和一个包含了 5 个元素的双端队列。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726665926214-a23b14a7-d80e-4581-af43-aca1189a9896.png" />


<font style="color:rgb(44, 62, 80);">head 指向队首的第一个有效的元素，tail 指向队尾第一个可以插入元素的空位，因为是循环数组，所以 head 不一定从是从 0 开始，tail 也不一定总是比 head 大。</font>

<font style="color:rgb(44, 62, 80);">来一段 ArrayDeque 的增删改查吧。</font>

```plain
// 创建一个ArrayDeque
ArrayDeque<String> deque = new ArrayDeque<>();

// 添加元素
deque.add("沉默");
deque.add("王二");
deque.add("陈清扬");

// 删除元素
deque.remove("王二");

// 修改元素
deque.remove("沉默");
deque.add("沉默的力量");

// 查找元素
boolean hasChenQingYang = deque.contains("陈清扬");
System.out.println("deque包含陈清扬吗？" + hasChenQingYang);
```

### <font style="color:rgb(44, 62, 80);">LinkedList</font>

<font style="color:rgb(44, 62, 80);">LinkedList 一般应该归在 List 下，只不过，它也实现了 Deque 接口，可以作为队列来使用。等于说，LinkedList 同时实现了 Stack、Queue、PriorityQueue 的所有功能。</font>

```plain
public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, java.io.Serializable
{}
```

<font style="color:rgb(44, 62, 80);">换句话说，LinkedList 和 ArrayDeque 都是 Java 集合框架中的双向队列（deque），它们都支持在队列的两端进行元素的插入和删除操作。不过，LinkedList 和 ArrayDeque 在实现上有一些不同：</font>

+ <font style="color:rgb(44, 62, 80);">底层实现方式不同：LinkedList 是基于链表实现的，而 ArrayDeque 是基于数组实现的。</font>
+ <font style="color:rgb(44, 62, 80);">随机访问的效率不同：由于底层实现方式的不同，LinkedList 对于随机访问的效率较低，时间复杂度为 O(n)，而 ArrayDeque 可以通过下标随机访问元素，时间复杂度为 O(1)。</font>
+ <font style="color:rgb(44, 62, 80);">迭代器的效率不同：LinkedList 对于迭代器的效率比较低，因为需要通过链表进行遍历，时间复杂度为 O(n)，而 ArrayDeque 的迭代器效率比较高，因为可以直接访问数组中的元素，时间复杂度为 O(1)。</font>
+ <font style="color:rgb(44, 62, 80);">内存占用不同：由于 LinkedList 是基于链表实现的，它在存储元素时需要额外的空间来存储链表节点，因此内存占用相对较高，而 ArrayDeque 是基于数组实现的，内存占用相对较低。</font>

<font style="color:rgb(44, 62, 80);">因此，在选择使用 LinkedList 还是 ArrayDeque 时，需要根据具体的业务场景和需求来选择。如果需要在双向队列的两端进行频繁的插入和删除操作，并且需要随机访问元素，可以考虑使用 ArrayDeque；如果需要在队列中间进行频繁的插入和删除操作，可以考虑使用 LinkedList。</font>

<font style="color:rgb(44, 62, 80);">来一段 LinkedList 作为队列时候的增删改查吧，注意和它作为 List 的时候有很大的不同。</font>

```plain
// 创建一个 LinkedList 对象
LinkedList<String> queue = new LinkedList<>();

// 添加元素
queue.offer("沉默");
queue.offer("王二");
queue.offer("陈清扬");
System.out.println(queue); // 输出 [沉默, 王二, 陈清扬]

// 删除元素
queue.poll();
System.out.println(queue); // 输出 [王二, 陈清扬]

// 修改元素：LinkedList 中的元素不支持直接修改，需要先删除再添加
String first = queue.poll();
queue.offer("王大二");
System.out.println(queue); // 输出 [陈清扬, 王大二]

// 查找元素：LinkedList 中的元素可以使用 get() 方法进行查找
System.out.println(queue.get(0)); // 输出 陈清扬
System.out.println(queue.contains("沉默")); // 输出 false

// 查找元素：使用迭代器的方式查找陈清扬
// 使用迭代器依次遍历元素并查找
Iterator<String> iterator = queue.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    if (element.equals("陈清扬")) {
        System.out.println("找到了：" + element);
        break;
    }
}
```

<font style="color:rgb(44, 62, 80);">在使用 LinkedList 作为队列时，可以使用 offer() 方法将元素添加到队列的末尾，使用 poll() 方法从队列的头部删除元素。另外，由于 LinkedList 是链表结构，不支持随机访问元素，因此不能使用下标访问元素，需要使用迭代器或者 poll() 方法依次遍历元素。</font>

### <font style="color:rgb(44, 62, 80);">PriorityQueue</font>

<font style="color:rgb(44, 62, 80);">PriorityQueue 是一种优先级队列，它的出队顺序与元素的优先级有关，执行 remove 或者 poll 方法，返回的总是优先级最高的元素。</font>

```plain
// 创建一个 PriorityQueue 对象
PriorityQueue<String> queue = new PriorityQueue<>();

// 添加元素
queue.offer("沉默");
queue.offer("王二");
queue.offer("陈清扬");
System.out.println(queue); // 输出 [沉默, 王二, 陈清扬]

// 删除元素
queue.poll();
System.out.println(queue); // 输出 [王二, 陈清扬]

// 修改元素：PriorityQueue 不支持直接修改元素，需要先删除再添加
String first = queue.poll();
queue.offer("张三");
System.out.println(queue); // 输出 [张三, 陈清扬]

// 查找元素：PriorityQueue 不支持随机访问元素，只能访问队首元素
System.out.println(queue.peek()); // 输出 张三
System.out.println(queue.contains("陈清扬")); // 输出 true

// 通过 for 循环的方式查找陈清扬
for (String element : queue) {
    if (element.equals("陈清扬")) {
        System.out.println("找到了：" + element);
        break;
    }
}
```

<font style="color:rgb(44, 62, 80);">要想有优先级，元素就需要实现</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">Comparable 接口或者 Comparator 接口</font>](https://javabetter.cn/basic-extra-meal/comparable-omparator.html)<font style="color:rgb(44, 62, 80);">（我们后面会讲）。</font>

<font style="color:rgb(44, 62, 80);">这里先来一段通过实现 Comparator 接口按照年龄姓名排序的优先级队列吧。</font>

```plain
import java.util.Comparator;
import java.util.PriorityQueue;

class Student {
    private String name;
    private int chineseScore;
    private int mathScore;

    public Student(String name, int chineseScore, int mathScore) {
        this.name = name;
        this.chineseScore = chineseScore;
        this.mathScore = mathScore;
    }

    public String getName() {
        return name;
    }

    public int getChineseScore() {
        return chineseScore;
    }

    public int getMathScore() {
        return mathScore;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", 总成绩=" + (chineseScore + mathScore) +
                '}';
    }
}

class StudentComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        // 比较总成绩
        return Integer.compare(s2.getChineseScore() + s2.getMathScore(),
                s1.getChineseScore() + s1.getMathScore());
    }
}

public class PriorityQueueComparatorExample {

    public static void main(String[] args) {
        // 创建一个按照总成绩排序的优先级队列
        PriorityQueue<Student> queue = new PriorityQueue<>(new StudentComparator());

        // 添加元素
        queue.offer(new Student("王二", 80, 90));
        System.out.println(queue);
        queue.offer(new Student("陈清扬", 95, 95));
        System.out.println(queue);
        queue.offer(new Student("小驼铃", 90, 95));
        System.out.println(queue);
        queue.offer(new Student("沉默", 90, 80));
        while (!queue.isEmpty()) {
            System.out.print(queue.poll() + " ");
        }
    }
}
```

<font style="color:rgb(44, 62, 80);">Student 是一个学生对象，包含姓名、语文成绩和数学成绩。</font>

<font style="color:rgb(44, 62, 80);">StudentComparator 实现了 Comparator 接口，对总成绩做了一个排序。</font>

<font style="color:rgb(44, 62, 80);">PriorityQueue 是一个优先级队列，参数为 StudentComparator，然后我们添加了 4 个学生对象进去。</font>

<font style="color:rgb(44, 62, 80);">来看一下输出结果：</font>

```plain
[Student{name='王二', 总成绩=170}]
[Student{name='陈清扬', 总成绩=190}, Student{name='王二', 总成绩=170}]
[Student{name='陈清扬', 总成绩=190}, Student{name='王二', 总成绩=170}, Student{name='小驼铃', 总成绩=185}]
Student{name='陈清扬', 总成绩=190} Student{name='小驼铃', 总成绩=185} Student{name='沉默', 总成绩=170} Student{name='王二', 总成绩=170}
```

<font style="color:rgb(44, 62, 80);">我们使用 offer 方法添加元素，最后用 while 循环遍历元素（通过 poll 方法取出元素），从结果可以看得出，</font>[<font style="color:rgb(44, 62, 80);">PriorityQueue</font>](https://javabetter.cn/collection/PriorityQueue.html)<font style="color:rgb(44, 62, 80);">按照学生的总成绩由高到低进行了排序。</font>

## <font style="color:rgb(44, 62, 80);">Map</font>

<font style="color:rgb(44, 62, 80);">Map 保存的是键值对，键要求保持唯一性，值可以重复。</font>

### <font style="color:rgb(44, 62, 80);">HashMap</font>

<font style="color:rgb(44, 62, 80);">HashMap 实现了 Map 接口，可以根据键快速地查找对应的值——通过哈希函数将键映射到哈希表中的一个索引位置，从而实现快速访问。</font>[<font style="color:rgb(44, 62, 80);">后面会详细聊到</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">这里先大致了解一下 HashMap 的特点：</font>

+ <font style="color:rgb(44, 62, 80);">HashMap 中的键和值都可以为 null。如果键为 null，则将该键映射到哈希表的第一个位置。</font>
+ <font style="color:rgb(44, 62, 80);">可以使用迭代器或者 forEach 方法遍历 HashMap 中的键值对。</font>
+ <font style="color:rgb(44, 62, 80);">HashMap 有一个初始容量和一个负载因子。初始容量是指哈希表的初始大小，负载因子是指哈希表在扩容之前可以存储的键值对数量与哈希表大小的比率。默认的初始容量是 16，负载因子是 0.75。</font>

<font style="color:rgb(44, 62, 80);">来个简单的增删改查吧。</font>

```plain
// 创建一个 HashMap 对象
HashMap<String, String> hashMap = new HashMap<>();

// 添加键值对
hashMap.put("沉默", "cenzhong");
hashMap.put("王二", "wanger");
hashMap.put("陈清扬", "chenqingyang");

// 获取指定键的值
String value1 = hashMap.get("沉默");
System.out.println("沉默对应的值为：" + value1);

// 修改键对应的值
hashMap.put("沉默", "chenmo");
String value2 = hashMap.get("沉默");
System.out.println("修改后沉默对应的值为：" + value2);

// 删除指定键的键值对
hashMap.remove("王二");

// 遍历 HashMap
for (String key : hashMap.keySet()) {
    String value = hashMap.get(key);
    System.out.println(key + " 对应的值为：" + value);
}
```

### <font style="color:rgb(44, 62, 80);">LinkedHashMap</font>

<font style="color:rgb(44, 62, 80);">HashMap 已经非常强大了，但它是无序的。如果我们需要一个有序的 Map，就要用到</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">LinkedHashMap</font>](https://javabetter.cn/collection/linkedhashmap.html)<font style="color:rgb(44, 62, 80);">。LinkedHashMap 是 HashMap 的子类，它使用链表来记录插入/访问元素的顺序。</font>

<font style="color:rgb(44, 62, 80);">LinkedHashMap 可以看作是 HashMap + LinkedList 的合体，它使用了哈希表来存储数据，又用了双向链表来维持顺序。</font>

<font style="color:rgb(44, 62, 80);">来一个简单的例子。</font>

```plain
// 创建一个 LinkedHashMap，插入的键值对为 沉默 王二 陈清扬
LinkedHashMap<String, String> linkedHashMap = new LinkedHashMap<>();
linkedHashMap.put("沉默", "cenzhong");
linkedHashMap.put("王二", "wanger");
linkedHashMap.put("陈清扬", "chenqingyang");

// 遍历 LinkedHashMap
for (String key : linkedHashMap.keySet()) {
    String value = linkedHashMap.get(key);
    System.out.println(key + " 对应的值为：" + value);
}
```

<font style="color:rgb(44, 62, 80);">来看输出结果：</font>

```plain
沉默 对应的值为：cenzhong
王二 对应的值为：wanger
陈清扬 对应的值为：chenqingyang
```

<font style="color:rgb(44, 62, 80);">从结果中可以看得出来，LinkedHashMap 维持了键值对的插入顺序，对吧？为了和 LinkedHashMap 做对比，我们用同样的数据试验一下 HashMap。</font>

```plain
// 创建一个HashMap，插入的键值对为 沉默 王二 陈清扬
HashMap<String, String> hashMap = new HashMap<>();
hashMap.put("沉默", "cenzhong");
hashMap.put("王二", "wanger");
hashMap.put("陈清扬", "chenqingyang");

// 遍历 HashMap
for (String key : hashMap.keySet()) {
    String value = hashMap.get(key);
    System.out.println(key + " 对应的值为：" + value);
}
```

<font style="color:rgb(44, 62, 80);">来看输出结果：</font>

```plain
沉默 对应的值为：cenzhong
陈清扬 对应的值为：chenqingyang
王二 对应的值为：wanger
```

<font style="color:rgb(44, 62, 80);">HashMap 没有维持键值对的插入顺序，对吧？</font>

### <font style="color:rgb(44, 62, 80);">TreeMap</font>

[<font style="color:rgb(44, 62, 80);">TreeMap</font>](https://javabetter.cn/collection/treemap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">实现了 SortedMap 接口，可以自动将键按照自然顺序或指定的比较器顺序排序，并保证其元素的顺序。内部使用红黑树来实现键的排序和查找。</font>

<font style="color:rgb(44, 62, 80);">同样来一个增删改查的 demo：</font>

```plain
// 创建一个 TreeMap 对象
Map<String, String> treeMap = new TreeMap<>();

// 向 TreeMap 中添加键值对
treeMap.put("沉默", "cenzhong");
treeMap.put("王二", "wanger");
treeMap.put("陈清扬", "chenqingyang");

// 查找键值对
String name = "沉默";
if (treeMap.containsKey(name)) {
    System.out.println("找到了 " + name + ": " + treeMap.get(name));
} else {
    System.out.println("没有找到 " + name);
}

// 修改键值对
name = "王二";
if (treeMap.containsKey(name)) {
    System.out.println("修改前的 " + name + ": " + treeMap.get(name));
    treeMap.put(name, "newWanger");
    System.out.println("修改后的 " + name + ": " + treeMap.get(name));
} else {
    System.out.println("没有找到 " + name);
}

// 删除键值对
name = "陈清扬";
if (treeMap.containsKey(name)) {
    System.out.println("删除前的 " + name + ": " + treeMap.get(name));
    treeMap.remove(name);
    System.out.println("删除后的 " + name + ": " + treeMap.get(name));
} else {
    System.out.println("没有找到 " + name);
}

// 遍历 TreeMap
for (Map.Entry<String, String> entry : treeMap.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

<font style="color:rgb(44, 62, 80);">与 HashMap 不同的是，TreeMap 会按照键的顺序来进行排序。</font>

```plain
// 创建一个 TreeMap 对象
Map<String, String> treeMap = new TreeMap<>();

// 向 TreeMap 中添加键值对
treeMap.put("c", "cat");
treeMap.put("a", "apple");
treeMap.put("b", "banana");

// 遍历 TreeMap
for (Map.Entry<String, String> entry : treeMap.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

<font style="color:rgb(44, 62, 80);">来看输出结果：</font>

```plain
a: apple
b: banana
c: cat
```

<font style="color:rgb(44, 62, 80);">默认情况下，已经按照键的自然顺序排过了。</font>





## ArrayList 详解（附源码）

### 创建 ArrayList

```java
ArrayList<String> alist = new ArrayList<String>();
```

<font style="color:rgb(44, 62, 80);">可以通过上面的语句来创建一个字符串类型的 ArrayList（通过尖括号来限定 ArrayList 中元素的类型，如果尝试添加其他类型的元素，将会产生编译错误），更简化的写法如下：</font>

```java
List<String> alist = new ArrayList<>();
```

<font style="color:rgb(44, 62, 80);">由于 ArrayList 实现了 List 接口，所以 alist 变量的类型可以是 List 类型；new 关键字声明后的尖括号中可以不再指定元素的类型，因为编译器可以通过前面尖括号中的类型进行智能推断。</font>

<font style="color:rgb(44, 62, 80);">此时会调用无参构造方法（见下面的代码）</font>**<font style="color:rgb(44, 62, 80);">创建一个空的数组，常量 DEFAULTCAPACITY_EMPTY_ELEMENTDATA 的值为 </font>**`**<font style="color:rgb(44, 62, 80);">{}</font>**`<font style="color:rgb(44, 62, 80);">。</font>

```plain
public ArrayList() {
    this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}
```

<font style="color:rgb(44, 62, 80);">如果非常确定 ArrayList 中元素的个数，在创建的时候还可以</font>**<font style="color:rgb(44, 62, 80);">指定初始大小</font>**<font style="color:rgb(44, 62, 80);">。</font>

```plain
List<String> alist = new ArrayList<>(20);
```

<font style="color:rgb(44, 62, 80);">这样做的好处是，可以有效地避免在添加新的元素时进行不必要的扩容。</font>

### 向 ArrayList 中添加元素

```plain
alist.add("沉默王二");
```

<font style="color:rgb(44, 62, 80);">我们来跟一下源码，看看 add 方法到底执行了哪些操作。跟的过程中，我们也可以偷师到 Java 源码的作者（大师级程序员）是如何优雅地写代码的。</font>

<font style="color:rgb(44, 62, 80);">我先给个结论，全当抛砖引玉。</font>

```plain
堆栈过程图示：
add(element)
└── if (size == elementData.length) // 判断是否需要扩容
    ├── grow(minCapacity) // 扩容
    │   └── newCapacity = oldCapacity + (oldCapacity >> 1) // 计算新的数组容量
    │   └── Arrays.copyOf(elementData, newCapacity) // 创建新的数组
    ├── elementData[size++] = element; // 添加新元素
    └── return true; // 添加成功
```

<font style="color:rgb(44, 62, 80);">来具体看一下，先是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码（已添加好详细地注释）</font>

```plain
/**
 * 将指定元素添加到 ArrayList 的末尾
 * @param e 要添加的元素
 * @return 添加成功返回 true
 */
public boolean add(E e) {
    ensureCapacityInternal(size + 1);  // 确保 ArrayList 能够容纳新的元素
    elementData[size++] = e; // 在 ArrayList 的末尾添加指定元素
    return true;
}
```

<font style="color:rgb(44, 62, 80);">参数 e 为要添加的元素，此时的值为“沉默王二”，size 为 ArrayList 的长度，此时为 0。</font>

<font style="color:rgb(44, 62, 80);">继续跟下去，来看看</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ensureCapacityInternal()</font>`<font style="color:rgb(44, 62, 80);">方法：</font>

```plain
/**
 * 确保 ArrayList 能够容纳指定容量的元素
 * @param minCapacity 指定容量的最小值
 */
private void ensureCapacityInternal(int minCapacity) {
    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) { // 如果 elementData 还是默认的空数组
        minCapacity = Math.max(DEFAULT_CAPACITY, minCapacity); // 使用 DEFAULT_CAPACITY 和指定容量的最小值中的较大值
    }

    ensureExplicitCapacity(minCapacity); // 确保容量能够容纳指定容量的元素
}
```

<font style="color:rgb(44, 62, 80);">此时：</font>

+ <font style="color:rgb(44, 62, 80);">参数 minCapacity 为 1（size+1 传过来的）</font>
+ <font style="color:rgb(44, 62, 80);">elementData 为存放 ArrayList 元素的底层数组，前面声明 ArrayList 的时候讲过了，此时为空</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">{}</font>`
+ <font style="color:rgb(44, 62, 80);">DEFAULTCAPACITY_EMPTY_ELEMENTDATA 前面也讲过了，为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">{}</font>`

<font style="color:rgb(44, 62, 80);">所以，if 条件此时为 true，if 语句</font>`<font style="color:rgb(44, 62, 80);">minCapacity = Math.max(DEFAULT_CAPACITY, minCapacity)</font>`<font style="color:rgb(44, 62, 80);">要执行。</font>

<font style="color:rgb(44, 62, 80);">DEFAULT_CAPACITY 为 10（见下面的代码），所以执行完这行代码后，minCapacity 为 10，</font>`<font style="color:rgb(44, 62, 80);">Math.max()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的作用是取两个当中最大的那个。</font>

```plain
private static final int DEFAULT_CAPACITY = 10;
```

<font style="color:rgb(44, 62, 80);">接下来执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ensureExplicitCapacity()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，来看一下源码：</font>

```plain
/**
 * 检查并确保集合容量足够，如果需要则增加集合容量。
 *
 * @param minCapacity 所需最小容量
 */
private void ensureExplicitCapacity(int minCapacity) {
    // 检查是否超出了数组范围，确保不会溢出
    if (minCapacity - elementData.length > 0)
        // 如果需要增加容量，则调用 grow 方法
        grow(minCapacity);
}
```

<font style="color:rgb(44, 62, 80);">此时：</font>

+ <font style="color:rgb(44, 62, 80);">参数 minCapacity 为 10</font>
+ <font style="color:rgb(44, 62, 80);">elementData.length 为 0（数组为空）</font>

<font style="color:rgb(44, 62, 80);">所以 10-0>0，if 条件为 true，进入 if 语句执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">grow()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，来看源码：</font>

```plain
/**
 * 扩容 ArrayList 的方法，确保能够容纳指定容量的元素
 * @param minCapacity 指定容量的最小值
 */
private void grow(int minCapacity) {
    // 检查是否会导致溢出，oldCapacity 为当前数组长度
    int oldCapacity = elementData.length;
    int newCapacity = oldCapacity + (oldCapacity >> 1); // 扩容至原来的1.5倍
    if (newCapacity - minCapacity < 0) // 如果还是小于指定容量的最小值
        newCapacity = minCapacity; // 直接扩容至指定容量的最小值
    if (newCapacity - MAX_ARRAY_SIZE > 0) // 如果超出了数组的最大长度
        newCapacity = hugeCapacity(minCapacity); // 扩容至数组的最大长度
    // 将当前数组复制到一个新数组中，长度为 newCapacity
    elementData = Arrays.copyOf(elementData, newCapacity);
}
```

<font style="color:rgb(44, 62, 80);">此时：</font>

+ <font style="color:rgb(44, 62, 80);">参数 minCapacity 为 10</font>
+ <font style="color:rgb(44, 62, 80);">变量 oldCapacity 为 0</font>

<font style="color:rgb(44, 62, 80);">所以 newCapacity 也为 0，于是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newCapacity - minCapacity</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">等于 -10 小于 0，于是第一个 if 条件为 true，执行第一个 if 语句</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newCapacity = minCapacity</font>`<font style="color:rgb(44, 62, 80);">，然后 newCapacity 为 10。</font>

<font style="color:rgb(44, 62, 80);">紧接着执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">elementData = Arrays.copyOf(elementData, newCapacity);</font>`<font style="color:rgb(44, 62, 80);">，也就是进行数组的第一次扩容，长度为 10。</font>

<font style="color:rgb(44, 62, 80);">回到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法：</font>

```plain
public boolean add(E e) {
    ensureCapacityInternal(size + 1);
    elementData[size++] = e;
    return true;
}
```

<font style="color:rgb(44, 62, 80);">执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">elementData[size++] = e</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">此时：</font>

+ <font style="color:rgb(44, 62, 80);">size 为 0</font>
+ <font style="color:rgb(44, 62, 80);">e 为 “沉默王二”</font>

<font style="color:rgb(44, 62, 80);">所以数组的第一个元素（下标为 0） 被赋值为“沉默王二”，接着返回 true，第一次 add 方法执行完毕。</font>

<font style="color:rgb(44, 62, 80);">PS：add 过程中会遇到一个令新手感到困惑的右移操作符</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">>></font>`<font style="color:rgb(44, 62, 80);">，借这个机会来解释一下。</font>

**<font style="color:rgb(44, 62, 80);">ArrayList 在第一次执行 add 后会扩容为 10</font>**<font style="color:rgb(44, 62, 80);">，那 ArrayList 第二次扩容发生在什么时候呢？</font>

<font style="color:rgb(44, 62, 80);">答案是添加第 11 个元素时，大家可以尝试分析一下这个过程。</font>

```plain
alist.add("沉默王二");
```

<font style="color:rgb(44, 62, 80);">我们来跟一下源码，看看 add 方法到底执行了哪些操作。跟的过程中，我们也可以偷师到 Java 源码的作者（大师级程序员）是如何优雅地写代码的。</font>

<font style="color:rgb(44, 62, 80);">我先给个结论，全当抛砖引玉。</font>

```plain
堆栈过程图示：
add(element)
└── if (size == elementData.length) // 判断是否需要扩容
    ├── grow(minCapacity) // 扩容
    │   └── newCapacity = oldCapacity + (oldCapacity >> 1) // 计算新的数组容量
    │   └── Arrays.copyOf(elementData, newCapacity) // 创建新的数组
    ├── elementData[size++] = element; // 添加新元素
    └── return true; // 添加成功
```

<font style="color:rgb(44, 62, 80);">来具体看一下，先是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码（已添加好详细地注释）</font>

```plain
/**
 * 将指定元素添加到 ArrayList 的末尾
 * @param e 要添加的元素
 * @return 添加成功返回 true
 */
public boolean add(E e) {
    ensureCapacityInternal(size + 1);  // 确保 ArrayList 能够容纳新的元素
    elementData[size++] = e; // 在 ArrayList 的末尾添加指定元素
    return true;
}
```

<font style="color:rgb(44, 62, 80);">参数 e 为要添加的元素，此时的值为“沉默王二”，size 为 ArrayList 的长度，此时为 0。</font>

<font style="color:rgb(44, 62, 80);">继续跟下去，来看看</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ensureCapacityInternal()</font>`<font style="color:rgb(44, 62, 80);">方法：</font>

```plain
/**
 * 确保 ArrayList 能够容纳指定容量的元素
 * @param minCapacity 指定容量的最小值
 */
private void ensureCapacityInternal(int minCapacity) {
    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) { // 如果 elementData 还是默认的空数组
        minCapacity = Math.max(DEFAULT_CAPACITY, minCapacity); // 使用 DEFAULT_CAPACITY 和指定容量的最小值中的较大值
    }

    ensureExplicitCapacity(minCapacity); // 确保容量能够容纳指定容量的元素
}
```

<font style="color:rgb(44, 62, 80);">此时：</font>

+ <font style="color:rgb(44, 62, 80);">参数 minCapacity 为 1（size+1 传过来的）</font>
+ <font style="color:rgb(44, 62, 80);">elementData 为存放 ArrayList 元素的底层数组，前面声明 ArrayList 的时候讲过了，此时为空</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">{}</font>`
+ <font style="color:rgb(44, 62, 80);">DEFAULTCAPACITY_EMPTY_ELEMENTDATA 前面也讲过了，为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">{}</font>`

<font style="color:rgb(44, 62, 80);">所以，if 条件此时为 true，if 语句</font>`<font style="color:rgb(44, 62, 80);">minCapacity = Math.max(DEFAULT_CAPACITY, minCapacity)</font>`<font style="color:rgb(44, 62, 80);">要执行。</font>

<font style="color:rgb(44, 62, 80);">DEFAULT_CAPACITY 为 10（见下面的代码），所以执行完这行代码后，minCapacity 为 10，</font>`<font style="color:rgb(44, 62, 80);">Math.max()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的作用是取两个当中最大的那个。</font>

```plain
private static final int DEFAULT_CAPACITY = 10;
```

<font style="color:rgb(44, 62, 80);">接下来执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ensureExplicitCapacity()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，来看一下源码：</font>

```plain
/**
 * 检查并确保集合容量足够，如果需要则增加集合容量。
 *
 * @param minCapacity 所需最小容量
 */
private void ensureExplicitCapacity(int minCapacity) {
    // 检查是否超出了数组范围，确保不会溢出
    if (minCapacity - elementData.length > 0)
        // 如果需要增加容量，则调用 grow 方法
        grow(minCapacity);
}
```

<font style="color:rgb(44, 62, 80);">此时：</font>

+ <font style="color:rgb(44, 62, 80);">参数 minCapacity 为 10</font>
+ <font style="color:rgb(44, 62, 80);">elementData.length 为 0（数组为空）</font>

<font style="color:rgb(44, 62, 80);">所以 10-0>0，if 条件为 true，进入 if 语句执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">grow()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，来看源码：</font>

```plain
/**
 * 扩容 ArrayList 的方法，确保能够容纳指定容量的元素
 * @param minCapacity 指定容量的最小值
 */
private void grow(int minCapacity) {
    // 检查是否会导致溢出，oldCapacity 为当前数组长度
    int oldCapacity = elementData.length;
    int newCapacity = oldCapacity + (oldCapacity >> 1); // 扩容至原来的1.5倍
    if (newCapacity - minCapacity < 0) // 如果还是小于指定容量的最小值
        newCapacity = minCapacity; // 直接扩容至指定容量的最小值
    if (newCapacity - MAX_ARRAY_SIZE > 0) // 如果超出了数组的最大长度
        newCapacity = hugeCapacity(minCapacity); // 扩容至数组的最大长度
    // 将当前数组复制到一个新数组中，长度为 newCapacity
    elementData = Arrays.copyOf(elementData, newCapacity);
}
```

<font style="color:rgb(44, 62, 80);">此时：</font>

+ <font style="color:rgb(44, 62, 80);">参数 minCapacity 为 10</font>
+ <font style="color:rgb(44, 62, 80);">变量 oldCapacity 为 0</font>

<font style="color:rgb(44, 62, 80);">所以 newCapacity 也为 0，于是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newCapacity - minCapacity</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">等于 -10 小于 0，于是第一个 if 条件为 true，执行第一个 if 语句</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newCapacity = minCapacity</font>`<font style="color:rgb(44, 62, 80);">，然后 newCapacity 为 10。</font>

<font style="color:rgb(44, 62, 80);">紧接着执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">elementData = Arrays.copyOf(elementData, newCapacity);</font>`<font style="color:rgb(44, 62, 80);">，也就是进行数组的第一次扩容，长度为 10。</font>

<font style="color:rgb(44, 62, 80);">回到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法：</font>

```plain
public boolean add(E e) {
    ensureCapacityInternal(size + 1);
    elementData[size++] = e;
    return true;
}
```

<font style="color:rgb(44, 62, 80);">执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">elementData[size++] = e</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">此时：</font>

+ <font style="color:rgb(44, 62, 80);">size 为 0</font>
+ <font style="color:rgb(44, 62, 80);">e 为 “沉默王二”</font>

<font style="color:rgb(44, 62, 80);">所以数组的第一个元素（下标为 0） 被赋值为“沉默王二”，接着返回 true，第一次 add 方法执行完毕。</font>

<font style="color:rgb(44, 62, 80);">PS：add 过程中会遇到一个令新手感到困惑的右移操作符</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">>></font>`<font style="color:rgb(44, 62, 80);">，借这个机会来解释一下。</font>

<font style="color:rgb(44, 62, 80);">ArrayList 在第一次执行 add 后会扩容为 10，那 ArrayList 第二次扩容发生在什么时候呢？</font>

<font style="color:rgb(44, 62, 80);">答案是添加第 11 个元素时，大家可以尝试分析一下这个过程。</font>

### 右移操作符

<font style="color:rgb(44, 62, 80);">“oldCapacity 等于 10，</font>`<font style="color:rgb(44, 62, 80);">oldCapacity >> 1</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这个表达式等于多少呢？三妹你知道吗？”我问三妹。</font>

<font style="color:rgb(44, 62, 80);">“不知道啊，</font>`<font style="color:rgb(44, 62, 80);">>></font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是什么意思呢？”三妹很疑惑。</font>

<font style="color:rgb(44, 62, 80);">“</font>`<font style="color:rgb(44, 62, 80);">>></font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是右移运算符，</font>`<font style="color:rgb(44, 62, 80);">oldCapacity >> 1</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">相当于 oldCapacity 除以 2。”我给三妹解释道，“在计算机内部，都是按照二进制存储的，10 的二进制就是 1010，也就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">0*2^0 + 1*2^1 + 0*2^2 + 1*2^3</font>`<font style="color:rgb(44, 62, 80);">=0+2+0+8=10 。。。。。。”</font>

<font style="color:rgb(44, 62, 80);">还没等我解释完，三妹就打断了我，“二哥，能再详细解释一下到底为什么吗？”</font>

<font style="color:rgb(44, 62, 80);">“当然可以啊。”我拍着胸脯对三妹说。</font>

<font style="color:rgb(44, 62, 80);">先从位权的含义说起吧。</font>

<font style="color:rgb(44, 62, 80);">平常我们使用的是十进制数，比如说 39，并不是简单的 3 和 9，3 表示的是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">3*10 = 30</font>`<font style="color:rgb(44, 62, 80);">，9 表示的是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">9*1 = 9</font>`<font style="color:rgb(44, 62, 80);">，和 3 相乘的 10，和 9 相乘的 1，就是</font>**<font style="color:rgb(44, 62, 80);">位权</font>**<font style="color:rgb(44, 62, 80);">。位数不同，位权就不同，第 1 位是 10 的 0 次方（也就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">10^0=1</font>`<font style="color:rgb(44, 62, 80);">），第 2 位是 10 的 1 次方（</font>`<font style="color:rgb(44, 62, 80);">10^1=10</font>`<font style="color:rgb(44, 62, 80);">），第 3 位是 10 的 2 次方（</font>`<font style="color:rgb(44, 62, 80);">10^2=100</font>`<font style="color:rgb(44, 62, 80);">），最右边的是第一位，依次类推。</font>

<font style="color:rgb(44, 62, 80);">位权这个概念同样适用于二进制，第 1 位是 2 的 0 次方（也就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">2^0=1</font>`<font style="color:rgb(44, 62, 80);">），第 2 位是 2 的 1 次方（</font>`<font style="color:rgb(44, 62, 80);">2^1=2</font>`<font style="color:rgb(44, 62, 80);">），第 3 位是 2 的 2 次方（</font>`<font style="color:rgb(44, 62, 80);">2^2=4</font>`<font style="color:rgb(44, 62, 80);">），第 4 位是 2 的 3 次方（</font>`<font style="color:rgb(44, 62, 80);">2^3=8</font>`<font style="color:rgb(44, 62, 80);">）。</font>

<font style="color:rgb(44, 62, 80);">十进制的情况下，10 是基数，二进制的情况下，2 是基数。</font>

<font style="color:rgb(44, 62, 80);">10 在十进制的表示法是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">0*10^0+1*10^1</font>`<font style="color:rgb(44, 62, 80);">=0+10=10。</font>

<font style="color:rgb(44, 62, 80);">10 的二进制数是 1010，也就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">0*2^0 + 1*2^1 + 0*2^2 + 1*2^3</font>`<font style="color:rgb(44, 62, 80);">=0+2+0+8=10。</font>

<font style="color:rgb(44, 62, 80);">然后是</font>**<font style="color:rgb(44, 62, 80);">移位运算</font>**<font style="color:rgb(44, 62, 80);">，移位分为左移和右移，在 Java 中，左移的运算符是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);"><<</font>`<font style="color:rgb(44, 62, 80);">，右移的运算符</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">>></font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">拿</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">oldCapacity >> 1</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来说吧，</font>`<font style="color:rgb(44, 62, 80);">>></font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">左边的是被移位的值，此时是 10，也就是二进制</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">1010</font>`<font style="color:rgb(44, 62, 80);">；</font>`<font style="color:rgb(44, 62, 80);">>></font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">右边的是要移位的位数，此时是 1。</font>

<font style="color:rgb(44, 62, 80);">1010 向右移一位就是 101，空出来的最高位此时要补 0，也就是 0101。</font>

<font style="color:rgb(44, 62, 80);">“那为什么不补 1 呢？”三妹这个问题很尖锐。</font>

<font style="color:rgb(44, 62, 80);">“因为是算术右移，并且是正数，所以最高位补 0；如果表示的是负数，就需要补 1。”我慢吞吞地回答道，“0101 的十进制就刚好是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">1*2^0 + 0*2^1 + 1*2^2 + 0*2^3</font>`<font style="color:rgb(44, 62, 80);">=1+0+4+0=5，如果多移几个数来找规律的话，就会发现，右移 1 位是原来的 1/2，右移 2 位是原来的 1/4，诸如此类。”</font>

<font style="color:rgb(44, 62, 80);">也就是说，ArrayList 的大小会扩容为原来的大小+原来大小/2，也就是 1.5 倍。</font>

<font style="color:rgb(44, 62, 80);">这下明白了吧？</font>

<font style="color:rgb(44, 62, 80);">你可以通过在 ArrayList 中添加第 11 个元素来 debug 验证一下。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726666819842-54c35d16-2cc6-478a-88f3-ccf179250c66.png" />


### 向指定 ArrayList 位置添加元素

<font style="color:rgb(44, 62, 80);">除了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add(E e)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，还可以通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add(int index, E element)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法把元素添加到 ArrayList 的指定位置：</font>

```plain
alist.add(0, "沉默王三");
```

`<font style="color:rgb(44, 62, 80);">add(int index, E element)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码如下：</font>

```plain
/**
 * 在指定位置插入一个元素。
 *
 * @param index   要插入元素的位置
 * @param element 要插入的元素
 * @throws IndexOutOfBoundsException 如果索引超出范围，则抛出此异常
 */
public void add(int index, E element) {
    rangeCheckForAdd(index); // 检查索引是否越界

    ensureCapacityInternal(size + 1);  // 确保容量足够，如果需要扩容就扩容
    System.arraycopy(elementData, index, elementData, index + 1,
            size - index); // 将 index 及其后面的元素向后移动一位
    elementData[index] = element; // 将元素插入到指定位置
    size++; // 元素个数加一
}
```

`<font style="color:rgb(44, 62, 80);">add(int index, E element)</font>`<font style="color:rgb(44, 62, 80);">方法会调用到一个非常重要的</font>[<font style="color:rgb(44, 62, 80);">本地方法</font>](https://javabetter.cn/oo/native-method.html)<font style="color:rgb(44, 62, 80);"> </font>`**<font style="color:rgb(44, 62, 80);">System.arraycopy()</font>**`<font style="color:rgb(44, 62, 80);">，它</font>**<font style="color:rgb(44, 62, 80);">会对数组进行复制（要插入位置上的元素往后复制）</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">来细品一下。</font>

<font style="color:rgb(44, 62, 80);">这是 </font>**<font style="color:rgb(44, 62, 80);">arraycopy() </font>**<font style="color:rgb(44, 62, 80);">的语法：</font>

```plain
System.arraycopy(Object src, int srcPos, Object dest, int destPos, int length);
```

<font style="color:rgb(44, 62, 80);">在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ArrayList.add(int index, E element)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法中，具体用法如下：</font>

```plain
System.arraycopy(elementData, index, elementData, index + 1, size - index);
```

+ <font style="color:rgb(44, 62, 80);">elementData：表示要复制的源数组，即 ArrayList 中的元素数组。</font>
+ <font style="color:rgb(44, 62, 80);">index：表示源数组中要复制的起始位置，即需要将 index 及其后面的元素向后移动一位。</font>
+ <font style="color:rgb(44, 62, 80);">elementData：表示要复制到的目标数组，即 ArrayList 中的元素数组。</font>
+ <font style="color:rgb(44, 62, 80);">index + 1：表示目标数组中复制的起始位置，即将 index 及其后面的元素向后移动一位后，应该插入到的位置。</font>
+ <font style="color:rgb(44, 62, 80);">size - index：表示要复制的元素个数，即需要将 index 及其后面的元素向后移动一位，需要移动的元素个数为 size - index。</font>

<font style="color:rgb(44, 62, 80);">“三妹，注意看，我画幅图来表示下。”我认真地做起了图。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726666870523-dce8f2fe-4588-4b8e-b839-0b022811f465.png" />


### <font style="color:rgb(44, 62, 80);">更新 ArrayList 中的元素</font>

<font style="color:rgb(44, 62, 80);">“二哥，那怎么</font>**<font style="color:rgb(44, 62, 80);">更新 ArrayList 中的元素</font>**<font style="color:rgb(44, 62, 80);">呢？ ”三妹继续问。</font>

<font style="color:rgb(44, 62, 80);">可以使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">set()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法来更改 ArrayList 中的元素，需要提供下标和新元素。</font>

```plain
alist.set(0, "沉默王四");
```

<font style="color:rgb(44, 62, 80);">假设原来 0 位置上的元素为“沉默王三”，现在可以将其更新为“沉默王四”。</font>

<font style="color:rgb(44, 62, 80);">来看一下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">set()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码：</font>

```plain
/**
 * 用指定元素替换指定位置的元素。
 *
 * @param index   要替换的元素的索引
 * @param element 要存储在指定位置的元素
 * @return 先前在指定位置的元素
 * @throws IndexOutOfBoundsException 如果索引超出范围，则抛出此异常
 */
public E set(int index, E element) {
    rangeCheck(index); // 检查索引是否越界

    E oldValue = elementData(index); // 获取原来在指定位置上的元素
    elementData[index] = element; // 将新元素替换到指定位置上
    return oldValue; // 返回原来在指定位置上的元素
}
```

<font style="color:rgb(44, 62, 80);">该方法会先对指定的下标进行检查，看是否越界，然后替换新值并返回旧值。</font>

### <font style="color:rgb(44, 62, 80);">删除 ArrayList 中的元素</font>

<font style="color:rgb(44, 62, 80);">“二哥，那怎么</font>**<font style="color:rgb(44, 62, 80);">删除 ArrayList 中的元素</font>**<font style="color:rgb(44, 62, 80);">呢？”三妹继续问。</font>

`<font style="color:rgb(44, 62, 80);">remove(int index)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于删除指定下标位置上的元素，</font>`<font style="color:rgb(44, 62, 80);">remove(Object o)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于删除指定值的元素。</font>

```plain
alist.remove(1);
alist.remove("沉默王四");
```

<font style="color:rgb(44, 62, 80);">先来看</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">remove(int index)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码：</font>

```plain
/**
 * 删除指定位置的元素。
 *
 * @param index 要删除的元素的索引
 * @return 先前在指定位置的元素
 * @throws IndexOutOfBoundsException 如果索引超出范围，则抛出此异常
 */
public E remove(int index) {
    rangeCheck(index); // 检查索引是否越界

    E oldValue = elementData(index); // 获取要删除的元素

    int numMoved = size - index - 1; // 计算需要移动的元素个数
    if (numMoved > 0) // 如果需要移动元素，就用 System.arraycopy 方法实现
        System.arraycopy(elementData, index+1, elementData, index,
                numMoved);
    elementData[--size] = null; // 将数组末尾的元素置为 null，让 GC 回收该元素占用的空间

    return oldValue; // 返回被删除的元素
}
```

<font style="color:rgb(44, 62, 80);">需要注意的是，在 ArrayList 中，删除元素时，需要将删除位置后面的元素向前移动一位，以填补删除位置留下的空缺。如果需要移动元素，则需要使用 System.arraycopy 方法将删除位置后面的元素向前移动一位。最后，将数组末尾的元素置为 null，以便让垃圾回收机制回收该元素占用的空间。</font>

<font style="color:rgb(44, 62, 80);">再来看</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">remove(Object o)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码：</font>

```plain
/**
 * 删除列表中第一次出现的指定元素（如果存在）。
 *
 * @param o 要删除的元素
 * @return 如果列表包含指定元素，则返回 true；否则返回 false
 */
public boolean remove(Object o) {
    if (o == null) { // 如果要删除的元素是 null
        for (int index = 0; index < size; index++) // 遍历列表
            if (elementData[index] == null) { // 如果找到了 null 元素
                fastRemove(index); // 调用 fastRemove 方法快速删除元素
                return true; // 返回 true，表示成功删除元素
            }
    } else { // 如果要删除的元素不是 null
        for (int index = 0; index < size; index++) // 遍历列表
            if (o.equals(elementData[index])) { // 如果找到了要删除的元素
                fastRemove(index); // 调用 fastRemove 方法快速删除元素
                return true; // 返回 true，表示成功删除元素
            }
    }
    return false; // 如果找不到要删除的元素，则返回 false
}
```

<font style="color:rgb(44, 62, 80);">该方法通过遍历的方式找到要删除的元素，null 的时候使用 == 操作符判断，非 null 的时候使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，然后调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">fastRemove()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

<font style="color:rgb(44, 62, 80);">注意：</font>

+ <font style="color:rgb(44, 62, 80);">有相同元素时，只会删除第一个。</font>
+ <font style="color:rgb(44, 62, 80);">判断两个元素是否相等，可以参考</font>[<font style="color:rgb(44, 62, 80);">Java如何判断两个字符串是否相等</font>](https://javabetter.cn/string/equals.html)

<font style="color:rgb(44, 62, 80);">继续往后面跟，来看一下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">fastRemove()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法：</font>

```plain
/**
 * 快速删除指定位置的元素。
 *
 * @param index 要删除的元素的索引
 */
private void fastRemove(int index) {
    int numMoved = size - index - 1; // 计算需要移动的元素个数
    if (numMoved > 0) // 如果需要移动元素，就用 System.arraycopy 方法实现
        System.arraycopy(elementData, index+1, elementData, index,
                numMoved);
    elementData[--size] = null; // 将数组末尾的元素置为 null，让 GC 回收该元素占用的空间
}
```

<font style="color:rgb(44, 62, 80);">同样是调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">System.arraycopy()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法对数组进行复制和移动。</font>

<font style="color:rgb(44, 62, 80);">“三妹，注意看，我画幅图来表示下。”我认真地做起了图。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726666870509-bb5402aa-5283-4381-8067-e7e22307a2a2.png" />


### <font style="color:rgb(44, 62, 80);">查找 ArrayList 中的元素</font>

<font style="color:rgb(44, 62, 80);">“二哥，那怎么</font>**<font style="color:rgb(44, 62, 80);">查找 ArrayList 中的元素</font>**<font style="color:rgb(44, 62, 80);">呢？”三妹继续问。</font>

<font style="color:rgb(44, 62, 80);">如果要正序查找一个元素，可以使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">indexOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法；如果要倒序查找一个元素，可以使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">lastIndexOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

```plain
alist.indexOf("沉默王二");
alist.lastIndexOf("沉默王二");
```

<font style="color:rgb(44, 62, 80);">来看一下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">indexOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码：</font>

```plain
/**
 * 返回指定元素在列表中第一次出现的位置。
 * 如果列表不包含该元素，则返回 -1。
 *
 * @param o 要查找的元素
 * @return 指定元素在列表中第一次出现的位置；如果列表不包含该元素，则返回 -1
 */
public int indexOf(Object o) {
    if (o == null) { // 如果要查找的元素是 null
        for (int i = 0; i < size; i++) // 遍历列表
            if (elementData[i]==null) // 如果找到了 null 元素
                return i; // 返回元素的索引
    } else { // 如果要查找的元素不是 null
        for (int i = 0; i < size; i++) // 遍历列表
            if (o.equals(elementData[i])) // 如果找到了要查找的元素
                return i; // 返回元素的索引
    }
    return -1; // 如果找不到要查找的元素，则返回 -1
}
```

<font style="color:rgb(44, 62, 80);">如果元素为 null 的时候使用“==”操作符，否则使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">equals()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

`<font style="color:rgb(44, 62, 80);">lastIndexOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">indexOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法类似，不过遍历的时候从最后开始。</font>

```plain
/**
 * 返回指定元素在列表中最后一次出现的位置。
 * 如果列表不包含该元素，则返回 -1。
 *
 * @param o 要查找的元素
 * @return 指定元素在列表中最后一次出现的位置；如果列表不包含该元素，则返回 -1
 */
public int lastIndexOf(Object o) {
    if (o == null) { // 如果要查找的元素是 null
        for (int i = size-1; i >= 0; i--) // 从后往前遍历列表
            if (elementData[i]==null) // 如果找到了 null 元素
                return i; // 返回元素的索引
    } else { // 如果要查找的元素不是 null
        for (int i = size-1; i >= 0; i--) // 从后往前遍历列表
            if (o.equals(elementData[i])) // 如果找到了要查找的元素
                return i; // 返回元素的索引
    }
    return -1; // 如果找不到要查找的元素，则返回 -1
}
```

`<font style="color:rgb(44, 62, 80);">contains()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法可以判断 ArrayList 中是否包含某个元素，其内部就是通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">indexOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法实现的：</font>

```plain
public boolean contains(Object o) {
    return indexOf(o) >= 0;
}
```

### <font style="color:rgb(44, 62, 80);">二分查找法</font>

<font style="color:rgb(44, 62, 80);">如果 ArrayList 中的元素是经过排序的，就可以使用二分查找法，效率更快。</font>

[<font style="color:rgb(44, 62, 80);">Collections</font>](https://javabetter.cn/common-tool/collections.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">sort()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法可以对 ArrayList 进行排序，该方法会按照字母顺序对 String 类型的列表进行排序。如果是自定义类型的列表，还可以指定 Comparator 进行排序。</font>

<font style="color:rgb(44, 62, 80);">这里先简单地了解一下，后面会详细地讲。</font>

```plain
List<String> copy = new ArrayList<>(alist);
copy.add("a");
copy.add("c");
copy.add("b");
copy.add("d");

Collections.sort(copy);
System.out.println(copy);
```

<font style="color:rgb(44, 62, 80);">输出结果如下所示：</font>

```plain
[a, b, c, d]
```

<font style="color:rgb(44, 62, 80);">排序后就可以使用二分查找法了：</font>

```plain
int index = Collections.binarySearch(copy, "b");
```

### <font style="color:rgb(44, 62, 80);">ArrayList增删改查时的时间复杂度</font>

<font style="color:rgb(44, 62, 80);">“最后，三妹，我们来简单总结一下 ArrayList 的时间复杂度吧，方便后面学习 LinkedList 时对比。”我喝了一口水后补充道。</font>

#### <font style="color:rgb(44, 62, 80);">查询</font>

<font style="color:rgb(44, 62, 80);">时间复杂度为 O(1)，因为 ArrayList 内部使用数组来存储元素，所以可以直接根据索引来访问元素。</font>

```plain
/**
 * 返回列表中指定位置的元素。
 *
 * @param index 要返回的元素的索引
 * @return 列表中指定位置的元素
 * @throws IndexOutOfBoundsException 如果索引超出范围（index < 0 || index >= size()）
 */
public E get(int index) {
    rangeCheck(index); // 检查索引是否合法
    return elementData(index); // 调用 elementData 方法获取元素
}

/**
 * 返回列表中指定位置的元素。
 * 此方法不进行边界检查，因此只应由内部方法和迭代器调用。
 *
 * @param index 要返回的元素的索引
 * @return 列表中指定位置的元素
 */
E elementData(int index) {
    return (E) elementData[index]; // 返回指定索引位置上的元素
}
```

#### <font style="color:rgb(44, 62, 80);">插入</font>

<font style="color:rgb(44, 62, 80);">添加一个元素（调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">add()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法时）的时间复杂度最好情况为 O(1)，最坏情况为 O(n)。</font>

+ <font style="color:rgb(44, 62, 80);">如果在列表末尾添加元素，时间复杂度为 O(1)。</font>
+ <font style="color:rgb(44, 62, 80);">如果要在列表的中间或开头插入元素，则需要将插入位置之后的元素全部向后移动一位，时间复杂度为 O(n)。</font>

#### <font style="color:rgb(44, 62, 80);">删除</font>

<font style="color:rgb(44, 62, 80);">删除一个元素（调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">remove(Object)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法时）的时间复杂度最好情况 O(1)，最坏情况 O(n)。</font>

+ <font style="color:rgb(44, 62, 80);">如果要删除列表末尾的元素，时间复杂度为 O(1)。</font>
+ <font style="color:rgb(44, 62, 80);">如果要删除列表中间或开头的元素，则需要将删除位置之后的元素全部向前移动一位，时间复杂度为 O(n)。</font>

#### <font style="color:rgb(44, 62, 80);">修改</font>

<font style="color:rgb(44, 62, 80);">修改一个元素（调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">set()</font>`<font style="color:rgb(44, 62, 80);">方法时）与查询操作类似，可以直接根据索引来访问元素，时间复杂度为 O(1)。</font>

```plain
/**
 * 用指定元素替换列表中指定位置的元素。
 *
 * @param index 要替换元素的索引
 * @param element 要放入列表中的元素
 * @return 原来在指定位置上的元素
 * @throws IndexOutOfBoundsException 如果索引超出范围（index < 0 || index >= size()）
 */
public E set(int index, E element) {
    rangeCheck(index); // 检查索引是否合法

    E oldValue = elementData(index); // 获取原来在指定位置上的元素
    elementData[index] = element; // 将指定位置上的元素替换为新元素
    return oldValue; // 返回原来在指定位置上的元素
}
```

### <font style="color:rgb(44, 62, 80);">总结</font>

<font style="color:rgb(44, 62, 80);">ArrayList，如果有个中文名的话，应该叫动态数组，也就是可增长的数组，可调整大小的数组。动态数组克服了静态数组的限制，静态数组的容量是固定的，只能在首次创建的时候指定。而动态数组会随着元素的增加自动调整大小，更符合实际的开发需求。</font>

<font style="color:rgb(44, 62, 80);">学习集合框架，ArrayList 是第一课，也是新手进阶的重要一课。要想完全掌握 ArrayList，扩容这个机制是必须得掌握，也是面试中经常考察的一个点。</font>

<font style="color:rgb(44, 62, 80);">要想掌握扩容机制，就必须得读源码，也就肯定会遇到 </font>`<font style="color:rgb(44, 62, 80);">oldCapacity >> 1</font>`<font style="color:rgb(44, 62, 80);">，有些初学者会选择跳过，虽然不影响整体上的学习，但也错过了一个精进的机会</font>

## LinkedList

<font style="color:rgb(44, 62, 80);">大家好，我是 LinkedList，和 ArrayList 是同门师兄弟，但我俩练的内功却完全不同。师兄练的是动态数组，我练的是链表。</font>

<font style="color:rgb(44, 62, 80);">问大家一个问题，知道我为什么要练链表这门内功吗？</font>

<font style="color:rgb(44, 62, 80);">举个例子来讲吧，假如你们手头要管理一推票据，可能有一张，也可能有一亿张。</font>

<font style="color:rgb(44, 62, 80);">该怎么办呢？</font>

<font style="color:rgb(44, 62, 80);">申请一个 10G 的大数组等着？那万一票据只有 100 张呢？</font>

<font style="color:rgb(44, 62, 80);">申请一个默认大小的数组，随着数据量的增大扩容？要知道扩容是需要重新复制数组的，很耗时间。</font>

<font style="color:rgb(44, 62, 80);">关键是，数组还有一个弊端就是，假如现在有 500 万张票据，现在要从中间删除一个票据，就需要把 250 万张票据往前移动一格。</font>

<font style="color:rgb(44, 62, 80);">遇到这种情况的时候，我师兄几乎情绪崩溃，难受的要命。师父不忍心看到师兄这样痛苦，于是打我进入师门那一天，就强迫我练链表这门内功，一开始我很不理解，害怕师父偏心，不把师门最厉害的内功教我。</font>

<font style="color:rgb(44, 62, 80);">直到有一天，我亲眼目睹师兄差点因为移动数据而走火入魔，我才明白师父的良苦用心。从此以后，我苦练“链表”这门内功，取得了显著的进步，师父和师兄都夸我有天赋。</font>

<font style="color:rgb(44, 62, 80);">链表这门内功大致分为三个层次：</font>

+ <font style="color:rgb(44, 62, 80);">第一层叫做“单向链表”，我只有一个后指针，指向下一个数据；</font>
+ <font style="color:rgb(44, 62, 80);">第二层叫做“双向链表”，我有两个指针，后指针指向下一个数据，前指针指向上一个数据。</font>
+ <font style="color:rgb(44, 62, 80);">第三层叫做“二叉树”，把后指针去掉，换成左右指针。</font>

<font style="color:rgb(44, 62, 80);">但我现在的功力还达不到第三层，不过师父说我有这个潜力，练成神功是早晚的事。但可悲的是，我爹一直嫌弃我。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668224511-9f2029f4-115c-4899-8b46-62415b8b6850.png" />


<font style="color:rgb(44, 62, 80);">Josh Bloch是 Java 集合框架的作者</font>

<font style="color:rgb(44, 62, 80);">LinkedList的内功心法</font>

<font style="color:rgb(44, 62, 80);">好了，经过我这么样的一个剖白后，大家对我应该已经不陌生了。那么接下来，我给大家展示一下我的内功心法。</font>

<font style="color:rgb(44, 62, 80);">我的内功心法主要是一个私有的静态内部类，叫 Node，也就是节点。</font>

```plain
/**
 * 链表中的节点类。
 */
private static class Node<E> {
    E item; // 节点中存储的元素
    Node<E> next; // 指向下一个节点的指针
    Node<E> prev; // 指向上一个节点的指针

    /**
     * 构造一个新的节点。
     *
     * @param prev 前一个节点
     * @param element 节点中要存储的元素
     * @param next 后一个节点
     */
    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element; // 存储元素
        this.next = next; // 设置下一个节点
        this.prev = prev; // 设置上一个节点
    }
}
```

<font style="color:rgb(44, 62, 80);">它由三部分组成：</font>

+ <font style="color:rgb(44, 62, 80);">节点上的元素</font>
+ <font style="color:rgb(44, 62, 80);">下一个节点</font>
+ <font style="color:rgb(44, 62, 80);">上一个节点</font>

<font style="color:rgb(44, 62, 80);">我画幅图给你们展示下吧。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668222484-7a90a738-a0be-4a1f-a7b3-39f71577d427.png" />


+ <font style="color:rgb(44, 62, 80);">对于第一个节点来说，prev 为 null；</font>
+ <font style="color:rgb(44, 62, 80);">对于最后一个节点来说，next 为 null；</font>
+ <font style="color:rgb(44, 62, 80);">其余的节点呢，prev 指向前一个，next 指向后一个。</font>

<font style="color:rgb(44, 62, 80);">我的内功心法就这么简单，其实我早已经牢记在心了。但师父叮嘱我，每天早上醒来的时候，每天晚上睡觉的时候，一定要默默地背诵一遍。虽然我有些厌烦，但我对师父的教诲从来都是言听计从。</font>

[<font style="color:rgb(44, 62, 80);">02、LinkedList的招式</font>](https://javabetter.cn/collection/linkedlist.html#_02%E3%80%81linkedlist%E7%9A%84%E6%8B%9B%E5%BC%8F)

<font style="color:rgb(44, 62, 80);">和师兄 ArrayList 一样，我的招式也无外乎“增删改查”这 4 种。在此之前，我们都必须得初始化。</font>

```plain
LinkedList<String> list = new LinkedList();
```

<font style="color:rgb(44, 62, 80);">师兄在初始化的时候可以指定大小，也可以不指定，等到添加第一个元素的时候进行第一次扩容。而我，没有大小，只要内存够大，我就可以无穷大。</font>

### <font style="color:rgb(44, 62, 80);">招式一：增</font>

<font style="color:rgb(44, 62, 80);">可以调用 add 方法添加元素：</font>

```plain
list.add("沉默王二");
list.add("沉默王三");
list.add("沉默王四");
```

<font style="color:rgb(44, 62, 80);">add 方法内部其实调用的是 linkLast 方法：</font>

```plain
/**
 * 将指定的元素添加到列表的尾部。
 *
 * @param e 要添加到列表的元素
 * @return 始终为 true（根据 Java 集合框架规范）
 */
public boolean add(E e) {
    linkLast(e); // 在列表的尾部添加元素
    return true; // 添加元素成功，返回 true
}
```

<font style="color:rgb(44, 62, 80);">linkLast，顾名思义，就是在链表的尾部添加元素：</font>

```plain
/**
 * 在列表的尾部添加指定的元素。
 *
 * @param e 要添加到列表的元素
 */
void linkLast(E e) {
    final Node<E> l = last; // 获取链表的最后一个节点
    final Node<E> newNode = new Node<>(l, e, null); // 创建一个新的节点，并将其设置为链表的最后一个节点
    last = newNode; // 将新的节点设置为链表的最后一个节点
    if (l == null) // 如果链表为空，则将新节点设置为头节点
        first = newNode;
    else
        l.next = newNode; // 否则将新节点链接到链表的尾部
    size++; // 增加链表的元素个数
}
```

+ <font style="color:rgb(44, 62, 80);">添加第一个元素的时候，first 和 last 都为 null。</font>
+ <font style="color:rgb(44, 62, 80);">然后新建一个节点 newNode，它的 prev 和 next 也为 null。</font>
+ <font style="color:rgb(44, 62, 80);">然后把 last 和 first 都赋值为 newNode。</font>

<font style="color:rgb(44, 62, 80);">此时还不能称之为链表，因为前后节点都是断裂的。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668222260-67157bfe-f45b-4f54-b269-773bdd1aebcd.png" />


+ <font style="color:rgb(44, 62, 80);">添加第二个元素的时候，first 和 last 都指向的是第一个节点。</font>
+ <font style="color:rgb(44, 62, 80);">然后新建一个节点 newNode，它的 prev 指向的是第一个节点，next 为 null。</font>
+ <font style="color:rgb(44, 62, 80);">然后把第一个节点的 next 赋值为 newNode。</font>

<font style="color:rgb(44, 62, 80);">此时的链表还不完整。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668222235-2a10dd90-41c3-4839-95e1-7ffb50b1ac98.png" />


+ <font style="color:rgb(44, 62, 80);">添加第三个元素的时候，first 指向的是第一个节点，last 指向的是最后一个节点。</font>
+ <font style="color:rgb(44, 62, 80);">然后新建一个节点 newNode，它的 prev 指向的是第二个节点，next 为 null。</font>
+ <font style="color:rgb(44, 62, 80);">然后把第二个节点的 next 赋值为 newNode。</font>

<font style="color:rgb(44, 62, 80);">此时的链表已经完整了。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668222528-68c9e200-837f-4f66-884a-65a5a7f48501.png" />


<font style="color:rgb(44, 62, 80);">我这个增的招式，还可以演化成另外两个版本：</font>

+ `<font style="color:rgb(44, 62, 80);">addFirst()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将元素添加到第一位；</font>
+ `<font style="color:rgb(44, 62, 80);">addLast()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将元素添加到末尾。</font>

<font style="color:rgb(44, 62, 80);">addFirst 内部其实调用的是 linkFirst：</font>

```plain
/**
 * 在列表的开头添加指定的元素。
 *
 * @param e 要添加到列表的元素
 */
public void addFirst(E e) {
    linkFirst(e); // 在列表的开头添加元素
}
```

<font style="color:rgb(44, 62, 80);">linkFirst 负责把新的节点设为 first，并将新的 first 的 next 更新为之前的 first。</font>

```plain
/**
 * 在列表的开头添加指定的元素。
 *
 * @param e 要添加到列表的元素
 */
private void linkFirst(E e) {
    final Node<E> f = first; // 获取链表的第一个节点
    final Node<E> newNode = new Node<>(null, e, f); // 创建一个新的节点，并将其设置为链表的第一个节点
    first = newNode; // 将新的节点设置为链表的第一个节点
    if (f == null) // 如果链表为空，则将新节点设置为尾节点
        last = newNode;
    else
        f.prev = newNode; // 否则将新节点链接到链表的头部
    size++; // 增加链表的元素个数
}
```

<font style="color:rgb(44, 62, 80);">addLast 的内核其实和 addFirst 差不多，内部调用的是 linkLast 方法，前面分析过了。</font>

```plain
/**
 * 在列表的尾部添加指定的元素。
 *
 * @param e 要添加到列表的元素
 * @return 始终为 true（根据 Java 集合框架规范）
 */
public boolean addLast(E e) {
    linkLast(e); // 在列表的尾部添加元素
    return true; // 添加元素成功，返回 true
}
```

### <font style="color:rgb(44, 62, 80);">招式二：删</font>

<font style="color:rgb(44, 62, 80);">我这个删的招式还挺多的：</font>

+ `<font style="color:rgb(44, 62, 80);">remove()</font>`<font style="color:rgb(44, 62, 80);">：删除第一个节点</font>
+ `<font style="color:rgb(44, 62, 80);">remove(int)</font>`<font style="color:rgb(44, 62, 80);">：删除指定位置的节点</font>
+ `<font style="color:rgb(44, 62, 80);">remove(Object)</font>`<font style="color:rgb(44, 62, 80);">：删除指定元素的节点</font>
+ `<font style="color:rgb(44, 62, 80);">removeFirst()</font>`<font style="color:rgb(44, 62, 80);">：删除第一个节点</font>
+ `<font style="color:rgb(44, 62, 80);">removeLast()</font>`<font style="color:rgb(44, 62, 80);">：删除最后一个节点</font>

`<font style="color:rgb(44, 62, 80);">remove()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">内部调用的是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">removeFirst()</font>`<font style="color:rgb(44, 62, 80);">，所以这两个招式的功效一样。</font>

`<font style="color:rgb(44, 62, 80);">remove(int)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">内部其实调用的是 unlink 方法。</font>

```plain
/**
 * 删除指定位置上的元素。
 *
 * @param index 要删除的元素的索引
 * @return 从列表中删除的元素
 * @throws IndexOutOfBoundsException 如果索引越界（index &lt; 0 || index &gt;= size()）
 */
public E remove(int index) {
    checkElementIndex(index); // 检查索引是否越界
    return unlink(node(index)); // 删除指定位置的节点，并返回节点的元素
}
```

<font style="color:rgb(44, 62, 80);">unlink 方法其实很好理解，就是更新当前节点的 next 和 prev，然后把当前节点上的元素设为 null。</font>

```plain
/**
 * 从链表中删除指定节点。
 *
 * @param x 要删除的节点
 * @return 从链表中删除的节点的元素
 */
E unlink(Node<E> x) {
    final E element = x.item; // 获取要删除节点的元素
    final Node<E> next = x.next; // 获取要删除节点的下一个节点
    final Node<E> prev = x.prev; // 获取要删除节点的上一个节点

    if (prev == null) { // 如果要删除节点是第一个节点
        first = next; // 将链表的头节点设置为要删除节点的下一个节点
    } else {
        prev.next = next; // 将要删除节点的上一个节点指向要删除节点的下一个节点
        x.prev = null; // 将要删除节点的上一个节点设置为空
    }

    if (next == null) { // 如果要删除节点是最后一个节点
        last = prev; // 将链表的尾节点设置为要删除节点的上一个节点
    } else {
        next.prev = prev; // 将要删除节点的下一个节点指向要删除节点的上一个节点
        x.next = null; // 将要删除节点的下一个节点设置为空
    }

    x.item = null; // 将要删除节点的元素设置为空
    size--; // 减少链表的元素个数
    return element; // 返回被删除节点的元素
}
```

<font style="color:rgb(44, 62, 80);">remove(Object) 内部也调用了 unlink 方法，只不过在此之前要先找到元素所在的节点：</font>

```plain
/**
 * 从链表中删除指定元素。
 *
 * @param o 要从链表中删除的元素
 * @return 如果链表包含指定元素，则返回 true；否则返回 false
 */
public boolean remove(Object o) {
    if (o == null) { // 如果要删除的元素为 null
        for (Node<E> x = first; x != null; x = x.next) { // 遍历链表
            if (x.item == null) { // 如果节点的元素为 null
                unlink(x); // 删除节点
                return true; // 返回 true 表示删除成功
            }
        }
    } else { // 如果要删除的元素不为 null
        for (Node<E> x = first; x != null; x = x.next) { // 遍历链表
            if (o.equals(x.item)) { // 如果节点的元素等于要删除的元素
                unlink(x); // 删除节点
                return true; // 返回 true 表示删除成功
            }
        }
    }
    return false; // 如果链表中不包含要删除的元素，则返回 false 表示删除失败
}
```

<font style="color:rgb(44, 62, 80);">元素为 null 的时候，必须使用 == 来判断；元素为非 null 的时候，要使用 equals 来判断。</font>

<font style="color:rgb(44, 62, 80);">removeFirst 内部调用的是 unlinkFirst 方法：</font>

```plain
/**
 * 从链表中删除第一个元素并返回它。
 * 如果链表为空，则抛出 NoSuchElementException 异常。
 *
 * @return 从链表中删除的第一个元素
 * @throws NoSuchElementException 如果链表为空
 */
public E removeFirst() {
    final Node<E> f = first; // 获取链表的第一个节点
    if (f == null) // 如果链表为空
        throw new NoSuchElementException(); // 抛出 NoSuchElementException 异常
    return unlinkFirst(f); // 调用 unlinkFirst 方法删除第一个节点并返回它的元素
}
```

<font style="color:rgb(44, 62, 80);">unlinkFirst 负责的就是把第一个节点毁尸灭迹，并且捎带把后一个节点的 prev 设为 null。</font>

```plain
/**
 * 删除链表中的第一个节点并返回它的元素。
 *
 * @param f 要删除的第一个节点
 * @return 被删除节点的元素
 */
private E unlinkFirst(Node<E> f) {
    final E element = f.item; // 获取要删除的节点的元素
    final Node<E> next = f.next; // 获取要删除的节点的下一个节点
    f.item = null; // 将要删除的节点的元素设置为 null
    f.next = null; // 将要删除的节点的下一个节点设置为 null
    first = next; // 将链表的头节点设置为要删除的节点的下一个节点
    if (next == null) // 如果链表只有一个节点
        last = null; // 将链表的尾节点设置为 null
    else
        next.prev = null; // 将要删除节点的下一个节点的前驱设置为 null
    size--; // 减少链表的大小
    return element; // 返回被删除节点的元素
}
```

### <font style="color:rgb(44, 62, 80);">招式三：改</font>

<font style="color:rgb(44, 62, 80);">可以调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">set()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法来更新元素：</font>

```plain
list.set(0, "沉默王五");
```

<font style="color:rgb(44, 62, 80);">来看一下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">set()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法：</font>

```plain
/**
 * 将链表中指定位置的元素替换为指定元素，并返回原来的元素。
 *
 * @param index 要替换元素的位置（从 0 开始）
 * @param element 要插入的元素
 * @return 替换前的元素
 * @throws IndexOutOfBoundsException 如果索引超出范围（index < 0 || index >= size()）
 */
public E set(int index, E element) {
    checkElementIndex(index); // 检查索引是否超出范围
    Node<E> x = node(index); // 获取要替换的节点
    E oldVal = x.item; // 获取要替换节点的元素
    x.item = element; // 将要替换的节点的元素设置为指定元素
    return oldVal; // 返回替换前的元素
}
```

<font style="color:rgb(44, 62, 80);">来看一下node方法：</font>

```plain
/**
 * 获取链表中指定位置的节点。
 *
 * @param index 节点的位置（从 0 开始）
 * @return 指定位置的节点
 * @throws IndexOutOfBoundsException 如果索引超出范围（index < 0 || index >= size()）
 */
Node<E> node(int index) {
    if (index < (size >> 1)) { // 如果索引在链表的前半部分
        Node<E> x = first;
        for (int i = 0; i < index; i++) // 从头节点开始向后遍历链表，直到找到指定位置的节点
            x = x.next;
        return x; // 返回指定位置的节点
    } else { // 如果索引在链表的后半部分
        Node<E> x = last;
        for (int i = size - 1; i > index; i--) // 从尾节点开始向前遍历链表，直到找到指定位置的节点
            x = x.prev;
        return x; // 返回指定位置的节点
    }
}
```

`<font style="color:rgb(44, 62, 80);">size >> 1</font>`<font style="color:rgb(44, 62, 80);">：也就是右移一位，相当于除以 2。对于计算机来说，移位比除法运算效率更高，因为数据在计算机内部都是以二进制存储的。</font>

<font style="color:rgb(44, 62, 80);">换句话说，node 方法会对下标进行一个初步判断，如果靠近前半截，就从下标 0 开始遍历；如果靠近后半截，就从末尾开始遍历，这样可以提高效率，最大能提高一半的效率。</font>

<font style="color:rgb(44, 62, 80);">找到指定下标的节点就简单了，直接把原有节点的元素替换成新的节点就 OK 了，prev 和 next 都不用改动。</font>

### <font style="color:rgb(44, 62, 80);">招式四：查</font>

<font style="color:rgb(44, 62, 80);">我这个查的招式可以分为两种：</font>

+ <font style="color:rgb(44, 62, 80);">indexOf(Object)：查找某个元素所在的位置</font>
+ <font style="color:rgb(44, 62, 80);">get(int)：查找某个位置上的元素</font>

<font style="color:rgb(44, 62, 80);">来看一下 indexOf 方法的源码。</font>

```plain
/**
 * 返回链表中首次出现指定元素的位置，如果不存在该元素则返回 -1。
 *
 * @param o 要查找的元素
 * @return 首次出现指定元素的位置，如果不存在该元素则返回 -1
 */
public int indexOf(Object o) {
    int index = 0; // 初始化索引为 0
    if (o == null) { // 如果要查找的元素为 null
        for (Node<E> x = first; x != null; x = x.next) { // 从头节点开始向后遍历链表
            if (x.item == null) // 如果找到了要查找的元素
                return index; // 返回该元素的索引
            index++; // 索引加 1
        }
    } else { // 如果要查找的元素不为 null
        for (Node<E> x = first; x != null; x = x.next) { // 从头节点开始向后遍历链表
            if (o.equals(x.item)) // 如果找到了要查找的元素
                return index; // 返回该元素的索引
            index++; // 索引加 1
        }
    }
    return -1; // 如果没有找到要查找的元素，则返回 -1
}
```

<font style="color:rgb(44, 62, 80);">get 方法的内核其实还是 node 方法，node 方法之前已经说明过了，这里略过。</font>

```plain
public E get(int index) {
    checkElementIndex(index);
    return node(index).item;
}
```

<font style="color:rgb(44, 62, 80);">其实，查这个招式还可以演化为其他的一些，比如说：</font>

+ `<font style="color:rgb(44, 62, 80);">getFirst()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于获取第一个元素；</font>
+ `<font style="color:rgb(44, 62, 80);">getLast()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于获取最后一个元素；</font>
+ `<font style="color:rgb(44, 62, 80);">poll()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">pollFirst()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于删除并返回第一个元素（两个方法尽管名字不同，但方法体是完全相同的）；</font>
+ `<font style="color:rgb(44, 62, 80);">pollLast()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于删除并返回最后一个元素；</font>
+ `<font style="color:rgb(44, 62, 80);">peekFirst()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于返回但不删除第一个元素。</font>

### <font style="color:rgb(44, 62, 80);">LinkedList 的挑战</font>

<font style="color:rgb(44, 62, 80);">说句实在话，我不是很喜欢和师兄 ArrayList 拿来比较，因为我们各自修炼的内功不同，没有孰高孰低。</font>

<font style="color:rgb(44, 62, 80);">虽然师兄经常喊我一声师弟，但我们之间其实挺和谐的。但我知道，在外人眼里，同门师兄弟，总要一较高下的。</font>

<font style="color:rgb(44, 62, 80);">比如说，我们俩在增删改查时候的时间复杂度。</font>

<font style="color:rgb(44, 62, 80);">也许这就是命运吧，从我进入师门的那天起，这种争论就一直没有停息过。</font>

<font style="color:rgb(44, 62, 80);">无论外人怎么看待我们，在我眼里，师兄永远都是一哥，我敬重他，他也愿意保护我。</font>

[<font style="color:rgb(44, 62, 80);">好戏在后头</font>](https://javabetter.cn/collection/list-war-2.html)<font style="color:rgb(44, 62, 80);">，等着瞧吧。</font>

<font style="color:rgb(44, 62, 80);">我这里先简单聊一下，权当抛砖引玉。</font>

<font style="color:rgb(44, 62, 80);">想象一下，你在玩一款游戏，游戏中有一个道具栏，你需要不断地往里面添加、删除道具。如果你使用的是我的师兄 ArrayList，那么每次添加、删除道具时都需要将后面的道具向后移动或向前移动，这样就会非常耗费时间。但是如果你使用的是我 LinkedList，那么只需要将新道具插入到链表中的指定位置，或者将要删除的道具从链表中删除即可，这样就可以快速地完成道具栏的更新。</font>

<font style="color:rgb(44, 62, 80);">除了游戏中的道具栏，我 LinkedList 还可以用于实现 LRU（Least Recently Used）缓存淘汰算法。LRU </font>**<font style="color:rgb(44, 62, 80);">缓存淘汰算法</font>**<font style="color:rgb(44, 62, 80);">是一种常用的缓存淘汰策略，它的基本思想是，当缓存空间不够时，优先淘汰最近最少使用的缓存数据。在实现 LRU 缓存淘汰算法时，你可以使用我 LinkedList 来存储缓存数据，每次访问缓存数据时，将该数据从链表中删除并移动到链表的头部，这样链表的尾部就是最近最少使用的缓存数据，当缓存空间不够时，只需要将链表尾部的缓存数据淘汰即可。</font>

<font style="color:rgb(44, 62, 80);">总之，各有各的好，且行且珍惜。</font>

### <font style="color:rgb(44, 62, 80);">LinkedList 的应用</font>

<font style="color:rgb(44, 62, 80);">如果你打算通过我来练练手，那么推荐你试一下 LeetCode 的</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">002.两数相加</font>](https://paicoding.com/column/7/2)<font style="color:rgb(44, 62, 80);">、</font>[<font style="color:rgb(44, 62, 80);">019.删除链表的第 N 个节点</font>](https://paicoding.com/column/7/19)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">题目，我把题解链接放在了技术派上：</font>

+ [<font style="color:rgb(102, 102, 102);">002.两数相加</font>](https://paicoding.com/column/7/2)
+ [019.删除链表的倒数第 N 个节点——通过手绘图和 LinkedList 源码的讲解，你一定看得懂](https://paicoding.com/column/7/19)



## 栈 Stack 详解

<font style="color:rgb(44, 62, 80);">讲真，Stack 这个类在 Java 应用中并不常用，但栈这个数据结构在整个计算机体系中却十分重要。所以我们还是放到</font>[<font style="color:rgb(44, 62, 80);">集合框架</font>](https://javabetter.cn/collection/gailan.html)<font style="color:rgb(44, 62, 80);">里来讲一讲。</font>

<font style="color:rgb(44, 62, 80);">栈（stack），有些地方喜欢称呼它为堆栈，我就很不喜欢，很容易和 heap（堆）搞混，尤其是对于新手来说，简直就是虐心。</font>

### [<font style="color:rgb(44, 62, 80);">栈数据结构</font>](https://javabetter.cn/collection/stack.html#%E6%A0%88%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)

<font style="color:rgb(44, 62, 80);">栈是一种非常有用的数据结构，它就像一摞盘子，第一个放在最下面，第二个放在第一个上面，第三个放在第二个上面，最后一个放在最上面。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668276848-4ae31312-aa7e-41a1-b43c-5e42dbf6b8c9.png" />


<font style="color:rgb(44, 62, 80);">对于这一摞盘子，我们可以做两件事情：</font>

+ <font style="color:rgb(44, 62, 80);">在最上面放一个新盘子</font>
+ <font style="color:rgb(44, 62, 80);">把顶部的盘子拿走</font>

<font style="color:rgb(44, 62, 80);">这两件事情做起来很容易，但如果从中间或者底部抽出来一个盘子，就很难办到。如果我们想要拿到最下面的盘子，就必须把它上面的所有盘子都拿走，像这样的一个操作，我们称之为后进先出，也就是“Last In First Out”（简称 </font>**<font style="color:rgb(44, 62, 80);">LIFO</font>**<font style="color:rgb(44, 62, 80);">）——最后的一个进的，最先出去。</font>

<font style="color:rgb(44, 62, 80);">对于栈这样一个数据结构来说，它有两个常见的动作：</font>

+ <font style="color:rgb(44, 62, 80);">push，中文释义有很多种，我个人更喜欢叫它“压入”，非常形象。当我们要把一个元素放入栈的顶部，这个动作就叫做 push。</font>
+ <font style="color:rgb(44, 62, 80);">pop，同样的，我个人更喜欢叫它“弹出”，带有很强烈的动画效果，有没有？当我们要从栈中移除一个元素时，这个动作就叫做 pop。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668276853-0ee8feb3-5f70-4b27-b1dd-1564e5c4e784.png" />


<font style="color:rgb(44, 62, 80);">对于上面这幅图来说，3 这个元素最后放进去，却是最先被移除的——遵循 LIFO 的原则。</font>

<font style="color:rgb(44, 62, 80);">明白了栈的基本操作后，我们需要去深入地思考一下，栈是如何工作的。换句话说，为了使栈这个数据结构按照栈的方式去工作，它需要什么？</font>

<font style="color:rgb(44, 62, 80);">1）栈需要有一个指针，我们称之为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">TOP</font>`<font style="color:rgb(44, 62, 80);">，用它来指向栈中最顶部的那个元素。</font>

<font style="color:rgb(44, 62, 80);">2）当我们初始化一个栈的时候，我们把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">TOP</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的值设置为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">-1</font>`<font style="color:rgb(44, 62, 80);">，这样我们就可以通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">TOP == -1</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来判断栈是否为空。</font>

<font style="color:rgb(44, 62, 80);">3）当我们要在栈中压入一个元素的时候，我们把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">TOP</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的值加 1，然后把新压入的元素指向 TOP。</font>

<font style="color:rgb(44, 62, 80);">4）当我们要从栈中弹出一个元素的时候，我们把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">TOP</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的值减 1，然后把保持在最顶部的那个元素指向 TOP。</font>

<font style="color:rgb(44, 62, 80);">5）当我们压入一个元素的时候，需要检查栈是否已经满了。也就是说，需要有一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">isFull()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的方法来判断。</font>

<font style="color:rgb(44, 62, 80);">6）当我们要弹出一个元素的时候，需要检查栈是否已经空了。也就是说，需要有一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">isEmpty()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的方法来判断。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668276668-44410e7f-56bf-493e-976a-522ec66cea92.png" />


<font style="color:rgb(44, 62, 80);">空栈的时候，TOP 等于 -1；把元素 1 压入栈中的时候，</font>`<font style="color:rgb(44, 62, 80);">stack[0]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为 1，TOP 加 1 变为 0；把元素 2 压入栈中的时候，</font>`<font style="color:rgb(44, 62, 80);">stack[1]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为 2，TOP 加 1 变为 1；把元素 3 压入栈中的时候，</font>`<font style="color:rgb(44, 62, 80);">stack[2]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为 3，TOP 加 1 变为 2；把元素 3 从栈中弹出后，返回元素</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">stack[2]</font>`<font style="color:rgb(44, 62, 80);">，TOP 减 1 变为 1。</font>

### [<font style="color:rgb(44, 62, 80);">自定义栈</font>](https://javabetter.cn/collection/stack.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%88)

<font style="color:rgb(44, 62, 80);">假设栈中的元素是 int 类型，我们可以用 Java 语言来自定义一个最简单的栈。它需要 3 个字段：</font>

+ `<font style="color:rgb(44, 62, 80);">int arr[]</font>`<font style="color:rgb(44, 62, 80);">，一个 int 类型的数组，来存放数据</font>
+ `<font style="color:rgb(44, 62, 80);">int top</font>`<font style="color:rgb(44, 62, 80);">，一个 int 类型的标记</font>
+ `<font style="color:rgb(44, 62, 80);">int capacity</font>`<font style="color:rgb(44, 62, 80);">，一个 int 类型的容量</font>

```plain
class Stack { 
     private int arr[]; 
     private int top; 
     private int capacity; 
 }
```

<font style="color:rgb(44, 62, 80);">初始化栈：</font>

```plain
Stack(int size) { 
     arr = new int[size]; 
     capacity = size; 
     top = -1; 
 }
```

<font style="color:rgb(44, 62, 80);">往栈中压入元素：</font>

```plain
public void push(int x) { 
     if (isFull()) { 
         System.out.println("溢出\n程序终止\n"); 
         System.exit(1); 
     } 
  
     System.out.println("压入 " + x); 
     arr[++top] = x; 
 }
```

<font style="color:rgb(44, 62, 80);">从栈中弹出元素：</font>

```plain
public int pop() { 
     if (isEmpty()) { 
         System.out.println("栈是空的"); 
         System.exit(1); 
     } 
     return arr[top--]; 
 }
```

<font style="color:rgb(44, 62, 80);">返回栈的大小：</font>

```plain
public int size() { 
     return top + 1; 
 }
```

<font style="color:rgb(44, 62, 80);">检查栈是否为空：</font>

```plain
public Boolean isEmpty() { 
     return top == -1; 
 }
```

<font style="color:rgb(44, 62, 80);">检查栈是否已经满了：</font>

```plain
public Boolean isFull() { 
     return top == capacity - 1; 
 }
```

<font style="color:rgb(44, 62, 80);">来个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">main()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法直接测试下：</font>

```plain
public void printStack() { 
     for (int i = 0; i <= top; i++) { 
         System.out.println(arr[i]); 
     } 
 } 
  
 public static void main(String[] args) { 
     Stack stack = new Stack(5); 
  
     stack.push(1); 
     stack.push(2); 
     stack.push(3); 
     stack.push(4); 
  
     stack.pop(); 
     System.out.println("\n弹出元素后"); 
  
     stack.printStack(); 
 }
```

<font style="color:rgb(44, 62, 80);">打印结果如下所示：</font>

```plain
压入 1 
压入 2 
压入 3 
压入 4 

弹出元素后 
1 
2 
3
```

<font style="color:rgb(44, 62, 80);">由于我们是通过</font>[<font style="color:rgb(44, 62, 80);">数组</font>](https://javabetter.cn/array/array.html)<font style="color:rgb(44, 62, 80);">来实现的栈，所以</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">push</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">pop</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font>[<font style="color:rgb(44, 62, 80);">时间复杂度</font>](https://javabetter.cn/collection/time-complexity.html)<font style="color:rgb(44, 62, 80);">就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">O(1)</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">尽管栈是一种非常简单的数据结构，通过上面的代码大家应该也能感受得出来，轻而易举地就实现了，但是栈却是一种非常强有力的数据结构，可以在很多场景中使用，比如说：</font>

<font style="color:rgb(44, 62, 80);">1）</font>**<font style="color:rgb(44, 62, 80);">反转一串字符</font>**<font style="color:rgb(44, 62, 80);">：由于栈是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">LIFO</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的，所以反转一串字符很容易，按照正常的顺序把字符压入栈中，然后再弹出来就行了。</font>

<font style="color:rgb(44, 62, 80);">2）</font>**<font style="color:rgb(44, 62, 80);">用于计算器</font>**<font style="color:rgb(44, 62, 80);">：记得我实习的时候，公司就给我们新人安排了我们一个小项目——模仿一个 Win 7 的计算机，用来考察我们是不是真材实料，要想计算一个复杂的表达式，比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">2 + 5 / 3 * (6 - 2)</font>`<font style="color:rgb(44, 62, 80);">，就需要一个栈来容纳这些数字和运算符，然后按照优先级弹出后进行计算。</font>

<font style="color:rgb(44, 62, 80);">嗯，这个计算要比想象中复杂一些，新手同学可以私底下实现一下，不仅能够提高对栈这种数据结构的理解，还能对运算符的一个优先级进行思考。</font>

<font style="color:rgb(44, 62, 80);">很显然，栈，给我赢得了一次实习的机会，避免了被刷下去的危机。</font>

<font style="color:rgb(44, 62, 80);">3）</font>**<font style="color:rgb(44, 62, 80);">用于浏览器</font>**<font style="color:rgb(44, 62, 80);">：浏览器的后退按钮会把我们访问的 URL 压入一个栈中，每次我们访问一个新的页面，新的 URL 就压入了栈的顶部，当我们点了后退按钮，最新的那个 URL 就从栈中移除，之前的那个 URL 就被访问到了。</font>

<font style="color:rgb(44, 62, 80);">好了，下课，今天的栈就到此为止吧。</font>

### [<font style="color:rgb(44, 62, 80);">Stack 类</font>](https://javabetter.cn/collection/stack.html#stack-%E7%B1%BB)

<font style="color:rgb(44, 62, 80);">其实 Java 已经帮我们实现了一个栈，就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">java.util.Stack</font>`<font style="color:rgb(44, 62, 80);">，它继承自</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Vector</font>`<font style="color:rgb(44, 62, 80);">，是线程安全的，有点</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">StringBuffer</font>](https://javabetter.cn/string/builder-buffer.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的感觉，笨笨的。</font>

<font style="color:rgb(44, 62, 80);">先来个简单的例子：</font>

```plain
Stack<String> stack = new Stack<>();
stack.push("沉默王二");
stack.push("沉默王三");
stack.push("一个文章真特么有趣的程序员");

System.out.println(stack);
```

<font style="color:rgb(44, 62, 80);">Stack 类并不复杂，仅有几个重要的方法，比如说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">push</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">pop</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">peek</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">empty</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">search</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">等等。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668277822-8555075c-4a39-4b45-ab42-1d5339466947.png" />


<font style="color:rgb(44, 62, 80);">我们来看一下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">push</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码：</font>

```plain
public E push(E item) { 
     addElement(item); 
  
     return item; 
 }
```

`<font style="color:rgb(44, 62, 80);">push</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法虽然没有</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">synchronized</font>](https://javabetter.cn/thread/synchronized-1.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键字，但调用了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Vector</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">addElement</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，该方法上添加了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">synchronized</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键字。</font>

```plain
public synchronized void addElement(E obj) { 
     modCount++; 
     ensureCapacityHelper(elementCount + 1); 
     elementData[elementCount++] = obj; 
 }
```

<font style="color:rgb(44, 62, 80);">再来看一下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">pop</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的源码：</font>

```plain
public synchronized E pop() { 
     E obj; 
     int len = size(); 
  
     obj = peek(); 
     removeElementAt(len - 1); 
  
     return obj; 
 }
```

<font style="color:rgb(44, 62, 80);">该方法添加了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">synchronized</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键字，并且先调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">peek</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法获取到栈顶元素：</font>

```plain
public synchronized E peek() {
    int     len = size();

    if (len == 0)
        throw new EmptyStackException();
    return elementAt(len - 1);
}
```

<font style="color:rgb(44, 62, 80);">接着调用 Vector 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">removeElementAt</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法移除栈顶元素。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668276885-8ec447ce-c006-48ea-8670-91708fd6be9a.png" />


<font style="color:rgb(44, 62, 80);">注意该方法如果移除的不是栈顶元素，还会调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">System.arraycopy</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">进行数组的拷贝，因为栈的底层是由数组实现的。</font>

```plain
public class Vector<E>
    extends AbstractList<E>
    implements List<E>, RandomAccess, Cloneable, java.io.Serializable
{
    protected Object[] elementData;
    protected int elementCount;
    protected int capacityIncrement;
}
```

### [<font style="color:rgb(44, 62, 80);">小结</font>](https://javabetter.cn/collection/stack.html#%E5%B0%8F%E7%BB%93)

<font style="color:rgb(44, 62, 80);">栈是一种非常有用的数据结构，它的特点是后进先出，可以用来反转一串字符、实现计算器、浏览器的后退按钮等等。</font>

<font style="color:rgb(44, 62, 80);">虽然 Stack 类并不常用，但栈这个数据结构却很重要。在 Java 中，推荐使用 ArrayDeque 来代替 Stack，因为</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">ArrayDeque</font>](https://javabetter.cn/collection/arraydeque.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是非线程安全的，性能更好。</font>

<font style="color:rgb(44, 62, 80);">如果想通过 LeetCode 进行练习的话，可以尝试一下这道题：</font>

[020.有效的括号，用栈来解决的 Java 版 LeetCode 刷题笔记](https://paicoding.com/column/7/20)<font style="color:rgb(44, 62, 80);">，我把题解放到了技术派上，大家可以参考。</font>

<font style="color:rgb(44, 62, 80);"></font>

## <font style="color:rgb(44, 62, 80);">HashMap 详解（附源码）</font>

<font style="color:rgb(44, 62, 80);">接下来会详细透彻地讲清楚 hash 方法的原理、HashMap 的扩容机制、HashMap 的加载因子为什么是 0.75 而不是 0.6、0.8，以及 HashMap 为什么是线程不安全的，基本上 HashMap 的常见面试题，都会在这一篇文章里讲明白。</font>

<font style="color:rgb(44, 62, 80);">HashMap 是 Java 中常用的数据结构之一，用于存储键值对。在 HashMap 中，每个键都映射到一个唯一的值，可以通过键来快速访问对应的值，算法时间复杂度可以达到 O(1)。</font>

<font style="color:rgb(44, 62, 80);">HashMap 不仅在日常开发中经常用到，在面试中也是重点考察的对象。</font>

<font style="color:rgb(44, 62, 80);"></font>

### <font style="color:rgb(44, 62, 80);">HashMap 增删改查的简单例子</font>

**<font style="color:rgb(44, 62, 80);">1）增加元素</font>**<font style="color:rgb(44, 62, 80);">：</font>

<font style="color:rgb(44, 62, 80);">将一个键值对（元素）添加到 HashMap 中，可以使用 put() 方法。例如，将名字和年龄作为键值对添加到 HashMap 中：</font>

```plain
HashMap<String, Integer> map = new HashMap<>();
map.put("沉默", 20);
map.put("王二", 25);
```

**<font style="color:rgb(44, 62, 80);">2）删除元素</font>**<font style="color:rgb(44, 62, 80);">：</font>

<font style="color:rgb(44, 62, 80);">从 HashMap 中删除一个键值对，可以使用 remove() 方法。例如，删除名字为 "沉默" 的键值对：</font>

```plain
map.remove("沉默");
```

**<font style="color:rgb(44, 62, 80);">3）修改元素</font>**<font style="color:rgb(44, 62, 80);">：</font>

<font style="color:rgb(44, 62, 80);">修改 HashMap 中的一个键值对，可以使用 put() 方法。例如，将名字为 "沉默" 的年龄修改为 30：</font>

```plain
map.put("沉默", 30);
```

<font style="color:rgb(44, 62, 80);">为什么和添加元素的方法一样呢？这个我们后面会讲，先简单说一下，是因为 HashMap 的键是唯一的，所以再次 put 的时候会覆盖掉之前的键值对。</font>

**<font style="color:rgb(44, 62, 80);">4）查找元素</font>**<font style="color:rgb(44, 62, 80);">：</font>

<font style="color:rgb(44, 62, 80);">从 HashMap 中查找一个键对应的值，可以使用 get() 方法。例如，查找名字为 "沉默" 的年龄：</font>

```plain
int age = map.get("沉默");
```

<font style="color:rgb(44, 62, 80);">在实际应用中，HashMap 可以用于缓存、索引等场景。例如，可以将用户 ID 作为键，用户信息作为值，将用户信息缓存到 HashMap 中，以便快速查找。又如，可以将关键字作为键，文档 ID 列表作为值，将文档索引缓存到 HashMap 中，以便快速搜索文档。</font>

<font style="color:rgb(44, 62, 80);">HashMap 的实现原理是基于哈希表的，它的底层是一个数组，数组的每个位置可能是一个链表或红黑树，也可能只是一个键值对（后面会讲）。当添加一个键值对时，HashMap 会根据键的哈希值计算出该键对应的数组下标（索引），然后将键值对插入到对应的位置。</font>

<font style="color:rgb(44, 62, 80);">当通过键查找值时，HashMap 也会根据键的哈希值计算出数组下标，并查找对应的值。</font>

### <font style="color:rgb(44, 62, 80);">hash 方法的原理</font>

<font style="color:rgb(44, 62, 80);">简单了解 HashMap 后，我们来讨论第一个问题：hash 方法的原理，对吃透 HashMap 会大有帮助。</font>

<font style="color:rgb(44, 62, 80);">来看一下 hash 方法的源码（JDK 8 中的 HashMap）：</font>

```plain
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

<font style="color:rgb(44, 62, 80);">这段代码究竟是用来干嘛的呢？</font>

**<font style="color:rgb(44, 62, 80);">将 key 的 hashCode 值进行处理，得到最终的哈希值</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">怎么理解这句话呢？不要着急。</font>

<font style="color:rgb(44, 62, 80);">我们来 new 一个 HashMap，并通过 put 方法添加一个元素。</font>

```plain
HashMap<String, String> map = new HashMap<>();
map.put("chenmo", "沉默");
```

<font style="color:rgb(44, 62, 80);">来看一下 put 方法的源码。</font>

```plain
public V put(K key, V value) {
    return putVal(hash(key), key, value, false, true);
}
```

<font style="color:rgb(44, 62, 80);">看到 hash 方法的身影了吧？</font>

#### <font style="color:rgb(44, 62, 80);">hash 方法的作用</font>

<font style="color:rgb(44, 62, 80);">前面也说了，HashMap 的底层是通过数组的形式实现的，</font>**<font style="color:rgb(44, 62, 80);">初始大小是 16</font>**<font style="color:rgb(44, 62, 80);">（这个后面会讲），先记住。</font>

<font style="color:rgb(44, 62, 80);">也就是说，HashMap 在添加第一个元素的时候，需要通过键的哈希码在大小为 16 的数组中确定一个位置（索引），怎么确定呢？</font>

<font style="color:rgb(44, 62, 80);">为了方便大家直观的感受，我这里画了一副图，16 个方格子（可以把它想象成一个一个桶），每个格子都有一个编号，对应大小为 16 的数组下标（索引）。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668349148-50ebc5af-8e15-46fa-8a13-8d155c40fc00.png" />


<font style="color:rgb(44, 62, 80);">现在，我们要把 key 为 “chenmo”，value 为“沉默”的键值对放到这 16 个格子中的一个。</font>

<font style="color:rgb(44, 62, 80);">怎么确定位置（索引）呢？</font>

<font style="color:rgb(44, 62, 80);">我先告诉大家结论，通过这个与运算</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">(n - 1) & hash</font>`<font style="color:rgb(44, 62, 80);">，其中变量 n 为数组的长度，变量 hash 就是通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法计算后的结果。</font>

<font style="color:rgb(44, 62, 80);">那“chenmo”这个 key 计算后的位置（索引）是多少呢？</font>

<font style="color:rgb(44, 62, 80);">答案是 8，也就是说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">map.put("chenmo", "沉默")</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">会把 key 为 “chenmo”，value 为“沉默”的键值对放到下标为 8 的位置上（也就是索引为 8 的桶上）。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668349291-326c2f19-1124-49ac-8b39-942760ffac68.png" />


<font style="color:rgb(44, 62, 80);">这样大家就会对 HashMap 存放键值对（元素）的时候有一个大致的印象。其中的一点是，hash 方法对计算键值对的位置起到了至关重要的作用。</font>

<font style="color:rgb(44, 62, 80);">回到 hash 方法：</font>

```plain
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

<font style="color:rgb(44, 62, 80);">下面是对该方法的一些解释：</font>

+ <font style="color:rgb(44, 62, 80);">参数 key：需要计算哈希码的键值。</font>
+ `<font style="color:rgb(44, 62, 80);">key == null ? 0 : (h = key.hashCode()) ^ (h >>> 16)</font>`<font style="color:rgb(44, 62, 80);">：这是一个三目运算符，如果键值为 null，则哈希码为 0（依旧是说如果键为 null，则存放在第一个位置）；否则，通过调用</font>`<font style="color:rgb(44, 62, 80);">hashCode()</font>`<font style="color:rgb(44, 62, 80);">方法获取键的哈希码，并将其与右移 16 位的哈希码进行异或运算。</font>
+ `<font style="color:rgb(44, 62, 80);">^</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">运算符：异或运算符是 Java 中的一种位运算符，它用于将两个数的二进制位进行比较，如果相同则为 0，不同则为 1。</font>
+ `<font style="color:rgb(44, 62, 80);">h >>> 16</font>`<font style="color:rgb(44, 62, 80);">：将哈希码向右移动 16 位，相当于将原来的哈希码分成了两个 16 位的部分。</font>
+ <font style="color:rgb(44, 62, 80);">最终返回的是经过异或运算后得到的哈希码值。</font>

<font style="color:rgb(44, 62, 80);">这短短的一行代码，汇聚不少计算机巨佬们的聪明才智。</font>

<font style="color:rgb(44, 62, 80);">理论上，哈希值（哈希码）是一个 int 类型，范围从-2147483648 到 2147483648。</font>

<font style="color:rgb(44, 62, 80);">前后加起来大概 40 亿的映射空间，只要哈希值映射得比较均匀松散，一般是不会出现哈希碰撞（哈希冲突会降低 HashMap 的效率）。</font>

<font style="color:rgb(44, 62, 80);">但问题是一个 40 亿长度的数组，内存是放不下的。HashMap 扩容之前的数组初始大小只有 16，所以这个哈希值是不能直接拿来用的，用之前要和数组的长度做与运算（前文提到的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">(n - 1) & hash</font>`<font style="color:rgb(44, 62, 80);">，有些地方叫取模预算，有些地方叫取余运算），用得到的值来访问数组下标才行。</font>

#### <font style="color:rgb(44, 62, 80);">取模运算 VS 取余运算 VS 与运算</font>

<font style="color:rgb(44, 62, 80);">那这里就顺带补充一些取模预算/取余运算和与运算的知识点哈。</font>

<font style="color:rgb(44, 62, 80);">取模运算（Modulo Operation）和取余运算（Remainder Operation）从严格意义上来讲，是两种不同的运算方式，它们在计算机中的实现也不同。</font>

<font style="color:rgb(44, 62, 80);">在 Java 中，通常使用 % 运算符来表示取余，用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Math.floorMod()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来表示取模。</font>

+ <font style="color:rgb(44, 62, 80);">当操作数都是正数的话，取模运算和取余运算的结果是一样的。</font>
+ <font style="color:rgb(44, 62, 80);">只有当操作数出现负数的情况，结果才会有所不同。</font>
+ **<font style="color:rgb(44, 62, 80);">取模运算的商向负无穷靠近；取余运算的商向 0 靠近</font>**<font style="color:rgb(44, 62, 80);">。这是导致它们两个在处理有负数情况下，结果不同的根本原因。</font>
+ <font style="color:rgb(44, 62, 80);">当数组的长度是 2 的 n 次方，或者 n 次幂，或者 n 的整数倍时，取模运算/取余运算可以用位运算来代替，效率更高，毕竟计算机本身只认二进制嘛。</font>

<font style="color:rgb(44, 62, 80);">我们通过一个实际的例子来看一下。</font>

```plain
int a = -7;
int b = 3;

// a 对 b 取余
int remainder = a % b;
// a 对 b 取模
int modulus = Math.floorMod(a, b);

System.out.println("数字: a = " + a + ", b = " + b);
System.out.println("取余 (%): " + remainder);
System.out.println("取模 (Math.floorMod): " + modulus);

// 改变 a 和 b 的正负情况
a = 7;
b = -3;

remainder = a % b;
modulus = Math.floorMod(a, b);

System.out.println("\n数字: a = " + a + ", b = " + b);
System.out.println("取余 (%): " + remainder);
System.out.println("取模 (Math.floorMod): " + modulus);
```

<font style="color:rgb(44, 62, 80);">输出结果如下所示：</font>

```plain
数字: a = -7, b = 3
取余 (%): -1
取模 (Math.floorMod): 2

数字: a = 7, b = -3
取余 (%): 1
取模 (Math.floorMod): -2
```

<font style="color:rgb(44, 62, 80);">为什么会有这样的结果呢？</font>

<font style="color:rgb(44, 62, 80);">首先，我们来考虑一下常规除法。当我们将一个数除以另一个数时，我们将得到一个商和一个余数。</font>

<font style="color:rgb(44, 62, 80);">例如，当我们把 7 除以 3 时，我们得到商 2 和余数 1，因为 (7 = 3 × 2 + 1)。</font>

<font style="color:rgb(44, 62, 80);">推荐阅读：</font>[<font style="color:rgb(44, 62, 80);">Java 取模和取余</font>](https://www.cnblogs.com/doondo/p/14678204.html)

**<font style="color:rgb(44, 62, 80);">01、取余</font>**<font style="color:rgb(44, 62, 80);">：</font>

<font style="color:rgb(44, 62, 80);">余数的定义是基于常规除法的，所以它的符号总是与被除数相同。商趋向于 0。</font>

<font style="color:rgb(44, 62, 80);">例如，对于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">-7 % 3</font>`<font style="color:rgb(44, 62, 80);">，余数是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">-1</font>`<font style="color:rgb(44, 62, 80);">。因为 -7 / 3 可以有两种结果，一种是商 -2 余 -1；一种是商 -3 余 2，对吧？</font>

<font style="color:rgb(44, 62, 80);">因为取余的商趋向于 0，-2 比 -3 更接近于 0，所以取余的结果是 -1。</font>

**<font style="color:rgb(44, 62, 80);">02、取模</font>**<font style="color:rgb(44, 62, 80);">：</font>

<font style="color:rgb(44, 62, 80);">取模也是基于除法的，只不过它的符号总是与除数相同。商趋向于负无穷。</font>

<font style="color:rgb(44, 62, 80);">例如，对于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Math.floorMod(-7, 3)</font>`<font style="color:rgb(44, 62, 80);">，结果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">2</font>`<font style="color:rgb(44, 62, 80);">。同理，因为 -7 / 3 可以有两种结果，一种是商 -2 余 -1；一种是商 -3 余 2，对吧？</font>

<font style="color:rgb(44, 62, 80);">因为取模的商趋向于负无穷，-3 比 -2 更接近于负无穷，所以取模的结果是 2。</font>

<font style="color:rgb(44, 62, 80);">需要注意的是，不管是取模还是取余，除数都不能为 0，因为取模和取余都是基于除法运算的。</font>

**<font style="color:rgb(44, 62, 80);">03、与运算</font>**<font style="color:rgb(44, 62, 80);">：</font>

<font style="color:rgb(44, 62, 80);">当除数和被除数都是正数的情况下，取模运算和取余运算的结果是一样的。</font>

<font style="color:rgb(44, 62, 80);">比如说，7 对 3 取余，和 7 对 3 取模，结果都是 1。因为两者都是基于除法运算的，7 / 3 的商是 2，余数是 1。</font>

<font style="color:rgb(44, 62, 80);">于是，我们会在很多地方看到，</font>**<font style="color:rgb(44, 62, 80);">取余就是取模，取模就是取余。这是一种不准确的说法，基于操作数都是正数的情况下</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">对于 HashMap 来说，它需要通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash % table.length</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来确定元素在数组中的位置，这种做法可以在很大程度上让元素均匀的分布在数组中。</font>

<font style="color:rgb(44, 62, 80);">比如说，数组长度是 3，hash 是 7，那么 7 % 3 的结果就是 1，也就是此时可以把元素放在下标为 1 的位置。</font>

<font style="color:rgb(44, 62, 80);">当 hash 是 8，8 % 3 的结果就是 2，也就是可以把元素放在下标为 2 的位置。</font>

<font style="color:rgb(44, 62, 80);">当 hash 是 9，9 % 3 的结果就是 0，也就是可以把元素放在下标为 0 的位置上。</font>

<font style="color:rgb(44, 62, 80);">是不是很奇妙，数组的大小为 3，刚好 3 个位置都利用上了。</font>

<font style="color:rgb(44, 62, 80);">那为什么 HashMap 在计算下标的时候，并没有直接使用取余运算（或者取模运算），而是直接使用位与运算 & 呢？</font>

<font style="color:rgb(44, 62, 80);">因为当数组的长度是 2 的 n 次方时，</font>`<font style="color:rgb(44, 62, 80);">hash & (length - 1) = hash % length</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">比如说 9 % 4 = 1，9 的二进制是 1001，4 - 1 = 3，3 的二进制是 0011，9 & 3 = 1001 & 0011 = 0001 = 1。</font>

<font style="color:rgb(44, 62, 80);">再比如说 10 % 4 = 2，10 的二进制是 1010，4 - 1 = 3，3 的二进制是 0011，10 & 3 = 1010 & 0011 = 0010 = 2。</font>

<font style="color:rgb(44, 62, 80);">当数组的长度不是 2 的 n 次方时，</font>`<font style="color:rgb(44, 62, 80);">hash % length</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash & (length - 1)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的结果就不一致了。</font>

<font style="color:rgb(44, 62, 80);">比如说 7 % 3 = 1，7 的二进制是 0111，3 - 1 = 2，2 的二进制是 0010，7 & 2 = 0111 & 0010 = 0010 = 2。</font>

<font style="color:rgb(44, 62, 80);">那为什么呢？</font>

<font style="color:rgb(44, 62, 80);">因为从二进制角度来看，hash / length = hash / ${2^n}$ = hash >> n，即把 hash 右移 n 位，此时得到了 hash / ${2^n}$ 的商。</font>

<font style="color:rgb(44, 62, 80);">而被移调的部分，则是 hash % ${2^n}$，也就是余数。</font>

<font style="color:rgb(44, 62, 80);">${2^n}$ 的二进制形式为 1，后面跟着 n 个 0，那 ${2^n}$ - 1 的二进制则是 n 个 1。例如 8 = ${2^3}$，二进制是 1000，7 = ${2^3}$ - 1，二进制为 0111。</font>

`<font style="color:rgb(44, 62, 80);">hash % length</font>`<font style="color:rgb(44, 62, 80);">的操作是求 hash 除以 ${2^n}$ 的余数。在二进制中，这个操作的结果就是 hash 的二进制表示中最低 n 位的值。</font>

<font style="color:rgb(44, 62, 80);">因为在 ${2^n}$ 取模的操作中，高于 ${2^n}$ 表示位的所有数值对结果没有贡献，只有低于这个阈值的部分才决定余数。</font>

<font style="color:rgb(44, 62, 80);">比如说 26 的二进制是 11010，要计算 26 % 8，8 是 ${2^3}$，所以我们关注的是 26 的二进制表示中最低 3 位：11010 的最低 3 位是 010。</font>

<font style="color:rgb(44, 62, 80);">010 对应于十进制中的 2，26 % 8 的结果是 2。</font>

<font style="color:rgb(44, 62, 80);">当执行</font>`<font style="color:rgb(44, 62, 80);">hash & (length - 1)</font>`<font style="color:rgb(44, 62, 80);">时，实际上是保留 hash 二进制表示的最低 n 位，其他高位都被清零。</font>

<font style="color:rgb(102, 102, 102);">& 与运算：两个操作数中位都为 1，结果才为 1，否则结果为 0。</font>

<font style="color:rgb(44, 62, 80);">举个例子，hash 为 14，n 为 3，也就是数组长度为 ${2^3}$，也就是 8。</font>

```plain
1110 (hash = 14)
& 0111 (length - 1 = 7)
  ----
  0110 (结果 = 6)
```

<font style="color:rgb(44, 62, 80);">保留 14 的最低 3 位，高位被清零。</font>

<font style="color:rgb(44, 62, 80);">从此，两个运算</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash % length</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash & (length - 1)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">有了完美的闭环。在计算机中，位运算的速度要远高于取余运算，因为计算机本质上就是二进制嘛。</font>

<font style="color:rgb(44, 62, 80);">HashMap 的取模运算有两处。</font>

<font style="color:rgb(44, 62, 80);">一处是往 HashMap 中 put 的时候（会调用私有的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">putVal</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法）：</font>

```plain
final V putVal(int hash, K key, V value, boolean onlyIfAbsent, boolean evict) {
    // 数组
    HashMap.Node<K,V>[] tab;
    // 元素
    HashMap.Node<K,V> p;

    // n 为数组的长度 i 为下标
    int n, i;
    // 数组为空的时候
    if ((tab = table) == null || (n = tab.length) == 0)
        // 第一次扩容后的数组长度
        n = (tab = resize()).length;
    // 计算节点的插入位置，如果该位置为空，则新建一个节点插入
    if ((p = tab[i = (n - 1) & hash]) == null)
        tab[i] = newNode(hash, key, value, null);
}
```

<font style="color:rgb(44, 62, 80);">其中</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">(n - 1) & hash</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为取模运算，为什么没用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%</font>`<font style="color:rgb(44, 62, 80);">，我们随后解释。</font>

<font style="color:rgb(44, 62, 80);">一处是从 HashMap 中 get 的时候（会调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">getNode</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法）：</font>

```plain
final Node<K,V> getNode(int hash, Object key) {
    // 获取当前的数组和长度，以及当前节点链表的第一个节点（根据索引直接从数组中找）
    Node<K,V>[] tab;
    Node<K,V> first, e;
    int n;
    K k;
    if ((tab = table) != null && (n = tab.length) > 0 &&
            (first = tab[(n - 1) & hash]) != null) {
        // 如果第一个节点就是要查找的节点，则直接返回
        if (first.hash == hash && ((k = first.key) == key || (key != null && key.equals(k))))
            return first;
        // 如果第一个节点不是要查找的节点，则遍历节点链表查找
        if ((e = first.next) != null) {
            do {
                if (e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k))))
                    return e;
            } while ((e = e.next) != null);
        }
    }
    // 如果节点链表中没有找到对应的节点，则返回 null
    return null;
}
```

<font style="color:rgb(44, 62, 80);">看到没，取模运算</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">(n - 1) & hash</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">再次出现，说简单点，就是把键的哈希码经过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法计算后，再和（数组长度-1）做了一个“与”运算。</font>

#### <font style="color:rgb(44, 62, 80);">取模运算%和位运算&</font>

<font style="color:rgb(44, 62, 80);">可能大家在疑惑：</font>**<font style="color:rgb(44, 62, 80);">取模运算难道不该用</font>****<font style="color:rgb(44, 62, 80);"> </font>**`**<font style="color:rgb(44, 62, 80);">%</font>**`**<font style="color:rgb(44, 62, 80);"> </font>****<font style="color:rgb(44, 62, 80);">吗？为什么要用位运算</font>****<font style="color:rgb(44, 62, 80);"> </font>**`**<font style="color:rgb(44, 62, 80);">&</font>**`**<font style="color:rgb(44, 62, 80);"> </font>****<font style="color:rgb(44, 62, 80);">呢</font>**<font style="color:rgb(44, 62, 80);">？</font>

<font style="color:rgb(44, 62, 80);">这是因为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">&</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">运算比</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">更加高效，并且当 b 为 2 的 n 次方时，存在下面这样一个公式。</font>

<font style="color:rgb(102, 102, 102);">a % b = a & (b-1)</font>

<font style="color:rgb(44, 62, 80);">用 ${2^n}$ 替换下 b 就是：</font>

<font style="color:rgb(102, 102, 102);">a % ${2^n}$ = a & (${2^n}$-1)</font>

<font style="color:rgb(44, 62, 80);">我们来验证一下，假如 a = 14，b = 8，也就是 ${2^3}$，n=3。</font>

<font style="color:rgb(44, 62, 80);">14%8（余数为 6）。</font>

<font style="color:rgb(44, 62, 80);">14 的二进制为 1110，8 的二进制 1000，8-1 = 7，7 的二进制为 0111，1110&0111=0110，也就是 0</font>`<font style="color:rgb(44, 62, 80);">*</font>`<font style="color:rgb(44, 62, 80);">${2</font><sup><font style="color:rgb(44, 62, 80);">0}$+1`*`${2</font></sup><font style="color:rgb(44, 62, 80);">1}$+1</font>`<font style="color:rgb(44, 62, 80);">*</font>`<font style="color:rgb(44, 62, 80);">${2</font><sup><font style="color:rgb(44, 62, 80);">2}$+0`*`${2</font></sup><font style="color:rgb(44, 62, 80);">3}$=0+2+4+0=6，14%8 刚好也等于 6。</font>

<font style="color:rgb(44, 62, 80);">害，计算机就是这么讲道理，没办法，</font><font style="color:rgb(44, 62, 80);">😝</font>

<font style="color:rgb(44, 62, 80);">这也正好解释了</font>**<font style="color:rgb(44, 62, 80);">为什么 HashMap 的数组长度要取 2 的整次方</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">为什么会这样巧呢？</font>

<font style="color:rgb(44, 62, 80);">因为（数组长度-1）正好相当于一个“低位掩码”——这个掩码的低位最好全是 1，这样 & 操作才有意义，否则结果就肯定是 0。</font>

<font style="color:rgb(102, 102, 102);">a&b 操作的结果是：a、b 中对应位同时为 1，则对应结果位为 1，否则为 0。例如 5&3=1，5 的二进制是 0101，3 的二进制是 0011，5&3=0001=1。</font>

<font style="color:rgb(44, 62, 80);">2 的整次幂刚好是偶数，偶数-1 是奇数，奇数的二进制最后一位是 1，保证了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash &(length-1)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的最后一位可能为 0，也可能为 1（取决于 hash 的值），即 & 运算后的结果可能为偶数，也可能为奇数，这样便可以保证哈希值的均匀分布。</font>

<font style="color:rgb(44, 62, 80);">换句话说，& 操作的结果就是将哈希值的高位全部归零，只保留低位值。</font>

<font style="color:rgb(44, 62, 80);">假设某哈希值的二进制为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">10100101 11000100 00100101</font>`<font style="color:rgb(44, 62, 80);">，用它来做 & 运算，我们来看一下结果。</font>

<font style="color:rgb(44, 62, 80);">我们知道，HashMap 的初始长度为 16，16-1=15，二进制是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">00000000 00000000 00001111</font>`<font style="color:rgb(44, 62, 80);">（高位用 0 来补齐）：</font>

```plain
10100101 11000100 00100101
&	 00000000 00000000 00001111
----------------------------------
	 00000000 00000000 00000101
```

<font style="color:rgb(44, 62, 80);">因为 15 的高位全部是 0，所以 & 运算后的高位结果肯定也是 0，只剩下 4 个低位</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">0101</font>`<font style="color:rgb(44, 62, 80);">，也就是十进制的 5。</font>

<font style="color:rgb(44, 62, 80);">这样，哈希值为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">10100101 11000100 00100101</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的键就会放在数组的第 5 个位置上。</font>

<font style="color:rgb(44, 62, 80);">当然了，如果你是新手，上面这些 01 串看不太懂，也没关系。记住 &运算是为了计算数组的下标就可以了。</font>

+ <font style="color:rgb(44, 62, 80);">put 的时候计算下标，把键值对放到对应的桶上。</font>
+ <font style="color:rgb(44, 62, 80);">get 的时候通过下标，把键值对从对应的桶上取出来。</font>

#### <font style="color:rgb(44, 62, 80);">为什么取模运算之前要调用 hash 方法呢？</font>

<font style="color:rgb(44, 62, 80);">看下面这个图。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668343936-037cb272-88df-47f6-a8c6-48c91702a975.png" />


<font style="color:rgb(44, 62, 80);">某哈希值为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">11111111 11111111 11110000 1110 1010</font>`<font style="color:rgb(44, 62, 80);">，将它右移 16 位（h >>> 16），刚好是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">00000000 00000000 11111111 11111111</font>`<font style="color:rgb(44, 62, 80);">，再进行异或操作（h ^ (h >>> 16)），结果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">11111111 11111111 00001111 00010101</font>`

<font style="color:rgb(102, 102, 102);">异或（</font>`<font style="color:rgb(102, 102, 102);">^</font>`<font style="color:rgb(102, 102, 102);">）运算是基于二进制的位运算，采用符号 XOR 或者</font>`<font style="color:rgb(102, 102, 102);">^</font>`<font style="color:rgb(102, 102, 102);">来表示，运算规则是：如果是同值取 0、异值取 1</font>

<font style="color:rgb(44, 62, 80);">由于混合了原来哈希值的高位和低位，所以低位的随机性加大了（掺杂了部分高位的特征，高位的信息也得到了保留）。</font>

<font style="color:rgb(44, 62, 80);">结果再与数组长度-1（</font>`<font style="color:rgb(44, 62, 80);">00000000 00000000 00000000 00001111</font>`<font style="color:rgb(44, 62, 80);">）做取模运算，得到的下标就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">00000000 00000000 00000000 00000101</font>`<font style="color:rgb(44, 62, 80);">，也就是 5。</font>

<font style="color:rgb(44, 62, 80);">还记得之前我们假设的某哈希值</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">10100101 11000100 00100101</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">吗？在没有调用 hash 方法之前，与 15 做取模运算后的结果也是 5，我们不妨来看看调用 hash 之后的取模运算结果是多少。</font>

<font style="color:rgb(44, 62, 80);">某哈希值</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">00000000 10100101 11000100 00100101</font>`<font style="color:rgb(44, 62, 80);">（补齐 32 位），将它右移 16 位（h >>> 16），刚好是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">00000000 00000000 00000000 10100101</font>`<font style="color:rgb(44, 62, 80);">，再进行异或操作（h ^ (h >>> 16)），结果是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">00000000 10100101 00111011 10000000</font>`

<font style="color:rgb(44, 62, 80);">结果再与数组长度-1（</font>`<font style="color:rgb(44, 62, 80);">00000000 00000000 00000000 00001111</font>`<font style="color:rgb(44, 62, 80);">）做取模运算，得到的下标就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">00000000 00000000 00000000 00000000</font>`<font style="color:rgb(44, 62, 80);">，也就是 0。</font>

<font style="color:rgb(44, 62, 80);">综上所述，</font>**<font style="color:rgb(44, 62, 80);">hash 方法是用来做哈希值优化的</font>**<font style="color:rgb(44, 62, 80);">，把哈希值右移 16 位，也就正好是自己长度的一半，之后与原哈希值做异或运算，这样就混合了原哈希值中的高位和低位，增大了随机性。</font>

<font style="color:rgb(44, 62, 80);">说白了，</font>**<font style="color:rgb(44, 62, 80);">hash 方法就是为了增加随机性，让数据元素更加均衡的分布，减少碰撞</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">我这里写了一段测试代码，假如 HashMap 的容量就是第一次扩容时候的 16，我在里面放了五个键值对，来看一下键的 hash 值（经过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法计算后的哈希码）和索引（取模运算后）</font>

```plain
HashMap<String, String> map = new HashMap<>();
map.put("chenmo", "沉默");
map.put("wanger", "王二");
map.put("chenqingyang", "陈清扬");
map.put("xiaozhuanling", "小转铃");
map.put("fangxiaowan", "方小婉");

// 遍历 HashMap
for (String key : map.keySet()) {
    int h, n = 16;
    int hash = (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    int i = (n - 1) & hash;
    // 打印 key 的 hash 值 和 索引 i
    System.out.println(key + "的hash值 : " + hash +" 的索引 : " + i);
}
```

<font style="color:rgb(44, 62, 80);">输出结果如下所示：</font>

```plain
xiaozhuanling的hash值 : 14597045 的索引 : 5
fangxiaowan的hash值 : -392727066 的索引 : 6
chenmo的hash值 : -1361556696 的索引 : 8
chenqingyang的hash值 : -613818743 的索引 : 9
wanger的hash值 : -795084437 的索引 : 11
```

<font style="color:rgb(44, 62, 80);">也就是说，此时还没有发生哈希冲突，索引值都是比较均匀分布的，5、6、8、9、11，这其中的很大一部分功劳，就来自于 hash 方法。</font>

#### <font style="color:rgb(44, 62, 80);">小结</font>

<font style="color:rgb(44, 62, 80);">hash 方法的主要作用是将 key 的 hashCode 值进行处理，得到最终的哈希值。由于 key 的 hashCode 值是不确定的，可能会出现哈希冲突，因此需要将哈希值通过一定的算法映射到 HashMap 的实际存储位置上。</font>

<font style="color:rgb(44, 62, 80);">hash 方法的原理是，先获取 key 对象的 hashCode 值，然后将其高位与低位进行异或操作，得到一个新的哈希值。为什么要进行异或操作呢？因为对于 hashCode 的高位和低位，它们的分布是比较均匀的，如果只是简单地将它们加起来或者进行位运算，容易出现哈希冲突，而异或操作可以避免这个问题。</font>

<font style="color:rgb(44, 62, 80);">然后将新的哈希值取模（mod），得到一个实际的存储位置。这个取模操作的目的是将哈希值映射到桶（Bucket）的索引上，桶是 HashMap 中的一个数组，每个桶中会存储着一个链表（或者红黑树），装载哈希值相同的键值对（没有相同哈希值的话就只存储一个键值对）。</font>

<font style="color:rgb(44, 62, 80);">总的来说，HashMap 的 hash 方法就是将 key 对象的 hashCode 值进行处理，得到最终的哈希值，并通过一定的算法映射到实际的存储位置上。这个过程决定了 HashMap 内部键值对的查找效率。</font>

### <font style="color:rgb(44, 62, 80);">HashMap 的扩容机制</font>

<font style="color:rgb(44, 62, 80);">好，理解了 hash 方法后我们来看第二个问题，HashMap 的扩容机制。</font>

<font style="color:rgb(44, 62, 80);">大家都知道，数组一旦初始化后大小就无法改变了，所以就有了</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">ArrayList</font>](https://javabebetter.cn/collection/arraylist.html)<font style="color:rgb(44, 62, 80);">这种“动态数组”，可以自动扩容。</font>

<font style="color:rgb(44, 62, 80);">HashMap 的底层用的也是数组。向 HashMap 里不停地添加元素，当数组无法装载更多元素时，就需要对数组进行扩容，以便装入更多的元素；除此之外，容量的提升也会相应地提高查询效率，因为“桶（坑）”更多了嘛，原来需要通过链表存储的（查询的时候需要遍历），扩容后可能就有自己专属的“坑位”了（直接就能查出来）。</font>

<font style="color:rgb(44, 62, 80);">来看这个例子，容量我们定位 16：</font>

```plain
HashMap<String, String> map = new HashMap<>();
map.put("chenmo", "沉默");
map.put("wanger", "王二");
map.put("chenqingyang", "陈清扬");
map.put("xiaozhuanling", "小转铃");
map.put("fangxiaowan", "方小婉");
map.put("yexin", "叶辛");
map.put("liuting","刘婷");
map.put("yaoxiaojuan","姚小娟");

// 遍历 HashMap
for (String key : map.keySet()) {
    int h, n = 16;
    int hash = (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    int i = (n - 1) & hash;
    // 打印 key 的 hash 值 和 索引 i
    System.out.println(key + "的hash值 : " + hash +" 的索引 : " + i);
}
```

<font style="color:rgb(44, 62, 80);">来看输出结果：</font>

```plain
liuting的hash值 : 183821170 的索引 : 2
xiaozhuanling的hash值 : 14597045 的索引 : 5
fangxiaowan的hash值 : -392727066 的索引 : 6
yaoxiaojuan的hash值 : 1231568918 的索引 : 6
chenmo的hash值 : -1361556696 的索引 : 8
chenqingyang的hash值 : -613818743 的索引 : 9
yexin的hash值 : 114873289 的索引 : 9
wanger的hash值 : -795084437 的索引 : 11
```

<font style="color:rgb(44, 62, 80);">看到没？</font>

+ <font style="color:rgb(44, 62, 80);">fangxiaowan（方小婉）和 yaoxiaojuan（姚小娟）的索引都是 6；</font>
+ <font style="color:rgb(44, 62, 80);">chenqingyang（陈清扬）和 yexin（叶辛）的索引都是 9</font>

<font style="color:rgb(44, 62, 80);">这就意味着，要采用拉链法（后面会讲）将他们放在同一个索引的链表上。查询的时候，就不能直接通过索引的方式直接拿到（</font>[<font style="color:rgb(44, 62, 80);">时间复杂度</font>](https://javabebetter.cn/collection/time-complexity.html)<font style="color:rgb(44, 62, 80);">为 O(1)），而要通过遍历的方式（时间复杂度为 O(n)）。</font>

<font style="color:rgb(44, 62, 80);">那假如把数组的长度由 16 扩容为 32 呢？</font>

<font style="color:rgb(44, 62, 80);">将之前示例中的 n 由 16 改为 32 即可得到如下的答案：</font>

```plain
liuting的hash值 : 183821170 的索引 : 18
xiaozhuanling的hash值 : 14597045 的索引 : 21
fangxiaowan的hash值 : -392727066 的索引 : 6
yaoxiaojuan的hash值 : 1231568918 的索引 : 22
chenmo的hash值 : -1361556696 的索引 : 8
chenqingyang的hash值 : -613818743 的索引 : 9
yexin的hash值 : 114873289 的索引 : 9
wanger的hash值 : -795084437 的索引 : 11
```

<font style="color:rgb(44, 62, 80);">可以看到：</font>

+ <font style="color:rgb(44, 62, 80);">虽然 chenqingyang（陈清扬）和 yexin（叶辛）的索引仍然是 9。</font>
+ <font style="color:rgb(44, 62, 80);">但 fangxiaowan（方小婉）的索引为 6，yaoxiaojuan（姚小娟）的索引由 6 变为 22，各自都有坑了。</font>

<font style="color:rgb(44, 62, 80);">当然了，数组是无法自动扩容的，所以如果要扩容的话，就需要新建一个大的数组，然后把之前小的数组的元素复制过去，并且要重新计算哈希值和重新分配桶（重新散列），这个过程也是挺耗时的。</font>

#### <font style="color:rgb(44, 62, 80);">resize 方法</font>

<font style="color:rgb(44, 62, 80);">HashMap 的扩容是通过 resize 方法来实现的，JDK 8 中融入了红黑树（链表长度超过 8 的时候，会将链表转化为红黑树来提高查询效率），对于新手来说，可能比较难理解。</font>

<font style="color:rgb(44, 62, 80);">为了减轻大家的学习压力，就还使用 JDK 7 的源码，搞清楚了 JDK 7 的，再看 JDK 8 的就会轻松很多。</font>

<font style="color:rgb(44, 62, 80);">来看 Java7 的 resize 方法源码，我加了注释：</font>

```plain
// newCapacity为新的容量
void resize(int newCapacity) {
    // 小数组，临时过度下
    Entry[] oldTable = table;
    // 扩容前的容量
    int oldCapacity = oldTable.length;
    // MAXIMUM_CAPACITY 为最大容量，2 的 30 次方 = 1<<30
    if (oldCapacity == MAXIMUM_CAPACITY) {
        // 容量调整为 Integer 的最大值 0x7fffffff（十六进制）=2 的 31 次方-1
        threshold = Integer.MAX_VALUE;
        return;
    }

    // 初始化一个新的数组（大容量）
    Entry[] newTable = new Entry[newCapacity];
    // 把小数组的元素转移到大数组中
    transfer(newTable, initHashSeedAsNeeded(newCapacity));
    // 引用新的大数组
    table = newTable;
    // 重新计算阈值
    threshold = (int)Math.min(newCapacity * loadFactor, MAXIMUM_CAPACITY + 1);
}
```

<font style="color:rgb(44, 62, 80);">该方法接收一个新的容量 newCapacity，然后将 HashMap 的容量扩大到 newCapacity。</font>

<font style="color:rgb(44, 62, 80);">首先，方法获取当前 HashMap 的旧数组 oldTable 和旧容量 oldCapacity。如果旧容量已经达到 HashMap 支持的最大容量 MAXIMUM_CAPACITY（ 2 的 30 次方），就将新的阈值 threshold 调整为 Integer.MAX_VALUE（2 的 31 次方 - 1），这是因为 HashMap 的容量不能超过 MAXIMUM_CAPACITY。</font>

<font style="color:rgb(44, 62, 80);">因为 2,147,483,647（Integer.MAX_VALUE） - 1,073,741,824（MAXIMUM_CAPACITY） = 1,073,741,823，刚好相差一倍（HashMap 每次扩容都是之前的一倍）。</font>

<font style="color:rgb(44, 62, 80);">接着，方法创建一个新的数组 newTable，并将旧数组 oldTable 中的元素转移到新数组 newTable 中。转移过程是通过调用 transfer 方法来实现的。该方法遍历旧数组中的每个桶，并将每个桶中的键值对重新计算哈希值后，将其插入到新数组对应的桶中。</font>

<font style="color:rgb(44, 62, 80);">转移完成后，方法将 HashMap 内部的数组引用 table 指向新数组 newTable，并重新计算阈值 threshold。新的阈值是新容量 newCapacity 乘以负载因子 loadFactor 的结果，但如果计算结果超过了 HashMap 支持的最大容量 MAXIMUM_CAPACITY，则将阈值设置为 MAXIMUM_CAPACITY + 1，这是因为 HashMap 的元素数量不能超过 MAXIMUM_CAPACITY。</font>

#### <font style="color:rgb(44, 62, 80);">新容量 newCapacity</font>

<font style="color:rgb(44, 62, 80);">那 newCapacity 是如何计算的呢？</font>

```plain
int newCapacity = oldCapacity * 2;
if (newCapacity < 0 || newCapacity >= MAXIMUM_CAPACITY) {
    newCapacity = MAXIMUM_CAPACITY;
} else if (newCapacity < DEFAULT_INITIAL_CAPACITY) {
    newCapacity = DEFAULT_INITIAL_CAPACITY;
}
```

<font style="color:rgb(44, 62, 80);">新容量 newCapacity 被初始化为原容量 oldCapacity 的两倍。然后，如果 newCapacity 超过了 HashMap 的容量限制 MAXIMUM_CAPACITY（2^30），就将 newCapacity 设置为 MAXIMUM_CAPACITY。如果 newCapacity 小于默认初始容量 DEFAULT_INITIAL_CAPACITY（16），就将 newCapacity 设置为 DEFAULT_INITIAL_CAPACITY。这样可以避免新容量太小或太大导致哈希冲突过多或者浪费空间。</font>

<font style="color:rgb(44, 62, 80);">Java 8 的时候，newCapacity 的计算方式发生了一些细微的变化。</font>

```plain
int newCapacity = oldCapacity << 1;
if (newCapacity >= DEFAULT_INITIAL_CAPACITY && oldCapacity >= DEFAULT_INITIAL_CAPACITY) {
    if (newCapacity > MAXIMUM_CAPACITY)
        newCapacity = MAXIMUM_CAPACITY;
} else {
    if (newCapacity < DEFAULT_INITIAL_CAPACITY)
        newCapacity = DEFAULT_INITIAL_CAPACITY;
}
```

<font style="color:rgb(44, 62, 80);">注意，</font>`<font style="color:rgb(44, 62, 80);">oldCapacity * 2</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">变成了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">oldCapacity << 1</font>`<font style="color:rgb(44, 62, 80);">，出现了左移（</font>`<font style="color:rgb(44, 62, 80);"><<</font>`<font style="color:rgb(44, 62, 80);">），这里简单介绍一下：</font>

```plain
a=39
b = a << 2
```

<font style="color:rgb(44, 62, 80);">十进制 39 用 8 位的二进制来表示，就是 00100111，左移两位后是 10011100（低位用 0 补上），再转成十进制数就是 156。</font>

<font style="color:rgb(44, 62, 80);">移位运算通常可以用来代替乘法运算和除法运算。例如，将 0010011（39）左移两位就是 10011100（156），刚好变成了原来的 4 倍。</font>

<font style="color:rgb(44, 62, 80);">实际上呢，二进制数左移后会变成原来的 2 倍、4 倍、8 倍，记住这个就好。</font>

#### <font style="color:rgb(44, 62, 80);">transfer 方法</font>

<font style="color:rgb(44, 62, 80);">接下来，来说 transfer 方法，该方法用来转移，将旧的小数组元素拷贝到新的大数组中。</font>

```plain
void transfer(Entry[] newTable, boolean rehash) {
    // 新的容量
    int newCapacity = newTable.length;
    // 遍历小数组
    for (Entry<K,V> e : table) {
        while(null != e) {
            // 拉链法，相同 key 上的不同值
            Entry<K,V> next = e.next;
            // 是否需要重新计算 hash
            if (rehash) {
                e.hash = null == e.key ? 0 : hash(e.key);
            }
            // 根据大数组的容量，和键的 hash 计算元素在数组中的下标
            int i = indexFor(e.hash, newCapacity);

            // 同一位置上的新元素被放在链表的头部
            e.next = newTable[i];

            // 放在新的数组上
            newTable[i] = e;

            // 链表上的下一个元素
            e = next;
        }
    }
}
```

<font style="color:rgb(44, 62, 80);">该方法接受一个新的 Entry 数组 newTable 和一个布尔值 rehash 作为参数，其中 newTable 表示新的哈希表，rehash 表示是否需要重新计算键的哈希值。</font>

<font style="color:rgb(44, 62, 80);">在方法中，首先获取新哈希表（数组）的长度 newCapacity，然后遍历旧哈希表中的每个 Entry。对于每个 Entry，使用拉链法将相同 key 值的不同 value 值存储在同一个链表中。如果 rehash 为 true，则需要重新计算键的哈希值，并将新的哈希值存储在 Entry 的 hash 属性中。</font>

<font style="color:rgb(44, 62, 80);">接着，根据新哈希表的长度和键的哈希值，计算 Entry 在新数组中的位置 i，然后将该 Entry 添加到新数组的 i 位置上。由于新元素需要被放在链表的头部，因此将新元素的下一个元素设置为当前数组位置上的元素。</font>

<font style="color:rgb(44, 62, 80);">最后，遍历完旧哈希表中的所有元素后，转移工作完成，新的哈希表 newTable 已经包含了旧哈希表中的所有元素。</font>

#### <font style="color:rgb(44, 62, 80);">拉链法</font>

<font style="color:rgb(44, 62, 80);">注意，</font>`<font style="color:rgb(44, 62, 80);">e.next = newTable[i]</font>`<font style="color:rgb(44, 62, 80);">，也就是使用了单链表的头插入方式，同一位置上新元素总会被放在链表的头部位置；这样先放在一个索引上的元素最终会被放到链表的尾部，这就会导致</font>**<font style="color:rgb(44, 62, 80);">在旧数组中同一个链表上的元素，通过重新计算索引位置后，有可能被放到了新数组的不同位置上</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">为了解决这个问题，Java 8 做了很大的优化（讲扩容的时候会讲到）。</font>

#### <font style="color:rgb(44, 62, 80);">Java 8 扩容</font>

<font style="color:rgb(44, 62, 80);">JDK 8 的扩容源代码：</font>

```plain
final Node<K,V>[] resize() {
    Node<K,V>[] oldTab = table; // 获取原来的数组 table
    int oldCap = (oldTab == null) ? 0 : oldTab.length; // 获取数组长度 oldCap
    int oldThr = threshold; // 获取阈值 oldThr
    int newCap, newThr = 0;
    if (oldCap > 0) { // 如果原来的数组 table 不为空
        if (oldCap >= MAXIMUM_CAPACITY) { // 超过最大值就不再扩充了，就只好随你碰撞去吧
            threshold = Integer.MAX_VALUE;
            return oldTab;
        }
        else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY && // 没超过最大值，就扩充为原来的2倍
                 oldCap >= DEFAULT_INITIAL_CAPACITY)
            newThr = oldThr << 1; // double threshold
    }
    else if (oldThr > 0) // initial capacity was placed in threshold
        newCap = oldThr;
    else { // zero initial threshold signifies using defaults
        newCap = DEFAULT_INITIAL_CAPACITY;
        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
    }
    // 计算新的 resize 上限
    if (newThr == 0) {
        float ft = (float)newCap * loadFactor;
        newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?
                  (int)ft : Integer.MAX_VALUE);
    }
    threshold = newThr; // 将新阈值赋值给成员变量 threshold
    @SuppressWarnings({"rawtypes","unchecked"})
        Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap]; // 创建新数组 newTab
    table = newTab; // 将新数组 newTab 赋值给成员变量 table
    if (oldTab != null) { // 如果旧数组 oldTab 不为空
        for (int j = 0; j < oldCap; ++j) { // 遍历旧数组的每个元素
            Node<K,V> e;
            if ((e = oldTab[j]) != null) { // 如果该元素不为空
                oldTab[j] = null; // 将旧数组中该位置的元素置为 null，以便垃圾回收
                if (e.next == null) // 如果该元素没有冲突
                    newTab[e.hash & (newCap - 1)] = e; // 直接将该元素放入新数组
                else if (e instanceof TreeNode) // 如果该元素是树节点
                    ((TreeNode<K,V>)e).split(this, newTab, j, oldCap); // 将该树节点分裂成两个链表
                else { // 如果该元素是链表
                    Node<K,V> loHead = null, loTail = null; // 低位链表的头结点和尾结点
                    Node<K,V> hiHead = null, hiTail = null; // 高位链表的头结点和尾结点
                    Node<K,V> next;
                    do { // 遍历该链表
                        next = e.next;
                        if ((e.hash & oldCap) == 0) { // 如果该元素在低位链表中
                            if (loTail == null) // 如果低位链表还没有结点
                                loHead = e; // 将该元素作为低位链表的头结点
                            else
                                loTail.next = e; // 如果低位链表已经有结点，将该元素加入低位链表的尾部
                            loTail = e; // 更新低位链表的尾结点
                        }
                        else { // 如果该元素在高位链表中
                            if (hiTail == null) // 如果高位链表还没有结点
                                hiHead = e; // 将该元素作为高位链表的头结点
                            else
                                hiTail.next = e; // 如果高位链表已经有结点，将该元素加入高位链表的尾部
                            hiTail = e; // 更新高位链表的尾结点
                        }
                    } while ((e = next) != null); //
                    if (loTail != null) { // 如果低位链表不为空
                        loTail.next = null; // 将低位链表的尾结点指向 null，以便垃圾回收
                        newTab[j] = loHead; // 将低位链表作为新数组对应位置的元素
                    }
                    if (hiTail != null) { // 如果高位链表不为空
                        hiTail.next = null; // 将高位链表的尾结点指向 null，以便垃圾回收
                        newTab[j + oldCap] = hiHead; // 将高位链表作为新数组对应位置的元素
                    }
                }
            }
        }
    }
    return newTab; // 返回新数组
}
```

<font style="color:rgb(44, 62, 80);">1、获取原来的数组 table、数组长度 oldCap 和阈值 oldThr。</font>

<font style="color:rgb(44, 62, 80);">2、如果原来的数组 table 不为空，则根据扩容规则计算新数组长度 newCap 和新阈值 newThr，然后将原数组中的元素复制到新数组中。</font>

<font style="color:rgb(44, 62, 80);">3、如果原来的数组 table 为空但阈值 oldThr 不为零，则说明是通过带参数构造方法创建的 HashMap，此时将阈值作为新数组长度 newCap。</font>

<font style="color:rgb(44, 62, 80);">4、如果原来的数组 table 和阈值 oldThr 都为零，则说明是通过无参数构造方法创建的 HashMap，此时将默认初始容量</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">DEFAULT_INITIAL_CAPACITY（16）</font>`<font style="color:rgb(44, 62, 80);">和默认负载因子</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">DEFAULT_LOAD_FACTOR（0.75）</font>`<font style="color:rgb(44, 62, 80);">计算出新数组长度 newCap 和新阈值 newThr。</font>

<font style="color:rgb(44, 62, 80);">5、计算新阈值 threshold，并将其赋值给成员变量 threshold。</font>

<font style="color:rgb(44, 62, 80);">6、创建新数组 newTab，并将其赋值给成员变量 table。</font>

<font style="color:rgb(44, 62, 80);">7、如果旧数组 oldTab 不为空，则遍历旧数组的每个元素，将其复制到新数组中。</font>

<font style="color:rgb(44, 62, 80);">8、返回新数组 newTab。</font>

<font style="color:rgb(44, 62, 80);">在 JDK 7 中，定位元素位置的代码是这样的：</font>

```plain
static int indexFor(int h, int length) {
    // assert Integer.bitCount(length) == 1 : "length must be a non-zero power of 2";
    return h & (length-1);
}
```

<font style="color:rgb(44, 62, 80);">其实就相当于用键的哈希值和数组大小取模，也就是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hashCode % table.length</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">那我们来假设：</font>

+ <font style="color:rgb(44, 62, 80);">数组 table 的长度为 2</font>
+ <font style="color:rgb(44, 62, 80);">键的哈希值为 3、7、5</font>

<font style="color:rgb(44, 62, 80);">取模运算后，键发生了哈希冲突，都到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">table[1]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">上了。那么扩容前就是这个样子。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668343020-04d1159a-ce25-4345-a646-0be97e9db864.png" />


<font style="color:rgb(44, 62, 80);">数组的容量为 2，key 为 3、7、5 的元素在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">table[1]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">上，需要通过拉链法来解决哈希冲突。</font>

<font style="color:rgb(44, 62, 80);">假设负载因子 loadFactor 为 1，也就是当元素的个数大于 table 的长度时进行扩容。</font>

<font style="color:rgb(44, 62, 80);">扩容后的数组容量为 4。</font>

+ <font style="color:rgb(44, 62, 80);">key 3 取模（3%4）后是 3，放在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">table[3]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">上。</font>
+ <font style="color:rgb(44, 62, 80);">key 7 取模（7%4）后是 3，放在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">table[3]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">上的链表头部。</font>
+ <font style="color:rgb(44, 62, 80);">key 5 取模（5%4）后是 1，放在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">table[1]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">上。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668343514-109d9ab2-42e9-4174-9659-d5eba7be7ace.png" />


<font style="color:rgb(44, 62, 80);">7 跑到 3 的前面了，因为 JDK 7 使用的是头插法。</font>

```plain
e.next = newTable[i];
```

<font style="color:rgb(44, 62, 80);">同时，扩容后的 5 跑到了下标为 1 的位置。</font>

<font style="color:rgb(44, 62, 80);">最好的情况就是，扩容后的 7 在 3 的后面，5 在 7 的后面，保持原来的顺序。</font>

<font style="color:rgb(44, 62, 80);">JDK 8 完全扭转了这个局面，因为 JDK 8 的哈希算法进行了优化，当数组长度为 2 的幂次方时，能够很巧妙地解决 JDK 7 中遇到的问题。</font>

<font style="color:rgb(44, 62, 80);">JDK 8 的扩容代码如下所示：</font>

```plain
Node<K,V>[] newTab = new Node[newCapacity];
for (int j = 0; j < oldTab.length; j++) {
    Node<K,V> e = oldTab[j];
    if (e != null) {
        int hash = e.hash;
        int newIndex = hash & (newCapacity - 1); // 计算在新数组中的位置
        // 将节点移动到新数组的对应位置
        newTab[newIndex] = e;
    }
}
```

<font style="color:rgb(44, 62, 80);">新索引的计算方式是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash & (newCapacity - 1)</font>`<font style="color:rgb(44, 62, 80);">，和 JDK 7 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">h & (length-1)</font>`<font style="color:rgb(44, 62, 80);">没什么大的差别，差别主要在 hash 方法上，JDK 8 是这样：</font>

```plain
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

<font style="color:rgb(44, 62, 80);">过将键的</font>`<font style="color:rgb(44, 62, 80);">hashCode()</font>`<font style="color:rgb(44, 62, 80);">返回的 32 位哈希值与这个哈希值无符号右移 16 位的结果进行异或。</font>

<font style="color:rgb(44, 62, 80);">JDK 7 是这样：</font>

```plain
final int hash(Object k) {
    int h = hashSeed;
    if (0 != h && k instanceof String) {
        return sun.misc.Hashing.stringHash32((String) k);
    }

    h ^= k.hashCode();

    // This function ensures that hashCodes that differ only by
    // constant multiples at each bit position have a bounded
    // number of collisions (approximately 8 at default load factor).
    h ^= (h >>> 20) ^ (h >>> 12);
    return h ^ (h >>> 7) ^ (h >>> 4);
}
```

<font style="color:rgb(44, 62, 80);">我们用 JDK 8 的哈希算法来计算一下哈希值，就会发现别有洞天。</font>

<font style="color:rgb(44, 62, 80);">假设扩容前的数组长度为 16（n-1 也就是二进制的 0000 1111，1X$2</font><sup><font style="color:rgb(44, 62, 80);">0$+1X$2</font></sup><font style="color:rgb(44, 62, 80);">1$+1X$2</font><sup><font style="color:rgb(44, 62, 80);">2$+1X$2</font></sup><font style="color:rgb(44, 62, 80);">3$=1+2+4+8=15），key1 为 5（二进制为 0000 0101），key2 为 21（二进制为 0001 0101）。</font>

+ <font style="color:rgb(44, 62, 80);">key1 和 n-1 做 & 运算后为 0000 0101，也就是 5；</font>
+ <font style="color:rgb(44, 62, 80);">key2 和 n-1 做 & 运算后为 0000 0101，也就是 5。</font>
+ <font style="color:rgb(44, 62, 80);">此时哈希冲突了，用拉链法来解决哈希冲突。</font>

<font style="color:rgb(44, 62, 80);">现在，HashMap 进行了扩容，容量为原来的 2 倍，也就是 32（n-1 也就是二进制的 0001 1111，1X$2</font><sup><font style="color:rgb(44, 62, 80);">0$+1X$2</font></sup><font style="color:rgb(44, 62, 80);">1$+1X$2</font><sup><font style="color:rgb(44, 62, 80);">2$+1X$2</font></sup><font style="color:rgb(44, 62, 80);">3$+1X$2^4$=1+2+4+8+16=31）。</font>

+ <font style="color:rgb(44, 62, 80);">key1 和 n-1 做 & 运算后为 0000 0101，也就是 5；</font>
+ <font style="color:rgb(44, 62, 80);">key2 和 n-1 做 & 运算后为 0001 0101，也就是 21=5+16，也就是数组扩容前的位置+原数组的长度。</font>

<font style="color:rgb(44, 62, 80);">神奇吧？</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668344027-ba92d6c1-82e3-4871-acdc-719d0804672a.png" />


<font style="color:rgb(44, 62, 80);">三分恶面渣逆袭：扩容位置变化</font>

<font style="color:rgb(44, 62, 80);">也就是说，在 JDK 8 的新 hash 算法下，数组扩容后的索引位置，要么就是原来的索引位置，要么就是“原索引+原来的容量”，遵循一定的规律。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668344500-c9bb0109-fc99-4ff3-bab4-e90c3cecfe3e.png" />


<font style="color:rgb(44, 62, 80);">三分恶面渣逆袭：扩容节点迁移示意图</font>

<font style="color:rgb(44, 62, 80);">当然了，这个功劳既属于新的哈希算法，也离不开 n 为 2 的整数次幂这个前提，这是它俩通力合作后的结果</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hash & (newCapacity - 1)</font>`<font style="color:rgb(44, 62, 80);">。</font>

#### [<font style="color:rgb(44, 62, 80);">小结</font>](https://javabetter.cn/collection/hashmap.html#%E5%B0%8F%E7%BB%93-1)

<font style="color:rgb(44, 62, 80);">当我们往 HashMap 中不断添加元素时，HashMap 会自动进行扩容操作（条件是元素数量达到负载因子（load factor）乘以数组长度时），以保证其存储的元素数量不会超出其容量限制。</font>

<font style="color:rgb(44, 62, 80);">在进行扩容操作时，HashMap 会先将数组的长度扩大一倍，然后将原来的元素重新散列到新的数组中。</font>

<font style="color:rgb(44, 62, 80);">由于元素的位置是通过 key 的 hash 和数组长度进行与运算得到的，因此在数组长度扩大后，元素的位置也会发生一些改变。一部分索引不变，另一部分索引为“原索引+旧容量”。</font>

### <font style="color:rgb(44, 62, 80);">加载因子为什么是 0.75</font>

<font style="color:rgb(44, 62, 80);">上一个问题提到了加载因子（或者叫负载因子），那么这个问题我们来讨论为什么加载因子是 0.75 而不是 0.6、0.8。</font>

<font style="color:rgb(44, 62, 80);">我们知道，HashMap 是用数组+链表/红黑树实现的，我们要想往 HashMap 中添加数据（元素/键值对）或者取数据，就需要确定数据在数组中的下标（索引）。</font>

<font style="color:rgb(44, 62, 80);">先把数据的键进行一次 hash：</font>

```plain
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

<font style="color:rgb(44, 62, 80);">再做一次取模运算确定下标：</font>

```plain
i = (n - 1) & hash
```

<font style="color:rgb(44, 62, 80);">那这样的过程容易产生两个问题：</font>

+ <font style="color:rgb(44, 62, 80);">数组的容量过小，经过哈希计算后的下标，容易出现冲突；</font>
+ <font style="color:rgb(44, 62, 80);">数组的容量过大，导致空间利用率不高。</font>

<font style="color:rgb(44, 62, 80);">加载因子是用来表示 HashMap 中数据的填满程度：</font>

<font style="color:rgb(102, 102, 102);">加载因子 = 填入哈希表中的数据个数 / 哈希表的长度</font>

<font style="color:rgb(44, 62, 80);">这就意味着：</font>

+ <font style="color:rgb(44, 62, 80);">加载因子越小，填满的数据就越少，哈希冲突的几率就减少了，但浪费了空间，而且还会提高扩容的触发几率；</font>
+ <font style="color:rgb(44, 62, 80);">加载因子越大，填满的数据就越多，空间利用率就高，但哈希冲突的几率就变大了。</font>

<font style="color:rgb(44, 62, 80);">好难！！！！</font>

<font style="color:rgb(44, 62, 80);">这就必须在“</font>**<font style="color:rgb(44, 62, 80);">哈希冲突</font>**<font style="color:rgb(44, 62, 80);">”与“</font>**<font style="color:rgb(44, 62, 80);">空间利用率</font>**<font style="color:rgb(44, 62, 80);">”两者之间有所取舍，尽量保持平衡，谁也不碍着谁。</font>

<font style="color:rgb(44, 62, 80);">我们知道，HashMap 是通过拉链法来解决哈希冲突的。</font>

<font style="color:rgb(44, 62, 80);">为了减少哈希冲突发生的概率，当 HashMap 的数组长度达到一个</font>**<font style="color:rgb(44, 62, 80);">临界值</font>**<font style="color:rgb(44, 62, 80);">的时候，就会触发扩容，扩容后会将之前小数组中的元素转移到大数组中，这是一个相当耗时的操作。</font>

<font style="color:rgb(44, 62, 80);">这个临界值由什么来确定呢？</font>

<font style="color:rgb(102, 102, 102);">临界值 = 初始容量 * 加载因子</font>

<font style="color:rgb(44, 62, 80);">一开始，HashMap 的容量是 16：</font>

```plain
static final int DEFAULT_INITIAL_CAPACITY = 1 << 4; // aka 16
```

<font style="color:rgb(44, 62, 80);">加载因子是 0.75：</font>

```plain
static final float DEFAULT_LOAD_FACTOR = 0.75f;
```

<font style="color:rgb(44, 62, 80);">也就是说，当 16*0.75=12 时，会触发扩容机制。</font>

**<font style="color:rgb(44, 62, 80);">为什么加载因子会选择 0.75 呢？为什么不是 0.8、0.6 呢</font>**<font style="color:rgb(44, 62, 80);">？</font>

<font style="color:rgb(44, 62, 80);">这跟统计学里的一个很重要的原理——泊松分布有关。</font>

<font style="color:rgb(44, 62, 80);">是时候上维基百科了：</font>

<font style="color:rgb(102, 102, 102);">泊松分布，是一种统计与概率学里常见到的离散概率分布，由法国数学家西莫恩·德尼·泊松在 1838 年时提出。它会对随机事件的发生次数进行建模，适用于涉及计算在给定的时间段、距离、面积等范围内发生随机事件的次数的应用情形。</font>

<font style="color:rgb(44, 62, 80);">阮一峰老师曾在一篇博文中详细的介绍了泊松分布和指数分布，大家可以去看一下。</font>

<font style="color:rgb(102, 102, 102);">链接：</font>[<font style="color:rgb(102, 102, 102);">https://www.ruanyifeng.com/blog/2015/06/poisson-distribution.html</font>](https://www.ruanyifeng.com/blog/2015/06/poisson-distribution.html)

<font style="color:rgb(44, 62, 80);">具体是用这么一个公式来表示的。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668350984-686eaaca-54f5-441b-9c05-42157d04ed3f.png" />


<font style="color:rgb(44, 62, 80);">等号的左边，P 表示概率，N 表示某种函数关系，t 表示时间，n 表示数量。</font>

<font style="color:rgb(44, 62, 80);">在 HashMap 的 doc 文档里，曾有这么一段描述：</font>

```plain
Because TreeNodes are about twice the size of regular nodes, we
use them only when bins contain enough nodes to warrant use
(see TREEIFY_THRESHOLD). And when they become too small (due to
removal or resizing) they are converted back to plain bins.  In
usages with well-distributed user hashCodes, tree bins are
rarely used.  Ideally, under random hashCodes, the frequency of
nodes in bins follows a Poisson distribution
(http://en.wikipedia.org/wiki/Poisson_distribution) with a
parameter of about 0.5 on average for the default resizing
threshold of 0.75, although with a large variance because of
resizing granularity. Ignoring variance, the expected
occurrences of list size k are (exp(-0.5) * pow(0.5, k) /
factorial(k)). The first values are:
0:    0.60653066
1:    0.30326533
2:    0.07581633
3:    0.01263606
4:    0.00157952
5:    0.00015795
6:    0.00001316
7:    0.00000094
8:    0.00000006
more: less than 1 in ten million
```

<font style="color:rgb(44, 62, 80);">为了便于大家的理解，这里来重温一下 HashMap 的拉链法和红黑树结构。</font>

<font style="color:rgb(44, 62, 80);">Java 8 之前，HashMap 使用链表来解决冲突，即当两个或者多个键映射到同一个桶时，它们被放在同一个桶的链表上。当链表上的节点（Node）过多时，链表会变得很长，查找的效率（</font>[<font style="color:rgb(44, 62, 80);">LinkedList</font>](https://javabebetter.cn/collection/linkedlist.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的查找效率为 O（n））就会受到影响。</font>

<font style="color:rgb(44, 62, 80);">Java 8 中，当链表的节点数超过一个阈值（8）时，链表将转为红黑树（节点为 TreeNode），红黑树（在讲</font>[<font style="color:rgb(44, 62, 80);">TreeMap</font>](https://javabebetter.cn/collection/treemap.html)<font style="color:rgb(44, 62, 80);">时会细说）是一种高效的平衡树结构，能够在 O(log n) 的时间内完成插入、删除和查找等操作。这种结构在节点数很多时，可以提高 HashMap 的性能和可伸缩性。</font>

<font style="color:rgb(44, 62, 80);">好，有了这个背景，我们来把上面的 doc 文档翻译为中文：</font>

```plain
因为TreeNode（红黑树的节点）的大小大约是常规节点（链表的节点 Node）的两倍，所以只有当桶内包含足够多的节点时才使用红黑树（参见TREEIFY_THRESHOLD「阈值，值为8」，节点数量较多时，红黑树可以提高查询效率）。

由于删除元素或者调整数组大小（扩容）时（再次散列），红黑树可能会被转换为链表（节点数量小于 8 时），节点数量较少时，链表的效率比红黑树更高，因为红黑树需要更多的内存空间来存储节点。

在具有良好分布的hashCode使用中，很少使用红黑树。

理想情况下，在随机hashCode下，节点在桶中的频率遵循泊松分布（https://zh.wikipedia.org/wiki/卜瓦松分布），平均缩放阈值为0.75，忽略方差，列表大小k的预期出现次数为（exp（-0.5）* pow（0.5，k）/ factorial（k））。

前几个值是：
0: 0.60653066
1: 0.30326533
2: 0.07581633
3: 0.01263606
4: 0.00157952
5: 0.00015795
6: 0.00001316
7: 0.00000094
8: 0.00000006

更多：小于一千万分之一
```

<font style="color:rgb(44, 62, 80);">虽然这段话的本意更多的是表示 jdk 8 中为什么拉链长度超过 8 的时候进行了红黑树转换，但提到了 0.75 这个加载因子，但没提到底为什么。</font>

<font style="color:rgb(44, 62, 80);">为了搞清楚到底为什么，我看到了这篇文章：</font>

<font style="color:rgb(102, 102, 102);">参考链接：</font>[<font style="color:rgb(102, 102, 102);">https://segmentfault.com/a/1190000023308658</font>](https://segmentfault.com/a/1190000023308658)

<font style="color:rgb(44, 62, 80);">里面提到了一个概念：</font>**<font style="color:rgb(44, 62, 80);">二项分布（Binomial Distribution）</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">在做一件事情的时候，其结果的概率只有 2 种情况，和抛硬币一样，不是正面就是反面。</font>

<font style="color:rgb(44, 62, 80);">假如，我们做了 N 次实验，那么在每次试验中只有两种可能的结果，并且每次实验是独立的，不同实验之间互不影响，每次实验成功的概率都是一样的。</font>

<font style="color:rgb(44, 62, 80);">以此理论为基础：我们往哈希表中扔数据，如果发生哈希冲突就为失败，否则为成功。</font>

<font style="color:rgb(44, 62, 80);">我们可以设想，实验的 hash 值是随机的，并且经过 hash 运算的键都会映射到 hash 表的地址空间上，那么这个结果也是随机的。所以，每次 put 的时候就相当于我们在扔一个 16 面（HashMap 第一次扩容后的数组默认长度为 16）的骰子，扔骰子实验那肯定是相互独立的。碰撞发生即扔了 n 次有出现重复数字。</font>

<font style="color:rgb(44, 62, 80);">然后，我们的目的是啥呢？</font>

<font style="color:rgb(44, 62, 80);">就是掷了 k 次骰子，没有一次是相同的概率，需要尽可能的大些，一般意义上我们肯定要大于 0.5（这个数是个理想数）。</font>

<font style="color:rgb(44, 62, 80);">于是，n 次事件里面，碰撞为 0 的概率，由上面公式得：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668350737-c1a96ffe-d119-4626-b732-d8707fae93ec.png" />


<font style="color:rgb(44, 62, 80);">这个概率值需要大于 0.5，我们认为这样的 hashmap 可以提供很低的碰撞率。所以：</font>


<img referrerpolicy="no-referrer" src="" />


<font style="color:rgb(44, 62, 80);">这时候，我们对于该公式其实最想求的时候长度 s 的时候，n 为多少次就应该进行扩容了？而负载因子则是$n/s$的值。所以推导如下：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668349151-e0063cca-3b2d-4152-81d2-7d86416d1895.png" />


<font style="color:rgb(44, 62, 80);">所以可以得到</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668350765-6d844351-468c-4081-965c-43fc05f30686.png" />


<font style="color:rgb(44, 62, 80);">其中</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668350735-2244d036-7a45-4b1d-8edd-95617248bab9.png" />


<font style="color:rgb(44, 62, 80);">这就是一个求</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">∞⋅0</font>`<font style="color:rgb(44, 62, 80);">函数极限问题，这里我们先令$s = m+1（m \to \infty）$则转化为</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668351015-e91c42f7-b499-46e8-970e-a76ae872ee15.png" />


<font style="color:rgb(44, 62, 80);">我们再令 $x = \frac{1}{m} （x \to 0）$ 则有，</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668351224-a3d5f152-b32d-4d1a-88e9-79f5bda9f0ef.png" />


<font style="color:rgb(44, 62, 80);">所以</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668351278-e6e8b168-f7c0-4828-8176-73ed5ac69e0d.png" />


<font style="color:rgb(44, 62, 80);">考虑到 HashMap 的容量有一个要求：它必须是 2 的 n 次幂。当加载因子选择了 0.75 就可以保证它与容量的乘积为整数。</font>

```plain
16*0.75=12
32*0.75=24
```

<font style="color:rgb(44, 62, 80);">除了 0.75，0.5~1 之间还有 0.625（5/8）、0.875（7/8）可选，从中位数的角度，挑 0.75 比较完美。另外，维基百科上说，拉链法（解决哈希冲突的一种）的加载因子最好限制在 0.7-0.8 以下，超过 0.8，查表时的 CPU 缓存不命中（cache missing）会按照指数曲线上升。</font>

<font style="color:rgb(44, 62, 80);">综上，0.75 是个比较完美的选择。</font>

#### [<font style="color:rgb(44, 62, 80);">小结</font>](https://javabetter.cn/collection/hashmap.html#%E5%B0%8F%E7%BB%93-2)

**<font style="color:rgb(44, 62, 80);">HashMap 的加载因子（load factor，直译为加载因子，意译为负载因子）是指哈希表中填充元素的个数与桶的数量的比值，当元素个数达到负载因子与桶的数量的乘积时，就需要进行扩容。这个值一般选择 0.75，是因为这个值可以在时间和空间成本之间做到一个折中，使得哈希表的性能达到较好的表现</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">如果负载因子过大，填充因子较多，那么哈希表中的元素就会越来越多地聚集在少数的桶中，这就导致了冲突的增加，这些冲突会导致查找、插入和删除操作的效率下降。同时，这也会导致需要更频繁地进行扩容，进一步降低了性能。</font>

<font style="color:rgb(44, 62, 80);">如果负载因子过小，那么桶的数量会很多，虽然可以减少冲突，但是在空间利用上面也会有浪费，因此选择 0.75 是为了取得一个平衡点，即在时间和空间成本之间取得一个比较好的平衡点。</font>

<font style="color:rgb(44, 62, 80);">总之，选择 0.75 这个值是为了在时间和空间成本之间达到一个较好的平衡点，既可以保证哈希表的性能表现，又能够充分利用空间。</font>

### <font style="color:rgb(44, 62, 80);">线程不安全</font>

<font style="color:rgb(44, 62, 80);">其实这个问题也不用说太多，但考虑到面试的时候有些面试官会问，那就简单说一下。</font>

<font style="color:rgb(44, 62, 80);">三方面原因：</font>

+ <font style="color:rgb(44, 62, 80);">多线程下扩容会死循环</font>
+ <font style="color:rgb(44, 62, 80);">多线程下 put 会导致元素丢失</font>
+ <font style="color:rgb(44, 62, 80);">put 和 get 并发时会导致 get 到 null</font>

#### <font style="color:rgb(44, 62, 80);">多线程下扩容会死循环</font>

<font style="color:rgb(44, 62, 80);">众所周知，HashMap 是通过拉链法来解决哈希冲突的，也就是当哈希冲突时，会将相同哈希值的键值对通过链表的形式存放起来。</font>

<font style="color:rgb(44, 62, 80);">JDK 7 时，采用的是头部插入的方式来存放链表的，也就是下一个冲突的键值对会放在上一个键值对的前面（讲扩容的时候讲过了）。扩容的时候就有可能导致出现环形链表，造成死循环。</font>

<font style="color:rgb(44, 62, 80);">resize 方法的源码：</font>

```plain
// newCapacity为新的容量
void resize(int newCapacity) {
    // 小数组，临时过度下
    Entry[] oldTable = table;
    // 扩容前的容量
    int oldCapacity = oldTable.length;
    // MAXIMUM_CAPACITY 为最大容量，2 的 30 次方 = 1<<30
    if (oldCapacity == MAXIMUM_CAPACITY) {
        // 容量调整为 Integer 的最大值 0x7fffffff（十六进制）=2 的 31 次方-1
        threshold = Integer.MAX_VALUE;
        return;
    }

    // 初始化一个新的数组（大容量）
    Entry[] newTable = new Entry[newCapacity];
    // 把小数组的元素转移到大数组中
    transfer(newTable, initHashSeedAsNeeded(newCapacity));
    // 引用新的大数组
    table = newTable;
    // 重新计算阈值
    threshold = (int)Math.min(newCapacity * loadFactor, MAXIMUM_CAPACITY + 1);
}
```

<font style="color:rgb(44, 62, 80);">transfer 方法用来转移，将小数组的元素拷贝到新的数组中。</font>

```plain
void transfer(Entry[] newTable, boolean rehash) {
    // 新的容量
    int newCapacity = newTable.length;
    // 遍历小数组
    for (Entry<K,V> e : table) {
        while(null != e) {
            // 拉链法，相同 key 上的不同值
            Entry<K,V> next = e.next;
            // 是否需要重新计算 hash
            if (rehash) {
                e.hash = null == e.key ? 0 : hash(e.key);
            }
            // 根据大数组的容量，和键的 hash 计算元素在数组中的下标
            int i = indexFor(e.hash, newCapacity);

            // 同一位置上的新元素被放在链表的头部
            e.next = newTable[i];

            // 放在新的数组上
            newTable[i] = e;

            // 链表上的下一个元素
            e = next;
        }
    }
}
```

<font style="color:rgb(44, 62, 80);">注意</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">e.next = newTable[i]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newTable[i] = e</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这两行代码，就会将同一位置上的新元素被放在链表的头部。</font>

<font style="color:rgb(44, 62, 80);">扩容前的样子假如是下面这样子。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668351269-ec1f9beb-ea4f-408b-a65f-64b701e1d2e5.png" />


<font style="color:rgb(44, 62, 80);">那么正常扩容后就是下面这样子。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668352480-1da760d4-956f-47b4-918e-6be55e93e318.png" />


<font style="color:rgb(44, 62, 80);">假设现在有两个线程同时进行扩容，线程 A 在执行到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newTable[i] = e;</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">被挂起，此时线程 A 中：e=3、next=7、e.next=null</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668352473-19e6d34f-17ae-438e-8023-1da06599b29e.png" />


<font style="color:rgb(44, 62, 80);">线程 B 开始执行，并且完成了数据转移。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668352414-03ada39d-d1d7-4f62-9c60-53d3a2b64138.png" />


<font style="color:rgb(44, 62, 80);">此时，7 的 next 为 3，3 的 next 为 null。</font>

<font style="color:rgb(44, 62, 80);">随后线程 A 获得 CPU 时间片继续执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newTable[i] = e</font>`<font style="color:rgb(44, 62, 80);">，将 3 放入新数组对应的位置，执行完此轮循环后线程 A 的情况如下：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668352422-7a192a16-4888-4a58-9bf6-01403aecdbd7.png" />


<font style="color:rgb(44, 62, 80);">执行下一轮循环，此时 e=7，原本线程 A 中 7 的 next 为 5，但由于 table 是线程 A 和线程 B 共享的，而线程 B 顺利执行完后，7 的 next 变成了 3，那么此时线程 A 中，7 的 next 也为 3 了。</font>

<font style="color:rgb(44, 62, 80);">采用头部插入的方式，变成了下面这样子：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668352427-3cc4b546-4c9b-4890-9e9d-6bc7ae01a435.png" />


<font style="color:rgb(44, 62, 80);">好像也没什么问题，此时 next = 3，e = 3。</font>

<font style="color:rgb(44, 62, 80);">进行下一轮循环，但此时，由于线程 B 将 3 的 next 变为了 null，所以此轮循环应该是最后一轮了。</font>

<font style="color:rgb(44, 62, 80);">接下来当执行完</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">e.next=newTable[i]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">即 3.next=7 后，3 和 7 之间就相互链接了，执行完</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newTable[i]=e</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">后，3 被头插法重新插入到链表中，执行结果如下图所示：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668353534-3109b309-dcda-4b22-b165-ca35f531f5bf.png" />


<font style="color:rgb(44, 62, 80);">套娃开始，元素 5 也就成了弃婴，惨~~~</font>

<font style="color:rgb(44, 62, 80);">不过，JDK 8 时已经修复了这个问题，扩容时会保持链表原来的顺序（嗯，等于说了半天白说了，哈哈，这个面试题确实是这样，很水，但有些面试官又确实比较装逼）。</font>

#### <font style="color:rgb(44, 62, 80);">多线程下 put 会导致元素丢失</font>

<font style="color:rgb(44, 62, 80);">正常情况下，当发生哈希冲突时，HashMap 是这样的：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668353540-e3fd38e6-e47f-4d71-b4b3-0b5b92755634.png" />


<font style="color:rgb(44, 62, 80);">但多线程同时执行 put 操作时，如果计算出来的索引位置是相同的，那会造成前一个 key 被后一个 key 覆盖，从而导致元素的丢失。</font>

<font style="color:rgb(44, 62, 80);">put 的源码：</font>

```plain
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
               boolean evict) {
    Node<K,V>[] tab; Node<K,V> p; int n, i;

    // 步骤①：tab为空则创建
    if ((tab = table) == null || (n = tab.length) == 0)
        n = (tab = resize()).length;

    // 步骤②：计算index，并对null做处理
    if ((p = tab[i = (n - 1) & hash]) == null)
        tab[i] = newNode(hash, key, value, null);
    else {
        Node<K,V> e; K k;

        // 步骤③：节点key存在，直接覆盖value
        if (p.hash == hash &&
            ((k = p.key) == key || (key != null && key.equals(k))))
            e = p;

        // 步骤④：判断该链为红黑树
        else if (p instanceof TreeNode)
            e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);

        // 步骤⑤：该链为链表
        else {
            for (int binCount = 0; ; ++binCount) {
                if ((e = p.next) == null) {
                    p.next = newNode(hash, key, value, null);

                    //链表长度大于8转换为红黑树进行处理
                    if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                        treeifyBin(tab, hash);
                    break;
                }

                // key已经存在直接覆盖value
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    break;
                p = e;
            }
        }

        // 步骤⑥、直接覆盖
        if (e != null) { // existing mapping for key
            V oldValue = e.value;
            if (!onlyIfAbsent || oldValue == null)
                e.value = value;
            afterNodeAccess(e);
            return oldValue;
        }
    }
    ++modCount;

    // 步骤⑦：超过最大容量 就扩容
    if (++size > threshold)
        resize();
    afterNodeInsertion(evict);
    return null;
}
```

<font style="color:rgb(44, 62, 80);">问题发生在步骤 ② 这里：</font>

```plain
if ((p = tab[i = (n - 1) & hash]) == null)
    tab[i] = newNode(hash, key, value, null);
```

<font style="color:rgb(44, 62, 80);">两个线程都执行了 if 语句，假设线程 A 先执行了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">tab[i] = newNode(hash, key, value, null)</font>`<font style="color:rgb(44, 62, 80);">，那 table 是这样的：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668353545-44ee78b3-7c0a-4353-b63f-912ab1b9eddc.png" />


<font style="color:rgb(44, 62, 80);">接着，线程 B 执行了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">tab[i] = newNode(hash, key, value, null)</font>`<font style="color:rgb(44, 62, 80);">，那 table 是这样的：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668353540-173fd000-14f1-402b-bf66-5771a11320c3.png" />


<font style="color:rgb(44, 62, 80);">3 被干掉了。</font>

#### <font style="color:rgb(44, 62, 80);">put 和 get 并发时会导致 get 到 null</font>

<font style="color:rgb(44, 62, 80);">线程 1 执行 put 时，因为元素个数超出阈值而导致出现扩容，线程 2 此时执行 get，就有可能出现这个问题。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668355421-ab4a229a-f89f-41e2-bb6f-c14c9a1704fd.png" />


<font style="color:rgb(44, 62, 80);">因为线程 1 执行完 table = newTab 之后，线程 2 中的 table 此时也发生了变化，此时去 get 的时候当然会 get 到 null 了，因为元素还没有转移。</font>

<font style="color:rgb(44, 62, 80);">参考链接：</font>

+ [<font style="color:rgb(102, 102, 102);">https://blog.csdn.net/lonyw/article/details/80519652</font>](https://blog.csdn.net/lonyw/article/details/80519652)
+ [<font style="color:rgb(102, 102, 102);">https://zhuanlan.zhihu.com/p/91636401</font>](https://zhuanlan.zhihu.com/p/91636401)
+ [<font style="color:rgb(102, 102, 102);">https://www.zhihu.com/question/20733617</font>](https://www.zhihu.com/question/20733617)
+ [<font style="color:rgb(102, 102, 102);">https://zhuanlan.zhihu.com/p/21673805</font>](https://zhuanlan.zhihu.com/p/21673805)

#### <font style="color:rgb(44, 62, 80);">小结</font>

<font style="color:rgb(44, 62, 80);">HashMap 是线程不安全的主要是因为它在进行插入、删除和扩容等操作时可能会导致链表的结构发生变化，从而破坏了 HashMap 的不变性。具体来说，如果在一个线程正在遍历 HashMap 的链表时，另外一个线程对该链表进行了修改（比如添加了一个节点），那么就会导致链表的结构发生变化，从而破坏了当前线程正在进行的遍历操作，可能导致遍历失败或者出现死循环等问题。</font>

<font style="color:rgb(44, 62, 80);">为了解决这个问题，Java 提供了线程安全的 HashMap 实现类</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">ConcurrentHashMap</font>](https://javabebetter.cn/thread/ConcurrentHashMap.html)<font style="color:rgb(44, 62, 80);">。ConcurrentHashMap 内部采用了分段锁（Segment），将整个 Map 拆分为多个小的 HashMap，每个小的 HashMap 都有自己的锁，不同的线程可以同时访问不同的小 Map，从而实现了线程安全。在进行插入、删除和扩容等操作时，只需要锁住当前小 Map，不会对整个 Map 进行锁定，提高了并发访问的效率。</font>

### <font style="color:rgb(44, 62, 80);">小结</font>

<font style="color:rgb(44, 62, 80);">HashMap 是 Java 中最常用的集合之一，它是一种键值对存储的数据结构，可以根据键来快速访问对应的值。以下是对 HashMap 的总结：</font>

+ <font style="color:rgb(44, 62, 80);">HashMap 采用数组+链表/红黑树的存储结构，能够在 O(1)的时间复杂度内实现元素的添加、删除、查找等操作。</font>
+ <font style="color:rgb(44, 62, 80);">HashMap 是线程不安全的，因此在多线程环境下需要使用</font>[<font style="color:rgb(44, 62, 80);">ConcurrentHashMap</font>](https://javabebetter.cn/thread/ConcurrentHashMap.html)<font style="color:rgb(44, 62, 80);">来保证线程安全。</font>
+ <font style="color:rgb(44, 62, 80);">HashMap 的扩容机制是通过扩大数组容量和重新计算 hash 值来实现的，扩容时需要重新计算所有元素的 hash 值，因此在元素较多时扩容会影响性能。</font>
+ <font style="color:rgb(44, 62, 80);">在 Java 8 中，HashMap 的实现引入了拉链法、树化等机制来优化大量元素存储的情况，进一步提升了性能。</font>
+ <font style="color:rgb(44, 62, 80);">HashMap 中的 key 是唯一的，如果要存储重复的 key，则后面的值会覆盖前面的值。</font>
+ <font style="color:rgb(44, 62, 80);">HashMap 的初始容量和加载因子都可以设置，初始容量表示数组的初始大小，加载因子表示数组的填充因子。一般情况下，初始容量为 16，加载因子为 0.75。</font>
+ <font style="color:rgb(44, 62, 80);">HashMap 在遍历时是无序的，因此如果需要有序遍历，可以使用</font>[<font style="color:rgb(44, 62, 80);">TreeMap</font>](https://javabebetter.cn/collection/treemap.html)<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">综上所述，HashMap 是一种高效的数据结构，具有快速查找和插入元素的能力，但需要注意线程安全和性能问题。</font>

<font style="color:rgb(44, 62, 80);">那如果大家已经掌握了 HashMap，那可以刷一下 LeetCode 的第 001 题、013 题，会用到 HashMap、数组和 for 循环，我把题解链接放在了技术派上：</font>

+ [<font style="color:rgb(102, 102, 102);">二哥的 LeetCode 刷题笔记：001.两数之和</font>](https://paicoding.com/column/7/1)
+ [<font style="color:rgb(102, 102, 102);">二哥的 LeetCode 刷题笔记：013.罗马数字转整数</font>](https://paicoding.com/column/7/13)

<font style="color:rgb(102, 102, 102);"></font>

## LinkedHashMap 详解

<font style="color:rgb(44, 62, 80);">俗话说了，“金无足赤人无完人”，HashMap 也不例外，有一种需求它就满足不了，假如我们需要一个按照插入顺序来排列的键值对集合，那 HashMap 就无能为力了。那该怎么办呢？必须得上今天这篇文章的主角：LinkedHashMap。</font>

<font style="color:rgb(44, 62, 80);">同学们好啊，还记得</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">那篇吗？我自己感觉写得非常棒啊，既通俗易懂，又深入源码，真的是分析得透透彻彻、清清楚楚、明明白白的。（一不小心又甩了三个成语，有文化吧？）HashMap 哪哪都好，真的，只要你想用键值对，第一时间就应该想到它。</font>

<font style="color:rgb(44, 62, 80);">为了提高查找效率，HashMap 在插入的时候对键做了一次哈希算法，这就导致插入的元素是无序的。</font>

<font style="color:rgb(44, 62, 80);">对这一点还不太明白的同学，可以再回到</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">那一篇，看看 hash 方法，再看看我对</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">put()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的讲解，就能明白了，我们这里再来回顾一下。</font>

```plain
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,

               boolean evict) {
    HashMap.Node<K,V>[] tab; HashMap.Node<K,V> p; int n, i;
    // ①、数组 table 为 null 时，调用 resize 方法创建默认大小的数组
    if ((tab = table) == null || (n = tab.length) == 0)
        n = (tab = resize()).length;
    // ②、计算下标，如果该位置上没有值，则填充
    if ((p = tab[i = (n - 1) & hash]) == null)
        tab[i] = newNode(hash, key, value, null);
}
```

<font style="color:rgb(44, 62, 80);">其中这个公式</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">i = (n - 1) & hash</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">计算后的值就是键位在数组（桶）中的索引（下标/位置），但这它并不是按照 0、1、2、3、4、5 这样有序的下标将键值对插入到数组当中的，而是有一定的随机性。</font>

<font style="color:rgb(44, 62, 80);">比如说默认大小为 16 的 HashMap，如果 put 了 4 个键值对，可能下标是 0、4、9、11，那这样的话，在遍历 HashMap 的时候，就不一定能按照插入顺序来了。</font>

<font style="color:rgb(44, 62, 80);">看下面的例子。</font>

```plain
// 创建 HashMap 对象，键类型为 String，值类型为 String
Map<String, String> map = new HashMap<>();

// 使用 put() 方法向 HashMap 中添加数据
map.put("chenmo", "沉默");
map.put("wanger", "王二");
map.put("chenqingyang", "陈清扬");

// 遍历 HashMap，输出所有键值对
for (Map.Entry<String, String> entry : map.entrySet()) {
    String key = entry.getKey();
    String value = entry.getValue();
    System.out.println("Key: " + key + ", Value: " + value);
}
```

<font style="color:rgb(44, 62, 80);">来看输出结果</font>

```plain
Key: chenmo, Value: 沉默
Key: chenqingyang, Value: 陈清扬
Key: wanger, Value: 王二
```

<font style="color:rgb(44, 62, 80);">对比一下输出结果就可以看得出来，put 的时候是 沉默、王二、陈清扬的顺序，但遍历的时候就没有按照这个顺序来：沉默、陈清扬、王二，因为 HashMap 是无序的。</font>

<font style="color:rgb(44, 62, 80);">那怎么保证键值对的插入顺序呢？</font>

<font style="color:rgb(44, 62, 80);">LinkedHashMap 就是为这个需求应运而生的。LinkedHashMap 继承了 HashMap，所以 HashMap 有的关于键值对的功能，它也有了。</font>

```plain
public class LinkedHashMap<K,V>

    extends HashMap<K,V>

    implements Map<K,V>{}
```

<font style="color:rgb(44, 62, 80);">在此基础上，LinkedHashMap 内部追加了双向链表，来维护元素的插入顺序。注意下面代码中的 before 和 after，它俩就是用来维护当前元素的前一个元素和后一个元素的顺序的。</font>

```plain
static class Entry<K,V> extends HashMap.Node<K,V> {
    Entry<K,V> before, after;
    Entry(int hash, K key, V value, Node<K,V> next) {
        super(hash, key, value, next);
    }
}
```

<font style="color:rgb(44, 62, 80);">关于双向链表，同学们可以回头看一遍我写的</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">LinkedList</font>](https://javabetter.cn/collection/linkedlist.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">那篇文章，会对理解本篇的 LinkedHashMap 有很大的帮助。</font>

<font style="color:rgb(44, 62, 80);">用 LinkedHashMap 替换 HashMap，再来对比一下输出结果。</font>

```plain
// 创建 LinkedHashMap 对象，键类型为 String，值类型为 String
Map<String, String> map = new LinkedHashMap<>();

// 使用 put() 方法向 LinkedHashMap 中添加数据
map.put("chenmo", "沉默");
map.put("wanger", "王二");
map.put("chenqingyang", "陈清扬");

// 遍历 LinkedHashMap，输出所有键值对
for (Map.Entry<String, String> entry : map.entrySet()) {
    String key = entry.getKey();
    String value = entry.getValue();
    System.out.println("Key: " + key + ", Value: " + value);
}
```

<font style="color:rgb(44, 62, 80);">来看输出结果：</font>

```plain
Key: chenmo, Value: 沉默
Key: wanger, Value: 王二
Key: chenqingyang, Value: 陈清扬
```

<font style="color:rgb(44, 62, 80);">看，LinkedHashMap 是不是保持了插入顺序？这就对了。</font>

### <font style="color:rgb(44, 62, 80);">插入顺序</font>

<font style="color:rgb(44, 62, 80);">在</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">那篇文章里，我有讲解到一点，不知道同学们记不记得，就是 null 会插入到 HashMap 的第一位。</font>

```plain
Map<String, String> hashMap = new HashMap<>();
hashMap.put("沉", "沉默王二");
hashMap.put("默", "沉默王二");
hashMap.put("王", "沉默王二");
hashMap.put("二", "沉默王二");
hashMap.put(null, null);

for (String key : hashMap.keySet()) {
    System.out.println(key + " : " + hashMap.get(key));
}
```

<font style="color:rgb(44, 62, 80);">输出的结果是：</font>

```plain
null : null
默 : 沉默王二
沉 : 沉默王二
王 : 沉默王二
二 : 沉默王二
```

<font style="color:rgb(44, 62, 80);">虽然 null 最后一位 put 进去的，但在遍历输出的时候，跑到了第一位。</font>

<font style="color:rgb(44, 62, 80);">那再来对比看一下 LinkedHashMap。</font>

```plain
Map<String, String> linkedHashMap = new LinkedHashMap<>();
linkedHashMap.put("沉", "沉默王二");
linkedHashMap.put("默", "沉默王二");
linkedHashMap.put("王", "沉默王二");
linkedHashMap.put("二", "沉默王二");
linkedHashMap.put(null, null);

for (String key : linkedHashMap.keySet()) {
    System.out.println(key + " : " + linkedHashMap.get(key));
}
```

<font style="color:rgb(44, 62, 80);">输出结果是：</font>

```plain
沉 : 沉默王二
默 : 沉默王二
王 : 沉默王二
二 : 沉默王二
null : null
```

<font style="color:rgb(44, 62, 80);">null 在最后一位插入，在最后一位输出。</font>

<font style="color:rgb(44, 62, 80);">输出结果可以再次证明，</font>**<font style="color:rgb(44, 62, 80);">HashMap 是无序的，LinkedHashMap 是可以维持插入顺序的</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">那 LinkedHashMap 是如何做到这一点呢？我相信同学们和我一样，非常希望知道原因。</font>

<font style="color:rgb(44, 62, 80);">要想搞清楚，就需要深入研究一下 LinkedHashMap 的源码。LinkedHashMap 并未重写 HashMap 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">put()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，而是重写了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">put()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法需要调用的内部方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newNode()</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">这是 HashMap 的。</font>

```plain
Node<K,V> newNode(int hash, K key, V value, Node<K,V> next) {
    return new Node<>(hash, key, value, next);
}
```

<font style="color:rgb(44, 62, 80);">这是 LinkedHashMap 的。</font>

```plain
HashMap.Node<K,V> newNode(int hash, K key, V value, HashMap.Node<K,V> e) {
    LinkedHashMap.Entry<K,V> p =
            new LinkedHashMap.Entry<>(hash, key, value, e);
    linkNodeLast(p);
    return p;
}
```

<font style="color:rgb(44, 62, 80);">前面曾提到 LinkedHashMap.Entry 继承了 HashMap.Node，并且追加了两个字段 before 和 after，用来维持键值对的关系。</font>

```plain
static class Entry<K,V> extends HashMap.Node<K,V> {
    Entry<K,V> before, after;
    Entry(int hash, K key, V value, Node<K,V> next) {
        super(hash, key, value, next);
    }
}
```

<font style="color:rgb(44, 62, 80);">在 LinkedHashMap 中，链表中的节点顺序是按照插入顺序维护的。当使用 put() 方法向 LinkedHashMap 中添加键值对时，会将新节点插入到链表的尾部，并更新 before 和 after 属性，以保证链表的顺序关系——由</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">linkNodeLast()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法来完成：</font>

```plain
/**
 * 将指定节点插入到链表的尾部
 *
 * @param p 要插入的节点
 */
private void linkNodeLast(LinkedHashMap.Entry<K,V> p) {
    LinkedHashMap.Entry<K,V> last = tail; // 获取链表的尾节点
    tail = p; // 将 p 设为尾节点
    if (last == null)
        head = p; // 如果链表为空，则将 p 设为头节点
    else {
        p.before = last; // 将 p 的前驱节点设为链表的尾节点
        last.after = p; // 将链表的尾节点的后继节点设为 p
    }
}
```

<font style="color:rgb(44, 62, 80);">看到了吧，LinkedHashMap 在添加第一个元素的时候，会把 head 赋值为第一个元素，等到第二个元素添加进来的时候，会把第二个元素的 before 赋值为第一个元素，第一个元素的 afer 赋值为第二个元素。</font>

<font style="color:rgb(44, 62, 80);">这就保证了键值对是按照插入顺序排列的，明白了吧？</font>

### <font style="color:rgb(44, 62, 80);">访问顺序</font>

<font style="color:rgb(44, 62, 80);">LinkedHashMap 不仅能够维持插入顺序，还能够维持访问顺序。访问包括调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">get()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法、</font>`<font style="color:rgb(44, 62, 80);">remove()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">put()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

<font style="color:rgb(44, 62, 80);">要维护访问顺序，需要我们在声明 LinkedHashMap 的时候指定三个参数。</font>

```plain
LinkedHashMap<String, String> map = new LinkedHashMap<>(16, .75f, true);
```

<font style="color:rgb(44, 62, 80);">第一个参数和第二个参数，看过</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的同学们应该很熟悉了，指的是初始容量和负载因子。</font>

<font style="color:rgb(44, 62, 80);">第三个参数如果为 true 的话，就表示 LinkedHashMap 要维护访问顺序；否则，维护插入顺序。默认是 false。</font>

```plain
Map<String, String> linkedHashMap = new LinkedHashMap<>(16, .75f, true);
linkedHashMap.put("沉", "沉默王二");
linkedHashMap.put("默", "沉默王二");
linkedHashMap.put("王", "沉默王二");
linkedHashMap.put("二", "沉默王二");

System.out.println(linkedHashMap);

linkedHashMap.get("默");
System.out.println(linkedHashMap);

linkedHashMap.get("王");
System.out.println(linkedHashMap);
```

<font style="color:rgb(44, 62, 80);">输出的结果如下所示：</font>

```plain
{沉=沉默王二, 默=沉默王二, 王=沉默王二, 二=沉默王二}
{沉=沉默王二, 王=沉默王二, 二=沉默王二, 默=沉默王二}
{沉=沉默王二, 二=沉默王二, 默=沉默王二, 王=沉默王二}
```

<font style="color:rgb(44, 62, 80);">当我们使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">get()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法访问键位“默”的元素后，输出结果中，</font>`<font style="color:rgb(44, 62, 80);">默=沉默王二</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">在最后；当我们访问键位“王”的元素后，输出结果中，</font>`<font style="color:rgb(44, 62, 80);">王=沉默王二</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">在最后，</font>`<font style="color:rgb(44, 62, 80);">默=沉默王二</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">在倒数第二位。</font>

<font style="color:rgb(44, 62, 80);">也就是说，最不经常访问的放在头部，这就有意思了。有意思在哪呢？</font>

### <font style="color:rgb(44, 62, 80);">LRU 缓存</font>

<font style="color:rgb(44, 62, 80);">我们可以使用 LinkedHashMap 来实现 LRU 缓存，LRU 是 Least Recently Used 的缩写，即最近最少使用，是一种常用的页面置换算法，选择最近最久未使用的页面予以淘汰。</font>

```plain
/**
 * 自定义的 MyLinkedHashMap 类，继承了 Java 中内置的 LinkedHashMap<K, V> 类。
 * 用于实现一个具有固定大小的缓存，当缓存达到最大容量时，会自动移除最早加入的元素，以腾出空间给新的元素。
 *
 * @param <K> 键的类型
 * @param <V> 值的类型
 */
public class MyLinkedHashMap<K, V> extends LinkedHashMap<K, V> {

    private static final int MAX_ENTRIES = 5; // 表示 MyLinkedHashMap 中最多存储的键值对数量

    /**
     * 构造方法，使用 super() 调用了父类的构造函数，并传递了三个参数：initialCapacity、loadFactor 和 accessOrder。
     *
     * @param initialCapacity 初始容量
     * @param loadFactor      负载因子
     * @param accessOrder     访问顺序
     */
    public MyLinkedHashMap(int initialCapacity, float loadFactor, boolean accessOrder) {
        super(initialCapacity, loadFactor, accessOrder);
    }

    /**
     * 重写父类的 removeEldestEntry() 方法，用于指示是否应该移除最早加入的元素。
     * 如果返回 true，那么将删除最早加入的元素。
     *
     * @param eldest 最早加入的元素
     * @return 如果当前 MyLinkedHashMap 中元素的数量大于 MAX_ENTRIES，返回 true，否则返回 false。
     */
    @Override
    protected boolean removeEldestEntry(Map.Entry eldest) {
        return size() > MAX_ENTRIES;
    }

}
```

<font style="color:rgb(44, 62, 80);">MyLinkedHashMap 是一个自定义类，它继承了 LinkedHashMap，并且重写了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">removeEldestEntry()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法——使 Map 最多可容纳 5 个元素，超出后就淘汰。</font>

<font style="color:rgb(44, 62, 80);">我们来测试一下。</font>

```plain
MyLinkedHashMap<String,String> map = new MyLinkedHashMap<>(16,0.75f,true);
map.put("沉", "沉默王二");
map.put("默", "沉默王二");
map.put("王", "沉默王二");
map.put("二", "沉默王二");
map.put("一枚有趣的程序员", "一枚有趣的程序员");

System.out.println(map);

map.put("一枚有颜值的程序员", "一枚有颜值的程序员");
System.out.println(map);

map.put("一枚有才华的程序员","一枚有才华的程序员");
System.out.println(map);
```

<font style="color:rgb(44, 62, 80);">输出结果如下所示：</font>

```plain
{沉=沉默王二, 默=沉默王二, 王=沉默王二, 二=沉默王二, 一枚有趣的程序员=一枚有趣的程序员}
{默=沉默王二, 王=沉默王二, 二=沉默王二, 一枚有趣的程序员=一枚有趣的程序员, 一枚有颜值的程序员=一枚有颜值的程序员}
{王=沉默王二, 二=沉默王二, 一枚有趣的程序员=一枚有趣的程序员, 一枚有颜值的程序员=一枚有颜值的程序员, 一枚有才华的程序员=一枚有才华的程序员}
```

`<font style="color:rgb(44, 62, 80);">沉=沉默王二</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">默=沉默王二</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">依次被淘汰出局。</font>

<font style="color:rgb(44, 62, 80);">假如在 put “一枚有才华的程序员”之前 get 了键位为“默”的元素：</font>

```plain
MyLinkedHashMap<String,String> map = new MyLinkedHashMap<>(16,0.75f,true);
map.put("沉", "沉默王二");
map.put("默", "沉默王二");
map.put("王", "沉默王二");
map.put("二", "沉默王二");
map.put("一枚有趣的程序员", "一枚有趣的程序员");

System.out.println(map);

map.put("一枚有颜值的程序员", "一枚有颜值的程序员");
System.out.println(map);

map.get("默");
map.put("一枚有才华的程序员","一枚有才华的程序员");
System.out.println(map);
```

<font style="color:rgb(44, 62, 80);">那输出结果就变了，对吧？</font>

```plain
{沉=沉默王二, 默=沉默王二, 王=沉默王二, 二=沉默王二, 一枚有趣的程序员=一枚有趣的程序员}
{默=沉默王二, 王=沉默王二, 二=沉默王二, 一枚有趣的程序员=一枚有趣的程序员, 一枚有颜值的程序员=一枚有颜值的程序员}
{二=沉默王二, 一枚有趣的程序员=一枚有趣的程序员, 一枚有颜值的程序员=一枚有颜值的程序员, 默=沉默王二, 一枚有才华的程序员=一枚有才华的程序员}
```

`<font style="color:rgb(44, 62, 80);">沉=沉默王二</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">王=沉默王二</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">被淘汰出局了。</font>

<font style="color:rgb(44, 62, 80);">那 LinkedHashMap 是如何来维持访问顺序呢？同学们感兴趣的话，可以研究一下下面这三个方法。</font>

```plain
void afterNodeAccess(Node<K,V> p) { }
void afterNodeInsertion(boolean evict) { }
void afterNodeRemoval(Node<K,V> p) { }
```

`<font style="color:rgb(44, 62, 80);">afterNodeAccess()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">会在调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">get()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的时候被调用，</font>`<font style="color:rgb(44, 62, 80);">afterNodeInsertion()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">会在调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">put()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的时候被调用，</font>`<font style="color:rgb(44, 62, 80);">afterNodeRemoval()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">会在调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">remove()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的时候被调用。</font>

<font style="color:rgb(44, 62, 80);">我来以</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">afterNodeAccess()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为例来讲解一下。</font>

```plain
/**
 * 在访问节点后，将节点移动到链表的尾部
 *
 * @param e 要移动的节点
 */
void afterNodeAccess(HashMap.Node<K,V> e) { // move node to last
    LinkedHashMap.Entry<K,V> last;
    if (accessOrder && (last = tail) != e) { // 如果按访问顺序排序，并且访问的节点不是尾节点
        LinkedHashMap.Entry<K,V> p = (LinkedHashMap.Entry<K,V>)e, b = p.before, a = p.after;
        p.after = null; // 将要移动的节点的后继节点设为 null
        if (b == null)
            head = a; // 如果要移动的节点没有前驱节点，则将要移动的节点设为头节点
        else
            b.after = a; // 将要移动的节点的前驱节点的后继节点设为要移动的节点的后继节点
        if (a != null)
            a.before = b; // 如果要移动的节点有后继节点，则将要移动的节点的后继节点的前驱节点设为要移动的节点的前驱节点
        else
            last = b; // 如果要移动的节点没有后继节点，则将要移动的节点的前驱节点设为尾节点
        if (last == null)
            head = p; // 如果尾节点为空，则将要移动的节点设为头节点
        else {
            p.before = last; // 将要移动的节点的前驱节点设为尾节点
            last.after = p; // 将尾节点的后继节点设为要移动的节点
        }
        tail = p; // 将要移动的节点设为尾节点
        ++modCount; // 修改计数器
    }
}
```

<font style="color:rgb(44, 62, 80);">哪个元素被 get 就把哪个元素放在最后。了解了吧？</font>

<font style="color:rgb(44, 62, 80);">那同学们可能还想知道，为什么 LinkedHashMap 能实现 LRU 缓存，把最不经常访问的那个元素淘汰？</font>

<font style="color:rgb(44, 62, 80);">在插入元素的时候，需要调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">put()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，该方法最后会调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">afterNodeInsertion()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，这个方法被 LinkedHashMap 重写了。</font>

```plain
/**
 * 在插入节点后，如果需要，可能会删除最早加入的元素
 *
 * @param evict 是否需要删除最早加入的元素
 */
void afterNodeInsertion(boolean evict) { // possibly remove eldest
    LinkedHashMap.Entry<K,V> first;
    if (evict && (first = head) != null && removeEldestEntry(first)) { // 如果需要删除最早加入的元素
        K key = first.key; // 获取要删除元素的键
        removeNode(hash(key), key, null, false, true); // 调用 removeNode() 方法删除元素
    }
}
```

`<font style="color:rgb(44, 62, 80);">removeEldestEntry()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法会判断第一个元素是否超出了可容纳的最大范围，如果超出，那就会调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">removeNode()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法对最不经常访问的那个元素进行删除。</font>

### <font style="color:rgb(44, 62, 80);">小结</font>

<font style="color:rgb(44, 62, 80);">由于 LinkedHashMap 要维护双向链表，所以 LinkedHashMap 在插入、删除操作的时候，花费的时间要比 HashMap 多一些。</font>

<font style="color:rgb(44, 62, 80);">这也是没办法的事，对吧，欲戴皇冠必承其重嘛。既然想要维护元素的顺序，总要付出点代价才行。</font>

<font style="color:rgb(44, 62, 80);">简单总结一下吧。</font>

<font style="color:rgb(44, 62, 80);">首先，我们知道 HashMap 是一种常用的哈希表数据结构，它可以快速地进行键值对的查找和插入操作。但是，HashMap 本身并不保证键值对的顺序，如果我们需要按照插入顺序或访问顺序来遍历键值对，就需要使用 LinkedHashMap 了。</font>

<font style="color:rgb(44, 62, 80);">LinkedHashMap 继承自 HashMap，它在 HashMap 的基础上，增加了一个双向链表来维护键值对的顺序。这个链表可以按照插入顺序或访问顺序排序，它的头节点表示最早插入或访问的元素，尾节点表示最晚插入或访问的元素。这个链表的作用就是让 LinkedHashMap 可以保持键值对的顺序，并且可以按照顺序遍历键值对。</font>

<font style="color:rgb(44, 62, 80);">LinkedHashMap 还提供了两个构造方法来指定排序方式，分别是按照插入顺序排序和按照访问顺序排序。在按照访问顺序排序的情况下，每次访问一个键值对，都会将该键值对移到链表的尾部，以保证最近访问的元素在最后面。如果需要删除最早加入的元素，可以通过重写 removeEldestEntry() 方法来实现。</font>

<font style="color:rgb(44, 62, 80);">总之，LinkedHashMap 通过维护一个双向链表来保持键值对的顺序，可以按照插入顺序或访问顺序来遍历键值对。如果你需要按照顺序来遍历键值对，那么 LinkedHashMap 就是你的不二选择了！</font>

<font style="color:rgb(44, 62, 80);"></font>

## <font style="color:rgb(44, 62, 80);">TreeMap 详解</font>

<font style="color:rgb(44, 62, 80);">之前</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">LinkedHashMap</font>](https://javabetter.cn/collection/linkedhashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">那篇文章里提到过了，HashMap 是无序的，所以有了 LinkedHashMap，加上了双向链表后，就可以保持元素的插入顺序和访问顺序，那 TreeMap 呢？</font>

<font style="color:rgb(44, 62, 80);">TreeMap 由红黑树实现，可以保持元素的自然顺序，或者实现了 Comparator 接口的自定义顺序。</font>

<font style="color:rgb(44, 62, 80);">可能有些同学不了解红黑树，我这里来普及一下：</font>

<font style="color:rgb(102, 102, 102);">红黑树（英语：Red–black tree）是一种自平衡的二叉查找树（Binary Search Tree），结构复杂，但却有着良好的性能，完成查找、插入和删除的</font>[<font style="color:rgb(102, 102, 102);">时间复杂度</font>](https://javabetter.cn/collection/time-complexity.html)<font style="color:rgb(102, 102, 102);">均为 log(n)。</font>

<font style="color:rgb(44, 62, 80);">二叉查找树是一种常见的树形结构，它的每个节点都包含一个键值对。每个节点的左子树节点的键值小于该节点的键值，右子树节点的键值大于该节点的键值，这个特性使得二叉查找树非常适合进行数据的查找和排序操作。</font>

<font style="color:rgb(44, 62, 80);">下面是一个简单的手绘图，展示了一个二叉查找树的结构：</font>

```plain
        8
      /   \
     3     10
    / \      \
   1   6     14
      / \    /
     4   7  13
```

<font style="color:rgb(44, 62, 80);">在上面这个二叉查找树中，根节点是 8，左子树节点包括 3、1、6、4 和 7，右子树节点包括 10、14 和 13。</font>

+ <font style="color:rgb(44, 62, 80);">3<8<10</font>
+ <font style="color:rgb(44, 62, 80);">1<3<6</font>
+ <font style="color:rgb(44, 62, 80);">4<6<7</font>
+ <font style="color:rgb(44, 62, 80);">10<14</font>
+ <font style="color:rgb(44, 62, 80);">13<14</font>

<font style="color:rgb(44, 62, 80);">这是一颗典型的二叉查找树：</font>

+ <font style="color:rgb(44, 62, 80);">1）左子树上所有节点的值均小于或等于它的根结点的值。</font>
+ <font style="color:rgb(44, 62, 80);">2）右子树上所有节点的值均大于或等于它的根结点的值。</font>
+ <font style="color:rgb(44, 62, 80);">3）左、右子树也分别为二叉查找树。</font>

<font style="color:rgb(44, 62, 80);">二叉查找树用来查找非常方面，从根节点开始遍历，如果当前节点的键值等于要查找的键值，则查找成功；如果要查找的键值小于当前节点的键值，则继续遍历左子树；如果要查找的键值大于当前节点的键值，则继续遍历右子树。如果遍历到叶子节点仍然没有找到，则查找失败。</font>

<font style="color:rgb(44, 62, 80);">插入操作也非常简单，从根节点开始遍历，如果要插入的键值小于当前节点的键值，则将其插入到左子树中；如果要插入的键值大于当前节点的键值，则将其插入到右子树中。如果要插入的键值已经存在于树中，则更新该节点的值。</font>

<font style="color:rgb(44, 62, 80);">删除操作稍微复杂一些，需要考虑多种情况，包括要删除的节点是叶子节点、要删除的节点只有一个子节点、要删除的节点有两个子节点等等。</font>

<font style="color:rgb(44, 62, 80);">总之，二叉查找树是一种非常常用的数据结构，它可以帮助我们实现数据的查找、排序和删除等操作。</font>

<font style="color:rgb(44, 62, 80);">理解二叉查找树了吧？</font>

<font style="color:rgb(44, 62, 80);">不过，二叉查找树有一个明显的不足，就是容易变成瘸子，就是一侧多，一侧少，比如说这样：</font>

```plain
        6
      /   \
     4     8
    /     / \
   3     7   9
  /
 1
```

<font style="color:rgb(44, 62, 80);">在上面这个不平衡的二叉查找树中，左子树比右子树高。根节点是 6，左子树节点包括 4、3 和 1，右子树节点包括 8、7 和 9。</font>

<font style="color:rgb(44, 62, 80);">由于左子树比右子树高，这个不平衡的二叉查找树可能会导致查找、插入和删除操作的效率下降。</font>

<font style="color:rgb(44, 62, 80);">来一个更极端的情况。</font>

```plain
    1
     \
      2
       \
        3
         \
          4
           \
            5
             \
              6
```

<font style="color:rgb(44, 62, 80);">在上面这个极度不平衡的二叉查找树中，所有节点都只有一个右子节点，根节点是 1，右子树节点包括 2、3、4、5 和 6。</font>

<font style="color:rgb(44, 62, 80);">这种极度不平衡的二叉查找树会导致查找、插入和删除操作的效率急剧下降，因为每次操作都只能在右子树中进行，而左子树几乎没有被利用到。</font>

<font style="color:rgb(44, 62, 80);">查找的效率就要从 log(n) 变成 o(n) 了（戳</font>[<font style="color:rgb(44, 62, 80);">这里</font>](https://javabetter.cn/collection/time-complexity.html)<font style="color:rgb(44, 62, 80);">了解时间复杂度），对吧？</font>

<font style="color:rgb(44, 62, 80);">必须要平衡一下，对吧？于是就有了平衡二叉树，左右两个子树的高度差的绝对值不超过 1，就像下图这样：</font>

```plain
        8
      /   \
     4     12
    / \    / \
   2   6  10  14
      / \    / \
     5   7  13  15
```

<font style="color:rgb(44, 62, 80);">根节点是 8，左子树节点包括 4、2、6、5 和 7，右子树节点包括 12、10、14、13 和 15。左子树和右子树的高度差不超过1，因此它是一个平衡二叉查找树。</font>

<font style="color:rgb(44, 62, 80);">平衡二叉树就像是一棵树形秤，它的左右两边的重量要尽可能的平衡。当我们往平衡二叉树中插入一个节点时，平衡二叉树会自动调整节点的位置，以保证树的左右两边的高度差不超过1。类似地，当我们删除一个节点时，平衡二叉树也会自动调整节点的位置，以保证树的左右两边的高度差不超过1。</font>

<font style="color:rgb(44, 62, 80);">常见的平衡二叉树包括AVL树、红黑树等等，它们都是通过旋转操作来调整树的平衡，使得左子树和右子树的高度尽可能接近。</font>

<font style="color:rgb(44, 62, 80);">AVL树的示意图：</font>

```plain
8
         /   \
        4     12
       / \   /  \
      2   6 10  14
         / \
        5   7
```

<font style="color:rgb(44, 62, 80);">AVL树是一种高度平衡的二叉查找树，它要求左子树和右子树的高度差不超过1。由于AVL树的平衡度比较高，因此在进行插入和删除操作时需要进行更多的旋转操作来保持平衡，但是在查找操作时效率较高。AVL树适用于读操作比较多的场景。</font>

<font style="color:rgb(44, 62, 80);">例如，对于一个需要频繁进行查找操作的场景，如字典树、哈希表等数据结构，可以使用AVL树来进行优化。另外，AVL树也适用于需要保证数据有序性的场景，如数据库中的索引。</font>

<font style="color:rgb(44, 62, 80);">AVL树最初由两位苏联的计算机科学家，Adelson-Velskii和Landis，于1962年提出。因此，AVL树就以他们两人名字的首字母缩写命名了。</font>

<font style="color:rgb(44, 62, 80);">AVL树的发明对计算机科学的发展有着重要的影响，不仅为后来的平衡二叉树提供了基础，而且为其他领域的数据结构和算法提供了启示。</font>

<font style="color:rgb(44, 62, 80);">红黑树的示意图（R 即 Red「红」、B 即 Black「黑」）：</font>

```plain
8B
         /   \
        4R    12R
       / \   /  \
      2B 6B 10B 14B
         / \
        5R 7R
```

<font style="color:rgb(44, 62, 80);">红黑树，顾名思义，就是节点是红色或者黑色的平衡二叉树，它通过颜色的约束来维持二叉树的平衡，它要求任意一条路径上的黑色节点数目相同，同时还需要满足一些其他特定的条件，如红色节点的父节点必须为黑色节点等。</font>

+ <font style="color:rgb(44, 62, 80);">1）每个节点都只能是红色或者黑色</font>
+ <font style="color:rgb(44, 62, 80);">2）根节点是黑色</font>
+ <font style="color:rgb(44, 62, 80);">3）每个叶节点（NIL 节点，空节点）是黑色的。</font>
+ <font style="color:rgb(44, 62, 80);">4）如果一个节点是红色的，则它两个子节点都是黑色的。也就是说在一条路径上不能出现相邻的两个红色节点。</font>
+ <font style="color:rgb(44, 62, 80);">5）从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点。</font>

<font style="color:rgb(44, 62, 80);">由于红黑树的平衡度比AVL树稍低，因此在进行插入和删除操作时需要进行的旋转操作较少，但是在查找操作时效率仍然较高。红黑树适用于读写操作比较均衡的场景。</font>

<font style="color:rgb(44, 62, 80);">那，关于红黑树，同学们就先了解到这，脑子里有个大概的印象，知道 TreeMap 是个什么玩意。</font>

### <font style="color:rgb(44, 62, 80);">自然顺序</font>

<font style="color:rgb(44, 62, 80);">默认情况下，TreeMap 是根据 key 的自然顺序排列的。比如说整数，就是升序，1、2、3、4、5。</font>

```plain
TreeMap<Integer,String> mapInt = new TreeMap<>();
mapInt.put(3, "沉默王二");
mapInt.put(2, "沉默王二");
mapInt.put(1, "沉默王二");
mapInt.put(5, "沉默王二");
mapInt.put(4, "沉默王二");

System.out.println(mapInt);
```

<font style="color:rgb(44, 62, 80);">输出结果如下所示：</font>

```plain
{1=沉默王二, 2=沉默王二, 3=沉默王二, 4=沉默王二, 5=沉默王二}
```

<font style="color:rgb(44, 62, 80);">TreeMap 是怎么做到的呢？想一探究竟，就得上源码了，来看 TreeMap 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">put()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法：</font>

```plain
public V put(K key, V value) {
    Entry<K,V> t = root; // 将根节点赋值给变量t
    if (t == null) { // 如果根节点为null，说明TreeMap为空
        compare(key, key); // type (and possibly null) check，检查key的类型是否合法
        root = new Entry<>(key, value, null); // 创建一个新节点作为根节点
        size = 1; // size设置为1
        return null; // 返回null，表示插入成功
    }
    int cmp;
    Entry<K,V> parent;
    // split comparator and comparable paths，根据使用的比较方法进行查找
    Comparator<? super K> cpr = comparator; // 获取比较器
    if (cpr != null) { // 如果使用了Comparator
        do {
            parent = t; // 将当前节点赋值给parent
            cmp = cpr.compare(key, t.key); // 使用Comparator比较key和t的键的大小
            if (cmp < 0) // 如果key小于t的键
                t = t.left; // 在t的左子树中查找
            else if (cmp > 0) // 如果key大于t的键
                t = t.right; // 在t的右子树中查找
            else // 如果key等于t的键
                return t.setValue(value); // 直接更新t的值
        } while (t != null);
    }
    else { // 如果没有使用Comparator
        if (key == null) // 如果key为null
            throw new NullPointerException(); // 抛出NullPointerException异常
            Comparable<? super K> k = (Comparable<? super K>) key; // 将key强制转换为Comparable类型
        do {
            parent = t; // 将当前节点赋值给parent
            cmp = k.compareTo(t.key); // 使用Comparable比较key和t的键的大小
            if (cmp < 0) // 如果key小于t的键
                t = t.left; // 在t的左子树中查找
            else if (cmp > 0) // 如果key大于t的键
                t = t.right; // 在t的右子树中查找
            else // 如果key等于t的键
                return t.setValue(value); // 直接更新t的值
        } while (t != null);
    }
    // 如果没有找到相同的键，需要创建一个新节点插入到TreeMap中
    Entry<K,V> e = new Entry<>(key, value, parent); // 创建一个新节点
    if (cmp < 0) // 如果key小于parent的键
        parent.left = e; // 将e作为parent的左子节点
    else
        parent.right = e; // 将e作为parent的右子节点
    fixAfterInsertion(e); // 插入节点后需要进行平衡操作
    size++; // size加1
    return null; // 返回null，表示插入成功
}
```

+ <font style="color:rgb(44, 62, 80);">首先定义一个Entry类型的变量t，用于表示当前的根节点；</font>
+ <font style="color:rgb(44, 62, 80);">如果t为null，说明TreeMap为空，直接创建一个新的节点作为根节点，并将size设置为1；</font>
+ <font style="color:rgb(44, 62, 80);">如果t不为null，说明需要在TreeMap中查找键所对应的节点。因为TreeMap中的元素是有序的，所以可以使用二分查找的方式来查找节点；</font>
+ <font style="color:rgb(44, 62, 80);">如果TreeMap中使用了Comparator来进行排序，则使用Comparator进行比较，否则使用Comparable进行比较。如果查找到了相同的键，则直接更新键所对应的值；</font>
+ <font style="color:rgb(44, 62, 80);">如果没有查找到相同的键，则创建一个新的节点，并将其插入到TreeMap中。然后使用fixAfterInsertion()方法来修正插入节点后的平衡状态；</font>
+ <font style="color:rgb(44, 62, 80);">最后将TreeMap的size加1，然后返回null。如果更新了键所对应的值，则返回原先的值。</font>

<font style="color:rgb(44, 62, 80);">注意</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">cmp = k.compareTo(t.key)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这行代码，就是用来进行 key 比较的，由于此时 key 是 String，所以就会调用 String 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">compareTo()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法进行比较。</font>

```plain
public int compareTo(String anotherString) {
    // 获取当前字符串和另一个字符串的长度
    int len1 = value.length;
    int len2 = anotherString.value.length;
    // 取两个字符串长度的较短者作为比较的上限
    int lim = Math.min(len1, len2);
    // 获取当前字符串和另一个字符串的字符数组
    char v1[] = value;
    char v2[] = anotherString.value;

    int k = 0;
    // 对两个字符串的每个字符进行比较
    while (k < lim) {
        char c1 = v1[k];
        char c2 = v2[k];
        // 如果两个字符不相等，返回它们的差值
        if (c1 != c2) {
            return c1 - c2;
        }
        k++;
    }
    // 如果两个字符串前面的字符都相等，返回它们长度的差值
    return len1 - len2;
}
```

<font style="color:rgb(44, 62, 80);">来看下面的示例。</font>

```plain
TreeMap<String,String> mapString = new TreeMap<>();
mapString.put("c", "沉默王二");
mapString.put("b", "沉默王二");
mapString.put("a", "沉默王二");
mapString.put("e", "沉默王二");
mapString.put("d", "沉默王二");

System.out.println(mapString);
```

<font style="color:rgb(44, 62, 80);">输出结果如下所示：</font>

```plain
{a=沉默王二, b=沉默王二, c=沉默王二, d=沉默王二, e=沉默王二}
```

<font style="color:rgb(44, 62, 80);">从结果可以看得出，是按照字母的升序进行排序的。</font>

### <font style="color:rgb(44, 62, 80);">自定义排序</font>

<font style="color:rgb(44, 62, 80);">如果自然顺序不满足，那就可以在声明 TreeMap 对象的时候指定排序规则。</font>

```plain
TreeMap<Integer,String> mapIntReverse = new TreeMap<>(Comparator.reverseOrder());
mapIntReverse.put(3, "沉默王二");
mapIntReverse.put(2, "沉默王二");
mapIntReverse.put(1, "沉默王二");
mapIntReverse.put(5, "沉默王二");
mapIntReverse.put(4, "沉默王二");

System.out.println(mapIntReverse);
```

<font style="color:rgb(44, 62, 80);">TreeMap 提供了可以指定排序规则的构造方法：</font>

```plain
public TreeMap(Comparator<? super K> comparator) {
    this.comparator = comparator;
}
```

`<font style="color:rgb(44, 62, 80);">Comparator.reverseOrder()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">返回的是 Collections.ReverseComparator 对象，就是用来反转顺序的，非常方便。</font>

```plain
private static class ReverseComparator
        implements Comparator<Comparable<Object>>, Serializable {
    // 单例模式，用于表示逆序比较器
    static final ReverseComparator REVERSE_ORDER
            = new ReverseComparator();

    // 实现比较方法，对两个实现了Comparable接口的对象进行逆序比较
    public int compare(Comparable<Object> c1, Comparable<Object> c2) {
        return c2.compareTo(c1); // 调用c2的compareTo()方法，以c1为参数，实现逆序比较
    }

    // 反序列化时，返回Collections.reverseOrder()，保证单例模式
    private Object readResolve() {
        return Collections.reverseOrder();
    }

    // 返回正序比较器
    @Override
    public Comparator<Comparable<Object>> reversed() {
        return Comparator.naturalOrder();
    }
}
```

<font style="color:rgb(44, 62, 80);">所以，输出结果如下所示：</font>

```plain
{5=沉默王二, 4=沉默王二, 3=沉默王二, 2=沉默王二, 1=沉默王二}
```

<font style="color:rgb(44, 62, 80);">HashMap 是无序的，插入的顺序随着元素的增加会不停地变动。但 TreeMap 能够至始至终按照指定的顺序排列，这对于需要自定义排序的场景，实在是太有用了！</font>

### <font style="color:rgb(44, 62, 80);">排序的好处</font>

<font style="color:rgb(44, 62, 80);">既然 TreeMap 的元素是经过排序的，那找出最大的那个，最小的那个，或者找出所有大于或者小于某个值的键来说，就方便多了。</font>

```plain
Integer highestKey = mapInt.lastKey();
Integer lowestKey = mapInt.firstKey();
Set<Integer> keysLessThan3 = mapInt.headMap(3).keySet();
Set<Integer> keysGreaterThanEqTo3 = mapInt.tailMap(3).keySet();

System.out.println(highestKey);
System.out.println(lowestKey);

System.out.println(keysLessThan3);
System.out.println(keysGreaterThanEqTo3);
```

<font style="color:rgb(44, 62, 80);">TreeMap 考虑得很周全，恰好就提供了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">lastKey()</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">firstKey()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这样获取最后一个 key 和第一个 key 的方法。</font>

`<font style="color:rgb(44, 62, 80);">headMap()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">获取的是到指定 key 之前的 key；</font>`<font style="color:rgb(44, 62, 80);">tailMap()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">获取的是指定 key 之后的 key（包括指定 key）。</font>

<font style="color:rgb(44, 62, 80);">来看一下输出结果：</font>

```plain
5
1
[1, 2]
[3, 4, 5]
```

<font style="color:rgb(44, 62, 80);">再来看一下例子：</font>

```plain
TreeMap<Integer, String> treeMap = new TreeMap<>();
treeMap.put(1, "value1");
treeMap.put(2, "value2");
treeMap.put(3, "value3");
treeMap.put(4, "value4");
treeMap.put(5, "value5");

// headMap示例，获取小于3的键值对
Map<Integer, String> headMap = treeMap.headMap(3);
System.out.println(headMap); // 输出 {1=value1, 2=value2}

// tailMap示例，获取大于等于4的键值对
Map<Integer, String> tailMap = treeMap.tailMap(4);
System.out.println(tailMap); // 输出 {4=value4, 5=value5}

// subMap示例，获取大于等于2且小于4的键值对
Map<Integer, String> subMap = treeMap.subMap(2, 4);
System.out.println(subMap); // 输出 {2=value2, 3=value3}
```

<font style="color:rgb(44, 62, 80);">headMap、tailMap、subMap方法分别获取了小于3、大于等于4、大于等于2且小于4的键值对。</font>

### <font style="color:rgb(44, 62, 80);">如何选择 Map</font>

<font style="color:rgb(44, 62, 80);">在学习 TreeMap 之前，我们已经学习了</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">LinkedHashMap</font>](https://javabetter.cn/collection/linkedhashmap.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">，那如何从它们三个中间选择呢？</font>

<font style="color:rgb(44, 62, 80);">需要考虑以下因素：</font>

+ <font style="color:rgb(44, 62, 80);">是否需要按照键的自然顺序或者自定义顺序进行排序。如果需要按照键排序，则可以使用 TreeMap；如果不需要排序，则可以使用 HashMap 或 LinkedHashMap。</font>
+ <font style="color:rgb(44, 62, 80);">是否需要保持插入顺序。如果需要保持插入顺序，则可以使用 LinkedHashMap；如果不需要保持插入顺序，则可以使用 TreeMap 或 HashMap。</font>
+ <font style="color:rgb(44, 62, 80);">是否需要高效的查找。如果需要高效的查找，则可以使用 LinkedHashMap 或 HashMap，因为它们的查找操作的时间复杂度为 O(1)，而是 TreeMap 是 O(log n)。</font>

<font style="color:rgb(102, 102, 102);">LinkedHashMap 内部使用哈希表来存储键值对，并使用一个双向链表来维护插入顺序，但查找操作只需要在哈希表中进行，与链表无关，所以时间复杂度为 O(1)</font>

<font style="color:rgb(44, 62, 80);">来个表格吧，一目了然。</font>

| <font style="color:rgb(44, 62, 80);">特性</font>     | <font style="color:rgb(44, 62, 80);">TreeMap</font>        | <font style="color:rgb(44, 62, 80);">HashMap</font>        | <font style="color:rgb(44, 62, 80);">LinkedHashMap</font>    |
| ---------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| <font style="color:rgb(44, 62, 80);">排序</font>     | <font style="color:rgb(44, 62, 80);">支持</font>           | <font style="color:rgb(44, 62, 80);">不支持</font>         | <font style="color:rgb(44, 62, 80);">不支持</font>           |
| <font style="color:rgb(44, 62, 80);">插入顺序</font> | <font style="color:rgb(44, 62, 80);">不保证</font>         | <font style="color:rgb(44, 62, 80);">不保证</font>         | <font style="color:rgb(44, 62, 80);">保证</font>             |
| <font style="color:rgb(44, 62, 80);">查找效率</font> | <font style="color:rgb(44, 62, 80);">O(log n)</font>       | <font style="color:rgb(44, 62, 80);">O(1)</font>           | <font style="color:rgb(44, 62, 80);">O(1)</font>             |
| <font style="color:rgb(44, 62, 80);">空间占用</font> | <font style="color:rgb(44, 62, 80);">通常较大</font>       | <font style="color:rgb(44, 62, 80);">通常较小</font>       | <font style="color:rgb(44, 62, 80);">通常较大</font>         |
| <font style="color:rgb(44, 62, 80);">适用场景</font> | <font style="color:rgb(44, 62, 80);">需要排序的场景</font> | <font style="color:rgb(44, 62, 80);">无需排序的场景</font> | <font style="color:rgb(44, 62, 80);">需要保持插入顺序</font> |


<font style="color:rgb(44, 62, 80);">好了，下课，关于 TreeMap 我们就讲到这里吧，希望同学们都能对 TreeMap 有一个清晰的认识。我们下节课见~</font>

<font style="color:rgb(44, 62, 80);"></font>

## <font style="color:rgb(44, 62, 80);">双端队列 ArrayDeque</font>

<font style="color:rgb(44, 62, 80);">Java 里有一个叫做</font>_<font style="color:rgb(44, 62, 80);">Stack</font>_<font style="color:rgb(44, 62, 80);">的类，却没有叫做</font>_<font style="color:rgb(44, 62, 80);">Queue</font>_<font style="color:rgb(44, 62, 80);">的类（它只是个接口名字，和类还不一样）。</font>

```plain
public interface Queue<E> extends Collection<E> {}
```

<font style="color:rgb(44, 62, 80);">当需要使用栈时，Java 已不推荐使用</font>_<font style="color:rgb(44, 62, 80);">Stack</font>_<font style="color:rgb(44, 62, 80);">，而是推荐使用更高效的</font>_<font style="color:rgb(44, 62, 80);">ArrayDeque</font>_<font style="color:rgb(44, 62, 80);">（双端队列），原因我们第一次讲</font>[<font style="color:rgb(44, 62, 80);">集合框架</font>](https://javabetter.cn/collection/gailan.html)<font style="color:rgb(44, 62, 80);">的时候，其实已经聊过了，Stack 是一个“原始”类，它的核心方法上都加了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">synchronized</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键字以确保线程安全，当我们不需要线程安全（比如说单线程环境下）性能就会比较差。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668480227-bac445de-bf46-46cf-85a9-ff1b7363165f.png" />


<font style="color:rgb(44, 62, 80);">也就是说，当需要使用栈时候，请首选</font>_<font style="color:rgb(44, 62, 80);">ArrayDeque</font>_<font style="color:rgb(44, 62, 80);">。</font>

```plain
// 声明一个双端队列
ArrayDeque<String> stack = new ArrayDeque<>();

// 增加元素
stack.push("沉默");
stack.push("王二");
stack.push("陈清扬");

// 获取栈顶元素
String top = stack.peek();
System.out.println("栈顶元素为：" + top); // 陈清扬

// 弹出栈顶元素
String pop = stack.pop();
System.out.println("弹出的元素为：" + pop); // 陈清扬

// 修改栈顶元素
stack.pop();
stack.push("小明");
System.out.println("修改后的栈为：" + stack); // [小明, 沉默]

// 遍历队列查找元素
Iterator<String> iterator = stack.iterator();
int index = -1;
String target = "王二";
while (iterator.hasNext()) {
    String element = iterator.next();
    index++;
    if (element.equals(target)) {
        break;
    }
}

if (index == -1) {
    System.out.println("元素 " + target + " 不存在于队列中");
} else {
    System.out.println("元素 " + target + " 在队列中的位置为：" + index);
}
```

<font style="color:rgb(44, 62, 80);">在上面的示例中，我们先创建了一个 ArrayDeque 对象，然后使用 push 方法向栈中添加了三个元素。接着使用 peek 方法获取栈顶元素，使用 pop 方法弹出栈顶元素，使用 pop 和 push 方法修改栈顶元素，使用迭代器查找元素在栈中的位置。</font>

<font style="color:rgb(44, 62, 80);">ArrayDeque 又实现了 Deque 接口（Deque 又实现了 Queue 接口）：</font>

```plain
public class ArrayDeque<E> extends AbstractCollection<E>
                           implements Deque<E>, Cloneable, Serializable
{}
```

<font style="color:rgb(44, 62, 80);">因此，当我们需要使用队列的时候，也可以选择 ArrayDeque。</font>

```plain
ArrayDeque<String> queue = new ArrayDeque<>();

// 增加元素
queue.offer("沉默");
queue.offer("王二");
queue.offer("陈清扬");

// 获取队首元素
String front = queue.peek();
System.out.println("队首元素为：" + front); // 沉默

// 弹出队首元素
String poll = queue.poll();
System.out.println("弹出的元素为：" + poll); // 沉默

// 修改队列中的元素
queue.poll();
queue.offer("小明");
System.out.println("修改后的队列为：" + queue); // [陈清扬, 小明]

// 查找元素
Iterator<String> iterator = queue.iterator();
int index = 0;
while (iterator.hasNext()) {
    String element = iterator.next();
    if (element.equals("王二")) {
        System.out.println("元素在队列中的位置为：" + index); // 0
        break;
    }
    index++;
}
```

<font style="color:rgb(44, 62, 80);">在上面的示例中，我们先创建了一个 ArrayDeque 对象，然后使用 offer 方法向队列中添加了三个元素。接着使用 peek 方法获取队首元素，使用 poll 方法弹出队首元素，使用 poll 和 offer 方法修改队列中的元素，使用迭代器查找元素在队列中的位置。</font>

[<font style="color:rgb(44, 62, 80);">我们前面讲了</font>](https://javabetter.cn/collection/gailan.html)<font style="color:rgb(44, 62, 80);">，LinkedList不只是个 List，还是一个 Queue，它也实现了 Deque 接口。</font>

```plain
public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, java.io.Serializable
{}
```

<font style="color:rgb(44, 62, 80);">所以，当我们需要使用队列时，还可以选择</font>[<font style="color:rgb(44, 62, 80);">LinkedList</font>](https://javabetter.cn/collection/linkedlist.html)<font style="color:rgb(44, 62, 80);">。</font>

```plain
// 创建一个 LinkedList 对象
LinkedList<String> queue = new LinkedList<>();

// 添加元素
queue.offer("沉默");
queue.offer("王二");
queue.offer("陈清扬");
System.out.println(queue); // 输出 [沉默, 王二, 陈清扬]

// 删除元素
queue.poll();
System.out.println(queue); // 输出 [王二, 陈清扬]

// 修改元素：LinkedList 中的元素不支持直接修改，需要先删除再添加
String first = queue.poll();
queue.offer("王大二");
System.out.println(queue); // 输出 [陈清扬, 王大二]

// 查找元素：LinkedList 中的元素可以使用 get() 方法进行查找
System.out.println(queue.get(0)); // 输出 陈清扬
System.out.println(queue.contains("沉默")); // 输出 false

// 查找元素：使用迭代器的方式查找陈清扬
// 使用迭代器依次遍历元素并查找
Iterator<String> iterator = queue.iterator();
while (iterator.hasNext()) {
    String element = iterator.next();
    if (element.equals("陈清扬")) {
        System.out.println("找到了：" + element);
        break;
    }
}
```

<font style="color:rgb(44, 62, 80);">在使用 LinkedList 作为队列时，可以使用 offer() 方法将元素添加到队列的末尾，使用 poll() 方法从队列的头部删除元素，使用迭代器或者 poll() 方法依次遍历元素。</font>

### <font style="color:rgb(44, 62, 80);">栈和队列</font>

<font style="color:rgb(44, 62, 80);">要讲栈和队列，首先要讲</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">接口。</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">的含义是“double ended queue”，即双端队列，它既可以当作栈使用，也可以当作队列使用。下表列出了</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">与</font>_<font style="color:rgb(44, 62, 80);">Queue</font>_<font style="color:rgb(44, 62, 80);">相对应的接口：</font>

| <font style="color:rgb(44, 62, 80);">Queue Method</font> | <font style="color:rgb(44, 62, 80);">Equivalent Deque Method</font> | <font style="color:rgb(44, 62, 80);">说明</font>             |
| -------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <font style="color:rgb(44, 62, 80);">add(e)</font>       | <font style="color:rgb(44, 62, 80);">addLast(e)</font>       | <font style="color:rgb(44, 62, 80);">向队尾插入元素，失败则抛出异常</font> |
| <font style="color:rgb(44, 62, 80);">offer(e)</font>     | <font style="color:rgb(44, 62, 80);">offerLast(e)</font>     | <font style="color:rgb(44, 62, 80);">向队尾插入元素，失败则返回</font>`<font style="color:rgb(44, 62, 80);">false</font>` |
| <font style="color:rgb(44, 62, 80);">remove()</font>     | <font style="color:rgb(44, 62, 80);">removeFirst()</font>    | <font style="color:rgb(44, 62, 80);">获取并删除队首元素，失败则抛出异常</font> |
| <font style="color:rgb(44, 62, 80);">poll()</font>       | <font style="color:rgb(44, 62, 80);">pollFirst()</font>      | <font style="color:rgb(44, 62, 80);">获取并删除队首元素，失败则返回</font>`<font style="color:rgb(44, 62, 80);">null</font>` |
| <font style="color:rgb(44, 62, 80);">element()</font>    | <font style="color:rgb(44, 62, 80);">getFirst()</font>       | <font style="color:rgb(44, 62, 80);">获取但不删除队首元素，失败则抛出异常</font> |
| <font style="color:rgb(44, 62, 80);">peek()</font>       | <font style="color:rgb(44, 62, 80);">peekFirst()</font>      | <font style="color:rgb(44, 62, 80);">获取但不删除队首元素，失败则返回</font>`<font style="color:rgb(44, 62, 80);">null</font>` |


<font style="color:rgb(44, 62, 80);">下表列出了</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">与</font>_<font style="color:rgb(44, 62, 80);">Stack</font>_<font style="color:rgb(44, 62, 80);">对应的接口：</font>

| <font style="color:rgb(44, 62, 80);">Stack Method</font> | <font style="color:rgb(44, 62, 80);">Equivalent Deque Method</font> | <font style="color:rgb(44, 62, 80);">说明</font>             |
| -------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <font style="color:rgb(44, 62, 80);">push(e)</font>      | <font style="color:rgb(44, 62, 80);">addFirst(e)</font>      | <font style="color:rgb(44, 62, 80);">向栈顶插入元素，失败则抛出异常</font> |
| <font style="color:rgb(44, 62, 80);">无</font>           | <font style="color:rgb(44, 62, 80);">offerFirst(e)</font>    | <font style="color:rgb(44, 62, 80);">向栈顶插入元素，失败则返回</font>`<font style="color:rgb(44, 62, 80);">false</font>` |
| <font style="color:rgb(44, 62, 80);">pop()</font>        | <font style="color:rgb(44, 62, 80);">removeFirst()</font>    | <font style="color:rgb(44, 62, 80);">获取并删除栈顶元素，失败则抛出异常</font> |
| <font style="color:rgb(44, 62, 80);">无</font>           | <font style="color:rgb(44, 62, 80);">pollFirst()</font>      | <font style="color:rgb(44, 62, 80);">获取并删除栈顶元素，失败则返回</font>`<font style="color:rgb(44, 62, 80);">null</font>` |
| <font style="color:rgb(44, 62, 80);">peek()</font>       | <font style="color:rgb(44, 62, 80);">getFirst()</font>       | <font style="color:rgb(44, 62, 80);">获取但不删除栈顶元素，失败则抛出异常</font> |
| <font style="color:rgb(44, 62, 80);">无</font>           | <font style="color:rgb(44, 62, 80);">peekFirst()</font>      | <font style="color:rgb(44, 62, 80);">获取但不删除栈顶元素，失败则返回</font>`<font style="color:rgb(44, 62, 80);">null</font>` |


<font style="color:rgb(44, 62, 80);">上面两个表共定义了</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">的 12 个接口。</font>

<font style="color:rgb(44, 62, 80);">添加，删除，取值都有两套接口，它们功能相同，区别是对失败情况的处理不同。</font>

**<font style="color:rgb(44, 62, 80);">一套接口遇到失败就会抛出异常，另一套遇到失败会返回特殊值（</font>**`**<font style="color:rgb(44, 62, 80);">false</font>**`**<font style="color:rgb(44, 62, 80);">或</font>**`**<font style="color:rgb(44, 62, 80);">null</font>**`**<font style="color:rgb(44, 62, 80);">）</font>**<font style="color:rgb(44, 62, 80);">。除非某种实现对容量有限制，大多数情况下，添加操作是不会失败的。</font>

**<font style="color:rgb(44, 62, 80);">虽然</font>**_**<font style="color:rgb(44, 62, 80);">Deque</font>**_**<font style="color:rgb(44, 62, 80);">的接口有 12 个之多，但无非就是对容器的两端进行操作，或添加，或删除，或查看</font>**<font style="color:rgb(44, 62, 80);">。明白了这一点讲解起来就会非常简单。</font>

_<font style="color:rgb(44, 62, 80);">ArrayDeque</font>_<font style="color:rgb(44, 62, 80);">和</font>_<font style="color:rgb(44, 62, 80);">LinkedList</font>_<font style="color:rgb(44, 62, 80);">是</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">的两个通用实现，由于官方更推荐使用</font>_<font style="color:rgb(44, 62, 80);">ArrayDeque</font>_<font style="color:rgb(44, 62, 80);">用作栈和队列，加之上一篇已经讲解过</font>[<font style="color:rgb(44, 62, 80);">LinkedList</font>](https://javabetter.cn/collection/linkedlist.html)<font style="color:rgb(44, 62, 80);">，本文将着重讲解</font>_<font style="color:rgb(44, 62, 80);">ArrayDeque</font>_<font style="color:rgb(44, 62, 80);">的具体实现。</font>

<font style="color:rgb(44, 62, 80);">从名字可以看出</font>_<font style="color:rgb(44, 62, 80);">ArrayDeque</font>_<font style="color:rgb(44, 62, 80);">底层通过数组实现，为了满足可以同时在数组两端插入或删除元素的需求，该数组还必须是循环的，即</font>**<font style="color:rgb(44, 62, 80);">循环数组（circular array）</font>**<font style="color:rgb(44, 62, 80);">，也就是说数组的任何一点都可能被看作起点或者终点。</font>

_<font style="color:rgb(44, 62, 80);">ArrayDeque</font>_<font style="color:rgb(44, 62, 80);">是非线程安全的（not thread-safe），当多个线程同时使用的时候，需要手动同步；另外，该容器不允许放入</font>`<font style="color:rgb(44, 62, 80);">null</font>`<font style="color:rgb(44, 62, 80);">元素。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668480195-c11fe70f-2751-4043-88b5-d5a3714db12d.png" />


<font style="color:rgb(44, 62, 80);">上图中我们看到，</font>`**<font style="color:rgb(44, 62, 80);">head</font>**`**<font style="color:rgb(44, 62, 80);">指向首端第一个有效元素，</font>**`**<font style="color:rgb(44, 62, 80);">tail</font>**`**<font style="color:rgb(44, 62, 80);">指向尾端第一个可以插入元素的空位</font>**<font style="color:rgb(44, 62, 80);">。因为是循环数组，所以</font>`<font style="color:rgb(44, 62, 80);">head</font>`<font style="color:rgb(44, 62, 80);">不一定总等于 0，</font>`<font style="color:rgb(44, 62, 80);">tail</font>`<font style="color:rgb(44, 62, 80);">也不一定总是比</font>`<font style="color:rgb(44, 62, 80);">head</font>`<font style="color:rgb(44, 62, 80);">大。</font>

### <font style="color:rgb(44, 62, 80);">方法剖析</font>

#### <font style="color:rgb(44, 62, 80);">addFirst()</font>

`<font style="color:rgb(44, 62, 80);">addFirst(E e)</font>`<font style="color:rgb(44, 62, 80);">的作用是在</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">的首端插入元素，也就是在</font>`<font style="color:rgb(44, 62, 80);">head</font>`<font style="color:rgb(44, 62, 80);">的前面插入元素，在空间足够且下标没有越界的情况下，只需要将</font>`<font style="color:rgb(44, 62, 80);">elements[--head] = e</font>`<font style="color:rgb(44, 62, 80);">即可。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668479766-7d580989-f25c-4d2c-a1f3-ddbee3b1059c.png" />


<font style="color:rgb(44, 62, 80);">实际需要考虑：</font>

1. <font style="color:rgb(44, 62, 80);">空间是否够用，以及</font>
2. <font style="color:rgb(44, 62, 80);">下标是否越界的问题。</font>

<font style="color:rgb(44, 62, 80);">上图中，如果</font>`<font style="color:rgb(44, 62, 80);">head</font>`<font style="color:rgb(44, 62, 80);">为</font>`<font style="color:rgb(44, 62, 80);">0</font>`<font style="color:rgb(44, 62, 80);">之后接着调用</font>`<font style="color:rgb(44, 62, 80);">addFirst()</font>`<font style="color:rgb(44, 62, 80);">，虽然空余空间还够用，但</font>`<font style="color:rgb(44, 62, 80);">head</font>`<font style="color:rgb(44, 62, 80);">为</font>`<font style="color:rgb(44, 62, 80);">-1</font>`<font style="color:rgb(44, 62, 80);">，下标越界了。下列代码很好的解决了这两个问题。</font>

```plain
//addFirst(E e)
public void addFirst(E e) {
    if (e == null)//不允许放入null
        throw new NullPointerException();
    elements[head = (head - 1) & (elements.length - 1)] = e;//2.下标是否越界
    if (head == tail)//1.空间是否够用
        doubleCapacity();//扩容
}
```

<font style="color:rgb(44, 62, 80);">上述代码我们看到，</font>**<font style="color:rgb(44, 62, 80);">空间问题是在插入之后解决的</font>**<font style="color:rgb(44, 62, 80);">，因为</font>`<font style="color:rgb(44, 62, 80);">tail</font>`<font style="color:rgb(44, 62, 80);">总是指向下一个可插入的空位，也就意味着</font>`<font style="color:rgb(44, 62, 80);">elements</font>`<font style="color:rgb(44, 62, 80);">数组至少有一个空位，所以插入元素的时候不用考虑空间问题。</font>

<font style="color:rgb(44, 62, 80);">下标越界的处理解决起来非常简单，</font>`<font style="color:rgb(44, 62, 80);">head = (head - 1) & (elements.length - 1)</font>`<font style="color:rgb(44, 62, 80);">就可以了，</font>**<font style="color:rgb(44, 62, 80);">这段代码相当于取余，同时解决了</font>**`**<font style="color:rgb(44, 62, 80);">head</font>**`**<font style="color:rgb(44, 62, 80);">为负值的情况</font>**<font style="color:rgb(44, 62, 80);">。因为</font>`<font style="color:rgb(44, 62, 80);">elements.length</font>`<font style="color:rgb(44, 62, 80);">必需是</font>`<font style="color:rgb(44, 62, 80);">2</font>`<font style="color:rgb(44, 62, 80);">的指数倍，</font>`<font style="color:rgb(44, 62, 80);">elements - 1</font>`<font style="color:rgb(44, 62, 80);">就是二进制低位全</font>`<font style="color:rgb(44, 62, 80);">1</font>`<font style="color:rgb(44, 62, 80);">，跟</font>`<font style="color:rgb(44, 62, 80);">head - 1</font>`<font style="color:rgb(44, 62, 80);">相与之后就起到了取模的作用，如果</font>`<font style="color:rgb(44, 62, 80);">head - 1</font>`<font style="color:rgb(44, 62, 80);">为负数（其实只可能是-1），则相当于对其取相对于</font>`<font style="color:rgb(44, 62, 80);">elements.length</font>`<font style="color:rgb(44, 62, 80);">的补码。</font>

<font style="color:rgb(44, 62, 80);">下面再说说扩容函数</font>`<font style="color:rgb(44, 62, 80);">doubleCapacity()</font>`<font style="color:rgb(44, 62, 80);">，其逻辑是申请一个更大的数组（原数组的两倍），然后将原数组复制过去。过程如下图所示：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668480134-9e5b1d69-1af2-44af-89de-159f63a59457.png" />


<font style="color:rgb(44, 62, 80);">图中我们看到，复制分两次进行，第一次复制</font>`<font style="color:rgb(44, 62, 80);">head</font>`<font style="color:rgb(44, 62, 80);">右边的元素，第二次复制</font>`<font style="color:rgb(44, 62, 80);">head</font>`<font style="color:rgb(44, 62, 80);">左边的元素。</font>

```plain
//doubleCapacity()
private void doubleCapacity() {
    assert head == tail;
    int p = head;
    int n = elements.length;
    int r = n - p; // head右边元素的个数
    int newCapacity = n << 1;//原空间的2倍
    if (newCapacity < 0)
        throw new IllegalStateException("Sorry, deque too big");
    Object[] a = new Object[newCapacity];
    System.arraycopy(elements, p, a, 0, r);//复制右半部分，对应上图中绿色部分
    System.arraycopy(elements, 0, a, r, p);//复制左半部分，对应上图中灰色部分
    elements = (E[])a;
    head = 0;
    tail = n;
}
```

<font style="color:rgb(44, 62, 80);">该方法的实现中，首先检查 head 和 tail 是否相等，如果不相等则抛出异常。然后计算出 head 右边的元素个数 r，以及新的容量 newCapacity，如果 newCapacity 太大则抛出异常。</font>

<font style="color:rgb(44, 62, 80);">接下来创建一个新的 Object 数组 a，将原有 ArrayDeque 中 head 右边的元素复制到 a 的前面（即图中绿色部分），将 head 左边的元素复制到 a 的后面（即图中灰色部分）。最后将 elements 数组替换为 a，head 设置为 0，tail 设置为 n（即新容量的长度）。</font>

<font style="color:rgb(44, 62, 80);">需要注意的是，由于 elements 数组被替换为 a 数组，因此在方法调用结束后，原有的 elements 数组将不再被引用，会被垃圾回收器回收。</font>

#### <font style="color:rgb(44, 62, 80);">addLast()</font>

`<font style="color:rgb(44, 62, 80);">addLast(E e)</font>`<font style="color:rgb(44, 62, 80);">的作用是在</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">的尾端插入元素，也就是在</font>`<font style="color:rgb(44, 62, 80);">tail</font>`<font style="color:rgb(44, 62, 80);">的位置插入元素，由于</font>`<font style="color:rgb(44, 62, 80);">tail</font>`<font style="color:rgb(44, 62, 80);">总是指向下一个可以插入的空位，因此只需要</font>`<font style="color:rgb(44, 62, 80);">elements[tail] = e;</font>`<font style="color:rgb(44, 62, 80);">即可。插入完成后再检查空间，如果空间已经用光，则调用</font>`<font style="color:rgb(44, 62, 80);">doubleCapacity()</font>`<font style="color:rgb(44, 62, 80);">进行扩容。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668479754-96c7520a-17ab-430b-8a47-03d3c1adf4a7.png" />


```plain
public void addLast(E e) {
    if (e == null)//不允许放入null
        throw new NullPointerException();
    elements[tail] = e;//赋值
    if ( (tail = (tail + 1) & (elements.length - 1)) == head)//下标越界处理
        doubleCapacity();//扩容
}
```

<font style="color:rgb(44, 62, 80);">下标越界处理方式</font>`<font style="color:rgb(44, 62, 80);">addFirt()</font>`<font style="color:rgb(44, 62, 80);">中已经讲过，不再赘述。</font>

#### <font style="color:rgb(44, 62, 80);">pollFirst()</font>

`<font style="color:rgb(44, 62, 80);">pollFirst()</font>`<font style="color:rgb(44, 62, 80);">的作用是删除并返回</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">首端元素，也即是</font>`<font style="color:rgb(44, 62, 80);">head</font>`<font style="color:rgb(44, 62, 80);">位置处的元素。如果容器不空，只需要直接返回</font>`<font style="color:rgb(44, 62, 80);">elements[head]</font>`<font style="color:rgb(44, 62, 80);">即可，当然还需要处理下标的问题。由于</font>`<font style="color:rgb(44, 62, 80);">ArrayDeque</font>`<font style="color:rgb(44, 62, 80);">中不允许放入</font>`<font style="color:rgb(44, 62, 80);">null</font>`<font style="color:rgb(44, 62, 80);">，当</font>`<font style="color:rgb(44, 62, 80);">elements[head] == null</font>`<font style="color:rgb(44, 62, 80);">时，意味着容器为空。</font>

```plain
public E pollFirst() {
    E result = elements[head];
    if (result == null)//null值意味着deque为空
        return null;
    elements[h] = null;//let GC work
    head = (head + 1) & (elements.length - 1);//下标越界处理
    return result;
}
```

#### <font style="color:rgb(44, 62, 80);">pollLast()</font>

`<font style="color:rgb(44, 62, 80);">pollLast()</font>`<font style="color:rgb(44, 62, 80);">的作用是删除并返回</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">尾端元素，也即是</font>`<font style="color:rgb(44, 62, 80);">tail</font>`<font style="color:rgb(44, 62, 80);">位置前面的那个元素。</font>

```plain
public E pollLast() {
    int t = (tail - 1) & (elements.length - 1);//tail的上一个位置是最后一个元素
    E result = elements[t];
    if (result == null)//null值意味着deque为空
        return null;
    elements[t] = null;//let GC work
    tail = t;
    return result;
}
```

#### <font style="color:rgb(44, 62, 80);">peekFirst()</font>

`<font style="color:rgb(44, 62, 80);">peekFirst()</font>`<font style="color:rgb(44, 62, 80);">的作用是返回但不删除</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">首端元素，也即是</font>`<font style="color:rgb(44, 62, 80);">head</font>`<font style="color:rgb(44, 62, 80);">位置处的元素，直接返回</font>`<font style="color:rgb(44, 62, 80);">elements[head]</font>`<font style="color:rgb(44, 62, 80);">即可。</font>

```plain
public E peekFirst() {
    return elements[head]; // elements[head] is null if deque empty
}
```

#### <font style="color:rgb(44, 62, 80);">peekLast()</font>

`<font style="color:rgb(44, 62, 80);">peekLast()</font>`<font style="color:rgb(44, 62, 80);">的作用是返回但不删除</font>_<font style="color:rgb(44, 62, 80);">Deque</font>_<font style="color:rgb(44, 62, 80);">尾端元素，也即是</font>`<font style="color:rgb(44, 62, 80);">tail</font>`<font style="color:rgb(44, 62, 80);">位置前面的那个元素。</font>

```plain
public E peekLast() {
    return elements[(tail - 1) & (elements.length - 1)];
}
```

### [<font style="color:rgb(44, 62, 80);">小结</font>](https://javabetter.cn/collection/arraydeque.html#%E5%B0%8F%E7%BB%93)

<font style="color:rgb(44, 62, 80);">当需要实现先进先出(FIFO)或者先进后出(LIFO)的数据结构时，可以考虑使用 ArrayDeque。以下是一些使用 ArrayDeque 的场景：</font>

+ <font style="color:rgb(44, 62, 80);">管理任务队列：如果需要实现一个任务队列，可以使用 ArrayDeque 来存储任务元素。在队列头部添加新任务元素，从队列尾部取出任务进行处理，可以保证任务按照先进先出的顺序执行。</font>
+ <font style="color:rgb(44, 62, 80);">实现栈：ArrayDeque 可以作为栈的实现方式，支持 push、pop、peek 等操作，可以用于需要后进先出的场景。</font>
+ <font style="color:rgb(44, 62, 80);">实现缓存：在需要缓存一定数量的数据时，可以使用 ArrayDeque。当缓存的数据量超过容量时，可以从队列头部删除最老的数据，从队列尾部添加新的数据。</font>
+ <font style="color:rgb(44, 62, 80);">实现事件处理器：ArrayDeque 可以作为事件处理器的实现方式，支持从队列头部获取事件进行处理，从队列尾部添加新的事件。</font>

<font style="color:rgb(44, 62, 80);">简单总结一下吧。</font>

<font style="color:rgb(44, 62, 80);">ArrayDeque 是 Java 标准库中的一种双端队列实现，底层基于数组实现。与 LinkedList 相比，ArrayDeque 的性能更优，因为它使用连续的内存空间存储元素，可以更好地利用 CPU 缓存，在大多数情况下也更快。</font>

<font style="color:rgb(44, 62, 80);">为什么这么说呢？</font>

<font style="color:rgb(44, 62, 80);">因为ArrayDeque 的底层实现是数组，而 LinkedList 的底层实现是链表。数组是一段连续的内存空间，而链表是由多个节点组成的，每个节点存储数据和指向下一个节点的指针。因此，在使用 LinkedList 时，需要频繁进行内存分配和释放，而 ArrayDeque 在创建时就一次性分配了连续的内存空间，不需要频繁进行内存分配和释放，这样可以更好地利用 CPU 缓存，提高访问效率。</font>

<font style="color:rgb(44, 62, 80);">现代计算机CPU对于数据的局部性有很强的依赖，如果需要访问的数据在内存中是连续存储的，那么就可以利用CPU的缓存机制，提高访问效率。而当数据存储在不同的内存块里时，每次访问都需要从内存中读取，效率会受到影响。</font>

<font style="color:rgb(44, 62, 80);">当然了，使用 ArrayDeque 时，数组复制操作也是需要考虑的性能消耗之一。</font>

<font style="color:rgb(44, 62, 80);">当 ArrayDeque 的元素数量超过了初始容量时，会触发扩容操作。扩容操作会创建一个新的数组，并将原有元素复制到新数组中。扩容操作的时间复杂度为 O(n)。</font>

<font style="color:rgb(44, 62, 80);">不过，ArrayDeque 的扩容策略（当 ArrayDeque 中的元素数量达到数组容量时，就需要进行扩容操作，扩容时会将数组容量扩大为原来的两倍）可以在一定程度上减少数组复制的次数和时间消耗，同时保证 ArrayDeque 的性能和空间利用率。</font>

<font style="color:rgb(44, 62, 80);">ArrayDeque 不仅支持常见的队列操作，如添加元素、删除元素、获取队列头部元素、获取队列尾部元素等。同时，它还支持栈操作，如 push、pop、peek 等。这使得 ArrayDeque 成为一种非常灵活的数据结构，可以用于各种场景的数据存储和处理。</font>

<font style="color:rgb(44, 62, 80);"></font>

<font style="color:rgb(44, 62, 80);"></font>

## <font style="color:rgb(44, 62, 80);">优先队列 PriorityQueue</font>

<font style="color:rgb(44, 62, 80);">PriorityQueue 是 Java 中的一个基于优先级堆的优先队列实现，它能够在 O(log n) 的时间复杂度内实现元素的插入和删除操作，并且能够自动维护队列中元素的优先级顺序。</font>

<font style="color:rgb(44, 62, 80);">通俗来说，PriorityQueue 就是一个队列，但是它不是先进先出的，而是按照元素优先级进行排序的。当你往 PriorityQueue 中插入一个元素时，它会自动根据元素的优先级将其插入到合适的位置。当你从 PriorityQueue 中删除一个元素时，它会自动将优先级最高的元素出队。</font>

<font style="color:rgb(44, 62, 80);">下面</font><font style="color:rgb(44, 62, 80);">👇🏻</font><font style="color:rgb(44, 62, 80);">是一个简单的PriorityQueue示例：</font>

```plain
// 创建 PriorityQueue 对象
PriorityQueue<String> priorityQueue = new PriorityQueue<>();

// 添加元素到 PriorityQueue
priorityQueue.offer("沉默王二");
priorityQueue.offer("陈清扬");
priorityQueue.offer("小转铃");

// 打印 PriorityQueue 中的元素
System.out.println("PriorityQueue 中的元素：");
while (!priorityQueue.isEmpty()) {
    System.out.print(priorityQueue.poll() + " ");
}
```

<font style="color:rgb(44, 62, 80);">在上述代码中，我们首先创建了一个 PriorityQueue 对象，并向其中添加了三个元素。然后，我们使用 while 循环遍历 PriorityQueue 中的元素，并打印出来。来看输出结果：</font>

```plain
PriorityQueue 中的元素：
小转铃 沉默王二 陈清扬
```

<font style="color:rgb(44, 62, 80);">再来看一下示例。</font>

```plain
// 创建 PriorityQueue 对象，并指定优先级顺序
PriorityQueue<String> priorityQueue = new PriorityQueue<>(Comparator.reverseOrder());

// 添加元素到 PriorityQueue
priorityQueue.offer("沉默王二");
priorityQueue.offer("陈清扬");
priorityQueue.offer("小转铃");

// 打印 PriorityQueue 中的元素
System.out.println("PriorityQueue 中的元素：");
while (!priorityQueue.isEmpty()) {
    System.out.print(priorityQueue.poll() + " ");
}
```

<font style="color:rgb(44, 62, 80);">在上述代码中，我们使用了 Comparator.reverseOrder() 方法指定了 PriorityQueue 的优先级顺序为降序。也就是说，PriorityQueue 中的元素会按照从大到小的顺序排序。</font>

<font style="color:rgb(44, 62, 80);">其他部分的代码与之前的例子相同，我们再来看一下输出结果：</font>

```plain
PriorityQueue 中的元素：
陈清扬 沉默王二 小转铃
```

<font style="color:rgb(44, 62, 80);">对比一下两个例子的输出结果，不难发现，顺序正好相反。</font>

### [<font style="color:rgb(44, 62, 80);">PriorityQueue的作用</font>](https://javabetter.cn/collection/PriorityQueue.html#priorityqueue%E7%9A%84%E4%BD%9C%E7%94%A8)

<font style="color:rgb(44, 62, 80);">PriorityQueue 的主要作用是维护一组数据的排序，使得取出数据时可以按照一定的优先级顺序进行，当我们调用 poll() 方法时，它会从队列的顶部弹出最高优先级的元素。它在很多场景下都有广泛的应用，例如任务调度、事件处理等场景，以及一些算法中需要对数据进行排序的场景。</font>

<font style="color:rgb(44, 62, 80);">在实际应用中，PriorityQueue 也经常用于实现 Dijkstra 算法、Prim 算法、Huffman 编码等算法。这里简单说一下这几种算法的作用，理解不了也没关系哈。</font>

<font style="color:rgb(44, 62, 80);">Dijkstra算法是一种用于计算带权图中的最短路径的算法。该算法采用贪心的策略，在遍历图的过程中，每次选取当前到源点距离最短的一个顶点，并以它为中心进行扩展，更新其他顶点的距离值。经过多次扩展，可以得到源点到其它所有顶点的最短路径。</font>

<font style="color:rgb(44, 62, 80);">Prim算法是一种用于求解最小生成树的算法，可以在加权连通图中找到一棵生成树，使得这棵生成树的所有边的权值之和最小。该算法从任意一个顶点开始，逐渐扩展生成树的规模，每次选择一个距离已生成树最近的顶点加入到生成树中。</font>

<font style="color:rgb(44, 62, 80);">Huffman编码是一种基于霍夫曼树的压缩算法，用于将一个字符串转换为二进制编码以进行压缩。该算法的主要思想是通过建立霍夫曼树，将出现频率较高的字符用较短的编码表示，而出现频率较低的字符用较长的编码表示，从而实现对字符串的压缩。在解压缩时，根据编码逐步解析出原字符串。</font>

<font style="color:rgb(44, 62, 80);">由于 PriorityQueue 的底层是基于堆实现的，因此在数据量比较大时，使用 PriorityQueue 可以获得较好的时间复杂度。</font>

<font style="color:rgb(44, 62, 80);">这里牵涉到了大小关系，</font>**<font style="color:rgb(44, 62, 80);">元素大小的评判可以通过元素本身的自然顺序（</font>**_**<font style="color:rgb(44, 62, 80);">natural ordering</font>**_**<font style="color:rgb(44, 62, 80);">），也可以通过构造时传入的比较器</font>**<font style="color:rgb(44, 62, 80);">（</font>_<font style="color:rgb(44, 62, 80);">Comparator</font>_<font style="color:rgb(44, 62, 80);">，或者元素自身实现 Comparable 接口）来决定。</font>

<font style="color:rgb(44, 62, 80);">在 PriorityQueue 中，每个元素都有一个优先级，这个优先级决定了元素在队列中的位置。队列内部通过小顶堆（也可以是大顶堆）的方式来维护元素的优先级关系。具体来说，小顶堆是一个完全二叉树，任何一个非叶子节点的权值，都不大于其左右子节点的权值，这样保证了队列的顶部元素（堆顶）一定是优先级最高的元素。</font>

<font style="color:rgb(44, 62, 80);">完全二叉树（Complete Binary Tree）是一种二叉树，其中除了最后一层，其他层的节点数都是满的，最后一层的节点都靠左对齐。下面是一个完全二叉树的示意图：</font>

```plain
        1
      /   \
     2     3
    / \   /
   4   5 6
```

<font style="color:rgb(44, 62, 80);">堆是一种完全二叉树，堆的特点是根节点的值最小（小顶堆）或最大（大顶堆），并且任意非根节点i的值都不大于（或不小于）其父节点的值。</font>

<font style="color:rgb(44, 62, 80);">这是一颗包含整数 1, 2, 3, 4, 5, 6, 7 的小顶堆：</font>

```plain
      1
     / \
    2   3
   / \ / \
  4  5 6  7
```

<font style="color:rgb(44, 62, 80);">这是一颗大顶堆。</font>

```plain
            8
          /   \
         7     5
        / \   / \
       6   4 2   1
```

<font style="color:rgb(44, 62, 80);">因为完全二叉树的结构比较规则，所以可以使用数组来存储堆的元素，而不需要使用指针等额外的空间。</font>

<font style="color:rgb(44, 62, 80);">在堆中，每个节点的下标和其在数组中的下标是一一对应的，假设节点下标为i，则其父节点下标为i/2，其左子节点下标为2i，其右子节点下标为2i+1。</font>

<font style="color:rgb(44, 62, 80);">假设有一个数组arr=[10, 20, 15, 30, 40]，现在要将其转化为一个小顶堆。</font>

<font style="color:rgb(44, 62, 80);">首先，我们将数组按照完全二叉树的形式排列，如下图所示：</font>

```plain
10
     /  \
   20    15
  /  \
30   40
```

<font style="color:rgb(44, 62, 80);">从上往下、从左往右依次给每个节点编号，如下所示：</font>

```plain
1
     / \
    2   3
   / \
  4   5
```

<font style="color:rgb(44, 62, 80);">接下来，我们按照上述公式，依次确定每个节点在数组中的位置。例如，节点1的父节点下标为1/2=0，左子节点下标为2*1=2，右子节点下标为2*1+1=3，因此节点1在数组中的位置为0，节点2在数组中的位置为2，节点3在数组中的位置为3。</font>

<font style="color:rgb(44, 62, 80);">对应的数组为[10, 20, 15, 30, 40]，符合小顶堆的定义，即每个节点的值都小于或等于其子节点的值。</font>

<font style="color:rgb(44, 62, 80);">好，我们画幅图再来理解一下。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668513861-e74cb5f3-8a89-4ee5-bffa-22c9b35b41f7.png" />


<font style="color:rgb(44, 62, 80);">上图中我们给每个元素按照层序遍历的方式进行了编号，如果你足够细心，会发现父节点和子节点的编号是有联系的，更确切的说父子节点的编号之间有如下关系：</font>

```plain
leftNo = parentNo\*2+1
rightNo = parentNo\*2+2
parentNo = (nodeNo-1)/2
```

<font style="color:rgb(44, 62, 80);">通过上述三个公式，可以轻易计算出某个节点的父节点以及子节点的下标。这也就是为什么可以直接用数组来存储堆的原因。</font>

### [<font style="color:rgb(44, 62, 80);">方法剖析</font>](https://javabetter.cn/collection/PriorityQueue.html#%E6%96%B9%E6%B3%95%E5%89%96%E6%9E%90)

#### [<font style="color:rgb(44, 62, 80);">add()和 offer()</font>](https://javabetter.cn/collection/PriorityQueue.html#add-%E5%92%8C-offer)

`<font style="color:rgb(44, 62, 80);">add(E e)</font>`<font style="color:rgb(44, 62, 80);">和</font>`<font style="color:rgb(44, 62, 80);">offer(E e)</font>`<font style="color:rgb(44, 62, 80);">的语义相同，都是向优先队列中插入元素，只是</font>`<font style="color:rgb(44, 62, 80);">Queue</font>`<font style="color:rgb(44, 62, 80);">接口规定二者对插入失败时的处理不同，前者在插入失败时抛出异常，后则则会返回</font>`<font style="color:rgb(44, 62, 80);">false</font>`<font style="color:rgb(44, 62, 80);">。对于</font>_<font style="color:rgb(44, 62, 80);">PriorityQueue</font>_<font style="color:rgb(44, 62, 80);">这两个方法其实没什么差别。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668512395-92a0efd2-7c1d-468e-ab99-fa93a36f5eb5.png" />


<font style="color:rgb(44, 62, 80);">新加入的元素可能会破坏小顶堆的性质，因此需要进行必要的调整。</font>

```plain
//offer(E e)
public boolean offer(E e) {
    if (e == null)//不允许放入null元素
        throw new NullPointerException();
    modCount++;
    int i = size;
    if (i >= queue.length)
        grow(i + 1);//自动扩容
    size = i + 1;
    if (i == 0)//队列原来为空，这是插入的第一个元素
        queue[0] = e;
    else
        siftUp(i, e);//调整
    return true;
}
```

<font style="color:rgb(44, 62, 80);">上述代码中，扩容函数</font>`<font style="color:rgb(44, 62, 80);">grow()</font>`<font style="color:rgb(44, 62, 80);">类似于</font>`<font style="color:rgb(44, 62, 80);">ArrayList</font>`<font style="color:rgb(44, 62, 80);">里的</font>`<font style="color:rgb(44, 62, 80);">grow()</font>`<font style="color:rgb(44, 62, 80);">函数，就是再申请一个更大的数组，并将原数组的元素复制过去，这里不再赘述。需要注意的是</font>`<font style="color:rgb(44, 62, 80);">siftUp(int k, E x)</font>`<font style="color:rgb(44, 62, 80);">方法，该方法用于插入元素</font>`<font style="color:rgb(44, 62, 80);">x</font>`<font style="color:rgb(44, 62, 80);">并维持堆的特性。</font>

```plain
//siftUp()
private void siftUp(int k, E x) {
    while (k > 0) {
        int parent = (k - 1) >>> 1;//parentNo = (nodeNo-1)/2
        Object e = queue[parent];
        if (comparator.compare(x, (E) e) >= 0)//调用比较器的比较方法
            break;
        queue[k] = e;
        k = parent;
    }
    queue[k] = x;
}
```

<font style="color:rgb(44, 62, 80);">调整的过程为：</font>**<font style="color:rgb(44, 62, 80);">从</font>**`**<font style="color:rgb(44, 62, 80);">k</font>**`**<font style="color:rgb(44, 62, 80);">指定的位置开始，将</font>**`**<font style="color:rgb(44, 62, 80);">x</font>**`**<font style="color:rgb(44, 62, 80);">逐层与当前点的</font>**`**<font style="color:rgb(44, 62, 80);">parent</font>**`**<font style="color:rgb(44, 62, 80);">进行比较并交换，直到满足</font>**`**<font style="color:rgb(44, 62, 80);">x >= queue[parent]</font>**`**<font style="color:rgb(44, 62, 80);">为止</font>**<font style="color:rgb(44, 62, 80);">。注意这里的比较可以是元素的自然顺序，也可以是依靠比较器的顺序。</font>

#### [<font style="color:rgb(44, 62, 80);">element()和 peek()</font>](https://javabetter.cn/collection/PriorityQueue.html#element-%E5%92%8C-peek)

`<font style="color:rgb(44, 62, 80);">element()</font>`<font style="color:rgb(44, 62, 80);">和</font>`<font style="color:rgb(44, 62, 80);">peek()</font>`<font style="color:rgb(44, 62, 80);">的语义完全相同，都是获取但不删除队首元素，也就是队列中权值最小的那个元素，二者唯一的区别是当方法失败时前者抛出异常，后者返回</font>`<font style="color:rgb(44, 62, 80);">null</font>`<font style="color:rgb(44, 62, 80);">。根据小顶堆的性质，堆顶那个元素就是全局最小的那个；由于堆用数组表示，根据下标关系，</font>`<font style="color:rgb(44, 62, 80);">0</font>`<font style="color:rgb(44, 62, 80);">下标处的那个元素既是堆顶元素。所以</font>**<font style="color:rgb(44, 62, 80);">直接返回数组</font>**`**<font style="color:rgb(44, 62, 80);">0</font>**`**<font style="color:rgb(44, 62, 80);">下标处的那个元素即可</font>**<font style="color:rgb(44, 62, 80);">。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668512169-a2c1feb4-1012-4f54-a200-4397704ac7c0.png" />


<font style="color:rgb(44, 62, 80);">代码也就非常简洁：</font>

```plain
//peek()
public E peek() {
    if (size == 0)
        return null;
    return (E) queue[0];//0下标处的那个元素就是最小的那个
}
```

#### [<font style="color:rgb(44, 62, 80);">remove()和 poll()</font>](https://javabetter.cn/collection/PriorityQueue.html#remove-%E5%92%8C-poll)

`<font style="color:rgb(44, 62, 80);">remove()</font>`<font style="color:rgb(44, 62, 80);">和</font>`<font style="color:rgb(44, 62, 80);">poll()</font>`<font style="color:rgb(44, 62, 80);">方法的语义也完全相同，都是获取并删除队首元素，区别是当方法失败时前者抛出异常，后者返回</font>`<font style="color:rgb(44, 62, 80);">null</font>`<font style="color:rgb(44, 62, 80);">。由于删除操作会改变队列的结构，为维护小顶堆的性质，需要进行必要的调整。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668513799-571599eb-febb-4e7a-adee-8de7704a7c76.png" />


<font style="color:rgb(44, 62, 80);">PriorityQueue_poll.png</font>

<font style="color:rgb(44, 62, 80);">代码如下：</font>

```plain
public E poll() {
    if (size == 0)
        return null;
    int s = --size;
    modCount++;
    E result = (E) queue[0];//0下标处的那个元素就是最小的那个
    E x = (E) queue[s];
    queue[s] = null;
    if (s != 0)
        siftDown(0, x);//调整
    return result;
}
```

<font style="color:rgb(44, 62, 80);">上述代码首先记录</font>`<font style="color:rgb(44, 62, 80);">0</font>`<font style="color:rgb(44, 62, 80);">下标处的元素，并用最后一个元素替换</font>`<font style="color:rgb(44, 62, 80);">0</font>`<font style="color:rgb(44, 62, 80);">下标位置的元素，之后调用</font>`<font style="color:rgb(44, 62, 80);">siftDown()</font>`<font style="color:rgb(44, 62, 80);">方法对堆进行调整，最后返回原来</font>`<font style="color:rgb(44, 62, 80);">0</font>`<font style="color:rgb(44, 62, 80);">下标处的那个元素（也就是最小的那个元素）。重点是</font>`<font style="color:rgb(44, 62, 80);">siftDown(int k, E x)</font>`<font style="color:rgb(44, 62, 80);">方法，该方法的作用是</font>**<font style="color:rgb(44, 62, 80);">从</font>**`**<font style="color:rgb(44, 62, 80);">k</font>**`**<font style="color:rgb(44, 62, 80);">指定的位置开始，将</font>**`**<font style="color:rgb(44, 62, 80);">x</font>**`**<font style="color:rgb(44, 62, 80);">逐层向下与当前点的左右孩子中较小的那个交换，直到</font>**`**<font style="color:rgb(44, 62, 80);">x</font>**`**<font style="color:rgb(44, 62, 80);">小于或等于左右孩子中的任何一个为止</font>**<font style="color:rgb(44, 62, 80);">。</font>

```plain
//siftDown()
private void siftDown(int k, E x) {
    int half = size >>> 1;
    while (k < half) {
      //首先找到左右孩子中较小的那个，记录到c里，并用child记录其下标
        int child = (k << 1) + 1;//leftNo = parentNo*2+1
        Object c = queue[child];
        int right = child + 1;
        if (right < size &&
            comparator.compare((E) c, (E) queue[right]) > 0)
            c = queue[child = right];
        if (comparator.compare(x, (E) c) <= 0)
            break;
        queue[k] = c;//然后用c取代原来的值
        k = child;
    }
    queue[k] = x;
}
```

#### [<font style="color:rgb(44, 62, 80);">remove(Object o)</font>](https://javabetter.cn/collection/PriorityQueue.html#remove-object-o)

`<font style="color:rgb(44, 62, 80);">remove(Object o)</font>`<font style="color:rgb(44, 62, 80);">方法用于删除队列中跟</font>`<font style="color:rgb(44, 62, 80);">o</font>`<font style="color:rgb(44, 62, 80);">相等的某一个元素（如果有多个相等，只删除一个），该方法不是</font>_<font style="color:rgb(44, 62, 80);">Queue</font>_<font style="color:rgb(44, 62, 80);">接口内的方法，而是</font>_<font style="color:rgb(44, 62, 80);">Collection</font>_<font style="color:rgb(44, 62, 80);">接口的方法。由于删除操作会改变队列结构，所以要进行调整；又由于删除元素的位置可能是任意的，所以调整过程比其它方法稍加繁琐。</font>

<font style="color:rgb(44, 62, 80);">具体来说，</font>`<font style="color:rgb(44, 62, 80);">remove(Object o)</font>`<font style="color:rgb(44, 62, 80);">可以分为 2 种情况：</font>

1. <font style="color:rgb(44, 62, 80);">删除的是最后一个元素。直接删除即可，不需要调整。</font>
2. <font style="color:rgb(44, 62, 80);">删除的不是最后一个元素，从删除点开始以最后一个元素为参照调用一次</font>`<font style="color:rgb(44, 62, 80);">siftDown()</font>`<font style="color:rgb(44, 62, 80);">即可。此处不再赘述。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726668513553-7343d786-ac22-4d73-b30b-5832abd279d8.png" />


<font style="color:rgb(44, 62, 80);">具体代码如下：</font>

```plain
//remove(Object o)
public boolean remove(Object o) {
  //通过遍历数组的方式找到第一个满足o.equals(queue[i])元素的下标
    int i = indexOf(o);
    if (i == -1)
        return false;
    int s = --size;
    if (s == i) //情况1
        queue[i] = null;
    else {
        E moved = (E) queue[s];
        queue[s] = null;
        siftDown(i, moved);//情况2
        ......
    }
    return true;
}
```

### [<font style="color:rgb(44, 62, 80);">小结</font>](https://javabetter.cn/collection/PriorityQueue.html#%E5%B0%8F%E7%BB%93)

<font style="color:rgb(44, 62, 80);">PriorityQueue 是一个非常常用的数据结构，它是一种特殊的堆（Heap）实现，可以用来高效地维护一个有序的集合。</font>

+ <font style="color:rgb(44, 62, 80);">它的底层实现是一个数组，通过堆的性质来维护元素的顺序。</font>
+ <font style="color:rgb(44, 62, 80);">取出元素时按照优先级顺序（从小到大或者从大到小）进行取出。</font>
+ <font style="color:rgb(44, 62, 80);">如果需要指定排序，元素必须实现 Comparable 接口或者传入一个 Comparator 来进行比较。</font>

<font style="color:rgb(44, 62, 80);">可以通过 LeetCode 的第 23 题：</font>[<font style="color:rgb(44, 62, 80);">合并K个升序链表</font>](https://leetcode-cn.com/problems/merge-k-sorted-lists/)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来练习 PriorityQueue 的使用。</font>

<font style="color:rgb(44, 62, 80);">我把题解已经放到了技术派中，大家可以去作为参考。</font>

[023.合并 K 个升序链表，通过优先级队列和最小堆优雅解决](https://paicoding.com/column/7/23)

<font style="color:rgb(44, 62, 80);"></font>

## <font style="color:rgb(44, 62, 80);">ArrayList 和 LinkedList 区别</font>

### <font style="color:rgb(44, 62, 80);">ArrayList 是如何实现的？</font>

<font style="color:rgb(44, 62, 80);">ArrayList 实现了 List 接口，继承了 AbstractList 抽象类。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726671668219-03ce28e6-a654-4358-b371-714c2b3cc1e2.png" />


<font style="color:rgb(44, 62, 80);">底层是基于数组实现的，并且实现了动态扩容（当需要添加新元素时，如果 elementData 数组已满，则会自动扩容，新的容量将是原来的 1.5 倍），来看一下 ArrayList 的部分源码。</font>

```plain
public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable
{
    private static final int DEFAULT_CAPACITY = 10; // 默认容量为 10
    transient Object[] elementData; // 存储元素的数组，数组类型为 Object
    private int size; // 列表的大小，即列表中元素的个数
}
```

<font style="color:rgb(44, 62, 80);">ArrayList 还实现了 RandomAccess 接口，这是一个标记接口：</font>

```java
// RandomAccess是一个标记接口，官方解释是只要List实现这个接口，就能支持快速随机访问。
// 而什么是随机访问呢？接下来我们来举例说明
public interface RandomAccess {
}
```

<font style="color:rgb(44, 62, 80);">内部是空的，标记“实现了这个接口的类支持快速（通常是固定时间）随机访问”。快速随机访问是什么意思呢？就是说不需要遍历，就可以通过下标（索引）直接访问到内存地址。而 LinkedList 没有实现该接口，表示它不支持高效的随机访问，需要通过遍历来访问元素。</font>

```plain
/**
 * 返回列表中指定位置的元素。
 *
 * @param index 要返回的元素的索引
 * @return 列表中指定位置的元素
 * @throws IndexOutOfBoundsException 如果索引越界（index < 0 || index >= size()）
 */
public E get(int index) {
    Objects.checkIndex(index, size); // 检查索引是否越界
    return elementData(index); // 调用 elementData 方法获取元素
}

/**
 * 返回列表中指定位置的元素。
 * 注意：该方法并没有检查索引是否越界，调用该方法前需要先检查索引是否越界。
 *
 * @param index 要返回的元素的索引
 * @return 列表中指定位置的元素
 */
E elementData(int index) {
    return (E) elementData[index]; // 强制类型转换，将 Object 类型转换为 E 类型
}
```

<font style="color:rgb(44, 62, 80);">ArrayList 还实现了 Cloneable 接口，这表明 ArrayList 是支持</font>[<font style="color:rgb(44, 62, 80);">拷贝</font>](https://javabetter.cn/basic-extra-meal/deep-copy.html)<font style="color:rgb(44, 62, 80);">的。ArrayList 内部的确也重写了 Object 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">clone()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

```plain
/**
 * 返回该列表的浅表副本。
 * （元素本身不会被复制。）
 *
 * @return 该列表的副本
 */
public Object clone() {
    try {
        ArrayList<?> v = (ArrayList<?>) super.clone(); // 调用 Object 类的 clone 方法，得到一个浅表副本
        v.elementData = Arrays.copyOf(elementData, size); // 复制 elementData 数组，创建一个新数组作为副本
        v.modCount = 0; // 将 modCount 置为 0
        return v; // 返回副本
    } catch (CloneNotSupportedException e) {
        // this shouldn't happen, since we are Cloneable
        throw new InternalError(e);
    }
}
```

<font style="color:rgb(44, 62, 80);">ArrayList 还实现了</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">Serializable</font>](https://javabetter.cn/io/Serializbale.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口，同样是一个标记接口：</font>

```plain
public interface Serializable {
}
```

<font style="color:rgb(44, 62, 80);">内部也是空的，标记“实现了这个接口的类支持序列化”。序列化是什么意思呢？Java 的序列化是指，将对象转换成以字节序列的形式来表示，这些字节序中包含了对象的字段和方法。序列化后的对象可以被写到数据库、写到文件，也可用于网络传输。</font>

<font style="color:rgb(44, 62, 80);">眼睛雪亮的小伙伴可能会注意到，ArrayList 中的关键字段 elementData 使用了</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">transient 关键字</font>](https://javabetter.cn/io/transient.html)<font style="color:rgb(44, 62, 80);">修饰，这个关键字的作用是，让它修饰的字段不被序列化。</font>

<font style="color:rgb(44, 62, 80);">这不前后矛盾吗？一个类既然实现了 Serilizable 接口，肯定是想要被序列化的，对吧？那为什么保存关键数据的 elementData 又不想被序列化呢?</font>

<font style="color:rgb(44, 62, 80);">这还得从 “ArrayList 是基于数组实现的”开始说起。大家都知道，数组是定长的，就是说，数组一旦声明了，长度（容量）就是固定的，不能像某些东西一样伸缩自如。这就很麻烦，数组一旦装满了，就不能添加新的元素进来了。</font>

<font style="color:rgb(44, 62, 80);">ArrayList 不想像数组这样活着，它想能屈能伸，所以它实现了动态扩容。一旦在添加元素的时候，发现容量用满了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">s == elementData.length</font>`<font style="color:rgb(44, 62, 80);">，就按照原来数组的 1.5 倍（</font>`<font style="color:rgb(44, 62, 80);">oldCapacity >> 1</font>`<font style="color:rgb(44, 62, 80);">）进行扩容。扩容之后，再将原有的数组复制到新分配的内存地址上</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Arrays.copyOf(elementData, newCapacity)</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">这部分源码我们在之前讲</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">ArrayList</font>](https://javabetter.cn/collection/arraylist.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候就已经讲的很清楚了，这里就一笔带过。</font>

<font style="color:rgb(44, 62, 80);">动态扩容意味着什么？</font>

<font style="color:rgb(44, 62, 80);">意味着数组的实际大小可能永远无法被填满的，总有多余出来空置的内存空间。</font>

<font style="color:rgb(44, 62, 80);">比如说，默认的数组大小是 10，当添加第 11 个元素的时候，数组的长度扩容了 1.5 倍，也就是 15，意味着还有 4 个内存空间是闲置的，对吧？</font>

<font style="color:rgb(44, 62, 80);">序列化的时候，如果把整个数组都序列化的话，是不是就多序列化了 4 个内存空间。当存储的元素数量非常非常多的时候，闲置的空间就非常非常大，序列化耗费的时间就会非常非常多。</font>

<font style="color:rgb(44, 62, 80);">于是，ArrayList 做了一个愉快而又聪明的决定，内部提供了两个私有方法 writeObject 和 readObject 来完成序列化和反序列化。</font>

```plain
/**
 * 将此列表实例的状态序列写入指定的 ObjectOutputStream。
 * （即，保存这个列表实例到一个流中。）
 *
 * @param s 要写入的流
 * @throws java.io.IOException 如果写入流时发生异常
 */
private void writeObject(java.io.ObjectOutputStream s)
        throws java.io.IOException {
    s.defaultWriteObject(); // 写出对象的默认字段
    // Write out size as capacity for behavioral compatibility with clone()
    s.writeInt(size); // 写出 size
    // Write out all elements in the proper order.
    for (int i=0; i<size; i++) {
        s.writeObject(elementData[i]); // 依次写出 elementData 数组中的元素
    }
}
```

<font style="color:rgb(44, 62, 80);">从 writeObject 方法的源码中可以看得出，它使用了 ArrayList 的实际大小 size 而不是数组的长度（</font>`<font style="color:rgb(44, 62, 80);">elementData.length</font>`<font style="color:rgb(44, 62, 80);">）来作为元素的上限进行序列化。</font>

<font style="color:rgb(44, 62, 80);">此处应该有掌声啊！不是为我，为 Java 源码的作者们，他们真的是太厉害了，可以用两个词来形容他们——殚精竭虑、精益求精。</font>

<font style="color:rgb(44, 62, 80);"></font>

<font style="color:rgb(44, 62, 80);">这是readObject方法的源码：</font>

```plain
/**
 * 从指定的 ObjectInputStream 中读取此列表实例的状态序列。
 * （即，从流中恢复这个列表实例。）
 *
 * @param s 从中读取此列表实例的状态序列的流
 * @throws java.io.IOException 如果读取流时发生异常
 * @throws ClassNotFoundException 如果在读取流时找不到类
 */
private void readObject(java.io.ObjectInputStream s)
        throws java.io.IOException, ClassNotFoundException {
    elementData = EMPTY_ELEMENTDATA; // 初始化 elementData 数组为空数组

    // 读取默认字段
    s.defaultReadObject();

    // 读取容量，这个值被忽略，因为在 ArrayList 中，容量和长度是两个不同的概念
    s.readInt();

    if (size > 0) {
        // 分配一个新的 elementData 数组，大小为 size
        ensureCapacityInternal(size);

        Object[] a = elementData;
        // 依次从输入流中读取元素，并将其存储在数组中
        for (int i=0; i<size; i++) {
            a[i] = s.readObject(); // 读取对象并存储在 elementData 数组中
        }
    }
}
```

### <font style="color:rgb(44, 62, 80);">LinkedList 是如何实现的？</font>

<font style="color:rgb(44, 62, 80);">LinkedList 是一个继承自 AbstractSequentialList 的双向链表，因此它也可以被当作堆栈、队列或双端队列进行操作。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726671667982-09221819-3aae-47d7-b98b-5d79c12f7394.png" />


<font style="color:rgb(44, 62, 80);">来看一下部分源码：</font>

```plain
public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, java.io.Serializable
{
    transient int size = 0; // 非序列化字段，表示链表中的节点个数
    transient Node<E> first; // 非序列化字段，指向链表中的第一个节点
    transient Node<E> last; // 非序列化字段，指向链表中的最后一个节点

    // ...
}
```

<font style="color:rgb(44, 62, 80);">LinkedList 内部定义了一个 Node 节点，它包含 3 个部分：元素内容 item，前引用 prev 和后引用 next。这个在讲</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">LinkedList</font>](https://javabetter.cn/collection/linkedlist.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候也讲过了，这里略过。</font>

<font style="color:rgb(44, 62, 80);">LinkedList 还实现了 Cloneable 接口，这表明 LinkedList 是支持拷贝的。</font>

<font style="color:rgb(44, 62, 80);">LinkedList 还实现了 Serializable 接口，这表明 LinkedList 是支持序列化的。眼睛雪亮的小伙伴可能又注意到了，LinkedList 中的关键字段 size、first、last 都使用了 transient 关键字修饰，这不又矛盾了吗？到底是想序列化还是不想序列化？</font>

<font style="color:rgb(44, 62, 80);">答案是 LinkedList 想按照自己的方式序列化，来看它自己实现的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">writeObject()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法：</font>

```plain
private void writeObject(java.io.ObjectOutputStream s)
        throws java.io.IOException {
    // 写入默认的序列化标记
    s.defaultWriteObject();

    // 写入链表的节点个数
    s.writeInt(size);

    // 按正确的顺序写入所有元素
    for (LinkedList.Node<E> x = first; x != null; x = x.next)
        s.writeObject(x.item);
}
```

<font style="color:rgb(44, 62, 80);">发现没？LinkedList 在序列化的时候只保留了元素的内容 item，并没有保留元素的前后引用。这样就节省了不少内存空间，对吧？</font>

<font style="color:rgb(44, 62, 80);">那有些小伙伴可能就疑惑了，只保留元素内容，不保留前后引用，那反序列化的时候怎么办？</font>

```plain
private void readObject(java.io.ObjectInputStream s)
        throws java.io.IOException, ClassNotFoundException {
    // 读取默认的序列化标记
    s.defaultReadObject();

    // 读取链表的节点个数
    int size = s.readInt();

    // 按正确的顺序读取所有元素
    for (int i = 0; i < size; i++)
        linkLast((E)s.readObject()); // 读取元素并将其添加到链表末尾
}

void linkLast(E e) {
    final LinkedList.Node<E> l = last;
    final LinkedList.Node<E> newNode = new LinkedList.Node<>(l, e, null);
    last = newNode; // 将新节点作为链表尾节点
    if (l == null)
        first = newNode; // 如果链表为空，将新节点作为链表头节点
    else
        l.next = newNode; // 否则将新节点链接到链表尾部
    size++; // 增加节点个数
}
```

<font style="color:rgb(44, 62, 80);">注意 for 循环中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">linkLast()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，它可以把链表重新链接起来，这样就恢复了链表序列化之前的顺序。很妙，对吧？</font>

<font style="color:rgb(44, 62, 80);">和 ArrayList 相比，LinkedList 没有实现 RandomAccess 接口，这是因为 LinkedList 存储数据的内存地址是不连续的，所以不支持随机访问。</font>

### <font style="color:rgb(44, 62, 80);">新增元素时究竟谁快？</font>

<font style="color:rgb(44, 62, 80);">前面我们已经从多个维度了解了 ArrayList 和 LinkedList 的实现原理和各自的特点。那接下来，我们就来聊聊 ArrayList 和 LinkedList 在新增元素时究竟谁快？</font>

#### <font style="color:rgb(44, 62, 80);">ArrayList</font>

<font style="color:rgb(44, 62, 80);">ArrayList 新增元素有两种情况，一种是直接将元素添加到数组末尾，一种是将元素插入到指定位置。</font>

<font style="color:rgb(44, 62, 80);">添加到数组末尾的源码（这部分前面讲</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">ArrayList</font>](https://javabetter.cn/collection/arraylist.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候讲过了，这里再温故一下）：</font>

```plain
public boolean add(E e) {
    add(e, elementData, size);
    return true;
}

private void add(E e, Object[] elementData, int s) {
    if (s == elementData.length)
        elementData = grow(); // 扩容数组
    elementData[s] = e; // 将元素添加到数组末尾
    size = s + 1; // 增加元素个数
}
```

<font style="color:rgb(44, 62, 80);">很简单，先判断是否需要扩容，然后直接通过索引将元素添加到末尾。</font>

<font style="color:rgb(44, 62, 80);">插入到指定位置的源码：</font>

```plain
public void add(int index, E element) {
    rangeCheckForAdd(index); // 检查插入位置是否越界
    final int s; // 当前元素个数
    Object[] elementData; // 元素数组
    if ((s = size) == (elementData = this.elementData).length) // 如果数组已满，则扩容
        elementData = grow();
    System.arraycopy(elementData, index,
            elementData, index + 1,
            s - index); // 将插入位置后的元素向右移动一位
    elementData[index] = element; // 将新元素插入到指定位置
    size = s + 1; // 增加元素个数
}
```

<font style="color:rgb(44, 62, 80);">先检查插入的位置是否在合理的范围之内，然后判断是否需要扩容，再把该位置以后的元素复制到新添加元素的位置之后，最后通过索引将元素添加到指定的位置。</font>

#### <font style="color:rgb(44, 62, 80);">LinkedList</font>

<font style="color:rgb(44, 62, 80);">LinkedList 新增元素也有两种情况，一种是直接将元素添加到队尾，一种是将元素插入到指定位置。</font>

<font style="color:rgb(44, 62, 80);">添加到队尾的源码：</font>

```plain
public boolean add(E e) {
    linkLast(e); // 将元素添加到链表末尾
    return true;
}

void linkLast(E e) {
    final LinkedList.Node<E> l = last; // 获取链表的尾节点
    final LinkedList.Node<E> newNode = new LinkedList.Node<>(l, e, null); // 创建新节点
    last = newNode; // 将新节点作为链表的尾节点
    if (l == null)
        first = newNode; // 如果链表为空，则将新节点作为链表的头节点
    else
        l.next = newNode; // 否则将新节点链接到链表的尾部
    size++; // 增加节点个数
}
```

<font style="color:rgb(44, 62, 80);">先将队尾的节点 last 存放到临时变量 l 中，然后生成新的 Node 节点，并赋给 last，如果 l 为 null，说明是第一次添加，所以 first 为新的节点；否则将新的节点赋给之前 last 的 next。</font>

<font style="color:rgb(44, 62, 80);">插入到指定位置的源码：</font>

```plain
public void add(int index, E element) {
    checkPositionIndex(index); // 检查插入位置是否越界

    if (index == size)
        linkLast(element); // 如果插入位置为链表末尾，则将元素添加到链表末尾
    else
        linkBefore(element, node(index)); // 否则将元素插入到指定位置的前面的节点后面
}

LinkedList.Node<E> node(int index) {
    if (index < (size >> 1)) { // 如果插入位置在链表前半部分，则从头节点开始查找
        LinkedList.Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else { // 否则从尾节点开始查找
        LinkedList.Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}

void linkBefore(E e, LinkedList.Node<E> succ) {
    final LinkedList.Node<E> pred = succ.prev; // 获取插入位置的前驱节点
    final LinkedList.Node<E> newNode = new LinkedList.Node<>(pred, e, succ); // 创建新节点
    succ.prev = newNode; // 将新节点链接到后继节点
    if (pred == null)
        first = newNode; // 如果前驱节点为空，则将新节点作为头节点
    else
        pred.next = newNode; // 否则将新节点链接到前驱节点
    size++; // 增加节点个数
}
```

<font style="color:rgb(44, 62, 80);">先检查插入的位置是否在合理的范围之内，然后判断插入的位置是否是队尾，如果是，添加到队尾；否则执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">linkBefore()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

<font style="color:rgb(44, 62, 80);">在执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">linkBefore()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法之前，会调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">node()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法查找指定位置上的元素，这一步是需要遍历 LinkedList 的。如果插入的位置靠前前半段，就从队头开始往后找；否则从队尾往前找。也就是说，如果插入的位置越靠近 LinkedList 的中间位置，遍历所花费的时间就越多。</font>

<font style="color:rgb(44, 62, 80);">找到指定位置上的元素（参数succ）之后，就开始执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">linkBefore()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，先将 succ 的前一个节点（prev）存放到临时变量 pred 中，然后生成新的 Node 节点（newNode），并将 succ 的前一个节点变更为 newNode，如果 pred 为 null，说明插入的是队头，所以 first 为新节点；否则将 pred 的后一个节点变更为 newNode。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726671668657-31e33f21-e180-4d97-8347-a75cf82727ee.png" />


<font style="color:rgb(44, 62, 80);">经过源码分析以后，你是不是在想：“好像 ArrayList 在新增元素的时候效率并不一定比 LinkedList 低啊！”</font>

<font style="color:rgb(44, 62, 80);">当两者的起始长度是一样的情况下：</font>

+ <font style="color:rgb(44, 62, 80);">如果是从集合的头部新增元素，ArrayList 花费的时间应该比 LinkedList 多，因为需要对头部以后的元素进行复制。</font>

<font style="color:rgb(44, 62, 80);">我们来测试一下：</font>

```plain
public class ArrayListTest {
    public static void addFromHeaderTest(int num) {
        ArrayList<String> list = new ArrayList<String>(num);
        int i = 0;

        long timeStart = System.currentTimeMillis();

        while (i < num) {
            list.add(0, i + "沉默王二");
            i++;
        }
        long timeEnd = System.currentTimeMillis();

        System.out.println("ArrayList从集合头部位置新增元素花费的时间" + (timeEnd - timeStart));
    }
}

/**
 * @author 微信搜「沉默王二」，回复关键字 PDF
 */
public class LinkedListTest {
    public static void addFromHeaderTest(int num) {
        LinkedList<String> list = new LinkedList<String>();
        int i = 0;
        long timeStart = System.currentTimeMillis();
        while (i < num) {
            list.addFirst(i + "沉默王二");
            i++;
        }
        long timeEnd = System.currentTimeMillis();

        System.out.println("LinkedList从集合头部位置新增元素花费的时间" + (timeEnd - timeStart));
    }
}
```

<font style="color:rgb(44, 62, 80);">num 为 10000，代码实测后的时间如下所示：</font>

```plain
ArrayList从集合头部位置新增元素花费的时间595
LinkedList从集合头部位置新增元素花费的时间15
```

<font style="color:rgb(44, 62, 80);">此时，ArrayList 花费的时间比 LinkedList 要多很多。</font>

+ <font style="color:rgb(44, 62, 80);">如果是从集合的中间位置新增元素，ArrayList 花费的时间搞不好要比 LinkedList 少，因为 LinkedList 需要遍历。</font>

<font style="color:rgb(44, 62, 80);">来看测试代码。</font>

```plain
public class ArrayListTest {
    public static void addFromMidTest(int num) {
        ArrayList<String> list = new ArrayList<String>(num);
        int i = 0;

        long timeStart = System.currentTimeMillis();
        while (i < num) {
            int temp = list.size();
            list.add(temp / 2, i + "沉默王二");
            i++;
        }
        long timeEnd = System.currentTimeMillis();

        System.out.println("ArrayList从集合中间位置新增元素花费的时间" + (timeEnd - timeStart));
    }
}

public class LinkedListTest {
    public static void addFromMidTest(int num) {
        LinkedList<String> list = new LinkedList<String>();
        int i = 0;
        long timeStart = System.currentTimeMillis();
        while (i < num) {
            int temp = list.size();
            list.add(temp / 2, i + "沉默王二");
            i++;
        }
        long timeEnd = System.currentTimeMillis();

        System.out.println("LinkedList从集合中间位置新增元素花费的时间" + (timeEnd - timeStart));
    }
}
```

<font style="color:rgb(44, 62, 80);">num 为 10000，代码实测后的时间如下所示：</font>

```plain
ArrayList从集合中间位置新增元素花费的时间16
LinkedList从集合中间位置新增元素花费的时间114
```

<font style="color:rgb(44, 62, 80);">ArrayList 花费的时间比 LinkedList 要少很多很多。</font>

+ <font style="color:rgb(44, 62, 80);">如果是从集合的尾部新增元素，ArrayList 花费的时间应该比 LinkedList 少，因为数组是一段连续的内存空间，也不需要复制数组；而链表需要创建新的对象，前后引用也要重新排列。</font>

<font style="color:rgb(44, 62, 80);">来看测试代码：</font>

```plain
public class ArrayListTest {
    public static void addFromTailTest(int num) {
        ArrayList<String> list = new ArrayList<String>(num);
        int i = 0;

        long timeStart = System.currentTimeMillis();

        while (i < num) {
            list.add(i + "沉默王二");
            i++;
        }

        long timeEnd = System.currentTimeMillis();

        System.out.println("ArrayList从集合尾部位置新增元素花费的时间" + (timeEnd - timeStart));
    }
}

public class LinkedListTest {
    public static void addFromTailTest(int num) {
        LinkedList<String> list = new LinkedList<String>();
        int i = 0;
        long timeStart = System.currentTimeMillis();
        while (i < num) {
            list.add(i + "沉默王二");
            i++;
        }
        long timeEnd = System.currentTimeMillis();

        System.out.println("LinkedList从集合尾部位置新增元素花费的时间" + (timeEnd - timeStart));
    }
}
```

<font style="color:rgb(44, 62, 80);">num 为 10000，代码实测后的时间如下所示：</font>

```plain
ArrayList从集合尾部位置新增元素花费的时间69
LinkedList从集合尾部位置新增元素花费的时间193
```

<font style="color:rgb(44, 62, 80);">ArrayList 花费的时间比 LinkedList 要少一些。</font>

<font style="color:rgb(44, 62, 80);">这样的结论和预期的是不是不太相符？ArrayList 在添加元素的时候如果不涉及到扩容，性能在两种情况下（中间位置新增元素、尾部新增元素）比 LinkedList 好很多，只有头部新增元素的时候比 LinkedList 差，因为数组复制的原因。</font>

<font style="color:rgb(44, 62, 80);">当然了，如果涉及到数组扩容的话，ArrayList 的性能就没那么可观了，因为扩容的时候也要复制数组。</font>

### <font style="color:rgb(44, 62, 80);">删除元素时究竟谁快？</font>

#### <font style="color:rgb(44, 62, 80);">ArrayList</font>

<font style="color:rgb(44, 62, 80);">ArrayList 删除元素的时候，有两种方式，一种是直接删除元素（</font>`<font style="color:rgb(44, 62, 80);">remove(Object)</font>`<font style="color:rgb(44, 62, 80);">），需要直先遍历数组，找到元素对应的索引；一种是按照索引删除元素（</font>`<font style="color:rgb(44, 62, 80);">remove(int)</font>`<font style="color:rgb(44, 62, 80);">）。</font>

<font style="color:rgb(44, 62, 80);">来看一下源码（其实前面也讲过了，这里温习一下）：</font>

```plain
public boolean remove(Object o) {
    final Object[] es = elementData; // 获取数组元素
    final int size = this.size; // 获取数组大小
    int i = 0;
    found: {
        if (o == null) {
            for (; i < size; i++)
                if (es[i] == null)
                    break found;
        } else {
            for (; i < size; i++)
                if (o.equals(es[i]))
                    break found;
        }
        return false;
    }
    fastRemove(es, i); // 调用 fastRemove 方法快速移除元素
    return true;
}

public E remove(int index) {
    Objects.checkIndex(index, size); // 检查索引是否越界
    final Object[] es = elementData; // 获取数组元素

    oldValue = (E) es[index]; // 获取要删除的元素
    fastRemove(es, index); // 调用 fastRemove 方法快速移除元素

    return oldValue; // 返回被删除的元素
}
```

<font style="color:rgb(44, 62, 80);">本质上讲，两个方法是一样的，它们最后调用的都是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">fastRemove(Object, int)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

```plain
private void fastRemove(Object[] es, int i) {
    final int newSize;
    if ((newSize = size - 1) > i) // 如果要删除的不是最后一个元素
        System.arraycopy(es, i + 1, es, i, newSize - i); // 将要删除元素后面的元素向前移动一位
    es[size = newSize] = null; // 将最后一个元素置为 null，帮助垃圾回收
}
```

<font style="color:rgb(44, 62, 80);">从源码可以看得出，只要删除的不是最后一个元素，都需要重新移动数组。删除的元素位置越靠前，代价就越大。</font>

#### <font style="color:rgb(44, 62, 80);">LinkedList</font>

<font style="color:rgb(44, 62, 80);">LinkedList 删除元素的时候，有四种常用的方式：</font>

+ `<font style="color:rgb(44, 62, 80);">remove(int)</font>`<font style="color:rgb(44, 62, 80);">，删除指定位置上的元素</font>

```plain
public E remove(int index) {
    checkElementIndex(index);
    return unlink(node(index));
}
```

<font style="color:rgb(44, 62, 80);">先检查索引，再调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">node(int)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法（ 前后半段遍历，和新增元素操作一样）找到节点 Node，然后调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">unlink(Node)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">解除节点的前后引用，同时更新前节点的后引用和后节点的前引用：</font>

```plain
E unlink(Node<E> x) {
    final E element = x.item; // 获取要删除的节点的元素
    final Node<E> next = x.next; // 获取要删除的节点的后继节点
    final Node<E> prev = x.prev; // 获取要删除的节点的前驱节点

    if (prev == null) { // 如果要删除的节点是第一个节点
        first = next; // 将头节点更新为要删除的节点的后继节点
    } else {
        prev.next = next; // 将要删除的节点的前驱节点的后继节点指向要删除的节点的后继节点
        x.prev = null; // 将要删除的节点的前驱节点置为 null，帮助垃圾回收
    }

    if (next == null) { // 如果要删除的节点是最后一个节点
        last = prev; // 将尾节点更新为要删除的节点的前驱节点
    } else {
        next.prev = prev; // 将要删除的节点的后继节点的前驱节点指向要删除的节点的前驱节点
        x.next = null; // 将要删除的节点的后继节点置为 null，帮助垃圾回收
    }

    x.item = null; // 将要删除的节点的元素置为 null，帮助垃圾回收
    size--; // 将链表的长度减一
    return element; // 返回被删除的元素
}
```

+ `<font style="color:rgb(44, 62, 80);">remove(Object)</font>`<font style="color:rgb(44, 62, 80);">，直接删除元素</font>

```plain
public boolean remove(Object o) {
    if (o == null) { // 如果要删除的元素为 null
        for (LinkedList.Node<E> x = first; x != null; x = x.next) {
            if (x.item == null) { // 如果找到了要删除的节点
                unlink(x); // 调用 unlink 方法删除指定节点
                return true; // 返回删除成功
            }
        }
    } else {
        for (LinkedList.Node<E> x = first; x != null; x = x.next) {
            if (o.equals(x.item)) { // 如果找到了要删除的节点
                unlink(x); // 调用 unlink 方法删除指定节点
                return true; // 返回删除成功
            }
        }
    }
    return false; // 没有找到要删除的节点，返回删除失败
}
```

<font style="color:rgb(44, 62, 80);">也是先前后半段遍历，找到要删除的元素后调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">unlink(Node)</font>`<font style="color:rgb(44, 62, 80);">。</font>

+ `<font style="color:rgb(44, 62, 80);">removeFirst()</font>`<font style="color:rgb(44, 62, 80);">，删除第一个节点</font>

```plain
public E removeFirst() {
    final LinkedList.Node<E> f = first;
    if (f == null)
        throw new NoSuchElementException();
    return unlinkFirst(f);
}

private E unlinkFirst(LinkedList.Node<E> f) {
    final E element = f.item; // 获取要删除的节点的元素
    final LinkedList.Node<E> next = f.next; // 获取要删除的节点的后继节点
    f.item = null; // 将要删除的节点的元素置为 null，帮助垃圾回收
    f.next = null; // 将要删除的节点的后继节点置为 null，帮助垃圾回收
    first = next; // 将头节点更新为要删除的节点的后继节点
    if (next == null) // 如果链表已经为空
        last = null; // 将尾节点置为 null
    else
        next.prev = null; // 将要删除的节点的后继节点的前驱节点置为 null，帮助垃圾回收
    size--; // 将链表的长度减一
    return element; // 返回被删除的元素
}
```

<font style="color:rgb(44, 62, 80);">删除第一个节点就不需要遍历了，只需要把第二个节点更新为第一个节点即可。</font>

+ `<font style="color:rgb(44, 62, 80);">removeLast()</font>`<font style="color:rgb(44, 62, 80);">，删除最后一个节点</font>

<font style="color:rgb(44, 62, 80);">删除最后一个节点和删除第一个节点类似，只需要把倒数第二个节点更新为最后一个节点即可。</font>

<font style="color:rgb(44, 62, 80);">可以看得出，LinkedList 在删除比较靠前和比较靠后的元素时，非常高效，但如果删除的是中间位置的元素，效率就比较低了。</font>

<font style="color:rgb(44, 62, 80);">这里就不再做代码测试了，感兴趣的话可以自己试试，结果和新增元素保持一致：</font>

+ <font style="color:rgb(44, 62, 80);">从集合头部删除元素时，ArrayList 花费的时间比 LinkedList 多很多；</font>
+ <font style="color:rgb(44, 62, 80);">从集合中间位置删除元素时，ArrayList 花费的时间比 LinkedList 少很多；</font>
+ <font style="color:rgb(44, 62, 80);">从集合尾部删除元素时，ArrayList 花费的时间比 LinkedList 少一点。</font>

<font style="color:rgb(44, 62, 80);">我本地的统计结果如下所示，可以作为参考：</font>

```plain
ArrayList从集合头部位置删除元素花费的时间380
LinkedList从集合头部位置删除元素花费的时间4
ArrayList从集合中间位置删除元素花费的时间381
LinkedList从集合中间位置删除元素花费的时间5922
ArrayList从集合尾部位置删除元素花费的时间8
LinkedList从集合尾部位置删除元素花费的时间12
```

### <font style="color:rgb(44, 62, 80);">遍历元素时究竟谁快？</font>

#### <font style="color:rgb(44, 62, 80);">ArrayList</font>

<font style="color:rgb(44, 62, 80);">遍历 ArrayList 找到某个元素的话，通常有两种形式：</font>

+ `<font style="color:rgb(44, 62, 80);">get(int)</font>`<font style="color:rgb(44, 62, 80);">，根据索引找元素</font>

```plain
public E get(int index) {
    Objects.checkIndex(index, size);
    return elementData(index);
}
```

<font style="color:rgb(44, 62, 80);">由于 ArrayList 是由数组实现的，所以根据索引找元素非常的快，一步到位。</font>

+ `<font style="color:rgb(44, 62, 80);">indexOf(Object)</font>`<font style="color:rgb(44, 62, 80);">，根据元素找索引</font>

```plain
public int indexOf(Object o) {
    return indexOfRange(o, 0, size);
}

int indexOfRange(Object o, int start, int end) {
    Object[] es = elementData; // 获取 ArrayList 中的元素数组
    if (o == null) { // 如果要查找的元素为 null
        for (int i = start; i < end; i++) {
            if (es[i] == null) { // 如果找到了要查找的元素
                return i; // 返回元素在 ArrayList 中的索引
            }
        }
    } else {
        for (int i = start; i < end; i++) {
            if (o.equals(es[i])) { // 如果找到了要查找的元素
                return i; // 返回元素在 ArrayList 中的索引
            }
        }
    }
    return -1; // 没有找到要查找的元素，返回 -1
}
```

<font style="color:rgb(44, 62, 80);">根据元素找索引的话，就需要遍历整个数组了，从头到尾依次找。</font>

#### <font style="color:rgb(44, 62, 80);">LinkedList</font>

<font style="color:rgb(44, 62, 80);">遍历 LinkedList 找到某个元素的话，通常也有两种形式：</font>

+ `<font style="color:rgb(44, 62, 80);">get(int)</font>`<font style="color:rgb(44, 62, 80);">，找指定位置上的元素</font>

```plain
public E get(int index) {
    checkElementIndex(index);
    return node(index).item;
}
```

<font style="color:rgb(44, 62, 80);">既然需要调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">node(int)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，就意味着需要前后半段遍历了。</font>

+ `<font style="color:rgb(44, 62, 80);">indexOf(Object)</font>`<font style="color:rgb(44, 62, 80);">，找元素所在的位置</font>

```plain
public int indexOf(Object o) {
    int index = 0; // 初始化索引为 0
    if (o == null) { // 如果要查找的元素为 null
        for (LinkedList.Node<E> x = first; x != null; x = x.next) { // 从头节点开始遍历链表
            if (x.item == null) // 如果找到了要查找的元素
                return index; // 返回元素在 LinkedList 中的索引
            index++; // 索引加一
        }
    } else {
        for (LinkedList.Node<E> x = first; x != null; x = x.next) { // 从头节点开始遍历链表
            if (o.equals(x.item)) // 如果找到了要查找的元素
                return index; // 返回元素在 LinkedList 中的索引
            index++; // 索引加一
        }
    }
    return -1; // 没有找到要查找的元素，返回 -1
}
```

<font style="color:rgb(44, 62, 80);">需要遍历整个链表，和 ArrayList 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">indexOf()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类似。</font>

<font style="color:rgb(44, 62, 80);">那在我们对集合遍历的时候，通常有两种做法，一种是使用 for 循环，一种是使用</font>[<font style="color:rgb(44, 62, 80);">迭代器（Iterator）</font>](https://javabetter.cn/collection/iterator-iterable.html)<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">如果使用的是 for 循环，可想而知 LinkedList 在 get 的时候性能会非常差，因为每一次外层的 for 循环，都要执行一次</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">node(int)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法进行前后半段的遍历。</font>

```plain
LinkedList.Node<E> node(int index) {
    // assert isElementIndex(index);

    if (index < (size >> 1)) { // 如果要查找的元素在链表的前半部分
        LinkedList.Node<E> x = first; // 从头节点开始遍历链表
        for (int i = 0; i < index; i++) // 循环查找元素
            x = x.next;
        return x; // 返回要查找的元素节点
    } else { // 如果要查找的元素在链表的后半部分
        LinkedList.Node<E> x = last; // 从尾节点开始遍历链表
        for (int i = size - 1; i > index; i--) // 循环查找元素
            x = x.prev;
        return x; // 返回要查找的元素节点
    }
}
```

<font style="color:rgb(44, 62, 80);">那如果使用的是迭代器呢？</font>

```plain
LinkedList<String> list = new LinkedList<String>();
for (Iterator<String> it = list.iterator(); it.hasNext();) {
    it.next();
}
```

<font style="color:rgb(44, 62, 80);">迭代器只会调用一次</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">node(int)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，在执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">list.iterator()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候：先调用 AbstractSequentialList 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">iterator()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，再调用 AbstractList 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">listIterator()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，再调用 LinkedList 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">listIterator(int)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，如下图所示。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726671668215-9777399f-05a6-445c-9498-2d57279e5373.png" />


<font style="color:rgb(44, 62, 80);">最后返回的是 LinkedList 类的内部私有类 ListItr 对象：</font>

```plain
public ListIterator<E> listIterator(int index) {
    checkPositionIndex(index); // 检查索引是否在有效范围内
    return new LinkedList.ListItr(index); // 创建一个新的 ListItr 对象并返回
}

private class ListItr implements ListIterator<E> {
    private LinkedList.Node<E> lastReturned; // 上一个已返回的节点
    private LinkedList.Node<E> next; // 下一个节点
    private int nextIndex; // 下一个节点的索引
    private int expectedModCount = modCount; // 链表被修改的次数

    ListItr(int index) {
        // assert isPositionIndex(index);
        next = (index == size) ? null : node(index); // 如果 index 等于 size，next 为 null，否则返回 node(index)
        nextIndex = index; // 设置 nextIndex 为 index
    }

    public boolean hasNext() {
        return nextIndex < size; // 如果下一个节点的索引小于链表的长度，返回 true，否则返回 false
    }

    public E next() {
        checkForComodification(); // 检查链表是否已经被修改
        if (!hasNext()) // 如果没有下一个节点，抛出 NoSuchElementException 异常
            throw new NoSuchElementException();

        lastReturned = next; // 将下一个节点设置为上一个已返回节点
        next = next.next; // 将下一个节点设置为当前节点的下一个节点
        nextIndex++; // 将下一个节点的索引增加 1
        return lastReturned.item; // 返回上一个已返回节点的元素
    }
}
```

<font style="color:rgb(44, 62, 80);">执行 ListItr 的构造方法时调用了一次</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">node(int)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，返回第一个节点。在此之后，迭代器就执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">hasNext()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">判断有没有下一个，执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">next()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法下一个节点。</font>

<font style="color:rgb(44, 62, 80);">由此，可以得出这样的结论：</font>**<font style="color:rgb(44, 62, 80);">遍历 LinkedList 的时候，千万不要使用 for 循环，要使用迭代器。</font>**

<font style="color:rgb(44, 62, 80);">也就是说，for 循环遍历的时候，ArrayList 花费的时间远小于 LinkedList；迭代器遍历的时候，两者性能差不多。</font>

### <font style="color:rgb(44, 62, 80);">两者的使用场景</font>

<font style="color:rgb(44, 62, 80);">当需要频繁随机访问元素的时候，例如读取大量数据并进行处理或者需要对数据进行排序或查找的场景，可以使用 ArrayList。例如一个学生管理系统，需要对学生列表进行排序或查找操作，可以使用 ArrayList 存储学生信息，以便快速访问和处理。</font>

<font style="color:rgb(44, 62, 80);">当需要频繁插入和删除元素的时候，例如实现队列或栈，或者需要在中间插入或删除元素的场景，可以使用 LinkedList。例如一个实时聊天系统，需要实现一个消息队列，可以使用 LinkedList 存储消息，以便快速插入和删除消息。</font>

<font style="color:rgb(44, 62, 80);">在一些特殊场景下，可能需要同时支持随机访问和插入/删除操作。例如一个在线游戏系统，需要实现一个玩家列表，需要支持快速查找和遍历玩家，同时也需要支持玩家的加入和离开。在这种情况下，可以使用 LinkedList 和 ArrayList 的组合，例如使用 LinkedList 存储玩家，以便快速插入和删除玩家，同时使用 ArrayList 存储玩家列表，以便快速查找和遍历玩家。</font>



## Iterator 和 Iterable 区别

<font style="color:rgb(44, 62, 80);">在 Java 中，我们对 List 进行遍历的时候，主要有这么三种方式。</font>

<font style="color:rgb(44, 62, 80);">第一种：for 循环。</font>

```plain
for (int i = 0; i < list.size(); i++) {
    System.out.print(list.get(i) + "，");
}
```

<font style="color:rgb(44, 62, 80);">第二种：迭代器。</font>

```plain
Iterator it = list.iterator();
while (it.hasNext()) {
    System.out.print(it.next() + "，");
}
```

<font style="color:rgb(44, 62, 80);">第三种：for-each。</font>

```plain
for (String str : list) {
    System.out.print(str + "，");
}
```

<font style="color:rgb(44, 62, 80);">第一种我们略过，第二种用的是 Iterator，第三种看起来是 for-each，其实背后也是 Iterator，看一下反编译后的代码（如下所示）就明白了。</font>

```plain
Iterator var3 = list.iterator();

while(var3.hasNext()) {
    String str = (String)var3.next();
    System.out.print(str + "，");
}
```

<font style="color:rgb(44, 62, 80);">for-each 只不过是个语法糖，让我们开发者在遍历 List 的时候可以写更少的代码，更简洁明了。</font>

<font style="color:rgb(44, 62, 80);">Iterator 是个接口，JDK 1.2 的时候就有了，用来改进 Enumeration 接口：</font>

+ <font style="color:rgb(44, 62, 80);">允许删除元素（增加了 remove 方法）</font>
+ <font style="color:rgb(44, 62, 80);">优化了方法名（Enumeration 中是 hasMoreElements 和 nextElement，不简洁）</font>

<font style="color:rgb(44, 62, 80);">来看一下 Iterator 的源码：</font>

```plain
public interface Iterator<E> {
    // 判断集合中是否存在下一个对象
    boolean hasNext();
    // 返回集合中的下一个对象，并将访问指针移动一位
    E next();
    // 删除集合中调用next()方法返回的对象
    default void remove() {
        throw new UnsupportedOperationException("remove");
    }
}
```

<font style="color:rgb(44, 62, 80);">JDK 1.8 时，Iterable 接口中新增了 forEach 方法。该方法接受一个 Consumer 对象作为参数，用于对集合中的每个元素执行指定的操作。该方法的实现方式是使用 for-each 循环遍历集合中的元素，对于每个元素，调用 Consumer 对象的 accept 方法执行指定的操作。</font>

```plain
default void forEach(Consumer<? super T> action) {
    Objects.requireNonNull(action);
    for (T t : this) {
        action.accept(t);
    }
}
```

<font style="color:rgb(44, 62, 80);">该方法实现时首先会对 action 参数进行非空检查，如果为 null 则抛出 NullPointerException 异常。然后使用 for-each 循环遍历集合中的元素，并对每个元素调用 action.accept(t) 方法执行指定的操作。由于 Iterable 接口是 Java 集合框架中所有集合类型的基本接口，因此该方法可以被所有实现了 Iterable 接口的集合类型使用。</font>

<font style="color:rgb(44, 62, 80);">它对 Iterable 的每个元素执行给定操作，具体指定的操作需要自己写Consumer接口通过accept方法回调出来。</font>

```plain
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
list.forEach(integer -> System.out.println(integer));
```

<font style="color:rgb(44, 62, 80);">写得更浅显易懂点，就是：</font>

```plain
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
list.forEach(new Consumer<Integer>() {
    @Override
    public void accept(Integer integer) {
        System.out.println(integer);
    }
});
```

<font style="color:rgb(44, 62, 80);">如果我们仔细观察ArrayList 或者 LinkedList 的“户口本”就会发现，并没有直接找到 Iterator 的影子。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726671705549-01c1cf64-0a34-4149-8408-e25d70421481.png" />


<font style="color:rgb(44, 62, 80);">反而找到了 Iterable！</font>

```plain
public interface Iterable<T> {
    Iterator<T> iterator();
}
```

<font style="color:rgb(44, 62, 80);">也就是说，List 的关系图谱中并没有直接使用 Iterator，而是使用 Iterable 做了过渡。</font>

<font style="color:rgb(44, 62, 80);">回头再来看一下第二种遍历 List 的方式。</font>

```plain
Iterator it = list.iterator();
while (it.hasNext()) {
}
```

<font style="color:rgb(44, 62, 80);">发现刚好呼应上了。拿 ArrayList 来说吧，它重写了 Iterable 接口的 iterator 方法：</font>

```plain
public Iterator<E> iterator() {
    return new Itr();
}
```

<font style="color:rgb(44, 62, 80);">返回的对象 Itr 是个内部类，实现了 Iterator 接口，并且按照自己的方式重写了 hasNext、next、remove 等方法。</font>

```plain
/**
 * ArrayList 迭代器的实现，内部类。
 */
private class Itr implements Iterator<E> {

    /**
     * 游标位置，即下一个元素的索引。
     */
    int cursor;

    /**
     * 上一个元素的索引。
     */
    int lastRet = -1;

    /**
     * 预期的结构性修改次数。
     */
    int expectedModCount = modCount;

    /**
     * 判断是否还有下一个元素。
     *
     * @return 如果还有下一个元素，则返回 true，否则返回 false。
     */
    public boolean hasNext() {
        return cursor != size;
    }

    /**
     * 获取下一个元素。
     *
     * @return 列表中的下一个元素。
     * @throws NoSuchElementException 如果没有下一个元素，则抛出 NoSuchElementException 异常。
     */
    @SuppressWarnings("unchecked")
    public E next() {
        // 获取 ArrayList 对象的内部数组
        Object[] elementData = ArrayList.this.elementData;
        // 记录当前迭代器的位置
        int i = cursor;
        if (i >= size) {
            throw new NoSuchElementException();
        }
        // 将游标位置加 1，为下一次迭代做准备
        cursor = i + 1;
        // 记录上一个元素的索引
        return (E) elementData[lastRet = i];
    }

    /**
     * 删除最后一个返回的元素。
     * 迭代器只能删除最后一次调用 next 方法返回的元素。
     *
     * @throws ConcurrentModificationException 如果在最后一次调用 next 方法之后列表结构被修改，则抛出 ConcurrentModificationException 异常。
     * @throws IllegalStateException         如果在调用 next 方法之前没有调用 remove 方法，或者在同一次迭代中多次调用 remove 方法，则抛出 IllegalStateException 异常。
     */
    public void remove() {
        // 检查在最后一次调用 next 方法之后是否进行了结构性修改
        if (expectedModCount != modCount) {
            throw new ConcurrentModificationException();
        }
        // 如果上一次调用 next 方法之前没有调用 remove 方法，则抛出 IllegalStateException 异常
        if (lastRet < 0) {
            throw new IllegalStateException();
        }
        try {
            // 调用 ArrayList 对象的 remove(int index) 方法删除上一个元素
            ArrayList.this.remove(lastRet);
            // 将游标位置设置为上一个元素的位置
            cursor = lastRet;
            // 将上一个元素的索引设置为 -1，表示没有上一个元素
            lastRet = -1;
            // 更新预期的结构性修改次数
            expectedModCount = modCount;
        } catch (IndexOutOfBoundsException ex) {
            throw new ConcurrentModificationException();
        }
    }
}
```

<font style="color:rgb(44, 62, 80);">那可能有些小伙伴会问：为什么不直接将 Iterator 中的核心方法 hasNext、next 放到 Iterable 接口中呢？直接像下面这样使用不是更方便？</font>

```plain
Iterable it = list.iterator();
while (it.hasNext()) {
}
```

<font style="color:rgb(44, 62, 80);">从英文单词的后缀语法上来看，（Iterable）able 表示这个 List 是支持迭代的，而 （Iterator）tor 表示这个 List 是如何迭代的。</font>

<font style="color:rgb(44, 62, 80);">支持迭代与具体怎么迭代显然不能混在一起，否则就乱的一笔。还是各司其职的好。</font>

<font style="color:rgb(44, 62, 80);">想一下，如果把 Iterator 和 Iterable 合并，for-each 这种遍历 List 的方式是不是就不好办了？</font>

<font style="color:rgb(44, 62, 80);">原则上，只要一个 List 实现了 Iterable 接口，那么它就可以使用 for-each 这种方式来遍历，那具体该怎么遍历，还是要看它自己是怎么实现 Iterator 接口的。</font>

<font style="color:rgb(44, 62, 80);">Map 就没办法直接使用 for-each，因为 Map 没有实现 Iterable 接口，只有通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">map.entrySet()</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">map.keySet()</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">map.values()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这种返回一个 Collection 的方式才能 使用 for-each。</font>

<font style="color:rgb(44, 62, 80);">如果我们仔细研究 LinkedList 的源码就会发现，LinkedList 并没有直接重写 Iterable 接口的 iterator 方法，而是由它的父类 AbstractSequentialList 来完成。</font>

```plain
public Iterator<E> iterator() {
    return listIterator();
}
```

<font style="color:rgb(44, 62, 80);">LinkedList 重写了 listIterator 方法：</font>

```plain
public ListIterator<E> listIterator(int index) {
    checkPositionIndex(index);
    return new ListItr(index);
}
```

<font style="color:rgb(44, 62, 80);">这里我们发现了一个新的迭代器 ListIterator，它继承了 Iterator 接口，在遍历List 时可以从任意下标开始遍历，而且支持双向遍历。</font>

```plain
public interface ListIterator<E> extends Iterator<E> {
    boolean hasNext();
    E next();
    boolean hasPrevious();
    E previous();
}
```

<font style="color:rgb(44, 62, 80);">我们知道，集合（Collection）不仅有 List，还有 Set，那 Iterator 不仅支持 List，还支持 Set，但 ListIterator 就只支持 List。</font>

<font style="color:rgb(44, 62, 80);">那可能有些小伙伴会问：为什么不直接让 List 实现 Iterator 接口，而是要用内部类来实现呢？</font>

<font style="color:rgb(44, 62, 80);">这是因为有些 List 可能会有多种遍历方式，比如说 LinkedList，除了支持正序的遍历方式，还支持逆序的遍历方式——DescendingIterator：</font>

```plain
/**
 * ArrayList 逆向迭代器的实现，内部类。
 */
private class DescendingIterator implements Iterator<E> {

    /**
     * 使用 ListItr 对象进行逆向遍历。
     */
    private final ListItr itr = new ListItr(size());

    /**
     * 判断是否还有下一个元素。
     *
     * @return 如果还有下一个元素，则返回 true，否则返回 false。
     */
    public boolean hasNext() {
        return itr.hasPrevious();
    }

    /**
     * 获取下一个元素。
     *
     * @return 列表中的下一个元素。
     * @throws NoSuchElementException 如果没有下一个元素，则抛出 NoSuchElementException 异常。
     */
    public E next() {
        return itr.previous();
    }

    /**
     * 删除最后一个返回的元素。
     * 迭代器只能删除最后一次调用 next 方法返回的元素。
     *
     * @throws UnsupportedOperationException 如果列表不支持删除操作，则抛出 UnsupportedOperationException 异常。
     * @throws IllegalStateException         如果在调用 next 方法之前没有调用 remove 方法，或者在同一次迭代中多次调用 remove 方法，则抛出 IllegalStateException 异常。
     */
    public void remove() {
        itr.remove();
    }
}
```

<font style="color:rgb(44, 62, 80);">可以看得到，DescendingIterator 刚好利用了 ListIterator 向前遍历的方式。可以通过以下的方式来使用：</font>

```plain
Iterator it = list.descendingIterator();
while (it.hasNext()) {
}
```

<font style="color:rgb(44, 62, 80);">好了，关于Iterator与Iterable我们就先聊这么多，总结两点：</font>

+ <font style="color:rgb(44, 62, 80);">学会深入思考，一点点抽丝剥茧，多想想为什么这样实现，很多问题没有自己想象中的那么复杂。</font>
+ <font style="color:rgb(44, 62, 80);">遇到疑惑不放弃，这是提升自己最好的机会，遇到某个疑难的点，解决的过程中会挖掘出很多相关的东西。</font>

## foreach 循环陷阱

<font style="color:rgb(44, 62, 80);">那天，小二去阿里面试，面试官老王一上来就甩给了他一道面试题：为什么阿里的 Java 开发手册里会强制不要在 foreach 里进行元素的删除操作？</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726671720267-e0403a0f-5e13-448b-ad54-76d8c736016e.png" />


<font style="color:rgb(44, 62, 80);">小二听完这句话就乐了。为什么呢？因为一天前他刚在《</font>[<font style="color:rgb(44, 62, 80);">二哥的Java进阶之路</font>](https://github.com/itwanger/toBeBetterJavaer)<font style="color:rgb(44, 62, 80);">》上看到过这道题的答案。</font>

<font style="color:rgb(44, 62, 80);">以下是整篇文章的内容。</font>

#### [<font style="color:rgb(44, 62, 80);">关于fail-fast</font>](https://javabetter.cn/collection/fail-fast.html#%E5%85%B3%E4%BA%8Efail-fast)

<font style="color:rgb(44, 62, 80);">为了镇楼，先搬一段英文来解释一下 fail-fast。</font>

<font style="color:rgb(102, 102, 102);">In systems design, a fail-fast system is one which immediately reports at its interface any condition that is likely to indicate a failure. Fail-fast systems are usually designed to stop normal operation rather than attempt to continue a possibly flawed process. Such designs often check the system's state at several points in an operation, so any failures can be detected early. The responsibility of a fail-fast module is detecting errors, then letting the next-highest level of the system handle them.</font>

<font style="color:rgb(44, 62, 80);">这段话的大致意思就是，fail-fast 是一种通用的系统设计思想，一旦检测到可能会发生错误，就立马抛出异常，程序将不再往下执行。</font>

```plain
public void test(Wanger wanger) {   
    if (wanger == null) {
        throw new RuntimeException("wanger 不能为空");
    }
    
    System.out.println(wanger.toString());
}
```

<font style="color:rgb(44, 62, 80);">一旦检测到 wanger 为 null，就立马抛出异常，让调用者来决定这种情况下该怎么处理，下一步</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">wanger.toString()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">就不会执行了——避免更严重的错误出现。</font>

<font style="color:rgb(44, 62, 80);">很多时候，我们会把 fail-fast 归类为 Java 集合框架的一种错误检测机制，但其实 fail-fast 并不是 Java 集合框架特有的机制。</font>

#### [<font style="color:rgb(44, 62, 80);">for-each 删除元素报错</font>](https://javabetter.cn/collection/fail-fast.html#for-each-%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0%E6%8A%A5%E9%94%99)

<font style="color:rgb(44, 62, 80);">之所以我们把 fail-fast 放在集合框架篇里介绍，是因为问题比较容易再现。</font>

```plain
List<String> list = new ArrayList<>();
list.add("沉默王二");
list.add("沉默王三");
list.add("一个文章真特么有趣的程序员");

for (String str : list) {
	if ("沉默王二".equals(str)) {
		list.remove(str);
	}
}

System.out.println(list);
```

<font style="color:rgb(44, 62, 80);">这段代码看起来没有任何问题，但运行起来就报错了。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726671720852-27f4738a-a6da-4cf9-8b49-a3fbe5dcdd27.png" />


<font style="color:rgb(44, 62, 80);">根据错误的堆栈信息，我们可以定位到 ArrayList 的第 901 行代码。</font>

```plain
final void checkForComodification() {
    if (modCount != expectedModCount)
        throw new ConcurrentModificationException();
}
```

<font style="color:rgb(44, 62, 80);">也就是说，remove 的时候触发执行了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">checkForComodification</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，该方法对 modCount 和 expectedModCount 进行了比较，发现两者不等，就抛出了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ConcurrentModificationException</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">异常。</font>

<font style="color:rgb(44, 62, 80);">为什么会执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">checkForComodification</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法呢？</font>

<font style="color:rgb(44, 62, 80);">是因为 for-each 本质上是个语法糖，底层是通过</font>[<font style="color:rgb(44, 62, 80);">迭代器 Iterator</font>](https://javabetter.cn/collection/iterator-iterable.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">配合 while 循环实现的，来看一下反编译后的字节码。</font>

```plain
List<String> list = new ArrayList();
list.add("沉默王二");
list.add("沉默王三");
list.add("一个文章真特么有趣的程序员");
Iterator var2 = list.iterator();

while(var2.hasNext()) {
    String str = (String)var2.next();
    if ("沉默王二".equals(str)) {
        list.remove(str);
    }
}

System.out.println(list);
```

<font style="color:rgb(44, 62, 80);">来看一下 ArrayList 的 iterator 方法吧：</font>

```plain
public Iterator<E> iterator() {
    return new Itr();
}
```

<font style="color:rgb(44, 62, 80);">内部类 Itr 实现了 Iterator 接口，这是 Itr 的源码。</font>

```plain
private class Itr implements Iterator<E> {
    int cursor;             // 下一个元素的索引
    int lastRet = -1;       // 上一个返回元素的索引；如果没有则为 -1
    int expectedModCount = modCount; // ArrayList 的修改次数

    Itr() { }  // 构造函数

    public boolean hasNext() { // 判断是否还有下一个元素
        return cursor != size;
    }

    @SuppressWarnings("unchecked")
    public E next() { // 返回下一个元素
        checkForComodification(); // 检查 ArrayList 是否被修改过
        int i = cursor; // 当前索引
        Object[] elementData = ArrayList.this.elementData; // ArrayList 中的元素数组
        if (i >= elementData.length) // 超出数组范围
            throw new ConcurrentModificationException(); // 抛出异常
        cursor = i + 1; // 更新下一个元素的索引
        return (E) elementData[lastRet = i]; // 返回下一个元素
    }
}
```

<font style="color:rgb(44, 62, 80);">也就是说</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new Itr()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的时候 expectedModCount 被赋值为 modCount，而 modCount 是 ArrayList 中的一个计数器，用于记录 ArrayList 对象被修改的次数。ArrayList 的修改操作包括添加、删除、设置元素值等。每次对 ArrayList 进行修改操作时，modCount 的值会自增 1。</font>

<font style="color:rgb(44, 62, 80);">在迭代 ArrayList 时，如果迭代过程中发现 modCount 的值与迭代器的 expectedModCount 不一致，则说明 ArrayList 已被修改过，此时会抛出 ConcurrentModificationException 异常。这种机制可以保证迭代器在遍历 ArrayList 时，不会遗漏或重复元素，同时也可以在多线程环境下检测到并发修改问题。</font>

```plain
protected transient int modCount = 0;
```

#### [<font style="color:rgb(44, 62, 80);">分析代码执行的逻辑</font>](https://javabetter.cn/collection/fail-fast.html#%E5%88%86%E6%9E%90%E4%BB%A3%E7%A0%81%E6%89%A7%E8%A1%8C%E7%9A%84%E9%80%BB%E8%BE%91)

<font style="color:rgb(44, 62, 80);">我们来继续定位之前报错的错误堆栈。这是之前的代码。</font>

```plain
List<String> list = new ArrayList<>();
list.add("沉默王二");
list.add("沉默王三");
list.add("一个文章真特么有趣的程序员");

for (String str : list) {
	if ("沉默王二".equals(str)) {
		list.remove(str);
	}
}

System.out.println(list);
```

<font style="color:rgb(44, 62, 80);">由于 list 此前执行了 3 次 add 方法。</font>

+ <font style="color:rgb(44, 62, 80);">add 方法调用 ensureCapacityInternal 方法</font>
+ <font style="color:rgb(44, 62, 80);">ensureCapacityInternal 方法调用 ensureExplicitCapacity 方法</font>
+ <font style="color:rgb(44, 62, 80);">ensureExplicitCapacity 方法中会执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">modCount++</font>`

```plain
private void ensureExplicitCapacity(int minCapacity) {
    modCount++;
}
```

<font style="color:rgb(44, 62, 80);">所以 modCount 的值在经过三次 add 后为 3，于是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new Itr()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">后 expectedModCount 的值也为 3（回到前面去看一下 Itr 的源码）。</font>

<font style="color:rgb(44, 62, 80);">接着来执行 for-each 的循环遍历。</font>

<font style="color:rgb(44, 62, 80);">执行第一次循环时，发现“沉默王二”等于 str，于是执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">list.remove(str)</font>`<font style="color:rgb(44, 62, 80);">。</font>

+ <font style="color:rgb(44, 62, 80);">remove 方法调用 fastRemove 方法</font>
+ <font style="color:rgb(44, 62, 80);">fastRemove 方法中会执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">modCount++</font>`

```plain
private void fastRemove(int index) {
    modCount++;
}
```

<font style="color:rgb(44, 62, 80);">modCount 的值变成了 4。</font>

<font style="color:rgb(44, 62, 80);">第二次遍历时，会执行 Itr 的 next 方法（</font>`<font style="color:rgb(44, 62, 80);">String str = (String) var3.next();</font>`<font style="color:rgb(44, 62, 80);">），next 方法就会调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">checkForComodification</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

```plain
final void checkForComodification() {
    if (modCount != expectedModCount)
        throw new ConcurrentModificationException();
}
```

<font style="color:rgb(44, 62, 80);">此时 expectedModCount 为 3，modCount 为 4，就只好抛出 ConcurrentModificationException 异常了。</font>

<font style="color:rgb(44, 62, 80);">那其实在阿里巴巴的 Java 开发手册里也提到了，不要在 for-each 循环里进行元素的 remove/add 操作。remove 元素请使用 Iterator 方式。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726671722206-16c4a913-7c33-415a-aa4b-24da5750bcdc.png" />


<font style="color:rgb(44, 62, 80);">那原因其实就是我们上面分析的这些，出于 fail-fast 保护机制。</font>

#### [<font style="color:rgb(44, 62, 80);">那该如何正确地删除元素呢？</font>](https://javabetter.cn/collection/fail-fast.html#%E9%82%A3%E8%AF%A5%E5%A6%82%E4%BD%95%E6%AD%A3%E7%A1%AE%E5%9C%B0%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0%E5%91%A2)

##### [<font style="color:rgb(44, 62, 80);">1）remove 后 break</font>](https://javabetter.cn/collection/fail-fast.html#_1-remove-%E5%90%8E-break)

```plain
List<String> list = new ArrayList<>();
list.add("沉默王二");
list.add("沉默王三");
list.add("一个文章真特么有趣的程序员");

for (String str : list) {
	if ("沉默王二".equals(str)) {
		list.remove(str);
		break;
	}
}
```

<font style="color:rgb(44, 62, 80);">break 后循环就不再遍历了，意味着 Iterator 的 next 方法不再执行了，也就意味着</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">checkForComodification</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法不再执行了，所以异常也就不会抛出了。</font>

<font style="color:rgb(44, 62, 80);">但是呢，当 List 中有重复元素要删除的时候，break 就不合适了。</font>

##### [<font style="color:rgb(44, 62, 80);">2）for 循环</font>](https://javabetter.cn/collection/fail-fast.html#_2-for-%E5%BE%AA%E7%8E%AF)

```plain
List<String> list = new ArrayList<>();
list.add("沉默王二");
list.add("沉默王三");
list.add("一个文章真特么有趣的程序员");
for (int i = 0; i < list.size(); i++) {
	String str = list.get(i);
	if ("沉默王二".equals(str)) {
		list.remove(str);
	}
}
```

<font style="color:rgb(44, 62, 80);">for 循环虽然可以避开 fail-fast 保护机制，也就说 remove 元素后不再抛出异常；但是呢，这段程序在原则上是有问题的。为什么呢？</font>

<font style="color:rgb(44, 62, 80);">第一次循环的时候，i 为 0，</font>`<font style="color:rgb(44, 62, 80);">list.size()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为 3，当执行完 remove 方法后，i 为 1，</font>`<font style="color:rgb(44, 62, 80);">list.size()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">却变成了 2，因为 list 的大小在 remove 后发生了变化，也就意味着“沉默王三”这个元素被跳过了。能明白吗？</font>

<font style="color:rgb(44, 62, 80);">remove 之前</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">list.get(1)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为“沉默王三”；但 remove 之后</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">list.get(1)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">变成了“一个文章真特么有趣的程序员”，而</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">list.get(0)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">变成了“沉默王三”。</font>

##### [<font style="color:rgb(44, 62, 80);">3）使用 Iterator</font>](https://javabetter.cn/collection/fail-fast.html#_3-%E4%BD%BF%E7%94%A8-iterator)

```plain
List<String> list = new ArrayList<>();
list.add("沉默王二");
list.add("沉默王三");
list.add("一个文章真特么有趣的程序员");

Iterator<String> itr = list.iterator();

while (itr.hasNext()) {
	String str = itr.next();
	if ("沉默王二".equals(str)) {
		itr.remove();
	}
}
```

<font style="color:rgb(44, 62, 80);">为什么使用 Iterator 的 remove 方法就可以避开 fail-fast 保护机制呢？看一下 remove 的源码就明白了。</font>

```plain
public void remove() {
    if (lastRet < 0) // 如果没有上一个返回元素的索引，则抛出异常
        throw new IllegalStateException();
    checkForComodification(); // 检查 ArrayList 是否被修改过

    try {
        ArrayList.this.remove(lastRet); // 删除上一个返回元素
        cursor = lastRet; // 更新下一个元素的索引
        lastRet = -1; // 清空上一个返回元素的索引
        expectedModCount = modCount; // 更新 ArrayList 的修改次数
    } catch (IndexOutOfBoundsException ex) {
        throw new ConcurrentModificationException(); // 抛出异常
    }
}
```

<font style="color:rgb(44, 62, 80);">删除完会执行</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">expectedModCount = modCount</font>`<font style="color:rgb(44, 62, 80);">，保证了 expectedModCount 与 modCount 的同步。</font>

#### [<font style="color:rgb(44, 62, 80);">小结</font>](https://javabetter.cn/collection/fail-fast.html#%E5%B0%8F%E7%BB%93)

<font style="color:rgb(44, 62, 80);">为什么不能在foreach里执行删除操作？</font>

<font style="color:rgb(44, 62, 80);">因为 foreach 循环是基于迭代器实现的，而迭代器在遍历集合时会维护一个 expectedModCount 属性来记录集合被修改的次数。如果在 foreach 循环中执行删除操作会导致 expectedModCount 属性值与实际的 modCount 属性值不一致，从而导致迭代器的 hasNext() 和 next() 方法抛出 ConcurrentModificationException 异常。</font>

<font style="color:rgb(44, 62, 80);">为了避免这种情况，应该使用迭代器的 remove() 方法来删除元素，该方法会在删除元素后更新迭代器状态，确保循环的正确性。如果需要在循环中删除元素，应该使用迭代器的 remove() 方法，而不是集合自身的 remove() 方法。</font>

<font style="color:rgb(44, 62, 80);">就像这样。</font>

```plain
List<String> list = new ArrayList<>();
list.add("沉默王二");
list.add("沉默王三");
list.add("一个文章真特么有趣的程序员");

Iterator<String> itr = list.iterator();

while (itr.hasNext()) {
	String str = itr.next();
	if ("沉默王二".equals(str)) {
		itr.remove();
	}
}
```

<font style="color:rgb(44, 62, 80);">除此之外，我们还可以采用</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">Stream 流</font>](https://javabetter.cn/java8/stream.html)<font style="color:rgb(44, 62, 80);">的filter() 方法来过滤集合中的元素，然后再通过 collect() 方法将过滤后的元素收集到一个新的集合中。</font>

```plain
List<String> list = new ArrayList<>(Arrays.asList("沉默", "王二", "陈清扬"));
list = list.stream().filter(s -> !s.equals("陈清扬")).collect(Collectors.toList());
```

<font style="color:rgb(44, 62, 80);">好了，关于这个问题，就聊到这里吧，希望能帮助到你。</font>

## <font style="color:rgb(44, 62, 80);">Comparable 和 Comparator</font>

<font style="color:rgb(44, 62, 80);">Comparable 和 Comparator 是 Java 的两个接口，从名字上我们就能够读出来它们俩的相似性：以某种方式来比较两个对象。</font>

<font style="color:rgb(44, 62, 80);">但它们之间到底有什么区别呢？请随我来，打怪进阶喽！</font>

### <font style="color:rgb(44, 62, 80);">Comparable</font>

<font style="color:rgb(44, 62, 80);">Comparable 接口的定义非常简单，源码如下所示。</font>

```plain
public interface Comparable<T> {
    int compareTo(T t);
}
```

<font style="color:rgb(44, 62, 80);">如果一个类实现了 Comparable 接口（只需要干一件事，重写</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">compareTo()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法），就可以按照自己制定的规则将由它创建的对象进行比较。下面给出一个例子。</font>

```plain
public class Cmower implements Comparable<Cmower> {
    private int age;
    private String name;

    public Cmower(int age, String name) {
        this.age = age;
        this.name = name;
    }

    @Override
    public int compareTo(Cmower o) {
        return this.getAge() - o.getAge();
    }

    public static void main(String[] args) {
        Cmower wanger = new Cmower(19,"沉默王二");
        Cmower wangsan = new Cmower(16,"沉默王三");

        if (wanger.compareTo(wangsan) < 0) {
            System.out.println(wanger.getName() + "比较年轻有为");
        } else {
            System.out.println(wangsan.getName() + "比较年轻有为");
        }
    }
}
```

<font style="color:rgb(44, 62, 80);">在上面的示例中，我创建了一个 Cmower 类，它有两个字段：age 和 name。Cmower 类实现了 Comparable 接口，并重写了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">compareTo()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

<font style="color:rgb(44, 62, 80);">程序输出的结果是“沉默王三比较年轻有为”，因为他比沉默王二小三岁。这个结果有什么凭证吗？</font>

<font style="color:rgb(44, 62, 80);">凭证就在于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">compareTo()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，该方法的返回值可能为负数，零或者正数，代表的意思是该对象按照排序的规则小于、等于或者大于要比较的对象。如果指定对象的类型与此对象不能进行比较，则引发</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ClassCastException</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">异常（自从有了</font>[<font style="color:rgb(44, 62, 80);">泛型</font>](https://javabetter.cn/basic-extra-meal/generic.html)<font style="color:rgb(44, 62, 80);">，这种情况就少有发生了）。</font>

### <font style="color:rgb(44, 62, 80);">Comparator</font>

<font style="color:rgb(44, 62, 80);">Comparator 接口的定义相比较于 Comparable 就复杂的多了，不过，核心的方法只有两个，来看一下源码。</font>

```plain
public interface Comparator<T> {
    int compare(T o1, T o2);
    boolean equals(Object obj);
}
```

<font style="color:rgb(44, 62, 80);">第一个方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">compare(T o1, T o2)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的返回值可能为负数，零或者正数，代表的意思是第一个对象小于、等于或者大于第二个对象。</font>

<font style="color:rgb(44, 62, 80);">第二个方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">equals(Object obj)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">需要传入一个 Object 作为参数，并判断该 Object 是否和 Comparator 保持一致。</font>

<font style="color:rgb(44, 62, 80);">有时候，我们想让类保持它的原貌，不想主动实现 Comparable 接口，但我们又需要它们之间进行比较，该怎么办呢？</font>

<font style="color:rgb(44, 62, 80);">Comparator 就派上用场了，来看一下示例。</font>

#### <font style="color:rgb(44, 62, 80);">原封不动的 Cmower 类。</font>

```plain
public class Cmower  {
    private int age;
    private String name;

    public Cmower(int age, String name) {
        this.age = age;
        this.name = name;
    }
}
```

<font style="color:rgb(44, 62, 80);">Cmower 类有两个字段：age 和 name，意味着该类可以按照 age 或者 name 进行排序。</font>

#### <font style="color:rgb(44, 62, 80);">再来看 Comparator 接口的实现类。</font>

```plain
public class CmowerComparator implements Comparator<Cmower> {
    @Override
    public int compare(Cmower o1, Cmower o2) {
        return o1.getAge() - o2.getAge();
    }
}
```

<font style="color:rgb(44, 62, 80);">按照 age 进行比较。当然也可以再实现一个比较器，按照 name 进行自然排序，示例如下。</font>

```plain
public class CmowerNameComparator implements Comparator<Cmower> {
    @Override
    public int compare(Cmower o1, Cmower o2) {
        if (o1.getName().hashCode() < o2.getName().hashCode()) {
            return -1;
        } else if (o1.getName().hashCode() == o2.getName().hashCode()) {
            return 0;
        }
        return 1;
    }
}
```

#### <font style="color:rgb(44, 62, 80);">再来看测试类。</font>

```plain
Cmower wanger = new Cmower(19,"沉默王二");
Cmower wangsan = new Cmower(16,"沉默王三");
Cmower wangyi = new Cmower(28,"沉默王一");

List<Cmower> list = new ArrayList<>();
list.add(wanger);
list.add(wangsan);
list.add(wangyi);

list.sort(new CmowerComparator());

for (Cmower c : list) {
    System.out.println(c.getName());
}
```

<font style="color:rgb(44, 62, 80);">创建了三个对象，age 不同，name 不同，并把它们加入到了 List 当中。然后使用 List 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">sort()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法进行排序，来看一下输出的结果。</font>

```plain
沉默王三
沉默王二
沉默王一
```

<font style="color:rgb(44, 62, 80);">这意味着沉默王三的年纪比沉默王二小，排在第一位；沉默王一的年纪比沉默王二大，排在第三位。和我们的预期完全符合。</font>

<font style="color:rgb(44, 62, 80);">借此机会，再来看一下 sort 方法的源码：</font>

```plain
public void sort(Comparator<? super E> c) {
    // 保存当前队列的 modCount 值，用于检测 sort 操作是否非法
    final int expectedModCount = modCount;
    // 调用 Arrays.sort 对 elementData 数组进行排序，使用传入的比较器 c
    Arrays.sort((E[]) elementData, 0, size, c);
    // 检查操作期间 modCount 是否被修改，如果被修改则抛出并发修改异常
    if (modCount != expectedModCount) {
        throw new ConcurrentModificationException();
    }
    // 增加 modCount 值，表示队列已经被修改过
    modCount++;
}
```

<font style="color:rgb(44, 62, 80);">可以看到，参数就是一个 Comparator 接口，并且使用了</font>
[<font style="color:rgb(44, 62, 80);">泛型</font>](https://javabetter.cn/basic-extra-meal/generic.html)
<font style="color:rgb(44, 62, 80);"> </font>
`Comparator<? super E> c`
<font style="color:rgb(44, 62, 80);">。</font>

### <font style="color:rgb(44, 62, 80);">到底该用哪一个？</font>

<font style="color:rgb(44, 62, 80);">通过上面的两个例子可以比较出 Comparable 和 Comparator 两者之间的区别：</font>

+ <font style="color:rgb(44, 62, 80);">一个类实现了 Comparable 接口，意味着该类的对象可以直接进行比较（排序），但比较（排序）的方式只有一种，很单一。</font>
+ <font style="color:rgb(44, 62, 80);">一个类如果想要保持原样，又需要进行不同方式的比较（排序），就可以定制比较器（实现 Comparator 接口）。</font>
+ <font style="color:rgb(44, 62, 80);">Comparable 接口在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">java.lang</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">包下，而</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Comparator</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">java.util</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">包下，算不上是亲兄弟，但可以称得上是表（堂）兄弟。</font>

<font style="color:rgb(44, 62, 80);">举个不恰当的例子。我想从洛阳出发去北京看长城，体验一下好汉的感觉，要么坐飞机，要么坐高铁；但如果是孙悟空的话，翻个筋斗就到了。我和孙悟空之间有什么区别呢？</font>

<font style="color:rgb(44, 62, 80);">孙悟空自己实现了 Comparable 接口（他那年代也没有飞机和高铁，没得选），而我可以借助 Comparator 接口（现代化的交通工具）。</font>

<font style="color:rgb(44, 62, 80);">好了，关于 Comparable 和 Comparator 我们就先聊这么多。总而言之，如果对象的排序需要基于自然顺序，请选择 </font>`<font style="color:rgb(44, 62, 80);">Comparable</font>`<font style="color:rgb(44, 62, 80);">，如果需要按照对象的不同属性进行排序，请选择 </font>`<font style="color:rgb(44, 62, 80);">Comparator</font>`<font style="color:rgb(44, 62, 80);">。</font>

## WeakHashMap 详解

<font style="color:rgb(44, 62, 80);">在Java中，我们一般都会使用到Map，比如</font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);">这样的具体实现。更高级一点，我们可能会使用WeakHashMap。</font>

<font style="color:rgb(44, 62, 80);">WeakHashMap其实和HashMap大多数行为是一样的，只是WeakHashMap不会阻止GC回收key对象（不是value），那么WeakHashMap是怎么做到的呢，这就是我们研究的主要问题。</font>

<font style="color:rgb(44, 62, 80);">在开始WeakHashMap之前，我们先要对弱引用有一定的了解。</font>

<font style="color:rgb(44, 62, 80);">在Java中，有四种引用类型</font>

+ <font style="color:rgb(44, 62, 80);">强引用(Strong Reference)，我们正常编码时默认的引用类型，强应用之所以为强，是因为如果一个对象到GC Roots强引用可到达，就可以阻止GC回收该对象</font>
+ <font style="color:rgb(44, 62, 80);">软引用（Soft Reference）阻止GC回收的能力相对弱一些，如果是软引用可以到达，那么这个对象会停留在内存更时间上长一些。当内存不足时垃圾回收器才会回收这些软引用可到达的对象</font>
+ <font style="color:rgb(44, 62, 80);">弱引用（WeakReference）无法阻止GC回收，如果一个对象时弱引用可到达，那么在下一个GC回收执行时，该对象就会被回收掉。</font>
+ <font style="color:rgb(44, 62, 80);">虚引用（Phantom Reference）十分脆弱，它的唯一作用就是当其指向的对象被回收之后，自己被加入到引用队列，用作记录该引用指向的对象已被销毁</font>

<font style="color:rgb(44, 62, 80);">这其中还有一个概念叫做引用队列(Reference Queue)</font>

+ <font style="color:rgb(44, 62, 80);">一般情况下，一个对象标记为垃圾（并不代表回收了）后，会加入到引用队列。</font>
+ <font style="color:rgb(44, 62, 80);">对于虚引用来说，它指向的对象会只有被回收后才会加入引用队列，所以可以用作记录该引用指向的对象是否回收。</font>

### [<font style="color:rgb(44, 62, 80);">WeakHashMap如何不阻止对象回收呢</font>](https://javabetter.cn/collection/WeakHashMap.html#weakhashmap%E5%A6%82%E4%BD%95%E4%B8%8D%E9%98%BB%E6%AD%A2%E5%AF%B9%E8%B1%A1%E5%9B%9E%E6%94%B6%E5%91%A2)

```plain
private static final class Entry<K, V> extends WeakReference<K> implements
  Map.Entry<K, V> {
  int hash;
  boolean isNull;
  V value;
  Entry<K, V> next;
  interface Type<R, K, V> {
  R get(Map.Entry<K, V> entry);
  }
  Entry(K key, V object, ReferenceQueue<K> queue) {
  super(key, queue);
  isNull = key == null;
  hash = isNull ? 0 : key.hashCode();
  value = object;
  }
```

<font style="color:rgb(44, 62, 80);">如源码所示，</font>

+ <font style="color:rgb(44, 62, 80);">WeakHashMap的Entry继承了WeakReference。</font>
+ <font style="color:rgb(44, 62, 80);">其中Key作为了WeakReference指向的对象</font>
+ <font style="color:rgb(44, 62, 80);">因此WeakHashMap利用了WeakReference的机制来实现不阻止GC回收Key</font>

### [<font style="color:rgb(44, 62, 80);">如何删除被回收的key数据呢</font>](https://javabetter.cn/collection/WeakHashMap.html#%E5%A6%82%E4%BD%95%E5%88%A0%E9%99%A4%E8%A2%AB%E5%9B%9E%E6%94%B6%E7%9A%84key%E6%95%B0%E6%8D%AE%E5%91%A2)

<font style="color:rgb(44, 62, 80);">在Javadoc中关于WeakHashMap有这样的描述，当key不再引用时，其对应的key/value也会被移除。</font>

<font style="color:rgb(44, 62, 80);">那么是如何移除的呢，这里我们通常有两种假设策略</font>

+ <font style="color:rgb(44, 62, 80);">当对象被回收的时候，进行通知</font>
+ <font style="color:rgb(44, 62, 80);">WeakHashMap轮询处理时效的Entry</font>

<font style="color:rgb(44, 62, 80);">而WeakHashMap采用的是轮询的形式，在其put/get/size等方法调用的时候都会预先调用一个poll的方法，来检查并删除失效的Entry</font>

```plain
void poll() {
  Entry<K, V> toRemove;
  while ((toRemove = (Entry<K, V>) referenceQueue.poll()) != null) {
  removeEntry(toRemove);
  Log.d(LOGTAG, "removeEntry=" + toRemove.value);
  }
 }
```

<font style="color:rgb(44, 62, 80);">为什么没有使用看似更好的通知呢，我想是因为在Java中没有一个可靠的通知回调，比如大家常说的finalize方法，其实也不是标准的，不同的JVM可以实现不同，甚至是不调用这个方法。</font>

<font style="color:rgb(44, 62, 80);">当然除了单纯的看源码，进行合理的验证是检验分析正确的一个重要方法。</font>

<font style="color:rgb(44, 62, 80);">这里首先，我们定义一个MyObject类，处理一下finalize方法（在我的测试机上可以正常调用，仅仅做为辅助验证手段）</font>

```plain
class MyObject(val id: String) : Any() {
  protected fun finalize() {
  Log.i("MainActivity", "Object($id) finalize method is called")
  }
 }
```

<font style="color:rgb(44, 62, 80);">然后是调用者的代码，如下</font>

```plain
private val weakHashMap = WeakHashMap<Any, Int>()
 var count : Int = 0
 override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_main)
  setSupportActionBar(toolbar)
  dumpWeakInfo()
  fab.setOnClickListener { view ->
  //System.gc()// this seldom works use Android studio force gc stop
  weakHashMap.put(MyObject(count.toString()), count)
  count ++
  dumpWeakInfo()
  Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
  .setAction("Action", null).show()
  }
 }
  fun dumpWeakInfo() {
  Log.i("MainActivity", "dumpWeakInfo weakInfo.size=${weakHashMap.size}")
 }
```

<font style="color:rgb(44, 62, 80);">我们按照如下操作</font>

+ <font style="color:rgb(44, 62, 80);">点击fab控件，每次对WeakhashMap对象增加一个Entry，并打印WeakHashMap的size 执行3此</font>
+ <font style="color:rgb(44, 62, 80);">在没有强制触发GC时，WeakHashMap对象size一直会增加</font>
+ <font style="color:rgb(44, 62, 80);">手动出发Force GC，我们会看到MyObject有finalize方法被调用</font>
+ <font style="color:rgb(44, 62, 80);">再次点击fab空间，然后输出的WeakHashMap size急剧减少。</font>
+ <font style="color:rgb(44, 62, 80);">同样我们收到在WeakHashMap增加的日志也会输出</font>

```plain
I/MainActivity(10202): dumpWeakInfo weakInfo.size=1
 I/MainActivity(10202): dumpWeakInfo weakInfo.size=2
 I/MainActivity(10202): dumpWeakInfo weakInfo.size=3
 I/MainActivity(10202): Object(2) finalize method is called
 I/MainActivity(10202): Object(1) finalize method is called
 I/MainActivity(10202): Object(0) finalize method is called
 I/WeakHashMap(10202): removeEntry=2
 I/WeakHashMap(10202): removeEntry=0
 I/WeakHashMap(10202): removeEntry=1
 I/MainActivity(10202): dumpWeakInfo weakInfo.size=1
```

<font style="color:rgb(44, 62, 80);">注意：System.gc()并不一定可以工作,建议使用Android Studio的Force GC</font>

<font style="color:rgb(44, 62, 80);">完整的测试代码可以访问这里 </font>[<font style="color:rgb(44, 62, 80);">https://github.com/androidyue/WeakHashMapSample</font>](https://github.com/androidyue/WeakHashMapSample)

## 
打开idea 按ctrl+n 输入ArrayList

点All places


[//]: # (<img referrerpolicy="no-referrer" src="%E9%9B%86%E5%90%88%E8%BF%9B%E9%98%B6/image-20230227224905146.png" />)


代码有点多 可以把源码大纲罗列出来：



alt + 7



ctrl + F12



## <font style="color:rgb(0, 0, 0);">compute 简介(</font><font style="color:rgb(0, 0, 0);">Java 8 新增</font><font style="color:rgb(0, 0, 0);">)</font>

<font style="color:rgb(0, 0, 0);">如下所示，Java 8 在 </font>**<font style="color:rgb(0, 0, 0);">Map 和 ConcurrentMap</font>**<font style="color:rgb(0, 0, 0);"> 接口中都增加了 3 个 </font><font style="color:rgb(192, 52, 29);background-color:rgb(251, 229, 225);">compute</font><font style="color:rgb(0, 0, 0);"> 方法，说明也是</font>**<font style="color:rgb(0, 0, 0);">支持多线程并发安全操作</font>**<font style="color:rgb(0, 0, 0);">的。 </font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1716687683469-661c0e36-465a-475a-9e9b-fbdb5a94ce96.png" />



<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1716687683472-0bc80f7e-5baf-4132-b9c4-fb04bee3dc91.png" />


**<font style="color:rgb(0, 0, 0);">这三个方法的区别：</font>**

+ <font style="color:rgb(0, 0, 0);">compute：计算并更新值</font>
+ <font style="color:rgb(0, 0, 0);">computeIfAbsent：Value不存在时才计算</font>
+ <font style="color:rgb(0, 0, 0);">computeIfPresent：Value存在时才计算</font>

### <font style="color:rgb(0, 0, 0);">compute有啥用?</font>

<font style="color:rgb(0, 0, 0);">先看看没用 Java 8 的一个小示例：</font>

```typescript
private static void preJava8() {
    List<String> animals = Arrays.asList("dog", "cat", "cat", "dog", "fish", "dog");
    Map<String, Integer> map = new HashMap<>();
    for(String animal : animals){
        Integer count = map.get(animal);
        map.put(animal, count == null ? 1 : ++count);
    }
    System.out.println(map);
}
```

<font style="color:rgb(0, 0, 0);">输出：</font>

<font style="color:rgb(0, 0, 0);">这是一个统计一个列表中每个动物的数量，代码再怎么精简都需要一步</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(192, 52, 29);background-color:rgb(251, 229, 225);">get</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 0, 0);">操作，判断集合中是否有元素再确定是初始化：1，还是需要 +1。</font>

<font style="color:rgb(0, 0, 0);">很多时候，这个</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(192, 52, 29);background-color:rgb(251, 229, 225);">get</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 0, 0);">操作显然是毫无必要的，所以 Java 8 提供了 3 个</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(192, 52, 29);background-color:rgb(251, 229, 225);">compute</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 0, 0);">方法，来看看怎么用吧！</font>

**<font style="color:rgb(0, 0, 0);">Java 8 compute 实现方式：</font>**

```typescript
private static void inJava8() {
    List<String> animals = Arrays.asList("dog", "cat", "cat", "dog", "fish", "dog");
    Map<String, Integer> map = new HashMap<>();
    for(String animal : animals){
        map.compute(animal, (k, v) -> v == null ? 1 : ++v);
    }
    System.out.println(map);
}
```

<font style="color:rgb(0, 0, 0);">使用 </font><font style="color:rgb(192, 52, 29);background-color:rgb(251, 229, 225);">compute</font><font style="color:rgb(0, 0, 0);"> 方法一行搞定，省去了需要使用 </font><font style="color:rgb(192, 52, 29);background-color:rgb(251, 229, 225);">get</font><font style="color:rgb(0, 0, 0);"> 取值再判断的冗余操作，直接就可以获取元素值并计算更新</font>

### <font style="color:rgb(0, 0, 0);">compute 源码分析</font>

<font style="color:rgb(0, 0, 0);">这还是一个默认方法，为什么是默认方法，也是为了不改动其所有实现类</font>

```java
default V compute(K key,
        BiFunction<? super K, ? super V, ? extends V> remappingFunction) {
        
    // 函数式接口不能为空    
    Objects.requireNonNull(remappingFunction);
    
    // 获取旧值
    V oldValue = get(key);

    // 获取计算的新值
    V newValue = remappingFunction.apply(key, oldValue);
    
    if (newValue == null) { // 新值为空
        // delete mapping
        if (oldValue != null || containsKey(key)) { // 旧值存在时
            // 移除该键值
            remove(key);
            return null;
        } else {
            // nothing to do. Leave things as they were.
            return null;
        }
    } else { // 新值不为空
        // 添加或者覆盖旧值
        put(key, newValue);
        return newValue;
    }
}
```

<font style="color:rgb(0, 0, 0);">实现逻辑其实也很简单，其实就是结合了 Java 8 的函数式编程让代码变得更简单了，Java 也越来越聪明了。</font>

<font style="color:rgb(0, 0, 0);">另外两个方法我就不演示了，在特定的场合肯定也肯定特别有用，大家知道就好，需要的时候要知道拿来用。</font>

##### <font style="color:rgb(0, 0, 0);">方法定义</font>

```java
/* 
    * @since 1.8
     */
    default V computeIfAbsent(K key,
            Function<? super K, ? extends V> mappingFunction) {
        Objects.requireNonNull(mappingFunction);
        V v;
        if ((v = get(key)) == null) {
            V newValue;
            if ((newValue = mappingFunction.apply(key)) != null) {
                put(key, newValue);
                return newValue;
            }
        }

        return v;
    }
```

<font style="color:rgb(0, 0, 0);">可以看到，该方法为java8 新增，具体怎么使用呢？下面以几个例子来说明下：</font>

<font style="color:rgb(0, 0, 0);">java8 之前 我们判断 map中一个对象是否存在，如果不存在实例化 一个新的，实现如下：</font>

```java
public class ComputeIfAbsentTest01 {
    
    public static void main(String[] args) {

        List<String> list;

        Map<String, List> map = Maps.newHashMap();

        //java8 之前操作
        list = map.get("list");
        if (list == null) {
            list = new ArrayList<>();
        }
        list.add("Hello");

    }
}
```

<font style="color:rgb(0, 0, 0);">必须首先获取然后再做一步非空判断，那么 java8之后我们该如何实现了呢？</font>

```java
public class ComputeIfAbsentTest02 {
    public static void main(String[] args) {

        List<String> list;

        Map<String, List> map = Maps.newHashMap();

        //java8 之后的骚操作
        list = map.computeIfAbsent("list", (key) -> new ArrayList<>());
        list.add("World");

    }
}
```

<font style="color:rgb(0, 0, 0);">一行代码搞定 哈哈哈， 怎么理解上述的执行过程呢，下面来解读一下</font>

```Java
If the specified key is not already associated with a value (or is mapped to null, attempts to compute its value using the given mapping function and enters it into this map unless null.

如果指定的key 不存在关联的值或者返回 Null,那么就会试着去执行传入的mappingFunction。

对照上面的例子就是，如果从map中获取对应键值 list ，获取不到则执行Function, Function 的结果放入map中，并将该结果返回。

default V computeIfAbsent(K key,Function<? super K, ? extends V> mappingFunction) {
        Objects.requireNonNull(mappingFunction);
        V v;
        //获取的的value不存在
        if ((v = get(key)) == null) {
            V newValue;
            //对传入key 应用 Function
            if ((newValue = mappingFunction.apply(key)) != null) {
                //新value放入map
                put(key, newValue);
                //返回新的value
                return newValue;
            }
        }
        //map中存在则直接返回
        return v;
    }
```

<font style="color:rgb(0, 0, 0);">简单的应用场景：我们经常会遇到统计的问题，加入现在有一个字符串集合，需要统计其中字符串出现的次数，该如何实现呢？参照如下代码：</font>

```java
public class ComputeIfAbsentTest03 {
    
    public static void main(String[] args) {

        //java8 实现计算功能统计字符串出现次数
        Map<String, AtomicInteger> countMap = Maps.newHashMap();
        List<String> source = Arrays.asList("hello", "world", "hello", "welcome", "hello", "hello", "welcome", "simon");
        for (String s : source) {
            countMap.computeIfAbsent(s, key -> new AtomicInteger()).getAndIncrement();
        }
        System.out.println(countMap);
    }
}
```




