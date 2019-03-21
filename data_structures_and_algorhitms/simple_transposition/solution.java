public class Kata {
    public static String simpleTransposition(String text) {
        String s1 = "";
        String s2 = "";

        for (int i = 0; i < text.length(); i++) {
            if (i % 2 == 0) {
                s1 += text.charAt(i);
            } else {
                s2 += text.charAt(i);
            }
        }

        return s1 + s2;
    }
}
