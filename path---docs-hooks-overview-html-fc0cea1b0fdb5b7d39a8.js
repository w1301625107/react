webpackJsonp([0xeb778271d95d],{902:function(n,s){n.exports={data:{markdownRemark:{html:'<p><em>Hooks</em>是React v16.7.0-alpha中加入的新特性。它可以让你在class以外使用state和其他React特性。你可以在<a href="https://github.com/reactjs/rfcs/pull/68">这里</a>看到关于它的一些讨论。</p>\n<p>Hooks<a href="/docs/hooks-intro.html#no-breaking-changes">向后兼容</a>。这个页面为有经验的React用户提供了Hooks的概览。</p>\n<p>这是一个快节奏的概览。当你感到困惑时，请搜寻下面这样的黄色盒子：</p>\n<blockquote>\n<p>详细解释</p>\n<p>阅读<a href="/docs/hooks-intro.html#motivation">动机</a>以了解我们为什么要在React中引入Hooks。</p>\n</blockquote>\n<p><strong>↑↑↑ 每一部分的结尾都会有一个这样的黄色盒子</strong> 它们链接到详细的解释。</p>\n<h2 id="-状态钩子（state-hook）"><a href="#-%E7%8A%B6%E6%80%81%E9%92%A9%E5%AD%90%EF%BC%88state-hook%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>📌 状态钩子（State Hook）</h2>\n<p>这个例子渲染了一个计数器。当你点击按钮时，页面中的值会随之增加：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="gatsby-highlight-code-line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n</span>\n<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token comment">// 声明一个名为“count”的新状态变量</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>你点击了<span class="token punctuation">{</span>count<span class="token punctuation">}</span>次<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        点我\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在这里, <code class="gatsby-code-text">useState</code>是一个<em>钩子（Hook）</em> （稍后我们将会谈及它的含义）。我们在一个函数式组件中调用它，为这个组件增加一些内部的状态。React将会在下一次渲染前保存此状态。 <code class="gatsby-code-text">useState</code>返回一对值：<em>当前</em>的状态（state value）和一个可以更新状态的函数。你可以在事件处理程序（event handler）中或其他地方调用这个函数。 它与类组件中的<code class="gatsby-code-text">this.setState</code>类似，但不能将新旧状态进行合并。（我们在<a href="/docs/hooks-state.html">使用状态钩子</a>中展示了一个将<code class="gatsby-code-text">useState</code>和<code class="gatsby-code-text">this.state</code>进行对比的例子。）</p>\n<p><code class="gatsby-code-text">useState</code>唯一的参数就是初始状态（initial state）。在上面的例子中,因为我们的计数器从零开始所以它是<code class="gatsby-code-text">0</code>。这里的状态与<code class="gatsby-code-text">this.state</code>不同，它不必是一个对象— 如果你想这么做，当然也可以。初始状态参数只在第一次渲染中被使用。</p>\n<h4 id="声明多个状态变量"><a href="#%E5%A3%B0%E6%98%8E%E5%A4%9A%E4%B8%AA%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>声明多个状态变量</h4>\n<p>你可以在一个组件中多次使用状态钩子:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">ExampleWithManyStates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 声明多个状态变量！</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>age<span class="token punctuation">,</span> setAge<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>fruit<span class="token punctuation">,</span> setFruit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'banana\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> setTodos<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'Learn Hooks\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>通过调用<code class="gatsby-code-text">useState</code>我们声明了一些状态变量，我们可以使用<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring">数组解构</a>语法赋予这些状态变量不同的名字。这些名字不是<code class="gatsby-code-text">useState</code> API的一部分。 相反，当你多次调用<code class="gatsby-code-text">useState</code>时，React假定你在每一次渲染中以相同的顺序调用它们。我们会在之后再来解释为什么这样可以运行以及在什么时候起作用。</p>\n<h4 id="但是什么是钩子（hook）？"><a href="#%E4%BD%86%E6%98%AF%E4%BB%80%E4%B9%88%E6%98%AF%E9%92%A9%E5%AD%90%EF%BC%88hook%EF%BC%89%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>但是什么是钩子（Hook）？</h4>\n<p>钩子是可以让你与React状态以及函数式组件的生命周期特性“挂钩”的函数。钩子是为了让你抛弃类使用React的，所以它不能在类中运行。（我们<a href="/docs/hooks-intro.html#gradual-adoption-strategy">不推荐</a>你立即重写已经存在的组件，但是如果你喜欢的话可以在新的组件中开始使用钩子。）</p>\n<p>React提供了少量内置的钩子，如<code class="gatsby-code-text">useState</code>。你也可以创建自己的钩子在不同的组件之间复用有状态的行为。我们先来看一下内置的钩子。</p>\n<blockquote>\n<p>详细解释</p>\n<p>你可以在这个页面上了解到更多关于状态钩子的信息: <a href="/docs/hooks-state.html">使用状态钩子</a>。</p>\n</blockquote>\n<h2 id="️-副作用钩子（effect-hook）"><a href="#%EF%B8%8F-%E5%89%AF%E4%BD%9C%E7%94%A8%E9%92%A9%E5%AD%90%EF%BC%88effect-hook%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>⚡️ 副作用钩子（Effect Hook）</h2>\n<p>你可能之前已经在React中执行过获取数据，订阅或者手动改变DOM。我们称这些操作为“副作用（side effects）”（或者简称为“作用（effects）”），因为它们可以影响其他的组件并且不能在渲染中完成。</p>\n<p>副作用钩子, <code class="gatsby-code-text">useEffect</code>, 为函数式组件带来执行副作用的能力。它与类组件中的<code class="gatsby-code-text">componentDidMount</code> ，<code class="gatsby-code-text">componentDidUpdate</code>和 <code class="gatsby-code-text">componentWillUnmount</code>具有相同的用途，但是被统一为一个API。（我们在<a href="/docs/hooks-effect.html">使用副作用钩子</a>中展示了一个将<code class="gatsby-code-text">useEffect</code>和这些方法进行对比的例子。）</p>\n<p>举个例子，这个组件在React更新DOM之后设置文档的标题：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="gatsby-highlight-code-line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n</span>\n<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="gatsby-highlight-code-line">  <span class="token comment">// 类似于 componentDidMount 和 componentDidUpdate:</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token comment">// 使用浏览器API更新文档标题</span>\n</span><span class="gatsby-highlight-code-line">    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token template-string"><span class="token string">`You clicked </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> times`</span></span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>You clicked <span class="token punctuation">{</span>count<span class="token punctuation">}</span> times<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        Click me\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>当你调用<code class="gatsby-code-text">useEffect</code>,就是告诉React在刷新DOM之后运行你的副作用函数。副作用函数在组件中声明，所以可以使用组件的状态（state）和属性（props）。React默认在每一次渲染后运行副作用函数——<em>包括</em>第一次渲染。(与类组件的生命周期函数的对比请看<a href="/docs/hooks-effect.html">使用副作用钩子</a>。)</p>\n<p>副作用函数可以通过返回一个函数来指定如何“回收”它们。举个例子，这个组件使用了一个副作用函数来订阅一个朋友的在线状态，通过取消订阅来回收：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">FriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>isOnline<span class="token punctuation">,</span> setIsOnline<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">handleStatusChange</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setIsOnline</span><span class="token punctuation">(</span>status<span class="token punctuation">.</span>isOnline<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="gatsby-highlight-code-line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    ChatAPI<span class="token punctuation">.</span><span class="token function">subscribeToFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      ChatAPI<span class="token punctuation">.</span><span class="token function">unsubscribeFromFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>isOnline <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'Loading...\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> isOnline <span class="token operator">?</span> <span class="token string">\'Online\'</span> <span class="token punctuation">:</span> <span class="token string">\'Offline\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在这个例子中，当组件被卸载时，React会在由随后的渲染引起的副作用函数运行之前取消对<code class="gatsby-code-text">ChatAPI</code>的订阅。（如果有需要的话，可以用这个方法<a href="/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects">告诉React跳过重订阅</a>当传给<code class="gatsby-code-text">ChatAPI</code>的<code class="gatsby-code-text">props.friend.id</code>没有改变时。）</p>\n<p>像使用<code class="gatsby-code-text">useState</code>一样,你可以在一个组件中使用多个副作用：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">FriendStatusWithCounter</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span>    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token template-string"><span class="token string">`You clicked </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> times`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>isOnline<span class="token punctuation">,</span> setIsOnline<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span>    ChatAPI<span class="token punctuation">.</span><span class="token function">subscribeToFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      ChatAPI<span class="token punctuation">.</span><span class="token function">unsubscribeFromFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">handleStatusChange</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setIsOnline</span><span class="token punctuation">(</span>status<span class="token punctuation">.</span>isOnline<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<p>有了钩子，你可以在组件中按照代码块的相关性组织副作用，而不是基于生命周期方法强制进行切分。</p>\n<blockquote>\n<p>详细解释</p>\n<p>你可以在这个页面上了解到更多关于<code class="gatsby-code-text">useEffect</code>的信息: <a href="/docs/hooks-effect.html">使用副作用钩子</a>。</p>\n</blockquote>\n<h2 id="️-钩子的使用规则"><a href="#%EF%B8%8F-%E9%92%A9%E5%AD%90%E7%9A%84%E4%BD%BF%E7%94%A8%E8%A7%84%E5%88%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>✌️ 钩子的使用规则</h2>\n<p>钩子就是强制实现了两条额外规则的Javascript函数：</p>\n<ul>\n<li>只能在<em>顶层</em>调用钩子。不要在循环，控制流和嵌套的函数中调用钩子。</li>\n<li>只能<em>从React的函数式组件中</em>调用钩子。不要在常规的JavaScript函数中调用钩子。（此外，你也可以在你的自定义钩子中调用钩子。我们马上就会讲到它。）</li>\n</ul>\n<p>我们提供了一个<a href="https://www.npmjs.com/package/eslint-plugin-react-hooks">语法检查插件</a>以自动执行这些规则。我们能够理解开发者在一开始可能会对这些规则感到困惑或束手束脚，但它们正是保证钩子正确运行的基石。</p>\n<blockquote>\n<p>详细解释</p>\n<p>你可以在这个页面上了解到更多关于这些规则的信息: <a href="/docs/hooks-rules.html">钩子的使用规则</a>。</p>\n</blockquote>\n<h2 id="-构建你自己的钩子"><a href="#-%E6%9E%84%E5%BB%BA%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84%E9%92%A9%E5%AD%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>💡 构建你自己的钩子</h2>\n<p>有时你希望在组件之间复用一些状态逻辑。在之前有两种流行的解决方案：<a href="/docs/higher-order-components.html">高阶组件</a> and <a href="/docs/render-props.html">渲染属性</a>。现在你可以利用自定义钩子做到这些而不用在你的组件树中添加更多的组件。</p>\n<p>在此之前，我们展示了一个<code class="gatsby-code-text">FriendStatus</code> 组件，它可以调用<code class="gatsby-code-text">useState</code>和<code class="gatsby-code-text">useEffect</code>钩子来订阅一个朋友的在线状态。假设我们想要在其他的组件中复用这个订阅逻辑。</p>\n<p>首先，我们要把这个逻辑抽取到名为<code class="gatsby-code-text">useFriendStatus</code>的自定义钩子中：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="gatsby-highlight-code-line"><span class="token keyword">function</span> <span class="token function">useFriendStatus</span><span class="token punctuation">(</span>friendID<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span>  <span class="token keyword">const</span> <span class="token punctuation">[</span>isOnline<span class="token punctuation">,</span> setIsOnline<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">handleStatusChange</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setIsOnline</span><span class="token punctuation">(</span>status<span class="token punctuation">.</span>isOnline<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    ChatAPI<span class="token punctuation">.</span><span class="token function">subscribeToFriendStatus</span><span class="token punctuation">(</span>friendID<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      ChatAPI<span class="token punctuation">.</span><span class="token function">unsubscribeFromFriendStatus</span><span class="token punctuation">(</span>friendID<span class="token punctuation">,</span> handleStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> isOnline<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这个钩子需要一个<code class="gatsby-code-text">friendID</code>作为参数，返回你的朋友是否在线。</p>\n<p>现在，我们可以同时在两个组件中使用它：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">FriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">const</span> isOnline <span class="token operator">=</span> <span class="token function">useFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>isOnline <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'Loading...\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> isOnline <span class="token operator">?</span> <span class="token string">\'Online\'</span> <span class="token punctuation">:</span> <span class="token string">\'Offline\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">FriendListItem</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">const</span> isOnline <span class="token operator">=</span> <span class="token function">useFriendStatus</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> isOnline <span class="token operator">?</span> <span class="token string">\'green\'</span> <span class="token punctuation">:</span> <span class="token string">\'black\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>name<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>两个组件中的状态是完全独立的。钩子只复用状态逻辑而不是状态本身。事实上，每一次调用钩子都会得到一个完全孤立的状态——所以你甚至可以在同一个组件中使用两次相同的自定义钩子。</p>\n<p>自定义钩子更多的是一个约定而不是特性。如果一个函数的名字以 ”<code class="gatsby-code-text">use</code>” 开头并且调用了其他的钩子，我们就称它为自定义钩子。<code class="gatsby-code-text">useSomething</code>的命名约定方便语法检查插件找到代码中钩子的错误使用。</p>\n<p>自定义钩子可以覆盖非常多的用例，像表单处理，动画，声明式订阅，定时器，还有很多我们还没有考虑到的。我们非常激动能够看到React社区提出的自定义钩子。</p>\n<blockquote>\n<p>详细解释</p>\n<p>你可以在专门的页面上了解到更多关于自定义钩子的信息:<a href="/docs/hooks-custom.html">构建你自己的钩子</a>。</p>\n</blockquote>\n<h2 id="-其他钩子"><a href="#-%E5%85%B6%E4%BB%96%E9%92%A9%E5%AD%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🔌 其他钩子</h2>\n<p>还有一些不太常用的内置钩子，也许你会觉得非常有用。使用<a href="/docs/hooks-reference.html#usecontext"><code class="gatsby-code-text">useContext</code></a>可以订阅React context而不用引入嵌套：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>LocaleContext<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="/docs/hooks-reference.html#usereducer"><code class="gatsby-code-text">useReducer</code></a>则允许你使用一个reducer来管理一个复杂组件的局部状态（local state）：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">Todos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>todosReducer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>详细解释</p>\n<p>你可以在这个页面上了解到所有的内置钩子: <a href="/docs/hooks-reference.html">钩子API参考</a>。</p>\n</blockquote>\n<h2 id="下一步"><a href="#%E4%B8%8B%E4%B8%80%E6%AD%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>下一步</h2>\n<p>噢，太快了！如果有些地方没有讲清楚或者你想了解更多细节，你可以阅读下一页，从<a href="/docs/hooks-state.html">状态钩子</a>这篇文档开始。</p>\n<p>你也可以查看<a href="/docs/hooks-reference.html">钩子API参考</a>和<a href="/docs/hooks-faq.html">钩子常见问题</a>。</p>\n<p>最后，不要错过<a href="/docs/hooks-intro.html">介绍页面</a>，这里解释了为什么我们要引入钩子以及我们如何同时使用类和钩子，而无需重写我们的应用。</p>',
frontmatter:{title:"Hooks at a Glance",next:"hooks-state.html",prev:"hooks-intro.html"},fields:{path:"docs/hooks-overview.md",slug:"docs/hooks-overview.html"}}},pathContext:{slug:"docs/hooks-overview.html"}}}});
//# sourceMappingURL=path---docs-hooks-overview-html-fc0cea1b0fdb5b7d39a8.js.map