webpackJsonp([0x736b267a14ca],{829:function(n,s){n.exports={data:{markdownRemark:{html:'<p>The unknown-prop warning will fire if you attempt to render a DOM element with a prop that is not recognized by React as a legal DOM attribute/property. You should ensure that your DOM elements do not have spurious props floating around.</p>\n<p>There are a couple of likely reasons this warning could be appearing:</p>\n<ol>\n<li>\n<p>Are you using <code>{...this.props}</code> or <code>cloneElement(element, this.props)</code>? Your component is transferring its own props directly to a child element (eg. <a href="https://reactjs.org/docs/transferring-props.html">https://reactjs.org/docs/transferring-props.html</a>). When transferring props to a child component, you should ensure that you are not accidentally forwarding props that were intended to be interpreted by the parent component.</p>\n</li>\n<li>\n<p>You are using a non-standard DOM attribute on a native DOM node, perhaps to represent custom data. If you are trying to attach custom data to a standard DOM element, consider using a custom data attribute as described <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes">on MDN</a>.</p>\n</li>\n<li>\n<p>React does not yet recognize the attribute you specified. This will likely be fixed in a future version of React. However, React currently strips all unknown attributes, so specifying them in your React app will not cause them to be rendered.</p>\n</li>\n<li>\n<p>You are using a React component without an upper case. React interprets it as a DOM tag because <a href="/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized">React JSX transform uses the upper vs. lower case convention to distinguish between user-defined components and DOM tags</a>.</p>\n</li>\n</ol>\n<hr>\n<p>To fix this, composite components should “consume” any prop that is intended for the composite component and not intended for the child component. Example:</p>\n<p><strong>Bad:</strong> Unexpected <code>layout</code> prop is forwarded to the <code>div</code> tag.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">MyDiv</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>layout <span class="token operator">===</span> <span class="token string">\'horizontal\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// BAD! Because you know for sure "layout" is not a prop that &lt;div> understands.</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">getHorizontalStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// BAD! Because you know for sure "layout" is not a prop that &lt;div> understands.</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">getVerticalStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>Good:</strong> The spread operator can be used to pull variables off props, and put the remaining props into a variable.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">MyDiv</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> layout<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> props\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>layout <span class="token operator">===</span> <span class="token string">\'horizontal\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">rest</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">getHorizontalStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">rest</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">getVerticalStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>Good:</strong> You can also assign the props to a new object and delete the keys that you’re using from the new object. Be sure not to delete the props from the original <code>this.props</code> object, since that object should be considered immutable.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">MyDiv</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">const</span> divProps <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">delete</span> divProps<span class="token punctuation">.</span>layout<span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>layout <span class="token operator">===</span> <span class="token string">\'horizontal\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">divProps</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">getHorizontalStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">divProps</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">getVerticalStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"Unknown Prop Warning",next:null,prev:null},fields:{path:"warnings/unknown-prop.md",slug:"warnings/unknown-prop.html"}}},pathContext:{slug:"warnings/unknown-prop.html"}}}});
//# sourceMappingURL=path---warnings-unknown-prop-html-2c314b2566a528a5442b.js.map