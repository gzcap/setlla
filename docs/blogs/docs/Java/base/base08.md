---
title: Java基础
date: 2024/09/28
tags:
  - Java
categories:
  - Java
hideComments: false
---

<font style="color:rgb(77, 77, 77);">我们都知道，在 Java 8 新增了一个类 - </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);"> ， 主要是用来解决程序中常见的 </font>`<font style="color:rgb(77, 77, 77);">NullPointerException</font>`<font style="color:rgb(77, 77, 77);">异常问题。但是在实际开发过程中很多人都是在一知半解的使用 </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">，类似 </font>`<font style="color:rgb(77, 77, 77);">if (userOpt.isPresent()){...}</font>`<font style="color:rgb(77, 77, 77);">这样的代码随处可见。如果是这样我更愿意看到老老实实的 null 判断，这样强行使用 </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">反而增加了代码的复杂度。</font>

<font style="color:rgb(77, 77, 77);">今天我给大家分享的这篇文章，便是 Java Optional 的一些</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Best Practise</font>`<font style="color:rgb(77, 77, 77);"> </font><font style="color:rgb(77, 77, 77);">和一些反面的</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Bad Practice</font>`<font style="color:rgb(77, 77, 77);">，以供大家参考。</font>

### <font style="color:rgb(79, 79, 79);">来自作者的说明</font>

<font style="color:rgb(77, 77, 77);">首先我们来看一下</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">的作者 Brian Goetz 对这个 API 的说明：</font>

> <font style="color:rgb(51, 51, 51);background-color:rgb(238, 240, 244);">“</font>
>
> <font style="color:rgb(79, 79, 79);background-color:rgb(238, 240, 244);">Our intention was to provide a limited mechanism for library method return types where there needed to be a clear way to represent "no result", and using</font><font style="color:rgb(79, 79, 79);background-color:rgb(238, 240, 244);"> </font>`<font style="color:rgb(79, 79, 79);background-color:rgb(238, 240, 244);">null</font>`<font style="color:rgb(79, 79, 79);background-color:rgb(238, 240, 244);"> </font><font style="color:rgb(79, 79, 79);background-color:rgb(238, 240, 244);">for such was overwhelmingly likely to cause errors.</font>
>
> <font style="color:rgb(51, 51, 51);background-color:rgb(238, 240, 244);">”</font>

<font style="color:rgb(77, 77, 77);">大意为，为了避免</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">null</font>`<font style="color:rgb(77, 77, 77);">带来的错误，我们提供了一个可以明确表示空值的有限的机制。</font>

### <font style="color:rgb(79, 79, 79);">基础理解</font>

<font style="color:rgb(77, 77, 77);">首先，</font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">是一个</font>**<font style="color:rgb(77, 77, 77);">容器，用于放置可能为空的值</font>**<font style="color:rgb(77, 77, 77);">，它可以合理而优雅的处理 </font>`<font style="color:rgb(77, 77, 77);">null</font>`<font style="color:rgb(77, 77, 77);">。众所周知，</font>`<font style="color:rgb(77, 77, 77);">null</font>`<font style="color:rgb(77, 77, 77);">在编程历史上极具话题性，号称是</font>_<font style="color:rgb(77, 77, 77);">计算机历史上最严重的错误</font>_<font style="color:rgb(77, 77, 77);">，感兴趣可以读一下这篇文章：THE WORST MISTAKE OF COMPUTER SCIENCE，这里暂且不做过多讨论。在 Java 1.8 之前的版本，没有可以用于表示 </font>`<font style="color:rgb(77, 77, 77);">null</font>`<font style="color:rgb(77, 77, 77);">官方 API，如果你足够的谨慎，你可能需要常常在代码中做如下的判断：</font>

```go
if (null != user) {
    //doing something
}

if (StringUtil.isEmpty(string)) {
    //doing something
}
```

<font style="color:rgb(77, 77, 77);">确实，返回值是</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">null</font>`<font style="color:rgb(77, 77, 77);">的情况太多了，一不小心，就会产生 NPE，接踵而来的就是应用运行终止，产品抱怨，用户投诉。</font>

<font style="color:rgb(77, 77, 77);">1.8 之后，jdk 新增了</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">来表示空结果。其实本质上什么也没变，只是增加了一个表达方式。</font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">表示空的静态方法为</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional.empty()</font>`<font style="color:rgb(77, 77, 77);">，跟</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">null</font>`<font style="color:rgb(77, 77, 77);">有什么本质区别吗？其实没有。翻看它的实现，</font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">中的 value 就是</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">null</font>`<font style="color:rgb(77, 77, 77);">，只不过包了一层</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">，所以说它其实是个容器。用之后的代码可能长这样：</font>

```go
// 1
Optional<User> optionalUser = RemoteService.getUser();

if (!optionalUser.isPresent()) {
   //doing something 
}

User user = optionalUser.get();

// 2
User user = optionalUser.get().orElse(new User());
```

<font style="color:rgb(77, 77, 77);">看起来，好像比之前好了一些，至少看起来没那么笨。但如果采用写法 1，好像更啰嗦了。</font>

<font style="color:rgb(77, 77, 77);">如果你对 kotlin 稍有了解，kotlin 的非空类型是他们大肆宣传的"卖点"之一，通过</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">var param!!</font>`<font style="color:rgb(77, 77, 77);">在使用它的地方做强制的空检查，否则无法通过编译，最大程度上减少了 NPE。其实在我看来，</font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">的方式更加优雅和灵活。同时，</font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">也可能会带来一些误解。</font>

<font style="color:rgb(77, 77, 77);">下面先说一些在我看来不合适的使用方式：</font>

### <font style="color:rgb(79, 79, 79);">Bad Practice</font>

##### <font style="color:rgb(79, 79, 79);">1. 直接使用 isPresent() 进行 if 检查</font>

<font style="color:rgb(77, 77, 77);">这个直接参考上面的例子，用</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">if</font>`<font style="color:rgb(77, 77, 77);">判断和 1.8 之前的写法并没有什么区别，反而返回值包了一层</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">，增加了代码的复杂性，没有带来任何实质的收益。其实</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">isPresent()</font>`<font style="color:rgb(77, 77, 77);">一般用于流处理的结尾，用于判断是否符合条件。</font>

```go
list.stream()
    .filer(x -> Objects.equals(x,param))
    .findFirst()
    .isPresent()
```

##### <font style="color:rgb(79, 79, 79);">2. 在方法参数中使用 Optional</font>

<font style="color:rgb(77, 77, 77);">我们用一个东西之前得想明白，这东西是为解决什么问题而诞生的。</font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">直白一点说就是为了表达可空性，如果方法参数可以为空，为何不重载呢？包括使用构造函数也一样。重载的业务表达更加清晰直观。</font>

```go
//don't write method like this
public void getUser(long uid,Optional<Type> userType);

//use Overload
public void getUser(long uid) {
    getUser(uid,null);
}

public void getUser(long uid,UserType userType) {
    //doing something
}
```

##### <font style="color:rgb(79, 79, 79);">3. 直接使用 Optional.get</font>

`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">不会帮你做任何的空判断或者异常处理，如果直接在代码中使用</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional.get()</font>`<font style="color:rgb(77, 77, 77);">和不做任何空判断一样，十分危险。这种可能会出现在那种所谓的着急上线，着急交付，对</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">也不是很熟悉，直接就用了。这里多说一句，可能有人会反问了：甲方/业务着急，需求又多，哪有时间给他去做优化啊？因为我在现实工作中遇到过，但这两者并不矛盾，因为代码行数上差别并不大，只要自己平时保持学习，都是信手拈来的东西。</font>

##### <font style="color:rgb(79, 79, 79);">4. 使用在 POJO 中</font>

<font style="color:rgb(77, 77, 77);">估计很少有人这么用：</font>

```go
public class User {
    private int age;
    private String name;
    private Optional<String> address;
}
```

<font style="color:rgb(77, 77, 77);">这样的写法将会给序列化带来麻烦，</font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">本身并没有实现序列化，现有的 JSON 序列化框架也没有对此提供支持的。</font>

##### <font style="color:rgb(79, 79, 79);">5. 使用在注入的属性中</font>

<font style="color:rgb(77, 77, 77);">这种写法估计用的人会更少，但不排除有脑洞的。</font>

```go
public class CommonService {
    private Optional<UserService> userService;

    public User getUser(String name) {
        return userService.ifPresent(u -> u.findByName(name));
    }
}
```

