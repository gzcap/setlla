---
title: Java基础
date: 2024/09/28
#tags:
#  - 
categories:
  - Java
hideComments: false
---





## JVM、JRE和JDK的关系

<font style="color:rgb(51,51,51);">JVM </font>

<font style="color:rgb(51,51,51);">Java Virtual Machine 是 Java 虚拟机，Java 程序需要运行在虚拟机上，不同的平台有自己的虚拟机，因此  Java 语言可以实现跨平台。 </font>

<font style="color:rgb(51,51,51);">JRE </font>

<font style="color:rgb(51,51,51);">Java Runtime Environment 包括 Java 虚拟机和 Java 程序所需的核心类库等。核 心类库主要是java.lang 包：包含了运行Java程序必不可少的系统类，如基本数据类型、基本数学函数、字符串处理、线程、异常处理类等，系统缺省加载这个包 如果想要运行一个开发好的 Java 程序，计算机中只需要安装 JRE 即可。 </font>

<font style="color:rgb(51,51,51);">JDK </font>

<font style="color:rgb(51,51,51);">Java Development Kit 是提供给 Java 开发人员使用的，其中包含了 Java 的开发工具，也包括了 JRE。所以 安装了JDK，就无需再单独安装JRE了。其中的开发工具：编译工具(javac.exe)，打包工具(jar.exe)等</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1715914143468-55be02f2-ecbf-4d48-92df-46fa0cc5f91b.png" />




## <font style="color:rgb(51,51,51);">什么是跨平台性？原理是什么</font>

<font style="color:rgb(51,51,51);">跨平台性，是指</font><font style="color:rgb(51,51,51);">java</font><font style="color:rgb(51,51,51);">语言编写的程序，一次编译后，可以在多个系统平台上 运行。 </font>

<font style="color:rgb(51,51,51);">实现原理：Java 程序是通过 java 虚拟机在系统平台上运行的，只要该系统可以安装相应的 java 虚拟机， 该系统就可以运行 java 程序</font>

<font style="color:rgb(51,51,51);"></font>

## <font style="color:rgb(51,51,51);">Java语言有哪些特点 </font>

<font style="color:rgb(51,51,51);">简单易学（</font><font style="color:rgb(51,51,51);">Java</font><font style="color:rgb(51,51,51);">语言的语法与</font><font style="color:rgb(51,51,51);">C</font><font style="color:rgb(51,51,51);">语言和</font><font style="color:rgb(51,51,51);">C++</font><font style="color:rgb(51,51,51);">语言很接近） </font>

<font style="color:rgb(51,51,51);">面向对象（封装，继承，多态） </font>

<font style="color:rgb(51,51,51);">平台无关性（</font><font style="color:rgb(51,51,51);">Java</font><font style="color:rgb(51,51,51);">虚拟机实现平台无关性） </font>

<font style="color:rgb(51,51,51);">支持网络编程并且很方便（</font><font style="color:rgb(51,51,51);">Java</font><font style="color:rgb(51,51,51);">语言诞生本身就是为简化网络编程设计的） </font>

<font style="color:rgb(51,51,51);">支持多线程（多线程机制使应用程序在同一时间并行执行多项任） </font>

<font style="color:rgb(51,51,51);">健壮性（</font><font style="color:rgb(51,51,51);">Java</font><font style="color:rgb(51,51,51);">语言的强类型机制、异常处理、垃圾的自动收集等） </font>

<font style="color:rgb(51,51,51);">安全性</font>

<font style="color:rgb(51,51,51);"></font>

## <font style="color:rgb(51,51,51);">什么是字节码？采用字节码的大好处是什么 </font>

**<font style="color:rgb(51,51,51);">字节码</font>**<font style="color:rgb(51,51,51);">：Java 源代码经过虚拟机编译器编译后产生的文件（即扩展为 .class 的文 件），它不面向任何特 定的处理器，只面向虚拟机。 </font>

