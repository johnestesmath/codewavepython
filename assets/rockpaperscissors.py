import random

throws=("rock","paper","scissors")
game_on = True #This Boolean keeps the game running

def rock_paper_scissors(a, b):
    if a == b:
        print("It's a tie!")
    elif a%3 == b%3 + 1:
        print("You win!")
    else:
        print("Bot wins!")

while game_on == True:
    choice = False
    
    while choice == False:
        player_choice = input("What do you throw? 1 rock, 2 paper, 3 scissors ")
        if player_choice not in ("1","2","3"):
            print("Sorry. Please pick 1, 2, 3.")
        else:
            player_throw = int(player_choice) - 1
            choice = True

    bot_throw = random.randint(0,2) # Bot picks 1, 2, 3 randomly

    input("Bot has decided. You ready? [Press Enter] ")

    print("1... ")
    print("2... ")
    print("3... Shoot!")

    print("You throw " + throws[player_throw])
    print("Bot throws " + throws[bot_throw])
    rock_paper_scissors(player_throw, bot_throw)

    play_again = input("Do you want to play again? Y/N ")
    if play_again.upper() == "N":
        print("See you later!")
        game_on = False