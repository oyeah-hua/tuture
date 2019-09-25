(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{187:function(t,e,i){"use strict";i.r(e);var s=i(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p",[t._v("Following commands assume that you are working on a Git repo. If you does not have Git on your machine, please download it from "),i("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),i("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("Initialize a Tuture tutorial.")]),t._v(" "),i("p",[t._v("This command will go through following procedures:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[i("p",[t._v("Create "),i("strong",[t._v("tuture.yml")]),t._v(" which is everything you need to write your tutorial (refer to "),i("router-link",{attrs:{to:"./tuture-yml-spec.html"}},[t._v("tuture.yml Specification")]),t._v(" for detailed information), and "),i("strong",[t._v(".tuture")]),t._v(" directory which houses diff data of each commit.")],1)]),t._v(" "),t._m(5)]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),i("p",[t._v("Do not ask for prompts and fill in default values.")]),t._v(" "),t._m(10),t._v(" "),i("p",[t._v("Output usage information.")]),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("Update Tuture files to the latest repo.")]),t._v(" "),i("p",[t._v("Tuture will do following two things by extracting latest changes from Git logs:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),i("p",[t._v("Output usage information.")]),t._v(" "),t._m(17),t._v(" "),i("p",[t._v("Render your tutorial in the browser.")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),i("p",[t._v("Output usage information.")]),t._v(" "),t._m(23),t._v(" "),i("p",[t._v("Delete all tuture files.")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),i("p",[t._v("Destroy without confirmation.")]),t._v(" "),t._m(28),t._v(" "),i("p",[t._v("Output usage information.")]),t._v(" "),t._m(29),t._v(" "),i("p",[t._v("Log in to your "),i("a",{attrs:{href:"https://tuture.co",target:"_blank",rel:"noopener noreferrer"}},[t._v("tuture"),i("OutboundLink")],1),t._v(" account.")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),i("p",[t._v("Output usage information.")]),t._v(" "),t._m(32),t._v(" "),i("p",[t._v("Publish your tutorial to "),i("a",{attrs:{href:"https://tuture.co",target:"_blank",rel:"noopener noreferrer"}},[t._v("tuture.co"),i("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),i("p",[t._v("Output usage information.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"cli-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" CLI Commands")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"init"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[this._v("#")]),this._v(" init")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[i("p",[t._v("Check if Git is installed on your machine. If not, Tuture will stop and output error message.")])]),t._v(" "),i("li",[i("p",[t._v("Check if current working directory is a Git repo. If you are not in a Git repo and "),i("code",[t._v("-y")]),t._v(" option is not given, Tuture will ask for confirmation on whether you would like to initialize one. If your answer is no, Tuture will abort this command. Otherwise, Tuture will run "),i("code",[t._v("git init")]),t._v(" in cwd and move on.")])]),t._v(" "),i("li",[i("p",[t._v("Prompt you to answer following questions (if "),i("code",[t._v("-y")]),t._v(" or "),i("code",[t._v("--yes")]),t._v(" option is not given):")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("Prompt")]),t._v(" "),i("th",[t._v("Fields")]),t._v(" "),i("th",[t._v("Required/Optional")]),t._v(" "),i("th",[t._v("Default")]),t._v(" "),i("th",[t._v("Meaning")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Tutorial Name?")]),t._v(" "),i("td",[i("code",[t._v("name")])]),t._v(" "),i("td",[t._v("Required")]),t._v(" "),i("td",[t._v("My Awesome Tutorial")]),t._v(" "),i("td",[t._v("Title of this tutorial")])]),t._v(" "),i("tr",[i("td",[t._v("Topics")]),t._v(" "),i("td",[i("code",[t._v("topics")])]),t._v(" "),i("td",[t._v("Optional")]),t._v(" "),i("td",[t._v("-")]),t._v(" "),i("td",[t._v("Topics of this tutorial")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("You can separate multiple topics with any non alphanumeric characters, like "),e("code",[this._v("javascipt,react,mobx")]),this._v(" or "),e("code",[this._v("python/tensorflow")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Append following rule to your "),e("code",[this._v(".gitignore")]),this._v(" (Tuture will create one if not exists):")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# Tuture supporting files\n\n.tuture\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"6"}},[e("li",[this._v("Add Git post-commit hook for calling "),e("code",[this._v("tuture reload")]),this._v(" after each commit (create one if not exists).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"y-yes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#y-yes","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("-y")]),this._v(", "),e("code",[this._v("--yes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"h-help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h-help","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("-h")]),this._v(", "),e("code",[this._v("--help")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"reload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reload","aria-hidden":"true"}},[this._v("#")]),this._v(" reload")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Add diff file of new commits")]),this._v(" "),e("li",[this._v("Append new steps to "),e("strong",[this._v("tuture.yml")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("This command will be automatically invoked after each commit. You can also run this command manually.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Current working directory should already be initialized with "),e("code",[this._v("tuture init")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"h-help-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h-help-2","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("-h")]),this._v(", "),e("code",[this._v("--help")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#up","aria-hidden":"true"}},[this._v("#")]),this._v(" up")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Whether you have initialized with "),e("code",[this._v("tuture init")]),this._v(" or have just cloned a Tuture tutorial repository, running "),e("code",[this._v("tuture up")]),this._v(" both suffices.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("This command will invoke "),i("code",[t._v("tuture-server")]),t._v(" under the hood, which should have been installed together with "),i("code",[t._v("tuture-cli")]),t._v(". If "),i("code",[t._v("tuture-server")]),t._v(" is not available on your machine somehow, you can manually install it with "),i("strong",[t._v("npm")]),t._v(":")]),t._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[t._v("$ "),i("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g tuture\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Current working directory should already be a Git repository with "),e("strong",[this._v("tuture.yml")]),this._v(" present.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"h-help-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h-help-3","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("-h")]),this._v(", "),e("code",[this._v("--help")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"destroy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destroy","aria-hidden":"true"}},[this._v("#")]),this._v(" destroy")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Tuture will prompt you for confirmation. Type in truthy values ("),i("code",[t._v("y")]),t._v(", "),i("code",[t._v("yes")]),t._v(" and "),i("code",[t._v("1")]),t._v(") will delete "),i("strong",[t._v(".tuture")]),t._v(" directory and "),i("strong",[t._v("tuture.yml")]),t._v(". Type in falsy values ("),i("code",[t._v("n")]),t._v(", "),i("code",[t._v("no")]),t._v(", and "),i("code",[t._v("0")]),t._v(") or simply pressing Enter will cancel this command.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Current working directory should already be initialized with "),e("code",[this._v("tuture init")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-4","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"f-force"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#f-force","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("-f")]),this._v(", "),e("code",[this._v("--force")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"h-help-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h-help-4","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("-h")]),this._v(", "),e("code",[this._v("--help")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"login"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login","aria-hidden":"true"}},[this._v("#")]),this._v(" login")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-5","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"h-help-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h-help-5","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("-h")]),this._v(", "),e("code",[this._v("--help")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"publish"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publish","aria-hidden":"true"}},[this._v("#")]),this._v(" publish")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"options-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-6","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"h-help-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h-help-6","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("-h")]),this._v(", "),e("code",[this._v("--help")])])}],!1,null,null,null);r.options.__file="cli-commands.md";e.default=r.exports}}]);