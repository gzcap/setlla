---
title: JavaIO
date: 2024/09/28
tags:
  - JavaIO
categories:
  - Java
hideComments: false
---

## <font style="color:rgb(44, 62, 80);">Java IO 知识体系</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727436392665-6fedbe04-d6b9-4b23-a4e0-c51cc44664ad.png" />


<font style="color:rgb(44, 62, 80);">好久没搞过 IO 了，老王看到这幅思维导图也是吃了一惊。想想也是，他当初学习 Java IO 的时候头也大，乌央乌央的一片，全是类，估计是所有 Java 包里面类最多的，一会是 Input 一会是 Output，一会是 Reader 一会是 Writer，真不知道 Java 的设计者是怎么想的。</font>

<font style="color:rgb(44, 62, 80);">看着肺都快要气炸的小二，老王深深地吸了一口气，耐心地对小二说：“主要是 Java 的设计者考虑得比较多吧，所以 IO 给人一种很乱的感觉，我来给你梳理一下。”</font>

### <font style="color:rgb(44, 62, 80);">初识 Java IO</font>

<font style="color:rgb(44, 62, 80);">IO，即 in 和 out，也就是输入和输出，指应用程序和外部设备之间的数据传递，常见的外部设备包括文件、管道、网络连接。</font>

<font style="color:rgb(44, 62, 80);">Java 中是通过流处理 IO 的，那么什么是流？</font>

<font style="color:rgb(44, 62, 80);">流（Stream），是一个抽象的概念，是指一连串的数据（字符或字节），是以先进先出的方式发送信息的通道。</font>

<font style="color:rgb(44, 62, 80);">当程序需要读取数据的时候，就会开启一个通向数据源的流，这个数据源可以是文件，内存，或是网络连接。类似的，当程序需要写入数据的时候，就会开启一个通向目的地的流。这时候你就可以想象数据好像在这其中“流”动一样。</font>

<font style="color:rgb(44, 62, 80);">一般来说关于流的特性有下面几点：</font>

+ <font style="color:rgb(44, 62, 80);">先进先出：最先写入输出流的数据最先被输入流读取到。</font>
+ <font style="color:rgb(44, 62, 80);">顺序存取：可以一个接一个地往流中写入一串字节，读出时也将按写入顺序读取一串字节，不能随机访问中间的数据。（RandomAccessFile除外）</font>
+ <font style="color:rgb(44, 62, 80);">只读或只写：每个流只能是输入流或输出流的一种，不能同时具备两个功能，输入流只能进行读操作，对输出流只能进行写操作。在一个数据传输通道中，如果既要写入数据，又要读取数据，则要分别提供两个流。</font>

### <font style="color:rgb(44, 62, 80);">传输方式划分</font>

<font style="color:rgb(44, 62, 80);">就按照你的那副思维导图来说吧。</font>

<font style="color:rgb(44, 62, 80);">传输方式有两种，字节和字符，那首先得搞明白字节和字符有什么区别，对吧？</font>

<font style="color:rgb(44, 62, 80);">字节（byte）是计算机中用来表示存储容量的一个计量单位，通常情况下，一个字节有 8 位（bit）。</font>

<font style="color:rgb(44, 62, 80);">字符（char）可以是计算机中使用的字母、数字、和符号，比如说 A 1 $ 这些。</font>

<font style="color:rgb(44, 62, 80);">通常来说，一个字母或者一个字符占用一个字节，一个汉字占用两个字节。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727436383981-ff562789-3576-48b2-aa89-bc59d99aee18.png" />


<font style="color:rgb(44, 62, 80);">具体还要看字符编码，比如说在</font>**<font style="color:rgb(44, 62, 80);"> UTF-8 编码下，一个英文字母（不分大小写）为一个字节，一个中文汉字为三个字节</font>**<font style="color:rgb(44, 62, 80);">；在 Unicode 编码中，一个英文字母为一个字节，一个中文汉字为两个字节。</font>

> <font style="color:rgb(102, 102, 102);">PS：关于字符编码，可以看前面的章节：</font>[<font style="color:rgb(102, 102, 102);">锟斤拷</font>](https://javabetter.cn/basic-extra-meal/java-unicode.html)

<font style="color:rgb(44, 62, 80);">明白了字节与字符的区别，再来看字节流和字符流就会轻松多了。</font>

<font style="color:rgb(44, 62, 80);">字节流用来处理二进制文件，比如说图片啊、MP3 啊、视频啊。</font>

<font style="color:rgb(44, 62, 80);">字符流用来处理文本文件，文本文件可以看作是一种特殊的二进制文件，只不过经过了编码，便于人们阅读。</font>

<font style="color:rgb(44, 62, 80);">换句话说就是，字节流可以处理一切文件，而字符流只能处理文本。</font>

<font style="color:rgb(44, 62, 80);">虽然 IO 类很多，但核心的就是 4 个抽象类：InputStream、OutputStream、Reader、Writer。</font>

<font style="color:rgb(44, 62, 80);">（</font>**<font style="color:rgb(44, 62, 80);">抽象大法真好</font>**<font style="color:rgb(44, 62, 80);">）</font>

<font style="color:rgb(44, 62, 80);">虽然 IO 类的方法也很多，但核心的也就 2 个：read 和 write。</font>

**<font style="color:rgb(44, 62, 80);">InputStream 类</font>**

+ `<font style="color:rgb(44, 62, 80);">int read()</font>`<font style="color:rgb(44, 62, 80);">：读取数据</font>
+ `<font style="color:rgb(44, 62, 80);">int read(byte b[], int off, int len)</font>`<font style="color:rgb(44, 62, 80);">：从第 off 位置开始读，读取 len 长度的字节，然后放入数组 b 中</font>
+ `<font style="color:rgb(44, 62, 80);">long skip(long n)</font>`<font style="color:rgb(44, 62, 80);">：跳过指定个数的字节</font>
+ `<font style="color:rgb(44, 62, 80);">int available()</font>`<font style="color:rgb(44, 62, 80);">：返回可读的字节数</font>
+ `<font style="color:rgb(44, 62, 80);">void close()</font>`<font style="color:rgb(44, 62, 80);">：关闭流，释放资源</font>

**<font style="color:rgb(44, 62, 80);">OutputStream 类</font>**

+ `<font style="color:rgb(44, 62, 80);">void write(int b)</font>`<font style="color:rgb(44, 62, 80);">： 写入一个字节，虽然参数是一个 int 类型，但只有低 8 位才会写入，高 24 位会舍弃（这块后面再讲）</font>
+ `<font style="color:rgb(44, 62, 80);">void write(byte b[], int off, int len)</font>`<font style="color:rgb(44, 62, 80);">： 将数组 b 中的从 off 位置开始，长度为 len 的字节写入</font>
+ `<font style="color:rgb(44, 62, 80);">void flush()</font>`<font style="color:rgb(44, 62, 80);">： 强制刷新，将缓冲区的数据写入</font>
+ `<font style="color:rgb(44, 62, 80);">void close()</font>`<font style="color:rgb(44, 62, 80);">：关闭流</font>

**<font style="color:rgb(44, 62, 80);">Reader 类</font>**

+ `<font style="color:rgb(44, 62, 80);">int read()</font>`<font style="color:rgb(44, 62, 80);">：读取单个字符</font>
+ `<font style="color:rgb(44, 62, 80);">int read(char cbuf[], int off, int len)</font>`<font style="color:rgb(44, 62, 80);">：从第 off 位置开始读，读取 len 长度的字符，然后放入数组 b 中</font>
+ `<font style="color:rgb(44, 62, 80);">long skip(long n)</font>`<font style="color:rgb(44, 62, 80);">：跳过指定个数的字符</font>
+ `<font style="color:rgb(44, 62, 80);">int ready()</font>`<font style="color:rgb(44, 62, 80);">：是否可以读了</font>
+ `<font style="color:rgb(44, 62, 80);">void close()</font>`<font style="color:rgb(44, 62, 80);">：关闭流，释放资源</font>

**<font style="color:rgb(44, 62, 80);">Writer 类</font>**

+ `<font style="color:rgb(44, 62, 80);">void write(int c)</font>`<font style="color:rgb(44, 62, 80);">： 写入一个字符</font>
+ `<font style="color:rgb(44, 62, 80);">void write( char cbuf[], int off, int len)</font>`<font style="color:rgb(44, 62, 80);">： 将数组 cbuf 中的从 off 位置开始，长度为 len 的字符写入</font>
+ `<font style="color:rgb(44, 62, 80);">void flush()</font>`<font style="color:rgb(44, 62, 80);">： 强制刷新，将缓冲区的数据写入</font>
+ `<font style="color:rgb(44, 62, 80);">void close()</font>`<font style="color:rgb(44, 62, 80);">：关闭流</font>

<font style="color:rgb(44, 62, 80);">理解了上面这些方法，基本上 IO 的灵魂也就全部掌握了。</font>

<font style="color:rgb(44, 62, 80);">字节流和字符流的区别：</font>

+ <font style="color:rgb(44, 62, 80);">字节流一般用来处理图像、视频、音频、PPT、Word等类型的文件。字符流一般用于处理纯文本类型的文件，如TXT文件等，但不能处理图像视频等非文本文件。用一句话说就是：字节流可以处理一切文件，而字符流只能处理纯文本文件。</font>
+ <font style="color:rgb(44, 62, 80);">字节流本身没有缓冲区，缓冲字节流相对于字节流，效率提升非常高。而字符流本身就带有缓冲区，缓冲字符流相对于字符流效率提升就不是那么大了。</font>

<font style="color:rgb(44, 62, 80);">以写文件为例，我们查看字符流的源码，发现确实有利用到缓冲区：</font>

```plain
// 声明一个 char 类型的数组，用于写入输出流
private char[] writeBuffer;

// 定义 writeBuffer 数组的大小，必须 >= 1
private static final int WRITE_BUFFER_SIZE = 1024;

// 写入给定字符串中的一部分到输出流中
public void write(String str, int off, int len) throws IOException {
    // 使用 synchronized 关键字同步代码块，确保线程安全
    synchronized (lock) {
        char cbuf[];
        // 如果 len <= WRITE_BUFFER_SIZE，则使用 writeBuffer 数组进行写入
        if (len <= WRITE_BUFFER_SIZE) {
            // 如果 writeBuffer 为 null，则创建一个大小为 WRITE_BUFFER_SIZE 的新 char 数组
            if (writeBuffer == null) {
                writeBuffer = new char[WRITE_BUFFER_SIZE];
            }
            cbuf = writeBuffer;
        } else {    // 如果 len > WRITE_BUFFER_SIZE，则不永久分配非常大的缓冲区
            // 创建一个大小为 len 的新 char 数组
            cbuf = new char[len];
        }
        // 将 str 中的一部分（从 off 开始，长度为 len）拷贝到 cbuf 数组中
        str.getChars(off, (off + len), cbuf, 0);
        // 将 cbuf 数组中的数据写入输出流中
        write(cbuf, 0, len);
    }
}
```

<font style="color:rgb(44, 62, 80);">这段代码是 Java IO 类库中的 OutputStreamWriter 类的 write 方法，可以看到缓冲区的大小是 1024 个 char。</font>

<font style="color:rgb(44, 62, 80);">我们再以文件的字符流和字节流来做一下对比，代码差别很小。</font>

```plain
// 字节流
try (FileInputStream fis = new FileInputStream("input.txt");
     FileOutputStream fos = new FileOutputStream("output.txt")) {
    byte[] buffer = new byte[1024];
    int len;
    while ((len = fis.read(buffer)) != -1) {
        fos.write(buffer, 0, len);
    }
} catch (IOException e) {
    e.printStackTrace();
}

// 字符流
try (FileReader fr = new FileReader("input.txt");
     FileWriter fw = new FileWriter("output.txt")) {
    char[] buffer = new char[1024];
    int len;
    while ((len = fr.read(buffer)) != -1) {
        fw.write(buffer, 0, len);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### <font style="color:rgb(44, 62, 80);">操作对象划分</font>

<font style="color:rgb(44, 62, 80);">小二，你细想一下，IO IO，不就是输入输出（Input/Output）嘛：</font>

+ <font style="color:rgb(44, 62, 80);">Input：将外部的数据读入内存，比如说把文件从硬盘读取到内存，从网络读取数据到内存等等</font>
+ <font style="color:rgb(44, 62, 80);">Output：将内存中的数据写入到外部，比如说把数据从内存写入到文件，把数据从内存输出到网络等等。</font>

<font style="color:rgb(44, 62, 80);">所有的程序，在执行的时候，都是在内存上进行的，一旦关机，内存中的数据就没了，那如果想要持久化，就需要把内存中的数据输出到外部，比如说文件。</font>

<font style="color:rgb(44, 62, 80);">文件操作算是 IO 中最典型的操作了，也是最频繁的操作。那其实你可以换个角度来思考，比如说按照 IO 的操作对象来思考，IO 就可以分类为：文件、数组、管道、基本数据类型、缓冲、打印、对象序列化/反序列化，以及转换等。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727436380851-29bd9a79-4e4c-4b09-90ed-6c551cf18473.png" />


#### <font style="color:rgb(44, 62, 80);">文件</font>

<font style="color:rgb(44, 62, 80);">文件流也就是直接操作文件的流，可以细分为字节流（FileInputStream 和 FileOuputStream）和字符流（FileReader 和 FileWriter）。</font>

<font style="color:rgb(44, 62, 80);">FileInputStream 的例子：</font>

```plain
// 声明一个 int 类型的变量 b，用于存储读取到的字节
int b;
// 创建一个 FileInputStream 对象，用于读取文件 fis.txt 中的数据
FileInputStream fis1 = new FileInputStream("fis.txt");

// 循环读取文件中的数据
while ((b = fis1.read()) != -1) {
    // 将读取到的字节转换为对应的 ASCII 字符，并输出到控制台
    System.out.println((char)b);
}

// 关闭 FileInputStream 对象，释放资源
fis1.close();
```

<font style="color:rgb(44, 62, 80);">FileOutputStream 的例子：</font>

```plain
// 创建一个 FileOutputStream 对象，用于写入数据到文件 fos.txt 中
FileOutputStream fos = new FileOutputStream("fos.txt");

// 向文件中写入数据，这里写入的是字符串 "沉默王二" 对应的字节数组
fos.write("沉默王二".getBytes());

// 关闭 FileOutputStream 对象，释放资源
fos.close();
```

<font style="color:rgb(44, 62, 80);">FileReader 的例子：</font>

```plain
// 声明一个 int 类型的变量 b，用于存储读取到的字符
int b = 0;

// 创建一个 FileReader 对象，用于读取文件 read.txt 中的数据
FileReader fileReader = new FileReader("read.txt");

// 循环读取文件中的数据
while ((b = fileReader.read()) != -1) {
    // 将读取到的字符强制转换为 char 类型，并输出到控制台
    System.out.println((char)b);
}

// 关闭 FileReader 对象，释放资源
fileReader.close();
```

<font style="color:rgb(44, 62, 80);">FileWriter 的例子：</font>

```plain
// 创建一个 FileWriter 对象，用于写入数据到文件 fw.txt 中
FileWriter fileWriter = new FileWriter("fw.txt");

// 将字符串 "沉默王二" 转换为字符数组
char[] chars = "沉默王二".toCharArray();

// 向文件中写入数据，这里写入的是 chars 数组中的所有字符
fileWriter.write(chars, 0, chars.length);

// 关闭 FileWriter 对象，释放资源
fileWriter.close();
```

<font style="color:rgb(44, 62, 80);">文件流还可以用于创建、删除、重命名文件等操作。FileOutputStream 和 FileWriter 构造函数的第二个参数可以指定是否追加数据到文件末尾。</font>

<font style="color:rgb(44, 62, 80);">示例代码：</font>

```plain
// 创建文件
File file = new File("test.txt");
if (file.createNewFile()) {
    System.out.println("文件创建成功");
} else {
    System.out.println("文件已存在");
}

// 删除文件
if (file.delete()) {
    System.out.println("文件删除成功");
} else {
    System.out.println("文件删除失败");
}

// 重命名文件
File oldFile = new File("old.txt");
File newFile = new File("new.txt");
if (oldFile.renameTo(newFile)) {
    System.out.println("文件重命名成功");
} else {
    System.out.println("文件重命名失败");
}
```

<font style="color:rgb(44, 62, 80);">当掌握了文件的输入输出，其他的自然也就掌握了，都大差不差。</font>

#### <font style="color:rgb(44, 62, 80);">数组（内存）</font>

<font style="color:rgb(44, 62, 80);">通常来说，针对文件的读写操作，使用文件流配合缓冲流就够用了，但为了提升效率，频繁地读写文件并不是太好，那么就出现了数组流，有时候也称为内存流。</font>

<font style="color:rgb(44, 62, 80);">ByteArrayInputStream 的例子：</font>

```plain
// 创建一个 ByteArrayInputStream 对象，用于从字节数组中读取数据
InputStream is = new BufferedInputStream(
        new ByteArrayInputStream(
                "沉默王二".getBytes(StandardCharsets.UTF_8)));

// 定义一个字节数组用于存储读取到的数据
byte[] flush = new byte[1024];

// 定义一个变量用于存储每次读取到的字节数
int len = 0;

// 循环读取字节数组中的数据，并输出到控制台
while (-1 != (len = is.read(flush))) {
    // 将读取到的字节转换为对应的字符串，并输出到控制台
    System.out.println(new String(flush, 0, len));
}

// 关闭输入流，释放资源
is.close();
```

<font style="color:rgb(44, 62, 80);">ByteArrayOutputStream 的例子：</font>

```plain
// 创建一个 ByteArrayOutputStream 对象，用于写入数据到内存缓冲区中
ByteArrayOutputStream bos = new ByteArrayOutputStream();

// 定义一个字节数组用于存储要写入内存缓冲区中的数据
byte[] info = "沉默王二".getBytes();

// 向内存缓冲区中写入数据，这里写入的是 info 数组中的所有字节
bos.write(info, 0, info.length);

// 将内存缓冲区中的数据转换为字节数组
byte[] dest = bos.toByteArray();

// 关闭 ByteArrayOutputStream 对象，释放资源
bos.close();
```

<font style="color:rgb(44, 62, 80);">数组流可以用于在内存中读写数据，比如将数据存储在字节数组中进行压缩、加密、序列化等操作。它的优点是不需要创建临时文件，可以提高程序的效率。但是，数组流也有缺点，它只能存储有限的数据量，如果存储的数据量过大，会导致内存溢出。</font>

#### <font style="color:rgb(44, 62, 80);">管道</font>

<font style="color:rgb(44, 62, 80);">Java 中的管道和 Unix/Linux 中的管道不同，在 Unix/Linux 中，不同的进程之间可以通过管道来通信，但 Java 中，通信的双方必须在同一个进程中，也就是在同一个 JVM 中，管道为线程之间的通信提供了通信能力。</font>

<font style="color:rgb(44, 62, 80);">一个线程通过 PipedOutputStream 写入的数据可以被另外一个线程通过相关联的 PipedInputStream 读取出来。</font>

```plain
// 创建一个 PipedOutputStream 对象和一个 PipedInputStream 对象
final PipedOutputStream pipedOutputStream = new PipedOutputStream();
final PipedInputStream pipedInputStream = new PipedInputStream(pipedOutputStream);

// 创建一个线程，向 PipedOutputStream 中写入数据
Thread thread1 = new Thread(new Runnable() {
    @Override
    public void run() {
        try {
            // 将字符串 "沉默王二" 转换为字节数组，并写入到 PipedOutputStream 中
            pipedOutputStream.write("沉默王二".getBytes(StandardCharsets.UTF_8));
            // 关闭 PipedOutputStream，释放资源
            pipedOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
});

// 创建一个线程，从 PipedInputStream 中读取数据并输出到控制台
Thread thread2 = new Thread(new Runnable() {
    @Override
    public void run() {
        try {
            // 定义一个字节数组用于存储读取到的数据
            byte[] flush = new byte[1024];
            // 定义一个变量用于存储每次读取到的字节数
            int len = 0;
            // 循环读取字节数组中的数据，并输出到控制台
            while (-1 != (len = pipedInputStream.read(flush))) {
                // 将读取到的字节转换为对应的字符串，并输出到控制台
                System.out.println(new String(flush, 0, len));
            }
            // 关闭 PipedInputStream，释放资源
            pipedInputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
});

// 启动线程1和线程2
thread1.start();
thread2.start();
```

<font style="color:rgb(44, 62, 80);">使用管道流可以实现不同线程之间的数据传输，可以用于线程间的通信、数据的传递等。但是，管道流也有一些局限性，比如只能在同一个 JVM 中的线程之间使用，不能跨越不同的 JVM 进程。</font>

#### <font style="color:rgb(44, 62, 80);">基本数据类型</font>

<font style="color:rgb(44, 62, 80);">基本数据类型输入输出流是一个字节流，该流不仅可以读写字节和字符，还可以读写基本数据类型。</font>

<font style="color:rgb(44, 62, 80);">DataInputStream 提供了一系列可以读基本数据类型的方法：</font>

```plain
// 创建一个 DataInputStream 对象，用于从文件中读取数据
DataInputStream dis = new DataInputStream(new FileInputStream("das.txt"));

// 读取一个字节，将其转换为 byte 类型
byte b = dis.readByte();

// 读取两个字节，将其转换为 short 类型
short s = dis.readShort();

// 读取四个字节，将其转换为 int 类型
int i = dis.readInt();

// 读取八个字节，将其转换为 long 类型
long l = dis.readLong();

// 读取四个字节，将其转换为 float 类型
float f = dis.readFloat();

// 读取八个字节，将其转换为 double 类型
double d = dis.readDouble();

// 读取一个字节，将其转换为 boolean 类型
boolean bb = dis.readBoolean();

// 读取两个字节，将其转换为 char 类型
char ch = dis.readChar();

// 关闭 DataInputStream，释放资源
dis.close();
```

<font style="color:rgb(44, 62, 80);">DataOutputStream 提供了一系列可以写基本数据类型的方法：</font>

```plain
// 创建一个 DataOutputStream 对象，用于将数据写入到文件中
DataOutputStream das = new DataOutputStream(new FileOutputStream("das.txt"));

// 将一个 byte 类型的数据写入到文件中
das.writeByte(10);

// 将一个 short 类型的数据写入到文件中
das.writeShort(100);

// 将一个 int 类型的数据写入到文件中
das.writeInt(1000);

// 将一个 long 类型的数据写入到文件中
das.writeLong(10000L);

// 将一个 float 类型的数据写入到文件中
das.writeFloat(12.34F);

// 将一个 double 类型的数据写入到文件中
das.writeDouble(12.56);

// 将一个 boolean 类型的数据写入到文件中
das.writeBoolean(true);

// 将一个 char 类型的数据写入到文件中
das.writeChar('A');

// 关闭 DataOutputStream，释放资源
das.close();
```

<font style="color:rgb(44, 62, 80);">除了 DataInputStream 和 DataOutputStream，Java IO 还提供了其他一些读写基本数据类型和字符串的流类，包括 ObjectInputStream 和 ObjectOutputStream（用于读写对象）。</font>

<font style="color:rgb(44, 62, 80);">示例代码：</font>

```plain
public static void main(String[] args) {
    try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("person.dat"))) {
        Person p = new Person("张三", 20);
        oos.writeObject(p);
    } catch (IOException e) {
        e.printStackTrace();
    }

    try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("person.dat"))) {
        Person p = (Person) ois.readObject();
        System.out.println(p);
    } catch (IOException | ClassNotFoundException e) {
        e.printStackTrace();
    }
}
```

<font style="color:rgb(44, 62, 80);">以上代码创建了一个 Person 对象，将其写入文件中，然后从文件中读取该对象，并打印在控制台上。</font>

#### <font style="color:rgb(44, 62, 80);">缓冲</font>

<font style="color:rgb(44, 62, 80);">CPU 很快，它比内存快 100 倍，比磁盘快百万倍。那也就意味着，程序和内存交互会很快，和硬盘交互相对就很慢，这样就会导致性能问题。</font>

<font style="color:rgb(44, 62, 80);">为了减少程序和硬盘的交互，提升程序的效率，就引入了缓冲流，也就是类名前缀带有 Buffer 的那些，比如说 BufferedInputStream、BufferedOutputStream、BufferedReader、BufferedWriter。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727436386136-651d69f2-0a16-4247-a69f-7d9c7b8cd96c.png" />


<font style="color:rgb(44, 62, 80);">缓冲流在内存中设置了一个缓冲区，只有缓冲区存储了足够多的带操作的数据后，才会和内存或者硬盘进行交互。简单来说，就是一次多读/写点，少读/写几次，这样程序的性能就会提高。</font>

<font style="color:rgb(44, 62, 80);">以下是一个使用 BufferedInputStream 读取文件的示例代码：</font>

```plain
// 创建一个 BufferedInputStream 对象，用于从文件中读取数据
BufferedInputStream bis = new BufferedInputStream(new FileInputStream("data.txt"));

// 创建一个字节数组，作为缓存区
byte[] buffer = new byte[1024];

// 读取文件中的数据，并将其存储到缓存区中
int bytesRead;
while ((bytesRead = bis.read(buffer)) != -1) {
    // 对缓存区中的数据进行处理
    // 这里只是简单地将读取到的字节数组转换为字符串并打印出来
    System.out.println(new String(buffer, 0, bytesRead));
}

// 关闭 BufferedInputStream，释放资源
bis.close();
```

<font style="color:rgb(44, 62, 80);">上述代码中，首先创建了一个 BufferedInputStream 对象，用于从文件中读取数据。然后创建了一个字节数组作为缓存区，每次读取数据时将数据存储到缓存区中。读取数据的过程是通过 while 循环实现的，每次读取数据后对缓存区中的数据进行处理。最后关闭 BufferedInputStream，释放资源。</font>

<font style="color:rgb(44, 62, 80);">以下是一个使用 BufferedOutputStream 写入文件的示例代码：</font>

```plain
// 创建一个 BufferedOutputStream 对象，用于将数据写入到文件中
BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("data.txt"));

