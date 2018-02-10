webpackJsonp([93563551560919],{786:function(n,a){n.exports={data:{markdownRemark:{html:'<p><a href="/docs/components-and-props.html">组件</a> 能够让你将UI分割成独立的、可重用的部分，并对每一部分单独考量。<a href="/docs/react-api.html"><code>React</code></a>提供了<code>React.Component</code> 。</p>\n<h2 id="概览"><a href="#%E6%A6%82%E8%A7%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>概览</h2>\n<p><code>React.Component</code>是一个抽象基础类，因此直接引用<code>React.Component</code>几乎没意义。相反，你通常会继承自它，并至少定义一个<a href="#render"><code>render()</code></a>方法。</p>\n<p>通常你定义一个React组件相当于一个纯<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes">JavaScript类</a>：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>若你仍未使用 ES6，你可以使用 <a href="/docs/react-api.html#createclass"><code>create-react-class</code></a>模块。查看 <a href="/docs/react-without-es6.html">Using React without ES6</a> 了解更多。</p>\n<h3 id="组件生命周期"><a href="#%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>组件生命周期</h3>\n<p>每一个组件都有几个你可以重写以让代码在处理环节的特定时期运行的“生命周期方法”。方法中带有前缀 <strong><code>will</code></strong> 的在特定环节之前被调用，而带有前缀 <strong><code>did</code></strong> 的方法则会在特定环节之后被调用。</p>\n<h4 id="装配"><a href="#%E8%A3%85%E9%85%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>装配</h4>\n<p>这些方法会在组件实例被创建和插入DOM中时被调用：</p>\n<ul>\n<li><a href="#constructor"><code>constructor()</code></a></li>\n<li><a href="#componentwillmount"><code>componentWillMount()</code></a></li>\n<li><a href="#render"><code>render()</code></a></li>\n<li><a href="#componentdidmount"><code>componentDidMount()</code></a></li>\n</ul>\n<h4 id="更新"><a href="#%E6%9B%B4%E6%96%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更新</h4>\n<p>属性或状态的改变会触发一次更新。当一个组件在被重渲时，这些方法将会被调用：</p>\n<ul>\n<li><a href="#componentwillreceiveprops"><code>componentWillReceiveProps()</code></a></li>\n<li><a href="#shouldcomponentupdate"><code>shouldComponentUpdate()</code></a></li>\n<li><a href="#componentwillupdate"><code>componentWillUpdate()</code></a></li>\n<li><a href="#render"><code>render()</code></a></li>\n<li><a href="#componentdidupdate"><code>componentDidUpdate()</code></a></li>\n</ul>\n<h4 id="卸载"><a href="#%E5%8D%B8%E8%BD%BD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>卸载</h4>\n<p>当一个组件被从DOM中移除时，该方法被调用：</p>\n<ul>\n<li><a href="#componentwillunmount"><code>componentWillUnmount()</code></a></li>\n</ul>\n<h3 id="其他api"><a href="#%E5%85%B6%E4%BB%96api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>其他API</h3>\n<p>每一个组件还提供了其他的API：</p>\n<ul>\n<li><a href="#setstate"><code>setState()</code></a></li>\n<li><a href="#forceupdate"><code>forceUpdate()</code></a></li>\n</ul>\n<h3 id="类属性"><a href="#%E7%B1%BB%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>类属性</h3>\n<ul>\n<li><a href="#defaultprops"><code>defaultProps</code></a></li>\n<li><a href="#displayname"><code>displayName</code></a></li>\n</ul>\n<h3 id="实例属性"><a href="#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>实例属性</h3>\n<ul>\n<li><a href="#props"><code>props</code></a></li>\n<li><a href="#state"><code>state</code></a></li>\n</ul>\n<hr>\n<h2 id="参考"><a href="#%E5%8F%82%E8%80%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>参考</h2>\n<h3 id="render"><a href="#render" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>render()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>render()</code>方法是必须的。</p>\n<p>当被调用时，其应该检查<code>this.props</code> 和 <code>this.state</code>并返回以下类型中的一个:</p>\n<ul>\n<li><strong>React元素。</strong> 通常是由 JSX 创建。该元素可能是一个原生DOM组件的表示，如<code>&#x3C;div /></code>，或者是一个你定义的合成组件。</li>\n<li><strong>字符串和数字。</strong> 这些将被渲染为 DOM 中的 text node。</li>\n<li><strong>Portals。</strong> 由 <a href="/docs/portals.html"><code>ReactDOM.createPortal</code></a> 创建。</li>\n<li><code>null</code>。 什么都不渲染。</li>\n<li><strong>布尔值。</strong> 什么都不渲染。（通常存在于 <code>return test &#x26;&#x26; &#x3C;Child /></code>写法，其中 <code>test</code> 是布尔值。）</li>\n</ul>\n<p>当返回<code>null</code> 或 <code>false</code>时，<code>ReactDOM.findDOMNode(this)</code> 将返回 <code>null</code>。</p>\n<p><code>render()</code>函数应该纯净，意味着其不应该改变组件的状态，其每次调用都应返回相同的结果，同时不直接和浏览器交互。若需要和浏览器交互，将任务放在<code>componentDidMount()</code>阶段或其他的生命周期方法。保持<code>render()</code> 方法纯净使得组件更容易思考。</p>\n<blockquote>\n<p>注意</p>\n<p>若 <a href="#shouldcomponentupdate"><code>shouldComponentUpdate()</code></a>返回false，<code>render()</code>函数将不会被调用。</p>\n</blockquote>\n<h4 id="fragments"><a href="#fragments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fragments</h4>\n<p>你还可以通过使用一个数组让<code>render()</code>返回多个元素：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>First item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>注意</p>\n<p>不要忘了给元素<a href="/docs/lists-and-keys.html#keys">添加key</a>来避免key warning。</p>\n</blockquote>\n<hr>\n<h3 id="constructor"><a href="#constructor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>constructor()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>React组件的构造函数将会在装配之前被调用。当为一个<code>React.Component</code>子类定义构造函数时，你应该在任何其他的表达式之前调用<code>super(props)</code>。否则，<code>this.props</code>在构造函数中将是未定义，并可能引发异常。</p>\n<p>构造函数是初始化状态的合适位置。若你不初始化状态且不绑定方法，那你也不需要为你的React组件定义一个构造函数。</p>\n<p>可以基于属性来初始化状态。这样有效地“分离（forks）”属性并根据初始属性设置状态。这有一个有效的<code>React.Component</code>子类构造函数的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> props<span class="token punctuation">.</span>initialColor\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>意识到这模式，任何的属性更新不会使得状态是最新的。保证属性和状态同步，你通常想要<a href="/docs/lifting-state-up.html">状态提升</a>。</p>\n<p>若你通过使用它们为状体“分离”属性，你可能也想要实现<a href="#componentwillreceiveprops"><code>componentWillReceiveProps(nextProps)</code></a>以保持最新的状态。但状态提升通常来说更容易以及更少的异常。</p>\n<hr>\n<h3 id="componentwillmount"><a href="#componentwillmount" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>componentWillMount()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>componentWillMount()</code>在装配发生前被立刻调用。其在<code>render()</code>之前被调用，因此在这方法里同步地设置状态将不会触发重渲。避免在该方法中引入任何的副作用或订阅。</p>\n<p>这是唯一的会在服务端渲染调起的生命周期钩子函数。通常地，我们推荐使用<code>constructor()</code>来替代。</p>\n<hr>\n<h3 id="componentdidmount"><a href="#componentdidmount" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>componentDidMount()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>componentDidMount()</code>在组件被装配后立即调用。初始化使得DOM节点应该进行到这里。若你需要从远端加载数据，这是一个适合实现网络请求的地方。在该方法里设置状态将会触发重渲。</p>\n<hr>\n<h3 id="componentwillreceiveprops"><a href="#componentwillreceiveprops" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>componentWillReceiveProps()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>componentWillReceiveProps()</code>在装配了的组件接收到新属性前调用。若你需要更新状态响应属性改变（例如，重置它），你可能需对比<code>this.props</code>和<code>nextProps</code>并在该方法中使用<code>this.setState()</code>处理状态改变。</p>\n<p>注意即使属性未有任何改变，React可能也会调用该方法，因此若你想要处理改变，请确保比较当前和之后的值。这可能会发生在当父组件引起你的组件重渲。</p>\n<p>在 <a href="#mounting">装配</a>期间，React并不会调用带有初始属性的<code>componentWillReceiveProps</code>方法。其仅会调用该方法如果某些组件的属性可能更新。调用<code>this.setState</code>通常不会触发<code>componentWillReceiveProps</code>。</p>\n<hr>\n<h3 id="shouldcomponentupdate"><a href="#shouldcomponentupdate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>shouldComponentUpdate()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>使用<code>shouldComponentUpdate()</code>以让React知道当前状态或属性的改变是否不影响组件的输出。默认行为是在每一次状态的改变重渲，在大部分情况下你应该依赖于默认行为。</p>\n<p>当接收到新属性或状态时，<code>shouldComponentUpdate()</code> 在渲染前被调用。默认为<code>true</code>。该方法并不会在初始化渲染或当使用<code>forceUpdate()</code>时被调用。</p>\n<p>当他们状态改变时，返回<code>false</code> 并不能阻止子组件重渲。</p>\n<p>当前，若<code>shouldComponentUpdate()</code>返回<code>false</code>，而后<a href="#componentwillupdate"><code>componentWillUpdate()</code></a>，<a href="#render"><code>render()</code></a>， 和 <a href="#componentdidupdate"><code>componentDidUpdate()</code></a>将不会被调用。注意，在未来React可能会将<code>shouldComponentUpdate()</code>作为一个线索而不是一个严格指令，返回<code>false</code>可能仍然使得组件重渲。</p>\n<p>在观察后，若你判定一个具体的组件很慢，你可能需要调整其从<a href="/docs/react-api.html#react.purecomponent"><code>React.PureComponent</code></a>继承，其实现了带有浅属性和状态比较的<code>shouldComponentUpdate()</code>。若你确信想要手写，你可能需要用<code>this.props</code>和<code>nextProps</code>以及<code>this.state</code> 和 <code>nextState</code>比较，并返回<code>false</code>以告诉React更新可以被忽略。</p>\n<hr>\n<h3 id="componentwillupdate"><a href="#componentwillupdate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>componentWillUpdate()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">componentWillUpdate</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>当接收到新属性或状态时，<code>componentWillUpdate()</code>为在渲染前被立即调用。在更新发生前，使用该方法是一次准备机会。该方法不会在初始化渲染时调用。</p>\n<p>注意你不能在这调用<code>this.setState()</code>，若你需要更新状态响应属性的调整，使用<code>componentWillReceiveProps()</code>代替。</p>\n<blockquote>\n<p>注意</p>\n<p>若<a href="#shouldcomponentupdate"><code>shouldComponentUpdate()</code></a>返回false，<code>componentWillUpdate()</code>将不会被调用。</p>\n</blockquote>\n<hr>\n<h3 id="componentdidupdate"><a href="#componentdidupdate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>componentDidUpdate()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> prevState<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>componentDidUpdate()</code>会在更新发生后立即被调用。该方法并不会在初始化渲染时调用。</p>\n<p>当组件被更新时，使用该方法是操作DOM的一次机会。这也是一个适合发送请求的地方，要是你对比了当前属性和之前属性（例如，如果属性没有改变那么请求也就没必要了）。</p>\n<blockquote>\n<p>注意</p>\n<p>若<a href="#shouldcomponentupdate"><code>shouldComponentUpdate()</code></a>返回false，<code>componentDidUpdate()</code>将不会被调用。</p>\n</blockquote>\n<hr>\n<h3 id="componentwillunmount"><a href="#componentwillunmount" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>componentWillUnmount()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>componentWillUnmount()</code>在组件被卸载和销毁之前立刻调用。可以在该方法里处理任何必要的清理工作，例如解绑定时器，取消网络请求，清理任何在<code>componentDidMount</code>环节创建的DOM元素。</p>\n<hr>\n<h3 id="setstate"><a href="#setstate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>setState()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">setState</span><span class="token punctuation">(</span>updater<span class="token punctuation">,</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>setState()</code>将需要处理的变化塞入（译者注：setState源码中将一个需要改变的变化存放到组件的state对象中，采用队列处理）组件的state对象中，\n并告诉该组件及其子组件需要用更新的状态来重新渲染。这是用于响应事件处理和服务端响应的更新用户界面的主要方式。</p>\n<p>将<code>setState()</code>认为是一次<em>请求</em>而不是一次立即执行更新组件的命令。为了更为客观的性能，React可能会推迟它，稍后会一次性更新这些组件。React不会保证在setState之后，能够立刻拿到改变的结果。</p>\n<p><code>setState()</code>不是立刻更新组件。其可能是批处理或推迟更新。这使得在调用<code>setState()</code>后立刻读取<code>this.state</code>的一个潜在陷阱。代替地，使用<code>componentDidUpdate</code>或一个<code>setState</code>回调（<code>setState(updater, callback)</code>），当中的每个方法都会保证在更新被应用之后触发。若你需要基于之前的状态来设置状态，阅读下面关于<code>updater</code>参数的介绍。</p>\n<p>除非<code>shouldComponentUpdate()</code> 返回<code>false</code>，否则<code>setState()</code>永远都会导致重渲。若使用可变对象同时条件渲染逻辑无法在<code>shouldComponentUpdate()</code>中实现，仅当新状态不同于之前状态时调用<code>setState()</code>，将避免不必要的重渲。</p>\n<p>第一个函数是带签名的<code>updater</code>函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">(</span>prevState<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token operator">=></span> stateChange\n</code></pre>\n      </div>\n<p><code>prevState</code>是之前状态的引用。其不应该被直接改变。代替地，改变应该通过构建一个来自于<code>prevState</code> 和 <code>props</code>输入的新对象来表示。例如，假设我们想通过<code>props.step</code>在状态中增加一个值：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prevState<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>counter<span class="token punctuation">:</span> prevState<span class="token punctuation">.</span>counter <span class="token operator">+</span> props<span class="token punctuation">.</span>step<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>updater函数接收到的<code>prevState</code> 和 <code>props</code>保证都是最新的。updater的输出是和<code>prevState</code>的浅合并。</p>\n<p><code>setState()</code>的第二个参数是一个可选地回调函数，其将会在<code>setState</code>执行完成同时组件被重渲之后执行。通常，对于这类逻辑，我们推荐使用<code>componentDidUpdate</code>。</p>\n<p>你可以选择性地传递一个对象作为 <code>setState()</code>的第一个参数而不是一个函数：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">setState</span><span class="token punctuation">(</span>stateChange<span class="token punctuation">,</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>其仅是将<code>stateChange</code>浅合并到新状态中。例如，调整购物车中物品数量：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>quantity<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>这一形式的<code>setState()</code>也是异步的，并在相同的周期中多次调用可能会被合并到一起。例如，若你在相同的周期中尝试多次增加一件物品的数量，其等价于：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>\n  previousState<span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>quantity<span class="token punctuation">:</span> state<span class="token punctuation">.</span>quantity <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>quantity<span class="token punctuation">:</span> state<span class="token punctuation">.</span>quantity <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>之后的调用在同一周期中将会重写之前调用的值，因此数量仅会被加一。若之后的状态依赖于之前的状态，我们推荐使用updater函数形式：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prevState<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>counter<span class="token punctuation">:</span> prevState<span class="token punctuation">.</span>quantity <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>更多细节，查看<a href="/docs/state-and-lifecycle.html">State &#x26; 生命周期指南</a>。</p>\n<hr>\n<h3 id="forceupdate"><a href="#forceupdate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>forceUpdate()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>component<span class="token punctuation">.</span><span class="token function">forceUpdate</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>默认情况，当你的组件或状态发生改变，你的组件将会重渲。若你的<code>render()</code>方法依赖其他数据，你可以通过调用<code>forceUpdate()</code>来告诉React组件需要重渲。</p>\n<p>调用<code>forceUpdate()</code>将会导致组件的 <code>render()</code>方法被调用，并忽略<code>shouldComponentUpdate()</code>。这将会触发每一个子组件的生命周期方法，涵盖，每个子组件的<code>shouldComponentUpdate()</code> 方法。若当标签改变，React仅会更新DOM。</p>\n<p>通常你应该尝试避免所有<code>forceUpdate()</code> 的用法并仅在<code>render()</code>函数里从<code>this.props</code>和<code>this.state</code>读取数据。</p>\n<hr>\n<h2 id="类属性-1"><a href="#%E7%B1%BB%E5%B1%9E%E6%80%A7-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>类属性</h2>\n<h3 id="defaultprops"><a href="#defaultprops" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>defaultProps</code></h3>\n<p><code>defaultProps</code>可以被定义为组件类的一个属性，用以为类设置默认的属性。这对于未定义（undefined）的属性来说有用，而对于设为空（null）的属性并没用。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">CustomButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\nCustomButton<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> <span class="token string">\'blue\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>若未设置<code>props.color</code>，其将被设置默认为<code>\'blue\'</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomButton</span> <span class="token punctuation">/></span></span> <span class="token punctuation">;</span> <span class="token comment">// props.color will be set to blue</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>若<code>props.color</code>设为null，则其值则为null：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomButton</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">;</span> <span class="token comment">// props.color will remain null</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<h3 id="displayname"><a href="#displayname" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>displayName</code></h3>\n<p><code>displayName</code>被用在调试信息中。JSX会自动设置该值；查看<a href="/docs/jsx-in-depth.html">深入JSX</a>。</p>\n<hr>\n<h2 id="实例属性-1"><a href="#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>实例属性</h2>\n<h3 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>props</code></h3>\n<p><code>this.props</code>包含了组件该调用者定义的属性。查看<a href="/docs/components-and-props.html">组件 &#x26; Props</a>关于属性的介绍。</p>\n<p>特别地，<code>this.props.children</code>是一个特别属性，其通常由JSX表达式中的子标签定义，而不是标签本身。</p>\n<h3 id="state"><a href="#state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>state</code></h3>\n<p>状态是该组件的特定数据，其可能改变多次。状态由用户定义，且其应为纯JavaScript对象。</p>\n<p>若你不在<code>render()</code>方法中使用它，其不应该该被放在状态上。例如，你可直接将timer IDs放在实例上。</p>\n<p>查看<a href="/docs/state-and-lifecycle.html">State &#x26; 生命周期</a>了解更多关于状态的信息。</p>\n<p>永远不要直接改变<code>this.state</code>，因为调用<code>setState()</code>会替换你之前做的改变。将<code>this.state</code>当成不可变的。</p>',
frontmatter:{title:"React.Component",next:null,prev:null},fields:{path:"docs/reference-react-component.md",slug:"docs/react-component.html"}}},pathContext:{slug:"docs/react-component.html"}}}});
//# sourceMappingURL=path---docs-react-component-html-953a23effbdb878f7f7f.js.map