/* Global Variables */
var ageSelected = null, typeSelected = null, equipSelected = null;
var type = null, muscles = [], age = null, equip = null;
var currentMatches; 
var removedAge=[];
var  removedMuscles=[]; 
var removedEquip=[];


var json_text = '{"Workout": "Jumping Jacks", "Age": [5, 64], "Duration": "100 total", "Muscle Groups": ["calves","glutes","quads","hamstrings", "calves"], "Type": "cardio", "Equipment": "none"}\n{"Workout": "Mountain Climber", "Age": [5, 64], "Duration": "30 seconds to 2 minutes", "Muscle Groups": ["calves","glutes","quads","hamstrings", "abs"], "Type": "cardio", "Equipment": "none"}\n{"Workout": "Bike Riding", "Age": [5, 64], "Duration": "variable", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "home"}\n{"Workout": "Skateboarding", "Age": [5, 99], "Duration": "variable", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "home"}\n{"Workout": "Crunches", "Age": [5, 64], "Duration": "5 sets of 30", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Squats", "Age": [5, 99], "Duration": "3 sets of 15", "Muscle Groups": ["calves", "quads","hamstrings","glutes"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Leg Press", "Age": [14, 64], "Duration": "3 sets of 15", "Muscle Groups": ["quads", "glutes"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Lunge", "Age": [5, 99], "Duration": "3 sets of 12", "Muscle Groups": ["glutes", "calves"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Deadlift", "Age": [14, 64], "Duration": "3 sets of 8", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Leg Extention", "Age": [5, 64], "Duration": "4 sets of 8", "Muscle Groups": ["calves"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Leg Curl", "Age": [5, 64], "Duration": "5 sets of 13", "Muscle Groups": ["calves", "hamstrings"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Standing Calf Raise", "Age": [0, 99], "Duration": "6 sets of 8", "Muscle Groups": ["calves"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Bench Press", "Age": [14, 64], "Duration": "7 sets of 8", "Muscle Groups": ["chest", "biceps"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Chest Fly", "Age": [0, 99], "Duration": "8 sets of 8", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Push-Ups", "Age": [5, 99], "Duration": "3 sets of 15", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Pull-Down", "Age": [0, 99], "Duration": "3 sets of 10", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Pullups", "Age": [0, 99], "Duration": "3 sets of 10", "Muscle Groups": ["biceps", "abs"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Shoulder Press", "Age": [0, 99], "Duration": "3 sets of 10", "Muscle Groups": ["shoulders"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Shoulder Fly", "Age": [0, 99], "Duration": "3 sets of 10", "Muscle Groups": ["shoulders"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Jump Rope", "Age": [0, 99], "Duration": "5 minutes", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "home"}\n{"Workout": "Burpees", "Age": [0, 99], "Duration": "10 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Jogging", "Age": [0, 99], "Duration": "10 minutes", "Muscle Groups": ["calves", "quads", "calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "none"}\n{"Workout": "Plank", "Age": [0, 99], "Duration": "3 sets of 30 seconds", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Lateral Raise", "Age": [0, 99], "Duration": "4 sets of 12 reps", "Muscle Groups": ["shoulders"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Dips", "Age": [0, 99], "Duration": "4 sets of 12 reps", "Muscle Groups": ["triceps"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Tricep Overhead Extention", "Age": [0, 99], "Duration": "4 sets of 12 reps", "Muscle Groups": ["triceps"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Bicep Curl", "Age": [0, 99], "Duration": "4 sets of 12 reps", "Muscle Groups": ["biceps"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Russian Twist", "Age": [0, 99], "Duration": "4 sets of 12 reps", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Leg Raise", "Age": [0, 99], "Duration": "4 sets of 12 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Back Extention", "Age": [0, 99], "Duration": "4 sets of 12 reps", "Muscle Groups": ["hamstrings", "glutes"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Dumbbell Bench Press", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Incline Dumbbell Bench Press", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest", "shoulders"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Decline Barbell Bench Press", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Flat Chest Press Machine", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Incline Dumbbell Bench Press", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest", "shoulders"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Decline Barbell Bench Press", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Decline Chest Press Machine", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Flat Dumbbell Flyes", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Incline Dumbbell Flyes", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Decline Dumbbell Flyes", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Pec Deck Machine", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Cable Crossovers/Cable Flyes", "Age": [14, 65], "Duration": "4 sets of 10 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Seated Shoulder Press", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps for 4 minutes", "Muscle Groups": ["shoulders"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Seated Front Shoulder Raises", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["shoulders"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Seated Chest Press", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Modified Push-Ups", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["chest"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Seated Bicep Curls", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["biceps"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Isolated Tricep Extensions", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["triceps"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Seated Knee-to-Chest", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Extended Leg Raises", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Leg Kicks", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Modified Planks", "Age": [65, 99], "Duration": "2-3 sets of 30 seconds", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Tummy Twists", "Age": [65, 99], "Duration": "2-3 sets of 8-10 reps", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Chair Squat", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Modified Squats", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Knee Extensions", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Heel Slides", "Age": [65, 99], "Duration": "2-3 sets of 8-12 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Seated Calf Raises", "Age": [65, 99], "Duration": "3 sets of 20-30 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Bent Over Barbell Rows", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "T-Bar Rows", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Seated Cable Rows", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Inverted Rows", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back", "biceps"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Dumbbell Rows", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Chin-ups", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back", "biceps"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Tiptoe Walk", "Age": [5, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Jumping Calf Raise", "Age": [5, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Single-Leg Calf Raise", "Age": [5, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Hole Calf Raise", "Age": [5, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Agility Ladder", "Age": [5, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Bosu Ball Squat", "Age": [5, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Romanian Deadlifts", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["hamstrings", "back"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Straight Leg Deadlifts", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["hamstrings", "back"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Box Jumps", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["glutes", "calves", "calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "home"}\n{"Workout": "Plank Ski Hops", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "none"}\n{"Workout": "Lunge Jumps", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves", "glutes", "calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "none"}\n{"Workout": "Inchworm Crawl", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["abs"], "Type": "cardio", "Equipment": "none"}\n{"Workout": "Plank Jacks", "Age": [14, 65], "Duration": "2-3 sets of 20-30 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings", "calves"], "Type": "cardio", "Equipment": "none"}\n{"Workout": "Step up", "Age": [65, 99], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "home"}\n{"Workout": "Hammer curl", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["biceps"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Sprints", "Age": [14, 65], "Duration": "2 rounds of 200 yards", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "none"}\n{"Workout": "Good morning", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Supermans", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Kettlebell Swing", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["shoulders"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Kettleball Squat", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["calves","glutes","quads","hamstrings"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Swimming", "Age": [14, 65], "Duration": "2 rounds of 200 yards", "Muscle Groups": ["shoulders", "back", "triceps", "calves","glutes","quads","hamstrings"], "Type": "cardio", "Equipment": "gym"}\n{"Workout": "Handstand pushup", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["shoulders", "triceps"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Starfish", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "V-sit", "Age": [14, 65], "Duration": "2 rounds of 30 seconds", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "none"}\n{"Workout": "Tricep Cable pulldown", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["triceps"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Overhead cable tricep extension", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["triceps"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Straight-arm pulldown", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Bent over tricep extension", "Age": [14, 65], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["triceps"], "Type": "muscle", "Equipment": "home"}\n{"Workout": "Wide-grip pullup", "Age": [14, 66], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["back"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Close-grip bench press", "Age": [14, 67], "Duration": "3 sets of 10-12 reps", "Muscle Groups": ["triceps", "shoulders"], "Type": "muscle", "Equipment": "gym"}\n{"Workout": "Knee plank", "Age": [65, 99], "Duration": "2-3 sets of 30 seconds", "Muscle Groups": ["abs"], "Type": "muscle", "Equipment": "none"}'

