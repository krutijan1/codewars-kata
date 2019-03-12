public class DnaStrand {
    public static String makeComplement(String dna) {
        StringBuilder dnaBuilder = new StringBuilder(dna);

        for (int i = 0; i < dna.length(); i++) {
            char current = dna.charAt(i);
            if (current == 'A') {
                dnaBuilder.setCharAt(i, 'T');
            } else if (current == 'T') {
                dnaBuilder.setCharAt(i, 'A');
            } else if (current == 'C') {
                dnaBuilder.setCharAt(i, 'G');
            } else if (current == 'G') {
                dnaBuilder.setCharAt(i, 'C');
            }
        }

        return dnaBuilder.toString();
    }
}
