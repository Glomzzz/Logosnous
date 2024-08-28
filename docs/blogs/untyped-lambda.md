---
category: tech
date: 2024-08-28 12:28
tags:
  - UntypedLambda
  - Call-by-name
  - Call-by-value
icon: /assets/docs/blogs/lambda.jpg
---

# Lambda calculus
## Variables

$x$ is a free variable, and y is a bound variable in $\lambda y.y\,\,\,x$

## Reductions / Rewritten

$M \implies P$ means $M$ can be reduced or rewritten to $P$

## Substitution

$[N/x]M$ is the result of substituting $N$ for all free occurences of x in $M$

## Transform
- α-conversion : $\lambda x . x \implies \lambda y.[y/x]M$
- β-reduction : $(\lambda x.M)N \implies [N/x]M$  ( substitution )
- δ-reduction : $func \,\,\, a_0 \,\,\, a_1 \,\,\, a_2 \,\,\, ... \,\,\, a_n \implies b$
- conditional reduction : $if\,\,\,ture\,\,\,then\,\,\,M\,\,\,else\,\,\,N \implies M$
- repeated reduction: $M_1 \implies M_3$
	- $whenever\,\,\,M_1\implies M_2 \,\,and\,\,M_2\implies M_3$
## $redex$

an expr which can be reduced by a β, δ or conditional reduction  

Functional PL, restrict the use of these reductions to top-level-redex

## Weak Head Normal Form
a expr is $weak\,\,\,\,head\,\,\,\,normal\,\,\,\,form$ if:
- constant
- functon
- free variable
- application
If a lambda expr is in whnf, it has no top-level redex

Some lambda expr cannot be reduced to whnf : $(\lambda y.y\,\,\,y)(\lambda y.y\,\,\,y)$

## Substitution restriction in $[N/x]M$

A free variable that becomes bound is said to be captured

$(\lambda x.2+(\lambda y.x+y)5)(y+1) \implies 2+(\lambda y (y+1)+y)5$

the free variable y in N has become captured  

THIS IS CLEARLY WRONG

To sovle that, we can first rename M's bound variaable y to z by an α-conversion

Therefore, No free variable in $N$ may become bound as a result of this substitution

## Functional PL
- There are no free variables in the argument N of an application $(\lambda x.M)N$
- Therefore no variables can be captured

## Reduction Orders

Alternatives known as:

### Call-by-name reduction
- does not impose further restrictions
- $(\lambda x.M)N$ can be reduced immediately by a β-reduction
- Is preferable to call-by-value because of the **completeness property: namely**
- If M can be reduced to a constant c, then the call-by-name reduction order will reduce M to c
### call-by-value reduction
- furter restricts the use of β-reduction to top-level redexes
- $(\lambda x.M)P$ where the argument P is a whnf(const or func).
- Thus, $(\lambda x.M)N$ must be reduced by first reducing the argument N to a whnf P
- Then $(\lambda x.M)P$ is reduced by a β-reduction
### normal order reduction
### applicative order reduction

### Conclude
Different reduction sequences produce same final unreducible answers(in the form of constant values),  
because of Church-Rosser theorem


## Recursion

### Y constant, with δ reduction rule

Fix-point reduction: $Y\,\,\,M\implies M(Y\,\,\,M)$    

Clearly:  $Y\,\,\,M\implies M(Y\,\,\,M)\implies M(M(Y\,\,\,M))\implies M(M(M(Y\,\,\,M)))\implies ...$    

