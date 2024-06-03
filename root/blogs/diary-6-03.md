---
date: 2024-06-03 23:49
tags:
  - 日记
  - PL
category: life
---
# 孩子们，我回来了。

抱歉突然失踪了两周，这段时间我在：[一周疯狂代码，一周忘我消遣](diary-5-18--6-02)

## 缘由

昨天不知道做了个什么梦，醒来后浑身轻松，但突然电子阳痿了（
我有一种前两周被人夺舍，今天突然回来的感觉。
来干正事，继续写项目吧。
## 维护禁书目录

- 支持了 LaTeX 解析（想用typst，但后悔莫及（））

	- 来段类型检查：
	- $$ {\Huge \frac{\frac{\frac{\frac{f: A \  \to \  B \in f:A \  \to \  B, x:A}{f:A \  \to \  B, x : A \ \vdash \ f : A \  \to \  B}Var \qquad \frac{f: A \  \to \  B \in f:A \  \to \  B, x:A}{f:A \  \to \  B, x : A \ \vdash \ x : A}Var }{f:A \  \to \  B , x : A \  \vdash \  f \  x : B}App}{f: A \  \to \  B \ \vdash \  \lambda x.f \ x \  : \  A \  \to \  B}Lam }{\emptyset \vdash \lambda f.x.f\ x:(A \  \to \  B) \  \to \  A \  \to \  B }Lam}  $$
	- 来段从日本公式中总结出的好玩的：
	- $$ \forall x,y \in R, f(x)^2 - f(y)^2 = f(x+y) f(x-y) $$
	- 猜猜`f`的解有哪些。
- 修复了一些归档排序问题
## Skillw社区

社区内的成员（LizBing）想发起一个研究引用计数gc的项目，赞同，我也想研究这块。
[Down for the count? Getting reference counting back in the ring | Proceedings of the 2012 international symposium on Memory Management (acm.org)](https://dl.acm.org/doi/10.1145/2258996.2259008)

前段时间瞄到一张图，内容是某人发现了一个"完美"gc的方法后在锐评JVM，具体内容不记得了，甚至有点怀疑是不是真的（？）

## 继续写Asahi II

本来想自己写个小VM，在上面跑这个纯函数式，我差点上s-expr了。(Clojure：在叫我？)

在我浮想联翩时，被这个项目的定位拉回来了。

**Asahi II** 旨在作为一个易用易上手高性能的DSL，帮助开发者更方便地完成高级客制化功能。
（客制化到能图灵完备（

为了JVM生态（还有强大的JIT（），跑在JVM上更为理想。

于是又被拉回JVM了。

### 关于VM

我用rust试过写了一个很simple的，但确实有一点小折磨，之后我可能会换成纯C或Zig（倾向于后者
不过这些都是后话了，我目前要专注在JVM上的实现

### 目前暂定的spec

正在编辑。。