<font style="color:rgb(77, 77, 77);">首先依赖注入大多在 spring 的框架之下，直接使用</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">@Autowired</font>`<font style="color:rgb(77, 77, 77);">很方便。但如果使用以上的写法，如果</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">userService</font>`<font style="color:rgb(77, 77, 77);"> </font><font style="color:rgb(77, 77, 77);">set 失败了，程序就应该终止并报异常，并不是无声无息，让其看起来什么问题都没有。</font>

### <font style="color:rgb(79, 79, 79);">Best and Pragmatic Practice</font>

#### <font style="color:rgb(79, 79, 79);">API</font>

<font style="color:rgb(77, 77, 77);">在说最佳实践前，让我们来看一下</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">都提供了哪些常用 API。</font>

##### <font style="color:rgb(79, 79, 79);">1. empty()</font>

<font style="color:rgb(77, 77, 77);">返回一个</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">容器对象，而不是 null。建议常用</font><font style="color:rgb(77, 77, 77);">⭐⭐⭐⭐</font>

##### <font style="color:rgb(79, 79, 79);">2. of(T value)</font>

<font style="color:rgb(77, 77, 77);">创建一个</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">对象，如果 value 是 null，则抛出 NPE。不建议用</font><font style="color:rgb(77, 77, 77);">⭐⭐</font>

##### <font style="color:rgb(79, 79, 79);">3. ofNullable(T value)</font>

<font style="color:rgb(77, 77, 77);">同上，创建一个</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">对象，但 value 为空时返回</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional.empty()</font>`<font style="color:rgb(77, 77, 77);">。推荐使用</font><font style="color:rgb(77, 77, 77);">⭐⭐⭐⭐⭐</font>

##### <font style="color:rgb(79, 79, 79);">4. get()</font>

<font style="color:rgb(77, 77, 77);">返回</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">中包装的值，在判空之前，千万不要直接使用！尽量别用！</font><font style="color:rgb(77, 77, 77);">⭐</font>

##### <font style="color:rgb(79, 79, 79);">5. orElse(T other)</font>

<font style="color:rgb(77, 77, 77);">同样是返回</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">中包装的值，但不同的是当取不到值时，返回你指定的 default。看似很好，但不建议用</font><font style="color:rgb(77, 77, 77);">⭐⭐</font>

##### <font style="color:rgb(79, 79, 79);">6. orElseGet(Supplier<? extends T> other)</font>

<font style="color:rgb(77, 77, 77);">同样是返回</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">中包装的值，取不到值时，返回你指定的 default。看似和 5 一样，但推荐使用</font><font style="color:rgb(77, 77, 77);">⭐⭐⭐⭐⭐</font>

##### <font style="color:rgb(79, 79, 79);">7. orElseThrow(Supplier<? extends X> exceptionSupplier)</font>

<font style="color:rgb(77, 77, 77);">返回</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">中包装的值，取不到值时抛出指定的异常。阻塞性业务场景推荐使用</font><font style="color:rgb(77, 77, 77);">⭐⭐⭐⭐</font>

##### <font style="color:rgb(79, 79, 79);">8. isPresent()</font>

<font style="color:rgb(77, 77, 77);">判断</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">中是否有值，返回 boolean，某些情况下很有用，但尽量不要用在 if 判断体中。可以用</font><font style="color:rgb(77, 77, 77);">⭐⭐⭐</font>

##### <font style="color:rgb(79, 79, 79);">9. ifPresent(Consumer<? super T> consumer)</font>

<font style="color:rgb(77, 77, 77);">判断</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">中是否有值，有值则执行 consumer，否则什么都不干。日常情况下请使用这个</font><font style="color:rgb(77, 77, 77);">⭐⭐⭐⭐</font>

#### <font style="color:rgb(79, 79, 79);">TIPS</font>

<font style="color:rgb(77, 77, 77);">首先是一些基本原则：</font>

+ <font style="color:rgb(77, 77, 77);">不要声明任何</font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">实例属性</font>
+ <font style="color:rgb(77, 77, 77);">不要在任何 setter 或者构造方法中使用</font>`<font style="color:rgb(77, 77, 77);">Optional</font>`
+ `<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">属于返回类型，在业务返回值或者远程调用中使用</font>

##### <font style="color:rgb(79, 79, 79);">1. 业务上需要空值时，不要直接返回 null，使用</font><font style="color:rgb(79, 79, 79);"> </font>`**<font style="color:rgb(79, 79, 79);">Optional.empty()</font>**`

```go
public Optional<User> getUser(String name) {
    if (StringUtil.isNotEmpty(name)) {
        return RemoteService.getUser(name);
    } 
    return Optional.empty();
}
```

##### <font style="color:rgb(79, 79, 79);">2. 使用 orElseGet()</font>

<font style="color:rgb(77, 77, 77);">获取 value 有三种方式：</font>`<font style="color:rgb(77, 77, 77);">get()</font>`<font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">orElse()</font>`<font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">orElseGet()</font>`<font style="color:rgb(77, 77, 77);">。这里推荐在需要用到的地方只用</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">orElseGet()</font>`<font style="color:rgb(77, 77, 77);">。</font>

<font style="color:rgb(77, 77, 77);">首先，</font>`<font style="color:rgb(77, 77, 77);">get()</font>`<font style="color:rgb(77, 77, 77);">不能直接使用，需要结合判空使用。这和</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">!=null</font>`<font style="color:rgb(77, 77, 77);">其实没多大区别，只是在表达和抽象上有所改善。</font>

<font style="color:rgb(77, 77, 77);">其次，为什么不推荐</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">orElse()</font>`<font style="color:rgb(77, 77, 77);">呢？因为</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">orElse()</font>`<font style="color:rgb(77, 77, 77);">无论如何都会执行括号中的内容，</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">orElseGet()</font>`<font style="color:rgb(77, 77, 77);">只在主体 value 是空时执行，下面看个例子：</font>

```go
public String getName() {
    System.out.print("method called");
}

String name1 = Optional.of("String").orElse(getName()); //output: method called



String name2 = Optional.of("String").orElseGet(() -> getName()); //output:
```

<font style="color:rgb(77, 77, 77);">如果上面的例子</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">getName()</font>`<font style="color:rgb(77, 77, 77);">方法是一个远程调用，或者涉及大量的文件 IO，代价可想而知。</font>

<font style="color:rgb(77, 77, 77);">但</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">orElse()</font>`<font style="color:rgb(77, 77, 77);">就一无是处吗？并不是。</font>`<font style="color:rgb(77, 77, 77);">orElseGet()</font>`<font style="color:rgb(77, 77, 77);">需要构建一个</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Supplier</font>`<font style="color:rgb(77, 77, 77);">，如果只是简单的返回一个静态资源、字符串等等，直接返回静态资源即可。</font>

```go
public static final String USER_STATUS = "UNKNOWN";
...

public String findUserStatus(long id) {

    Optional<String> status = ... ; // 
    return status.orElse(USER_STATUS);
}

//不要这么写
public String findUserStatus(long id) {

    Optional<String> status = ... ; // 
    return status.orElse("UNKNOWN");//这样每次都会新建一个String对象
}
```

##### <font style="color:rgb(79, 79, 79);">3. 使用 orElseThrow()</font>

<font style="color:rgb(77, 77, 77);">这个针对阻塞性的业务场景比较合适，例如没有从上游获取到用户信息，下面的所有操作都无法进行，那此时就应该抛出异常。正常的写法是先判空，再手动 throw 异常，现在可以集成为一行：</font>

```go
public String findUser(long id) {



    Optional<User> user = remoteService.getUserById(id) ;



    return user.orElseThrow(IllegalStateException::new);



}
```

##### <font style="color:rgb(79, 79, 79);">4. 不为空则执行时，使用 ifPresent()</font>

<font style="color:rgb(77, 77, 77);">这点没有性能上的优势，但可以使代码更简洁：</font>

```go
//之前是这样的
if (status.isPresent()) {
    System.out.println("Status: " + status.get());
}

//现在
status.ifPresent(System.out::println);
```

##### <font style="color:rgb(79, 79, 79);">5. 不要滥用</font>

<font style="color:rgb(77, 77, 77);">有些简单明了的方法，完全没必要增加</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">来增加复杂性。</font>

```go
public String fetchStatus() {

    String status = getStatus() ;

    return Optional.ofNullable(status).orElse("PENDING");

}

//判断一个简单的状态而已
public String fetchStatus() {

    String status = ... ;
    return status == null ? "PENDING" : status;
}
```

