var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  var pwd = document.getElementById("pw").value.toLowerCase();
  pwd = unreal(pwd);
  var is_present = false;
  for (x=0; x < wordsList.length; x++)
  {
    if (pwd == wordsList[x])
    {
      is_present = true;
    }
  }
  if (is_present == true)
  {
    document.getElementById("results").innerHTML = "This is a weak password.";
  }
  else
  {
      document.getElementById("results").innerHTML = "This a strong password.";
  }
}

function unreal(pwd){
  pwd = pwd.replace(/1/g,"i");
  pwd = pwd.replace(/2/g,"z");
  pwd = pwd.replace(/3/g,"e");
  pwd = pwd.replace(/4/g,"a");
  pwd = pwd.replace(/5/g,"s");
  pwd = pwd.replace(/6/g,"g");
  pwd = pwd.replace(/7/g,"t");
  pwd = pwd.replace(/8/g,"b");
  pwd = pwd.replace(/0/g,"o");
  return pwd;
}
