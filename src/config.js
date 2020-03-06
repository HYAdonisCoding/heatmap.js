/*
 * @Author: Adam
 * @Date: 2020-03-06 10:09:57
 * @LastEditTime: 2020-03-06 16:28:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /heatmap.js/src/config.js
 */
// defaultGradient: { 0.25: "rgb(0,0,255)", 0.55: "rgb(0,255,0)", 0.85: "yellow", 1.0: "rgb(255,0,0)"},
// Heatmap Config stores default values and will be merged with instance config
var HeatmapConfig = {
    defaultRadius: 40,
    defaultRenderer: 'canvas2d',
    defaultGradient: { 0.17: "rgb(50,255,63)", 0.34: "rgb(221,230,25)", 0.5: "", 0.67: "", 0.84: "", 1.0: "rgb(106,0,26)" },
    defaultMaxOpacity: 1,
    defaultMinOpacity: 0,
    defaultBlur: .85,
    defaultXField: 'x',
    defaultYField: 'y',
    defaultValueField: 'value',
    plugins: {}
};