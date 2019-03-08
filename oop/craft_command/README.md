The Command Design Pattern can be used, for example, in the StarCraft game to queue actions.

The pattern consists in isolating a command logic in a class, so it can be:

queued: you can queue actions to move a probe to different locations
undone: you can tell a probe to build something and then undo the action stopping it.
validated: you can check if the action can be executed or not, you cannot move to a location if now there is a building over it

***Your Task***
Complete the code so that a Probe can move and gather with a queue of commands.

In this kata there are no limitations for the move command
The probe is only allowed to gather if the current amount of minerals is 0
Probe should only queue commands without running them
Move will set the probe's position to x, y
Gather will increment the probe's minerals by 5

```javascript
class Probe {
  constructor() {
    this.commands = [];
    this.position = { x: 0, y: 0 };
    this.minerals = 0;
  }
  move(x, y) { this.commands.push(...); }
  gather() { this.commands.push(...); }
}

class MoveCommand {
  constructor(unit, x, y) { }
  execute() { }
  canExecute() { }
}

class GatherCommand {
  constructor(unit) { }
  execute() { }
  canExecute() { }
}

Notes
In C# you have these pre-loaded:

public interface ICommand {
    void Execute();
    bool CanExecute();
}

public interface IUnit {
    int Minerals { get; set; }
    Point Position { get; set; }

    void Move(int x, int y);
    void Gather();
}

public class Point {
    public int X { get; set; }
    public int Y { get; set; }
}
```