For example: let M be $(\lambda f.\lambda n.if\,\,n=0\,\,then\,\,1\,\,else\,\,n*f(n-1))$  
Define the factorial function by: $fac = Y\,\,\,M$  
$3!$ can be computed as follows:  
$${
\begin{align*}
fac(3)&=Y(M)(3) \\
&\implies \ (\lambda f.\lambda n.if\,\,n=0\,\,then\,\,1\,\,else\,\,n*f(n-1))\,\,\,(Y \,\,\,M)\,\,\,(3) \\
&\implies \ 3*(Y\,\,\,M)(2) \\
&\implies \ 3*M(Y\,\,\,M)(2)\\
&\implies \ 3*(\lambda f.\lambda n.if\,\,n=0\,\,then\,\,1\,\,else\,\,n*f(n-1))\,\,\,(Y \,\,\,M)\,\,\,(2)\\
&\implies \ 3*2*(Y\,\,\,M)(1) \\
&\implies \ 3*2*M(Y\,\,\,M)(1)\\
&\implies \ 3*2*(\lambda f.\lambda n.if\,\,n=0\,\,then\,\,1\,\,else\,\,n*f(n-1))\,\,\,(Y \,\,\,M)\,\,\,(1)\\
&\implies \ 3*2*1*(Y\,\,\,M)(0) \\
&\implies \ 3*2*1*M(Y\,\,\,M)(0)\\
&\implies \ 3*2*1*(\lambda f.\lambda n.if\,\,n=0\,\,then\,\,1\,\,else\,\,n*f(n-1))\,\,\,(Y \,\,\,M)\,\,\,(0)\\
&\implies \ 3*2*1*1 \\
&\implies \ ... \\
&\implies \ 6 \\
\end{align*}
}
$$

Y constant is not necessary, it can be expressed in the untyped lambda calculus by Y combinator

### Call-by-name's Y-combinator

$Y_n=\lambda h.((\lambda x.h(x\,\,\,x)))(\lambda x.h(x\,\,\,x))$  

then we have:

$${
\begin{align*}
 Y_n\,\,M &=\lambda h.((\lambda x.h(x\,\,\,x))(\lambda x.h(x\,\,\,x)))\,\,M \\
&\implies \ (\lambda x.M(x\,\,\,x))\,\,\,(\lambda x.M(x\,\,\,x)) \\
&\implies \  M(\lambda x.M(x\,\,\,x)\,\,\,\lambda x.M(x\,\,\,x))\\
\end{align*}
}
$$
Denoting the $(\lambda x.M(x\,\,\,x))\,\,\,(\lambda x.M(x\,\,\,x))$ by C

We observe that $Y_n\,\,\,M\implies C$ and also $C \implies M\,\,\,C$

Thus C behaves as $Y\,\,\,M$ above

So $Y_n$ faithfully simulates the Y constant

For example, to see how it works

#### frac(1)
let M = $\lambda f.\lambda n.if\,\,\,n=0\,\,\,then\,\,\,1\,\,\,else\,\,\,n*f(n-1)$

the steps to reduce $Y_n\,\,\,M\,\,\,1$ :

$${
\begin{align*}
Y_n(M)&(1)= C(1) = (M\,\,\,C)\,\,\,(1)\\
&\implies \ (\lambda f.\lambda n.if\,\,\,n=0\,\,\,then\,\,\,1\,\,\,else\,\,\,n*f(n-1))(C)(1)\\
&\implies \ 1*(C)(0) \\
&\implies \ 1*(M\,\,\,C)(0)\\
&\implies \ 1*(\lambda f.\lambda n.if\,\,\,n=0\,\,\,then\,\,\,1\,\,\,else\,\,\,n*f(n-1))(C)(0)\\
&\implies \ 1*1 \\
&\implies \ ... \\
&\implies \ 1 \\
\end{align*}
}
$$

#### fib(3)

let M = $\lambda f.\lambda n.if\,\,\,n\,\,\,= 1\,\,\,or\,\,\,n\,\,\,=\,\,\,2\,\,\,then\,\,\,1\,\,\,else\,\,\,f(n-1)+f(n-2)$

the steps to reduce $Y_n\,\,\,M\,\,\,3$ :

$${
\begin{align*}
Y_n(M)&(3)= C(3) = (M\,\,\,C)\,\,\,(3)\\
&\implies \ (\lambda f.\lambda n.if\,\,\,n\,\,\,= 1\,\,\,or\,\,\,n\,\,\,=\,\,\,2\,\,\,then\,\,\,1\,\,\,else\,\,\,f(n-1)+f(n-2))(C)(3)\\
&\implies \ C(2) + C(1) \\
&\implies \ (M\,\,\,C)(2) + (M\,\,\,C)(1) \\
&\implies \ (\lambda f.\lambda n.if\,\,\,n\,\,\,= 1\,\,\,or\,\,\,n\,\,\,=\,\,\,2\,\,\,then\,\,\,1\,\,\,else\,\,\,f(n-1)+f(n-2))(C)(2) + ...\\
&\implies \ 1+1 \\
&\implies \ ... \\
&\implies \ 2 \\
\end{align*}
}
$$

