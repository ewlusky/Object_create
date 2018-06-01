const Navy = Object.create({}, {
    business: {
        enumerable: true,
        value: "United States Navy"
    },
    role: {
        enumerable: true,
        value: "Cryptologic Technician: Interpretive"
    },
    employmentStart: {
        enumerable: true,
        value: "30MAY2009"
    },
    employmentEnd: {
        enumerable: true,
        value: "31MAY2015"
    },
    briefsAttended: {
        enumerable: true,
        value: 3854
    },
    briefsNecessary: {
        enumerable: true,
        value: 8
    }
})

const Vet = Object.create({}, {
    business: {
        enumerable: true,
        value: "Veterinary Hospital"
    },
    role: {
        enumerable: true,
        value: "Veterinary Technician"
    },
    employmentStart: {
        enumerable: true,
        value: "06OCT2008"
    },
    employmentEnd: {
        enumerable: true,
        value: "15DEC2008"
    },
    scratches: {
        enumerable: true,
        value: 866
    },
    bites: {
        enumerable: true,
        value: 6
    }
    
})

function newJob(values) {
    const newJob = Object.create({}, {
        business: {
            enumerable: true,
            value: values[0]
        },
        role: {
            enumerable: true,
            value: values[1]
        },
        employmentStart: {
            enumerable: true,
            value: values[2]
        },
        employmentEnd: {
            enumerable: true,
            value: values[3]
        }
             
    })
    return newJob
}

const jobies = ["Self Employed", "Dog Sitter", "Some time", "Some later time"];
const dogSit = newJob(jobies);
const jobs = [Navy, Vet, dogSit];
const main = document.querySelector("#main");

function writeStuff(jobbos){
    jobbos.forEach((job) => {
        const art = document.createElement("article");
        art.setAttribute("id", job.business);
        for (key in job) {
            //console.log(key);
            art.appendChild(document.createTextNode(key.toUpperCase() + ": " + job[key]));
            art.appendChild(document.createElement("br"));
        }
        main.appendChild(art);
        main.appendChild(document.createElement("br"));
    });
}

writeStuff(jobs);
