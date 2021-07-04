export default (successCallback, errorCallback = () => {}, options = {}) => {
  if (!window.navigator.geolocation) {
    alert("Update your browser!");
  } else {
    window.navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
  }
};
