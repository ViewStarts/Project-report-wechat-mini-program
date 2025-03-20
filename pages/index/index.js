// pages/index/index.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ["抽2返1", "抽3返2", "最新和平", "红包", "大包天", "小包天", "278.4", "测试id", "测试bigint", "测试最新一天", "和平精英", "测试", "测试名称2", "成品单价", "按照比例", "ff", "折算159", "测试222", "王者荣耀", "和平精英", "+ 自定义"],
    showPicker: false,  // 控制弹窗显示
    currentDate: new Date().getTime(),  // 当前时间（时间戳格式）
    selectedTime: ""  ,  // 格式化后的时间字符串
     // 其他数据...
     maxDate: new Date(2030, 0, 1).getTime()  // 2030-01-01 的时间戳
  },

  
   // 点击单元格触发
   onOpenPicker() {
    this.setData({ showPicker: true });
  },

  // 时间选择确认
  onConfirm(e) {
    const selectedTimestamp = e.detail;
    const selectedTime = this.formatDate(selectedTimestamp);
    
    this.setData({
      showPicker: false,
      currentDate: selectedTimestamp,
      selectedTime: selectedTime
    });
  },

  // 时间选择取消
  onCancel() {
    this.setData({ showPicker: false });
  },

  // 格式化时间（示例：2023-10-01 14:30）
  formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  },

  
  handleClick(e) {
    const value = e.currentTarget.dataset.value;
    const index = e.currentTarget.dataset.index;

    // 设置选中状态
    this.setData({
      activeIndex: index
    });

    Toast({
      message: `${value}`,
      position: 'middle',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})