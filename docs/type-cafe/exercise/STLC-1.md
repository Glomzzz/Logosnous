---
date: 2024-06-04 15:13
tags:
  - STLC答案
category: tech
icon: /assets/docs/type-cafe/exercise/stlc-1-icon.jpg
---

# STLC-1-练习答案

## 3.3.1 定义谓词 ∈

![](/public/assets/docs/type-cafe/exercise/3-3-1.png)

### 答案

$$
{\LARGE \frac{ }{ x:A \in x:A , \Gamma \ }
\qquad
\frac{ x:A \in \Gamma \ }{ x:A \in b:B , \Gamma \ }}

$$

## 3.4.1 更复杂的类型检查过程

![](/public/assets/docs/type-cafe/exercise/3-4-1.png)

### 我的答案

记 $\Gamma = f:B \ \to \ C,g:A \ \to \ B,x:B$
$$
{\LARGE

\frac{
\frac{
\frac{
\frac{
\frac{f:B \ \to \ C \in \Gamma}{
\Gamma \vdash f ： B \ \to \ C
}Var

\ \ \ \

\frac{g:A \ \to \ B \in \Gamma}{
\Gamma \vdash g:A \ \to \ B
}Var

\ \ \ \

\frac{x:B \in \Gamma}{
\Gamma \vdash x:B
}Var
}{
\Gamma \vdash f \ ( g \ x) : C
}App
}{f: B \ \to C, g: A \ \to \ B \vdash \lambda x.f(g \ x): \ A \ \to \ C }Lam
}{f: B \ \to C, \vdash \lambda g.\lambda x.f(g \ x): (A \ \to \ B) \ \to \ A \ \to \ C }Lam
}{ \emptyset \vdash \lambda f.\lambda g .\lambda x.f(g \ x):(B \ \to \ C) \ \to \ (A \ \to \ B) \ \to \ A \ \to \ C}Lam

}
$$

### 标准答案

记 $\Gamma = f:B \ \to \ C,g:A \ \to \ B,x:B$
$$
{\LARGE

\frac{
\frac{
\frac{
\frac{
\frac{f:B \ \to \ C \in \Gamma}{
\Gamma \vdash f ： B \ \to \ C
}Var

\ \ \ \

\frac{
\frac{g:A \ \to \ B \in \Gamma}{
\Gamma \vdash g:A \ \to \ B
}Var

\ \ \ \

\frac{x:B \in \Gamma}{
\Gamma \vdash x:B
}Var
}{
\Gamma \vdash (g \ x):B
}App
}{
\Gamma \vdash f \ ( g \ x) : C
}App
}{f: B \ \to C, g: A \ \to \ B \vdash \lambda x.f(g \ x): \ A \ \to \ C }Lam
}{f: B \ \to C, \vdash \lambda g.\lambda x.f(g \ x): (A \ \to \ B) \ \to \ A \ \to \ C }Lam
}{ \emptyset \vdash \lambda f.\lambda g .\lambda x.f(g \ x):(B \ \to \ C) \ \to \ (A \ \to \ B) \ \to \ A \ \to \ C}Lam

}
$$

> 刚开始学的话还是得一步步来。

## 3.6.1 归约练习

![](/public/assets/docs/type-cafe/exercise/3-6-1_.png)
![](/public/assets/docs/type-cafe/exercise/3-6-1.png)

### 答案

1.

$${\LARGE
\begin{align*}
& \ \ \ \ \ \  (\lambda x. \lambda y.x) y \\
&\equiv \ (\lambda x.\lambda z.x)y \qquad & (\alpha \ conversion)\\
&\equiv \ (\lambda z.x)[x\mapsto y] \qquad & (\beta \ rediction) \\
&\equiv \ \lambda z.y \qquad & (substitution)\\
\end{align*}
}
$$

2. $\lambda(f:A \ \to \ B \ \to \ C).f$ 已经是即约形式了，所以原项即为答案，但我们可以练一练 **η 展开**

$$
{\LARGE
\begin{align*}
& \ \ \ \ \ \ \lambda(f:A \ \to \ B \ \to \ C).f \\
&\equiv \ \lambda(f:A \ \to \ B \ \to \ C).\lambda  (x : A).f \ x \qquad & (\eta \ expand)\\
&\equiv \ \lambda(f:A \ \to \ B \ \to \ C).\lambda  (x : A).\lambda  (y : B).(f \ x) \ y \qquad & (\eta \ expand)\\
\end{align*}
}
$$

今天先写到这。

