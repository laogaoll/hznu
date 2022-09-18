var mode = process.env.REACT_APP_MY_VAR
var API_SERVER = 'http://124.220.20.66:8000'
//var API_SERVER = 'http://localhost:8000';
if (mode === 'development') {
   //API_SERVER = 'http://localhost:8080'
 // API_SERVER = 'https://mqcai.top'
 API_SERVER = 'http://124.220.20.66:8000'
}

if (mode === 'production') {
  // API_SERVER = 'http://121.40.124.170'
 // API_SERVER = 'https://mqcai.top'
 API_SERVER = 'http://124.220.20.66:8000'
  
}

export { API_SERVER }
