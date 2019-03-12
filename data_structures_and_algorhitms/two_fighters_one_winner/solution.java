public class Kata {
    public static String declareWinner(Fighter fighter1, Fighter fighter2, String firstAttacker) {
        boolean endOfGame = false;

        Fighter attacker = fighter1.name == firstAttacker ? fighter1 : fighter2;
        Fighter receiver = fighter1.name == firstAttacker ? fighter2 : fighter1;

        while (!endOfGame) {
            if (receiver.health - attacker.damagePerAttack <= 0) {
                break;
            }
            receiver.health -= attacker.damagePerAttack;
            Fighter tmp = attacker;
            attacker = receiver;
            receiver = tmp;
        }

        return attacker.name;
    }
}