<font style="color:rgb(77, 77, 77);">首先，null 可以作为集合的元素之一，它并不是非法的；其次，集合类型本身已经具备了完整的空表达，再去包装一层</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">也是徒增复杂，收益甚微。例如，map 已经有了</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">getOrDefault()</font>`<font style="color:rgb(77, 77, 77);">这样的类似</font><font style="color:rgb(77, 77, 77);"> </font>`<font style="color:rgb(77, 77, 77);">orElse()</font>`<font style="color:rgb(77, 77, 77);">的 API 了。</font>

### <font style="color:rgb(79, 79, 79);">总结</font>

`<font style="color:rgb(77, 77, 77);">Optional</font>`<font style="color:rgb(77, 77, 77);">的出现使 Java 对 null 的表达能力更近了一步，好马配好鞍，合理使用可以避免大量的 NPE，节省大量的人力物力。以上内容也是本人查询了很多资料，边学边写的产出，如有错漏之处，还请不吝指教。</font>



<font style="color:rgb(77, 77, 77);"></font>

![](https://cdn.nlark.com/yuque/0/2024/png/35376129/1721146106788-ada95772-d76e-413f-be1a-c1238bbed105.png)



# <font style="color:rgb(44, 62, 80);">Java 8 Optional最佳指南，优雅解决空指针</font>

---

**<font style="color:rgb(44, 62, 80);">此页内容</font>**

<font style="color:rgb(44, 62, 80);">想学习，永远都不晚，尤其是针对 Java 8 里面的好东西，Optional 就是其中之一，该类提供了一种用于表示可选值而非空引用的类级别解决方案。作为一名 Java 程序员，我真的是烦透了</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">NullPointerException（NPE）</font>](https://javabetter.cn/exception/npe.html)<font style="color:rgb(44, 62, 80);">，尽管和它熟得就像一位老朋友，知道它也是迫不得已——程序正在使用一个对象却发现这个对象的值为 null，于是 Java 虚拟机就怒发冲冠地把它抛了出来当做替罪羊。</font>

<font style="color:rgb(44, 62, 80);">当然了，我们程序员是富有责任心的，不会坐视不管，于是就有了大量的 null 值检查。尽管有时候这种检查完全没有必要，但我们已经习惯了例行公事。终于，Java 8 看不下去了，就引入了 Optional，以便我们编写的代码不再那么刻薄呆板。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/35376129/1724412397742-092defef-5ef0-4dbc-a821-c952de3aad55.png)

### <font style="color:rgb(44, 62, 80);">01、没有 Optional 会有什么问题</font>

<font style="color:rgb(44, 62, 80);">我们来模拟一个实际的应用场景。小王第一天上班，领导老马就给他安排了一个任务，要他从数据库中根据会员 ID 拉取一个会员的姓名，然后将姓名打印到控制台。虽然是新来的，但这个任务难不倒小王，于是他花了 10 分钟写下了这段代码：</font>

```plain
public class WithoutOptionalDemo {
    class Member {
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

    public static void main(String[] args) {
        Member mem = getMemberByIdFromDB();
        if (mem != null) {
            System.out.println(mem.getName());
        }
    }

    public static Member getMemberByIdFromDB() {
        // 当前 ID 的会员不存在
        return null;
    }
}
```

<font style="color:rgb(44, 62, 80);">由于当前 ID 的会员不存在，所以</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">getMemberByIdFromDB()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法返回了 null 来作为没有获取到该会员的结果，那就意味着在打印会员姓名的时候要先对 mem 判空，否则就会抛出 NPE 异常，不信？让小王把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">if (mem != null)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">去掉试试，控制台立马打印错误堆栈给你颜色看看。</font>

```plain
Exception in thread "main" java.lang.NullPointerException
	at com.cmower.dzone.optional.WithoutOptionalDemo.main(WithoutOptionalDemo.java:24)
```

### [<font style="color:rgb(44, 62, 80);">02、Optional 是如何解决这个问题的</font>](https://javabetter.cn/java8/optional.html#_02%E3%80%81optional-%E6%98%AF%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E8%BF%99%E4%B8%AA%E9%97%AE%E9%A2%98%E7%9A%84)

<font style="color:rgb(44, 62, 80);">小王把代码提交后，就兴高采烈地去找老马要新的任务了。本着虚心学习的态度，小王请求老马看一下自己的代码，于是老王就告诉他应该尝试一下 Optional，可以避免没有必要的 null 值检查。现在，让我们来看看小王是如何通过 Optional 来解决上述问题的。</font>

```plain
public class OptionalDemo {
    public static void main(String[] args) {
        Optional<Member> optional = getMemberByIdFromDB();
        optional.ifPresent(mem -> {
            System.out.println("会员姓名是：" + mem.getName());
        });
    }

    public static Optional<Member> getMemberByIdFromDB() {
        boolean hasName = true;
        if (hasName) {
            return Optional.of(new Member("沉默王二"));
        }
        return Optional.empty();
    }
}
class Member {
    private String name;

    public String getName() {
        return name;
    }

