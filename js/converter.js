var kwBhpConversion = 0.745699872;

function convert(power) {
  var pw;
  if(power == "kw") {
    pw = document.getElementById('kw').value / kwBhpConversion;
    document.getElementById('hp').value = Math.round(pw);
  } else {
    pw = (document.getElementById('hp').value) * kwBhpConversion;
    document.getElementById('kw').value = Math.round(pw);
  }
}