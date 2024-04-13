function censor() {
    let censorWords = [];
    return function (str1, str2="") {
        if (!str2){
            for (let word of censorWords){
                str1 = str1.replaceAll(word[0], word[1]);
            }
            return str1;
        }else {
            censorWords.push([str1, str2]);
        }
    }
}

const changeScene = censor();
changeScene("PHP", "JS");
changeScene("backend", "frontend");

console.log(changeScene("PHP is the most popular programming language for backend web-development"));


