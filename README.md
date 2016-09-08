# RNDemo
记录 react native 的学习过程  
同时支持 Android 和 IOS

#Antd-mobile
加入对 antd-mobile 的支持，后续将使用它的组件进行开发  
https://github.com/ant-design/ant-design-mobile  
需要注意的是，引入方式稍有区别：import Button from 'antd-mobile/lib/button';  

# 网络
加入网络访问请求模块，解析后展示其中一个字段  
需要注意的是,ios9默认不支持 https 之外的请求，需要在info.plist中修改设置  
`<?xml version="1.0" encoding="UTF-8"?>
 <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
 <plist version="1.0">
 <dict>
 	<key>NSAllowsArbitraryLoads</key>
 	<true/>
 </dict>
 </plist>
`

# 列表
增加listview 控件的使用

# 数据库
增加对sqlite 的支持