var unParsed = json_text.split("\n");
var workouts = [];
var temp;
for(var i = 0; i < unParsed.length; i++){
    temp = JSON.parse(unParsed[i]);
    workouts.push(temp);
}
console.log(workouts.length);
/* Functions */
function updateCounter() {
    matching = [];
    console.log("Age selected: " + ageSelected + "\nType selected: " + typeSelected + "\nEquip: " + equipSelected + "\nmuscles: " + muscles);
    if(typeSelected != null){
        console.log("Entered type");
        for(var i = 0; i < workouts.length; i++){
            if(typeSelected == workouts[i].Type){
                matching.push(workouts[i]);
            }  
        }
    }
    else{
        console.log("Set matching to workouts");
        for(var i = 0; i < workouts.length; i++){
            matching.push(workouts[i]);
        }
        //matching=workouts;
    }
    if(ageSelected != null){
        console.log("Entered age");
        for(var i = 0; i < matching.length; i++){
        
            if(ageSelected[0] <matching[i].Age[0] || ageSelected[1] >matching[i].Age[1]){
            //console.log("removed a val" + ageSelected[0] + "," + workouts[i].Age[0]);
            removedAge.push(matching[i]);
            matching.splice(i,1);
            i--;
            
            }  
        }
    }
    if(muscles.length){
        console.log("Entered muscles");
        for(var i = 0; i < matching.length; i++){
            var flag = false;
            //console.log(i + "," + matching.length);
            for(var j = 0; j < muscles.length; j++){
            
                for (var k = 0; k < matching[i]["Muscle Groups"].length; k++) {
                    //console.log(matching[i]["Muscle Groups"]);
                    if(muscles[j]==matching[i]["Muscle Groups"][k]){
                        //console.log("flagged true");
                        flag = true;
                    
                    }   
                }
            
            
            }
            if(!flag){
                removedMuscles.push(matching[i]);
                matching.splice(i,1);
                i--;
                
            }
        //console.log(i + "," + matching.length);
        }
    }
    if(equipSelected != null){
        console.log("Entered equip");
        for(var i = 0; i < matching.length; i++){
            if(equipSelected !== matching[i].Equipment){
                removedEquip.push(matching[i]);
                console.log(matching[i]);
                matching.splice(i,1);
                i--;
            }  
        }
    }
    document.querySelector("#counter-number").textContent = matching.length;
    console.log("Matching length: " + matching.length + "\nWhat's displayed: " + document.querySelector("#counter-number").textContent + "\nWorkouts length: " + workouts.length);
    return matching;
}

