webpackJsonp([0xec0228f6cb6a],{731:function(t,e){t.exports={data:{markdownRemark:{html:'<p>我们正在采用一个 RFC（“征求意见（request for comments）”）  的流程为 React 提供意见。</p>\n<p>受到  <a href="https://github.com/yarnpkg/rfcs">Yarn</a>、 <a href="https://github.com/emberjs/rfcs">Ember</a> 和 <a href="https://github.com/rust-lang/rfcs">Rust</a> 社区的激励，目标是能够让 React 核心团队成员和社区成员共同来设计新特性。这也是打算为参加这一项目的成员提供一个明确的路径：</p>\n<ul>\n<li>创建一个 RFC 文档详细描述你的建议。</li>\n<li>提交一个 PR 到 <a href="https://github.com/reactjs/rfcs">RFC 仓库</a>。</li>\n<li>将反馈合并到提案中。</li>\n<li>在经过讨论之后，核心团队可能会或可能不会采纳该 RFC。</li>\n<li>若该 RFC 被采纳，则 PR 会被合并。</li>\n</ul>\n<p>当 RFC 被同意在 React 中实现时则会被采纳。关于这一流程更为全面的描述可以查看该仓库的 <a href="https://github.com/reactjs/rfcs/blob/master/README.md">README</a>。具体细节可能会在之后有所改善。</p>\n<h2 id="谁能提交-rfc？"><a href="#%E8%B0%81%E8%83%BD%E6%8F%90%E4%BA%A4-rfc%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>谁能提交 RFC？</h2>\n<p>任何人！没有必须要求了解 React 的内部机制，也不期望你自己来实现这个提案。</p>\n<p>和我们其他的仓库一样，我们会在接受你的 PR 前要求你完成<a href="https://github.com/reactjs/rfcs#contributor-license-agreement-cla">贡献者许可协议（Contributor License Agreement）</a>。</p>\n<h2 id="什么类型的改变应作为-rfc-提交"><a href="#%E4%BB%80%E4%B9%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%94%B9%E5%8F%98%E5%BA%94%E4%BD%9C%E4%B8%BA-rfc-%E6%8F%90%E4%BA%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>什么类型的改变应作为 RFC 提交?</h2>\n<p>通常来讲，在实现前任何额外的评审或设计对于 RFC 来说都是不错的选择。根据过往经验，这意味着任何增加、改变，或移除一个 React API 类型的提案都可以。</p>\n<p>并不是每个变更都必须经过 RFC 的流程。Bug 修复或性能提升等不会修改 API 的提案将会直接被提交到主代码库中。</p>\n<p>我们现在有几个你可以参与为 React 贡献的仓库：</p>\n<ul>\n<li><strong>问题，bug 修复和代码变更提交到主仓库</strong> : <a href="https://github.com/facebook/react">facebook/react</a></li>\n<li><strong>官网及文档</strong>：<a href="https://github.com/reactjs/reactjs.org">reactjs/reactjs.org</a></li>\n<li><strong>需要在实现前进行额外评审的想法</strong>：<a href="https://github.com/reactjs/rfcs">reactjs/rfcs</a></li>\n</ul>\n<h2 id="关于新-api-的-rfc"><a href="#%E5%85%B3%E4%BA%8E%E6%96%B0-api-%E7%9A%84-rfc" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>关于新 API 的 RFC</h2>\n<p>结合我们刚发布的 RFC 流程，我们已经提交了一份<a href="https://github.com/reactjs/rfcs/pull/2">关于新版本背景的提案</a>。该提案已受到了许多来自社区的有价值的反馈，我们已将这些意见采纳到新设计的 API 中。</p>\n<p>该提案是一个如何组织 RFC 的好例子。我们期待收到你的提案！</p>',excerpt:"我们正在采用一个 RFC（“征求意见（request for comments）”）  的流程为 React 提供意见。 受到   Yarn 、  Ember  和  Rust  社区的激励，目标是能够让 React 核心团队成员和社区成员共同来设计新特性。这也是打算为参加这一项目的成员提供一个明确的路径： 创建一个 RFC 文档详细描述你的建议。 提交一个 PR 到  RFC 仓库 。 将反馈合并到提案中。 在经过讨论之后，核心团队可能会或可能不会采纳该 RFC。 若该 RFC 被采纳，则 PR 会被合并。 当 RFC 被同意在 React 中实现时则会被采纳。关于这一流程更为全面的描述可以查看该仓库的  README 。具体细节可能会在之后有所改善。 谁能提交 RFC？ 任何人！没有必须要求了解 React 的内部机制，也不期望你自己来实现这个提案。 和我们其他的仓库一样，我们会在接受你的 PR 前要求你完成 贡献者许可协议（Contributor License Agreement） 。 什么类型的改变应作为 RFC 提交? 通常来讲，在实现前任何额外的评审或设计对于 RFC…",frontmatter:{title:"Introducing the React RFC Process",next:null,prev:null,author:[{frontmatter:{name:"Andrew Clark",url:"https://twitter.com/acdlite"}}]},fields:{date:"December 07, 2017",path:"blog/2017-12-07-introducing-the-react-rfc-process.md",slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}}});
//# sourceMappingURL=path---blog-2017-12-07-introducing-the-react-rfc-process-html-83d11949defec4b729f6.js.map