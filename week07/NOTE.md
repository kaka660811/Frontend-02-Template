第七周 重学css（文字与排版的属性）
一、css排版 | 盒
	三个容易混淆的概念
		标签
			对应的是源代码
		元素
			DOM树中存储着元素和其他类型的节点（node）,节点并不一定是元素，它可能是注释节点，可能是文本节点，可能是CDATA节点，可能是DTD声明等，这些都存在DOM书中，但并不是元素。
			元素是一个语义词，是我们脑海里的一个概念
		盒
			元素和盒是一对多的关系
			很多情况下，很多元素会产生多个盒，比如inline元素因为换行，可能产生多个盒；又比如带伪元素的这些元素也会产生多个盒。
			表现层的概念
			盒模型
				盒是我们排版和渲染中用的基本单位
				盒模型是一个多层结构
				盒模型最里边的一层叫做content，即内容；在content和border之前有一圈空白，这一圈空白叫做padding，型的第二层叫做padding，也就是内边距；然后是border，border之外又有一圈空白，这个是margin，即外边距。
				padding和margin
					padding影响的是盒本身的排版，而margin影响的是盒外的排版。
					padding决定了盒模型里边可排布的content的区域的大小
					margin决定了盒周围要存在的空白区域的大小
				盒模型的宽度width也是有价值的，width可能被box-sizing这个属性去设置，这个属性常见的值有两个，即border-box和content-box
					content-box
						意味着我们设置的width的属性只包含着content的内容,所以这个时候盒在排版时占据的区块的大小是content+padding+border+margin, 但是它不符合人类的额认知
					border-box
						后来打的补丁，box包含了content、padding、border

二、css排版 | 正常流
	css排版有三代
	css排版——与文字的排版类似
	正常流排版
		收集盒与文字进行
		计算盒在行中的排布
		计算行与行的排布
	排版
		在行内是从左到右排
		在同时排版文字和图片如何做？
			block-level-box块级盒，自己独占一行
			inline-level-box行内盒，即一行内文字和图片一同排布
				也叫inline-box
	IFC 与 BFC
		inline-level-formating-context——排行内的
			行内格式化上下文，因为排版的时候总有信息需要存储，是从左往右排的这样一个方式
		block-level-formating-context——排块级的
			块级格式化上下文，同样是需要存储排版信息的，是从上到下排版的这样一个过程，包含若干个内容排满了一行的inline-box，或多个block-level-box

分支主题 3
学习笔记