/* Button Event Handler */
var buttons = document.querySelector('.btn');
$(":button").click(function (event) {
    event.preventDefault();
    var selection = event.target;
    var parentElem = selection.parentElement;
    if (parentElem.id === "type") {
        
        // Modify active buttons.
            if ($(selection).hasClass("active")) {
                // Remove the muscle that user wants to deselect.
                typeSelected = null;
                $(selection).removeClass("active");
            } else {
                // Add the muscle that user wants to select.
                $(parentElem).children(".active").removeClass("active");
                typeSelected = selection.textContent.toLowerCase();
                $(selection).addClass("active");
            }
        
    } else if (parentElem.id === "age") {
        
        // Modify active buttons.
        
               // Add the muscle that user wants to select.
               $(parentElem).children(".active").removeClass("active");
               $(selection).addClass("active");
              if (selection.textContent === "65+") {
                ageSelected = [65, 99];
            } else if (selection.textContent === "5-13") {
                ageSelected = [5, 13];
            } else {
                ageSelected = [14, 65];
            }
            console.log(ageSelected);
           
    } else if (parentElem.id === "muscle") {
        if ($(selection).hasClass("active")) {
            muscles = muscles.filter(function(value, index, arr) {
                return value != selection.textContent.toLowerCase();
            }); // Remove the muscle that user wants to deselect.
            $(selection).removeClass("active");
        } else {
            // Add the muscle that user wants to select.
            muscles.push(selection.textContent.toLowerCase());
            $(selection).addClass("active");
            console.log(muscles);
        }
    } else if (parentElem.id === "equipment") {
            if ($(selection).hasClass("active")) {
                // Remove the muscle that user wants to deselect.
                equipSelected = null;
                $(selection).removeClass("active");
            } else {
                // Add the muscle that user wants to select.
                $(parentElem).children(".active").removeClass("active");
                equipSelected = selection.textContent.toLowerCase();
                $(selection).addClass("active");
     
            }
           
    }
    currentMatches = updateCounter();

  
});
document.querySelector(".submit").addEventListener('click', function(){
    var num;
    var tempString;
    var tempList = currentMatches;
    var row = document.querySelectorAll(".newRow");
    for (var j = 0; j < row.length; j++) {
        document.getElementById('table').removeChild(row[j]);
    }
    for(var i = 0; tempList.length >= 0 && i<7 ; i ++){
        num = Math.floor(Math.random()*tempList.length);
        var new_row = document.createElement('ul');
        $(new_row).addClass("list-group list-group-horizontal newRow");
        var listItem1 = document.createElement('li');
        listItem1.textContent = tempList[num].Workout;
        var listItem2 = document.createElement('li');
        listItem2.textContent = tempList[num].Duration;
        var listItem3 = document.createElement('li');
        var link = document.createElement('a');
        link.href = "https://www.google.com/search?-b-1-d&q="+ tempList[num].Workout.replace(/ /g, "+");
        link.textContent = 'Google Search';
        link.target = "_blank";
        listItem3.appendChild(link);
        $(listItem1).addClass("list-group-item newItem");
        $(listItem2).addClass( "list-group-item newItem");
        $(listItem3).addClass( "list-group-item newItem");
        new_row.appendChild(listItem1);
        new_row.appendChild(listItem2);
        new_row.appendChild(listItem3);
        document.querySelector("#table").appendChild(new_row);
        document.querySelector("#table").appendChild(document.createElement('br'));
        tempList.splice(num,1);
    }

});
