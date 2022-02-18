function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

$(document).ready(function(){
    // Get value on button click and show alert
    $("#button").click(function(){
        let to = $("#to").val();
        let random_short = makeid(6);
        let url = `https://redirector.regulad.xyz/${random_short}`;

        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.send(to);
         
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                alert(`Ready! Use ${url} to access this link.`);
            }
        };
    });
});
