class Lambdasian{
    constructor(a){
        this.name = a.name;
        this.age = a.age;
        this.location = a.location;
    }

    speak(){
        return "Hello my name is " + this.name + " I am from " + this.location;
    }
}

class Instructor extends Lambdasian{
    constructor(a){
        super(a);
        this.specialty = a.specialty;
        this.favLanguage = a.favLanguage;
        this.catchPhrase = a.catchPhrase;
    }

    demo(subject){
        return "Today we are learning about " + subject;
    }

    grade(student, subject){
        return student.name + " recives a perfect score on " + subject;
    }

    afterExam(student){
        student.grade = Math.floor((Math.random() * 101));
    }
}

class Student extends Lambdasian{
    constructor(a){
        super(a);
        this.previousBackground = a.previousBackground;
        this.className = a.className;
        this.favSubject = a.favSubject;
        this.grade = 70;
    }

    listSubjects(){
        let l = "Loving ";
        for(let i = 0 ; i < this.favSubject.length ; i++)
            l += this.favSubject[i] + ", ";
        return l;
    }

    PRAssignment(subject){
        return this.name + " has submitted a PR for " + subject;
    }

    sprintChallenge(subject){
        return this.name + " has begun sprint challenge on " + subject;
    }

    graduate(){
        if(this.grade >= 70){
            return this.name + " has graduated with " + this.grade;
        }else{
            return this.name + " has filled with " + this.grade;
        }
    }
}

class ProjectManager extends Instructor{
    constructor(a){
        super(a);
        this.gradClassName = a.gradClassName;
        this.favInstructor = a.favInstructor;
    }

    standUp(channel){
        return this.name + " announces to " + channel + ", @channel standy times!";
    }

    debugsCode(student, subject){
        return this.name + " debugs " + student.name + "'s code on " + subject;
    }
}