// 创建一个字节数组，作为缓存区
byte[] buffer = new byte[1024];

// 将数据写入到文件中
String data = "沉默王二是个大傻子!";
buffer = data.getBytes();
bos.write(buffer);

// 刷新缓存区，将缓存区中的数据写入到文件中
bos.flush();

// 关闭 BufferedOutputStream，释放资源
bos.close();
```

<font style="color:rgb(44, 62, 80);">上述代码中，首先创建了一个 BufferedOutputStream 对象，用于将数据写入到文件中。然后创建了一个字节数组作为缓存区，将数据写入到缓存区中。写入数据的过程是通过 write() 方法实现的，将字节数组作为参数传递给 write() 方法即可。</font>

<font style="color:rgb(44, 62, 80);">最后，通过 flush() 方法将缓存区中的数据写入到文件中。在写入数据时，由于使用了 BufferedOutputStream，数据会先被写入到缓存区中，只有在缓存区被填满或者调用了 flush() 方法时才会将缓存区中的数据写入到文件中。</font>

<font style="color:rgb(44, 62, 80);">以下是一个使用 BufferedReader 读取文件的示例代码：</font>

```plain
// 创建一个 BufferedReader 对象，用于从文件中读取数据
BufferedReader br = new BufferedReader(new FileReader("data.txt"));

// 读取文件中的数据，并将其存储到字符串中
String line;
while ((line = br.readLine()) != null) {
    // 对读取到的数据进行处理
    // 这里只是简单地将读取到的每一行字符串打印出来
    System.out.println(line);
}

// 关闭 BufferedReader，释放资源
br.close();
```

<font style="color:rgb(44, 62, 80);">上述代码中，首先创建了一个 BufferedReader 对象，用于从文件中读取数据。然后使用 readLine() 方法读取文件中的数据，每次读取一行数据并将其存储到一个字符串中。读取数据的过程是通过 while 循环实现的。</font>

<font style="color:rgb(44, 62, 80);">以下是一个使用 BufferedWriter 写入文件的示例代码：</font>

```plain
// 创建一个 BufferedWriter 对象，用于将数据写入到文件中
BufferedWriter bw = new BufferedWriter(new FileWriter("data.txt"));

// 将数据写入到文件中
String data = "沉默王二，真帅气";
bw.write(data);

// 刷新缓存区，将缓存区中的数据写入到文件中
bw.flush();

// 关闭 BufferedWriter，释放资源
bw.close();
```

<font style="color:rgb(44, 62, 80);">上述代码中，首先创建了一个 BufferedWriter 对象，用于将数据写入到文件中。然后使用 write() 方法将数据写入到缓存区中，写入数据的过程和使用 FileWriter 类似。需要注意的是，使用 BufferedWriter 写入数据时，数据会先被写入到缓存区中，只有在缓存区被填满或者调用了 flush() 方法时才会将缓存区中的数据写入到文件中。</font>

<font style="color:rgb(44, 62, 80);">最后，通过 flush() 方法将缓存区中的数据写入到文件中，并通过 close() 方法关闭 BufferedWriter，释放资源。</font>

<font style="color:rgb(44, 62, 80);">使用缓冲流可以提高读写效率，减少了频繁的读写磁盘或网络的次数，从而提高了程序的性能。但是，在使用缓冲流时需要注意缓冲区的大小和清空缓冲区的时机，以避免数据丢失或不完整的问题。</font>

#### <font style="color:rgb(44, 62, 80);">打印</font>

<font style="color:rgb(44, 62, 80);">Java 的打印流是一组用于打印输出数据的类，包括 PrintStream 和 PrintWriter 两个类。</font>

<font style="color:rgb(44, 62, 80);">恐怕 Java 程序员一生当中最常用的就是打印流了：</font>`<font style="color:rgb(44, 62, 80);">System.out</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">其实返回的就是一个 PrintStream 对象，可以用来打印各式各样的对象。</font>

```plain
System.out.println("沉默王二是真的二！");
```

<font style="color:rgb(44, 62, 80);">PrintStream 最终输出的是字节数据，而 PrintWriter 则是扩展了 Writer 接口，所以它的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">print()/println()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法最终输出的是字符数据。使用上几乎和 PrintStream 一模一样。</font>

```plain
StringWriter buffer = new StringWriter();
try (PrintWriter pw = new PrintWriter(buffer)) {
    pw.println("沉默王二");
}
System.out.println(buffer.toString());
```

#### <font style="color:rgb(44, 62, 80);">对象序列化/反序列化</font>

<font style="color:rgb(44, 62, 80);">序列化本质上是将一个 Java 对象转成字节数组，然后可以将其保存到文件中，或者通过网络传输到远程。</font>

```plain
// 创建一个 ByteArrayOutputStream 对象 buffer，用于存储数据
ByteArrayOutputStream buffer = new ByteArrayOutputStream();

// 使用 try-with-resources 语句创建一个 ObjectOutputStream 对象 output，并将其与 buffer 关联
try (ObjectOutputStream output = new ObjectOutputStream(buffer)) {
    
    // 使用 writeUTF() 方法将字符串 "沉默王二" 写入到缓冲区中
    output.writeUTF("沉默王二");
}

// 使用 toByteArray() 方法将缓冲区中的数据转换成字节数组，并输出到控制台
System.out.println(Arrays.toString(buffer.toByteArray()));
```

<font style="color:rgb(44, 62, 80);">与其对应的，有序列化，就有反序列化，也就是再将字节数组转成 Java 对象的过程。</font>

```plain
try (ObjectInputStream input = new ObjectInputStream(new FileInputStream(
        new File("Person.txt")))) {
    String s = input.readUTF();
}
```

<font style="color:rgb(44, 62, 80);">这段代码主要使用了 Java 的 ByteArrayOutputStream 和 ObjectOutputStream 类，将字符串 "沉默王二" 写入到一个字节数组缓冲区中，并将缓冲区中的数据转换成字节数组输出到控制台。</font>

<font style="color:rgb(44, 62, 80);">具体的执行过程如下：</font>

+ <font style="color:rgb(44, 62, 80);">创建一个 ByteArrayOutputStream 对象 buffer，用于存储数据。</font>
+ <font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">try-with-resources</font>](https://javabetter.cn/exception/try-with-resources.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">语句创建一个 ObjectOutputStream 对象 output，并将其与 buffer 关联。</font>
+ <font style="color:rgb(44, 62, 80);">使用 writeUTF() 方法将字符串 "沉默王二" 写入到缓冲区中。</font>
+ <font style="color:rgb(44, 62, 80);">当 try-with-resources 语句执行完毕时，会自动调用 output 的 close() 方法关闭输出流，释放资源。</font>
+ <font style="color:rgb(44, 62, 80);">使用 toByteArray() 方法将缓冲区中的数据转换成字节数组。</font>
+ <font style="color:rgb(44, 62, 80);">使用 Arrays.toString() 方法将字节数组转换成字符串，并输出到控制台。</font>

#### <font style="color:rgb(44, 62, 80);">转换</font>

<font style="color:rgb(44, 62, 80);">InputStreamReader 是从字节流到字符流的桥连接，它使用指定的字符集读取字节并将它们解码为字符。</font>

```plain
// 创建一个 InputStreamReader 对象 isr，使用 FileInputStream 对象读取文件 demo.txt 的内容并将其转换为字符流
InputStreamReader isr = new InputStreamReader(new FileInputStream("demo.txt"));

// 创建一个字符数组 cha，用于存储读取的字符数据，其中 1024 表示数组的长度
char[] cha = new char[1024];

// 使用 read() 方法读取 isr 中的数据，并将读取的字符数据存储到 cha 数组中，返回值 len 表示读取的字符数
int len = isr.read(cha);

// 将 cha 数组中从下标 0 开始、长度为 len 的部分转换成字符串，并输出到控制台
System.out.println(new String(cha, 0, len));

// 关闭 InputStreamReader 对象 isr，释放资源
isr.close();
```

<font style="color:rgb(44, 62, 80);">这段代码主要使用了 Java 的 InputStreamReader 和 FileInputStream 类，从文件 demo.txt 中读取数据并将其转换为字符流，然后将读取的字符数据存储到一个字符数组中，并输出转换成字符串后的结果到控制台。</font>

<font style="color:rgb(44, 62, 80);">OutputStreamWriter 将一个字符流的输出对象变为字节流的输出对象，是字符流通向字节流的桥梁。</font>

```plain
// 创建一个 File 对象 f，表示文件 test.txt
File f = new File("test.txt");

// 创建一个 OutputStreamWriter 对象 out，使用 FileOutputStream 对象将数据写入到文件 f 中，并将字节流转换成字符流
Writer out = new OutputStreamWriter(new FileOutputStream(f));

// 使用 write() 方法将字符串 "沉默王二!!" 写入到文件 f 中
out.write("沉默王二!!");

// 关闭 Writer 对象 out，释放资源
out.close();
```

<font style="color:rgb(44, 62, 80);">使用转换流可以方便地在字节流和字符流之间进行转换。在进行文本文件读写时，通常使用字符流进行操作，而在进行网络传输或与设备进行通信时，通常使用字节流进行操作。</font>

<font style="color:rgb(44, 62, 80);">另外，在使用转换流时需要注意字符编码的问题。如果不指定字符编码，则使用默认的字符编码，可能会出现乱码问题。因此，建议在使用转换流时，始终指定正确的字符编码，以避免出现乱码问题。</font>

<font style="color:rgb(44, 62, 80);">“小二啊，你看，经过我的梳理，是不是感觉 IO 也没多少东西！针对不同的场景、不同的业务，选择对应的 IO 流就可以了，用法上就是读和写。”老王一口气讲完这些，长长的舒了一口气。</font>

<font style="color:rgb(44, 62, 80);">此时此刻的小二，还沉浸在老王的滔滔不绝中。不仅感觉老王的肺活量是真的大，还感慨老王不愧是工作了十多年的“老油条”，一下子就把自己感觉头大的 IO 给梳理得很清晰了。</font>

<font style="color:rgb(44, 62, 80);"></font>

## <font style="color:rgb(44, 62, 80);">文件流</font>

<font style="color:rgb(44, 62, 80);">在 IO 操作中，文件的操作相对来说是比较复杂的，但也是使用频率最高的部分，我们几乎所有的项目中几乎都躺着一个叫做 FileUtil 或者 FileUtils 的工具类。</font>

`<font style="color:rgb(44, 62, 80);">java.io.File</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类是专门对文件进行操作的类，注意只能对文件本身进行操作，不能对文件内容进行操作，想要操作内容，必须借助输入输出流。</font>

`<font style="color:rgb(44, 62, 80);">File</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类是文件和目录的抽象表示，主要用于文件和目录的创建、查找和删除等操作。</font>

<font style="color:rgb(44, 62, 80);">怎么理解上面两句话？其实很简单！</font>

<font style="color:rgb(44, 62, 80);">第一句是说 File 跟流无关，File 类不能对文件进行读和写，也就是输入和输出！</font>

<font style="color:rgb(44, 62, 80);">第二句是说 File 可以表示</font>`<font style="color:rgb(44, 62, 80);">D:\\文件目录1</font>`<font style="color:rgb(44, 62, 80);">与</font>`<font style="color:rgb(44, 62, 80);">D:\\文件目录1\\文件.txt</font>`<font style="color:rgb(44, 62, 80);">，前者是文件夹（Directory，或者叫目录）后者是文件(file)，File 类就是用来操作它俩的。</font>

### <font style="color:rgb(44, 62, 80);">File 构造方法</font>

<font style="color:rgb(44, 62, 80);">在 Java 中，一切皆是对象，File 类也不例外，不论是哪个对象都应该从该对象的构造说起，所以我们来分析分析</font>`<font style="color:rgb(44, 62, 80);">File</font>`<font style="color:rgb(44, 62, 80);">类的构造方法。</font>

<font style="color:rgb(44, 62, 80);">比较常用的构造方法有三个：</font>

<font style="color:rgb(44, 62, 80);">1、</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">File(String pathname)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：通过给定的</font>**<font style="color:rgb(44, 62, 80);">路径</font>**<font style="color:rgb(44, 62, 80);">来创建新的 File 实例。</font>

<font style="color:rgb(44, 62, 80);">2、</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">File(String parent, String child)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：从</font>**<font style="color:rgb(44, 62, 80);">父路径（字符串）和子路径</font>**<font style="color:rgb(44, 62, 80);">创建新的 File 实例。</font>

<font style="color:rgb(44, 62, 80);">3、</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">File(File parent, String child)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：从</font>**<font style="color:rgb(44, 62, 80);">父路径（File）和子路径名字符串</font>**<font style="color:rgb(44, 62, 80);">创建新的 File 实例。</font>

<font style="color:rgb(44, 62, 80);">看文字描述不够生动、不够形象、不得劲？没事，通过举例马上就生动形象了，代码如下：</font>

```plain
// 文件路径名
String path = "/Users/username/123.txt";
File file1 = new File(path);
// 文件路径名
String path2 = "/Users/username/1/2.txt";
File file2 = new File(path2); -------------相当于/Users/username/1/2.txt
// 通过父路径和子路径字符串
String parent = "/Users/username/aaa";
String child = "bbb.txt";
File file3 = new File(parent, child); --------相当于/Users/username/aaa/bbb.txt
// 通过父级File对象和子路径字符串
File parentDir = new File("/Users/username/aaa");
String child = "bbb.txt";
File file4 = new File(parentDir, child); --------相当于/Users/username/aaa/bbb.txt
```

<font style="color:rgb(44, 62, 80);">注意，</font>**<font style="color:rgb(44, 62, 80);">macOS 路径使用正斜杠（</font>**`**<font style="color:rgb(44, 62, 80);">/</font>**`**<font style="color:rgb(44, 62, 80);">）作为路径分隔符，而 Windows 路径使用反斜杠（</font>**`**<font style="color:rgb(44, 62, 80);">\</font>**`**<font style="color:rgb(44, 62, 80);">）作为路径分隔符。所以在遇到路径分隔符的时候，不要直接去写</font>**`**<font style="color:rgb(44, 62, 80);">/</font>**`**<font style="color:rgb(44, 62, 80);">或者</font>**`**<font style="color:rgb(44, 62, 80);">\</font>**`<font style="color:rgb(44, 62, 80);">。</font>

**<font style="color:rgb(44, 62, 80);">Java 中提供了一个跨平台的方法来获取路径分隔符，即使用 </font>**`**<font style="color:rgb(44, 62, 80);">File.separator</font>**`<font style="color:rgb(44, 62, 80);">，这个属性会根据操作系统自动返回正确的路径分隔符。</font>

<font style="color:rgb(44, 62, 80);">File 类的注意点：</font>

1. **<font style="color:rgb(44, 62, 80);">一个 File 对象代表硬盘中实际存在的一个文件或者目录</font>**<font style="color:rgb(44, 62, 80);">。</font>
2. **<font style="color:rgb(44, 62, 80);">File 类的构造方法不会检验这个文件或目录是否真实存在，因此无论该路径下是否存在文件或者目录，都不影响 File 对象的创建</font>**<font style="color:rgb(44, 62, 80);">。</font>

### <font style="color:rgb(44, 62, 80);">File 常用方法</font>

<font style="color:rgb(44, 62, 80);">File 的常用方法主要分为</font>**<font style="color:rgb(44, 62, 80);">获取功能</font>**<font style="color:rgb(44, 62, 80);">、</font>**<font style="color:rgb(44, 62, 80);">获取绝对路径和相对路径</font>**<font style="color:rgb(44, 62, 80);">、</font>**<font style="color:rgb(44, 62, 80);">判断功能</font>**<font style="color:rgb(44, 62, 80);">、</font>**<font style="color:rgb(44, 62, 80);">创建删除功能</font>**<font style="color:rgb(44, 62, 80);">的方法。</font>

#### <font style="color:rgb(44, 62, 80);">获取功能的方法</font>

<font style="color:rgb(44, 62, 80);">1、</font>`<font style="color:rgb(44, 62, 80);">getAbsolutePath()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：返回此 File 的绝对路径。</font>

<font style="color:rgb(44, 62, 80);">2、</font>`<font style="color:rgb(44, 62, 80);">getPath()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：结果和 getAbsolutePath 一致。</font>

<font style="color:rgb(44, 62, 80);">3、</font>`<font style="color:rgb(44, 62, 80);">getName()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：返回文件名或目录名。</font>

<font style="color:rgb(44, 62, 80);">4、</font>`<font style="color:rgb(44, 62, 80);">length()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：返回文件长度，以字节为单位。</font>

<font style="color:rgb(44, 62, 80);">测试代码如下【注意测试以你自己的电脑文件夹为准】：</font>

```plain
File f = new File("/Users/username/aaa/bbb.java");
System.out.println("文件绝对路径:"+f.getAbsolutePath());
System.out.println("文件构造路径:"+f.getPath());
System.out.println("文件名称:"+f.getName());
System.out.println("文件长度:"+f.length()+"字节");

File f2 = new File("/Users/username/aaa");
System.out.println("目录绝对路径:"+f2.getAbsolutePath());
System.out.println("目录构造路径:"+f2.getPath());
System.out.println("目录名称:"+f2.getName());
System.out.println("目录长度:"+f2.length());
```

<font style="color:rgb(44, 62, 80);">注意：</font>`<font style="color:rgb(44, 62, 80);">length()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">表示文件的长度，</font>`<font style="color:rgb(44, 62, 80);">File</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">对象表示目录的时候，返回值并无意义。</font>

#### <font style="color:rgb(44, 62, 80);">绝对路径和相对路径</font>

<font style="color:rgb(44, 62, 80);">绝对路径是从文件系统的根目录开始的完整路径，它描述了一个文件或目录在文件系统中的确切位置。在 Windows 系统中，绝对路径通常以盘符（如 C:）开始，例如 "</font>`<font style="color:rgb(44, 62, 80);">C:\Program Files\Java\jdk1.8.0_291\bin\java.exe</font>`<font style="color:rgb(44, 62, 80);">"。在 macOS 和 Linux 系统中，绝对路径通常以斜杠（</font>`<font style="color:rgb(44, 62, 80);">/</font>`<font style="color:rgb(44, 62, 80);">）开始，例如 "</font>`<font style="color:rgb(44, 62, 80);">/usr/local/bin/python3</font>`<font style="color:rgb(44, 62, 80);">"。</font>

<font style="color:rgb(44, 62, 80);">相对路径是相对于当前工作目录的路径，它描述了一个文件或目录与当前工作目录之间的位置关系。在 Java 中，相对路径通常是相对于当前 Java 程序所在的目录，例如 "</font>`<font style="color:rgb(44, 62, 80);">config/config.properties</font>`<font style="color:rgb(44, 62, 80);">"。如果当前工作目录是 "</font>`<font style="color:rgb(44, 62, 80);">/Users/username/project</font>`<font style="color:rgb(44, 62, 80);">"，那么相对路径 "</font>`<font style="color:rgb(44, 62, 80);">config/config.properties</font>`<font style="color:rgb(44, 62, 80);">" 就表示 "</font>`<font style="color:rgb(44, 62, 80);">/Users/username/project/config/config.properties</font>`<font style="color:rgb(44, 62, 80);">"。</font>

<font style="color:rgb(44, 62, 80);">注意：</font>

+ <font style="color:rgb(44, 62, 80);">在 Windows 操作系统中，文件系统默认是不区分大小写的，即在文件系统中，文件名和路径的大小写可以混合使用。例如，"</font>`<font style="color:rgb(44, 62, 80);">C:\Users\username\Documents\example.txt</font>`<font style="color:rgb(44, 62, 80);">" 和 "</font>`<font style="color:rgb(44, 62, 80);">C:\Users\Username\Documents\Example.txt</font>`<font style="color:rgb(44, 62, 80);">" 表示的是同一个文件。但是，Windows 操作系统提供了一个区分大小写的选项，可以在格式化磁盘时选择启用，这样文件系统就会区分大小写。</font>
+ <font style="color:rgb(44, 62, 80);">在 macOS 和 Linux 等 Unix 系统中，文件系统默认是区分大小写的。例如，在 macOS 系统中，"</font>`<font style="color:rgb(44, 62, 80);">/Users/username/Documents/example.txt</font>`<font style="color:rgb(44, 62, 80);">" 和 "</font>`<font style="color:rgb(44, 62, 80);">/Users/username/Documents/Example.txt</font>`<font style="color:rgb(44, 62, 80);">" 表示的是两个不同的文件。</font>

```plain
// 绝对路径示例
File absoluteFile = new File("/Users/username/example/test.txt");
System.out.println("绝对路径：" + absoluteFile.getAbsolutePath());

// 相对路径示例
File relativeFile = new File("example/test.txt");
System.out.println("相对路径：" + relativeFile.getPath());
```

#### <font style="color:rgb(44, 62, 80);">判断功能的方法</font>

<font style="color:rgb(44, 62, 80);">1、 </font>`<font style="color:rgb(44, 62, 80);">exists()</font>`<font style="color:rgb(44, 62, 80);"> ：判断文件或目录是否存在。</font>

<font style="color:rgb(44, 62, 80);">2、</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">isDirectory()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：判断是否为目录。</font>

<font style="color:rgb(44, 62, 80);">3、</font>`<font style="color:rgb(44, 62, 80);">isFile()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：判断是否为文件。</font>

<font style="color:rgb(44, 62, 80);">方法演示，代码如下：</font>

```plain
File file = new File("/Users/username/example");

// 判断文件或目录是否存在
if (file.exists()) {
    System.out.println("文件或目录存在");
} else {
    System.out.println("文件或目录不存在");
}

// 判断是否是目录
if (file.isDirectory()) {
    System.out.println("是目录");
} else {
    System.out.println("不是目录");
}

// 判断是否是文件
if (file.isFile()) {
    System.out.println("是文件");
} else {
    System.out.println("不是文件");
}
```

#### <font style="color:rgb(44, 62, 80);">创建、删除功能的方法</font>

+ `<font style="color:rgb(44, 62, 80);">createNewFile()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：文件不存在，创建一个新的空文件并返回</font>`<font style="color:rgb(44, 62, 80);">true</font>`<font style="color:rgb(44, 62, 80);">，文件存在，不创建文件并返回</font>`<font style="color:rgb(44, 62, 80);">false</font>`<font style="color:rgb(44, 62, 80);">。</font>
+ `<font style="color:rgb(44, 62, 80);">delete()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：删除文件或目录。如果是目录，只有目录为空才能删除。</font>
+ `<font style="color:rgb(44, 62, 80);">mkdir()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：只能创建一级目录，如果父目录不存在，则创建失败。返回 true 表示创建成功，返回 false 表示创建失败。</font>
+ `<font style="color:rgb(44, 62, 80);">mkdirs()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：可以创建多级目录，如果父目录不存在，则会一并创建。返回 true 表示创建成功，返回 false 表示创建失败或目录已经存在。</font>

**<font style="color:rgb(44, 62, 80);">开发中一般用</font>**`<font style="color:rgb(44, 62, 80);">mkdirs()</font>`<font style="color:rgb(44, 62, 80);">;</font>

<font style="color:rgb(44, 62, 80);">方法测试，代码如下：</font>

```plain
// 创建文件
File file = new File("/Users/username/example/test.txt");
if (file.createNewFile()) {
    System.out.println("创建文件成功：" + file.getAbsolutePath());
} else {
    System.out.println("创建文件失败：" + file.getAbsolutePath());
}

// 删除文件
if (file.delete()) {
    System.out.println("删除文件成功：" + file.getAbsolutePath());
} else {
    System.out.println("删除文件失败：" + file.getAbsolutePath());
}

// 创建多级目录
File directory = new File("/Users/username/example/subdir1/subdir2");
if (directory.mkdirs()) {
    System.out.println("创建目录成功：" + directory.getAbsolutePath());
} else {
    System.out.println("创建目录失败：" + directory.getAbsolutePath());
}
```

#### <font style="color:rgb(44, 62, 80);">目录的遍历</font>

+ `<font style="color:rgb(44, 62, 80);">String[] list()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：返回一个 String 数组，表示该 File 目录中的所有子文件或目录。</font>
+ `<font style="color:rgb(44, 62, 80);">File[] listFiles()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：返回一个 File 数组，表示该 File 目录中的所有的子文件或目录。</font>

```plain
File directory = new File("/Users/itwanger/Documents/Github/paicoding");

// 列出目录下的文件名
String[] files = directory.list();
System.out.println("目录下的文件名：");
for (String file : files) {
    System.out.println(file);
}

// 列出目录下的文件和子目录
File[] filesAndDirs = directory.listFiles();
System.out.println("目录下的文件和子目录：");
for (File fileOrDir : filesAndDirs) {
    if (fileOrDir.isFile()) {
        System.out.println("文件：" + fileOrDir.getName());
    } else if (fileOrDir.isDirectory()) {
        System.out.println("目录：" + fileOrDir.getName());
    }
}
```

**<font style="color:rgb(44, 62, 80);">listFiles</font>**<font style="color:rgb(44, 62, 80);">在获取指定目录下的文件或者子目录时必须满足下面两个条件：</font>

    1. **<font style="color:rgb(44, 62, 80);">指定的目录必须存在</font>**
    2. **<font style="color:rgb(44, 62, 80);">指定的必须是目录。否则容易引发 NullPointerException 异常</font>**

#### <font style="color:rgb(44, 62, 80);">递归遍历</font>

<font style="color:rgb(44, 62, 80);">不说啥了，直接上代码：</font>

```plain
public static void main(String[] args) {
    File directory = new File("/Users/itwanger/Documents/Github/paicoding");

    // 递归遍历目录下的文件和子目录
    traverseDirectory(directory);
}

