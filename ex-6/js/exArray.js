const subjects = [
    "Math",
    "OOP",
    "French",
    "Grammars",
    "Cybersecurity",
    "CS 101",
    "Algebra",
    "Physics",
    "Spanish",
    "Chinese"
]


console.log(subjects.length)
/* Classic for*/
document.write(`<h1>Classic for</h1>`)
for (let i = 0; i <= subjects.length - 1; i++) {
    document.write(`<br> <div style="background-color: blue; width: 20%; height: 30px; color: white;text-align: center; border-radius: 20px; padding: 10px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">${subjects[i]}
        </div>`);
}

/* For in */
document.write(`<br><h2>For in</h2>`)

for (let subject in subjects) {
    document.write(`<br> <div style="background-color: blue; width: 20%; height: 30px; color: white;text-align: center; border-radius: 20px; padding: 10px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">${subjects[subject]}
        </div>`)
}

/* For of */
document.write(`<br><h3>For of</h3
    >`)

for (let subject of subjects) {
    document.write(`<br> <div style="background-color: blue; width: 20%; height: 30px; color: white;text-align: center; border-radius: 20px; padding: 10px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">${subject}
        </div>`)
}