**<font style="color:rgb(51,51,51);">采用字节码的好处： </font>**<font style="color:rgb(51,51,51);">Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的 问题，同时又保留了解 释型语言可移植的特点。所以 Java 程序运行时比较高效， 而且，由于字节码并不专对一种特定的机器， 因此，Java 程序无须重新编译便可 在多种不同的计算机上运行。 </font>

**<font style="color:rgb(51,51,51);">先看下java中的编译器和解释器： </font>**<font style="color:rgb(51,51,51);">Java中引入了虚拟机的概念，即在机器和编译程序之间加入了一层抽象的虚拟机器。这台虚拟的机器在任何平台上都提供给编译程序一个的共同的接口。编译程 序只需要面向虚拟机，生成虚拟机能够理解的代码，然后由解释器来将虚拟机代 码转换为特定系统的机器码执行。在Java中，这种供虚拟机理解的代码叫做字节码（即扩展为.class的文件），它不面向任何特定的处理器，只面向虚拟机。每一种平台的解释器是不同的，但是实现的虚拟机是相同的。Java源程序经过编译 器编译后变成字节码，字节码由虚拟机解释执行，虚拟机将每一条要执行的字节 码送给解释器，解释器将其翻译成特定机器上的机器码， 然后在特定的机器上运行，这就是上面提到的Java的特点的编译与解释并存的解释。 </font>

## <font style="color:rgb(51,51,51);">什么是Java程序的主类？应用程序和小程序的主类有何不同？ </font>

<font style="color:rgb(51,51,51);">一个程序中可以有多个类，但只能有一个类是主类。在Java应用程序中，这个主类是指包含main()方法 </font>

<font style="color:rgb(51,51,51);">的类。而在Java小程序中，这个主类是一个继承自</font>**<font style="color:rgb(51,51,51);">系统类 JApplet 或 Applet 的子类</font>**<font style="color:rgb(51,51,51);">。应用程序的主类不一 定要求是 public 类，但小程序的主类要求必须是 public 类。主类是 Java 程序执行的入口点。 </font>

## <font style="color:rgb(51,51,51);">Java应用程序与小程序之间有那些差别？ </font>

<font style="color:rgb(51,51,51);">简单说应用程序是从主线程启动(也就是 main() 方法)。applet 小程序没有 main 方法，主要是嵌在浏览器 页面上运行(调用 init() 线程或者 run() 来启动)，嵌入浏览器这点跟 flash 的小游戏类似。 </font>

## <font style="color:rgb(51,51,51);">Java和C++的区别 </font>

<font style="color:rgb(51,51,51);">我知道很多人没学过</font><font style="color:rgb(51,51,51);">C++</font><font style="color:rgb(51,51,51);">，但是面试官就是没事喜欢拿咱们</font><font style="color:rgb(51,51,51);">Java</font><font style="color:rgb(51,51,51);">和</font><font style="color:rgb(51,51,51);">C++</font><font style="color:rgb(51,51,51);">比呀！ 没办法！！！就算没学过 </font>

<font style="color:rgb(51,51,51);">C++</font><font style="color:rgb(51,51,51);">，也要记下来！ </font>

<font style="color:rgb(51,51,51);">都是面向对象的语言，都支持封装、继承和多态 </font>

<font style="color:rgb(51,51,51);">Java</font><font style="color:rgb(51,51,51);">不提供指针来直接访问内存，程序内存更加安全 </font>

<font style="color:rgb(51,51,51);">Java的类是单继承的，C++支持多重继承；虽然Java的类不可以多继承，但是接口可以多继承。 </font>

<font style="color:rgb(51,51,51);">Java有</font>**<font style="color:rgb(51,51,51);">自动内存管理机制</font>**<font style="color:rgb(51,51,51);">，不需要程序员手动释放无用内存 </font>

## <font style="color:rgb(51,51,51);">Oracle JDK 和 OpenJDK 的对比 </font>

<font style="color:rgb(51,51,51);">1. Oracle JDK</font><font style="color:rgb(51,51,51);">版本将每三年发布一次，而</font><font style="color:rgb(51,51,51);">OpenJDK</font><font style="color:rgb(51,51,51);">版本每三个月发布一 次； </font>

