text = "if man was meant to stay on the ground god would have given us roots";

function square(str){
    str = str.replaceAll(" ", "");
    for(let i = 13 ; i > 1 ; i--){
        if(str.length % i == 0){
            var rows = i;
            var cols = str.length / i;
            i = 0;
        }else if(i == 2){
            var rows = 5;
            var cols = Math.floor(str.length / 5);
            var rest = str.length % 5;
        }
    }

    var words = [];
    var iterator = 0;
    for(let i = 0 ; i < rows ; i++){
        nueva = "";
        for(let j = 0 ; j < cols ; j++){
            if(str[iterator] != ""){
                nueva += str[iterator];
                iterator++;
            }else
                iterator++;
        }
        words.push(nueva);
    }

    if(rest){
        nueva = "";
        for(let i = 0 ; i < rest ; i++){
            if(str[iterator] != ""){
                nueva += str[iterator];
                iterator++;
            }else
                iterator++;
        }
        words.push(nueva);
    }

    return words;
}

function code(words){
    coded_words = [];

    for(let i = 0 ; i < words[0].length ; i++){
        nueva = "";
        for(let j = 0 ; j < words.length ; j++){
            nueva += words[j][i];
        }
        coded_words.push(nueva);
    }

    for(let i = 0 ; i < coded_words.length ; i++){
        console.log(coded_words[i]);
    }
}

code(square(text));