    // getter / setter
}
```

`<font style="color:rgb(44, 62, 80);">getMemberByIdFromDB()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法返回了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Optional<Member></font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">作为结果，这样就表明 Member 可能存在，也可能不存在，这时候就可以在 Optional 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ifPresent()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法中使用 Lambda 表达式来直接打印结果。</font>

<font style="color:rgb(44, 62, 80);">Optional 之所以可以解决 NPE 的问题，是因为它明确的告诉我们，不需要对它进行判空。它就好像十字路口的路标，明确地告诉你该往哪走。</font>

### [<font style="color:rgb(44, 62, 80);">03、创建 Optional 对象</font>](https://javabetter.cn/java8/optional.html#_03%E3%80%81%E5%88%9B%E5%BB%BA-optional-%E5%AF%B9%E8%B1%A1)

<font style="color:rgb(44, 62, 80);">1）可以使用静态方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">empty()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">创建一个空的 Optional 对象</font>

```plain
Optional<String> empty = Optional.empty();
System.out.println(empty); // 输出：Optional.empty
```

<font style="color:rgb(44, 62, 80);">2）可以使用静态方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">of()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">创建一个非空的 Optional 对象</font>

```plain
Optional<String> opt = Optional.of("沉默王二");
System.out.println(opt); // 输出：Optional[沉默王二]
```

<font style="color:rgb(44, 62, 80);">当然了，传递给</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">of()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的参数必须是非空的，也就是说不能为 null，否则仍然会抛出 NullPointerException。</font>

```plain
String name = null;
Optional<String> optnull = Optional.of(name);
```

<font style="color:rgb(44, 62, 80);">3）可以使用静态方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ofNullable()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">创建一个即可空又可非空的 Optional 对象</font>

```plain
String name = null;
Optional<String> optOrNull = Optional.ofNullable(name);
System.out.println(optOrNull); // 输出：Optional.empty
```

`<font style="color:rgb(44, 62, 80);">ofNullable()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法内部有一个三元表达式，如果为参数为 null，则返回私有常量 EMPTY；否则使用 new 关键字创建了一个新的 Optional 对象——不会再抛出 NPE 异常了。</font>

### [<font style="color:rgb(44, 62, 80);">04、判断值是否存在</font>](https://javabetter.cn/java8/optional.html#_04%E3%80%81%E5%88%A4%E6%96%AD%E5%80%BC%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8)

<font style="color:rgb(44, 62, 80);">可以通过方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">isPresent()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">判断一个 Optional 对象是否存在，如果存在，该方法返回 true，否则返回 false——取代了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">obj != null</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的判断。</font>

```plain
Optional<String> opt = Optional.of("沉默王二");
System.out.println(opt.isPresent()); // 输出：true

Optional<String> optOrNull = Optional.ofNullable(null);
System.out.println(optOrNull.isPresent()); // 输出：false
```

<font style="color:rgb(44, 62, 80);">Java 11 后还可以通过方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">isEmpty()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">判断与</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">isPresent()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">相反的结果。</font>

```plain
Optional<String> opt = Optional.of("沉默王二");
System.out.println(opt.isEmpty()); // 输出：false

Optional<String> optOrNull = Optional.ofNullable(null);
System.out.println(optOrNull.isEmpty()); // 输出：true
```

### [<font style="color:rgb(44, 62, 80);">05、非空表达式</font>](https://javabetter.cn/java8/optional.html#_05%E3%80%81%E9%9D%9E%E7%A9%BA%E8%A1%A8%E8%BE%BE%E5%BC%8F)

<font style="color:rgb(44, 62, 80);">Optional 类有一个非常现代化的方法——</font>`<font style="color:rgb(44, 62, 80);">ifPresent()</font>`<font style="color:rgb(44, 62, 80);">，允许我们使用函数式编程的方式执行一些代码，因此，我把它称为非空表达式。如果没有该方法的话，我们通常需要先通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">isPresent()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法对 Optional 对象进行判空后再执行相应的代码：</font>

```plain
Optional<String> optOrNull = Optional.ofNullable(null);
if (optOrNull.isPresent()) {
    System.out.println(optOrNull.get().length());
}
```

<font style="color:rgb(44, 62, 80);">有了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ifPresent()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">之后，情况就完全不同了，可以直接将 Lambda 表达式传递给该方法，代码更加简洁，更加直观。</font>

```plain
Optional<String> opt = Optional.of("沉默王二");
opt.ifPresent(str -> System.out.println(str.length()));
```

<font style="color:rgb(44, 62, 80);">Java 9 后还可以通过方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ifPresentOrElse(action, emptyAction)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">执行两种结果，非空时执行 action，空时执行 emptyAction。</font>

```plain
Optional<String> opt = Optional.of("沉默王二");
opt.ifPresentOrElse(str -> System.out.println(str.length()), () -> System.out.println("为空"));
```

### [<font style="color:rgb(44, 62, 80);">06、设置（获取）默认值</font>](https://javabetter.cn/java8/optional.html#_06%E3%80%81%E8%AE%BE%E7%BD%AE-%E8%8E%B7%E5%8F%96-%E9%BB%98%E8%AE%A4%E5%80%BC)

<font style="color:rgb(44, 62, 80);">有时候，我们在创建（获取） Optional 对象的时候，需要一个默认值，</font>`<font style="color:rgb(44, 62, 80);">orElse()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">orElseGet()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法就派上用场了。</font>

`<font style="color:rgb(44, 62, 80);">orElse()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法用于返回包裹在 Optional 对象中的值，如果该值不为 null，则返回；否则返回默认值。该方法的参数类型和值的类型一致。</font>

```plain
String nullName = null;
String name = Optional.ofNullable(nullName).orElse("沉默王二");
System.out.println(name); // 输出：沉默王二
```

`<font style="color:rgb(44, 62, 80);">orElseGet()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法与</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">orElse()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法类似，但参数类型不同。如果 Optional 对象中的值为 null，则执行参数中的函数。</font>

```plain
String nullName = null;
String name = Optional.ofNullable(nullName).orElseGet(()->"沉默王二");
System.out.println(name); // 输出：沉默王二
```

<font style="color:rgb(44, 62, 80);">从输出结果以及代码的形式上来看，这两个方法极其相似，这不免引起我们的怀疑，Java 类库的设计者有必要这样做吗？</font>

<font style="color:rgb(44, 62, 80);">假设现在有这样一个获取默认值的方法，很传统的方式。</font>

```plain
public static String getDefaultValue() {
    System.out.println("getDefaultValue");
    return "沉默王二";
}
```

<font style="color:rgb(44, 62, 80);">然后，通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">orElse()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">orElseGet()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法分别调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">getDefaultValue()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法返回默认值。</font>

```plain
public static void main(String[] args) {
    String name = null;
    System.out.println("orElse");
    String name2 = Optional.ofNullable(name).orElse(getDefaultValue());

    System.out.println("orElseGet");
    String name3 = Optional.ofNullable(name).orElseGet(OrElseOptionalDemo::getDefaultValue);
}
```

<font style="color:rgb(44, 62, 80);">注：</font>`<font style="color:rgb(44, 62, 80);">类名 :: 方法名</font>`<font style="color:rgb(44, 62, 80);">是 Java 8 引入的语法，方法名后面是没有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的，表明该方法并不一定会被调用。</font>

<font style="color:rgb(44, 62, 80);">输出结果如下所示：</font>

```plain
orElse
getDefaultValue

orElseGet
getDefaultValue
```

<font style="color:rgb(44, 62, 80);">输出结果是相似的，没什么太大的不同，这是在 Optional 对象的值为 null 的情况下。假如 Optional 对象的值不为 null 呢？</font>

```plain
public static void main(String[] args) {
    String name = "沉默王三";
    System.out.println("orElse");
    String name2 = Optional.ofNullable(name).orElse(getDefaultValue());

    System.out.println("orElseGet");
    String name3 = Optional.ofNullable(name).orElseGet(OrElseOptionalDemo::getDefaultValue);
}
```

<font style="color:rgb(44, 62, 80);">输出结果如下所示：</font>

```plain
orElse
getDefaultValue
orElseGet
```

<font style="color:rgb(44, 62, 80);">咦，</font>`<font style="color:rgb(44, 62, 80);">orElseGet()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">没有去调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">getDefaultValue()</font>`<font style="color:rgb(44, 62, 80);">。哪个方法的性能更佳，你明白了吧？</font>

### [<font style="color:rgb(44, 62, 80);">07、获取值</font>](https://javabetter.cn/java8/optional.html#_07%E3%80%81%E8%8E%B7%E5%8F%96%E5%80%BC)

<font style="color:rgb(44, 62, 80);">直观从语义上来看，</font>`<font style="color:rgb(44, 62, 80);">get()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法才是最正宗的获取 Optional 对象值的方法，但很遗憾，该方法是有缺陷的，因为假如 Optional 对象的值为 null，该方法会抛出 NoSuchElementException 异常。这完全与我们使用 Optional 类的初衷相悖。</font>

```plain
public class GetOptionalDemo {
    public static void main(String[] args) {
        String name = null;
        Optional<String> optOrNull = Optional.ofNullable(name);
        System.out.println(optOrNull.get());
    }
}
```

<font style="color:rgb(44, 62, 80);">这段程序在运行时会抛出异常：</font>

```plain
Exception in thread "main" java.util.NoSuchElementException: No value present
	at java.base/java.util.Optional.get(Optional.java:141)
	at com.cmower.dzone.optional.GetOptionalDemo.main(GetOptionalDemo.java:9)
```

<font style="color:rgb(44, 62, 80);">尽管抛出的异常是 NoSuchElementException 而不是 NPE，但在我们看来，显然是在“五十步笑百步”。建议</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">orElseGet()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法获取 Optional 对象的值。</font>

### [<font style="color:rgb(44, 62, 80);">08、过滤值</font>](https://javabetter.cn/java8/optional.html#_08%E3%80%81%E8%BF%87%E6%BB%A4%E5%80%BC)

<font style="color:rgb(44, 62, 80);">小王通过 Optional 类对之前的代码进行了升级，完成后又兴高采烈地跑去找老马要任务了。老马觉得这小伙子不错，头脑灵活，又干活积极，很值得培养，就又交给了小王一个新的任务：用户注册时对密码的长度进行检查。</font>

<font style="color:rgb(44, 62, 80);">小王拿到任务后，乐开了花，因为他刚要学习 Optional 类的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">filter()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，这就派上了用场。</font>

```plain
public class FilterOptionalDemo {
    public static void main(String[] args) {
        String password = "12345";
        Optional<String> opt = Optional.ofNullable(password);
        System.out.println(opt.filter(pwd -> pwd.length() > 6).isPresent());
    }
}
```

`<font style="color:rgb(44, 62, 80);">filter()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的参数类型为 Predicate（Java 8 新增的一个函数式接口），也就是说可以将一个 Lambda 表达式传递给该方法作为条件，如果表达式的结果为 false，则返回一个 EMPTY 的 Optional 对象，否则返回过滤后的 Optional 对象。</font>

<font style="color:rgb(44, 62, 80);">在上例中，由于 password 的长度为 5 ，所以程序输出的结果为 false。假设密码的长度要求在 6 到 10 位之间，那么还可以再追加一个条件。来看小王增加难度后的代码。</font>

```plain
Predicate<String> len6 = pwd -> pwd.length() > 6;
Predicate<String> len10 = pwd -> pwd.length() < 10;

password = "1234567";
opt = Optional.ofNullable(password);
boolean result = opt.filter(len6.and(len10)).isPresent();
System.out.println(result);
```

<font style="color:rgb(44, 62, 80);">这次程序输出的结果为 true，因为密码变成了 7 位，在 6 到 10 位之间。想象一下，假如小王使用 if-else 来完成这个任务，代码该有多冗长。</font>

### [<font style="color:rgb(44, 62, 80);">09、转换值</font>](https://javabetter.cn/java8/optional.html#_09%E3%80%81%E8%BD%AC%E6%8D%A2%E5%80%BC)

<font style="color:rgb(44, 62, 80);">小王检查完了密码的长度，仍然觉得不够尽兴，觉得要对密码的强度也进行检查，比如说密码不能是“password”，这样的密码太弱了。于是他又开始研究起了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">map()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，该方法可以按照一定的规则将原有 Optional 对象转换为一个新的 Optional 对象，原有的 Optional 对象不会更改。</font>

<font style="color:rgb(44, 62, 80);">先来看小王写的一个简单的例子：</font>

```plain
public class OptionalMapDemo {
    public static void main(String[] args) {
        String name = "沉默王二";
        Optional<String> nameOptional = Optional.of(name);
        Optional<Integer> intOpt = nameOptional
                .map(String::length);
        
        System.out.println( intOpt.orElse(0));
    }
}
```

<font style="color:rgb(44, 62, 80);">在上面这个例子中，</font>`<font style="color:rgb(44, 62, 80);">map()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的参数</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">String::length</font>`<font style="color:rgb(44, 62, 80);">，意味着要 将原有的字符串类型的 Optional 按照字符串长度重新生成一个新的 Optional 对象，类型为 Integer。</font>

<font style="color:rgb(44, 62, 80);">搞清楚了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">map()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的基本用法后，小王决定把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">map()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法与</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">filter()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法结合起来用，前者用于将密码转化为小写，后者用于判断长度以及是否是“password”。</font>

```plain
public class OptionalMapFilterDemo {
    public static void main(String[] args) {
        String password = "password";
        Optional<String>  opt = Optional.ofNullable(password);

        Predicate<String> len6 = pwd -> pwd.length() > 6;
        Predicate<String> len10 = pwd -> pwd.length() < 10;
        Predicate<String> eq = pwd -> pwd.equals("password");

        boolean result = opt.map(String::toLowerCase).filter(len6.and(len10 ).and(eq)).isPresent();
        System.out.println(result);
    }
}
```

![](https://cdn.nlark.com/yuque/0/2024/jpeg/35376129/1724412397711-b453eec1-c5aa-4087-a219-5ba8edb0885a.jpeg)





# 什么是SPI机制

**SPI**（Service Provider Interface），是 JDK 内置的一种**服务提供发现机制**，可以用来启用框架扩展和替换组件，主要是被框架的开发人员使用，比如 java.sql.Driver 接口，其他不同厂商可以针对同一接口做出不同的实现，MySQL 和 PostgreSQL 都有不同的实现提供给用户，而 Java 的 SPI 机制可以为某个接口寻找服务实现。**Java 中 SPI 机制**主要思想是**将装配的控制权移到程序之外**，在模块化设计中这个机制尤其重要，其核心思想就是 **解耦**。



**SPI** 整体机制图如下:

![](https://cdn.nlark.com/yuque/0/2024/jpeg/35376129/1727095381864-d868277f-bae2-4ce0-9829-42d06b59ee46.jpeg)

当服务的提供者提供了一种接口的实现之后，需要在 classpath 下的`META-INF/services/`目录里创建一个以服务接口命名的文件，这个文件里的内容就是这个接口的具体的实现类。当其他的程序需要这个服务的时候，就可以通过查找这个jar包（一般都是以jar包做依赖）的`META-INF/services/`中的配置文件，配置文件中有接口的具体实现类名，可以根据这个类名进行加载实例化，就可以使用该服务了。JDK中查找服务的实现的工具类是：`java.util.ServiceLoader`。

# SPI机制的简单示例

> 网上找了个例子：[这里在新窗口打开](https://zhuanlan.zhihu.com/p/28909673)

我们现在需要使用一个内容搜索接口，搜索的实现可能是基于文件系统的搜索，也可能是基于数据库的搜索。

+ 先定义好接口

```java
public interface Search {
    public List<String> searchDoc(String keyword);   
}
```

+ 文件搜索实现

```java
public class FileSearch implements Search{
    @Override
    public List<String> searchDoc(String keyword) {
        System.out.println("文件搜索 "+keyword);
        return null;
    }
}
```

+ 数据库搜索实现

```java
public class DatabaseSearch implements Search{
    @Override
    public List<String> searchDoc(String keyword) {
        System.out.println("数据搜索 "+keyword);
        return null;
    }
}
```

+ **<font style="color:#DF2A3F;">resources 接下来可以在resources下新建META-INF/services/目录，然后新建接口全限定名的文件：</font>**`**<font style="color:#DF2A3F;">com.cainiao.ys.spi.learn.Search</font>**`**<font style="color:#DF2A3F;">（接口所在文件夹路径），里面加上我们需要用到的实现类（该接口实现类所在路径）</font>**

```xml
com.cainiao.ys.spi.learn.FileSearch
```

+ 测试方法

```java
public class TestCase {
    public static void main(String[] args) {
        ServiceLoader<Search> s = ServiceLoader.load(Search.class);
        Iterator<Search> iterator = s.iterator();
        while (iterator.hasNext()) {
           Search search =  iterator.next();
           search.searchDoc("hello world");
        }
    }
}
```

可以看到输出结果：文件搜索 hello world

如果在`com.cainiao.ys.spi.learn.Search`文件里写上两个实现类，那最后的输出结果就是两行了。

这就是因为`ServiceLoader.load(Search.class)`在加载某接口时，会去`META-INF/services`下找接口的全限定名文件，再根据里面的内容加载相应的实现类。

这就是spi的思想，接口的实现由provider实现，provider 只用在提交的 jar 包里的`META-INF/services`下根据平台定义的接口新建文件，并添加进相应的实现类内容就好。

![](https://cdn.nlark.com/yuque/0/2024/png/35376129/1727666896110-737419f6-8b46-44d9-b810-05afd92a5edf.png)



# SPI机制的广泛应用

## SPI机制 - JDBC DriverManager

在JDBC4.0之前，我们开发有连接数据库的时候，通常会用Class.forName("com.mysql.jdbc.Driver")这句先加载数据库相关的驱动，然后再进行获取连接等的操作。**而JDBC4.0之后不需要用Class.forName("com.mysql.jdbc.Driver")来加载驱动，直接获取连接就可以了，现在这种方式就是使用了Java 的 SPI 扩展机制来实现**。

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#jdbc接口定义) JDBC接口定义

首先在java中定义了接口`java.sql.Driver`，并没有具体的实现，具体的实现都是由不同厂商来提供的。

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#mysql实现) mysql实现

在mysql的jar包`mysql-connector-java-6.0.6.jar`中，可以找到`META-INF/services`目录，该目录下会有一个名字为`java.sql.Driver`的文件，文件内容是`com.mysql.cj.jdbc.Driver`，这里面的内容就是针对Java中定义的接口的实现。

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#postgresql实现) postgresql实现

同样在postgresql的jar包`postgresql-42.0.0.jar`中，也可以找到同样的配置文件，文件内容是`org.postgresql.Driver`，这是postgresql对Java的`java.sql.Driver`的实现。

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#使用方法) 使用方法

上面说了，现在使用SPI扩展来加载具体的驱动，我们在Java中写连接数据库的代码的时候，不需要再使用`Class.forName("com.mysql.jdbc.Driver")`来加载驱动了，而是直接使用如下代码：

```java
String url = "jdbc:xxxx://xxxx:xxxx/xxxx";
Connection conn = DriverManager.getConnection(url,username,password);
.....
```

这里并没有涉及到spi的使用，接着看下面的解析。

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#源码实现) 源码实现

上面的使用方法，就是我们普通的连接数据库的代码，并没有涉及到SPI的东西，但是有一点我们可以确定的是，我们没有写有关具体驱动的硬编码`Class.forName("com.mysql.jdbc.Driver")`！

上面的代码可以直接获取数据库连接进行操作，但是跟SPI有啥关系呢？上面代码没有了加载驱动的代码，我们怎么去确定使用哪个数据库连接的驱动呢？这里就涉及到使用Java的SPI扩展机制来查找相关驱动的东西了，关于驱动的查找其实都在`DriverManager`中，`DriverManager`是Java中的实现，用来获取数据库连接，在`DriverManager`中有一个静态代码块如下：

```java
static {
    loadInitialDrivers();
    println("JDBC DriverManager initialized");
}
```

可以看到是加载实例化驱动的，接着看loadInitialDrivers方法：

```java
private static void loadInitialDrivers() {
    String drivers;
    try {
        drivers = AccessController.doPrivileged(new PrivilegedAction<String>() {
            public String run() {
                return System.getProperty("jdbc.drivers");
            }
        });
    } catch (Exception ex) {
        drivers = null;
    }

    AccessController.doPrivileged(new PrivilegedAction<Void>() {
        public Void run() {
			//使用SPI的ServiceLoader来加载接口的实现
            ServiceLoader<Driver> loadedDrivers = ServiceLoader.load(Driver.class);
            Iterator<Driver> driversIterator = loadedDrivers.iterator();
            try{
                while(driversIterator.hasNext()) {
                    driversIterator.next();
                }
            } catch(Throwable t) {
            // Do nothing
            }
            return null;
        }
    });

    println("DriverManager.initialize: jdbc.drivers = " + drivers);

    if (drivers == null || drivers.equals("")) {
        return;
    }
    String[] driversList = drivers.split(":");
    println("number of Drivers:" + driversList.length);
    for (String aDriver : driversList) {
        try {
            println("DriverManager.Initialize: loading " + aDriver);
            Class.forName(aDriver, true,
                    ClassLoader.getSystemClassLoader());
        } catch (Exception ex) {
            println("DriverManager.Initialize: load failed: " + ex);
        }
    }
}
```

上面的代码主要步骤是：

+ 从系统变量中获取有关驱动的定义。
+ 使用SPI来获取驱动的实现。
+ 遍历使用SPI获取到的具体实现，实例化各个实现类。
+ 根据第一步获取到的驱动列表来实例化具体实现类。

我们主要关注2,3步，这两步是SPI的用法，首先看第二步，使用SPI来获取驱动的实现，对应的代码是：

```java
ServiceLoader<Driver> loadedDrivers = ServiceLoader.load(Driver.class);
```

这里没有去`META-INF/services`目录下查找配置文件，也没有加载具体实现类，做的事情就是封装了我们的接口类型和类加载器，并初始化了一个迭代器。

接着看第三步，遍历使用SPI获取到的具体实现，实例化各个实现类，对应的代码如下：

```java
//获取迭代器
Iterator<Driver> driversIterator = loadedDrivers.iterator();
//遍历所有的驱动实现
while(driversIterator.hasNext()) {
    driversIterator.next();
}
```

在遍历的时候，首先调用`driversIterator.hasNext()`方法，这里会搜索classpath下以及jar包中所有的`META-INF/services`目录下的`java.sql.Driver`文件，并找到文件中的实现类的名字，此时并没有实例化具体的实现类（ServiceLoader具体的源码实现在下面）。

然后是调用`driversIterator.next();`方法，此时就会根据驱动名字具体实例化各个实现类了。现在驱动就被找到并实例化了。

可以看下截图，我在测试项目中添加了两个jar包，`mysql-connector-java-6.0.6.jar`和`postgresql-42.0.0.0.jar`，跟踪到DriverManager中之后：![](https://cdn.nlark.com/yuque/0/2024/png/35376129/1727095614917-530f4f0c-31f3-4b03-8aa1-3067d2fedeb2.png)

可以看到此时迭代器中有两个驱动，mysql和postgresql的都被加载了。

## SPI机制 - Common-Logging

common-logging（也称Jakarta Commons Logging，缩写 JCL）是常用的日志库门面，具体[日志库相关可以看这篇](/md/develop/package/dev-package-x-log.html)。我们看下它是怎么解耦的。

首先，日志实例是通过LogFactory的getLog(String)方法创建的：

```java
public static getLog(Class clazz) throws LogConfigurationException {
    return getFactory().getInstance(clazz);
}
```

LogFatory是一个抽象类，它负责加载具体的日志实现，分析其Factory getFactory()方法：

```java
public static org.apache.commons.logging.LogFactory getFactory() throws LogConfigurationException {
    // Identify the class loader we will be using
    ClassLoader contextClassLoader = getContextClassLoaderInternal();

    if (contextClassLoader == null) {
        // This is an odd enough situation to report about. This
        // output will be a nuisance on JDK1.1, as the system
        // classloader is null in that environment.
        if (isDiagnosticsEnabled()) {
            logDiagnostic("Context classloader is null.");
        }
    }

    // Return any previously registered factory for this class loader
    org.apache.commons.logging.LogFactory factory = getCachedFactory(contextClassLoader);
    if (factory != null) {
        return factory;
    }

    if (isDiagnosticsEnabled()) {
        logDiagnostic(
                "[LOOKUP] LogFactory implementation requested for the first time for context classloader " +
                        objectId(contextClassLoader));
        logHierarchy("[LOOKUP] ", contextClassLoader);
    }

    // Load properties file.
    //
    // If the properties file exists, then its contents are used as
    // "attributes" on the LogFactory implementation class. One particular
    // property may also control which LogFactory concrete subclass is
    // used, but only if other discovery mechanisms fail..
    //
    // As the properties file (if it exists) will be used one way or
    // another in the end we may as well look for it first.
    // classpath根目录下寻找commons-logging.properties
    Properties props = getConfigurationFile(contextClassLoader, FACTORY_PROPERTIES);

    // Determine whether we will be using the thread context class loader to
    // load logging classes or not by checking the loaded properties file (if any).
    // classpath根目录下commons-logging.properties是否配置use_tccl
    ClassLoader baseClassLoader = contextClassLoader;
    if (props != null) {
        String useTCCLStr = props.getProperty(TCCL_KEY);
        if (useTCCLStr != null) {
            // The Boolean.valueOf(useTCCLStr).booleanValue() formulation
            // is required for Java 1.2 compatibility.
            if (Boolean.valueOf(useTCCLStr).booleanValue() == false) {
                // Don't use current context classloader when locating any
                // LogFactory or Log classes, just use the class that loaded
                // this abstract class. When this class is deployed in a shared
                // classpath of a container, it means webapps cannot deploy their
                // own logging implementations. It also means that it is up to the
                // implementation whether to load library-specific config files
                // from the TCCL or not.
                baseClassLoader = thisClassLoader;
            }
        }
    }

    // 这里真正开始决定使用哪个factory
    // 首先，尝试查找vm系统属性org.apache.commons.logging.LogFactory，其是否指定factory
    // Determine which concrete LogFactory subclass to use.
    // First, try a global system property
    if (isDiagnosticsEnabled()) {
        logDiagnostic("[LOOKUP] Looking for system property [" + FACTORY_PROPERTY +
                "] to define the LogFactory subclass to use...");
    }

    try {
        String factoryClass = getSystemProperty(FACTORY_PROPERTY, null);
        if (factoryClass != null) {
            if (isDiagnosticsEnabled()) {
                logDiagnostic("[LOOKUP] Creating an instance of LogFactory class '" + factoryClass +
                        "' as specified by system property " + FACTORY_PROPERTY);
            }
            factory = newFactory(factoryClass, baseClassLoader, contextClassLoader);
        } else {
            if (isDiagnosticsEnabled()) {
                logDiagnostic("[LOOKUP] No system property [" + FACTORY_PROPERTY + "] defined.");
            }
        }
    } catch (SecurityException e) {
        if (isDiagnosticsEnabled()) {
            logDiagnostic("[LOOKUP] A security exception occurred while trying to create an" +
                    " instance of the custom factory class" + ": [" + trim(e.getMessage()) +
                    "]. Trying alternative implementations...");
        }
        // ignore
    } catch (RuntimeException e) {
        // This is not consistent with the behaviour when a bad LogFactory class is
        // specified in a services file.
        //
        // One possible exception that can occur here is a ClassCastException when
        // the specified class wasn't castable to this LogFactory type.
        if (isDiagnosticsEnabled()) {
            logDiagnostic("[LOOKUP] An exception occurred while trying to create an" +
                    " instance of the custom factory class" + ": [" +
                    trim(e.getMessage()) +
                    "] as specified by a system property.");
        }
        throw e;
    }

    // 第二，尝试使用java spi服务发现机制，载META-INF/services下寻找org.apache.commons.logging.LogFactory实现
    // Second, try to find a service by using the JDK1.3 class
    // discovery mechanism, which involves putting a file with the name
    // of an interface class in the META-INF/services directory, where the
    // contents of the file is a single line specifying a concrete class
    // that implements the desired interface.

    if (factory == null) {
        if (isDiagnosticsEnabled()) {
            logDiagnostic("[LOOKUP] Looking for a resource file of name [" + SERVICE_ID +
                    "] to define the LogFactory subclass to use...");
        }
        try {
            // META-INF/services/org.apache.commons.logging.LogFactory, SERVICE_ID
            final InputStream is = getResourceAsStream(contextClassLoader, SERVICE_ID);

            if (is != null) {
                // This code is needed by EBCDIC and other strange systems.
                // It's a fix for bugs reported in xerces
                BufferedReader rd;
                try {
                    rd = new BufferedReader(new InputStreamReader(is, "UTF-8"));
                } catch (java.io.UnsupportedEncodingException e) {
                    rd = new BufferedReader(new InputStreamReader(is));
                }

                String factoryClassName = rd.readLine();
                rd.close();

                if (factoryClassName != null && !"".equals(factoryClassName)) {
                    if (isDiagnosticsEnabled()) {
                        logDiagnostic("[LOOKUP]  Creating an instance of LogFactory class " +
                                factoryClassName +
                                " as specified by file '" + SERVICE_ID +
                                "' which was present in the path of the context classloader.");
                    }
                    factory = newFactory(factoryClassName, baseClassLoader, contextClassLoader);
                }
            } else {
                // is == null
                if (isDiagnosticsEnabled()) {
                    logDiagnostic("[LOOKUP] No resource file with name '" + SERVICE_ID + "' found.");
                }
            }
        } catch (Exception ex) {
            // note: if the specified LogFactory class wasn't compatible with LogFactory
            // for some reason, a ClassCastException will be caught here, and attempts will
            // continue to find a compatible class.
            if (isDiagnosticsEnabled()) {
                logDiagnostic(
                        "[LOOKUP] A security exception occurred while trying to create an" +
                                " instance of the custom factory class" +
                                ": [" + trim(ex.getMessage()) +
                                "]. Trying alternative implementations...");
            }
            // ignore
        }
    }

    // 第三，尝试从classpath根目录下的commons-logging.properties中查找org.apache.commons.logging.LogFactory属性指定的factory
    // Third try looking into the properties file read earlier (if found)

    if (factory == null) {
        if (props != null) {
            if (isDiagnosticsEnabled()) {
                logDiagnostic(
                        "[LOOKUP] Looking in properties file for entry with key '" + FACTORY_PROPERTY +
                                "' to define the LogFactory subclass to use...");
            }
            String factoryClass = props.getProperty(FACTORY_PROPERTY);
            if (factoryClass != null) {
                if (isDiagnosticsEnabled()) {
                    logDiagnostic(
                            "[LOOKUP] Properties file specifies LogFactory subclass '" + factoryClass + "'");
                }
                factory = newFactory(factoryClass, baseClassLoader, contextClassLoader);

                // TODO: think about whether we need to handle exceptions from newFactory
            } else {
                if (isDiagnosticsEnabled()) {
                    logDiagnostic("[LOOKUP] Properties file has no entry specifying LogFactory subclass.");
                }
            }
        } else {
            if (isDiagnosticsEnabled()) {
                logDiagnostic("[LOOKUP] No properties file available to determine" + " LogFactory subclass from..");
            }
        }
    }

    // 最后，使用后备factory实现，org.apache.commons.logging.impl.LogFactoryImpl
    // Fourth, try the fallback implementation class

    if (factory == null) {
        if (isDiagnosticsEnabled()) {
            logDiagnostic(
                    "[LOOKUP] Loading the default LogFactory implementation '" + FACTORY_DEFAULT +
                            "' via the same classloader that loaded this LogFactory" +
                            " class (ie not looking in the context classloader).");
        }

        // Note: unlike the above code which can try to load custom LogFactory
        // implementations via the TCCL, we don't try to load the default LogFactory
        // implementation via the context classloader because:
        // * that can cause problems (see comments in newFactory method)
        // * no-one should be customising the code of the default class
        // Yes, we do give up the ability for the child to ship a newer
        // version of the LogFactoryImpl class and have it used dynamically
        // by an old LogFactory class in the parent, but that isn't
        // necessarily a good idea anyway.
        factory = newFactory(FACTORY_DEFAULT, thisClassLoader, contextClassLoader);
    }

    if (factory != null) {
        /**
            * Always cache using context class loader.
            */
        cacheFactory(contextClassLoader, factory);

        if (props != null) {
            Enumeration names = props.propertyNames();
            while (names.hasMoreElements()) {
                String name = (String) names.nextElement();
                String value = props.getProperty(name);
                factory.setAttribute(name, value);
            }
        }
    }

    return factory;
}
```

可以看出，抽象类LogFactory加载具体实现的步骤如下：

+ 从vm系统属性org.apache.commons.logging.LogFactory
+ 使用SPI服务发现机制，发现org.apache.commons.logging.LogFactory的实现
+ 查找classpath根目录commons-logging.properties的org.apache.commons.logging.LogFactory属性是否指定factory实现
+ 使用默认factory实现，org.apache.commons.logging.impl.LogFactoryImpl

LogFactory的getLog()方法返回类型是org.apache.commons.logging.Log接口，提供了从trace到fatal方法。可以确定，如果日志实现提供者只要实现该接口，并且使用继承自org.apache.commons.logging.LogFactory的子类创建Log，必然可以构建一个松耦合的日志系统。

## SPI机制 - 插件体系

其实最具spi思想的应该属于插件开发，我们项目中也用到的这种思想，后面再说，这里具体说一下eclipse的插件思想。

Eclipse使用OSGi作为插件系统的基础，动态添加新插件和停止现有插件，以动态的方式管理组件生命周期。

一般来说，插件的文件结构必须在指定目录下包含以下三个文件：

+ `META-INF/MANIFEST.MF`: 项目基本配置信息，版本、名称、启动器等
+ `build.properties`: 项目的编译配置信息，包括，源代码路径、输出路径
+ `plugin.xml`：插件的操作配置信息，包含弹出菜单及点击菜单后对应的操作执行类等

当eclipse启动时，会遍历plugins文件夹中的目录，扫描每个插件的清单文件`MANIFEST.MF`，并建立一个内部模型来记录它所找到的每个插件的信息，就实现了动态添加新的插件。

这也意味着是eclipse制定了一系列的规则，像是文件结构、类型、参数等。插件开发者遵循这些规则去开发自己的插件，eclipse并不需要知道插件具体是怎样开发的，只需要在启动的时候根据配置文件解析、加载到系统里就好了，是spi思想的一种体现。

## SPI机制 - Spring中SPI机制

在springboot的自动装配过程中，最终会加载`META-INF/spring.factories`文件，而加载的过程是由`SpringFactoriesLoader`加载的。从CLASSPATH下的每个Jar包中搜寻所有`META-INF/spring.factories`配置文件，然后将解析properties文件，找到指定名称的配置后返回。需要注意的是，其实这里不仅仅是会去ClassPath路径下查找，会扫描所有路径下的Jar包，只不过这个文件只会在Classpath下的jar包中。

```java
public static final String FACTORIES_RESOURCE_LOCATION = "META-INF/spring.factories";
// spring.factories文件的格式为：key=value1,value2,value3
// 从所有的jar包中找到META-INF/spring.factories文件
// 然后从文件中解析出key=factoryClass类名称的所有value值
public static List<String> loadFactoryNames(Class<?> factoryClass, ClassLoader classLoader) {
    String factoryClassName = factoryClass.getName();
    // 取得资源文件的URL
    Enumeration<URL> urls = (classLoader != null ? classLoader.getResources(FACTORIES_RESOURCE_LOCATION) : ClassLoader.getSystemResources(FACTORIES_RESOURCE_LOCATION));
    List<String> result = new ArrayList<String>();
    // 遍历所有的URL
    while (urls.hasMoreElements()) {
        URL url = urls.nextElement();
        // 根据资源文件URL解析properties文件，得到对应的一组@Configuration类
        Properties properties = PropertiesLoaderUtils.loadProperties(new UrlResource(url));
        String factoryClassNames = properties.getProperty(factoryClassName);
        // 组装数据，并返回
        result.addAll(Arrays.asList(StringUtils.commaDelimitedListToStringArray(factoryClassNames)));
    }
    return result;
}
```

# SPI机制深入理解

## SPI机制通常怎么使用

看完上面的几个例子解析，应该都能知道大概的流程了：

+ 有关组织或者公司定义标准。
+ 具体厂商或者框架开发者实现。
+ 程序猿使用。

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#定义标准) 定义标准

定义标准，就是定义接口。比如接口`java.sql.Driver`

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#具体厂商或者框架开发者实现) 具体厂商或者框架开发者实现

厂商或者框架开发者开发具体的实现：

在`META-INF/services`目录下定义一个名字为接口全限定名的文件，比如`java.sql.Driver`文件，文件内容是具体的实现名字，比如`me.cxis.sql.MyDriver`。

写具体的实现`me.cxis.sql.MyDriver`，都是对接口Driver的实现。

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#程序猿使用) 程序猿使用

我们会引用具体厂商的jar包来实现我们的功能：

```java
ServiceLoader<Driver> loadedDrivers = ServiceLoader.load(Driver.class);
//获取迭代器
Iterator<Driver> driversIterator = loadedDrivers.iterator();
//遍历
while(driversIterator.hasNext()) {
    driversIterator.next();
    //可以做具体的业务逻辑
}
```

### [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#使用规范) 使用规范

最后总结一下jdk spi需要遵循的规范

![](https://cdn.nlark.com/yuque/0/2024/jpeg/35376129/1727095721741-0df15fba-0679-4903-8b99-dc354c2a823a.jpeg)

## [#](https://www.yuque.com/yuqueyonghupqqdjr/gre6wb/qfk5yqc8g2matrnh#spi和api的区别是什么) SPI和API的区别是什么

这里实际包含两个问题，第一个SPI和API的区别？第二个什么时候用API，什么时候用SPI？

SPI - “接口”位于“调用方”所在的“包”中

+ 概念上更依赖调用方。
+ 组织上位于调用方所在的包中。
+ 实现位于独立的包中。
+ 常见的例子是：插件模式的插件。

API - “接口”位于“实现方”所在的“包”中

+ 概念上更接近实现方。
+ 组织上位于实现方所在的包中。
+ 实现和接口在一个包中。

参考：

+ [difference-between-spi-and-api在新窗口打开](https://stackoverflow.com/questions/2954372/difference-between-spi-and-api?answertab=votes#tab-top)
+ [设计原则：小议 SPI 和 API在新窗口打开](https://www.cnblogs.com/happyframework/archive/2013/09/17/3325560.html)

![](https://cdn.nlark.com/yuque/0/2024/png/35376129/1727095745273-260d3d18-3d3c-43e5-a2ca-c79503005272.png)![](https://cdn.nlark.com/yuque/0/2024/png/35376129/1727095752186-19fb91ed-6ac7-45d4-884a-9e51f1eea411.png)

## SPI机制实现原理

不妨看下JDK中`ServiceLoader<S>`方法的具体实现：

```java
//ServiceLoader实现了Iterable接口，可以遍历所有的服务实现者
public final class ServiceLoader<S>
    implements Iterable<S>
{

    //查找配置文件的目录
    private static final String PREFIX = "META-INF/services/";

    //表示要被加载的服务的类或接口
    private final Class<S> service;

    //这个ClassLoader用来定位，加载，实例化服务提供者
    private final ClassLoader loader;

    // 访问控制上下文
    private final AccessControlContext acc;

    // 缓存已经被实例化的服务提供者，按照实例化的顺序存储
    private LinkedHashMap<String,S> providers = new LinkedHashMap<>();

    // 迭代器
    private LazyIterator lookupIterator;


    //重新加载，就相当于重新创建ServiceLoader了，用于新的服务提供者安装到正在运行的Java虚拟机中的情况。
    public void reload() {
        //清空缓存中所有已实例化的服务提供者
        providers.clear();
        //新建一个迭代器，该迭代器会从头查找和实例化服务提供者
        lookupIterator = new LazyIterator(service, loader);
    }

    //私有构造器
    //使用指定的类加载器和服务创建服务加载器
    //如果没有指定类加载器，使用系统类加载器，就是应用类加载器。
    private ServiceLoader(Class<S> svc, ClassLoader cl) {
        service = Objects.requireNonNull(svc, "Service interface cannot be null");
        loader = (cl == null) ? ClassLoader.getSystemClassLoader() : cl;
        acc = (System.getSecurityManager() != null) ? AccessController.getContext() : null;
        reload();
    }

    //解析失败处理的方法
    private static void fail(Class<?> service, String msg, Throwable cause)
        throws ServiceConfigurationError
    {
        throw new ServiceConfigurationError(service.getName() + ": " + msg,
                                            cause);
    }

    private static void fail(Class<?> service, String msg)
        throws ServiceConfigurationError
    {
        throw new ServiceConfigurationError(service.getName() + ": " + msg);
    }

    private static void fail(Class<?> service, URL u, int line, String msg)
        throws ServiceConfigurationError
    {
        fail(service, u + ":" + line + ": " + msg);
    }

    //解析服务提供者配置文件中的一行
    //首先去掉注释校验，然后保存
    //返回下一行行号
    //重复的配置项和已经被实例化的配置项不会被保存
    private int parseLine(Class<?> service, URL u, BufferedReader r, int lc,
                          List<String> names)
        throws IOException, ServiceConfigurationError
    {
        //读取一行
        String ln = r.readLine();
        if (ln == null) {
            return -1;
        }
        //#号代表注释行
        int ci = ln.indexOf('#');
        if (ci >= 0) ln = ln.substring(0, ci);
        ln = ln.trim();
        int n = ln.length();
        if (n != 0) {
            if ((ln.indexOf(' ') >= 0) || (ln.indexOf('\t') >= 0))
                fail(service, u, lc, "Illegal configuration-file syntax");
            int cp = ln.codePointAt(0);
            if (!Character.isJavaIdentifierStart(cp))
                fail(service, u, lc, "Illegal provider-class name: " + ln);
            for (int i = Character.charCount(cp); i < n; i += Character.charCount(cp)) {
                cp = ln.codePointAt(i);
                if (!Character.isJavaIdentifierPart(cp) && (cp != '.'))
                    fail(service, u, lc, "Illegal provider-class name: " + ln);
            }
            if (!providers.containsKey(ln) && !names.contains(ln))
                names.add(ln);
        }
        return lc + 1;
    }

    //解析配置文件，解析指定的url配置文件
    //使用parseLine方法进行解析，未被实例化的服务提供者会被保存到缓存中去
    private Iterator<String> parse(Class<?> service, URL u)
        throws ServiceConfigurationError
    {
        InputStream in = null;
        BufferedReader r = null;
        ArrayList<String> names = new ArrayList<>();
        try {
            in = u.openStream();
            r = new BufferedReader(new InputStreamReader(in, "utf-8"));
            int lc = 1;
            while ((lc = parseLine(service, u, r, lc, names)) >= 0);
        }
        return names.iterator();
    }

    //服务提供者查找的迭代器
    private class LazyIterator
        implements Iterator<S>
    {

        Class<S> service;//服务提供者接口
        ClassLoader loader;//类加载器
        Enumeration<URL> configs = null;//保存实现类的url
        Iterator<String> pending = null;//保存实现类的全名
        String nextName = null;//迭代器中下一个实现类的全名

        private LazyIterator(Class<S> service, ClassLoader loader) {
            this.service = service;
            this.loader = loader;
        }

        private boolean hasNextService() {
            if (nextName != null) {
                return true;
            }
            if (configs == null) {
                try {
                    String fullName = PREFIX + service.getName();
                    if (loader == null)
                        configs = ClassLoader.getSystemResources(fullName);
                    else
                        configs = loader.getResources(fullName);
                }
            }
            while ((pending == null) || !pending.hasNext()) {
                if (!configs.hasMoreElements()) {
                    return false;
                }
                pending = parse(service, configs.nextElement());
            }
            nextName = pending.next();
            return true;
        }

        private S nextService() {
            if (!hasNextService())
                throw new NoSuchElementException();
            String cn = nextName;
            nextName = null;
            Class<?> c = null;
            try {
                c = Class.forName(cn, false, loader);
            }
            if (!service.isAssignableFrom(c)) {
                fail(service, "Provider " + cn  + " not a subtype");
            }
            try {
                S p = service.cast(c.newInstance());
                providers.put(cn, p);
                return p;
            }
        }

        public boolean hasNext() {
            if (acc == null) {
                return hasNextService();
            } else {
                PrivilegedAction<Boolean> action = new PrivilegedAction<Boolean>() {
                    public Boolean run() { return hasNextService(); }
                };
                return AccessController.doPrivileged(action, acc);
            }
        }

        public S next() {
            if (acc == null) {
                return nextService();
            } else {
                PrivilegedAction<S> action = new PrivilegedAction<S>() {
                    public S run() { return nextService(); }
                };
                return AccessController.doPrivileged(action, acc);
            }
        }

        public void remove() {
            throw new UnsupportedOperationException();
        }

    }

    //获取迭代器
    //返回遍历服务提供者的迭代器
    //以懒加载的方式加载可用的服务提供者
    //懒加载的实现是：解析配置文件和实例化服务提供者的工作由迭代器本身完成
    public Iterator<S> iterator() {
        return new Iterator<S>() {
            //按照实例化顺序返回已经缓存的服务提供者实例
            Iterator<Map.Entry<String,S>> knownProviders
                = providers.entrySet().iterator();

            public boolean hasNext() {
                if (knownProviders.hasNext())
                    return true;
                return lookupIterator.hasNext();
            }

            public S next() {
                if (knownProviders.hasNext())
                    return knownProviders.next().getValue();
                return lookupIterator.next();
            }

            public void remove() {
                throw new UnsupportedOperationException();
            }

        };
    }

    //为指定的服务使用指定的类加载器来创建一个ServiceLoader
    public static <S> ServiceLoader<S> load(Class<S> service,
                                            ClassLoader loader)
    {
        return new ServiceLoader<>(service, loader);
    }

    //使用线程上下文的类加载器来创建ServiceLoader
    public static <S> ServiceLoader<S> load(Class<S> service) {
        ClassLoader cl = Thread.currentThread().getContextClassLoader();
        return ServiceLoader.load(service, cl);
    }

    //使用扩展类加载器为指定的服务创建ServiceLoader
    //只能找到并加载已经安装到当前Java虚拟机中的服务提供者，应用程序类路径中的服务提供者将被忽略
    public static <S> ServiceLoader<S> loadInstalled(Class<S> service) {
        ClassLoader cl = ClassLoader.getSystemClassLoader();
        ClassLoader prev = null;
        while (cl != null) {
            prev = cl;
            cl = cl.getParent();
        }
        return ServiceLoader.load(service, prev);
    }

    public String toString() {
        return "java.util.ServiceLoader[" + service.getName() + "]";
    }

}
```

**首先**，`ServiceLoader`实现了`Iterable`接口，所以它有迭代器的属性，这里主要都是实现了迭代器的`hasNext`和`next`方法。这里主要都是调用的`lookupIterator`的相应`hasNext`和`next`方法，`lookupIterator`是懒加载迭代器。

**其次**，`LazyIterator`中的`hasNext`方法，静态变量PREFIX就是`”META-INF/services/”`目录，这也就是为什么需要在`classpath`下的`META-INF/services/`目录里创建一个以服务接口命名的文件。

**最后**，通过反射方法`Class.forName()`加载类对象，并用`newInstance`方法将类实例化，并把实例化后的类缓存到`providers`对象中，(`LinkedHashMap<String,S>`类型）然后返回实例对象。

所以我们可以看到`ServiceLoader`不是实例化以后，就去读取配置文件中的具体实现，并进行实例化。而是等到使用迭代器去遍历的时候，才会加载对应的配置文件去解析，调用`hasNext`方法的时候会去加载配置文件进行解析，调用`next`方法的时候进行实例化并缓存。

所有的配置文件只会加载一次，服务提供者也只会被实例化一次，重新加载配置文件可使用`reload`方法。

## SPI机制的缺陷

通过上面的解析，可以发现，我们使用SPI机制的缺陷：

+ 不能按需加载，需要遍历所有的实现，并实例化，然后在循环中才能找到我们需要的实现。如果不想用某些实现类，或者某些类实例化很耗时，它也被载入并实例化了，这就造成了浪费。
+ 获取某个实现类的方式不够灵活，只能通过 Iterator 形式获取，不能根据某个参数来获取对应的实现类。
+ 多个并发多线程使用 ServiceLoader 类的实例是不安全的。

## 参考文章

+ https://cxis.me/2017/04/17/Java%E4%B8%ADSPI%E6%9C%BA%E5%88%B6%E6%B7%B1%E5%85%A5%E5%8F%8A%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90/
+ https://stackoverflow.com/questions/2954372/difference-between-spi-and-api?answertab=votes#tab-top
+ https://zhuanlan.zhihu.com/p/28909673
+ http://blog.itpub.net/69912579/viewspace-2656555/
+ https://www.cnblogs.com/happyframework/archive/2013/09/17/3325560.html
+ https://blog.csdn.net/sakurainluojia/article/details/53534949
+ https://www.jianshu.com/p/0d196ad23915






