export default {
  //获取url地址参数
  getUrlParams: function (url) {
    var params = {}
    var arr = url.split('?')
    if (arr.length <= 1) {
      return params
    }
    arr = arr[1].split('&')
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=')
      params[a[0]] = a[1]
    }
    return params
  },

  remToPx(rem) {
    let fontSize = document.documentElement.style.fontSize;
    return Math.floor(rem * fontSize.replace("px", ""));
  },

  // 字符串时间转换成时间戳,并计算距离当前的时间（天数）
  changeTimeStr: function (timeStr) {
    timeStr = timeStr.substring(0, 19)
    let date = timeStr.replace(/-/g, '/')

    let endTime = new Date(date).getTime()
    let beginTime = new Date().getTime()

    let timeDiff = endTime - beginTime
    let dayDiff = Math.floor(timeDiff / (24 * 3600 * 1000))
    return dayDiff
  },

  // YYYY-MM-DD转化成英文显示
  changeTimeToEn: function (timeStr) {
    let date = new Date(timeStr.replace(/-/g, '/'));
    let dateString = date.toDateString();
    let dateArray = dateString.split(' ');
    return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
  },

  // 强制保留2位小数，如：2，会在2后面补上00.即2.00
  toDecimal2: function (x) {
    let floatNum = parseFloat(x);
    if (isNaN(floatNum)) {
      return false;
    }
    let f = Math.round(x * 100) / 100;
    let s = f.toString();
    let rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + 2) {
      s += '0';
    }
    return s;
  },
  NumberCheck(num) {
    let str = num.toString();
    str = str.replace(/[\u4E00-\u9FA5]/g, ''); //去除中文
    str = str.replace(/[a-zA-Z]/g, ''); //去除字母
    let reg = /^[1-9]\d{0,7}(\.\d{0,2})?$|^0(\.\d{0,2})?$/;

    if (!reg.test(str)) {
      str = str.substring(0, str.length - 1);
    }

    if (str.indexOf(".") < 0 && str != "") { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 

      str = parseFloat(str);

    }
    return str;
  },
  setCookie: function (key, value) {
    document.cookie = key + '=' + value;
  },
  getCookie: function (key) {
    let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
    if (arr != null) return unescape(arr[2]);
    return null;
  },
  getObject: function (array, key) {
    var o;
    array.some(function iter(a) {
      if (a[key]) {
        o = a;
        return true;
      }
      return Array.isArray(a.children) && a.children.some(iter);
    });
    return o;
  },
  caseLineConfig(_self, xAxis, y_case) {
    return {
      title: {
        text: _self.$t('累计确诊'),
        textStyle: {
          color: "#4f7af3"
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { //坐标轴指示器，坐标轴触发有效，
          type: 'line', //默认为line，line直线，cross十字准星，shadow阴影
          crossStyle: {
            color: '#fff'
          }
        }
      },
      legend: {
        data: [
          _self.$t('累计确诊')
        ],
        top: '25'
        // left: '0'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: xAxis,
        name: _self.$t('日期')
      }],
      yAxis: [{
        type: 'value',
        name: _self.$t('人')
      }],
      series: [{
        name: _self.$t('累计确诊'),
        type: 'line',
        smooth: true,
        data: y_case,
        itemStyle: {
          normal: {
            color: "#f7ab1a", //改变折线点的颜色
            lineStyle: {
              color: "#f7ab1a" //改变折线颜色
            }
          }
        }
      }]
    }
  },
  deathLineConfig(_self, xAxis, y_death) {
    return {
      title: {
        text: _self.$t('累计死亡'),
        textStyle: {
          color: "#4f7af3"
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [
          _self.$t('累计死亡')
        ],
        top: '25'
        // left: '0'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: xAxis,
        name: _self.$t('日期')
      }],
      yAxis: [{
        type: 'value',
        name: _self.$t('人')
      }],
      series: [{
        name: _self.$t('累计死亡'),
        type: 'line',
        smooth: true,
        data: y_death,
        itemStyle: {
          normal: {
            color: "#666", //改变折线点的颜色
            lineStyle: {
              color: "#666" //改变折线颜色
            }
          }
        }
      }]
    }
  },
  cureLineConfig(_self, xAxis, y_cure) {
    return {
      title: {
        text: _self.$t('累计治愈'),
        textStyle: {
          color: "#4f7af3"
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [
          _self.$t('累计治愈')
        ],
        top: '25'
        // left: '0'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: xAxis,
        name: _self.$t('日期')
      }],
      yAxis: [{
        type: 'value',
        name: _self.$t('人')
      }],
      series: [{
        name: _self.$t('累计治愈'),
        type: 'line',
        smooth: true,
        data: y_cure,
        itemStyle: {
          normal: {
            color: '#178b50', //改变折线点的颜色
            lineStyle: {
              color: '#178b50' //改变折线颜色
            }
          }
        }
      }]
    }
  },
  newLineConfig(_self, xAxis, y_new) {
    return {
      title: {
        text: _self.$t('新增'),
        textStyle: {
          color: "#4f7af3"
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [
          _self.$t('新增')
        ],
        top: '25'
        // left: '0'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: xAxis,
        name: _self.$t('日期')
      }],
      yAxis: [{
        type: 'value',
        name: _self.$t('人')
      }],
      series: [{
        name: _self.$t('新增'),
        type: 'line',
        smooth: true,
        data: y_new,
        itemStyle: {
          normal: {
            color: '#d81d1b', //改变折线点的颜色
            lineStyle: {
              color: '#d81d1b' //改变折线颜色
            }
          }
        }
      }]
    }
  },
  currentLineConfig(_self, xAxis, y_current) {
    return {
      title: {
        text: _self.$t('现存确诊'),
        textStyle: {
          color: "#4f7af3"
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [
          _self.$t('现存确诊')
        ],
        top: '25'
        // left: '0'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: xAxis,
        name: _self.$t('日期')
      }],
      yAxis: [{
        type: 'value',
        name: _self.$t('人')
      }],
      series: [{
        name: _self.$t('现存确诊'),
        type: 'line',
        smooth: true,
        data: y_current,
        itemStyle: {
          normal: {
            color: '#d81d1b',
            lineStyle: {
              color: '#d81d1b'
            }
          }
        }
      }]
    }
  },
  newMapConfig(_self, data, common, goDatail) {
    const option = {
      title: {
        text: _self.$t('疫情状况'),
        x: "left", //居中
        textStyle: {
          color: "#4f7af3"
        }
      },
      series: [{
        type: "map", //告诉echarts 渲染地图
        mapType: "Brazil", // 自定义扩展图表类型
        roam: true,
        // 图形上的文本标签
        label: {
          show: false, //是否显示各个省份名称
          color: "#000", //文字颜色
          fontSize: common.remToPx(0.75) //文字大小
        },
        itemStyle: {
          //地图区域多边形 图形样式
          borderColor: "#ccc", //地图边框颜色
          borderWidth: 1, //地图边框大小
          areaColor: "#fff" //区域的背景颜色
        },
        emphasis: {
          //高亮状态下的多边形和标签样式
          //控制地图划过的颜色
          label: {
            color: "#000", //移入后显示颜色
            fontSize: common.remToPx(0.75)
          },
          //控制鼠标滑过时的高亮样式
          itemStyle: {
            //移入后颜色和边框
            areaColor: "yellow", //区域颜色
            borderWidth: "yellow" //边框颜色
          }
        },
        data: data,
        zoom: 1 //控制地图的大小
      }],
      visualMap: [{
        type: "piecewise",
        show: true,
        splitNumber: 6,
        pieces: [{
            min: 10000
          }, // 不指定 max，表示 max 为无限大（Infinity）。
          {
            min: 1000,
            max: 9999
          },
          {
            min: 100,
            max: 999
          },
          {
            min: 10,
            max: 99
          },
          {
            min: 1,
            max: 9
          },
          {
            min: 0,
            max: 0
          }
        ],
        //align:'right' // 默认是left
        inRange: {
          //定义选中范围中的视觉元素
          // symbol: "rect",
          color: ["#fff", "#ffaa85", "#ff7b69", "#cc2929", "#8c0d0d", "#660208"] //颜色可以实时在地图上取
        },
        itemHeight: 10, //显示框的宽高
        itemWidth: 10
      }],
      tooltip: {
        //提示信息
        tigger: "item",
        //地图:{a}系列名称,{b}区域名称,{c}合并数据,{d}无
        // formatter: `{b}<br />${_self.$t('现存')}: {c}`,
        formatter: function (params) {
          return (
            `
              <div class="tooltip-wrap">
                <div class="content">
                  <p>${params.data.name}</p>
                  <p>${_self.$t('确诊')}: ${params.data.value}</p>
                  <p>${_self.$t('死亡')}: ${params.data.death}</p>
                </div>
                <div class="btn">
                  <el-button class="more" type="text" @click="${goDatail(params.name)}">${_self.$t('详情')}
                    <i class="shopIcon shop-jiantouyou"></i>
                  </el-button>
                </div>
              </div>
            `
          );
        },
        textStyle: {
          fontSize: common.remToPx(0.75)
        },
        enterable: true,
        position: function (pos, params, dom, rect, size) {
          // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
          var obj = {
            top: 60
          };
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
        }
        /* position: function (point) {
          return [point[0] + 5, point[1] + 5];
        } */
      },
      toolbox: {
        //工具栏 下载 刷新
        show: true,
        showTitle: true,
        orient: "horizontal", //工具栏 icon的布局朝向
        left: "right", //右上角
        top: "top",
        feature: {
          restore: {
            title: _self.$t('还原')
          }, // 还原
        }
      }
    };

    return option;
  },
  caseMapConfig(_self, data, common, goDatail) {
    const option = {
      title: {
        text: _self.$t('疫情状况'),
        x: "left", //居中
        textStyle: {
          color: "#4f7af3"
        }
      },
      series: [{
        type: "map", //告诉echarts 渲染地图
        mapType: "Brazil", // 自定义扩展图表类型
        roam: true,
        // 图形上的文本标签
        label: {
          show: false, //是否显示各个省份名称
          color: "#000", //文字颜色
          fontSize: common.remToPx(0.75) //文字大小
        },
        itemStyle: {
          //地图区域多边形 图形样式
          borderColor: "#ccc", //地图边框颜色
          borderWidth: 1, //地图边框大小
          areaColor: "#fff" //区域的背景颜色
        },
        emphasis: {
          //高亮状态下的多边形和标签样式
          //控制地图划过的颜色
          label: {
            color: "#000", //移入后显示颜色
            fontSize: common.remToPx(0.75)
          },
          //控制鼠标滑过时的高亮样式
          itemStyle: {
            //移入后颜色和边框
            areaColor: "yellow", //区域颜色
            borderWidth: "yellow" //边框颜色
          }
        },
        data: data,
        zoom: 1 //控制地图的大小
      }],
      visualMap: [{
        type: "piecewise",
        show: true,
        splitNumber: 6,
        pieces: [{
            min: 10000
          }, // 不指定 max，表示 max 为无限大（Infinity）。
          {
            min: 1000,
            max: 9999
          },
          {
            min: 100,
            max: 999
          },
          {
            min: 10,
            max: 99
          },
          {
            min: 1,
            max: 9
          },
          {
            min: 0,
            max: 0
          }
        ],
        //align:'right' // 默认是left
        inRange: {
          //定义选中范围中的视觉元素
          // symbol: "rect",
          color: ["#fff", "#ffaa85", "#ff7b69", "#cc2929", "#8c0d0d", "#660208"] //颜色可以实时在地图上取
        },
        itemHeight: 10, //显示框的宽高
        itemWidth: 10
      }],
      tooltip: {
        //提示信息
        tigger: "item",
        //地图:{a}系列名称,{b}区域名称,{c}合并数据,{d}无
        // formatter: `{b}<br />${_self.$t('现存')}: {c}`,
        formatter: function (params) {
          return (
            `
              <div class="tooltip-wrap">
                <div class="content">
                  <p>${params.data.name}</p>
                  <p>${_self.$t('确诊')}: ${params.data.value}</p>
                  <p>${_self.$t('死亡')}: ${params.data.death}</p>
                </div>
                <div class="btn">
                  <el-button class="more" type="text" @click="${goDatail(params.name)}">${_self.$t('详情')}
                    <i class="shopIcon shop-jiantouyou"></i>
                  </el-button>
                </div>
              </div>
            `
          );
        },
        textStyle: {
          fontSize: common.remToPx(0.75)
        },
        enterable: true,
        position: function (pos, params, dom, rect, size) {
          // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
          var obj = {
            top: 60
          };
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
        }
        // position: function (point) {
        //   return [point[0] + 5, point[1] + 5];
        // }
      },
      toolbox: {
        //工具栏 下载 刷新
        show: true,
        showTitle: true,
        orient: "horizontal", //工具栏 icon的布局朝向
        left: "right", //右上角
        top: "top",
        feature: {
          restore: {
            title: _self.$t('还原')
          }, // 还原
        }
      }
    };

    return option;
  }
}