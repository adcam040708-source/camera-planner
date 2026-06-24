# Camera Planner - 3D机位规划工具

基于Web的3D机位规划与虚拟取景器预览工具，用于影视预制作阶段的机位设计与监看。

## 功能

- 3D场景渲染与自由导航（Three.js）
- 虚拟摄影机摆放与多机位管理
- 真实镜头参数模拟（焦距、传感器尺寸、光圈、FOV）
- 取景器实时预览（三分线、Action Safe、Title Safe叠加）
- 7种摄影机传感器预设（全画幅、ARRI Alexa 35、RED V-Raptor、Sony FX6等）
- 焦距范围 8mm-300mm 实时调节
- 视锥体可视化（每个机位的FOV范围直观可见）
- 快捷键支持（1-9切换机位、V取景器、A添加机位）

## 使用

直接在浏览器中打开 `index.html` 即可运行，无需安装任何依赖。

```bash
# 或者用任意本地服务器
npx serve .
# 或
python -m http.server 8080
```

## 技术栈

- [Three.js](https://threejs.org/) r128 - 3D渲染引擎
- [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) - 场景导航
- 纯HTML/CSS/JS，无构建工具依赖

## 路线图

- [ ] 接入3D扫描重建的场景数据（LiDAR / Photogrammetry / 3DGS）
- [ ] 景深虚化后处理效果
- [ ] 镜头畸变与暗角模拟
- [ ] 机位时间线与运动路径规划
- [ ] 多用户协作
- [ ] 导出机位图（PDF/PNG）

## License

MIT
