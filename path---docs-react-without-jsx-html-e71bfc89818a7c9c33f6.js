webpackJsonp([71427465096416],{790:function(n,s){n.exports={data:{markdownRemark:{html:'<p>编写React的时候，JSX并不是必须的。当你不想在你的构建环境中安装相关编译工具的时候，不使用JSX编写React会比较方便。</p>\n<p>每一个JSX元素都只是 <code>React.createElement(component, props, ...children)</code> 的语法糖。因此，任何时候你用JSX语法写的代码也可以用普通的 JavaScript 语法写出来。</p>\n<p>例如，下面这段代码是用JSX语法写的：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>toWhat<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hello</span> <span class="token attr-name">toWhat</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>World<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>可以被编译成下面这段不使用JSX的代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>toWhat<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span>toWhat<span class="token punctuation">:</span> <span class="token string">\'World\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>如果你很好奇想了解更多关于JSX如何被转化为 JavaScript 的例子，你可以尝试下这个<a href="https://babeljs.io/repl/#?babili=false&#x26;evaluate=true&#x26;lineWrap=false&#x26;presets=es2015%2Creact%2Cstage-0&#x26;code=function%20hello()%20%7B%0A%20%20return%20%3Cdiv%3EHello%20world!%3C%2Fdiv%3E%3B%0A%7D">在线Babel编译器</a>。</p>\n<p>一个组件可以是一个字符串，或者也可以是`React.Component的子类。当组件是无状态组件的时候，它也可以是一个普通的函数。</p>\n<p>如果你对于每次都要输入 <code>React.createElement</code> 感到非常厌倦，这是一种常用的简写形式：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> e <span class="token operator">=</span> React<span class="token punctuation">.</span>createElement<span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token function">e</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'Hello World\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>如果你使用 <code>React.createElement</code> 的简写形式，这将很方便的去编写不使用 JSX 的 React.</p>\n<p>其它选择的话，你可以去参考社区上的项目例如<a href="https://github.com/mlmorg/react-hyperscript"><code>react-hyperscript</code></a>和 <a href="https://github.com/ohanhi/hyperscript-helpers"><code>hyperscript-helpers</code></a> 。它们都提供了一些简洁的语法。</p>',frontmatter:{title:"不使用 JSX",next:null,prev:null},fields:{path:"docs/react-without-jsx.md",slug:"docs/react-without-jsx.html"}}},pathContext:{slug:"docs/react-without-jsx.html"}}}});
//# sourceMappingURL=path---docs-react-without-jsx-html-e71bfc89818a7c9c33f6.js.map