public static void traverseDirectory(File directory) {
    // 列出目录下的所有文件和子目录
    File[] filesAndDirs = directory.listFiles();

    // 遍历每个文件和子目录
    for (File fileOrDir : filesAndDirs) {
        if (fileOrDir.isFile()) {
            // 如果是文件，输出文件名
            System.out.println("文件：" + fileOrDir.getName());
        } else if (fileOrDir.isDirectory()) {
            // 如果是目录，递归遍历子目录
            System.out.println("目录：" + fileOrDir.getName());
            traverseDirectory(fileOrDir);
        }
    }
}
```

### <font style="color:rgb(44, 62, 80);">RandomAccessFile</font>

<font style="color:rgb(44, 62, 80);">RandomAccessFile 是 Java 中一个非常特殊的类，它既可以用来读取文件，也可以用来写入文件。与其他 IO 类（如 FileInputStream 和 FileOutputStream）不同，RandomAccessFile 允许您跳转到文件的任何位置，从那里开始读取或写入。这使得它特别适用于需要在文件中随机访问数据的场景，如数据库系统。</font>

<font style="color:rgb(44, 62, 80);">下面是一个使用 RandomAccessFile 的示例，包括写入和读取文件：</font>

```plain
import java.io.IOException;
import java.io.RandomAccessFile;

public class RandomAccessFileDemo {