<font style="color:rgb(51,51,51);">2. OpenJDK 是一个参考模型并且是完全开源的，而Oracle JDK是 OpenJDK的一个实现，并不是完全开源的； </font>

<font style="color:rgb(51,51,51);">3. Oracle JDK 比 OpenJDK 更稳定。OpenJDK和Oracle JDK的代码几乎 相同，但Oracle JDK有更多的类和一些错误修复。因此，如果您想开发企 业/商业软件，我建议您选择Oracle JDK，因为它经过了彻底的测试和稳 定。某些情况下，有些人提到在使用OpenJDK 可能会遇到了许多应用程序崩溃的问题，但是，只需切换到Oracle JDK就可以解决问题； </font>

<font style="color:rgb(51,51,51);">4. </font><font style="color:rgb(51,51,51);">在响应性和</font><font style="color:rgb(51,51,51);">JVM</font><font style="color:rgb(51,51,51);">性能方面，</font><font style="color:rgb(51,51,51);">Oracle JDK</font><font style="color:rgb(51,51,51);">与</font><font style="color:rgb(51,51,51);">OpenJDK</font><font style="color:rgb(51,51,51);">相比提供了更好的 性能； </font>

<font style="color:rgb(51,51,51);">5. Oracle JDK不会为即将发布的版本提供长期支持，用户每次都必须通过 更新到最新版本获得支持来获取最新版本； </font>

<font style="color:rgb(51,51,51);">6. Oracle JDK根据二进制代码许可协议获得许可，而OpenJDK根据GPL v2许可获得许可。</font>

<font style="color:rgb(51,51,51);"></font>

## <font style="color:rgb(51,51,51);">面向对象和面向过程的区别</font>

**<font style="color:rgb(51,51,51);">面向过程</font>**<font style="color:rgb(51,51,51);">：是分析解决问题的步骤，然后用函数把这些步骤一步一步地实现，然后在使用的时候一一调用则可。性能较高，所以单片机、嵌入式开发等一般采用面向过程开发 </font>

**<font style="color:rgb(51,51,51);">面向对象</font>**<font style="color:rgb(51,51,51);">：是把构成问题的事务分解成各个对象，而建立对象的目的也不是为了完成一个个步骤，而是为了描述某个事物在解决整个问题的过程中所发生的行为。面向对象有</font>**<font style="color:rgb(51,51,51);">封装、继承、多态</font>**<font style="color:rgb(51,51,51);">的特 性，所以易维护、易复用、易扩展。可以设计出低耦合的系统。 但是性能上来说，比面向过程要低</font>

<font style="color:rgb(51,51,51);"></font>

## <font style="color:rgb(26, 143, 55);">Java的三大平台</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">JavaSE、JavaME、JavaEE</font>

### <font style="color:rgb(106, 90, 205);">JavaSE</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">是其他两个版本的基础。</font>

### <font style="color:rgb(106, 90, 205);">JavaME</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Java语言的小型版，用于嵌入式消费类电子设备或者小型移动设备的开发。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">其中最为主要的还是小型移动设备的开发（手机）。渐渐的没落了，已经被安卓和IOS给替代了。</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">但是，安卓也是可以用Java来开发的。</font>

### <font style="color:rgb(106, 90, 205);">JavaEE</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">用于Web方向的网站开发。（主要从事后台服务器的开发）</font>

<font style="color:rgb(51, 51, 51);">	在服务器领域，Java是当之无愧的龙头老大。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1726231782038-7121e037-43d6-4d06-bd76-061497abb808.png" />


## <font style="color:rgb(0, 119, 187);">JVM的工作原理</font>

## <font style="color:rgb(0, 119, 187);">JIT </font>

<font style="color:rgb(51, 51, 51);">当虚拟机发现某个方法或代码块的运行特别频繁时，就会把这些代码认定为“热点代码“</font>

**<font style="color:rgb(219, 63, 30);">JIT编译(just-in-time compilation)</font>**<font style="color:rgb(51, 51, 51);">狭义来说是热点代码即将第一次被执行时进行编译（将字节码编译为硬件可执行的机器码)因而叫“即时编译”</font>

