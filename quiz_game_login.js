function addUser(){
    
    player_name_1 = document.getElementById("player1_name_input").value;

    localStorage.setItem("player1_name_input", user_name_1);

    player_name_2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("player2_name_input", user_name_2);

    window.location = "quiz_game_page.html";
}
