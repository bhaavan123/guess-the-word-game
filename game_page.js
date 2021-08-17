player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML= player1_name+": ";
document.getElementById("player2_name").innerHTML= player2_name+": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();

charAt1=word.charAt(1);

divide_2=Math.floor(word.lenght/2);
charAt2=word.charAt(divide_2);

lenght_1=word.lenght-1;
charAt3=word.charAt(lenght_1);

remove_1=word.replace(charAt1,"_");
remove_2=remove_1.replace(charAt2,"_");
remove_3=remove_2.replace(charAt3,"_");

question_word="<h4 id='word_display'>Q. "+remove_3+"</h4>";
input_box="<br> Answer: <input id='input_check_box' type='text'>";
check_button="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";

row=question_word + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

question_turn="player_1";
answer_turn="player_2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if(answer==word){
    if(answer_turn=="player_1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;  
    }
    }

    if(question_turn=="player_1"){
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question turn- "+player2_name;
    }
    else{
        question_turn="player_1";
        document.getElementsById("player_question").innerHTML="Question turn- "+player1_name;
    }

    if(answer_turn=="player_1"){
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer turn- "+player2_name;
    }
    else{
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer turn- "+player1_name;
    }

    document.getElementById("output").innerHTML="";
}