<font style="color:rgb(51, 51, 51);">JIT的出现使得JVM不只是解释执行机器码，而是通过优化技术，将一部分字节码编译成机器码执行，提高程序的执行效率</font>

<font style="color:rgb(51, 51, 51);">Java编译器针对Java虚拟机产生class文件，是独立于平台的。</font>

<font style="color:rgb(51, 51, 51);">Java虚拟机(JVM)读取并处理经编译过的平台无关的字节码class文件 。</font>

<font style="color:rgb(51, 51, 51);">Java解释器负责将Java虚拟机的代码转换成特定平台上的机器码执行。</font>

<font style="color:rgb(51, 51, 51);">一个典型的Jav程序开发过程</font>

<font style="color:rgb(51, 51, 51);">编写Java程序通常经历5个阶段：</font>

**<font style="color:rgb(64, 224, 208);">1.</font>**<font style="color:rgb(51, 51, 51);">Edit</font>**<font style="color:rgb(64, 224, 208);">（编辑）</font>**<font style="color:rgb(51, 51, 51);">:程序员书写代码并保存到磁盘上</font>

**<font style="color:rgb(64, 224, 208);">2.</font>**<font style="color:rgb(51, 51, 51);">Compile</font>**<font style="color:rgb(64, 224, 208);">（编译）</font>**<font style="color:rgb(51, 51, 51);">:</font>**<font style="color:rgb(64, 224, 208);">编译器生成字节码（</font>**<font style="color:rgb(51, 51, 51);">byte code）</font>

**<font style="color:rgb(64, 224, 208);">3.</font>**<font style="color:rgb(51, 51, 51);">Load</font>**<font style="color:rgb(64, 224, 208);">（装入）</font>**<font style="color:rgb(51, 51, 51);">:</font>**<font style="color:rgb(64, 224, 208);">类装载器（</font>**<font style="color:rgb(51, 51, 51);">Class loader）在内存中保存字节码</font>

**<font style="color:rgb(64, 224, 208);">4.</font>**<font style="color:rgb(51, 51, 51);">Verify</font>**<font style="color:rgb(64, 224, 208);">（校验）</font>**<font style="color:rgb(51, 51, 51);">:</font>**<font style="color:rgb(64, 224, 208);">校验器</font>**<font style="color:rgb(51, 51, 51);">Verifier保证字节码不违反安全规则</font>

**<font style="color:rgb(64, 224, 208);">5.</font>**<font style="color:rgb(51, 51, 51);">Execute</font>**<font style="color:rgb(64, 224, 208);">（执行）</font>**<font style="color:rgb(51, 51, 51);">:解释器将字节码翻译成机器码</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">解释执行方式:JVM通过解释器将字节码逐条读入，逐条解释翻译成对应的机器指令。很显然，这种执行方式虽灵活但执行速度会比较低。为了提高执行速度，引入了JIT（Just-in-time compilation）技术。</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">即时编译方式（即JIT):当JIT编译启用时（默认是启用的），JVM将解释后的字节码文件发给JIT编译器，JIT编译器将字节码编译成本机机器代码，并把编译过的机器码保存起来，已备下次使用。为了加快执行速度，JIT目前只对经常使用的热代码进行编译。</font>

### **<font style="color:rgb(64, 224, 208);">垃圾回收机制</font>**

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">“垃圾回收”(GC,Garbage Collection)就是清理不再使用的对象，释放内存空间，Java程序的内存分配和回收都是由JRE在后台自动进行的。</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">垃圾回收特点：</font><font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">内存优化：回收无用对象并释放内存空间，也可以清除内存记录碎片</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">动态回收：动态存储管理技术，自动识别不再被程序引用的对象并回收。</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">回收的不确定性：在CPU空闲或内存不足时自动进行。</font>

<font style="color:rgb(51, 51, 51);">		占用系统开销：JRE使用后台线程进行检测和控制垃圾回收</font>



