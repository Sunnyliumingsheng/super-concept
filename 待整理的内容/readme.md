# 超概念英语可行性评估

## AI部分

作为这个软件的核心，提供了基本的分析功能。deepseek的价格非常便宜，是非常有力的竞争者。

api key : sk-0ee1885fa8bf477d8b0979eb999b9f1c

编写ai.js中的代码，出现了下面这种的效果

``` json

{
    "word": "tall",
    "mean": "describes something or someone that has a great height from bottom to top",
    "isSuitableImageDescription": true,
    "fiveUsageExamples": [
        "The giraffe is a very tall animal.",
        "My dad is tall and can reach the top shelf.",
        "We saw a tall building in the city.",
        "The sunflower grew tall in the garden.",
        "Basketball players need to be tall to play well."
    ]
}
{
    "word": "ironic",
    "mean": "when something happens in a way that is the opposite of what you expected, and it is often funny or surprising",   
    "isSuitableImageDescription": false,
    "fiveUsageExamples": [
        "It was ironic that the firefighter's house caught on fire.",
        "She said she hated cats, but it was ironic that she ended up adopting one.",
        "The teacher who always forgot her homework gave us a lesson on being responsible—how ironic!",
        "He brought an umbrella because he thought it would rain, but it was sunny all day—how ironic!",
        "It's ironic that the person who always tells others to be quiet is the loudest in the room."
    ]
}

```

我认为很能满足高性能学习英语软件对AI的要求

接下来是测试单词书，读音，照片的爬取

## 单词书的获取

并不能找到一个合适的单词书，原因如下   
首先是格式问题，市面上能找到的单词书有如下几种格式

1. db
2. docx
3. excel
4. txt

并且内容不相同，有的仅仅是单词，还有的有翻译等等内容。

并且考虑到如果手写爬虫，很难作为一个适应力极强的软件。并且很难适应时代变化，故而采用如下方法。
格式为txt，第一行是单词书的一些信息，下面就是分组和单词
举例来说
``` txt
人教版小学一年级教材 primary
apple
pen
fire

juice
hello
pencil
peach

hope
ice
tree
```
规则是，第一行第一个词是单词书的名字，空格作为分割，第二个词为难度等级，可以是primary,junior,senior,university,specialty
接下来每一行都是一个单词，并且每个单元都通过空行分隔

## 图片获取API

图片获取非常重要，我估计60 percent的单词都可以利用图片得到不错的帮助。   
基本上只有两个API是可选的，分别是百度的和google的    
值得注意的是，百度的基本上总是可用，但是google不一定，规则是优先尝试google，再尝试百度。   
百度作为google访问失败的备选方案，包括请求太多和网络不通的情况。    

并没有成功实践，但是也理解了个大概。基本逻辑就是使用electron自带的chromium，从而达到模拟真实浏览器的请求的功能。    
另外需要考察的是到底是实时请求好点还是后台请求好点


## 语音的爬取