    public static void main(String[] args) {
        String filePath = "logs/javabetter/itwanger.txt";

        try {
            // 使用 RandomAccessFile 写入文件
            writeToFile(filePath, "Hello, 沉默王二!");

            // 使用 RandomAccessFile 读取文件
            String content = readFromFile(filePath);
            System.out.println("文件内容: " + content);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void writeToFile(String filePath, String content) throws IOException {
        try (RandomAccessFile randomAccessFile = new RandomAccessFile(filePath, "rw")) {
            // 将文件指针移动到文件末尾（在此处追加内容）
            randomAccessFile.seek(randomAccessFile.length());

            // 写入内容
            randomAccessFile.writeUTF(content);
        }
    }

    private static String readFromFile(String filePath) throws IOException {
        StringBuilder content = new StringBuilder();

        try (RandomAccessFile randomAccessFile = new RandomAccessFile(filePath, "r")) {
            // 将文件指针移动到文件开始处（从头开始读取）
            randomAccessFile.seek(0);

            content.append(randomAccessFile.readUTF());
        }

        return content.toString();
    }
}
```

<font style="color:rgb(44, 62, 80);">为了避免中文乱码问题，我们使用 RandomAccessFile 的 </font>**<font style="color:rgb(44, 62, 80);">writeUTF</font>**<font style="color:rgb(44, 62, 80);"> 和 </font>**<font style="color:rgb(44, 62, 80);">readUTF</font>**<font style="color:rgb(44, 62, 80);"> 方法，它们将使用 </font>**<font style="color:rgb(44, 62, 80);">UTF-8</font>**<font style="color:rgb(44, 62, 80);"> 编码处理字符串。大家可以运行一下这段代码，体验一下。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727437920099-4c5aefb5-fee5-4fb8-89cc-08c422daeaa0.png" />


<font style="color:rgb(44, 62, 80);">接下来，会详细介绍一下 RandomAccessFile 的构造方法和常用的方法。</font>

#### [<font style="color:rgb(44, 62, 80);">构造方法</font>](https://javabetter.cn/io/file-path.html#%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95)

<font style="color:rgb(44, 62, 80);">RandomAccessFile 主要有两个构造方法：</font>

+ `<font style="color:rgb(44, 62, 80);">RandomAccessFile(File file, String mode)</font>`<font style="color:rgb(44, 62, 80);">：使用给定的文件对象和访问模式创建一个新的 RandomAccessFile 实例。</font>
+ `<font style="color:rgb(44, 62, 80);">RandomAccessFile(String name, String mode)</font>`<font style="color:rgb(44, 62, 80);">：使用给定的文件名和访问模式创建一个新的 RandomAccessFile 实例。</font>

<font style="color:rgb(44, 62, 80);">访问模式 mode 的值可以是：</font>

+ <font style="color:rgb(44, 62, 80);">"r"：以只读模式打开文件。调用结果对象的任何 write 方法都将导致 IOException。</font>
+ <font style="color:rgb(44, 62, 80);">"rw"：以读写模式打开文件。如果文件不存在，它将被创建。</font>
+ <font style="color:rgb(44, 62, 80);">"rws"：以读写模式打开文件，并要求对内容或元数据的每个更新都被立即写入到底层存储设备。这种模式是同步的，可以确保在系统崩溃时不会丢失数据。</font>
+ <font style="color:rgb(44, 62, 80);">"rwd"：与“rws”类似，以读写模式打开文件，但仅要求对文件内容的更新被立即写入。元数据可能会被延迟写入。</font>

#### [<font style="color:rgb(44, 62, 80);">主要方法</font>](https://javabetter.cn/io/file-path.html#%E4%B8%BB%E8%A6%81%E6%96%B9%E6%B3%95)

+ `<font style="color:rgb(44, 62, 80);">long getFilePointer()</font>`<font style="color:rgb(44, 62, 80);">：返回文件指针的当前位置。</font>
+ `<font style="color:rgb(44, 62, 80);">long length()</font>`<font style="color:rgb(44, 62, 80);">：返回此文件的长度。</font>
+ `<font style="color:rgb(44, 62, 80);">int read()</font>`<font style="color:rgb(44, 62, 80);">：从该文件中读取一个字节数据。</font>
+ `<font style="color:rgb(44, 62, 80);">int read(byte[] b)</font>`<font style="color:rgb(44, 62, 80);">：从该文件中读取字节数据并将其存储到指定的字节数组中。</font>
+ `<font style="color:rgb(44, 62, 80);">int read(byte[] b, int off, int len)</font>`<font style="color:rgb(44, 62, 80);">：从该文件中读取字节数据并将其存储到指定的字节数组中，从偏移量 off 开始，最多读取 len 个字节。</font>
+ `<font style="color:rgb(44, 62, 80);">String readLine()</font>`<font style="color:rgb(44, 62, 80);">：从该文件中读取一行文本。</font>
+ `<font style="color:rgb(44, 62, 80);">readUTF()</font>`<font style="color:rgb(44, 62, 80);">：从文件读取 UTF-8 编码的字符串。此方法首先读取两个字节的长度信息，然后根据这个长度读取字符串的 UTF-8 字节。最后，这些字节被转换为 Java 字符串。这意味着当你使用 readUTF 方法读取字符串时，需要确保文件中的字符串是使用 writeUTF 方法写入的，这样它们之间的长度信息和编码方式才能保持一致。</font>
+ `<font style="color:rgb(44, 62, 80);">void seek(long pos)</font>`<font style="color:rgb(44, 62, 80);">：将文件指针设置到文件中的 pos 位置。</font>
+ `<font style="color:rgb(44, 62, 80);">void write(byte[] b)</font>`<font style="color:rgb(44, 62, 80);">：将指定的字节数组的所有字节写入该文件。</font>
+ `<font style="color:rgb(44, 62, 80);">void write(byte[] b, int off, int len)</font>`<font style="color:rgb(44, 62, 80);">：将指定字节数组的部分字节写入该文件，从偏移量 off 开始，写入 len 个字节。</font>
+ `<font style="color:rgb(44, 62, 80);">void write(int b)</font>`<font style="color:rgb(44, 62, 80);">：将指定的字节写入该文件。</font>
+ `<font style="color:rgb(44, 62, 80);">writeUTF(String str)</font>`<font style="color:rgb(44, 62, 80);">：将一个字符串以 UTF-8 编码写入文件。此方法首先写入两个字节的长度信息，表示字符串的 UTF-8 字节长度，然后写入 UTF-8 字节本身。因此，当你使用 writeUTF 写入字符串时，实际写入的字节数会比字符串的 UTF-8 字节长度多两个字节。这两个字节用于在读取字符串时确定正确的字符串长度。</font>

<font style="color:rgb(44, 62, 80);">再来看一个示例，结合前面的讲解，就会彻底掌握 RandomAccessFile。</font>

```plain
File file = new File("logs/javabetter/itwanger.txt");

try (RandomAccessFile raf = new RandomAccessFile(file, "rw")) {
    // 写入文件
    raf.writeUTF("Hello, 沉默王二!");

    // 将文件指针移动到文件开头
    raf.seek(0);

    // 读取文件内容
    String content = raf.readUTF();
    System.out.println("内容: " + content);

} catch (IOException e) {
    e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">在这个示例中，我们首先创建了一个名为 itwanger.txt 的文件对象。然后我们使用 RandomAccessFile 以读写模式打开这个文件。</font>

<font style="color:rgb(44, 62, 80);">接下来，我们使用 writeUTF 方法将字符串"Hello, 沉默王二!"写入文件。然后，我们使用 seek 方法将文件指针移动到文件开头，并使用 readUTF 方法读取文件内容。输出应该是"Hello, 沉默王二!"。</font>

<font style="color:rgb(44, 62, 80);">最后，我们使用</font>[<font style="color:rgb(44, 62, 80);">try-with-resources</font>](https://javabetter.cn/exception/try-with-resources.html)<font style="color:rgb(44, 62, 80);">语句确保 RandomAccessFile 在操作完成后被正确关闭。</font>

### <font style="color:rgb(44, 62, 80);">Apache FileUtils 类</font>

<font style="color:rgb(44, 62, 80);">FileUtils 类是 Apache Commons IO 库中的一个类，提供了一些更为方便的方法来操作文件或目录。</font>

#### <font style="color:rgb(44, 62, 80);">复制文件或目录：</font>

```plain
File srcFile = new File("path/to/src/file");
File destFile = new File("path/to/dest/file");
// 复制文件
FileUtils.copyFile(srcFile, destFile);
// 复制目录
FileUtils.copyDirectory(srcFile, destFile);
```

#### <font style="color:rgb(44, 62, 80);">删除文件或目录：</font>

```plain
File file = new File("path/to/file");
// 删除文件或目录
FileUtils.delete(file);
```

<font style="color:rgb(44, 62, 80);">需要注意的是，如果要删除一个非空目录，需要先删除目录中的所有文件和子目录。</font>

#### <font style="color:rgb(44, 62, 80);">移动文件或目录：</font>

```plain
File srcFile = new File("path/to/src/file");
File destFile = new File("path/to/dest/file");
// 移动文件或目录
FileUtils.moveFile(srcFile, destFile);
```

#### <font style="color:rgb(44, 62, 80);">查询文件或目录的信息：</font>

```plain
File file = new File("path/to/file");
// 获取文件或目录的修改时间
Date modifyTime = FileUtils.lastModified(file);
// 获取文件或目录的大小
long size = FileUtils.sizeOf(file);
// 获取文件或目录的扩展名
String extension = FileUtils.getExtension(file.getName());
```

### <font style="color:rgb(44, 62, 80);">Hutool FileUtil 类</font>

<font style="color:rgb(44, 62, 80);">FileUtil 类是</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">Hutool</font>](https://hutool.cn/)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">工具包中的文件操作工具类，提供了一系列简单易用的文件操作方法，可以帮助 Java 开发者快速完成文件相关的操作任务。</font>

<font style="color:rgb(44, 62, 80);">FileUtil 类包含以下几类操作工具：</font>

+ <font style="color:rgb(44, 62, 80);">文件操作：包括文件目录的新建、删除、复制、移动、改名等</font>
+ <font style="color:rgb(44, 62, 80);">文件判断：判断文件或目录是否非空，是否为目录，是否为文件等等。</font>
+ <font style="color:rgb(44, 62, 80);">绝对路径：针对 ClassPath 中的文件转换为绝对路径文件。</font>
+ <font style="color:rgb(44, 62, 80);">文件名：主文件名，扩展名的获取</font>
+ <font style="color:rgb(44, 62, 80);">读操作：包括 getReader、readXXX 操作</font>
+ <font style="color:rgb(44, 62, 80);">写操作：包括 getWriter、writeXXX 操作</font>

<font style="color:rgb(44, 62, 80);">下面是 FileUtil 类中一些常用的方法：</font>

<font style="color:rgb(44, 62, 80);">1、copyFile：复制文件。该方法可以将指定的源文件复制到指定的目标文件中。</font>

```plain
File dest = FileUtil.file("FileUtilDemo2.java");
FileUtil.copyFile(file, dest);
```

<font style="color:rgb(44, 62, 80);">2、move：移动文件或目录。该方法可以将指定的源文件或目录移动到指定的目标文件或目录中。</font>

```plain
FileUtil.move(file, dest, true);
```

<font style="color:rgb(44, 62, 80);">3、del：删除文件或目录。该方法可以删除指定的文件或目录，如果指定的文件或目录不存在，则会抛出异常。</font>

```plain
FileUtil.del(file);
```

<font style="color:rgb(44, 62, 80);">4、rename：重命名文件或目录。该方法可以将指定的文件或目录重命名为指定的新名称。</font>

```plain
FileUtil.rename(file, "FileUtilDemo3.java", true);
```

<font style="color:rgb(44, 62, 80);">5、readLines：从文件中读取每一行数据。</font>

```plain
FileUtil.readLines(file, "UTF-8").forEach(System.out::println);
```

<font style="color:rgb(44, 62, 80);">更多方法，可以去看一下 hutool 的源码，里面有非常多实用的方法，多看看，绝对能提升不少编程水平。</font>



## <font style="color:rgb(44, 62, 80);">字符流</font>

<font style="color:rgb(44, 62, 80);">字符流 Reader 和 Writer 的故事要从它们的类关系图开始，来看图。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438232988-d14e7333-3526-40a2-aff5-ab03f35e1359.png" />


<font style="color:rgb(44, 62, 80);">字符流是一种用于读取和写入字符数据的输入输出流。与字节流不同，字符流以字符为单位读取和写入数据，而不是以字节为单位。常用来处理文本信息。</font>

<font style="color:rgb(44, 62, 80);">如果用字节流直接读取中文，可能会遇到乱码问题，见下例：</font>

```plain
//FileInputStream为操作文件的字符输入流
FileInputStream inputStream = new FileInputStream("a.txt");//内容为“沉默王二是傻 X”

int len;
while ((len=inputStream.read())!=-1){
    System.out.print((char)len);
}
```

<font style="color:rgb(44, 62, 80);">来看运行结果：</font>

```plain
运行结果：   æ²é»çäºæ¯å» X
```

<font style="color:rgb(44, 62, 80);">看一下截图：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438233528-57b9fe41-0dc0-4eb1-865c-19f9c2da7826.png" />


<font style="color:rgb(44, 62, 80);">之所以出现乱码是因为在字节流中，一个字符通常由多个字节组成，而不同的字符编码使用的字节数不同。如果我们使用了错误的字符编码，或者在读取和写入数据时没有正确处理字符编码的转换，就会导致读取出来的中文字符出现乱码。</font>

<font style="color:rgb(44, 62, 80);">例如，当我们使用默认的字符编码（见上例）读取一个包含中文字符的文本文件时，就会出现乱码。因为默认的字符编码通常是 ASCII 编码，它只能表示英文字符，而不能正确地解析中文字符。</font>

<font style="color:rgb(44, 62, 80);">那使用字节流该如何正确地读出中文呢？见下例。</font>

```plain
try (FileInputStream inputStream = new FileInputStream("a.txt")) {
    byte[] bytes = new byte[1024];
    int len;
    while ((len = inputStream.read(bytes)) != -1) {
        System.out.print(new String(bytes, 0, len));
    }
}
```

<font style="color:rgb(44, 62, 80);">为什么这种方式就可以呢？</font>

<font style="color:rgb(44, 62, 80);">因为我们拿 String 类进行了解码，查看</font>`<font style="color:rgb(44, 62, 80);">new String(byte bytes[], int offset, int length)</font>`<font style="color:rgb(44, 62, 80);">的源码就可以发现，该构造方法有解码功能：</font>

```plain
public String(byte bytes[], int offset, int length) {
    checkBounds(bytes, offset, length);
    this.value = StringCoding.decode(bytes, offset, length);
}
```

<font style="color:rgb(44, 62, 80);">继续追看</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">StringCoding.decode()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法调用的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">defaultCharset()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，会发现默认编码是</font>`<font style="color:rgb(44, 62, 80);">UTF-8</font>`<font style="color:rgb(44, 62, 80);">，代码如下</font>

```plain
public static Charset defaultCharset() {
    if (defaultCharset == null) {
        synchronized (Charset.class) {
            if (cs != null)
                defaultCharset = cs;
            else
                defaultCharset = forName("UTF-8");
        }
    }
    return defaultCharset;
}
static char[] decode(byte[] ba, int off, int len) {
    String csn = Charset.defaultCharset().name();
    try {
        // use charset name decode() variant which provides caching.
        return decode(csn, ba, off, len);
    } catch (UnsupportedEncodingException x) {
        warnUnsupportedCharset(csn);
    }
}
```

<font style="color:rgb(44, 62, 80);">在 Java 中，常用的字符编码有 ASCII、ISO-8859-1、UTF-8、UTF-16 等。其中，ASCII 和 ISO-8859-1 只能表示部分字符，而 UTF-8 和 UTF-16 可以表示所有的 Unicode 字符，包括中文字符。</font>

<font style="color:rgb(44, 62, 80);">当我们使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String(byte bytes[], int offset, int length)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">将字节流转换为字符串时，Java 会根据 UTF-8 的规则将每 3 个字节解码为一个中文字符，从而正确地解码出中文。</font>

<font style="color:rgb(44, 62, 80);">尽管字节流也有办法解决乱码问题，但不够直接，于是就有了字符流，</font>`<font style="color:rgb(44, 62, 80);">专门用于处理文本</font>`<font style="color:rgb(44, 62, 80);">文件（音频、图片、视频等为非文本文件）。</font>

<font style="color:rgb(44, 62, 80);">从另一角度来说：</font>**<font style="color:rgb(44, 62, 80);">字符流 = 字节流 + 编码表</font>**

### <font style="color:rgb(44, 62, 80);">字符输入流（Reader）</font>

`<font style="color:rgb(44, 62, 80);">java.io.Reader</font>`<font style="color:rgb(44, 62, 80);">是</font>**<font style="color:rgb(44, 62, 80);">字符输入流</font>**<font style="color:rgb(44, 62, 80);">的</font>**<font style="color:rgb(44, 62, 80);">超类</font>**<font style="color:rgb(44, 62, 80);">（父类），它定义了字符输入流的一些共性方法：</font>

+ <font style="color:rgb(44, 62, 80);">1、</font>`<font style="color:rgb(44, 62, 80);">close()</font>`<font style="color:rgb(44, 62, 80);">：关闭此流并释放与此流相关的系统资源。</font>
+ <font style="color:rgb(44, 62, 80);">2、</font>`<font style="color:rgb(44, 62, 80);">read()</font>`<font style="color:rgb(44, 62, 80);">：从输入流读取一个字符。</font>
+ <font style="color:rgb(44, 62, 80);">3、</font>`<font style="color:rgb(44, 62, 80);">read(char[] cbuf)</font>`<font style="color:rgb(44, 62, 80);">：从输入流中读取一些字符，并将它们存储到字符数组</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">cbuf</font>`<font style="color:rgb(44, 62, 80);">中</font>

<font style="color:rgb(44, 62, 80);">FileReader 是 Reader 的子类，用于从文件中读取字符数据。它的主要特点如下：</font>

+ <font style="color:rgb(44, 62, 80);">可以通过构造方法指定要读取的文件路径。</font>
+ <font style="color:rgb(44, 62, 80);">每次可以读取一个或多个字符。</font>
+ <font style="color:rgb(44, 62, 80);">可以读取  Unicode 字符集中的字符，通过指定字符编码来实现字符集的转换。</font>

#### <font style="color:rgb(44, 62, 80);">FileReader构造方法</font>

+ <font style="color:rgb(44, 62, 80);">1、</font>`<font style="color:rgb(44, 62, 80);">FileReader(File file)</font>`<font style="color:rgb(44, 62, 80);">：创建一个新的 FileReader，参数为</font>**<font style="color:rgb(44, 62, 80);">File对象</font>**<font style="color:rgb(44, 62, 80);">。</font>
+ <font style="color:rgb(44, 62, 80);">2、</font>`<font style="color:rgb(44, 62, 80);">FileReader(String fileName)</font>`<font style="color:rgb(44, 62, 80);">：创建一个新的 FileReader，参数为文件名。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下：</font>

```plain
// 使用File对象创建流对象
File file = new File("a.txt");
FileReader fr = new FileReader(file);

// 使用文件名称创建流对象
FileReader fr = new FileReader("b.txt");
```

#### <font style="color:rgb(44, 62, 80);">FileReader读取字符数据</font>

<font style="color:rgb(44, 62, 80);">①</font>**<font style="color:rgb(44, 62, 80);">读取字符</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">read</font>`<font style="color:rgb(44, 62, 80);">方法，每次可以读取一个字符，返回读取的字符（转为 int 类型），当读取到文件末尾时，返回</font>`<font style="color:rgb(44, 62, 80);">-1</font>`<font style="color:rgb(44, 62, 80);">。代码示例如下：</font>

```plain
// 使用文件名称创建流对象
FileReader fr = new FileReader("abc.txt");
// 定义变量，保存数据
int b;
// 循环读取
while ((b = fr.read())!=-1) {
    System.out.println((char)b);
}
// 关闭资源
fr.close();
```

<font style="color:rgb(44, 62, 80);">②</font>**<font style="color:rgb(44, 62, 80);">读取指定长度的字符</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">read(char[] cbuf, int off, int len)</font>`<font style="color:rgb(44, 62, 80);">，并将其存储到字符数组中。其中，cbuf 表示存储读取结果的字符数组，off 表示存储结果的起始位置，len 表示要读取的字符数。代码示例如下：</font>

```plain
File textFile = new File("docs/约定.md");
// 给一个 FileReader 的示例
// try-with-resources FileReader
try(FileReader reader = new FileReader(textFile);) {
    // read(char[] cbuf)
    char[] buffer = new char[1024];
    int len;
    while ((len = reader.read(buffer, 0, buffer.length)) != -1) {
        System.out.print(new String(buffer, 0, len));
    }
}
```

<font style="color:rgb(44, 62, 80);">在这个例子中，使用 FileReader 从文件中读取字符数据，并将其存储到一个大小为 1024 的字符数组中。每次读取 len 个字符，然后使用 String 构造方法将其转换为字符串并输出。</font>

<font style="color:rgb(44, 62, 80);">FileReader 实现了 AutoCloseable 接口，因此可以使用</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">try-with-resources</font>](https://javabetter.cn/exception/try-with-resources.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">语句自动关闭资源，避免了手动关闭资源的繁琐操作。</font>

### <font style="color:rgb(44, 62, 80);">字符输出流（Writer）</font>

`<font style="color:rgb(44, 62, 80);">java.io.Writer</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是</font>**<font style="color:rgb(44, 62, 80);">字符输出流</font>**<font style="color:rgb(44, 62, 80);">类的</font>**<font style="color:rgb(44, 62, 80);">超类</font>**<font style="color:rgb(44, 62, 80);">（父类），可以将指定的字符信息写入到目的地，来看它定义的一些共性方法：</font>

+ <font style="color:rgb(44, 62, 80);">1、</font>`<font style="color:rgb(44, 62, 80);">write(int c)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">写入单个字符。</font>
+ <font style="color:rgb(44, 62, 80);">2、</font>`<font style="color:rgb(44, 62, 80);">write(char[] cbuf)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">写入字符数组。</font>
+ <font style="color:rgb(44, 62, 80);">3、</font>`<font style="color:rgb(44, 62, 80);">write(char[] cbuf, int off, int len)</font>`<font style="color:rgb(44, 62, 80);"> 写入字符数组的一部分，off为开始索引，len为字符个数。</font>
+ <font style="color:rgb(44, 62, 80);">4、</font>`<font style="color:rgb(44, 62, 80);">write(String str)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">写入字符串。</font>
+ <font style="color:rgb(44, 62, 80);">5、</font>`<font style="color:rgb(44, 62, 80);">write(String str, int off, int len)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">写入字符串的某一部分，off 指定要写入的子串在 str 中的起始位置，len 指定要写入的子串的长度。</font>
+ <font style="color:rgb(44, 62, 80);">6、</font>`<font style="color:rgb(44, 62, 80);">flush()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">刷新该流的缓冲。</font>
+ <font style="color:rgb(44, 62, 80);">7、</font>`<font style="color:rgb(44, 62, 80);">close()</font>`<font style="color:rgb(44, 62, 80);"> 关闭此流，但要先刷新它。</font>

`<font style="color:rgb(44, 62, 80);">java.io.FileWriter</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类是 Writer 的子类，用来将字符写入到文件。</font>

#### <font style="color:rgb(44, 62, 80);">FileWriter 构造方法</font>

+ `<font style="color:rgb(44, 62, 80);">FileWriter(File file)</font>`<font style="color:rgb(44, 62, 80);">： 创建一个新的 FileWriter，参数为要读取的File对象。</font>
+ `<font style="color:rgb(44, 62, 80);">FileWriter(String fileName)</font>`<font style="color:rgb(44, 62, 80);">： 创建一个新的 FileWriter，参数为要读取的文件的名称。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下：</font>

```plain
// 第一种：使用File对象创建流对象
File file = new File("a.txt");
FileWriter fw = new FileWriter(file);

// 第二种：使用文件名称创建流对象
FileWriter fw = new FileWriter("b.txt");
```

#### <font style="color:rgb(44, 62, 80);">FileWriter写入数据</font>

<font style="color:rgb(44, 62, 80);">①</font>**<font style="color:rgb(44, 62, 80);">写入字符</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">write(int b)</font>`<font style="color:rgb(44, 62, 80);"> 方法，每次可以写出一个字符，代码示例如下：</font>

```plain
FileWriter fw = null;
try {
    fw = new FileWriter("output.txt");
    fw.write(72); // 写入字符'H'的ASCII码
    fw.write(101); // 写入字符'e'的ASCII码
    fw.write(108); // 写入字符'l'的ASCII码
    fw.write(108); // 写入字符'l'的ASCII码
    fw.write(111); // 写入字符'o'的ASCII码
} catch (IOException e) {
    e.printStackTrace();
} finally {
    try {
        if (fw != null) {
            fw.close();
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

<font style="color:rgb(44, 62, 80);">在这个示例代码中，首先创建一个 FileWriter 对象 fw，并指定要写入的文件路径 "output.txt"。然后使用 fw.write() 方法将字节写入文件中，这里分别写入字符'H'、'e'、'l'、'l'、'o'的 ASCII 码。最后在 finally 块中关闭 FileWriter 对象，释放资源。</font>

<font style="color:rgb(44, 62, 80);">需要注意的是，使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">write(int b)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法写入的是一个字节，而不是一个字符。如果需要写入字符，可以使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">write(char cbuf[])</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">write(String str)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。</font>

<font style="color:rgb(44, 62, 80);">②</font>**<font style="color:rgb(44, 62, 80);">写入字符数组</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">write(char[] cbuf)</font>`<font style="color:rgb(44, 62, 80);"> 方法，将指定字符数组写入输出流。代码示例如下：</font>

```plain
FileWriter fw = null;
try {
    fw = new FileWriter("output.txt");
    char[] chars = {'H', 'e', 'l', 'l', 'o'};
    fw.write(chars); // 将字符数组写入文件
} catch (IOException e) {
    e.printStackTrace();
} finally {
    try {
        if (fw != null) {
            fw.close();
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

<font style="color:rgb(44, 62, 80);">③</font>**<font style="color:rgb(44, 62, 80);">写入指定字符数组</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">write(char[] cbuf, int off, int len)</font>`<font style="color:rgb(44, 62, 80);"> 方法，将指定字符数组的一部分写入输出流。代码示例如下（重复的部分就不写了哈，参照上面的部分）：</font>

```plain
fw = new FileWriter("output.txt");
    char[] chars = {'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!'};
fw.write(chars, 0, 5); // 将字符数组的前 5 个字符写入文件
```

<font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">fw.write()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将字符数组的前 5 个字符写入文件中。</font>

<font style="color:rgb(44, 62, 80);">④</font>**<font style="color:rgb(44, 62, 80);">写入字符串</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">write(String str)</font>`<font style="color:rgb(44, 62, 80);"> 方法，将指定字符串写入输出流。代码示例如下：</font>

```plain
fw = new FileWriter("output.txt");
String str = "沉默王二";
fw.write(str); // 将字符串写入文件
```

<font style="color:rgb(44, 62, 80);">⑤</font>**<font style="color:rgb(44, 62, 80);">写入指定字符串</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">write(String str, int off, int len)</font>`<font style="color:rgb(44, 62, 80);"> 方法，将指定字符串的一部分写入输出流。代码示例如下（try-with-resources形式）：</font>

```plain
String str = "沉默王二真的帅啊！";
try (FileWriter fw = new FileWriter("output.txt")) {
    fw.write(str, 0, 5); // 将字符串的前 5 个字符写入文件
} catch (IOException e) {
    e.printStackTrace();
}
```

<font style="color:rgb(102, 102, 102);">【注意】如果不关闭资源，数据只是保存到缓冲区，并未保存到文件中。</font>

#### <font style="color:rgb(44, 62, 80);">关闭close和刷新flush</font>

<font style="color:rgb(44, 62, 80);">因为 FileWriter 内置了缓冲区 ByteBuffer，所以如果不关闭输出流，就无法把字符写入到文件中。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438232911-be1fba62-69ae-405e-a389-6bf10ef362ac.png" />


<font style="color:rgb(44, 62, 80);">但是关闭了流对象，就无法继续写数据了。如果我们既想写入数据，又想继续使用流，就需要</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">flush</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法了。</font>

`<font style="color:rgb(44, 62, 80);">flush</font>`<font style="color:rgb(44, 62, 80);"> ：刷新缓冲区(写入文件)，流对象可以继续使用。</font>

`<font style="color:rgb(44, 62, 80);">close</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：先刷新缓冲区，然后通知系统释放资源。流对象不可以再被使用了。</font>

<font style="color:rgb(44, 62, 80);">flush还是比较有趣的，来段代码体会体会：</font>

```plain
//源   也就是输入流【读取流】 读取a.txt文件
FileReader fr=new FileReader("abc.txt");  //必须要存在a.txt文件，否则报FileNotFoundException异常
//目的地  也就是输出流
FileWriter fw=new FileWriter("b.txt");  //系统会自动创建b.txt，因为它是输出流！
int len;
while((len=fr.read())!=-1){
    fw.write(len);
}
//注意这里是没有使用close关闭流，开发中不能这样做，但是为了更好的体会flush的作用
```

<font style="color:rgb(44, 62, 80);">运行效果是怎么样的呢？答案是b.txt文件中依旧是空的，并没有任何东西。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438233496-3c19fb3f-1abb-4531-b449-b50381a11bdf.png" />


<font style="color:rgb(44, 62, 80);">原因我们前面已经说过了。</font>**<font style="color:rgb(44, 62, 80);">编程就是这样，不去敲，永远学不会</font>**<font style="color:rgb(44, 62, 80);">！！！所以一定要去敲，多敲啊！！！</font>

<font style="color:rgb(44, 62, 80);">在以上的代码中再添加下面三句代码，b.txt文件就能复制到源文件的数据了！</font>

```plain
fr.close();
fw.flush();
fw.close();
```

`<font style="color:rgb(44, 62, 80);">flush()</font>`<font style="color:rgb(44, 62, 80);">这个方法是清空缓存的意思，用于清空缓冲区的数据流，进行流的操作时，数据先被读到内存中，然后再把数据写到文件中。</font>

<font style="color:rgb(44, 62, 80);">你可以使用下面的代码示例再体验一下：</font>

```plain
// 使用文件名称创建流对象
FileWriter fw = new FileWriter("fw.txt");
// 写出数据，通过flush
fw.write('刷'); // 写出第1个字符
fw.flush();
fw.write('新'); // 继续写出第2个字符，写出成功
fw.flush();

// 写出数据，然后close
fw.write('关'); // 写出第1个字符
fw.close();
fw.write('闭'); // 继续写出第2个字符,【报错】java.io.IOException: Stream closed
fw.close();
```

<font style="color:rgb(44, 62, 80);">注意，即便是flush方法写出了数据，操作的最后还是要调用close方法，释放系统资源。当然你也可以用 try-with-resources 的方式。</font>

#### <font style="color:rgb(44, 62, 80);">FileWriter的续写和换行</font>

**<font style="color:rgb(44, 62, 80);">续写和换行</font>**<font style="color:rgb(44, 62, 80);">：操作类似于</font>[<font style="color:rgb(44, 62, 80);">FileOutputStream操作</font>](https://javabetter.cn/io/stream.html)<font style="color:rgb(44, 62, 80);">，直接上代码：</font>

```plain
// 使用文件名称创建流对象，可以续写数据
FileWriter fw = new FileWriter("fw.txt",true);     
// 写出字符串
fw.write("沉默王二");
// 写出换行
fw.write("\r\n");
// 写出字符串
fw.write("是傻 X");
// 关闭资源
fw.close();
```

<font style="color:rgb(44, 62, 80);">输出结果如下所示：</font>

```plain
输出结果:
沉默王二
是傻 X
```

#### <font style="color:rgb(44, 62, 80);">文本文件复制</font>

<font style="color:rgb(44, 62, 80);">直接上代码：</font>

```plain
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class CopyFile {
    public static void main(String[] args) throws IOException {
        //创建输入流对象
        FileReader fr=new FileReader("aa.txt");//文件不存在会抛出java.io.FileNotFoundException
        //创建输出流对象
        FileWriter fw=new FileWriter("copyaa.txt");
        /*创建输出流做的工作：
         *      1、调用系统资源创建了一个文件
         *      2、创建输出流对象
         *      3、把输出流对象指向文件        
         * */
        //文本文件复制，一次读一个字符
        copyMethod1(fr, fw);
        //文本文件复制，一次读一个字符数组
        copyMethod2(fr, fw);
        
        fr.close();
        fw.close();
    }

    public static void copyMethod1(FileReader fr, FileWriter fw) throws IOException {
        int ch;
        while((ch=fr.read())!=-1) {//读数据
            fw.write(ch);//写数据
        }
        fw.flush();
    }

    public static void copyMethod2(FileReader fr, FileWriter fw) throws IOException {
        char chs[]=new char[1024];
        int len=0;
        while((len=fr.read(chs))!=-1) {//读数据
            fw.write(chs,0,len);//写数据
        }
        fw.flush();
    }
}
```

### <font style="color:rgb(44, 62, 80);">IO异常的处理</font>

<font style="color:rgb(44, 62, 80);">我们在学习的过程中可能习惯把异常抛出，而实际开发中建议使用</font>`<font style="color:rgb(44, 62, 80);">try...catch...finally</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">代码块，处理异常部分，格式代码如下：</font>

```plain
// 声明变量
FileWriter fw = null;
try {
    //创建流对象
    fw = new FileWriter("fw.txt");
    // 写出数据
    fw.write("二哥真的帅"); //哥敢摸si
} catch (IOException e) {
    e.printStackTrace();
} finally {
    try {
        if (fw != null) {
            fw.close();
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

<font style="color:rgb(44, 62, 80);">或者直接使用 try-with-resources 的方式。</font>

```plain
try (FileWriter fw = new FileWriter("fw.txt")) {
    // 写出数据
    fw.write("二哥真的帅"); //哥敢摸si
} catch (IOException e) {
    e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">在这个代码中，try-with-resources 会在 try 块执行完毕后自动关闭 FileWriter 对象 fw，不需要手动关闭流。如果在 try 块中发生了异常，也会自动关闭流并抛出异常。因此，使用 try-with-resources 可以让代码更加简洁、安全和易读。</font>

### <font style="color:rgb(44, 62, 80);">小结</font>

<font style="color:rgb(44, 62, 80);">Writer 和 Reader 是 Java I/O 中用于字符输入输出的抽象类，它们提供了一系列方法用于读取和写入字符数据。它们的区别在于 Writer 用于将字符数据写入到输出流中，而 Reader 用于从输入流中读取字符数据。</font>

<font style="color:rgb(44, 62, 80);">Writer 和 Reader 的常用子类有 FileWriter、FileReader，可以将字符流写入和读取到文件中。</font>

<font style="color:rgb(44, 62, 80);">在使用 Writer 和 Reader 进行字符输入输出时，需要注意字符编码的问题。</font>

## <font style="color:rgb(44, 62, 80);">字节流 - Java IO 基石</font>

<font style="color:rgb(44, 62, 80);">我们必须得明确一点，一切文件（文本、视频、图片）的数据都是以二进制的形式存储的，传输时也是。所以，字节流可以传输任意类型的文件数据。</font>

### <font style="color:rgb(44, 62, 80);">字节输出流（OutputStream）</font>

`<font style="color:rgb(44, 62, 80);">java.io.OutputStream</font>`<font style="color:rgb(44, 62, 80);"> 是</font>**<font style="color:rgb(44, 62, 80);">字节输出流</font>**<font style="color:rgb(44, 62, 80);">的</font>**<font style="color:rgb(44, 62, 80);">超类</font>**<font style="color:rgb(44, 62, 80);">（父类），我们来看一下它定义的一些共性方法：</font>

<font style="color:rgb(44, 62, 80);">1、</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">close()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：关闭此输出流并释放与此流相关联的系统资源。</font>

<font style="color:rgb(44, 62, 80);">2、</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">flush()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：刷新此输出流并强制缓冲区的字节被写入到目的地。</font>

<font style="color:rgb(44, 62, 80);">3、 </font>`<font style="color:rgb(44, 62, 80);">write(byte[] b)</font>`<font style="color:rgb(44, 62, 80);">：将 b.length 个字节从指定的字节数组写入此输出流。</font>

<font style="color:rgb(44, 62, 80);">4、</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">write(byte[] b, int off, int len)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：从指定的字节数组写入 len 字节到此输出流，从偏移量 off开始。</font><font style="color:rgb(44, 62, 80);"> </font>**<font style="color:rgb(44, 62, 80);">也就是说从off个字节数开始一直到len个字节结束</font>**

### <font style="color:rgb(44, 62, 80);">FileOutputStream类</font>

`<font style="color:rgb(44, 62, 80);">OutputStream</font>`<font style="color:rgb(44, 62, 80);"> 有很多子类，我们从最简单的一个子类 FileOutputStream 开始。看名字就知道是文件输出流，用于将数据写入到文件。</font>

#### <font style="color:rgb(44, 62, 80);">FileOutputStream 的构造方法</font>

<font style="color:rgb(44, 62, 80);">1、使用文件名创建 FileOutputStream 对象。</font>

```plain
String fileName = "example.txt";
FileOutputStream fos = new FileOutputStream(fileName);
```

<font style="color:rgb(44, 62, 80);">以上代码使用文件名 "example.txt" 创建一个 FileOutputStream 对象，将数据写入到该文件中。</font>**<font style="color:rgb(44, 62, 80);">如果文件不存在，则创建一个新文件；如果文件已经存在，则覆盖原有文件</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">2、使用文件对象创建 FileOutputStream 对象。</font>

```plain
File file = new File("example.txt");
FileOutputStream fos = new FileOutputStream(file);
```

<font style="color:rgb(44, 62, 80);">FileOutputStream 的使用示例：</font>

```plain
FileOutputStream fos = null;
try {
  fos = new FileOutputStream("example.txt");
  fos.write("沉默王二".getBytes());
} catch (IOException e) {
  e.printStackTrace();
} finally {
  if (fos != null) {
    try {
      fos.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
```

<font style="color:rgb(44, 62, 80);">以上代码创建了一个 FileOutputStream 对象，将字符串 "沉默王二" 写入到 example.txt 文件中，并在最后关闭了输出流。</font>

#### <font style="color:rgb(44, 62, 80);">FileOutputStream 写入字节数据</font>

<font style="color:rgb(44, 62, 80);">使用 FileOutputStream 写入字节数据主要通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">write</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法：</font>

```plain
write(int b)
write(byte[] b)
write(byte[] b,int off,int len)  //从`off`索引开始，`len`个字节
```

<font style="color:rgb(44, 62, 80);">①、</font>**<font style="color:rgb(44, 62, 80);">写入字节</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">write(int b)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，每次可以写入一个字节，代码如下：</font>

```plain
// 使用文件名称创建流对象
FileOutputStream fos = new FileOutputStream("fos.txt");     
// 写出数据
fos.write(97); // 第1个字节
fos.write(98); // 第2个字节
fos.write(99); // 第3个字节
// 关闭资源
fos.close();
```

<font style="color:rgb(44, 62, 80);">字符 a 的</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">ASCII 值</font>](https://javabetter.cn/basic-extra-meal/java-unicode.html)<font style="color:rgb(44, 62, 80);">为 97，字符 b 的ASCII 值为 98，字符 b 的ASCII 值为 99。也就是说，以上代码可以写成：</font>

```plain
// 使用文件名称创建流对象
FileOutputStream fos = new FileOutputStream("fos.txt");     
// 写出数据
fos.write('a'); // 第1个字节
fos.write('b'); // 第2个字节
fos.write('c'); // 第3个字节
// 关闭资源
fos.close();
```

<font style="color:rgb(44, 62, 80);">当使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">write(int b)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法写出一个字节时，参数 b 表示要写出的字节的整数值。由于一个字节只有8位，因此参数 b 的取值范围应该在 0 到 255 之间，超出这个范围的值将会被截断。例如，如果参数 b 的值为 -1，那么它会被截断为 255，如果参数 b 的值为 256，那么它会被截断为 0。</font>

<font style="color:rgb(44, 62, 80);">在将参数 b 写入输出流中时，write(int b) 方法只会将参数 b 的低8位写入，而忽略高24位。这是因为在 Java 中，整型类型（包括 byte、short、int、long）在内存中以二进制补码形式表示。当将一个整型值传递给 write(int b) 方法时，方法会将该值转换为 byte 类型，只保留二进制补码的低8位，而忽略高24位。</font>

<font style="color:rgb(44, 62, 80);">例如，如果要写出的整数为 0x12345678，它的二进制补码表示为 0001 0010 0011 0100 0101 0110 0111 1000。当使用 write(int b) 方法写出该整数时，只会将二进制补码的低8位 0111 1000 写出，而忽略高24位 0001 0010 0011 0100 0101 0110。这就是参数 b 的高24位被忽略的原因。</font>

<font style="color:rgb(44, 62, 80);">0111 1000 是一个8位的二进制数，它对应的十进制数是 120，对应的 ASCII 码字符是小写字母 "x"。在 ASCII 码表中，小写字母 "x" 的十进制 ASCII 码值为 120。因此，如果使用 write(int b) 方法写出一个字节值为 0x78（十进制为 120），那么写出的结果就是小写字母 "x"。</font>

<font style="color:rgb(44, 62, 80);">我们来验证一下：</font>

```plain
FileOutputStream fos = null;
try {
    fos = new FileOutputStream("example.txt");

    fos.write(120);
    fos.write('x');
    fos.write(0x12345678);
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (fos != null) {
        try {
            fos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

<font style="color:rgb(44, 62, 80);">来看一下结果：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438193120-fe58e794-62a3-4824-9eb8-8540d50417ed.png" />


<font style="color:rgb(44, 62, 80);">果然是 3 个 x。</font>

<font style="color:rgb(44, 62, 80);">②、</font>**<font style="color:rgb(44, 62, 80);">写入字节数组</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">write(byte[] b)</font>`<font style="color:rgb(44, 62, 80);">，代码示例：</font>

```plain
// 使用文件名称创建流对象
FileOutputStream fos = new FileOutputStream("fos.txt");     
// 字符串转换为字节数组
byte[] b = "沉默王二有点帅".getBytes();
// 写入字节数组数据
fos.write(b);
// 关闭资源
fos.close();
```

<font style="color:rgb(44, 62, 80);">③、</font>**<font style="color:rgb(44, 62, 80);">写入指定长度字节数组</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">write(byte[] b, int off, int len)</font>`<font style="color:rgb(44, 62, 80);">，代码示例：</font>

```plain
// 使用文件名称创建流对象
FileOutputStream fos = new FileOutputStream("fos.txt");     
// 字符串转换为字节数组
byte[] b = "abcde".getBytes();
// 从索引2开始，2个字节。索引2是c，两个字节，也就是cd。
fos.write(b,2,2);
// 关闭资源
fos.close();
```

#### <font style="color:rgb(44, 62, 80);">FileOutputStream实现数据追加、换行</font>

<font style="color:rgb(44, 62, 80);">在上面的代码示例中，每次运行程序都会创建新的输出流对象，于是文件中的数据也会被清空。如果想保留目标文件中的数据，还能继续</font>**<font style="color:rgb(44, 62, 80);">追加新数据</font>**<font style="color:rgb(44, 62, 80);">，该怎么办呢？以及如何实现</font>**<font style="color:rgb(44, 62, 80);">换行</font>**<font style="color:rgb(44, 62, 80);">呢？</font>

<font style="color:rgb(44, 62, 80);">其实很简单。</font>

<font style="color:rgb(44, 62, 80);">我们来学习</font>`<font style="color:rgb(44, 62, 80);">FileOutputStream</font>`<font style="color:rgb(44, 62, 80);">的另外两个构造方法，如下：</font>

<font style="color:rgb(44, 62, 80);">1、使用文件名和追加标志创建 FileOutputStream 对象</font>

```plain
String fileName = "example.txt";
boolean append = true;
FileOutputStream fos = new FileOutputStream(fileName, append);
```

<font style="color:rgb(44, 62, 80);">以上代码使用文件名 "example.txt" 和追加标志创建一个 FileOutputStream 对象，将数据追加到该文件的末尾。如果文件不存在，则创建一个新文件；如果文件已经存在，则在文件末尾追加数据。</font>

<font style="color:rgb(44, 62, 80);">2、使用文件对象和追加标志创建 FileOutputStream 对象</font>

```plain
File file = new File("example.txt");
boolean append = true;
FileOutputStream fos = new FileOutputStream(file, append);
```

<font style="color:rgb(44, 62, 80);">以上代码使用文件对象和追加标志创建一个 FileOutputStream 对象，将数据追加到该文件的末尾。</font>

<font style="color:rgb(44, 62, 80);">这两个构造方法，第二个参数中都需要传入一个boolean类型的值，</font>`<font style="color:rgb(44, 62, 80);">true</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">表示追加数据，</font>`<font style="color:rgb(44, 62, 80);">false</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">表示不追加也就是清空原有数据。</font>

<font style="color:rgb(44, 62, 80);">实现数据追加代码如下：</font>

```plain
// 使用文件名称创建流对象
FileOutputStream fos = new FileOutputStream("fos.txt",true);     
// 字符串转换为字节数组
byte[] b = "abcde".getBytes();
// 写出从索引2开始，2个字节。索引2是c，两个字节，也就是cd。
fos.write(b);
// 关闭资源
fos.close();
```

<font style="color:rgb(44, 62, 80);">多次运行代码，你会发现数据在不断地追加。</font>

<font style="color:rgb(44, 62, 80);">在 Windows 系统中，换行符号是</font>`<font style="color:rgb(44, 62, 80);">\r\n</font>`<font style="color:rgb(44, 62, 80);">，具体代码如下：</font>

```plain
String filename = "example.txt";
FileOutputStream fos = new FileOutputStream(filename, true);  // 追加模式
String content = "沉默王二\r\n";  // 使用回车符和换行符的组合
fos.write(content.getBytes());
fos.close();
```

<font style="color:rgb(44, 62, 80);">在 macOS 系统中，换行符是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">\n</font>`<font style="color:rgb(44, 62, 80);">，具体代码如下：</font>

```plain
String filename = "example.txt";
FileOutputStream fos = new FileOutputStream(filename, true);  // 追加模式
String content = "沉默王二\n";  // 只使用换行符
fos.write(content.getBytes());
fos.close();
```

<font style="color:rgb(44, 62, 80);">这里再唠一唠回车符和换行符。</font>

<font style="color:rgb(44, 62, 80);">回车符（</font>`<font style="color:rgb(44, 62, 80);">\r</font>`<font style="color:rgb(44, 62, 80);">）和换行符（</font>`<font style="color:rgb(44, 62, 80);">\n</font>`<font style="color:rgb(44, 62, 80);">）是计算机中常见的控制字符，用于表示一行的结束或者换行的操作。它们在不同的操作系统和编程语言中的使用方式可能有所不同。</font>

<font style="color:rgb(44, 62, 80);">在 Windows 系统中，通常使用回车符和换行符的组合（</font>`<font style="color:rgb(44, 62, 80);">\r\n</font>`<font style="color:rgb(44, 62, 80);">）来表示一行的结束。在文本文件中，每行的末尾都会以一个回车符和一个换行符的组合结束。这是由于早期的打印机和终端设备需要回车符和换行符的组合来完成一行的结束和换行操作。在 Windows 中，文本编辑器和命令行终端等工具都支持使用回车符和换行符的组合来表示一行的结束。</font>

<font style="color:rgb(44, 62, 80);">而在 macOS 和 Linux 系统中，通常只使用换行符（</font>`<font style="color:rgb(44, 62, 80);">\n</font>`<font style="color:rgb(44, 62, 80);">）来表示一行的结束。在文本文件中，每行的末尾只有一个换行符。这是由于早期 Unix 系统中的终端设备只需要换行符来完成一行的结束和跨行操作。在 macOS 和 Linux 中，文本编辑器和终端等工具都支持使用换行符来表示一行的结束。</font>

<font style="color:rgb(44, 62, 80);">在编程语言中，通常也会使用回车符和换行符来进行字符串的操作。例如，在 Java 中，字符串中的回车符可以用 "</font>`<font style="color:rgb(44, 62, 80);">\r</font>`<font style="color:rgb(44, 62, 80);">" 来表示，换行符可以用 "</font>`<font style="color:rgb(44, 62, 80);">\n</font>`<font style="color:rgb(44, 62, 80);">" 来表示。在通过输入输出流进行文件读写时，也需要注意回车符和换行符的使用方式和操作系统的差异。</font>

### <font style="color:rgb(44, 62, 80);">字节输入流（InputStream）</font>

`<font style="color:rgb(44, 62, 80);">java.io.InputStream</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是</font>**<font style="color:rgb(44, 62, 80);">字节输入流</font>**<font style="color:rgb(44, 62, 80);">的</font>**<font style="color:rgb(44, 62, 80);">超类</font>**<font style="color:rgb(44, 62, 80);">（父类），我们来看一下它的一些共性方法：</font>

<font style="color:rgb(44, 62, 80);">1、</font>`<font style="color:rgb(44, 62, 80);">close()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：关闭此输入流并释放与此流相关的系统资源。</font>

<font style="color:rgb(44, 62, 80);">2、</font>`<font style="color:rgb(44, 62, 80);">int read()</font>`<font style="color:rgb(44, 62, 80);">： 从输入流读取数据的下一个字节。</font>

<font style="color:rgb(44, 62, 80);">3、</font>`<font style="color:rgb(44, 62, 80);">read(byte[] b)</font>`<font style="color:rgb(44, 62, 80);">： 该方法返回的 int 值代表的是读取了多少个字节，读到几个返回几个，读取不到返回-1</font>

### <font style="color:rgb(44, 62, 80);">FileInputStream类</font>

<font style="color:rgb(44, 62, 80);">InputStream 有很多子类，我们从最简单的一个子类 FileInputStream 开始。看名字就知道是文件输入流，用于将数据从文件中读取数据。</font>

#### <font style="color:rgb(44, 62, 80);">FileInputStream的构造方法</font>

<font style="color:rgb(44, 62, 80);">1、</font>`<font style="color:rgb(44, 62, 80);">FileInputStream(String name)</font>`<font style="color:rgb(44, 62, 80);">：创建一个 FileInputStream 对象，并打开指定名称的文件进行读取。文件名由 name 参数指定。如果文件不存在，将会抛出 FileNotFoundException 异常。</font>

<font style="color:rgb(44, 62, 80);">2、</font>`<font style="color:rgb(44, 62, 80);">FileInputStream(File file)</font>`<font style="color:rgb(44, 62, 80);">：创建一个 FileInputStream 对象，并打开指定的 File 对象表示的文件进行读取。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下：</font>

```plain
// 创建一个 FileInputStream 对象
FileInputStream fis = new FileInputStream("test.txt");

// 读取文件内容
int data;
while ((data = fis.read()) != -1) {
    System.out.print((char) data);
}

// 关闭输入流
fis.close();
```

#### <font style="color:rgb(44, 62, 80);">FileInputStream读取字节数据</font>

<font style="color:rgb(44, 62, 80);">①、</font>**<font style="color:rgb(44, 62, 80);">读取字节</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">read()</font>`<font style="color:rgb(44, 62, 80);">方法会读取一个字节并返回其整数表示。如果已经到达文件的末尾，则返回 -1。如果在读取时发生错误，则会抛出 IOException 异常。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下：</font>

```plain
// 创建一个 FileInputStream 对象
FileInputStream fis = new FileInputStream("test.txt");

// 读取文件内容
int data;
while ((data = fis.read()) != -1) {
    System.out.print((char) data);
}

// 关闭输入流
fis.close();
```

<font style="color:rgb(44, 62, 80);">②、</font>**<font style="color:rgb(44, 62, 80);">使用字节数组读取</font>**<font style="color:rgb(44, 62, 80);">：</font>`<font style="color:rgb(44, 62, 80);">read(byte[] b)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法会从输入流中最多读取 b.length 个字节，并将它们存储到缓冲区数组 b 中。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下：</font>

```plain
// 创建一个 FileInputStream 对象
FileInputStream fis = new FileInputStream("test.txt");

// 读取文件内容到缓冲区
byte[] buffer = new byte[1024];
int count;
while ((count = fis.read(buffer)) != -1) {
    System.out.println(new String(buffer, 0, count));
}

// 关闭输入流
fis.close();
```

#### <font style="color:rgb(44, 62, 80);">字节流FileInputstream复制图片</font>

<font style="color:rgb(44, 62, 80);">原理很简单，就是把图片信息读入到字节输入流中，再通过字节输出流写入到文件中。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下所示：</font>

```plain
// 创建一个 FileInputStream 对象以读取原始图片文件
FileInputStream fis = new FileInputStream("original.jpg");

// 创建一个 FileOutputStream 对象以写入复制后的图片文件
FileOutputStream fos = new FileOutputStream("copy.jpg");

// 创建一个缓冲区数组以存储读取的数据
byte[] buffer = new byte[1024];
int count;

// 读取原始图片文件并将数据写入复制后的图片文件
while ((count = fis.read(buffer)) != -1) {
    fos.write(buffer, 0, count);
}

// 关闭输入流和输出流
fis.close();
fos.close();
```

<font style="color:rgb(44, 62, 80);">上面的代码创建了一个 FileInputStream 对象以读取原始图片文件，并创建了一个 FileOutputStream 对象以写入复制后的图片文件。然后，使用 while 循环逐个读取原始图片文件中的字节，并将其写入复制后的图片文件中。最后，关闭输入流和输出流释放资源。</font>

### [<font style="color:rgb(44, 62, 80);">小结</font>](https://javabetter.cn/io/stream.html#%E5%B0%8F%E7%BB%93)

<font style="color:rgb(44, 62, 80);">InputStream 是字节输入流的抽象类，它定义了读取字节数据的方法，如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">read()</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">read(byte[] b)</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">read(byte[] b, int off, int len)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">等。OutputStream 是字节输出流的抽象类，它定义了写入字节数据的方法，如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">write(int b)</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">write(byte[] b)</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">write(byte[] b, int off, int len)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">等。这两个抽象类是字节流的基础。</font>

<font style="color:rgb(44, 62, 80);">FileInputStream 是从文件中读取字节数据的流，它继承自 InputStream。FileOutputStream 是将字节数据写入文件的流，它继承自 OutputStream。这两个类是字节流最常用的实现类之一。</font>



## <font style="color:rgb(44, 62, 80);">缓冲流</font>

<font style="color:rgb(44, 62, 80);">Java 的缓冲流是对字节流和字符流的一种封装，通过在内存中开辟缓冲区来提高 I/O 操作的效率。Java 通过 BufferedInputStream 和 BufferedOutputStream 来实现字节流的缓冲，通过 BufferedReader 和 BufferedWriter 来实现字符流的缓冲。</font>

<font style="color:rgb(44, 62, 80);">缓冲流的工作原理是将数据先写入缓冲区中，当缓冲区满时再一次性写入文件或输出流，或者当缓冲区为空时一次性从文件或输入流中读取一定量的数据。这样可以减少系统的 I/O 操作次数，提高系统的 I/O 效率，从而提高程序的运行效率。</font>

### <font style="color:rgb(44, 62, 80);">字节缓冲流</font>

<font style="color:rgb(44, 62, 80);">BufferedInputStream 和 BufferedOutputStream 属于字节缓冲流，强化了字节流 InputStream 和 OutputStream，关于字节流，我们前面已经详细地讲过了，可以</font>[<font style="color:rgb(44, 62, 80);">戳这个链接</font>](https://javabetter.cn/io/stream.html)<font style="color:rgb(44, 62, 80);">去温习。</font>

#### <font style="color:rgb(44, 62, 80);">构造方法</font>

+ `<font style="color:rgb(44, 62, 80);">BufferedInputStream(InputStream in)</font>`<font style="color:rgb(44, 62, 80);"> ：创建一个新的缓冲输入流，注意参数类型为</font>`**<font style="color:rgb(44, 62, 80);">InputStream</font>**`<font style="color:rgb(44, 62, 80);">。</font>
+ `<font style="color:rgb(44, 62, 80);">BufferedOutputStream(OutputStream out)</font>`<font style="color:rgb(44, 62, 80);">： 创建一个新的缓冲输出流，注意参数类型为</font>`**<font style="color:rgb(44, 62, 80);">OutputStream</font>**`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下：</font>

```plain
// 创建字节缓冲输入流，先声明字节流
FileInputStream fps = new FileInputStream(b.txt);
BufferedInputStream bis = new BufferedInputStream(fps)

// 创建字节缓冲输入流（一步到位）
BufferedInputStream bis = new BufferedInputStream(new FileInputStream("b.txt"));

// 创建字节缓冲输出流（一步到位）
BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("b.txt"));
```

#### <font style="color:rgb(44, 62, 80);">缓冲流的高效</font>

<font style="color:rgb(44, 62, 80);">我们通过复制一个 370M+ 的大文件，来测试缓冲流的效率。为了做对比，我们先用基本流来实现一下，代码如下：</font>

```plain
// 记录开始时间
long start = System.currentTimeMillis();
// 创建流对象
try (FileInputStream fis = new FileInputStream("py.mp4");//exe文件够大
        FileOutputStream fos = new FileOutputStream("copyPy.mp4")){
    // 读写数据
    int b;
    while ((b = fis.read()) != -1) {
        fos.write(b);
    }
}
// 记录结束时间
long end = System.currentTimeMillis();
System.out.println("普通流复制时间:"+(end - start)+" 毫秒");
```

<font style="color:rgb(44, 62, 80);">不好意思，我本机比较菜，10 分钟还在复制中。切换到缓冲流试一下，代码如下：</font>

```plain
// 记录开始时间
long start = System.currentTimeMillis();
// 创建流对象
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("py.mp4"));
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("copyPy.mp4"));){
    // 读写数据
    int b;
    while ((b = bis.read()) != -1) {
        bos.write(b);
    }
}
// 记录结束时间
long end = System.currentTimeMillis();
System.out.println("缓冲流复制时间:"+(end - start)+" 毫秒");
```

<font style="color:rgb(44, 62, 80);">只需要 8016 毫秒，如何更快呢？</font>

<font style="color:rgb(44, 62, 80);">可以换数组的方式来读写，这个我们前面也有讲到，代码如下：</font>

```plain
// 记录开始时间
long start = System.currentTimeMillis();
// 创建流对象
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("py.mp4"));
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("copyPy.mp4"));){
    // 读写数据
    int len;
    byte[] bytes = new byte[8*1024];
    while ((len = bis.read(bytes)) != -1) {
        bos.write(bytes, 0 , len);
    }
}
// 记录结束时间
long end = System.currentTimeMillis();
System.out.println("缓冲流使用数组复制时间:"+(end - start)+" 毫秒");
```

<font style="color:rgb(44, 62, 80);">这下就更快了，只需要 521 毫秒。</font>

#### <font style="color:rgb(44, 62, 80);">为什么字节缓冲流会这么快？</font>

<font style="color:rgb(44, 62, 80);">传统的 Java IO 是阻塞模式的，它的工作状态就是“读/写，等待，读/写，等待。。。。。。”</font>

<font style="color:rgb(44, 62, 80);">字节缓冲流解决的就是这个问题：</font>**<font style="color:rgb(44, 62, 80);">一次多读点多写点，减少读写的频率，用空间换时间</font>**<font style="color:rgb(44, 62, 80);">。</font>

+ <font style="color:rgb(44, 62, 80);">减少系统调用次数：在使用字节缓冲流时，数据不是立即写入磁盘或输出流，而是先写入缓冲区，当缓冲区满时再一次性写入磁盘或输出流。这样可以减少系统调用的次数，从而提高 I/O 操作的效率。</font>
+ <font style="color:rgb(44, 62, 80);">减少磁盘读写次数：在使用字节缓冲流时，当需要读取数据时，缓冲流会先从缓冲区中读取数据，如果缓冲区中没有足够的数据，则会一次性从磁盘或输入流中读取一定量的数据。同样地，当需要写入数据时，缓冲流会先将数据写入缓冲区，如果缓冲区满了，则会一次性将缓冲区中的数据写入磁盘或输出流。这样可以减少磁盘读写的次数，从而提高 I/O 操作的效率。</font>
+ <font style="color:rgb(44, 62, 80);">提高数据传输效率：在使用字节缓冲流时，由于数据是以块的形式进行传输，因此可以减少数据传输的次数，从而提高数据传输的效率。</font>

<font style="color:rgb(44, 62, 80);">我们来看 BufferedInputStream 的 read 方法：</font>

```plain
public synchronized int read() throws IOException {
    if (pos >= count) {     // 如果当前位置已经到达缓冲区末尾
        fill();             // 填充缓冲区
        if (pos >= count)   // 如果填充后仍然到达缓冲区末尾，说明已经读取完毕
            return -1;      // 返回 -1 表示已经读取完毕
    }
    return getBufIfOpen()[pos++] & 0xff; // 返回当前位置的字节，并将位置加 1
}
```

<font style="color:rgb(44, 62, 80);">这段代码主要有两部分：</font>

+ `<font style="color:rgb(44, 62, 80);">fill()</font>`<font style="color:rgb(44, 62, 80);">：该方法会将缓冲 buf 填满。</font>
+ `<font style="color:rgb(44, 62, 80);">getBufIfOpen()[pos++] & 0xff</font>`<font style="color:rgb(44, 62, 80);">：返回当前读取位置 pos 处的字节（</font>`<font style="color:rgb(44, 62, 80);">getBufIfOpen()</font>`<font style="color:rgb(44, 62, 80);">返回的是 buffer 数组，是 byte 类型），并将其与 0xff 进行位与运算。这里的目的是将读取到的字节 b 当做无符号的字节处理，因为 Java 的 byte 类型是有符号的，而将 b 与 0xff 进行位与运算，就可以将其转换为无符号的字节，其范围为 0 到 255。</font>

<font style="color:rgb(102, 102, 102);">byte & 0xFF 我们一会再细讲。</font>

<font style="color:rgb(44, 62, 80);">再来看 FileInputStream 的 read 方法：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438250425-228e3b2c-7a0b-422c-8468-b67fe1ff64bc.png" />


<font style="color:rgb(44, 62, 80);">在这段代码中，</font>`<font style="color:rgb(44, 62, 80);">read0()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法是一个</font>[<font style="color:rgb(44, 62, 80);">本地方法</font>](https://javabetter.cn/oo/native-method.html)<font style="color:rgb(44, 62, 80);">，它的实现是由底层操作系统提供的，并不是 Java 语言实现的。在不同的操作系统上，</font>`<font style="color:rgb(44, 62, 80);">read0()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的实现可能会有所不同，但是它们的功能都是相同的，都是用于</font>**<font style="color:rgb(44, 62, 80);">读取一个字节</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">再来看一下 BufferedOutputStream 的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">write(byte b[], int off, int len)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法：</font>

```plain
public synchronized void write(byte b[], int off, int len) throws IOException {
    if (len >= buf.length) {    // 如果写入的字节数大于等于缓冲区长度
        /* 如果请求的长度超过了输出缓冲区的大小，
           先刷新缓冲区，然后直接将数据写入。
           这样可以避免缓冲流级联时的问题。*/
        flushBuffer();          // 先刷新缓冲区
        out.write(b, off, len); // 直接将数据写入输出流
        return;
    }
    if (len > buf.length - count) { // 如果写入的字节数大于空余空间
        flushBuffer();              // 先刷新缓冲区
    }
    System.arraycopy(b, off, buf, count, len); // 将数据拷贝到缓冲区中
    count += len;                             // 更新计数器
}
```

<font style="color:rgb(44, 62, 80);">首先，该方法会检查写入的字节数是否大于等于缓冲区长度，如果是，则先将缓冲区中的数据刷新到磁盘中，然后直接将数据写入输出流。这样做是为了避免缓冲流级联时的问题，即缓冲区的大小不足以容纳写入的数据时，可能会引发级联刷新，导致效率降低。</font>

<font style="color:rgb(102, 102, 102);">级联问题（Cascade Problem）是指在一组缓冲流（Buffered Stream）中，由于缓冲区的大小不足以容纳要写入的数据，导致数据被分割成多个部分，并分别写入到不同的缓冲区中，最终需要逐个刷新缓冲区，从而导致性能下降的问题。</font>

<font style="color:rgb(44, 62, 80);">其次，如果写入的字节数小于缓冲区长度，则检查缓冲区中剩余的空间是否足够容纳要写入的字节数，如果不够，则先将缓冲区中的数据刷新到磁盘中。然后，使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">System.arraycopy()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将要写入的数据拷贝到缓冲区中，并更新计数器 count。</font>

<font style="color:rgb(44, 62, 80);">最后，如果写入的字节数小于缓冲区长度且缓冲区中还有剩余空间，则直接将要写入的数据拷贝到缓冲区中，并更新计数器 count。</font>

<font style="color:rgb(44, 62, 80);">也就是说，只有当 buf 写满了，才会 flush，将数据刷到磁盘，默认一次刷 8192 个字节。</font>

```plain
public BufferedOutputStream(OutputStream out) {
    this(out, 8192);
}
```

<font style="color:rgb(44, 62, 80);">如果 buf 没有写满，会继续写 buf。</font>

<font style="color:rgb(44, 62, 80);">对比一下 FileOutputStream 的 write 方法，同样是本地方法，一次只能写入一个字节。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438250419-3d14a5bf-ad4d-40a4-af01-dd5f4ca55e10.png" />


<font style="color:rgb(44, 62, 80);">当把 BufferedOutputStream 和 BufferedInputStream 配合起来使用后，就减少了大量的读写次数，尤其是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">byte[] bytes = new byte[8*1024]</font>`<font style="color:rgb(44, 62, 80);">，就相当于缓冲区的空间有 8 个 1024 字节，那读写效率就会大大提高。</font>

#### <font style="color:rgb(44, 62, 80);">byte & 0xFF</font>

<font style="color:rgb(44, 62, 80);">byte 类型通常被用于存储二进制数据，例如读取和写入文件、网络传输等场景。在这些场景下，byte 类型的变量可以用来存储数据流中的每个字节，从而进行读取和写入操作。</font>

<font style="color:rgb(44, 62, 80);">byte 类型是有符号的，即其取值范围为 -128 到 127。如果我们希望得到的是一个无符号的 byte 值，就需要使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">byte & 0xFF</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来进行转换。</font>

<font style="color:rgb(44, 62, 80);">这是因为 0xFF 是一个无符号的整数，它的二进制表示为 11111111。当一个 byte 类型的值与 0xFF 进行位与运算时，会将 byte 类型的值转换为一个无符号的整数，其范围为 0 到 255。</font>

<font style="color:rgb(44, 62, 80);">0xff 是一个十六进制的数，相当于二进制的 11111111，& 运算符的意思是：如果两个操作数的对应位为 1，则输出 1，否则为 0；由于 0xff 有 8 个 1，单个 byte 转成 int 其实就是将 byte 和 int 类型的 255 进行(&)与运算。</font>

<font style="color:rgb(44, 62, 80);">例如，如果我们有一个 byte 类型的变量 b，其值为 -1，那么 b & 0xFF 的结果就是 255。这样就可以将一个有符号的 byte 类型的值转换为一个无符号的整数。</font>

<font style="color:rgb(44, 62, 80);">& 运算是一种二进制数据的计算方式, 两个操作位都为1，结果才为1，否则结果为0. 在上面的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">getBufIfOpen()[pos++] & 0xff</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">计算过程中, byte 有 8bit, OXFF 是16进制的255, 表示的是 int 类型, int 有 32bit.</font>

<font style="color:rgb(44, 62, 80);">如果</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">getBufIfOpen()[pos++]</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为 -118, 那么其原码表示为</font>

```plain
00000000 00000000 00000000 10001010
```

<font style="color:rgb(44, 62, 80);">反码为</font>

```plain
11111111 11111111 11111111 11110101
```

<font style="color:rgb(44, 62, 80);">补码为</font>

```plain
11111111 11111111 11111111 11110110
```

<font style="color:rgb(44, 62, 80);">0XFF 表示16进制的数据255, 原码, 反码, 补码都是一样的, 其二进制数据为</font>

```plain
00000000 00000000 00000000 11111111
```

<font style="color:rgb(44, 62, 80);">0XFF 和 -118 进行&运算后结果为</font>

```plain
00000000 00000000 00000000 11110110
```

<font style="color:rgb(44, 62, 80);">还原为原码后为</font>

```plain
00000000 00000000 00000000 10001010
```

<font style="color:rgb(44, 62, 80);">其表示的 int 值为 138，可见将 byte 类型的 -118 与 0XFF 进行与运算后值由 -118 变成了 int 类型的 138，其中低8位和byte的-118完全一致。</font>

<font style="color:rgb(44, 62, 80);">顺带聊一下 原码、反码和补码。</font>

<font style="color:rgb(44, 62, 80);">①、原码</font>

<font style="color:rgb(44, 62, 80);">原码就是符号位加上真值的绝对值，即用第一位表示符号，其余位表示值。比如如果是8位二进制:</font>

```plain
[+1]原 = 0000 0001

[-1]原 = 1000 0001
```

<font style="color:rgb(44, 62, 80);">第一位是符号位。因为第一位是符号位，所以8位二进制数的取值范围就是：</font>

```plain
[1111 1111 , 0111 1111]
```

<font style="color:rgb(44, 62, 80);">即</font>

```plain
[-127 , 127]
```

<font style="color:rgb(44, 62, 80);">②、反码</font>

<font style="color:rgb(44, 62, 80);">反码的表示方法是：</font>

+ <font style="color:rgb(44, 62, 80);">正数的反码是其本身</font>
+ <font style="color:rgb(44, 62, 80);">负数的反码是在其原码的基础上，符号位不变，其余各个位取反。</font>

<font style="color:rgb(44, 62, 80);">例如：</font>

```plain
[+1] = [00000001]原 = [00000001]反

[-1] = [10000001]原 = [11111110]反
```

<font style="color:rgb(44, 62, 80);">可见如果一个反码表示的是负数，人脑无法直观的看出来它的数值。通常要将其转换成原码再计算。</font>

<font style="color:rgb(44, 62, 80);">③、补码</font>

<font style="color:rgb(44, 62, 80);">补码的表示方法是：</font>

+ <font style="color:rgb(44, 62, 80);">正数的补码就是其本身</font>
+ <font style="color:rgb(44, 62, 80);">负数的补码是在其原码的基础上，符号位不变，其余各位取反，最后+1。(即在反码的基础上+1)</font>

```plain
[+1] = [00000001]原 = [00000001]反 = [00000001]补

[-1] = [10000001]原 = [11111110]反 = [11111111]补
```

<font style="color:rgb(44, 62, 80);">对于负数，补码表示方式也是人脑无法直观看出其数值的。通常也需要转换成原码在计算其数值。</font>

<font style="color:rgb(44, 62, 80);">从上面可以看到：</font>

+ <font style="color:rgb(44, 62, 80);">对于正数：原码，反码，补码都是一样的</font>
+ <font style="color:rgb(44, 62, 80);">对于负数：原码，反码，补码都是不一样的</font>

### <font style="color:rgb(44, 62, 80);">字符缓冲流</font>

<font style="color:rgb(44, 62, 80);">BufferedReader 类继承自 Reader 类，提供了一些便捷的方法，例如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">readLine()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法可以一次读取一行数据，而不是一个字符一个字符地读取。</font>

<font style="color:rgb(44, 62, 80);">BufferedWriter 类继承自 Writer 类，提供了一些便捷的方法，例如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newLine()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法可以写入一个系统特定的行分隔符。</font>

#### <font style="color:rgb(44, 62, 80);">构造方法</font>

+ `<font style="color:rgb(44, 62, 80);">BufferedReader(Reader in)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">：创建一个新的缓冲输入流，注意参数类型为</font>**<font style="color:rgb(44, 62, 80);">Reader</font>**<font style="color:rgb(44, 62, 80);">。</font>
+ `<font style="color:rgb(44, 62, 80);">BufferedWriter(Writer out)</font>`<font style="color:rgb(44, 62, 80);">： 创建一个新的缓冲输出流，注意参数类型为</font>**<font style="color:rgb(44, 62, 80);">Writer</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下：</font>

```plain
// 创建字符缓冲输入流
BufferedReader br = new BufferedReader(new FileReader("b.txt"));
// 创建字符缓冲输出流
BufferedWriter bw = new BufferedWriter(new FileWriter("b.txt"));
```

#### <font style="color:rgb(44, 62, 80);">字符缓冲流特有方法</font>

<font style="color:rgb(44, 62, 80);">字符缓冲流的基本方法与</font>[<font style="color:rgb(44, 62, 80);">普通字符流</font>](https://javabetter.cn/io/reader-writer.html)<font style="color:rgb(44, 62, 80);">调用方式一致，这里不再赘述，我们来看字符缓冲流</font>**<font style="color:rgb(44, 62, 80);">特有</font>**<font style="color:rgb(44, 62, 80);">的方法。</font>

+ <font style="color:rgb(44, 62, 80);">BufferedReader：</font>`<font style="color:rgb(44, 62, 80);">String readLine()</font>`<font style="color:rgb(44, 62, 80);">:</font><font style="color:rgb(44, 62, 80);"> </font>**<font style="color:rgb(44, 62, 80);">读一行数据</font>**<font style="color:rgb(44, 62, 80);">，读取到最后返回 null</font>
+ <font style="color:rgb(44, 62, 80);">BufferedWriter：</font>`<font style="color:rgb(44, 62, 80);">newLine()</font>`<font style="color:rgb(44, 62, 80);">:</font><font style="color:rgb(44, 62, 80);"> </font>**<font style="color:rgb(44, 62, 80);">换行</font>**<font style="color:rgb(44, 62, 80);">，由系统定义换行符。</font>

<font style="color:rgb(44, 62, 80);">来看</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">readLine()</font>`<font style="color:rgb(44, 62, 80);">方法的代码示例：</font>

```plain
// 创建流对象
BufferedReader br = new BufferedReader(new FileReader("a.txt"));
// 定义字符串,保存读取的一行文字
String line  = null;
// 循环读取,读取到最后返回null
while ((line = br.readLine())!=null) {
    System.out.print(line);
    System.out.println("------");
}
// 释放资源
br.close();
```

<font style="color:rgb(44, 62, 80);">再来看</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">newLine()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法的代码示例：</font>

```plain
// 创建流对象
BfferedWriter bw = new BufferedWriter(new FileWriter("b.txt"));
// 写出数据
bw.write("沉");
// 写出换行
bw.newLine();
bw.write("默");
bw.newLine();
bw.write("王");
bw.newLine();
bw.write("二");
bw.newLine();
// 释放资源
bw.close();
```

### <font style="color:rgb(44, 62, 80);">字符缓冲流练习</font>

<font style="color:rgb(44, 62, 80);">来欣赏一下我写的这篇诗：</font>

<font style="color:rgb(102, 102, 102);">6.岑夫子，丹丘生，将进酒，杯莫停。</font>

<font style="color:rgb(102, 102, 102);">1.君不见黄河之水天上来，奔流到海不复回。</font>

<font style="color:rgb(102, 102, 102);">8.钟鼓馔玉不足贵，但愿长醉不愿醒。</font>

<font style="color:rgb(102, 102, 102);">3.人生得意须尽欢，莫使金樽空对月。</font>

<font style="color:rgb(102, 102, 102);">5.烹羊宰牛且为乐，会须一饮三百杯。</font>

<font style="color:rgb(102, 102, 102);">2.君不见高堂明镜悲白发，朝如青丝暮成雪。</font>

<font style="color:rgb(102, 102, 102);">7.与君歌一曲，请君为我倾耳听。</font>

<font style="color:rgb(102, 102, 102);">4.天生我材必有用，千金散尽还复来。</font>

<font style="color:rgb(44, 62, 80);">欣赏完了没？</font>

<font style="color:rgb(44, 62, 80);">估计你也看出来了，这是李白写的《将进酒》，不是我王二写的。</font><font style="color:rgb(44, 62, 80);">😝</font>

<font style="color:rgb(44, 62, 80);">不过，顺序是乱的，还好，我都编了号。那如何才能按照正确的顺序来呢？</font>

<font style="color:rgb(44, 62, 80);">来看代码实现：</font>

```plain
// 创建map集合,保存文本数据,键为序号,值为文字
HashMap<String, String> lineMap = new HashMap<>();

// 创建流对象  源
BufferedReader br = new BufferedReader(new FileReader("logs/test.log"));
//目标
BufferedWriter bw = new BufferedWriter(new FileWriter("logs/test1.txt"));

// 读取数据
String line;
while ((line = br.readLine())!=null) {
    // 解析文本
    if (line.isEmpty()) {
        continue;
    }
    String[] split = line.split(Pattern.quote("."));
    // 保存到集合
    lineMap.put(split[0], split[1]);
}
// 释放资源
br.close();

// 遍历map集合
for (int i = 1; i <= lineMap.size(); i++) {
    String key = String.valueOf(i);
    // 获取map中文本
    String value = lineMap.get(key);
    // 写出拼接文本
    bw.write(key+"."+value);
    // 写出换行
    bw.newLine();
}
// 释放资源
bw.close();
```

<font style="color:rgb(44, 62, 80);">这里面用到的知识都是我们前面学过的，比如说</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">HashMap</font>](https://javabetter.cn/collection/hashmap.html)<font style="color:rgb(44, 62, 80);">，</font>[<font style="color:rgb(44, 62, 80);">字符串分割</font>](https://javabetter.cn/string/split.html)<font style="color:rgb(44, 62, 80);">，包括刚刚学习的字符缓冲流。</font>

<font style="color:rgb(44, 62, 80);">来看输出结果</font>

```plain
1.君不见黄河之水天上来，奔流到海不复回。
2.君不见高堂明镜悲白发，朝如青丝暮成雪。
3.人生得意须尽欢，莫使金樽空对月。
4.天生我材必有用，千金散尽还复来。
5.烹羊宰牛且为乐，会须一饮三百杯。
6.岑夫子，丹丘生，将进酒，杯莫停。
7.与君歌一曲，请君为我倾耳听。
8.钟鼓馔玉不足贵，但愿长醉不愿醒。
```



## <font style="color:rgb(44, 62, 80);">转换流</font>

<font style="color:rgb(44, 62, 80);">转换流可以将一个</font>[<font style="color:rgb(44, 62, 80);">字节流</font>](https://javabetter.cn/io/stream.html)<font style="color:rgb(44, 62, 80);">包装成</font>[<font style="color:rgb(44, 62, 80);">字符流</font>](https://javabetter.cn/io/reader-writer.html)<font style="color:rgb(44, 62, 80);">，或者将一个字符流包装成字节流。这种转换通常用于处理文本数据，如读取文本文件或将数据从网络传输到应用程序。</font>

<font style="color:rgb(44, 62, 80);">转换流主要有两种类型：InputStreamReader 和 OutputStreamWriter。</font>

<font style="color:rgb(44, 62, 80);">InputStreamReader 将一个字节输入流转换为一个字符输入流，而 OutputStreamWriter 将一个字节输出流转换为一个字符输出流。它们使用指定的字符集将字节流和字符流之间进行转换。常用的字符集包括 UTF-8、GBK、ISO-8859-1 等。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438270737-0a11faaf-eb95-411e-be6e-941703fa98bd.png" />


<font style="color:rgb(44, 62, 80);">二哥的 Java 进阶之路：字节流字符流</font>

### <font style="color:rgb(44, 62, 80);">编码和解码</font>

<font style="color:rgb(44, 62, 80);">在计算机中，数据通常以二进制形式存储和传输。</font>

+ <font style="color:rgb(44, 62, 80);">编码就是将原始数据（比如说文本、图像、视频、音频等）转换为二进制形式。</font>
+ <font style="color:rgb(44, 62, 80);">解码就是将二进制数据转换为原始数据，是一个反向的过程。</font>

<font style="color:rgb(44, 62, 80);">常见的编码和解码方式有很多，举几个例子：</font>

+ <font style="color:rgb(44, 62, 80);">ASCII 编码和解码：在计算机中，常常使用 ASCII 码来表示字符，如键盘上的字母、数字和符号等。例如，字母 A 对应的 ASCII 码是 65，字符 + 对应的 ASCII 码是 43。</font>
+ <font style="color:rgb(44, 62, 80);">Unicode 编码和解码：Unicode 是一种字符集，支持多种语言和字符集。在计算机中，Unicode 可以使用 UTF-8、UTF-16 等编码方式将字符转换为二进制数据进行存储和传输。</font>
+ <font style="color:rgb(44, 62, 80);">Base64 编码和解码：Base64 是一种将二进制数据转换为 ASCII 码的编码方式。它将 3 个字节的二进制数据转换为 4 个 ASCII 字符，以便在网络传输中使用。例如，将字符串 "Hello, world!" 进行 Base64 编码后，得到的结果是 "SGVsbG8sIHdvcmxkIQ=="。</font>
+ <font style="color:rgb(44, 62, 80);">图像编码和解码：在图像处理中，常常使用 JPEG、PNG、GIF 等编码方式将图像转换为二进制数据进行存储和传输。在解码时，可以将二进制数据转换为图像，以便显示或处理。</font>
+ <font style="color:rgb(44, 62, 80);">视频编码和解码：在视频处理中，常常使用 H.264、AVC、MPEG-4 等编码方式将视频转换为二进制数据进行存储和传输。在解码时，可以将二进制数据转换为视频，以便播放或处理。</font>

<font style="color:rgb(44, 62, 80);">简单一点说就是：</font>

+ <font style="color:rgb(44, 62, 80);">编码：字符(能看懂的)-->字节(看不懂的)</font>
+ <font style="color:rgb(44, 62, 80);">解码：字节(看不懂的)-->字符(能看懂的)</font>

<font style="color:rgb(44, 62, 80);">我用代码来表示一下：</font>

```plain
String str = "沉默王二";
String charsetName = "UTF-8";

// 编码
byte[] bytes = str.getBytes(Charset.forName(charsetName));
System.out.println("编码: " + bytes);

// 解码
String decodedStr = new String(bytes, Charset.forName(charsetName));
System.out.println("解码: " + decodedStr);
```

<font style="color:rgb(44, 62, 80);">在这个示例中，首先定义了一个字符串变量 str 和一个字符集名称 charsetName。然后，使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Charset.forName()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法获取指定字符集的 Charset 对象。接着，使用字符串的 getBytes() 方法将字符串编码为指定字符集的字节数组。最后，使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">new String()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将字节数组解码为字符串。</font>

<font style="color:rgb(44, 62, 80);">需要注意的是，在编码和解码过程中，要保证使用相同的字符集，以便正确地转换数据。</font>

### <font style="color:rgb(44, 62, 80);">字符集</font>

<font style="color:rgb(44, 62, 80);">Charset：字符集，是一组字符的集合，每个字符都有一个唯一的编码值，也称为码点。</font>

<font style="color:rgb(44, 62, 80);">常见的字符集包括 ASCII、Unicode 和 GBK，而 Unicode 字符集包含了多种编码方式，比如说 UTF-8、UTF-16。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438270861-c6610dc2-49b5-4fb2-a58d-3fc5915c0951.png" />


#### <font style="color:rgb(44, 62, 80);">ASCII 字符集</font>

<font style="color:rgb(44, 62, 80);">ASCII（American Standard Code for Information Interchange，美国信息交换标准代码）字符集是一种最早的字符集，包含 128 个字符，其中包括控制字符、数字、英文字母以及一些标点符号。ASCII 字符集中的每个字符都有一个唯一的 7 位二进制编码（由 0 和 1 组成），可以表示为十进制数或十六进制数。</font>

<font style="color:rgb(44, 62, 80);">ASCII 编码方式是一种固定长度的编码方式，每个字符都使用 7 位二进制编码来表示。ASCII 编码只能表示英文字母、数字和少量的符号，不能表示其他语言的文字和符号，因此在全球范围内的应用受到了很大的限制。</font>

#### <font style="color:rgb(44, 62, 80);">Unicode 字符集</font>

<font style="color:rgb(44, 62, 80);">Unicode 包含了世界上几乎所有的字符，用于表示人类语言、符号和表情等各种信息。Unicode 字符集中的每个字符都有一个唯一的码点（code point），用于表示该字符在字符集中的位置，可以用十六进制数表示。</font>

<font style="color:rgb(44, 62, 80);">为了在计算机中存储和传输 Unicode 字符集中的字符，需要使用一种编码方式。UTF-8、UTF-16 和 UTF-32 都是 Unicode 字符集的编码方式，用于将 Unicode 字符集中的字符转换成字节序列，以便于存储和传输。它们的差别在于使用的字节长度不同。</font>

+ <font style="color:rgb(44, 62, 80);">UTF-8 是一种可变长度的编码方式，对于 ASCII 字符（码点范围为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">0x00~0x7F</font>`<font style="color:rgb(44, 62, 80);">），使用一个字节表示，对于其他 Unicode 字符，使用两个、三个或四个字节表示。UTF-8 编码方式被广泛应用于互联网和计算机领域，因为它可以有效地压缩数据，适用于网络传输和存储。</font>
+ <font style="color:rgb(44, 62, 80);">UTF-16 是一种固定长度的编码方式，对于基本多语言平面（Basic Multilingual Plane，Unicode 字符集中的一个码位范围，包含了世界上大部分常用的字符，总共包含了超过 65,000 个码位）中的字符（码点范围为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">0x0000~0xFFFF</font>`<font style="color:rgb(44, 62, 80);">），使用两个字节表示，对于其他 Unicode 字符，使用四个字节表示。</font>
+ <font style="color:rgb(44, 62, 80);">UTF-32 是一种固定长度的编码方式，对于所有 Unicode 字符，使用四个字节表示。</font>

#### <font style="color:rgb(44, 62, 80);">GBK 字符集</font>

<font style="color:rgb(44, 62, 80);">GBK 包含了 GB2312 字符集中的字符，同时还扩展了许多其他汉字字符和符号，共收录了 21,913 个字符。GBK 采用双字节编码方式，每个汉字占用 2 个字节，其中高字节和低字节都使用了 8 位，因此 GBK 编码共有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">2^16=65536</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">种可能的编码，其中大部分被用于表示汉字字符。</font>

<font style="color:rgb(44, 62, 80);">GBK 编码是一种变长的编码方式，对于 ASCII 字符（码位范围为 0x00 到 0x7F），使用一个字节表示，对于其他字符，使用两个字节表示。GBK 编码中的每个字节都可以采用 0x81 到 0xFE 之间的任意一个值，因此可以表示</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">2^15=32768</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">个字符。为了避免与 ASCII 码冲突，GBK 编码的第一个字节采用了 0x81 到 0xFE 之间除了 0x7F 的所有值，第二个字节采用了 0x40 到 0x7E 和 0x80 到 0xFE 之间的所有值，共 94 个值。</font>

<font style="color:rgb(44, 62, 80);">GB2312 的全名是《信息交换用汉字编码字符集基本集》，也被称为“国标码”。采用了双字节编码方式，每个汉字占用 2 个字节，其中高字节和低字节都使用了 8 位，因此 GB2312 编码共有</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">2^16=65536</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">种可能的编码，其中大部分被用于表示汉字字符。GB2312 编码中的每个字节都可以采用 0xA1 到 0xF7 之间的任意一个值，因此可以表示 126 个字符。</font>

<font style="color:rgb(44, 62, 80);">GB2312 是一个较为简单的字符集，只包含了常用的汉字和符号，因此对于一些较为罕见的汉字和生僻字，GB2312 不能满足需求，现在已经逐渐被 GBK、GB18030 等字符集所取代。</font>

<font style="color:rgb(44, 62, 80);">GB18030 是最新的中文码表。收录汉字 70244 个，采用多字节编码，每个字可以由 1 个、2 个或 4 个字节组成。支持中国国内少数民族的文字，同时支持繁体汉字以及日韩汉字等。</font>

### <font style="color:rgb(44, 62, 80);">乱码</font>

<font style="color:rgb(44, 62, 80);">当使用不同的编码方式读取或者写入文件时，就会出现乱码问题，来看示例。</font>

```plain
String s = "沉默王二！";

try {
    // 将字符串按GBK编码方式保存到文件中
    OutputStreamWriter out = new OutputStreamWriter(
            new FileOutputStream("logs/test_utf8.txt"), "GBK");
    out.write(s);
    out.close();

    FileReader fileReader = new FileReader("logs/test_utf8.txt");
    int read;
    while ((read = fileReader.read()) != -1) {
        System.out.print((char)read);
    }
    fileReader.close();
} catch (IOException e) {
    e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">在上面的示例代码中，首先定义了一个包含中文字符的字符串，然后将该字符串按 GBK 编码方式保存到文件中，接着将文件按默认编码方式（UTF-8）读取，并显示内容。此时就会出现乱码问题，显示为“��Ĭ������”。</font>

<font style="color:rgb(44, 62, 80);">这是因为文件中的 GBK 编码的字符在使用 UTF-8 编码方式解析时无法正确解析，从而导致出现乱码问题。</font>

<font style="color:rgb(44, 62, 80);">那如何才能解决乱码问题呢？</font>

<font style="color:rgb(44, 62, 80);">这就引出我们今天的主角了——转换流。</font>

### <font style="color:rgb(44, 62, 80);">InputStreamReader</font>

`<font style="color:rgb(44, 62, 80);">java.io.InputStreamReader</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是 Reader 类的子类。它的作用是将字节流（InputStream）转换为字符流（Reader），同时支持指定的字符集编码方式，从而实现字符流与字节流之间的转换。</font>

#### <font style="color:rgb(44, 62, 80);">构造方法</font>

+ `<font style="color:rgb(44, 62, 80);">InputStreamReader(InputStream in)</font>`<font style="color:rgb(44, 62, 80);">: 创建一个使用默认字符集的字符流。</font>
+ `<font style="color:rgb(44, 62, 80);">InputStreamReader(InputStream in, String charsetName)</font>`<font style="color:rgb(44, 62, 80);">: 创建一个指定字符集的字符流。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下：</font>

```plain
InputStreamReader isr = new InputStreamReader(new FileInputStream("in.txt"));
InputStreamReader isr2 = new InputStreamReader(new FileInputStream("in.txt") , "GBK");
```

#### <font style="color:rgb(44, 62, 80);">解决编码问题</font>

<font style="color:rgb(44, 62, 80);">下面是一个使用 InputStreamReader 解决乱码问题的示例代码：</font>

```plain
String s = "沉默王二！";

try {
    // 将字符串按GBK编码方式保存到文件中
    OutputStreamWriter outUtf8 = new OutputStreamWriter(
            new FileOutputStream("logs/test_utf8.txt"), "GBK");
    outUtf8.write(s);
    outUtf8.close();

    // 将字节流转换为字符流，使用GBK编码方式
    InputStreamReader isr = new InputStreamReader(new FileInputStream("logs/test_utf8.txt"), "GBK");
    // 读取字符流
    int c;
    while ((c = isr.read()) != -1) {
        System.out.print((char) c);
    }
    isr.close();
} catch (IOException e) {
    e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">由于使用了 InputStreamReader 对字节流进行了编码方式的转换，因此在读取字符流时就可以正确地解析出中文字符，避免了乱码问题。</font>

### <font style="color:rgb(44, 62, 80);">OutputStreamWriter</font>

`<font style="color:rgb(44, 62, 80);">java.io.OutputStreamWriter</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">是 Writer 的子类，字面看容易误以为是转为字符流，其实是将字符流转换为字节流，是字符流到字节流的桥梁。</font>

+ `<font style="color:rgb(44, 62, 80);">OutputStreamWriter(OutputStream in)</font>`<font style="color:rgb(44, 62, 80);">: 创建一个使用默认字符集的字符流。</font>
+ `<font style="color:rgb(44, 62, 80);">OutputStreamWriter(OutputStream in, String charsetName)</font>`<font style="color:rgb(44, 62, 80);">：创建一个指定字符集的字符流。</font>

<font style="color:rgb(44, 62, 80);">代码示例如下：</font>

```plain
OutputStreamWriter isr = new OutputStreamWriter(new FileOutputStream("a.txt"));
OutputStreamWriter isr2 = new OutputStreamWriter(new FileOutputStream("b.txt") , "GBK");
```

<font style="color:rgb(44, 62, 80);">通常为了提高读写效率，我们会在转换流上再加一层</font>[<font style="color:rgb(44, 62, 80);">缓冲流</font>](https://javabetter.cn/io/buffer.html)<font style="color:rgb(44, 62, 80);">，来看代码示例：</font>

```plain
try {
    // 从文件读取字节流，使用UTF-8编码方式
    FileInputStream fis = new FileInputStream("test.txt");
    // 将字节流转换为字符流，使用UTF-8编码方式
    InputStreamReader isr = new InputStreamReader(fis, "UTF-8");
    // 使用缓冲流包装字符流，提高读取效率
    BufferedReader br = new BufferedReader(isr);
    // 创建输出流，使用UTF-8编码方式
    FileOutputStream fos = new FileOutputStream("output.txt");
    // 将输出流包装为转换流，使用UTF-8编码方式
    OutputStreamWriter osw = new OutputStreamWriter(fos, "UTF-8");
    // 使用缓冲流包装转换流，提高写入效率
    BufferedWriter bw = new BufferedWriter(osw);

    // 读取输入文件的每一行，写入到输出文件中
    String line;
    while ((line = br.readLine()) != null) {
        bw.write(line);
        bw.newLine(); // 每行结束后写入一个换行符
    }

    // 关闭流
    br.close();
    bw.close();
} catch (IOException e) {
    e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">在上面的示例代码中，首先使用 FileInputStream 从文件中读取字节流，使用 UTF-8 编码方式进行读取。然后，使用 InputStreamReader 将字节流转换为字符流，使用 UTF-8 编码方式进行转换。接着，使用 BufferedReader 包装字符流，提高读取效率。然后，创建 FileOutputStream 用于输出文件，使用 UTF-8 编码方式进行创建。接着，使用 OutputStreamWriter 将输出流转换为字符流，使用 UTF-8 编码方式进行转换。最后，使用 BufferedWriter 包装转换流，提高写入效率。</font>

### <font style="color:rgb(44, 62, 80);">小结</font>

<font style="color:rgb(44, 62, 80);">InputStreamReader 和 OutputStreamWriter 是将字节流转换为字符流或者将字符流转换为字节流。通常用于解决字节流和字符流之间的转换问题，可以将字节流以指定的字符集编码方式转换为字符流，或者将字符流以指定的字符集编码方式转换为字节流。</font>

<font style="color:rgb(44, 62, 80);">InputStreamReader 类的常用方法包括：</font>

+ `<font style="color:rgb(44, 62, 80);">read()</font>`<font style="color:rgb(44, 62, 80);">：从输入流中读取一个字符的数据。</font>
+ `<font style="color:rgb(44, 62, 80);">read(char[] cbuf, int off, int len)</font>`<font style="color:rgb(44, 62, 80);">：从输入流中读取 len 个字符的数据到指定的字符数组 cbuf 中，从 off 位置开始存放。</font>
+ `<font style="color:rgb(44, 62, 80);">ready()</font>`<font style="color:rgb(44, 62, 80);">：返回此流是否已准备好读取。</font>
+ `<font style="color:rgb(44, 62, 80);">close()</font>`<font style="color:rgb(44, 62, 80);">：关闭输入流。</font>

<font style="color:rgb(44, 62, 80);">OutputStreamWriter 类的常用方法包括：</font>

+ `<font style="color:rgb(44, 62, 80);">write(int c)</font>`<font style="color:rgb(44, 62, 80);">：向输出流中写入一个字符的数据。</font>
+ `<font style="color:rgb(44, 62, 80);">write(char[] cbuf, int off, int len)</font>`<font style="color:rgb(44, 62, 80);">：向输出流中写入指定字符数组 cbuf 中的 len 个字符，从 off 位置开始。</font>
+ `<font style="color:rgb(44, 62, 80);">flush()</font>`<font style="color:rgb(44, 62, 80);">：将缓冲区的数据写入输出流中。</font>
+ `<font style="color:rgb(44, 62, 80);">close()</font>`<font style="color:rgb(44, 62, 80);">：关闭输出流。</font>

<font style="color:rgb(44, 62, 80);">在使用转换流时，需要指定正确的字符集编码方式，否则可能会导致数据读取或写入出现乱码。</font>



## <font style="color:rgb(44, 62, 80);">序列流（序列化和反序列化）</font>

<font style="color:rgb(44, 62, 80);">Java 的序列流（ObjectInputStream 和 ObjectOutputStream）是一种可以将 Java 对象序列化和反序列化的流。</font>

<font style="color:rgb(44, 62, 80);">序列化是指将一个对象转换为一个字节序列（包含</font>`<font style="color:rgb(44, 62, 80);">对象的数据</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">对象的类型</font>`<font style="color:rgb(44, 62, 80);">和</font>`<font style="color:rgb(44, 62, 80);">对象中存储的属性</font>`<font style="color:rgb(44, 62, 80);">等信息），以便在网络上传输或保存到文件中，或者在程序之间传递。在 Java 中，序列化通过实现 java.io.Serializable 接口来实现，只有实现了</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">Serializable 接口</font>](https://javabetter.cn/io/Serializbale.html)<font style="color:rgb(44, 62, 80);">的对象才能被序列化。</font>

<font style="color:rgb(44, 62, 80);">反序列化是指将一个字节序列转换为一个对象，以便在程序中使用。</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438286421-0996a490-91e3-42b0-be5f-a64eb06bf80f.png" />


<font style="color:rgb(44, 62, 80);">二哥的 Java 进阶之路：序列流</font>

### <font style="color:rgb(44, 62, 80);">ObjectOutputStream</font>

`<font style="color:rgb(44, 62, 80);">java.io.ObjectOutputStream</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">继承自 OutputStream 类，因此可以将序列化后的字节序列写入到文件、网络等输出流中。</font>

<font style="color:rgb(44, 62, 80);">来看 ObjectOutputStream 的构造方法：</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectOutputStream(OutputStream out)</font>`

<font style="color:rgb(44, 62, 80);">该构造方法接收一个 OutputStream 对象作为参数，用于将序列化后的字节序列输出到指定的输出流中。例如：</font>

```plain
FileOutputStream fos = new FileOutputStream("file.txt");
ObjectOutputStream oos = new ObjectOutputStream(fos);
```

<font style="color:rgb(44, 62, 80);">一个对象要想序列化，必须满足两个条件:</font>

+ <font style="color:rgb(44, 62, 80);">该类必须实现</font>[<font style="color:rgb(44, 62, 80);">java.io.Serializable接口</font>](https://javabetter.cn/io/Serializbale.html)<font style="color:rgb(44, 62, 80);">，否则会抛出</font>`<font style="color:rgb(44, 62, 80);">NotSerializableException</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">。</font>
+ <font style="color:rgb(44, 62, 80);">该类的所有字段都必须是可序列化的。如果一个字段不需要序列化，则需要使用</font>[<font style="color:rgb(44, 62, 80);">transient关键字</font>](https://javabetter.cn/io/transient.html)<font style="color:rgb(44, 62, 80);">进行修饰。</font>

<font style="color:rgb(44, 62, 80);">使用示例如下：</font>

```plain
public class Employee implements Serializable {
    public String name;
    public String address;
    public transient int age; // transient瞬态修饰成员,不会被序列化
}
```

<font style="color:rgb(44, 62, 80);">接下来，来聊聊</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">writeObject (Object obj)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法，该方法是 ObjectOutputStream 类中用于将对象序列化成字节序列并输出到输出流中的方法，可以处理对象之间的引用关系、继承关系、静态字段和 transient 字段。</font>

```plain
public class ObjectOutputStreamDemo {
    public static void main(String[] args) {
        Person person = new Person("沉默王二", 20);
        try {
            FileOutputStream fos = new FileOutputStream("logs/person.dat");
            ObjectOutputStream oos = new ObjectOutputStream(fos);
            oos.writeObject(person);
            oos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
class Person implements Serializable {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
```

<font style="color:rgb(44, 62, 80);">上面的代码中，首先创建了一个 Person 对象，然后使用 FileOutputStream 和 ObjectOutputStream 将 Person 对象序列化并输出到 person.dat 文件中。在 Person 类中，实现了 Serializable 接口，表示该类可以进行对象序列化。</font>

### <font style="color:rgb(44, 62, 80);">ObjectInputStream</font>

<font style="color:rgb(44, 62, 80);">ObjectInputStream 可以读取 ObjectOutputStream 写入的字节流，并将其反序列化为相应的对象（包含</font>`<font style="color:rgb(44, 62, 80);">对象的数据</font>`<font style="color:rgb(44, 62, 80);">、</font>`<font style="color:rgb(44, 62, 80);">对象的类型</font>`<font style="color:rgb(44, 62, 80);">和</font>`<font style="color:rgb(44, 62, 80);">对象中存储的属性</font>`<font style="color:rgb(44, 62, 80);">等信息）。</font>

<font style="color:rgb(44, 62, 80);">说简单点就是，序列化之前是什么样子，反序列化后就是什么样子。</font>

<font style="color:rgb(44, 62, 80);">来看一下构造方法：</font>`<font style="color:rgb(44, 62, 80);">ObjectInputStream(InputStream in)</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">： 创建一个指定 InputStream 的 ObjectInputStream。</font>

<font style="color:rgb(44, 62, 80);">其中，ObjectInputStream 的 readObject 方法用来读取指定文件中的对象，示例如下：</font>

```plain
String filename = "logs/person.dat"; // 待反序列化的文件名
try (FileInputStream fileIn = new FileInputStream(filename);
     ObjectInputStream in = new ObjectInputStream(fileIn)) {
     // 从指定的文件输入流中读取对象并反序列化
     Object obj = in.readObject();
     // 将反序列化后的对象强制转换为指定类型
     Person p = (Person) obj;
     // 打印反序列化后的对象信息
     System.out.println("Deserialized Object: " + p);
} catch (IOException | ClassNotFoundException e) {
     e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">我们首先指定了待反序列化的文件名（前面通过 ObjectOutputStream 序列化后的文件），然后创建了一个 FileInputStream 对象和一个 ObjectInputStream 对象。接着我们调用 ObjectInputStream 的 readObject 方法来读取指定文件中的对象，并将其强制转换为 Person 类型。最后我们打印了反序列化后的对象信息。</font>

### <font style="color:rgb(44, 62, 80);">Kryo</font>

<font style="color:rgb(44, 62, 80);">实际开发中，很少使用 JDK 自带的序列化和反序列化，这是因为：</font>

+ <font style="color:rgb(44, 62, 80);">可移植性差：Java 特有的，无法跨语言进行序列化和反序列化。</font>
+ <font style="color:rgb(44, 62, 80);">性能差：序列化后的字节体积大，增加了传输/保存成本。</font>
+ <font style="color:rgb(44, 62, 80);">安全问题：攻击者可以通过构造恶意数据来实现远程代码执行，从而对系统造成严重的安全威胁。相关阅读：</font>[<font style="color:rgb(44, 62, 80);">Java 反序列化漏洞之殇</font>](https://cryin.github.io/blog/secure-development-java-deserialization-vulnerability/)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">Kryo 是一个优秀的 Java 序列化和反序列化库，具有高性能、高效率和易于使用和扩展等特点，有效地解决了 JDK 自带的序列化机制的痛点。</font>

<font style="color:rgb(102, 102, 102);">GitHub 地址：</font>[<font style="color:rgb(102, 102, 102);">https://github.com/EsotericSoftware/kryo</font>](https://github.com/EsotericSoftware/kryo)

<font style="color:rgb(44, 62, 80);">使用示例：</font>

<font style="color:rgb(44, 62, 80);">第一步，在 pom.xml 中引入依赖。</font>

```plain
<!-- 引入 Kryo 序列化工具 -->
<dependency>
     <groupId>com.esotericsoftware</groupId>
     <artifactId>kryo</artifactId>
     <version>5.4.0</version>
</dependency>
```

<font style="color:rgb(44, 62, 80);">第二步，创建一个 Kryo 对象，并使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">register()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将对象进行注册。然后，使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">writeObject()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将 Java 对象序列化为二进制流，再使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">readObject()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将二进制流反序列化为 Java 对象。最后，输出反序列化后的 Java 对象。</font>

```plain
public class KryoDemo {
    public static void main(String[] args) throws FileNotFoundException {
        Kryo kryo = new Kryo();
        kryo.register(KryoParam.class);

        KryoParam object = new KryoParam("沉默王二", 123);

        Output output = new Output(new FileOutputStream("logs/kryo.bin"));
        kryo.writeObject(output, object);
        output.close();

        Input input = new Input(new FileInputStream("logs/kryo.bin"));
        KryoParam object2 = kryo.readObject(input, KryoParam.class);
        System.out.println(object2);
        input.close();
    }
}

class KryoParam {
    private String name;
    private int age;

    public KryoParam() {
    }

    public KryoParam(String name, int age) {
        this.name = name;
        this.age = age;
    }

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

    @Override
    public String toString() {
        return "KryoParam{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

## <font style="color:rgb(44, 62, 80);">序列接口 Serializable</font>

<font style="color:rgb(44, 62, 80);">对于 Java 的序列化，我之前一直停留在最浅层次的认知上——把那个要</font>[<font style="color:rgb(44, 62, 80);">序列化</font>](https://javabetter.cn/io/serialize.html)<font style="color:rgb(44, 62, 80);">的类实现</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializbale</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口就可以了嘛。</font>

<font style="color:rgb(44, 62, 80);">我似乎不愿意做更深入的研究，因为会用就行了嘛。</font>

<font style="color:rgb(44, 62, 80);">但随着时间的推移，见到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializbale</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的次数越来越多，我便对它产生了浓厚的兴趣。是时候花点时间研究研究了。</font>

### <font style="color:rgb(44, 62, 80);">先来点理论</font>

<font style="color:rgb(44, 62, 80);">Java 序列化是 JDK 1.1 时引入的一组开创性的特性，用于将 Java 对象转换为字节数组，便于存储或传输。此后，仍然可以将字节数组转换回 Java 对象原有的状态。</font>

<font style="color:rgb(44, 62, 80);">序列化的思想是“冻结”对象状态，然后写到磁盘或者在网络中传输；</font>[<font style="color:rgb(44, 62, 80);">反序列化</font>](https://javabetter.cn/io/serialize.html)<font style="color:rgb(44, 62, 80);">的思想是“解冻”对象状态，重新获得可用的 Java 对象。</font>

<font style="color:rgb(44, 62, 80);">序列化有一条规则，就是要序列化的对象必须实现</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializbale</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口，否则就会报 NotSerializableException 异常。</font>

<font style="color:rgb(44, 62, 80);">好，来看看</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializbale</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口的定义吧：</font>

```plain
public interface Serializable {
}
```

<font style="color:rgb(44, 62, 80);">没别的了！</font>

<font style="color:rgb(44, 62, 80);">明明就一个空的接口嘛，竟然能够保证实现了它的“类对象”被序列化和反序列化？</font>

### <font style="color:rgb(44, 62, 80);">再来点实战</font>

<font style="color:rgb(44, 62, 80);">在回答上述问题之前，我们先来创建一个类（只有两个字段，和对应的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">getter/setter</font>`<font style="color:rgb(44, 62, 80);">），用于序列化和反序列化。</font>

```plain
class Wanger {
    private String name;
    private int age;

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
}
```

<font style="color:rgb(44, 62, 80);">再来创建一个测试类，通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectOutputStream</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">将“18 岁的王二”写入到文件当中，实际上就是一种序列化的过程；再通过</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectInputStream</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">将“18 岁的王二”从文件中读出来，实际上就是一种反序列化的过程。（前面我们学习</font>[<font style="color:rgb(44, 62, 80);">序列流</font>](https://javabetter.cn/io/serialize.html)<font style="color:rgb(44, 62, 80);">的时候也讲过）</font>

```plain
// 初始化
Wanger wanger = new Wanger();
wanger.setName("王二");
wanger.setAge(18);
System.out.println(wanger);

// 把对象写到文件中
try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("chenmo"));){
    oos.writeObject(wanger);
} catch (IOException e) {
    e.printStackTrace();
}

// 从文件中读出对象
try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(new File("chenmo")));){
    Wanger wanger1 = (Wanger) ois.readObject();
    System.out.println(wanger1);
} catch (IOException | ClassNotFoundException e) {
    e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">不过，由于</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">没有实现</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializbale</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口，所以在运行测试类的时候会抛出异常，堆栈信息如下：</font>

```plain
java.io.NotSerializableException: com.cmower.java_demo.xuliehua.Wanger
	at java.io.ObjectOutputStream.writeObject0(ObjectOutputStream.java:1184)
	at java.io.ObjectOutputStream.writeObject(ObjectOutputStream.java:348)
	at com.cmower.java_demo.xuliehua.Test.main(Test.java:21)
```

<font style="color:rgb(44, 62, 80);">顺着堆栈信息，我们来看一下</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectOutputStream</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">writeObject0()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。其部分源码如下：</font>

```plain
// 判断对象是否为字符串类型，如果是，则调用 writeString 方法进行序列化
if (obj instanceof String) {
    writeString((String) obj, unshared);
}
// 判断对象是否为数组类型，如果是，则调用 writeArray 方法进行序列化
else if (cl.isArray()) {
    writeArray(obj, desc, unshared);
}
// 判断对象是否为枚举类型，如果是，则调用 writeEnum 方法进行序列化
else if (obj instanceof Enum) {
    writeEnum((Enum<?>) obj, desc, unshared);
}
// 判断对象是否为可序列化类型，如果是，则调用 writeOrdinaryObject 方法进行序列化
else if (obj instanceof Serializable) {
    writeOrdinaryObject(obj, desc, unshared);
}
// 如果对象不能被序列化，则抛出 NotSerializableException 异常
else {
if (extendedDebugInfo) {
    throw new NotSerializableException(
        cl.getName() + "\n" + debugInfoStack.toString());
} else {
    throw new NotSerializableException(cl.getName());
}
}
```

<font style="color:rgb(44, 62, 80);">也就是说，</font>`<font style="color:rgb(44, 62, 80);">ObjectOutputStream</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">在序列化的时候，会判断被序列化的对象是哪一种类型，字符串？数组？枚举？还是</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializable</font>`<font style="color:rgb(44, 62, 80);">，如果全都不是的话，抛出</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">NotSerializableException</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">假如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">实现了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口，就可以序列化和反序列化了。</font>

```plain
class Wanger implements Serializable{
    private static final long serialVersionUID = -2095916884810199532L;
    
    private String name;
    private int age;
}
```

<font style="color:rgb(44, 62, 80);">具体怎么序列化呢？</font>

<font style="color:rgb(44, 62, 80);">以</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectOutputStream</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为例吧，它在序列化的时候会依次调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">writeObject()</font>`<font style="color:rgb(44, 62, 80);">→</font>`<font style="color:rgb(44, 62, 80);">writeObject0()</font>`<font style="color:rgb(44, 62, 80);">→</font>`<font style="color:rgb(44, 62, 80);">writeOrdinaryObject()</font>`<font style="color:rgb(44, 62, 80);">→</font>`<font style="color:rgb(44, 62, 80);">writeSerialData()</font>`<font style="color:rgb(44, 62, 80);">→</font>`<font style="color:rgb(44, 62, 80);">invokeWriteObject()</font>`<font style="color:rgb(44, 62, 80);">→</font>`<font style="color:rgb(44, 62, 80);">defaultWriteFields()</font>`<font style="color:rgb(44, 62, 80);">。</font>

```plain
private void defaultWriteFields(Object obj, ObjectStreamClass desc) throws IOException {
    // 获取对象的类，并检查是否可以进行默认的序列化
    Class<?> cl = desc.forClass();
    desc.checkDefaultSerialize();

    // 获取对象的基本类型字段的数量，以及这些字段的值
    int primDataSize = desc.getPrimDataSize();
    desc.getPrimFieldValues(obj, primVals);
    // 将基本类型字段的值写入输出流
    bout.write(primVals, 0, primDataSize, false);

    // 获取对象的非基本类型字段的值
    ObjectStreamField[] fields = desc.getFields(false);
    Object[] objVals = new Object[desc.getNumObjFields()];
    int numPrimFields = fields.length - objVals.length;
    desc.getObjFieldValues(obj, objVals);
    // 循环写入对象的非基本类型字段的值
    for (int i = 0; i < objVals.length; i++) {
        // 调用 writeObject0 方法将对象的非基本类型字段序列化写入输出流
        try {
            writeObject0(objVals[i], fields[numPrimFields + i].isUnshared());
        }
        // 如果在写入过程中出现异常，则将异常包装成 IOException 抛出
        catch (IOException ex) {
            if (abortIOException == null) {
                abortIOException = ex;
            }
        }
    }
}
```

<font style="color:rgb(44, 62, 80);">那怎么反序列化呢？</font>

<font style="color:rgb(44, 62, 80);">以</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectInputStream</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">为例，它在反序列化的时候会依次调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">readObject()</font>`<font style="color:rgb(44, 62, 80);">→</font>`<font style="color:rgb(44, 62, 80);">readObject0()</font>`<font style="color:rgb(44, 62, 80);">→</font>`<font style="color:rgb(44, 62, 80);">readOrdinaryObject()</font>`<font style="color:rgb(44, 62, 80);">→</font>`<font style="color:rgb(44, 62, 80);">readSerialData()</font>`<font style="color:rgb(44, 62, 80);">→</font>`<font style="color:rgb(44, 62, 80);">defaultReadFields()</font>`<font style="color:rgb(44, 62, 80);">。</font>

```plain
private void defaultReadFields(Object obj, ObjectStreamClass desc) throws IOException {
    // 获取对象的类，并检查对象是否属于该类
    Class<?> cl = desc.forClass();
    if (cl != null && obj != null && !cl.isInstance(obj)) {
        throw new ClassCastException();
    }

    // 获取对象的基本类型字段的数量和值
    int primDataSize = desc.getPrimDataSize();
    if (primVals == null || primVals.length < primDataSize) {
        primVals = new byte[primDataSize];
    }
    // 从输入流中读取基本类型字段的值，并存储在 primVals 数组中
    bin.readFully(primVals, 0, primDataSize, false);
    if (obj != null) {
        // 将 primVals 数组中的基本类型字段的值设置到对象的相应字段中
        desc.setPrimFieldValues(obj, primVals);
    }

    // 获取对象的非基本类型字段的数量和值
    int objHandle = passHandle;
    ObjectStreamField[] fields = desc.getFields(false);
    Object[] objVals = new Object[desc.getNumObjFields()];
    int numPrimFields = fields.length - objVals.length;
    // 循环读取对象的非基本类型字段的值
    for (int i = 0; i < objVals.length; i++) {
        // 调用 readObject0 方法读取对象的非基本类型字段的值
        ObjectStreamField f = fields[numPrimFields + i];
        objVals[i] = readObject0(Object.class, f.isUnshared());
        // 如果该字段是一个引用字段，则将其标记为依赖该对象
        if (f.getField() != null) {
            handles.markDependency(objHandle, passHandle);
        }
    }
    if (obj != null) {
        // 将 objVals 数组中的非基本类型字段的值设置到对象的相应字段中
        desc.setObjFieldValues(obj, objVals);
    }
    passHandle = objHandle;
}
```

<font style="color:rgb(44, 62, 80);">我想看到这，你应该会恍然大悟的“哦”一声了。</font>`<font style="color:rgb(44, 62, 80);">Serializable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口之所以定义为空，是因为它只起到了一个标识的作用，告诉程序实现了它的对象是可以被序列化的，但真正序列化和反序列化的操作并不需要它来完成。</font>

### <font style="color:rgb(44, 62, 80);">再来点注意事项</font>

<font style="color:rgb(44, 62, 80);">开门见山的说吧，</font>[<font style="color:rgb(44, 62, 80);">static</font>](https://javabetter.cn/oo/static.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">transient</font>](https://javabetter.cn/io/transient.html)<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">修饰的字段是不会被序列化的。</font>

<font style="color:rgb(44, 62, 80);">为什么呢？我们先来证明，再来解释原因。</font>

<font style="color:rgb(44, 62, 80);">首先，在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类中增加两个字段。</font>

```plain
class Wanger implements Serializable {
    private static final long serialVersionUID = -2095916884810199532L;

    private String name;
    private int age;

    public static String pre = "沉默";
    transient String meizi = "王三";

    @Override
    public String toString() {
        return "Wanger{" + "name=" + name + ",age=" + age + ",pre=" + pre + ",meizi=" + meizi + "}";
    }
}
```

<font style="color:rgb(44, 62, 80);">其次，在测试类中打印序列化前和反序列化后的对象，并在序列化后和反序列化前改变</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">static</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">字段的值。具体代码如下：</font>

```plain
// 初始化
Wanger wanger = new Wanger();
wanger.setName("王二");
wanger.setAge(18);
System.out.println(wanger);

// 把对象写到文件中
try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("chenmo"));){
        oos.writeObject(wanger);
    } catch (IOException e) {
        e.printStackTrace();
    }
   
    // 改变 static 字段的值
Wanger.pre ="不沉默";

// 从文件中读出对象
try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(new File("chenmo")));){
    Wanger wanger1 = (Wanger) ois.readObject();
    System.out.println(wanger1);
} catch (IOException | ClassNotFoundException e) {
    e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">输出结果：</font>

```plain
Wanger{name=王二,age=18,pre=沉默,meizi=王三}
Wanger{name=王二,age=18,pre=不沉默,meizi=null}
```

<font style="color:rgb(44, 62, 80);">从结果的对比当中，我们可以发现：</font>

<font style="color:rgb(44, 62, 80);">1）序列化前，</font>`<font style="color:rgb(44, 62, 80);">pre</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的值为“沉默”，序列化后，</font>`<font style="color:rgb(44, 62, 80);">pre</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的值修改为“不沉默”，反序列化后，</font>`<font style="color:rgb(44, 62, 80);">pre</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的值为“不沉默”，而不是序列化前的状态“沉默”。</font>

<font style="color:rgb(44, 62, 80);">为什么呢？因为序列化保存的是对象的状态，而</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">static</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">修饰的字段属于类的状态，因此可以证明序列化并不保存</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">static</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">修饰的字段。</font>

<font style="color:rgb(44, 62, 80);">2）序列化前，</font>`<font style="color:rgb(44, 62, 80);">meizi</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的值为“王三”，反序列化后，</font>`<font style="color:rgb(44, 62, 80);">meizi</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的值为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">null</font>`<font style="color:rgb(44, 62, 80);">，而不是序列化前的状态“王三”。</font>

<font style="color:rgb(44, 62, 80);">为什么呢？</font>`<font style="color:rgb(44, 62, 80);">transient</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的中文字义为“临时的”（论英语的重要性），它可以阻止字段被序列化到文件中，在被反序列化后，</font>`<font style="color:rgb(44, 62, 80);">transient</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">字段的值被设为初始值，比如</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">int</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">型的初始值为 0，对象型的初始值为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">null</font>`<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">如果想要深究源码的话，你可以在</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectStreamClass</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">中发现下面这样的代码：</font>

```plain
private static ObjectStreamField[] getDefaultSerialFields(Class<?> cl) {
    // 获取该类中声明的所有字段
    Field[] clFields = cl.getDeclaredFields();
    ArrayList<ObjectStreamField> list = new ArrayList<>();
    int mask = Modifier.STATIC | Modifier.TRANSIENT;

    // 遍历所有字段，将非 static 和 transient 的字段添加到 list 中
    for (int i = 0; i < clFields.length; i++) {
        Field field = clFields[i];
        int mods = field.getModifiers();
        if ((mods & mask) == 0) {
            // 根据字段名、字段类型和字段是否可序列化创建一个 ObjectStreamField 对象
            ObjectStreamField osf = new ObjectStreamField(field.getName(), field.getType(), !Serializable.class.isAssignableFrom(cl));
            list.add(osf);
        }
    }

    int size = list.size();
    // 如果 list 为空，则返回一个空的 ObjectStreamField 数组，否则将 list 转换为 ObjectStreamField 数组并返回
    return (size == 0) ? NO_FIELDS :
        list.toArray(new ObjectStreamField[size]);
}
```

<font style="color:rgb(44, 62, 80);">看到</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Modifier.STATIC | Modifier.TRANSIENT</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">了吧，这两个修饰符标记的字段就没有被放入到序列化的字段中，明白了吧？</font>

### <font style="color:rgb(44, 62, 80);">再来点干货</font>

<font style="color:rgb(44, 62, 80);">除了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">之外，Java 还提供了一个序列化接口</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Externalizable</font>`<font style="color:rgb(44, 62, 80);">（念起来有点拗口）。</font>

<font style="color:rgb(44, 62, 80);">两个接口有什么不一样的吗？试一试就知道了。</font>

<font style="color:rgb(44, 62, 80);">首先，把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类实现的接口</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">替换为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Externalizable</font>`<font style="color:rgb(44, 62, 80);">。</font>

```plain
class Wanger implements Externalizable {
	private String name;
	private int age;

	public Wanger() {

	}

	public String getName() {
		return name;
	}

	
	@Override
	public String toString() {
		return "Wanger{" + "name=" + name + ",age=" + age + "}";
	}

	@Override
	public void writeExternal(ObjectOutput out) throws IOException {

	}

	@Override
	public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {

	}

}
```

<font style="color:rgb(44, 62, 80);">实现</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Externalizable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类和实现</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类有一些不同：</font>

<font style="color:rgb(44, 62, 80);">1）新增了一个无参的构造方法。</font>

<font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Externalizable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">进行反序列化的时候，会调用被序列化类的无参构造方法去创建一个新的对象，然后再将被保存对象的字段值复制过去。否则的话，会抛出以下异常：</font>

```plain
java.io.InvalidClassException: com.cmower.java_demo.xuliehua1.Wanger; no valid constructor
	at java.io.ObjectStreamClass$ExceptionInfo.newInvalidClassException(ObjectStreamClass.java:150)
	at java.io.ObjectStreamClass.checkDeserialize(ObjectStreamClass.java:790)
	at java.io.ObjectInputStream.readOrdinaryObject(ObjectInputStream.java:1782)
	at java.io.ObjectInputStream.readObject0(ObjectInputStream.java:1353)
	at java.io.ObjectInputStream.readObject(ObjectInputStream.java:373)
	at com.cmower.java_demo.xuliehua1.Test.main(Test.java:27)
```

<font style="color:rgb(44, 62, 80);">2）新增了两个方法</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">writeExternal()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">readExternal()</font>`<font style="color:rgb(44, 62, 80);">，实现</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Externalizable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口所必须的。</font>

<font style="color:rgb(44, 62, 80);">然后，我们再在测试类中打印序列化前和反序列化后的对象。</font>

```plain
// 初始化
Wanger wanger = new Wanger();
wanger.setName("王二");
wanger.setAge(18);
System.out.println(wanger);

// 把对象写到文件中
try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("chenmo"));) {
	oos.writeObject(wanger);
} catch (IOException e) {
	e.printStackTrace();
}

// 从文件中读出对象
try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(new File("chenmo")));) {
	Wanger wanger1 = (Wanger) ois.readObject();
	System.out.println(wanger1);
} catch (IOException | ClassNotFoundException e) {
	e.printStackTrace();
}
// Wanger{name=王二,age=18}
// Wanger{name=null,age=0}
```

<font style="color:rgb(44, 62, 80);">从输出的结果看，反序列化后得到的对象字段都变成了默认值，也就是说，序列化之前的对象状态没有被“冻结”下来。</font>

<font style="color:rgb(44, 62, 80);">为什么呢？因为我们没有为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类重写具体的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">writeExternal()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">和</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">readExternal()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法。那该怎么重写呢？</font>

```plain
@Override
public void writeExternal(ObjectOutput out) throws IOException {
	out.writeObject(name);
	out.writeInt(age);
}

@Override
public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
	name = (String) in.readObject();
	age = in.readInt();
}
```

<font style="color:rgb(44, 62, 80);">1）调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectOutput</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">writeObject()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将字符串类型的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">name</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">写入到输出流中；</font>

<font style="color:rgb(44, 62, 80);">2）调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectOutput</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">writeInt()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将整型的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">age</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">写入到输出流中；</font>

<font style="color:rgb(44, 62, 80);">3）调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectInput</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">readObject()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将字符串类型的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">name</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">读入到输入流中；</font>

<font style="color:rgb(44, 62, 80);">4）调用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">ObjectInput</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">readInt()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">方法将字符串类型的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">age</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">读入到输入流中；</font>

<font style="color:rgb(44, 62, 80);">再运行一次测试了类，你会发现对象可以正常地序列化和反序列化了。</font>

<font style="color:rgb(102, 102, 102);">序列化前：Wanger{name=王二,age=18} 序列化后：Wanger</font>

<font style="color:rgb(44, 62, 80);">总结一下：</font>

<font style="color:rgb(44, 62, 80);">Externalizable 和 Serializable 都是用于实现 Java 对象的序列化和反序列化的接口，但是它们有以下区别：</font>

<font style="color:rgb(44, 62, 80);">①、Serializable 是 Java 标准库提供的接口，而 Externalizable 是 Serializable 的子接口；</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438303746-088a167c-19a9-460e-a0fc-af88d89d6463.png" />


<font style="color:rgb(44, 62, 80);">②、Serializable 接口不需要实现任何方法，只需要将需要序列化的类标记为 Serializable 即可，而 Externalizable 接口需要实现 writeExternal 和 readExternal 两个方法；</font>

<font style="color:rgb(44, 62, 80);">③、Externalizable 接口提供了更高的序列化控制能力，可以在序列化和反序列化过程中对对象进行自定义的处理，如对一些敏感信息进行加密和解密。</font>

### <font style="color:rgb(44, 62, 80);">再来点甜点</font>

<font style="color:rgb(44, 62, 80);">让我先问问你吧，你知道</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">private static final long serialVersionUID = -2095916884810199532L;</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">这段代码的作用吗？</font>

<font style="color:rgb(44, 62, 80);">嗯......</font>

`<font style="color:rgb(44, 62, 80);">serialVersionUID</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">被称为序列化 ID，它是决定 Java 对象能否反序列化成功的重要因子。在反序列化时，Java 虚拟机会把字节流中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">serialVersionUID</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">与被序列化类中的</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">serialVersionUID</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">进行比较，如果相同则可以进行反序列化，否则就会抛出序列化版本不一致的异常。</font>

<font style="color:rgb(44, 62, 80);">当一个类实现了</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Serializable</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">接口后，IDE 就会提醒该类最好产生一个序列化 ID，就像下面这样：</font>


<img referrerpolicy="no-referrer" src="https://cdn.nlark.com/yuque/0/2024/png/35376129/1727438303638-8a09bc87-9251-4f27-849f-56071eb7cb4a.png" />


<font style="color:rgb(44, 62, 80);">1）添加一个默认版本的序列化 ID：</font>

```plain
private static final long serialVersionUID = 1L。
```

<font style="color:rgb(44, 62, 80);">2）添加一个随机生成的不重复的序列化 ID。</font>

```plain
private static final long serialVersionUID = -2095916884810199532L;
```

<font style="color:rgb(44, 62, 80);">3）添加</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">@SuppressWarnings</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">注解。</font>

```plain
@SuppressWarnings("serial")
```

<font style="color:rgb(44, 62, 80);">怎么选择呢？</font>

<font style="color:rgb(44, 62, 80);">首先，我们采用第二种办法，在被序列化类中添加一个随机生成的序列化 ID。</font>

```plain
class Wanger implements Serializable {
	private static final long serialVersionUID = -2095916884810199532L;
	
	private String name;
	private int age;

	// 其他代码忽略
}
```

<font style="color:rgb(44, 62, 80);">然后，序列化一个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">对象到文件中。</font>

```plain
// 初始化
Wanger wanger = new Wanger();
wanger.setName("王二");
wanger.setAge(18);
System.out.println(wanger);

// 把对象写到文件中
try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("chenmo"));) {
	oos.writeObject(wanger);
} catch (IOException e) {
	e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">这时候，我们悄悄地把</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类的序列化 ID 偷梁换柱一下，嘿嘿。</font>

```plain
// private static final long serialVersionUID = -2095916884810199532L;
private static final long serialVersionUID = -2095916884810199533L;
```

<font style="color:rgb(44, 62, 80);">好了，准备反序列化吧。</font>

```plain
try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(new File("chenmo")));) {
	Wanger wanger = (Wanger) ois.readObject();
	System.out.println(wanger);
} catch (IOException | ClassNotFoundException e) {
	e.printStackTrace();
}
```

<font style="color:rgb(44, 62, 80);">哎呀，出错了。</font>

```plain
java.io.InvalidClassException:  local class incompatible: stream classdesc 
serialVersionUID = -2095916884810199532,
local class serialVersionUID = -2095916884810199533
	at java.io.ObjectInputStream.readClassDesc(ObjectInputStream.java:1521)
	at com.cmower.java_demo.xuliehua1.Test.main(Test.java:27)
```

<font style="color:rgb(44, 62, 80);">异常堆栈信息里面告诉我们，从持久化文件里面读取到的序列化 ID 和本地的序列化 ID 不一致，无法反序列化。</font>

<font style="color:rgb(44, 62, 80);">那假如我们采用第三种方法，为</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">Wanger</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">类添加个</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">@SuppressWarnings("serial")</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">注解呢？</font>

```plain
@SuppressWarnings("serial")
class Wanger implements Serializable {
// 省略其他代码
}
```

<font style="color:rgb(44, 62, 80);">好了，再来一次反序列化吧。可惜依然报错。</font>

```plain
java.io.InvalidClassException:  local class incompatible: stream classdesc 
serialVersionUID = -2095916884810199532, 
local class serialVersionUID = -3818877437117647968
	at java.io.ObjectInputStream.readClassDesc(ObjectInputStream.java:1521)
	at com.cmower.java_demo.xuliehua1.Test.main(Test.java:27)
```

<font style="color:rgb(44, 62, 80);">异常堆栈信息里面告诉我们，本地的序列化 ID 为 -3818877437117647968，和持久化文件里面读取到的序列化 ID 仍然不一致，无法反序列化。这说明什么呢？使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">@SuppressWarnings("serial")</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">注解时，该注解会为被序列化类自动生成一个随机的序列化 ID。</font>

<font style="color:rgb(44, 62, 80);">由此可以证明，</font>**<font style="color:rgb(44, 62, 80);">Java 虚拟机是否允许反序列化，不仅取决于类路径和功能代码是否一致，还有一个非常重要的因素就是序列化 ID 是否一致</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">也就是说，如果没有特殊需求，采用默认的序列化 ID（1L）就可以，这样可以确保代码一致时反序列化成功。</font>

```plain
class Wanger implements Serializable {
	private static final long serialVersionUID = 1L;
// 省略其他代码
}
```

## <font style="color:rgb(44, 62, 80);">transient 关键字</font>

<font style="color:rgb(44, 62, 80);">害，小二最熟的是 Java，但很多 Java 基础知识都不知道，比如 transient 关键字以前就没用到过，所以不知道它的作用是什么，今天去招银面试的时候，面试官问到了这个：说说 Java 的 transient 关键字吧，结果小二直接懵逼了。</font>

<font style="color:rgb(44, 62, 80);">下面是他自己面试凉了以后回去做的总结，分享出来，大家一起涨下姿势~~~好了，废话不多说，下面开始：</font>

### <font style="color:rgb(44, 62, 80);">transient 的作用及使用方法</font>

<font style="color:rgb(44, 62, 80);">我们知道，一个对象只要实现了</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">Serilizable 接口</font>](https://javabetter.cn/io/Serializbale.html)<font style="color:rgb(44, 62, 80);">，它就可以被</font>[<font style="color:rgb(44, 62, 80);">序列化</font>](https://javabetter.cn/io/serialize.html)<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">在实际开发过程中，我们常常会遇到这样的问题，一个类的有些字段需要序列化，有些字段不需要，比如说用户的一些敏感信息（如密码、银行卡号等），为了安全起见，不希望在网络操作中传输或者持久化到磁盘文件中，那这些字段就可以加上</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">transient</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">关键字。</font>

<font style="color:rgb(44, 62, 80);">需要注意的是，</font>**<font style="color:rgb(44, 62, 80);">被 transient 关键字修饰的成员变量在反序列化时会被自动初始化为默认值，例如基本数据类型为 0，引用类型为 null</font>**<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">来看示例：</font>

```plain
public class TransientTest {
    public static void main(String[] args) {
        
        User user = new User();
        user.setUsername("沉默王二");
        user.setPasswd("123456");
        
        System.out.println("read before Serializable: ");
        System.out.println("username: " + user.getUsername());
        System.err.println("password: " + user.getPasswd());
        
        try {
            ObjectOutputStream os = new ObjectOutputStream(
                    new FileOutputStream("user.txt"));
            os.writeObject(user); // 将User对象写进文件
            os.flush();
            os.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            ObjectInputStream is = new ObjectInputStream(new FileInputStream(
                    "user.txt"));
            user = (User) is.readObject(); // 从流中读取User的数据
            is.close();
            
            System.out.println("\nread after Serializable: ");
            System.out.println("username: " + user.getUsername());
            System.err.println("password: " + user.getPasswd());
            
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}

class User implements Serializable {
    private static final long serialVersionUID = 8294180014912103005L;  
    
    private String username;
    private transient String passwd;
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPasswd() {
        return passwd;
    }
    
    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

}
```

<font style="color:rgb(44, 62, 80);">输出为：</font>

```plain
read before Serializable:
username: 沉默王二
password: 123456 
read after Serializable:
username: 沉默王二
password: null
```

<font style="color:rgb(44, 62, 80);">密码字段为 null，说明反序列化时根本没有从文件中获取到信息。</font>

### <font style="color:rgb(44, 62, 80);">transient 使用小结</font>

<font style="color:rgb(44, 62, 80);">1）一旦字段被 transient 修饰，成员变量将不再是对象持久化的一部分，该变量的值在序列化后无法访问。</font>

<font style="color:rgb(44, 62, 80);">2）transient 关键字只能修饰字段，而不能修饰方法和类。</font>

<font style="color:rgb(44, 62, 80);">3）被 transient 关键字修饰的字段不能被序列化，一个静态变量（</font>[<font style="color:rgb(44, 62, 80);">static关键字</font>](https://javabetter.cn/oo/static.html)<font style="color:rgb(44, 62, 80);">修饰）不管是否被 transient 修饰，均不能被序列化，</font>[<font style="color:rgb(44, 62, 80);">前面讲到过</font>](https://javabetter.cn/io/Serializbale.html)<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">来看示例：</font>

```plain
public class TransientTest {
    public static void main(String[] args) {
        
        User user = new User();
        user.setUsername("沉默王二");
        user.setPasswd("123456");
        
        System.out.println("read before Serializable: ");
        System.out.println("username: " + user.getUsername());
        System.err.println("password: " + user.getPasswd());
        
        try {
            ObjectOutputStream os = new ObjectOutputStream(
                    new FileOutputStream("user.txt"));
            os.writeObject(user); // 将User对象写进文件
            os.flush();
            os.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            // 在反序列化之前改变username的值
            User.username = "沉默王三";
            
            ObjectInputStream is = new ObjectInputStream(new FileInputStream(
                    "user.txt"));
            user = (User) is.readObject(); // 从流中读取User的数据
            is.close();
            
            System.out.println("\nread after Serializable: ");
            System.out.println("username: " + user.getUsername());
            System.err.println("password: " + user.getPasswd());
            
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}

class User implements Serializable {
    private static final long serialVersionUID = 8294180014912103005L;  
    
    public static String username;
    private transient String passwd;
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPasswd() {
        return passwd;
    }
    
    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
}
```

<font style="color:rgb(44, 62, 80);">运行结果为：</font>

```plain
read before Serializable:
username: 沉默王二
password: 123456 
read after Serializable:
username: 沉默王三
password: null
```

<font style="color:rgb(44, 62, 80);">序列化前，static 修饰的 username 为 沉默王二，然后我们在反序列化前将其修改为 沉默王三 了，如果说 static 修饰的字段能保持状态的话，反序列化后应该是 沉默王二，对吧？</font>

<font style="color:rgb(44, 62, 80);">但结果是 沉默王三，这就证明了我们之前的结论：</font>**<font style="color:rgb(44, 62, 80);">static 修饰的字段不能被序列化</font>**<font style="color:rgb(44, 62, 80);">。</font>

### <font style="color:rgb(44, 62, 80);">transient 修饰的字段真的不能被序列化？</font>

<font style="color:rgb(44, 62, 80);">思考下面的例子：</font>

```plain
public class ExternalizableTest implements Externalizable {
    private transient String content = "是的，我将会被序列化，不管我是否被transient关键字修饰";

    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeObject(content);
    }

    @Override
    public void readExternal(ObjectInput in) throws IOException,
            ClassNotFoundException {
        content = (String) in.readObject();
    }

    public static void main(String[] args) throws Exception {
        
        ExternalizableTest et = new ExternalizableTest();
        ObjectOutput out = new ObjectOutputStream(new FileOutputStream(
                new File("test")));
        out.writeObject(et);

        ObjectInput in = new ObjectInputStream(new FileInputStream(new File(
                "test")));
        et = (ExternalizableTest) in.readObject();
        System.out.println(et.content);

        out.close();
        in.close();
    }
}
```

<font style="color:rgb(44, 62, 80);">来看下输出结果：</font>

```plain
是的，我将会被序列化，不管我是否被transient关键字修饰
```

<font style="color:rgb(44, 62, 80);">这是为什么呢？不是说 transient 关键字修饰的字段不能序列化吗？</font>

<font style="color:rgb(44, 62, 80);">我先说结论，这是因为我们使用了 Externalizable 接口而不是 Serializable接口，这个</font>[<font style="color:rgb(44, 62, 80);">知识点我们前面其实也讲到过</font>](https://javabetter.cn/io/Serializbale.html)<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">在 Java 中，对象的序列化可以通过实现两种接口来实现，如果实现的是 Serializable 接口，则所有的序列化将会自动进行，如果实现的是 Externalizable 接口，则需要在 writeExternal 方法中指定要序列化的字段，与 transient 关键字修饰无关。</font>

<font style="color:rgb(44, 62, 80);">因此例子输出的是变量 content 的内容，而不是 null。</font>

### <font style="color:rgb(44, 62, 80);">小结</font>

<font style="color:rgb(44, 62, 80);">transient 关键字用于修饰类的成员变量，在序列化对象时，被修饰的成员变量不会被序列化和保存到文件中。其作用是告诉 JVM 在序列化对象时不需要将该变量的值持久化，这样可以避免一些安全或者性能问题。但是，transient 修饰的成员变量在反序列化时会被初始化为其默认值（如 int 类型会被初始化为 0，引用类型会被初始化为 null），因此需要在程序中进行适当的处理。</font>

<font style="color:rgb(44, 62, 80);">transient 关键字和 static 关键字都可以用来修饰类的成员变量。其中，transient 关键字表示该成员变量不参与序列化和反序列化，而 static 关键字表示该成员变量是属于类的，不属于对象的，因此不需要序列化和反序列化。</font>

<font style="color:rgb(44, 62, 80);">在 Serializable 和 Externalizable 接口中，transient 关键字的表现也不同，在 Serializable 中表示该成员变量不参与序列化和反序列化，在 Externalizable 中不起作用，因为 Externalizable 接口需要实现 readExternal 和 writeExternal 方法，需要手动完成序列化和反序列化的过程。</font>



## <font style="color:rgb(44, 62, 80);">打印流</font>

<font style="color:rgb(44, 62, 80);">在我的职业生涯中，</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">System.out.println()</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">的使用频率恐怕不亚于 main 方法的使用频率。其中</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">System.out</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">返回的正是打印流</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">PrintStream</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">除此之外，还有它还有一个孪生兄弟，PrintWriter。PrintStream 是 OutputStream 的子类，PrintWriter 是 Writer 的子类，也就是说，一个</font>[<font style="color:rgb(44, 62, 80);">字节流</font>](https://javabetter.cn/io/stream.html)<font style="color:rgb(44, 62, 80);">，一个是</font>[<font style="color:rgb(44, 62, 80);">字符流</font>](https://javabetter.cn/io/reader-writer.html)<font style="color:rgb(44, 62, 80);">。</font>

<font style="color:rgb(44, 62, 80);">打印流具有以下几个特点：</font>

+ <font style="color:rgb(44, 62, 80);">可以自动进行数据类型转换：打印流可以将各种数据类型转换为字符串，并输出到指定的输出流中。</font>
+ <font style="color:rgb(44, 62, 80);">可以自动进行换行操作：打印流可以在输出字符串的末尾自动添加换行符，方便输出多个字符串时的格式控制。</font>
+ <font style="color:rgb(44, 62, 80);">可以输出到控制台或者文件中：打印流可以将数据输出到控制台或者文件中，方便调试和日志记录（尽管生产环境下更推荐使用</font><font style="color:rgb(44, 62, 80);"> </font>[<font style="color:rgb(44, 62, 80);">Logback</font>](https://javabetter.cn/gongju/logback.html)<font style="color:rgb(44, 62, 80);">、ELK 等）。</font>

<font style="color:rgb(44, 62, 80);">PrintStream 类的常用方法包括：</font>

+ `<font style="color:rgb(44, 62, 80);">print()</font>`<font style="color:rgb(44, 62, 80);">：输出一个对象的字符串表示形式。</font>
+ `<font style="color:rgb(44, 62, 80);">println()</font>`<font style="color:rgb(44, 62, 80);">：输出一个对象的字符串表示形式，并在末尾添加一个换行符。</font>
+ `<font style="color:rgb(44, 62, 80);">printf()</font>`<font style="color:rgb(44, 62, 80);">：使用指定的格式字符串和参数输出格式化的字符串。</font>

<font style="color:rgb(44, 62, 80);">来一个示例体验一下。</font>

```plain
PrintStream ps = System.out;
ps.println("沉默王二");
ps.print("沉 ");
ps.print("默 ");
ps.print("王 ");
ps.print("二 ");
ps.println();

ps.printf("姓名：%s，年龄：%d，成绩：%f", "沉默王二", 18, 99.9);
```

<font style="color:rgb(44, 62, 80);">在这个示例中，我们创建了一个 PrintStream 对象 ps，它输出到控制台。我们使用 ps 的 print 和 println 方法输出了一些字符串。</font>

<font style="color:rgb(44, 62, 80);">使用 printf 方法输出了一个格式化字符串，其中 %s、%d 和 %.2f 分别表示字符串、整数和浮点数的格式化输出。我们使用逗号分隔的参数列表指定了要输出的值。</font>

<font style="color:rgb(44, 62, 80);">来详细说说 printf 方法哈。</font>

```plain
public PrintStream printf(String format, Object... args);
```

<font style="color:rgb(44, 62, 80);">其中，format 参数是格式化字符串，args 参数是要输出的参数列表。格式化字符串包含了普通字符和转换说明符。普通字符是指除了转换说明符之外的字符，它们在输出时直接输出。转换说明符是由百分号（%）和一个或多个字符组成的，用于指定输出的格式和数据类型。</font>

<font style="color:rgb(44, 62, 80);">下面是 Java 的常用转换说明符及对应的输出格式：</font>

+ `<font style="color:rgb(44, 62, 80);">%s</font>`<font style="color:rgb(44, 62, 80);">：输出一个字符串。</font>
+ `<font style="color:rgb(44, 62, 80);">%d</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%i</font>`<font style="color:rgb(44, 62, 80);">：输出一个十进制整数。</font>
+ `<font style="color:rgb(44, 62, 80);">%x</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%X</font>`<font style="color:rgb(44, 62, 80);">：输出一个十六进制整数，</font>`<font style="color:rgb(44, 62, 80);">%x</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">输出小写字母，</font>`<font style="color:rgb(44, 62, 80);">%X</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">输出大写字母。</font>
+ `<font style="color:rgb(44, 62, 80);">%f</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%F</font>`<font style="color:rgb(44, 62, 80);">：输出一个浮点数。</font>
+ `<font style="color:rgb(44, 62, 80);">%e</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%E</font>`<font style="color:rgb(44, 62, 80);">：输出一个科学计数法表示的浮点数，</font>`<font style="color:rgb(44, 62, 80);">%e</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">输出小写字母 e，</font>`<font style="color:rgb(44, 62, 80);">%E</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">输出大写字母 E。</font>
+ `<font style="color:rgb(44, 62, 80);">%g</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%G</font>`<font style="color:rgb(44, 62, 80);">：输出一个浮点数，自动选择</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%f</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">或</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%e/%E</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">格式输出。</font>
+ `<font style="color:rgb(44, 62, 80);">%c</font>`<font style="color:rgb(44, 62, 80);">：输出一个字符。</font>
+ `<font style="color:rgb(44, 62, 80);">%b</font>`<font style="color:rgb(44, 62, 80);">：输出一个布尔值。</font>
+ `<font style="color:rgb(44, 62, 80);">%h</font>`<font style="color:rgb(44, 62, 80);">：输出一个哈希码（16进制）。</font>
+ `<font style="color:rgb(44, 62, 80);">%n</font>`<font style="color:rgb(44, 62, 80);">：换行符。</font>

<font style="color:rgb(44, 62, 80);">除了转换说明符之外，Java 的 printf 方法还支持一些修饰符，用于指定输出的宽度、精度、对齐方式等。</font>

+ <font style="color:rgb(44, 62, 80);">宽度修饰符：用数字指定输出的最小宽度，如果输出的数据不足指定宽度，则在左侧或右侧填充空格或零。</font>
+ <font style="color:rgb(44, 62, 80);">精度修饰符：用点号（.）和数字指定浮点数或字符串的精度，对于浮点数，指定小数点后的位数，对于字符串，指定输出的字符数。</font>
+ <font style="color:rgb(44, 62, 80);">对齐修饰符：用减号（-）或零号（0）指定输出的对齐方式，减号表示左对齐，零号表示右对齐并填充零。</font>

<font style="color:rgb(44, 62, 80);">下面是一些示例：</font>

```plain
int num = 123;
System.out.printf("%5d\n", num); // 输出 "  123"
System.out.printf("%-5d\n", num); // 输出 "123  "
System.out.printf("%05d\n", num); // 输出 "00123"

double pi = Math.PI;
System.out.printf("%10.2f\n", pi); // 输出 "      3.14"
System.out.printf("%-10.4f\n", pi); // 输出 "3.1416    "

String name = "沉默王二";
System.out.printf("%10s\n", name); // 输出 "     沉默王二"
System.out.printf("%-10s\n", name); // 输出 "沉默王二     "
```

<font style="color:rgb(44, 62, 80);">具体来说，</font>

+ <font style="color:rgb(44, 62, 80);">我们使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%5d</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来指定输出的整数占据 5 个字符的宽度，不足部分在左侧填充空格。</font>
+ <font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%-5d</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来指定输出的整数占据 5 个字符的宽度，不足部分在右侧填充空格。</font>
+ <font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%05d</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来指定输出的整数占据 5 个字符的宽度，不足部分在左侧填充 0。</font>
+ <font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%10.2f</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来指定输出的浮点数占据 10 个字符的宽度，保留 2 位小数，不足部分在左侧填充空格。</font>
+ <font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%-10.4f</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来指定输出的浮点数占据 10 个字符的宽度，保留 4 位小数，不足部分在右侧填充空格。</font>
+ <font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%10s</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来指定输出的字符串占据 10 个字符的宽度，不足部分在左侧填充空格。</font>
+ <font style="color:rgb(44, 62, 80);">使用</font><font style="color:rgb(44, 62, 80);"> </font>`<font style="color:rgb(44, 62, 80);">%-10s</font>`<font style="color:rgb(44, 62, 80);"> </font><font style="color:rgb(44, 62, 80);">来指定输出的字符串占据 10 个字符的宽度，不足部分在右侧填充空格。</font>

<font style="color:rgb(44, 62, 80);">接下来，我们给出一个 PrintWriter 的示例：</font>

```plain
PrintWriter writer = new PrintWriter(new FileWriter("output.txt"));
writer.println("沉默王二");
writer.printf("他的年纪为 %d.\n", 18);
writer.close();
```

<font style="color:rgb(44, 62, 80);">首先，我们创建一个 PrintWriter 对象，它的构造函数接收一个 Writer 对象作为参数。在这里，我们使用 FileWriter 来创建一个输出文件流，并将其作为参数传递给 PrintWriter 的构造函数。然后，我们使用 PrintWriter 的 println 和 printf 方法来输出两行内容，其中 printf 方法可以接收格式化字符串。最后，我们调用 PrintWriter 的 close 方法来关闭输出流。</font>

<font style="color:rgb(44, 62, 80);">我们也可以不创建 FileWriter 对象，直接指定文件名。</font>

```plain
PrintWriter pw = new PrintWriter("output.txt");
pw.println("沉默王二");
pw.printf("他的年纪为 %d.\n", 18);
pw.close();
```

<font style="color:rgb(44, 62, 80);">好，关于打印流我们就说这么多，比较简单。至于 printf 的一些规则，用到的时候可以再查使用说明或者看 API 文档就可以了，记不住没关系。</font>









到的文件操作API

1) 拷贝文件：

```plain
Files.copy(src.toPath(),dest.toPath(),optionList.toArray(new CopyOption[]));
```

2) 创建多级文件夹（哪怕中间有目录不存在）：

```plain
File dest;
dest.mkdirs()
```

3) 判断是否为目录 ：

```plain
File dest;
dest.isDirectory()
```

4) 文件是否存在：

```plain
File dest;
dest.exists()
```



5

```plain
File parent;
File parentFile = parent.getParentFile();
```



6

```plain
File srcFile = new File(parentFile, "gzc-generator-demo/acm-template")
```



7

```plain
File file;
String path = file.getAbsolutePath();
```



```plain
File srcFile;
File[] listFiles = srcFile.listFiles();
```





```plain
File destFile;
Path destPath = destFile.toPath().resolve(srcFile.getName());
```

// 获取gzc-generator-basic 项目的根路径

        String projectPath = System.getProperty("user.dir");





## Files API


### Files.copy(srcFile.toPath(),destPath, StandardCopyOption.REPLACE_EXISTING);

```plain
Files.copy(srcFile.toPath(),destPath, StandardCopyOption.REPLACE_EXISTING);
```







FileUtil.copy(srcPath,destPath,false);

ArrayUtil.isEmpty(listFiles)



Writer out = new FileWriter("myweb.html");








