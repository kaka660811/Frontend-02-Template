第四章  浏览器工作原理
一、浏览器工作原理总论
	（一）浏览器由以下5个步骤完整了整体的渲染的
		URL
			http
		HTML
			parse
				parse是一个文本编辑和分析的初级的技术
		DOM
			CSS computing
				dom树上对应哪些css样式，哪些样式会发生叠加，那些样式会发生覆盖，这就是所谓的CSS computing
		DOM with CSS
			layout
		DOM with position
			render
		bitmap
			计算机语言的术语
				浏览器最后显示出来的，图片的形式
			只有bitmap传给显卡驱动设备，才能转换成人眼识别的光信号
	（二）所有浏览器的最终目标就是从URL最后得到一张bitmap
		以上就是浏览器的基础渲染流程

二、状态机
	基础知识-处理字符串
	js实现状态机的一种非常好的方式是通过函数

三、HTTP请求
	ISO-OSI七层网络模型
		应用
		表示
		会话
		传输
			TCP/UDP
				tcp-准确传输，对应的是流的概念
				tcp是给计算机软件用的数据，对应端口号，由不同的端口提供给相对应的软件数据
				tcp对应了node中的 net包，require('net')
		网络
			Internet
				对应的是IP协议——包的概念
		数据链路
		物理
	HTTP相关知识
		1、HTTP是一个文本协议
			即HTTP是字符串文本，而不是二进制流
		2、HTTP的开头是request line
			包含了请求的方法（method）、path已经HTTP协议的版本号
			content-Type,决定了request body的解析方式，分隔符等
			属性以换行的方式分割
			request line和request body通过空行来分割
			request body通过\r\n来作为分隔符的
	实现一个HTTP请求
		首先从用法上去考虑实现，一般实现一个基础库，都是从它的使用去考虑它的接口的形式
		实现

四、HTML解析
	用FMS实现HTML解析的分析
	解析标签
	创建元素
	处理属性
	用token构建dom树
	将文本节点加到DOM树
