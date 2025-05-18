class Goal {
    public name: string;
    public isAchieved: boolean;

    constructor(name: string, isAchieved: boolean = false) {
        this.name = name;
        this.isAchieved = isAchieved;
    }
  
    achieve() {
        this.isAchieved = true;
        console.log(`${this.name} has been achieved.`);
    }
}
  
class Stone {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
  
    throwAt(goals: Goal[]) {
        console.log(`Throwing ${this.name} at goals...`);
        goals.forEach(goal => goal.achieve());
    }
}
  
// metaphor usage
const goal1 = new Goal("Complete report");
const goal2 = new Goal("Clean inbox");

const singleEffort = new Stone("Focused Morning Session");

singleEffort.throwAt([goal1, goal2]);
  