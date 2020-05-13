export default {
  setCurrentPackageLinkConpon(state, arr) {
    state.currentPackageLinkConpon = arr;
  },
  setPackageSelected(state, obj) {
    state.packageSelected = obj;
  },
  setPackageSelectedIndex(state, str) {
    state.packageSelectedIndex = str;
  },
  setPayWay(state, str) {
    state.payWay = str;
  },
  setAddressInfo(state, obj) {
    state.addressInfo = obj;
  }
};