### Call-by-value's Y-combinator
$Y_v=\lambda h.(\lambda x.h(\lambda a.(x\,\,\,x)a))\,\,\,(\lambda x.h(\lambda a.(x\,\,\,x)a))$

then we have:

$${
\begin{align*}
 Y_v\,\,M &=(\lambda h.(\lambda x.h(\lambda a.(x\,\,\,x)a))\,\,\,\lambda x.h(\lambda a.(x\,\,\,x)a))\,\,M \\
&\implies \ (\lambda x.M(\lambda a.(x\,\,\,x)a))\,\,\,\lambda x.M(\lambda a.(x\,\,\,x)a) \\
&\implies \  M \,\,\,(\lambda a.((\lambda x.M(\lambda a.(x\,\,\,x)a))\,\,\,(\lambda x.M(\lambda a.(x\,\,\,x)a))a)) \\
\end{align*}
}
$$

Denoting the $\lambda x.M(\lambda a.(x\,\,\,x)a)\,\,\,\lambda x.M(\lambda a.(x\,\,\,x)a)$ by D

We observe that $Y_v\,\,M\implies D$ and also $D\implies M\,\,\,(\lambda a.D\,\,\,a)$

For example, to see how it works

#### frac(1)

let M = $\lambda f.\lambda n.if\,\,\,n=0\,\,\,then\,\,\,1\,\,\,else\,\,\,n*f(n-1)$  

the steps to reduce $Y_v\,\,\,M\,\,\,1$ :
$${
\begin{align*}
Y_v(M)&(1)= D\,\,\,(1)=M (\lambda a.D\,\,\,a) (1)\\
&\implies \ (\lambda f.\lambda n.if\,\,\,n=0\,\,\,then\,\,\,1\,\,\,else\,\,\,n*f(n-1))(\lambda a.D\,\,\,a)(1)\\
&\implies \ 1*(\lambda a.D\,\,\,a)(0) \\
&\implies \ 1*(D)(0) \\
&\implies \ 1*(M (\lambda a.D\,\,\,a)(0) )\\
&\implies \ (\lambda f.\lambda n.if\,\,\,n=0\,\,\,then\,\,\,1\,\,\,else\,\,\,n*f(n-1))(\lambda a.D\,\,\,a)(0)\\
&\implies \ 1*1 \\
&\implies \ ... \\
&\implies \ 1 \\
\end{align*}
}
$$

#### fib(3)

let M = $\lambda f.\lambda n.if\,\,\,n\,\,\,= 1\,\,\,or\,\,\,n\,\,\,=\,\,\,2\,\,\,then\,\,\,1\,\,\,else\,\,\,f(n-1)+f(n-2)$  

the steps to reduce $Y_v\,\,\,M\,\,\,3$ :
$${
\begin{align*}
Y_v(M)&(3)= D(3) = M\,\,\,(\lambda a.D\,\,\,a)\,\,\,(3)\\
&\implies \ (\lambda f.\lambda n.if\,\,\,n\,\,\,= 1\,\,\,or\,\,\,n\,\,\,=\,\,\,2\,\,\,then\,\,\,1\,\,\,else\,\,\,f(n-1)+f(n-2))(\lambda a.D\,\,\,a)(3)\\
&\implies \ (\lambda a.D\,\,\,a)(2) + (\lambda a.D\,\,\,a)(1) \\
&\implies \ D(2) + (D)(1) \\
&\implies \ (M\,\,\,(\lambda a.D\,\,\,a)\,\,\,2) + (M\,\,\,(\lambda a.D\,\,\,a)\,\,\,1)  \\
&\implies \ (\lambda f.\lambda n.if\,\,\,n\,\,\,= 1\,\,\,or\,\,\,n\,\,\,=\,\,\,2\,\,\,then\,\,\,1\,\,\,else\,\,\,f(n-1)+f(n-2))(\lambda a.D\,\,\,a)(2) + ...\\
&\implies \ 1+1 \\
&\implies \ ... \\
&\implies \ 2 \\
\end{align*}
}
$$