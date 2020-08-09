学习笔记
css规则研究
	一、css的规则和标准比较分散，不容易查找
	二、css 2.1的语法
		https://www.w3.org/TR/CSS21/grammar.html#25.0
		https://www.w3.org/TR/css-syntax-3
		css2.1的产生式
			产生式的一些符号的含义
				方括号
					代表组的概念
				问号？
					代表可存在或者可以不存在
				单竖号|
					表示或的意思
				星号*
					表示0个或多个
				s
					代表空白符
				CDO 与 CDC
					CDO和CDC是HTML注释的起点和止点
					这个是一个历史包袱，以前的旧的浏览器，为了在HTML中不要把css规则显示出来，于是允许在HTML中用HTML注释把CSS规则注释起来，这样在旧的浏览器中会把HTML当做HTML注释来处理，在新的浏览器中可以把它当做CSS样式来处理
			styleSheet
				允许一个CHATSET
					就是@charset这样的结构
					charset要么没有，要么只有一个
				接下来允许若干个import
					import可以允许有多个
					import一定在charset之后，但是一定在其他规则的最前
				接下来样式表支持一个长列表
					长列表有三种结构
						ruleset
							普通的css规则，一个选择器后跟的样式
						media
							在2.1的时候已经有了，在css3后有media query这个东西，现在的media比2.1定义的要复杂得多
						page
							打印的信息，一般来说，浏览器上市不会用太多页面信息的
			2.1   css的总体结构概述
				@charset
					encoding 
					charset我们很少用，因为一般来说公司都会给css制定一个与HTML一致的encoding的模式
					css通过encoding转义成ASCLL里面的内容，因为大部分的字符集都能兼容ASCLL字符集
				@import
				rules，可以出现多个，而且对顺序没有要求
					media
					page
					rule
			什么是at-rule 和  普通rule
				css2.1
					at-rule
						@charset
						@import
						@media
						@page
					普通的css rule
	三、css@规则
		子主题 1
		@rule
			@charset
			@import
			@media
			@page
			@keframes
			@font-face
			@support
			@namespace
			@counter-style
		三个被扔进历史的@rule
			document
			color-profile
			font-feature
	四、css规则
		选择器
			selector规则
				https://www.w3.org/TR/selectors-3/
					实现得比较好的标准
				https://www.w3.org/TR/selectors-4/
			具体表现
		生命
			key
				Properties
				Variables:  https://www.w3.org/TR/css-variables/
					css variables又引入了一种新的key值，变量。是以双减号开头的
			value
				https://www.w3.org/TR/css-values-4/
				除了一般的值，也还有可能包含函数值

css收集标准

css选择器
	选择器的语法
	选择器的优先级

伪类选择器
	:any-link
	:link   :visited
	:hover
	:active
	:focus

伪元素选择器
	:before
	:after
	:first-line
	:first-letter
