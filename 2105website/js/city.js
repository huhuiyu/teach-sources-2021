let spIp = document.getElementById('spIp');
let spCity = document.getElementById('spCity');
let spWeather = document.getElementById('spWeather');

// 获取用户ip所在城市的信息
function queryIpCity() {
  ajax('/api/queryIpCtiyInfo', { ip: '' }, (data) => {
    console.log('ip所在城市信息：', data);
    // 如果成功就显示ip和地址信息
    if (data.success) {
      // ip和城市信息
      let city = data.data;
      spIp.innerHTML = city.ip;
      spCity.innerHTML =
        city.nation + city.province + city.city + city.district;
      // 查询天气信息
      queryWeather(city.adcode);
    }
  });
}

queryIpCity();

// 获取城市的天气信息
function queryWeather(adcode) {
  ajax('/api/amap/weatherInfo', { adcode: adcode }, (data) => {
    console.log('城市的天气信息：', data);
    // 实时天气信息
    let live = data.data.lives[0];
    console.log('实时天气信息：', live);
    spWeather.innerHTML =
      live.weather +
      ' ' +
      live.temperature +
      '° ' +
      live.winddirection +
      '风' +
      live.windpower;
  });
}
