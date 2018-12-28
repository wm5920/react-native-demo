# 参考
https://reactnative.cn/docs/getting-started.html
# 公共设置
```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

npm install -g yarn react-native-cli

yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

后续安装node,xcode,android studio（android-studio-ide-181.5014246-mac.dmg 正式版）,android sdk tools（android-sdk_r24.4.macosx.zip，注意不要选类似3859397的版本）

# 安卓特有
```
React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。

具体的做法是把下面的命令加入到~/.bash_profile文件中：

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator

保存退出，使用下面命令使变量生效
source .bash_profile

```

# 运行

```
cd AwesomeProject
运行ios模拟器
react-native run-ios
运行安卓模拟器
react-native run-android
```

# 注意
gradle不要手残随便升级


