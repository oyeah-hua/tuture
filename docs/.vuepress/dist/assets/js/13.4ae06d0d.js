(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{181:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("图雀基于 Git 仓库进行教程写作，因此首先要确保 Git 安装成功。如果没有安装过，请访问 "),e("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-scm.com"),e("OutboundLink")],1),t._v(" 下载。安装完成后，在终端（控制台）中运行以下命令以确认安装成功：")]),t._v(" "),t._m(2),e("p",[t._v("如果能够成功显示版本信息，则说明已安装成功！")]),t._v(" "),t._m(3),t._v(" "),e("ol",[e("li",[e("p",[t._v("访问我们的 "),e("a",{attrs:{href:"https://github.com/tutureproject/tuture/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub release 页面"),e("OutboundLink")],1),t._v("，下载适合您机器运行的压缩包。")])]),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("大功告成！请继续阅读"),e("router-link",{attrs:{to:"./start-writing.html"}},[t._v("开始写作")]),t._v("。")],1),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("如果已经有了 "),e("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node"),e("OutboundLink")],1),t._v(" 环境，你便可以直接通过 "),e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),e("OutboundLink")],1),t._v("  或 "),e("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn"),e("OutboundLink")],1),t._v(" 这样的包管理器来安装 Tuture。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),e("p",[t._v("如果你偏爱 "),e("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn"),e("OutboundLink")],1),t._v(" 安装：")]),t._v(" "),t._m(15),t._m(16),t._v(" "),e("p",[t._v("如果你想要体验最新的功能或是想要为 Tuture 贡献源代码，那么推荐从源代码安装。首先请访问 "),e("a",{attrs:{href:"https://github.com/tutureproject/tuture",target:"_blank",rel:"noopener noreferrer"}},[t._v("tuture"),e("OutboundLink")],1),t._v(" 的 GitHub 仓库并 clone 到本地，进入仓库后进行安装：")]),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[this._v("#")]),this._v(" Git")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("git version\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"下载开箱可用的可执行文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载开箱可用的可执行文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载开箱可用的可执行文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("将二进制可执行文件 "),s("code",[this._v("tuture")]),this._v(" （在 Windows 上是 "),s("code",[this._v("tuture.exe")]),this._v("）解压缩。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("将此可执行文件添加到系统路径上去：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("对 Linux/macOS 用户，打开终端并进入到 tuture 可执行文件所在的路径：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" /path/to/tuture\n$ "),s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("mv")]),this._v(" tuture /usr/local/bin\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("对 Windows 用户，只需将可执行文件以管理员身份添加到 "),s("code",[this._v("C:\\Windows")]),this._v(" 文件夹中。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("通过运行 "),s("code",[this._v("tuture --version")]),this._v(" 命令确认 "),s("code",[this._v("tuture")]),this._v(" 可执行文件安装成功。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("对于 Linux/macOS 用户，以下是所有命令的总结（记得复制正确的下载链接）：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/tutureproject/tuture/releases/download/"),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("VERSION"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/tuture-"),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OS"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("-"),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARCH"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".tar.gz\n$ "),e("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf tuture-"),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OS"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("-"),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARCH"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".tar.gz\n$ "),e("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("mv")]),t._v(" tuture /usr/local/bin\n$ tuture --version\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"用包管理器安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用包管理器安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 用包管理器安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("警告")]),this._v(" "),s("p",[this._v("请确保下载并安装的 Node 版本不小于 8.0.0！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" i -g tuture\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("你可能需要 "),s("code",[this._v("sudo")]),this._v("（对于 Windows 用户来说是管理员身份）来全局安装 npm 包。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ yarn global add tuture\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"从源代码安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从源代码安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 从源代码安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" i -g\n")])])])}],!1,null,null,null);r.options.__file="installation.md";s.default=r.exports}}]);